import { Layers, Gauge, Building2, Factory } from "lucide-react";
import DivisionHero from "../components/DivisionHero";
import AppBadges from "../components/AppBadges";
import { divisions } from "../data/divisions";

const d = divisions.find((x) => x.key === "print");

const wm = (name) =>
  `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(name)}?width=1400`;

const gallery = [
  {
    caption: "Mid-print, close up",
    img: wm("3D printing in progress.jpg"),
  },
  {
    caption: "Scaled up to construction",
    img: wm("3D Concrete Printer.jpg"),
  },
  {
    caption: "A finished layer-by-layer piece",
    img: wm("Detall d'una peça d'impressió en 3D. (09-09-2024).JPG"),
  },
];

const trends = [
  {
    icon: Layers,
    title: "Multi-material, one print",
    body: "Hard and soft sections, rigid frames with flexible joints, conductive and insulating areas — all in a single build, no assembly step after.",
  },
  {
    icon: Factory,
    title: "Metal is going mainstream",
    body: "Metal additive manufacturing is forecast to grow over 25% a year, moving past aerospace prototypes into real automotive and industrial production parts.",
  },
  {
    icon: Building2,
    title: "Buildings, printed",
    body: "Large-format construction printers are already going up in Texas, Dubai, and the Netherlands — walls and foundations in days instead of months.",
  },
  {
    icon: Gauge,
    title: "The real bottleneck was never speed",
    body: "Multi-laser arrays and better thermal management are cutting total cycle time — not just how fast the head moves, but how fast a part can cool without warping.",
  },
];

export default function Print() {
  return (
    <>
      <DivisionHero
        code={d.code}
        name={d.name}
        tagline={d.tagline}
        description="3D printing stopped being a prototyping toy a while ago. HCM Print tracks where the technology actually stands — multi-material, metal, and construction scale."
        color={d.color}
      />

      <section className="px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-6 sm:grid-cols-3">
            {gallery.map((g) => (
              <div
                key={g.caption}
                className="overflow-hidden rounded-2xl border border-[var(--color-line)] bg-[var(--color-surface)]"
              >
                <img src={g.img} alt={g.caption} loading="lazy" className="h-56 w-full object-cover" />
                <div className="p-4">
                  <p className="text-sm text-[var(--color-ink-dim)]">{g.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-[var(--color-line)] px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-ink-dim)]">
            Where it's actually headed
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
