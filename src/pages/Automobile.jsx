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
            First reviews are in the works — this page will fill in as
            content ships.
          </p>
        </div>
      </section>
      <AppBadges color={d.color} />
    </>
  );
}
