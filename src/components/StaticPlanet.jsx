export default function StaticPlanet({ image, color, x, y, label }) {
  return (
    <div className="relative aspect-square w-full max-w-md mx-auto overflow-hidden rounded-2xl border border-[var(--color-line)] bg-black">
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(circle at 50% 50%, color-mix(in srgb, ${color} 20%, transparent), transparent 70%)`,
        }}
      />
      <img
        src={image}
        alt={label}
        className="absolute inset-0 h-full w-full object-contain p-4"
        loading="lazy"
      />
      {x != null && y != null && (
        <div className="absolute -translate-x-1/2 -translate-y-1/2" style={{ left: `${x}%`, top: `${y}%` }}>
          <span
            className="absolute left-1/2 top-1/2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full"
            style={{ background: color, animation: "map-pulse 2.2s ease-out infinite" }}
          />
          <span
            className="relative block h-2.5 w-2.5 rounded-full"
            style={{ background: color, boxShadow: `0 0 10px 2px ${color}` }}
          />
          {label && (
            <div className="absolute left-1/2 top-4 -translate-x-1/2 whitespace-nowrap rounded-md bg-black/70 px-2 py-1">
              <span className="font-mono text-[10px] font-medium uppercase tracking-[0.08em] text-white">
                {label}
              </span>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
