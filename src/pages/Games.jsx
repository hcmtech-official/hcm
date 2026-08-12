import { Gamepad2, Hammer, Trophy } from "lucide-react";
import DivisionHero from "../components/DivisionHero";
import AppBadges from "../components/AppBadges";
import { divisions } from "../data/divisions";

const d = divisions.find((x) => x.key === "games");

const tracks = [
  {
    icon: Hammer,
    title: "Create",
    body: "Small-team game development — prototypes through to full builds, plus tools and templates for people building their own.",
  },
  {
    icon: Gamepad2,
    title: "Play",
    body: "Browser and mobile games you can jump into directly, no install required, built and hosted by HCM.",
  },
  {
    icon: Trophy,
    title: "Compete",
    body: "Leaderboards and small tournaments across HCM's own games — casual enough to jump into, competitive enough to matter.",
  },
];

export default function Games() {
  return (
    <>
      <DivisionHero
        code={d.code}
        name={d.name}
        tagline={d.tagline}
        description="Two sides of the same thing: a studio that builds games, and a place to play them."
        color={d.color}
      />

      <section className="px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-ink-dim)]">
            Two tracks
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {tracks.map((t) => (
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
        </div>
      </section>
      <AppBadges color={d.color} />
    </>
  );
}
