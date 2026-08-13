import { Search, PawPrint, Palette, BookHeart, ShieldCheck } from "lucide-react";
import DivisionHero from "../components/DivisionHero";
import AppBadges from "../components/AppBadges";
import { divisions } from "../data/divisions";

const d = divisions.find((x) => x.key === "toys");

const concepts = [
  {
    icon: PawPrint,
    name: "HCM Pal",
    body: "A screenless plush companion that talks and remembers — no app, no subscription, and no camera, so parents aren't trading a toy for a data pipeline.",
  },
  {
    icon: Palette,
    name: "HCM Sketch",
    body: "A drawing buddy that turns a kid's scribble into a short animated story about it — the drawing stays theirs, the AI just brings it to life for a minute.",
  },
  {
    icon: BookHeart,
    name: "HCM Storyteller",
    body: "A bedtime companion that reads real books aloud and improvises follow-up stories in the same voice and world, when a kid isn't ready for the book to end.",
  },
];

export default function Toys() {
  return (
    <>
      <DivisionHero
        code={d.code}
        name={d.name}
        tagline={d.tagline}
        description="AI toys are one of the fastest-growing categories in the industry right now. HCM Toys is where we research that space properly before pitching anything."
        color={d.color}
      />

      <section className="px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-3xl rounded-2xl border border-[var(--color-line)] bg-[var(--color-surface)] p-8 sm:p-10">
          <Search size={22} style={{ color: d.color }} />
          <h2 className="mt-4 font-display text-xl font-bold sm:text-2xl">
            What the research says
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-[var(--color-ink-dim)] sm:text-base">
            AI toys are shifting from static electronics to genuine
            companions — plush animals, robot pets, and drawing tools that
            adapt to a specific kid instead of repeating the same script.
            The category everyone agrees on: screen-free, voice-first
            toys that parents trust are the ones actually winning, not the
            ones packed with the most features.
          </p>
        </div>
      </section>

      <section className="border-t border-[var(--color-line)] px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-ink-dim)]">
            Sample pitches
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {concepts.map((c) => (
              <div
                key={c.name}
                className="rounded-2xl border border-[var(--color-line)] bg-[var(--color-surface)] p-6"
              >
                <c.icon size={22} style={{ color: d.color }} />
                <h3 className="mt-4 font-display text-lg font-bold">{c.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--color-ink-dim)]">
                  {c.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-[var(--color-line)] px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-3xl rounded-2xl border border-[var(--color-line)] bg-[var(--color-surface)] p-6">
          <div className="flex items-start gap-3">
            <ShieldCheck size={18} style={{ color: d.color }} className="mt-0.5 shrink-0" />
            <p className="text-sm text-[var(--color-ink-dim)]">
              Every concept above is pitch-stage — nothing built or sold
              yet. Any real toy would need to be designed around child
              data-privacy rules (like COPPA) from day one, not bolted on
              afterward.
            </p>
          </div>
        </div>
      </section>
      <AppBadges color={d.color} />
    </>
  );
}
