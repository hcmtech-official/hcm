import { Watch, Cpu, HeartPulse, Mic } from "lucide-react";
import DivisionHero from "../components/DivisionHero";
import AppBadges from "../components/AppBadges";
import { divisions } from "../data/divisions";

const d = divisions.find((x) => x.key === "watches");

const wm = (name) =>
  `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(name)}?width=900`;

const inspiration = [
  {
    name: "Rolex Submariner",
    note: "The reference point for a tool watch — everything after it gets compared back to this.",
    img: wm("Rolex Submariner watch 16613.JPG"),
    credit: "Wikimedia Commons",
    creditHref: "https://commons.wikimedia.org/wiki/File:Rolex_Submariner_watch_16613.JPG",
  },
  {
    name: "Omega Speedmaster",
    note: "Proof that a watch can be a genuine instrument and still look this good on a wrist.",
    img: wm("Omega speedmaster.jpg"),
    credit: "Wikimedia Commons",
    creditHref: "https://commons.wikimedia.org/wiki/File:Omega_speedmaster.jpg",
  },
  {
    name: "Patek Philippe Nautilus",
    note: "The case shape we keep coming back to when we sketch what an HCM watch should feel like.",
    img: wm("Patek-Philippe-Nautilus-5711.jpg"),
    credit: "Wikimedia Commons",
    creditHref: "https://commons.wikimedia.org/wiki/File:Patek-Philippe-Nautilus-5711.jpg",
  },
];

const concept = [
  {
    icon: Cpu,
    title: "AI on the wrist, not just notifications",
    body: "Not a screen full of app icons — an assistant that actually understands what you're doing and surfaces the one thing that matters, when it matters.",
  },
  {
    icon: HeartPulse,
    title: "Health that explains itself",
    body: "Vitals tracked continuously, but read back to you in plain language instead of a dashboard of numbers you have to interpret yourself.",
  },
  {
    icon: Mic,
    title: "Voice-first, screen-second",
    body: "Built to be spoken to first and glanced at second — the display exists for the moments voice genuinely isn't practical.",
  },
];

export default function Watches() {
  return (
    <>
      <DivisionHero
        code={d.code}
        name={d.name}
        tagline={d.tagline}
        description="Swiss watchmaking sets the bar for what a watch should feel like on the wrist. HCM Watches is exploring what an AI-native watch could be — without giving up any of that."
        color={d.color}
      />

      <section className="px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-ink-dim)]">
            The benchmark
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[var(--color-ink-dim)]">
            Before designing anything new, it's worth looking at what
            already set the standard.
          </p>
          <div className="mt-6 grid gap-6 sm:grid-cols-3">
            {inspiration.map((w) => (
              <div
                key={w.name}
                className="overflow-hidden rounded-2xl border border-[var(--color-line)] bg-[var(--color-surface)]"
              >
                <img src={w.img} alt={w.name} loading="lazy" className="h-52 w-full object-cover" />
                <div className="p-5">
                  <h3 className="font-display text-lg font-bold">{w.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--color-ink-dim)]">
                    {w.note}
                  </p>
                  <a
                    href={w.creditHref}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-3 block font-mono text-[10px] text-[var(--color-ink-dim)] hover:underline"
                  >
                    Photo: {w.credit}, CC BY-SA
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-[var(--color-line)] px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="mb-6 flex items-center gap-3">
            <Watch size={22} style={{ color: d.color }} />
            <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-ink-dim)]">
              The HCM AI Watch — a concept
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {concept.map((c) => (
              <div
                key={c.title}
                className="rounded-2xl border border-[var(--color-line)] bg-[var(--color-surface)] p-6"
              >
                <c.icon size={22} style={{ color: d.color }} />
                <h3 className="mt-4 font-display text-lg font-bold">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--color-ink-dim)]">
                  {c.body}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-6 font-mono text-[11px] text-[var(--color-ink-dim)]">
            Concept stage — no product exists yet. The photos above are
            references for the design language, not renders of an HCM
            product.
          </p>
        </div>
      </section>
      <AppBadges color={d.color} />
    </>
  );
}
