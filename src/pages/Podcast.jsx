import { Radio, Bot, Layers, GraduationCap } from "lucide-react";

const ACCENT = "var(--color-podcast)";

const pillars = [
  {
    icon: Bot,
    title: "AI-only, start to finish",
    body: "Researched, written, hosted, and produced entirely by AI — no human host reading a script, no editorial team behind the scenes.",
  },
  {
    icon: GraduationCap,
    title: "Advanced, on purpose",
    body: "Built for people who already know the basics and want the real depth — not a beginner-friendly explainer format.",
  },
  {
    icon: Layers,
    title: "Every division, one feed",
    body: "Markets one week, Space the next, Law the week after — the same breadth as the site itself, in audio form.",
  },
];

export default function Podcast() {
  return (
    <>
      <section
        className="border-b border-[var(--color-line)] px-5 py-20 sm:px-8 sm:py-28"
        style={{
          background: `radial-gradient(1100px 420px at 50% -10%, color-mix(in srgb, ${ACCENT} 16%, transparent), transparent)`,
        }}
      >
        <div className="mx-auto max-w-4xl">
          <div
            className="mb-5 inline-block rounded-full border px-3 py-1 font-mono text-[11px] uppercase tracking-[0.2em]"
            style={{ borderColor: ACCENT, color: ACCENT }}
          >
            HCM Podcast
          </div>
          <h1 className="font-display text-balance text-4xl font-bold leading-[1.05] sm:text-6xl">
            HCM Podcast
          </h1>
          <p className="mt-3 font-display text-xl italic" style={{ color: ACCENT }}>
            It's your frequency.
          </p>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-[var(--color-ink-dim)] sm:text-lg">
            An AI-only show — hosted, researched, and produced entirely by
            AI, going deep on whatever HCM division is worth talking about
            that week.
          </p>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-ink-dim)]">
            What it is
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {pillars.map((p) => (
              <div
                key={p.title}
                className="rounded-2xl border border-[var(--color-line)] bg-[var(--color-surface)] p-6"
              >
                <p.icon size={22} style={{ color: ACCENT }} />
                <h3 className="mt-4 font-display text-lg font-bold">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--color-ink-dim)]">
                  {p.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-[var(--color-line)] px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-3xl rounded-2xl border border-[var(--color-line)] bg-[var(--color-surface)] p-8 sm:p-10">
          <Radio size={22} style={{ color: ACCENT }} />
          <h2 className="mt-4 font-display text-xl font-bold sm:text-2xl">
            Coming soon
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-[var(--color-ink-dim)] sm:text-base">
            No episodes yet — the format is being worked out before anything
            gets published. When it launches, expect the same standard as
            the rest of HCM: advanced, specific, and built entirely by AI.
          </p>
        </div>
      </section>
    </>
  );
}
