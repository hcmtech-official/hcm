import { Clock, PiggyBank, TrendingUp, Gavel, ShieldAlert, FileClock, Watch as WatchIcon, MapPin, Car, Package, SprayCan } from "lucide-react";
import DivisionHero from "../components/DivisionHero";
import AppBadges from "../components/AppBadges";
import { divisions } from "../data/divisions";

const d = divisions.find((x) => x.key === "hustle");

const categories = [
  {
    icon: Car,
    title: "Rideshare & food delivery",
    body: "Uber, DoorDash, Uber Eats, and the rest — the most visible slice of the gig economy, and where most of this started.",
  },
  {
    icon: Package,
    title: "Package delivery",
    body: "Amazon Flex and similar programs — drivers running their own routes and hours, paid per delivery block rather than per hour.",
  },
  {
    icon: SprayCan,
    title: "Home services & cleaning",
    body: "Platforms like Airtasker and Handy-style cleaning gigs — the same gig-economy structure, just off the road and inside people's homes.",
  },
];

const tools = [
  {
    icon: Clock,
    title: "Shift & time tracker",
    body: "Log on/off times across every platform you drive or deliver for, so you can see which hours actually pay off.",
  },
  {
    icon: PiggyBank,
    title: "Budgeting built for irregular income",
    body: "Set aside fuel, maintenance, and tax money automatically as earnings come in, instead of guessing at the end of the quarter.",
  },
  {
    icon: TrendingUp,
    title: "Earnings optimizer",
    body: "An algorithm that learns which hours, zones, and platforms are actually worth logging on for, based on your own history — not a generic heatmap everyone else is looking at too.",
  },
  {
    icon: MapPin,
    title: "Toilet finder",
    body: "A real problem nobody builds for: mid-shift, on the road, needing a toilet. Knows your shift from the time tracker, then shows the nearest public or business restroom that's actually open right now — not just nearby on a map, but open at this hour, on this day.",
  },
];

const innovation = [
  {
    icon: ShieldAlert,
    title: "HCM SOS Band — a concept",
    body: "A wrist-worn safety device for drivers and riders: automatic crash detection, an SOS button that doesn't need you to unlock a phone, and a live location ping to an emergency contact the moment impact is detected.",
  },
  {
    icon: WatchIcon,
    title: "Why wrist, not just phone",
    body: "Phone-based crash detection already exists, but it's one more thing to reach for after an impact. A dedicated band stays on through a shift and works even if the phone doesn't.",
  },
];

const rights = [
  {
    icon: Gavel,
    title: "\"Employee-like\" isn't nothing",
    body: "In Australia, gig and delivery platform workers can fall under an official \"employee-like worker\" category — a middle ground between contractor and employee that comes with real, enforceable minimum standards.",
  },
  {
    icon: FileClock,
    title: "Minimum standards can apply",
    body: "Where a minimum standards order is in place, it can cover pay rates, payment terms, insurance, and how platforms have to consult you before changing the algorithm that decides your pay.",
  },
  {
    icon: ShieldAlert,
    title: "Deactivation isn't necessarily final",
    body: "Being deactivated isn't automatically the end of the road — there are formal routes to dispute it if it happened without proper cause, usually on a tight deadline, so it's worth acting fast.",
  },
];

export default function Hustle() {
  return (
    <>
      <DivisionHero
        code={d.code}
        name={d.name}
        tagline={d.tagline}
        description="Built for the whole gig economy — rideshare, delivery, package runs, and home services — tools to make the hours you work actually count, safety tech worth having, and a plain-English read on the rights that come with the job."
        color={d.color}
        image="https://commons.wikimedia.org/wiki/Special:FilePath/Wolt%20delivery%20in%20Baku%20(15722).jpg?width=1600"
        imageCredit="Photo via Wikimedia Commons"
      />

      <section className="px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-ink-dim)]">
            Who it's for
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {categories.map((c) => (
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
        </div>
      </section>

      <section className="border-t border-[var(--color-line)] px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-ink-dim)]">
            Tools
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {tools.map((t) => (
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

      <section className="border-t border-[var(--color-line)] px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-ink-dim)]">
            Innovation
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[var(--color-ink-dim)]">
            Software helps with time and money — hardware is where we're
            looking next, starting with driver safety.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {innovation.map((i) => (
              <div
                key={i.title}
                className="rounded-2xl border border-[var(--color-line)] bg-[var(--color-surface)] p-6"
              >
                <i.icon size={22} style={{ color: d.color }} />
                <h3 className="mt-4 font-display text-lg font-bold">{i.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--color-ink-dim)]">
                  {i.body}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-4 font-mono text-[11px] text-[var(--color-ink-dim)]">
            Concept stage — nothing built yet.
          </p>
        </div>
      </section>

      <section className="border-t border-[var(--color-line)] px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-ink-dim)]">
            Know your rights
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[var(--color-ink-dim)]">
            Gig work law has been shifting fast — several countries have
            moved to give platform workers baseline protections without
            reclassifying them as full employees. The basics, in plain
            English:
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {rights.map((r) => (
              <div
                key={r.title}
                className="rounded-2xl border border-[var(--color-line)] bg-[var(--color-surface)] p-6"
              >
                <r.icon size={22} style={{ color: d.color }} />
                <h3 className="mt-4 font-display text-lg font-bold">{r.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--color-ink-dim)]">
                  {r.body}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-6 font-mono text-[11px] text-[var(--color-ink-dim)]">
            General information, not legal or financial advice — rules and
            rates differ by country and change often. Check your local
            regulator (in Australia, the Fair Work Commission) for current
            figures, or talk to a qualified professional about your
            situation.
          </p>
        </div>
      </section>
      <AppBadges color={d.color} />
    </>
  );
}
