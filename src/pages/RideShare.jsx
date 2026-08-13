import { Clock, PiggyBank, TrendingUp, Gavel, ShieldAlert, FileClock } from "lucide-react";
import DivisionHero from "../components/DivisionHero";
import AppBadges from "../components/AppBadges";
import { divisions } from "../data/divisions";

const d = divisions.find((x) => x.key === "rideshare");

const tools = [
  {
    icon: Clock,
    title: "Shift & time tracker",
    body: "Log on/off times across Uber, DoorDash, and Uber Eats in one place, so you can actually see which hours and platforms pay off.",
  },
  {
    icon: PiggyBank,
    title: "Budgeting built for irregular income",
    body: "Set aside fuel, maintenance, and tax money automatically as earnings come in, instead of guessing at the end of the quarter.",
  },
  {
    icon: TrendingUp,
    title: "Earnings optimizer",
    body: "See which hours, zones, and platforms are actually worth logging on for, based on your own history — not a generic heatmap.",
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

export default function RideShare() {
  return (
    <>
      <DivisionHero
        code={d.code}
        name={d.name}
        tagline={d.tagline}
        description="Built for people driving or delivering through Uber, DoorDash, and Uber Eats — tools to make the hours you work actually count, plus a plain-English read on the rights that come with the job."
        color={d.color}
      />

      <section className="px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-ink-dim)]">
            Tools
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
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
