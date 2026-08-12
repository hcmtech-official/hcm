import { Coins, TrendingUp, Landmark, LineChart } from "lucide-react";
import DivisionHero from "../components/DivisionHero";
import AppBadges from "../components/AppBadges";
import { divisions } from "../data/divisions";

const d = divisions.find((x) => x.key === "markets");

const coverage = [
  {
    icon: Coins,
    title: "FX",
    body: "Currency pairs, central bank moves, and what's actually driving the exchange rate this week.",
  },
  {
    icon: TrendingUp,
    title: "Derivatives",
    body: "Futures, options, and swaps explained in plain terms — how they work and why traders use them.",
  },
  {
    icon: Landmark,
    title: "Bonds & fixed income",
    body: "Government and corporate bonds, yields, and what rate moves mean for borrowers and savers alike.",
  },
  {
    icon: LineChart,
    title: "Equities & indices",
    body: "Company earnings, sector moves, and the indices that sum up how markets are actually doing.",
  },
];

const gallery = [
  {
    caption: "Equities",
    note: "The trading floor — still the image most people picture when they think 'the market.'",
    img: "https://commons.wikimedia.org/wiki/Special:FilePath/NYSE%20Advanced%20Trading%20Floor.jpg?width=800",
    credit: "Wikimedia Commons",
    creditHref: "https://commons.wikimedia.org/wiki/File:NYSE_Advanced_Trading_Floor.jpg",
  },
  {
    caption: "FX & derivatives",
    note: "A candlestick chart — the same style used to read currency pairs, futures, and options alike.",
    img: "https://commons.wikimedia.org/wiki/Special:FilePath/Candlestick%20Chart%20in%20MetaTrader%205.png?width=800",
    credit: "Wikimedia Commons",
    creditHref: "https://commons.wikimedia.org/wiki/File:Candlestick_Chart_in_MetaTrader_5.png",
  },
  {
    caption: "Bonds",
    note: "US Treasury yields over time — the benchmark the rest of the bond market gets priced against.",
    img: "https://commons.wikimedia.org/wiki/Special:FilePath/US%20Treasury%20bills%20and%20bonds%20yield.png?width=800",
    credit: "Wikimedia Commons",
    creditHref: "https://commons.wikimedia.org/wiki/File:US_Treasury_bills_and_bonds_yield.png",
  },
];

export default function Markets() {
  return (
    <>
      <DivisionHero
        code={d.code}
        name={d.name}
        tagline={d.tagline}
        description="FX, derivatives, bonds, and equities — covered in plain English, for people who want to understand markets, not just watch them move."
        color={d.color}
      />

      <section className="px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-ink-dim)]">
            Coverage
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {coverage.map((c) => (
              <div
                key={c.title}
                className="rounded-2xl border border-[var(--color-line)] bg-[var(--color-surface)] p-6"
              >
                <c.icon size={22} style={{ color: d.color }} />
                <h3 className="mt-4 font-display text-lg font-bold">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--color-ink-dim)]">
                  {c.body}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-6 font-mono text-[11px] text-[var(--color-ink-dim)]">
            General market information for a general audience — not
            personal financial advice.
          </p>
        </div>
      </section>

      <section className="border-t border-[var(--color-line)] px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-ink-dim)]">
            Markets at a glance
          </h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-3">
            {gallery.map((g) => (
              <div
                key={g.caption}
                className="overflow-hidden rounded-2xl border border-[var(--color-line)] bg-[var(--color-surface)]"
              >
                <img
                  src={g.img}
                  alt={g.caption}
                  loading="lazy"
                  className="h-44 w-full object-cover"
                />
                <div className="p-5">
                  <div
                    className="font-mono text-[10px] uppercase tracking-[0.15em]"
                    style={{ color: d.color }}
                  >
                    {g.caption}
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--color-ink-dim)]">
                    {g.note}
                  </p>
                  <a
                    href={g.creditHref}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-3 block font-mono text-[10px] text-[var(--color-ink-dim)] hover:underline"
                  >
                    Photo: {g.credit}, CC BY-SA
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
