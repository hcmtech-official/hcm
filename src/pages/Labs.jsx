import { FlaskConical, Layers3, Leaf, Cpu } from "lucide-react";
import DivisionHero from "../components/DivisionHero";
import AppBadges from "../components/AppBadges";
import { divisions } from "../data/divisions";

const d = divisions.find((x) => x.key === "labs");

const topics = [
  {
    icon: Layers3,
    title: "Advanced materials",
    body: "Self-healing coatings, next-gen composites, and materials strong enough to change how things get built.",
  },
  {
    icon: Leaf,
    title: "Sustainable & bio-based",
    body: "Biodegradable polymers, recycled inputs, and closed-loop manufacturing replacing older materials.",
  },
  {
    icon: Cpu,
    title: "AI-driven materials design",
    body: "How machine learning is speeding up the search for new materials — testing combinations in software before anyone touches a lab bench.",
  },
  {
    icon: FlaskConical,
    title: "From lab to production",
    body: "Tracking which innovations are still research-stage, and which are actually shipping in real products.",
  },
];

export default function Labs() {
  return (
    <>
      <DivisionHero
        code={d.code}
        name={d.name}
        tagline={d.tagline}
        description="HCM's research and materials-innovation desk — tracking what's genuinely new in materials science and applied engineering, not just what's trending."
        color={d.color}
      />

      <section className="px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-ink-dim)]">
            What we track
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
        </div>
      </section>
      <AppBadges color={d.color} />
    </>
  );
}
