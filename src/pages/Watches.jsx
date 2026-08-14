import { Watch, Cpu, HeartPulse, Mic } from "lucide-react";
import DivisionHero from "../components/DivisionHero";
import AppBadges from "../components/AppBadges";
import { divisions } from "../data/divisions";

const d = divisions.find((x) => x.key === "watches");

const designs = [
  {
    name: "HCM Halo",
    inspired: "Inspired by the classic dive tool-watch — bold bezel, high-contrast markers.",
    note: "The bezel and ticks stay — but the hands are gone. An open status halo shows what the AI is doing at a glance, and the center mark is HCM's own orbit, not a pair of hands.",
    img: "./watch-concepts/concept-a-halo.svg",
  },
  {
    name: "HCM Chrono",
    inspired: "Inspired by the classic chronograph — a serious instrument with sub-dials.",
    note: "Three sub-dials remain, exactly where a chronograph's would be — but each one is a live glance: a voice waveform, battery, and messages, instead of stopwatch counters.",
    img: "./watch-concepts/concept-b-chrono.svg",
  },
  {
    name: "HCM Porthole",
    inspired: "Inspired by the classic integrated-bracelet dress watch — porthole case, horizontal ribbing.",
    note: "Same octagonal case and ribbed dial texture that made that silhouette iconic — reimagined with the ribbing as a backdrop for a voice waveform instead of hour markers.",
    img: "./watch-concepts/concept-c-porthole.svg",
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
        description="Swiss watchmaking set the silhouettes that still define what a great watch looks like. HCM Watches takes three of those silhouettes and asks what they'd look like built for an AI, not a mechanical movement."
        color={d.color}
      />

      <section className="px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-ink-dim)]">
            Three original concepts
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[var(--color-ink-dim)]">
            Each one borrows the shape and structure of a classic watch
            archetype, not a specific brand or model — then replaces
            everything a mechanical movement used to do with something
            an AI actually needs to show.
          </p>
          <div className="mt-6 grid gap-6 sm:grid-cols-3">
            {designs.map((w) => (
              <div
                key={w.name}
                className="overflow-hidden rounded-2xl border border-[var(--color-line)] bg-[var(--color-surface)]"
              >
                <img src={w.img} alt={w.name} loading="lazy" className="aspect-square w-full object-cover" style={{ background: "#101319" }} />
                <div className="p-5">
                  <h3 className="font-display text-lg font-bold">{w.name}</h3>
                  <p
                    className="mt-1 font-mono text-[10px] uppercase tracking-[0.15em]"
                    style={{ color: d.color }}
                  >
                    {w.inspired}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--color-ink-dim)]">
                    {w.note}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-6 font-mono text-[11px] text-[var(--color-ink-dim)]">
            Original concept designs — not photos of, or renders based on,
            any real watch brand or model.
          </p>
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
            Concept stage — no product exists yet.
          </p>
        </div>
      </section>
      <AppBadges color={d.color} />
    </>
  );
}
