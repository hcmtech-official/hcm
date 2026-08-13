import { Gamepad2, Hammer, Trophy, ExternalLink, MousePointerClick, Flame, Smartphone, Target, Layers, Star } from "lucide-react";
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

const showcases = [
  {
    tag: "Browser game",
    name: "Spicy Escape",
    subtitle: "One-screen arcade survival, playable instantly",
    description:
      "He ate the ramen. It was too hot. Move to dodge the falling spice and shoot water to cool it down before he overheats — a quick, score-chasing arcade game built to be picked up in seconds and replayed in a browser tab.",
    href: "https://hcmtech-official.github.io/spicy-escape/games/spicy-escape.html",
    features: [
      {
        icon: MousePointerClick,
        title: "Simple controls",
        body: "Move with mouse or touch, shoot with a click or tap — no tutorial needed.",
      },
      {
        icon: Flame,
        title: "Rising heat",
        body: "The spice falls faster the longer you last — survive as long as you can before he overheats.",
      },
      {
        icon: Smartphone,
        title: "Play anywhere",
        body: "Runs straight in the browser on desktop or mobile — no install, no account.",
      },
    ],
  },
  {
    tag: "Browser game",
    name: "Spicy Sling",
    subtitle: "Physics-based slingshot puzzler, level by level",
    description:
      "Drag back on the slingshot, aim at the towers, and release to smash the spicy enemies stacked inside. Four handcrafted levels of wood, stone, and ice blocks, with a star rating on every clear — built for quick replays and higher scores.",
    href: "https://hcmtech-official.github.io/spicy-escape/games/spicy-sling/",
    features: [
      {
        icon: Target,
        title: "Precision aiming",
        body: "Drag-and-release controls with a live trajectory preview before you let go.",
      },
      {
        icon: Layers,
        title: "Destructible towers",
        body: "Wood, stone, and ice blocks each react differently — plan your shot to bring them down.",
      },
      {
        icon: Star,
        title: "Star ratings",
        body: "Clear each level with shots to spare to earn up to three stars.",
      },
    ],
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

      <section className="border-t border-[var(--color-line)] px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-ink-dim)]">
            Showcase
          </h2>

          <div className="mt-6 space-y-6">
            {showcases.map((s) => (
              <div
                key={s.name}
                className="overflow-hidden rounded-2xl border border-[var(--color-line)] bg-[var(--color-surface)]"
              >
                <div className="p-8 sm:p-10">
                  <div
                    className="inline-block rounded-full border px-3 py-1 font-mono text-[11px] uppercase tracking-[0.2em]"
                    style={{ borderColor: d.color, color: d.color }}
                  >
                    {s.tag}
                  </div>
                  <h3 className="mt-4 font-display text-2xl font-bold sm:text-3xl">
                    {s.name}
                  </h3>
                  <p className="mt-1 text-sm text-[var(--color-ink-dim)]">{s.subtitle}</p>
                  <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[var(--color-ink-dim)] sm:text-base">
                    {s.description}
                  </p>

                  <div className="mt-8 grid gap-4 sm:grid-cols-3">
                    {s.features.map((f) => (
                      <div key={f.title}>
                        <f.icon size={20} style={{ color: d.color }} />
                        <h4 className="mt-3 font-display text-base font-bold">
                          {f.title}
                        </h4>
                        <p className="mt-1 text-sm leading-relaxed text-[var(--color-ink-dim)]">
                          {f.body}
                        </p>
                      </div>
                    ))}
                  </div>

                  <a
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-8 inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-opacity hover:opacity-85"
                    style={{ background: d.color, color: "var(--color-void)" }}
                  >
                    Play now
                    <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <AppBadges color={d.color} />
    </>
  );
}
