import { Building2, Wind, Leaf, Zap } from "lucide-react";
import DivisionHero from "../components/DivisionHero";
import AppBadges from "../components/AppBadges";
import { divisions } from "../data/divisions";

const d = divisions.find((x) => x.key === "architecture");

const wm = (name) =>
  `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(name)}?width=1600`;

const gallery = [
  {
    name: "Shanghai skyline",
    note: "Shanghai Tower's twisted, tapering form cuts wind load by roughly 24% compared to a straight-sided building of the same height — the shape isn't just for looks.",
    img: wm("Shanghai Night Skyline.jpg"),
  },
  {
    name: "Millenia Tower, Singapore",
    note: "An illuminated roof structure that turns the top of the building into its own landmark after dark, not just a lit sign bolted on.",
    img: wm("Illuminated roof of the skyscraper Millenia Tower at night in Singapore.jpg"),
  },
  {
    name: "Modern tower form",
    img: wm("Skyscraper.jpg"),
  },
];

const trends = [
  {
    icon: Wind,
    title: "Shape as engineering",
    body: "Twisting, tapering forms aren't just style anymore — they measurably cut wind load, letting towers go taller without a proportionally heavier structure.",
  },
  {
    icon: Leaf,
    title: "Vertical green space",
    body: "Sky gardens and planted terraces built into the structure itself, not an afterthought bolted onto the roof.",
  },
  {
    icon: Zap,
    title: "The building as a power source",
    body: "Integrated solar facades and wind-responsive design turning the tower's own surface area into generation, not just consumption.",
  },
  {
    icon: Building2,
    title: "Mixed-use, stacked",
    body: "Offices, homes, and public space in the same tower, designed to function as a small vertical city rather than a single-purpose block.",
  },
];

export default function Architecture() {
  return (
    <>
      <DivisionHero
        code={d.code}
        name={d.name}
        tagline={d.tagline}
        description="The tallest buildings in the world aren't just getting taller — the shapes themselves are doing real engineering work. HCM Architecture tracks where skyscraper design is actually headed."
        color={d.color}
      />

      <section className="px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-6 sm:grid-cols-3">
            {gallery.map((g) => (
              <div
                key={g.name}
                className="overflow-hidden rounded-2xl border border-[var(--color-line)] bg-[var(--color-surface)]"
              >
                <img src={g.img} alt={g.name} loading="lazy" className="h-64 w-full object-cover" />
                <div className="p-5">
                  <h3 className="font-display text-lg font-bold">{g.name}</h3>
                  {g.note && (
                    <p className="mt-2 text-sm leading-relaxed text-[var(--color-ink-dim)]">
                      {g.note}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-[var(--color-line)] px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-ink-dim)]">
            Where it's headed
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {trends.map((t) => (
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
