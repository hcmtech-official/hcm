import { BookOpenCheck, Film, Sparkle, Smile } from "lucide-react";
import DivisionHero from "../components/DivisionHero";
import AppBadges from "../components/AppBadges";
import { divisions } from "../data/divisions";

const d = divisions.find((x) => x.key === "kids");

const approach = [
  {
    icon: BookOpenCheck,
    title: "Story first, lesson second",
    body: "The same way kids learned about honesty from Aesop, not a textbook — AI concepts wrapped in a character and a plot, not a diagram.",
  },
  {
    icon: Film,
    title: "Animation alongside the page",
    body: "Every book pairs with a short animated version, so a kid who wants to watch and a kid who wants to read both get the same story.",
  },
  {
    icon: Smile,
    title: "Age-appropriate, not dumbed down",
    body: "Concepts like 'the computer is guessing, not knowing' or 'it learned from examples, like you do' — real ideas, told simply.",
  },
  {
    icon: Sparkle,
    title: "Curiosity over caution",
    body: "The goal isn't to make kids wary of AI — it's to make them understand it well enough to ask good questions about it.",
  },
];

export default function Kids() {
  return (
    <>
      <DivisionHero
        code={d.code}
        name={d.name}
        tagline={d.tagline}
        description="Traditional books taught kids about the world through stories. HCM Kids is doing the same thing for AI — books and animation that teach it the way kids actually learn best."
        color={d.color}
      />

      <section className="px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-ink-dim)]">
            The approach
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {approach.map((a) => (
              <div
                key={a.title}
                className="rounded-2xl border border-[var(--color-line)] bg-[var(--color-surface)] p-6"
              >
                <a.icon size={22} style={{ color: d.color }} />
                <h3 className="mt-4 font-display text-lg font-bold">{a.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--color-ink-dim)]">
                  {a.body}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-6 font-mono text-[11px] text-[var(--color-ink-dim)]">
            First titles and animated shorts are in development — nothing
            published here yet.
          </p>
        </div>
      </section>
      <AppBadges color={d.color} />
    </>
  );
}
