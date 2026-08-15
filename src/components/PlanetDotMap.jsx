export default function PlanetDotMap({ image, color, x, y, label, region }) {
  return (
    <div className="relative aspect-[940/477] w-full overflow-hidden rounded-2xl border border-[var(--color-line)] bg-black">
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(700px 700px at ${x}% ${y}%, color-mix(in srgb, ${color} 30%, transparent), transparent)`,
        }}
      />
      <img
        src={image}
        alt={label}
        className="absolute inset-0 h-full w-full object-cover"
        style={{
          filter: "grayscale(0.6) brightness(0.4) contrast(1.35)",
          mixBlendMode: "screen",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(160deg, color-mix(in srgb, ${color} 26%, transparent), transparent 60%)`,
          mixBlendMode: "overlay",
        }}
      />
      {/* scanlines for the console feel */}
      <div
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "repeating-linear-gradient(to bottom, transparent, transparent 3px, rgba(255,255,255,0.06) 3px, rgba(255,255,255,0.06) 4px)",
        }}
      />

      <div className="absolute -translate-x-1/2 -translate-y-1/2" style={{ left: `${x}%`, top: `${y}%` }}>
        <span
          className="absolute left-1/2 top-1/2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{ background: color, animation: "map-pulse 2.2s ease-out infinite" }}
        />
        <span
          className="relative block h-2.5 w-2.5 rounded-full"
          style={{ background: color, boxShadow: `0 0 10px 2px ${color}` }}
        />
        <div className="absolute left-1/2 top-4 -translate-x-1/2 whitespace-nowrap text-center">
          <div className="font-mono text-[10px] font-medium uppercase tracking-[0.1em] text-white">
            {label}
          </div>
          <div className="font-mono text-[9px] text-white/60">{region}</div>
        </div>
      </div>
    </div>
  );
}
