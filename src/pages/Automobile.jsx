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
    name: "Tesla Cybertruck",
    kind: "Electric pickup",
    take: "The most divisive shape on sale, and still the clearest sign of where Tesla thinks design is headed — stainless steel exoskeleton, no paint to chip, and a driving experience that feels closer to piloting something than driving it.",
    img: "https://commons.wikimedia.org/wiki/Special:FilePath/2024%20Tesla%20Cybertruck%20Foundation%20Series%20IMG%200634.jpg?width=900",
    credit: "Wikimedia Commons",
    creditHref: "https://commons.wikimedia.org/wiki/File:2024_Tesla_Cybertruck_Foundation_Series_IMG_0634.jpg",
  },
  {
    name: "Tesla Cybercab",
    kind: "Autonomous robotaxi",
    take: "No steering wheel, no pedals, wireless charging — built from the ground up to be driven by nothing but software. This is the clearest look yet at what a car designed for a passenger, not a driver, actually looks like.",
    img: "https://commons.wikimedia.org/wiki/Special:FilePath/2024%20Tesla%20Cybercab%20Prototype.jpg?width=900",
    credit: "Wikimedia Commons",
    creditHref: "https://commons.wikimedia.org/wiki/File:2024_Tesla_Cybercab_Prototype.jpg",
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
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[var(--color-ink-dim)]">
            Where car design is actually headed right now — both from the
            same company pushing hardest on it.
          </p>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            {firstLooks.map((car) => (
              <div
                key={car.name}
                className="overflow-hidden rounded-2xl border border-[var(--color-line)] bg-[var(--color-surface)]"
              >
                <img
                  src={car.img}
                  alt={car.name}
                  loading="lazy"
                  className="h-56 w-full object-cover"
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
                    Photo: {car.credit}, CC BY
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-[var(--color-line)] px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-ink-dim)]">
            HCM Concept
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[var(--color-ink-dim)]">
            Tesla and Waymo are already delivering self-driving. The real
            question is what comes after that's solved — and the honest
            answer isn't a better car, it's not staying on the road at
            all. Alef Aeronautics has road-legal flying cars in production
            right now, and Joby and Archer are already flying eVTOL air
            taxis. HCM Skyline is our own concept in that direction — a
            low, autonomous road vehicle with deployable rotors, built to
            drive normally and take off when the road is the slow option.
          </p>
          <div className="mt-6 overflow-hidden rounded-2xl border border-[var(--color-line)] bg-black">
            <img
              src="./products/hcm-skyline-concept.svg"
              alt="HCM Skyline concept vehicle"
              className="w-full"
            />
          </div>
          <p className="mt-3 font-mono text-[11px] text-[var(--color-ink-dim)]">
            Concept stage — an idea, not a vehicle in development. Real
            road-to-air vehicles face serious certification, airspace, and
            safety hurdles that are nowhere near solved yet.
          </p>
        </div>
      </section>
      <AppBadges color={d.color} />
    </>
  );
}
