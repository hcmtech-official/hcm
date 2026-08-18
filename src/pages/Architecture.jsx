import { Building2, Wind, Leaf, Zap } from "lucide-react";
import DivisionHero from "../components/DivisionHero";
import AppBadges from "../components/AppBadges";
import { divisions } from "../data/divisions";

const d = divisions.find((x) => x.key === "architecture");

const wm = (name) =>
  `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(name)}?width=1600`;

const gallery = [
  {
    name: "Meridian Spire",
    note: "A curtain wall built from angled panels instead of flat glass — each one catches light differently through the day, so the face of the tower never looks quite the same twice.",
    img: wm("Modern skyscraper facades (Unsplash).jpg"),
  },
  {
    name: "Vantage Helix",
    note: "A reflective skin that doubles as a mirror to the sky around it — from close up, the building almost disappears into what it's reflecting.",
    img: wm("St Paul's Cathedral reflections at One New Change 01.jpg"),
  },
  {
    name: "The Aurora Column",
    note: "A faceted corner detail that breaks up wind at street level — the kind of shape decided by an engineer as much as an architect.",
    img: wm("Tower crane reflection, Little Britain, City of London England.jpg"),
  },
  {
    name: "Solandra Tower",
    note: "Glass panels set at a slight angle to the frame, layering reflection on top of reflection instead of a single flat mirror.",
    img: wm("Reflecting glass architecture at the campus Roeterseiland; free photo Amsterdam, Fons Heijnsbroek 10-2021.jpg"),
  },
  {
    name: "Kepler Point",
    note: "A tower face built for close range — texture and joinery that only really reads when you're standing right underneath it.",
    img: wm("Splendor Hotel in Xindian District New Taipei City.JPG"),
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
          <h2 className="mb-6 font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-ink-dim)]">
            Five towers
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
          <p className="mt-4 font-mono text-[11px] text-[var(--color-ink-dim)]">
            Concept names for illustrative detail shots — not real buildings
            or real locations.
          </p>
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
