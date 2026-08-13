import { FlaskConical, GitBranch, MessagesSquare, Rocket } from "lucide-react";
import DivisionHero from "../components/DivisionHero";
import AppBadges from "../components/AppBadges";
import { divisions } from "../data/divisions";

const d = divisions.find((x) => x.key === "labs");

const topics = [
  {
    icon: FlaskConical,
    title: "Early-access prototypes",
    body: "Working previews of AI-driven ideas HCM is testing — live before they're polished, so you're seeing them at the same stage we are.",
  },
  {
    icon: MessagesSquare,
    title: "Feedback shapes what happens next",
    body: "What actually gets used decides what moves forward and what gets retired — the experiments don't get finished behind closed doors.",
  },
  {
    icon: GitBranch,
    title: "Where ideas don't fit anywhere yet",
    body: "Not everything belongs to Tech, AI, or any other division on day one. Labs is where those ideas start before they have a home.",
  },
  {
    icon: Rocket,
    title: "From lab to its own division",
    body: "The path most HCM divisions actually took — tested here first, then spun out once it's proven itself.",
  },
];

export default function Labs() {
  return (
    <>
      <DivisionHero
        code={d.code}
        name={d.name}
        tagline={d.tagline}
        description="HCM's experimental arm — early, rough-edged previews of AI-driven ideas, released before they're finished so the direction gets shaped by what people actually use."
        color={d.color}
      />

      <section className="px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-ink-dim)]">
            How it works
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {topics.map((t) => (
              <div
                key={t.title}
                className="rounded-2xl border border-[var(--color-line)] bg-[var(--color-surface)] p-6"
              >
                <t.icon size={22} style={{ color: d.color }} />
                <h3 className="mt-4 font-display text-lg font-bold">{t.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--color-ink-dim)]">
                  {t.body}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-6 font-mono text-[11px] text-[var(--color-ink-dim)]">
            Nothing in HCM Labs is a finished product yet — expect rough
            edges, and expect things to change fast.
          </p>
        </div>
      </section>
      <AppBadges color={d.color} />
    </>
  );
}
