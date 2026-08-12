import { Star, ShoppingCart, Wrench, Newspaper } from "lucide-react";
import DivisionHero from "../components/DivisionHero";
import AppBadges from "../components/AppBadges";
import { divisions } from "../data/divisions";

const d = divisions.find((x) => x.key === "automobile");

const offerings = [
  {
    icon: Star,
    title: "Car reviews",
    body: "Real-world reviews of new and used cars — what it's actually like to live with, not a press-kit summary.",
  },
  {
    icon: ShoppingCart,
    title: "Buying guides",
    body: "New vs. used, budget breakdowns, and what to check before you hand over a deposit.",
  },
  {
    icon: Wrench,
    title: "Maintenance & DIY",
    body: "Plain-English guides for the basics — what you can safely do yourself, and when to hand it to a mechanic.",
  },
  {
    icon: Newspaper,
    title: "News & features",
    body: "Industry news, launches, and the odd deep dive into car culture and motorsport.",
  },
];

const firstLooks = [
  {
    name: "Toyota RAV4 Hybrid",
    kind: "Family SUV",
    take: "The default for a reason. Quiet around town, no drama on the highway, and the hybrid system just gets on with it — this is the one we'd point a first-time SUV buyer toward without overthinking it.",
    img: "https://commons.wikimedia.org/wiki/Special:FilePath/Toyota%20RAV4%20Hybrid%20Sonoma%202025.jpg?width=800",
    credit: "TaurusEmerald",
    creditHref: "https://commons.wikimedia.org/wiki/File:Toyota_RAV4_Hybrid_Sonoma_2025.jpg",
  },
  {
    name: "Tesla Model Y",
    kind: "Electric SUV",
    take: "Instant off-the-line pull and a cabin that feels like nothing else on this list. The single-screen interior takes an afternoon to get used to — once it clicks, everything else feels a step behind.",
    img: "https://commons.wikimedia.org/wiki/Special:FilePath/Tesla%20Model%20Y%20(2025)%20DSC%208297.jpg?width=800",
    credit: "Alexander Migl",
    creditHref: "https://commons.wikimedia.org/wiki/File:Tesla_Model_Y_(2025)_DSC_8297.jpg",
  },
  {
    name: "Chery Tiggo 8",
    kind: "7-seater SUV",
    take: "A genuinely usable third row, sharp pricing, and more tech than you'd expect for the money. Not as polished as the badges above it, but hard to argue with what you get for the price.",
    img: "https://commons.wikimedia.org/wiki/Special:FilePath/2022%20Chery%20Tiggo%208%20Plus%20(front).jpg?width=800",
    credit: "Wikimedia Commons",
    creditHref: "https://commons.wikimedia.org/wiki/File:2022_Chery_Tiggo_8_Plus_(front).jpg",
  },
];

export default function Automobile() {
  return (
    <>
      <DivisionHero
        code={d.code}
        name={d.name}
        tagline={d.tagline}
        description="Car reviews, buying guides, and maintenance advice written straight — no dealership spin, no sponsored puff pieces."
        color={d.color}
      />

      <section className="px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-ink-dim)]">
            What's here
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
          <p className="mt-6 font-mono text-[11px] text-[var(--color-ink-dim)]">
            Full written reviews are in the works — the first-look notes
            below are what's kicking things off.
          </p>
        </div>
      </section>

      <section className="border-t border-[var(--color-line)] px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-ink-dim)]">
            First looks
          </h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-3">
            {firstLooks.map((car) => (
              <div
                key={car.name}
                className="overflow-hidden rounded-2xl border border-[var(--color-line)] bg-[var(--color-surface)]"
              >
                <img
                  src={car.img}
                  alt={car.name}
                  loading="lazy"
                  className="h-44 w-full object-cover"
                />
                <div className="p-5">
                  <div
                    className="font-mono text-[10px] uppercase tracking-[0.15em]"
                    style={{ color: d.color }}
                  >
                    {car.kind}
                  </div>
                  <h3 className="mt-1 font-display text-lg font-bold">{car.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--color-ink-dim)]">
                    {car.take}
                  </p>
                  <a
                    href={car.creditHref}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-3 block font-mono text-[10px] text-[var(--color-ink-dim)] hover:underline"
                  >
                    Photo: {car.credit} / Wikimedia Commons, CC BY-SA 4.0
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
