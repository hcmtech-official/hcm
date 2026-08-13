import { Rocket, Satellite, Globe2, Building2 } from "lucide-react";
import DivisionHero from "../components/DivisionHero";
import AppBadges from "../components/AppBadges";
import { divisions } from "../data/divisions";

const d = divisions.find((x) => x.key === "space");

const topics = [
  {
    icon: Rocket,
    title: "Reusable launch",
    body: "How reusable rockets have cut the cost of reaching orbit, and who's racing to build the next generation of them.",
  },
  {
    icon: Satellite,
    title: "Satellite networks",
    body: "Mega-constellations, direct-to-device connectivity, and what expanding satellite internet actually means on the ground.",
  },
  {
    icon: Building2,
    title: "Commercial space",
    body: "Private space stations, in-orbit manufacturing, and the companies building businesses beyond Earth's atmosphere.",
  },
  {
    icon: Globe2,
    title: "Exploration",
    body: "Lunar missions, deep-space programs, and the milestones actually worth paying attention to.",
  },
];

export default function Space() {
  return (
    <>
      <DivisionHero
        code={d.code}
        name={d.name}
        tagline={d.tagline}
        description="Space technology, explained simply — launch, satellites, and the commercial space economy, without needing an aerospace degree to follow along."
        color={d.color}
      />

      <section className="px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-ink-dim)]">
            What we cover
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
