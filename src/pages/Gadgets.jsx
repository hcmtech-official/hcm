import { Glasses, CircleDot, Pin, Speaker, Target } from "lucide-react";
import DivisionHero from "../components/DivisionHero";
import AppBadges from "../components/AppBadges";
import { divisions } from "../data/divisions";

const d = divisions.find((x) => x.key === "gadgets");

const concepts = [
  {
    icon: Glasses,
    name: "HCM Glasses",
    body: "Everyday-looking glasses with a voice-first AI assistant — ask what you're looking at, get live translation in your ear, no screen required.",
  },
  {
    icon: CircleDot,
    name: "HCM Ring",
    body: "Sleep, heart rate, and recovery tracked passively on one finger — health data without another screen demanding attention.",
  },
  {
    icon: Pin,
    name: "HCM Clip",
    body: "A collar clip that listens to meetings and conversations you choose to record, turning them into summaries and action items automatically.",
  },
  {
    icon: Speaker,
    name: "HCM Hub",
    body: "A small home device that processes voice requests on-device rather than in the cloud — faster, and your audio never leaves the room.",
  },
];

export default function Gadgets() {
  return (
    <>
      <DivisionHero
        code={d.code}
        name={d.name}
        tagline={d.tagline}
        description="AI hardware is moving fast — glasses, rings, pins, clips, all racing to be the thing that finally replaces reaching for a phone. HCM Gadgets is our research bench for that space."
        color={d.color}
      />

      <section className="px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-3xl rounded-2xl border border-[var(--color-line)] bg-[var(--color-surface)] p-8 sm:p-10">
          <Target size={22} style={{ color: d.color }} />
          <h2 className="mt-4 font-display text-xl font-bold sm:text-2xl">
            The objective
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-[var(--color-ink-dim)] sm:text-base">
            HCM wants to properly research AI gadgets — what's actually
            working, what's hype, and where there's still a real gap —
            before committing to build anything. The concepts below are
            starting points for that research, not products in development.
          </p>
        </div>
      </section>

      <section className="border-t border-[var(--color-line)] px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-ink-dim)]">
            Sample concepts
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
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
          <p className="mt-6 font-mono text-[11px] text-[var(--color-ink-dim)]">
            Concept stage — names, ideas, nothing built. First move is
            research, not a product roadmap.
          </p>
        </div>
      </section>
      <AppBadges color={d.color} />
    </>
  );
}
