const locations = [
  { name: "Sydney", region: "Australia", x: 92.0, y: 68.8 },
  { name: "Singapore", region: "Singapore", x: 78.8, y: 49.3 },
  { name: "Tokyo", region: "Japan", x: 88.8, y: 30.2 },
  { name: "Mumbai", region: "India", x: 70.2, y: 39.4 },
  { name: "New York", region: "United States", x: 29.4, y: 27.4 },
  { name: "London", region: "United Kingdom", x: 50.0, y: 21.4 },
];

export default function WorldMap({ color = "var(--color-core)" }) {
  return (
    <div className="relative aspect-[940/477] w-full overflow-hidden rounded-2xl border border-[var(--color-line)] bg-black">
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(900px 500px at 50% 40%, color-mix(in srgb, var(--color-core) 18%, transparent), transparent)",
        }}
      />
      <img
        src="https://commons.wikimedia.org/wiki/Special:FilePath/BlankMap-World-Equirectangular.svg?width=1600"
        alt="World map showing HCM locations"
        className="absolute inset-0 h-full w-full object-cover"
        style={{
          filter: "invert(1) grayscale(1) brightness(0.42) contrast(1.6)",
          mixBlendMode: "screen",
        }}
      />
      {/* faint scanlines for a sci-fi console feel */}
      <div
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "repeating-linear-gradient(to bottom, transparent, transparent 3px, rgba(255,255,255,0.06) 3px, rgba(255,255,255,0.06) 4px)",
        }}
      />

      {locations.map((loc) => (
        <div
          key={loc.name}
          className="absolute -translate-x-1/2 -translate-y-1/2"
          style={{ left: `${loc.x}%`, top: `${loc.y}%` }}
        >
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
              {loc.name}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
