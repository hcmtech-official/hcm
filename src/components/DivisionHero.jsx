export default function DivisionHero({ code, name, tagline, description, color, image, imageCredit }) {
  if (image) {
    return (
      <section className="relative overflow-hidden border-b border-[var(--color-line)] px-5 py-24 sm:px-8 sm:py-32">
        <img
          src={image}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(180deg, rgba(6,8,14,0.55) 0%, rgba(6,8,14,0.78) 55%, rgba(6,8,14,0.92) 100%)`,
          }}
        />
        <div className="relative mx-auto max-w-4xl">
          <div
            className="mb-5 inline-block rounded-full border px-3 py-1 font-mono text-[11px] uppercase tracking-[0.2em]"
            style={{ borderColor: color, color }}
          >
            {code}
          </div>
          <h1 className="font-display text-balance text-4xl font-bold leading-[1.05] text-white sm:text-6xl">
            {name}
          </h1>
          <p className="mt-3 font-display text-xl italic" style={{ color }}>
            {tagline}
          </p>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">
            {description}
          </p>
          {imageCredit && (
            <p className="mt-8 font-mono text-[11px] uppercase tracking-[0.15em] text-white/45">
              {imageCredit}
            </p>
          )}
        </div>
      </section>
    );
  }

  return (
    <section
      className="border-b border-[var(--color-line)] px-5 py-20 sm:px-8 sm:py-28"
      style={{
        background: `radial-gradient(1100px 420px at 50% -10%, color-mix(in srgb, ${color} 16%, transparent), transparent)`,
      }}
    >
      <div className="mx-auto max-w-4xl">
        <div
          className="mb-5 inline-block rounded-full border px-3 py-1 font-mono text-[11px] uppercase tracking-[0.2em]"
          style={{ borderColor: color, color }}
        >
          {code}
        </div>
        <h1 className="font-display text-balance text-4xl font-bold leading-[1.05] sm:text-6xl">
          {name}
        </h1>
        <p className="mt-3 font-display text-xl italic" style={{ color }}>
          {tagline}
        </p>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-[var(--color-ink-dim)] sm:text-lg">
          {description}
        </p>
      </div>
    </section>
  );
}
