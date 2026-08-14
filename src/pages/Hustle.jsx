import { Clock, PiggyBank, TrendingUp, Gavel, ShieldAlert, FileClock, Watch as WatchIcon, MapPin, Car, Package, SprayCan, Music2, Zap, Droplet, Battery } from "lucide-react";
import { Link } from "react-router-dom";
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

const otherProducts = [
  {
    icon: Zap,
    title: "HCM Shift Shot",
    body: "A small-format shot for the moment between drop-offs, not a whole can — lower caffeine than Surge, same L-theanine pairing so it doesn't spike and crash mid-route.",
  },
  {
    icon: Droplet,
    title: "HCM Recharge",
    body: "No caffeine at all — an electrolyte mix for the parts of a shift that are about heat and hydration, not alertness. Built for the hours after a Surge, not instead of sleep.",
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
        <div className="mx-auto max-w-3xl rounded-2xl border border-[var(--color-line)] bg-[var(--color-surface)] p-8 sm:p-10">
          <Music2 size={22} style={{ color: d.color }} />
          <h2 className="mt-4 font-display text-xl font-bold sm:text-2xl">
            The playlist
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-[var(--color-ink-dim)] sm:text-base">
            A playlist made by{" "}
            <Link to="/music" className="underline decoration-dotted underline-offset-4" style={{ color: d.color }}>
              HCM Music
            </Link>{" "}
            specifically for a shift, not a commute — built to hold energy
            through a long stretch behind the wheel or on your feet,
            without the jarring drops or lyrics-heavy tracks that pull
            focus off the road.
          </p>
          <p className="mt-4 font-mono text-[11px] text-[var(--color-ink-dim)]">
            Coming soon — nothing published yet.
          </p>
        </div>
      </section>

      <section className="border-t border-[var(--color-line)] px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="mb-2 flex items-center gap-3">
            <Battery size={22} style={{ color: d.color }} />
            <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-ink-dim)]">
              Products
            </h2>
          </div>
          <p className="mb-6 max-w-2xl text-sm leading-relaxed text-[var(--color-ink-dim)]">
            The real problem: fatigue creeps in on the back half of a long
            shift, and most energy drinks are built for a 20-minute study
            session, not eight hours behind the wheel. HCM's line is built
            for the shift, not the sprint.
          </p>

          <div className="overflow-hidden rounded-2xl border border-[var(--color-line)] bg-[var(--color-surface)]">
            <div className="grid gap-8 p-8 sm:grid-cols-[1fr_1.4fr] sm:p-10">
              <img
                src="./products/hcm-surge-can.svg"
                alt="HCM Surge energy drink can"
                className="mx-auto w-48 sm:w-full"
              />
              <div>
                <div
                  className="inline-block rounded-full border px-3 py-1 font-mono text-[11px] uppercase tracking-[0.2em]"
                  style={{ borderColor: d.color, color: d.color }}
                >
                  Flagship product
                </div>
                <h3 className="mt-4 font-display text-2xl font-bold">HCM Surge</h3>
                <p className="mt-1 text-sm text-[var(--color-ink-dim)]">
                  Zero sugar, zero crash — built for the whole shift, not the first hour of it.
                </p>
                <p className="mt-4 text-sm leading-relaxed text-[var(--color-ink-dim)] sm:text-base">
                  Caffeine paired with L-theanine for a smoother lift
                  without the jitters or the crash, electrolytes (sodium,
                  potassium, magnesium) because dehydration makes fatigue
                  worse than caffeine alone can fix, and B-vitamins to
                  support energy metabolism through a long day, not just
                  the first thirty minutes of it.
                </p>
                <ul className="mt-4 space-y-1 font-mono text-[11px] text-[var(--color-ink-dim)]">
                  <li>· Caffeine + L-theanine (smoother lift, no jitters)</li>
                  <li>· Electrolytes — sodium, potassium, magnesium</li>
                  <li>· B3, B6, B12 for sustained energy metabolism</li>
                  <li>· Zero sugar, transparent dosing on the label</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {otherProducts.map((p) => (
              <div
                key={p.title}
                className="rounded-2xl border border-[var(--color-line)] bg-[var(--color-surface)] p-6"
              >
                <p.icon size={22} style={{ color: d.color }} />
                <h3 className="mt-4 font-display text-lg font-bold">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--color-ink-dim)]">
                  {p.body}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-6 font-mono text-[11px] text-[var(--color-ink-dim)]">
            Concept stage — nothing formulated or for sale yet. Energy
            products help with alertness; they're not a substitute for an
            actual break when you're genuinely exhausted, especially
            behind the wheel.
          </p>
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
