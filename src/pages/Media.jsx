import { Layers, Scale, EyeOff, Clock } from "lucide-react";
import DivisionHero from "../components/DivisionHero";
import AppBadges from "../components/AppBadges";
import { divisions } from "../data/divisions";

const d = divisions.find((x) => x.key === "media");

const offerings = [
  {
    icon: Layers,
    title: "One story, not ten copies",
    body: "When the same event gets covered by dozens of outlets, we merge it into a single synthesized story instead of showing you the same headline repeated.",
  },
  {
    icon: Scale,
    title: "Multiple angles, side by side",
    body: "Where coverage genuinely differs, we show how — without picking a side for you.",
  },
  {
    icon: EyeOff,
    title: "What's being left out",
    body: "Flagging the angles or details that most coverage of a story is quietly skipping.",
  },
  {
    icon: Clock,
    title: "A few minutes, not a scroll",
    body: "A digest built to catch you up quickly, not keep you scrolling.",
  },
];

export default function Media() {
  return (
    <>
      <DivisionHero
        code={d.code}
        name={d.name}
        tagline={d.tagline}
        description="Our mission is to provide synthesized news — one clear account of what happened, pulled together from multiple sources, instead of the same story repeated across ten different headlines."
        color={d.color}
      />

      <section className="px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-ink-dim)]">
            How it's different
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {offerings.map((o) => (
              <div
                key={o.title}
                className="rounded-2xl border border-[var(--color-line)] bg-[var(--color-surface)] p-6"
              >
                <o.icon size={22} style={{ color: d.color }} />
                <h3 className="mt-4 font-display text-lg font-bold">{o.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--color-ink-dim)]">
                  {o.body}
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
