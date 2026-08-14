import { Home, Landmark, ScaleIcon, Users, ShieldOff, Sparkles } from "lucide-react";
import DivisionHero from "../components/DivisionHero";
import AppBadges from "../components/AppBadges";
import { divisions } from "../data/divisions";

const d = divisions.find((x) => x.key === "property");

const history = [
  {
    title: "Fully state-controlled housing",
    body: "Communist and socialist systems both tried guaranteeing housing by having the state own and allocate nearly all of it. The intent was right — everyone gets a home. In practice, most of these systems ran into chronic shortages, years-long waiting lists, and buildings nobody had a direct stake in maintaining.",
  },
  {
    title: "Market-driven housing",
    body: "Democracies mostly went the other way — private ownership, open markets, competition. It solved supply better, but it let housing become one of the most attractive investment vehicles there is. Once a basic need is also an asset people bid up for return, prices decouple from what people actually earn, and someone who just needs a home ends up competing against people who don't need to live in it at all.",
  },
];

const model = [
  {
    icon: Landmark,
    title: "Land held in trust, not speculated on",
    body: "The land itself is held collectively — by a trust, not a private owner looking for a return — so its value can't be bid up and passed on as higher rent or a higher price.",
  },
  {
    icon: Home,
    title: "Homes priced at cost, not at what the market will bear",
    body: "What a home costs to build and maintain, not what someone else is willing to pay for it. Resale value stays capped so it doesn't quietly turn back into an investment.",
  },
  {
    icon: Users,
    title: "Residents govern it, not a distant owner",
    body: "Decisions about the building and the community come from the people actually living there, not an owner who's never set foot in it.",
  },
  {
    icon: ShieldOff,
    title: "No landlords",
    body: "Not softened, not rebranded — removed. Someone still looks after the building, but they answer to the residents and the trust, not to a return on someone else's investment.",
  },
];

export default function Property() {
  return (
    <>
      <DivisionHero
        code={d.code}
        name={d.name}
        tagline={d.tagline}
        description="Every human being deserves a roof over their head. HCM Property is our case for taking the investment out of housing entirely — no landlords, no speculation, just homes."
        color={d.color}
      />

      <section className="px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-3xl rounded-2xl border border-[var(--color-line)] bg-[var(--color-surface)] p-8 sm:p-10">
          <ScaleIcon size={22} style={{ color: d.color }} />
          <h2 className="mt-4 font-display text-xl font-bold sm:text-2xl">
            What's actually been tried
          </h2>
          <div className="mt-4 space-y-5">
            {history.map((h) => (
              <div key={h.title}>
                <h3 className="font-display text-base font-bold">{h.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-[var(--color-ink-dim)] sm:text-base">
                  {h.body}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-5 text-sm leading-relaxed text-[var(--color-ink-dim)] sm:text-base">
            Neither extreme actually solved it. HCM Property's position is
            that the flaw both share is treating housing as belonging to
            some larger system — the state's to allocate, or the market's
            to price — instead of treating it as simply belonging to the
            person living in it.
          </p>
        </div>
      </section>

      <section className="border-t border-[var(--color-line)] px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="mb-2 flex items-center gap-3">
            <Sparkles size={22} style={{ color: d.color }} />
            <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-ink-dim)]">
              The model
            </h2>
          </div>
          <p className="mb-6 max-w-2xl text-sm leading-relaxed text-[var(--color-ink-dim)]">
            This isn't a new invention — community land trusts have been
            doing versions of this for decades, successfully, without
            needing the state to own everything or the market to price
            everything. HCM Property's version of it, in four parts:
          </p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {model.map((m) => (
              <div
                key={m.title}
                className="rounded-2xl border border-[var(--color-line)] bg-[var(--color-surface)] p-6"
              >
                <m.icon size={22} style={{ color: d.color }} />
                <h3 className="mt-4 font-display text-lg font-bold">{m.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--color-ink-dim)]">
                  {m.body}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-6 font-mono text-[11px] text-[var(--color-ink-dim)]">
            Concept stage — no platform or properties exist yet. A model
            like this would need real legal and financial structuring
            before it could hold a single home.
          </p>
        </div>
      </section>
      <AppBadges color={d.color} />
    </>
  );
}
