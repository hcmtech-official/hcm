import { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

// Converts lat/lon (degrees) to a position on a sphere of the given radius,
// matching the UV orientation Three.js's default SphereGeometry uses for
// an equirectangular texture loaded via TextureLoader.
function latLonToVector3(lat, lon, radius) {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lon + 180) * (Math.PI / 180);
  return new THREE.Vector3(
    -radius * Math.sin(phi) * Math.cos(theta),
    radius * Math.cos(phi),
    radius * Math.sin(phi) * Math.sin(theta)
  );
}

// Titan has no real global surface photo — its surface is permanently
// hidden under thick haze. This generates a texture matching how it
// actually looks from outside in real Cassini imagery: a hazy amber
// globe with soft latitudinal banding and a darker north polar hood,
// rather than either a flat color or a fabricated "surface."
function buildTitanTexture() {
  const w = 1024, h = 512;
  const canvas = document.createElement("canvas");
  canvas.width = w;
  canvas.height = h;
  const ctx = canvas.getContext("2d");

  const bands = [
    [0.0, "#E8A55C"],
    [0.18, "#E2A052"],
    [0.34, "#D89240"],
    [0.5, "#D48A38"],
    [0.66, "#CE7F30"],
    [0.82, "#B9702A"],
    [0.92, "#8C5A28"],
    [1.0, "#6E4722"],
  ];
  const grad = ctx.createLinearGradient(0, 0, 0, h);
  bands.forEach(([stop, c]) => grad.addColorStop(stop, c));
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, w, h);

  // soft horizontal haze streaks
  ctx.globalAlpha = 0.14;
  for (let i = 0; i < 60; i++) {
    const y = Math.random() * h;
    const bandH = 4 + Math.random() * 10;
    ctx.fillStyle = Math.random() > 0.5 ? "#FFE7B8" : "#7A5220";
    ctx.fillRect(0, y, w, bandH);
  }
  ctx.globalAlpha = 1;

  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

export default function Globe({ textureUrl, color = "#5B57FF", proceduralTexture, markers = [] }) {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const width = mount.clientWidth;
    const height = mount.clientWidth; // square

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0, 3.1);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mount.appendChild(renderer.domElement);

    // lighting
    scene.add(new THREE.AmbientLight(0xffffff, 0.55));
    const sun = new THREE.DirectionalLight(0xffffff, 1.1);
    sun.position.set(4, 2, 4);
    scene.add(sun);

    // globe
    const radius = 1;
    const geometry = new THREE.SphereGeometry(radius, 64, 64);
    let material;
    if (proceduralTexture === "titan") {
      material = new THREE.MeshStandardMaterial({ map: buildTitanTexture(), roughness: 0.85 });
    } else {
      material = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.95 });
      new THREE.TextureLoader().load(textureUrl, (tex) => {
        tex.colorSpace = THREE.SRGBColorSpace;
        material.map = tex;
        material.needsUpdate = true;
      });
    }
    const globe = new THREE.Mesh(geometry, material);
    scene.add(globe);

    // faint atmosphere glow, tinted to the division color
    const glowGeo = new THREE.SphereGeometry(radius * 1.04, 48, 48);
    const glowMat = new THREE.MeshBasicMaterial({
      color: new THREE.Color(color),
      transparent: true,
      opacity: 0.12,
      side: THREE.BackSide,
    });
    scene.add(new THREE.Mesh(glowGeo, glowMat));

    // markers
    const markerGroup = new THREE.Group();
    const pulseMeshes = [];
    markers.forEach((m) => {
      const pos = latLonToVector3(m.lat, m.lon, radius * 1.01);
      const dotGeo = new THREE.SphereGeometry(0.016, 12, 12);
      const dotMat = new THREE.MeshBasicMaterial({ color: new THREE.Color(color) });
      const dot = new THREE.Mesh(dotGeo, dotMat);
      dot.position.copy(pos);
      markerGroup.add(dot);

      const pulseGeo = new THREE.SphereGeometry(0.016, 12, 12);
      const pulseMat = new THREE.MeshBasicMaterial({
        color: new THREE.Color(color),
        transparent: true,
        opacity: 0.5,
      });
      const pulse = new THREE.Mesh(pulseGeo, pulseMat);
      pulse.position.copy(pos);
      markerGroup.add(pulse);
      pulseMeshes.push(pulse);
    });
    scene.add(markerGroup);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableZoom = false;
    controls.enablePan = false;
    controls.enableDamping = true;
    controls.dampingFactor = 0.08;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 0.7;
    controls.rotateSpeed = 0.6;

    let raf;
    const clock = new THREE.Clock();
    function animate() {
      raf = requestAnimationFrame(animate);
      const t = clock.getElapsedTime();
      pulseMeshes.forEach((p, i) => {
        const s = 1 + 0.9 * ((Math.sin(t * 1.6 + i) + 1) / 2);
        p.scale.setScalar(s);
        p.material.opacity = 0.5 * (1 - (s - 1) / 1.8);
      });
      controls.update();
      renderer.render(scene, camera);
    }
    animate();

    function handleResize() {
      const w = mount.clientWidth;
      camera.aspect = 1;
      camera.updateProjectionMatrix();
      renderer.setSize(w, w);
    }
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", handleResize);
      controls.dispose();
      renderer.dispose();
      geometry.dispose();
      material.dispose();
      glowGeo.dispose();
      glowMat.dispose();
      if (mount.contains(renderer.domElement)) mount.removeChild(renderer.domElement);
    };
  }, [textureUrl, color, proceduralTexture, markers]);

  return (
    <div
      ref={mountRef}
      className="aspect-square w-full cursor-grab overflow-hidden rounded-2xl border border-[var(--color-line)] bg-black active:cursor-grabbing"
    />
  );
}
