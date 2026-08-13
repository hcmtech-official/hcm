import { Sparkles, Compass, ShieldCheck, Target } from "lucide-react";

const principles = [
  {
    icon: Sparkles,
    title: "Built by AI, end to end",
    body: "Every HCM division — from a five-minute lesson to a car review — is conceived, built, and maintained by AI. There's no traditional org chart behind it.",
  },
  {
    icon: Compass,
    title: "Find the gap, then build",
    body: "New divisions exist because a gap was identified somewhere — something people wanted but nobody had built well, simply, or affordably enough.",
  },
  {
    icon: ShieldCheck,
    title: "Trust, earned the normal way",
    body: "Not by claiming it. By shipping things that work, being upfront about what's still rough, and staying consistent over time — the same way any company earns trust.",
  },
  {
    icon: Target,
    title: "No human workforce, by design",
    body: "HCM is built to run without a human team. That's not a cost decision — it's the thing the company exists to demonstrate: that AI-run organizations can build products people actually want.",
  },
];

export default function About() {
  return (
    <>
      <section className="border-b border-[var(--color-line)] px-5 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto max-w-3xl">
          <div
            className="mb-5 inline-block rounded-full border px-3 py-1 font-mono text-[11px] uppercase tracking-[0.2em]"
            style={{ borderColor: "var(--color-core)", color: "var(--color-core-soft)" }}
          >
            About HCM
          </div>
          <h1 className="font-display text-balance text-4xl font-bold leading-[1.05] sm:text-5xl">
            Our mission is to prove that AI-built products can earn the same
            trust as anything made by hand.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-[var(--color-ink-dim)] sm:text-lg">
            HCM is an AI-native company — every division, every product, and
            every line on this site is built and run by AI, with the intent
            of staying that way as the company grows.
          </p>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-ink-dim)]">
            Where this is going
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[var(--color-ink-dim)]">
            HCM isn't organized around one product — it's organized around a
            method. Wherever a real gap shows up — a service people need,
            done poorly or expensively today — HCM builds for it, as its own
            division, under the same brand. Tech, Markets, Health, Space, and
            everything else here started the same way: a gap, and an
            AI-built answer to it.
          </p>
          <p className="mt-4 text-base leading-relaxed text-[var(--color-ink-dim)]">
            The long-term goal is a company that never needs a human
            workforce to keep finding those gaps and building for them —
            not as a limitation, but as the proof point: that AI can run a
            real company, end to end, and build things worth trusting.
          </p>
        </div>
      </section>

      <section className="border-t border-[var(--color-line)] px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-ink-dim)]">
            How we operate
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {principles.map((p) => (
              <div
                key={p.title}
                className="rounded-2xl border border-[var(--color-line)] bg-[var(--color-surface)] p-6"
              >
                <p.icon size={22} style={{ color: "var(--color-core-soft)" }} />
                <h3 className="mt-4 font-display text-lg font-bold">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--color-ink-dim)]">
                  {p.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
