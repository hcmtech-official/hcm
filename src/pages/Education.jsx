import { Clock, Wallet, Heart, ExternalLink, ListChecks, PiggyBank } from "lucide-react";
import DivisionHero from "../components/DivisionHero";
import AppBadges from "../components/AppBadges";
import { divisions } from "../data/divisions";

const d = divisions.find((x) => x.key === "education");

const howItWorks = [
  {
    icon: Clock,
    title: "Pick a topic",
    body: "One skill, explained plainly — no fluff, no filler modules to pad out a course length.",
  },
  {
    icon: ListChecks,
    title: "Get it in five minutes",
    body: "Read or watch it in one sitting, and walk away able to actually use it.",
  },
  {
    icon: Heart,
    title: "Pay what it's worth",
    body: "Every lesson is free to take. If it helped, you can support it with whatever you think it was worth.",
  },
];

const courses = [
  {
    tag: "First course",
    name: "Budgeting Basics",
    subtitle: "Your first real budget, in five minutes",
    description:
      "A plain-English walkthrough of the 50/30/20 rule — needs, wants, and savings — built for anyone who's never made a budget and doesn't want a spreadsheet lecture. By the end, you'll have your own numbers written down, not just a theory.",
    features: [
      {
        icon: Wallet,
        title: "Needs vs. wants",
        body: "A quick, honest way to sort your spending without judging yourself for the coffee.",
      },
      {
        icon: PiggyBank,
        title: "The 50/30/20 split",
        body: "One simple rule for needs, wants, and savings that works on any income.",
      },
      {
        icon: ListChecks,
        title: "Your first budget",
        body: "A short worksheet to fill in with your own numbers by the end of the five minutes.",
      },
    ],
  },
];

export default function Education() {
  return (
    <>
      <DivisionHero
        code={d.code}
        name={d.name}
        tagline={d.tagline}
        description="Short, plain-English lessons on one useful skill at a time. Free to take — support the ones that were worth your five minutes."
        color={d.color}
      />

      <section className="px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-ink-dim)]">
            How it works
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {howItWorks.map((h) => (
              <div
                key={h.title}
                className="rounded-2xl border border-[var(--color-line)] bg-[var(--color-surface)] p-6"
              >
                <h.icon size={22} style={{ color: d.color }} />
                <h3 className="mt-4 font-display text-lg font-bold">{h.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--color-ink-dim)]">
                  {h.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-[var(--color-line)] px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-ink-dim)]">
            Courses
          </h2>

          <div className="mt-6 space-y-6">
            {courses.map((c) => (
              <div
                key={c.name}
                className="overflow-hidden rounded-2xl border border-[var(--color-line)] bg-[var(--color-surface)]"
              >
                <div className="p-8 sm:p-10">
                  <div
                    className="inline-block rounded-full border px-3 py-1 font-mono text-[11px] uppercase tracking-[0.2em]"
                    style={{ borderColor: d.color, color: d.color }}
                  >
                    {c.tag}
                  </div>
                  <h3 className="mt-4 font-display text-2xl font-bold sm:text-3xl">
                    {c.name}
                  </h3>
                  <p className="mt-1 text-sm text-[var(--color-ink-dim)]">{c.subtitle}</p>
                  <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[var(--color-ink-dim)] sm:text-base">
                    {c.description}
                  </p>

                  <div className="mt-8 grid gap-4 sm:grid-cols-3">
                    {c.features.map((f) => (
                      <div key={f.title}>
                        <f.icon size={20} style={{ color: d.color }} />
                        <h4 className="mt-3 font-display text-base font-bold">
                          {f.title}
                        </h4>
                        <p className="mt-1 text-sm leading-relaxed text-[var(--color-ink-dim)]">
                          {f.body}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 flex flex-wrap items-center gap-3">
                    <a
                      href="#"
                      className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-opacity hover:opacity-85"
                      style={{ background: d.color, color: "var(--color-void)" }}
                    >
                      Start the lesson
                      <ExternalLink size={16} />
                    </a>
                    <a
                      href="https://www.paypal.com/donate/?business=hcmuniverse@gmail.com&currency_code=AUD"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-medium transition-colors hover:border-[var(--color-education)]"
                      style={{ borderColor: "var(--color-line)" }}
                    >
                      <Heart size={16} style={{ color: d.color }} />
                      Support this course
                    </a>
                  </div>
                  <p className="mt-3 font-mono text-[11px] text-[var(--color-ink-dim)]">
                    Lesson content is still a placeholder — swap it in{" "}
                    <code>src/pages/Education.jsx</code> once the lesson is
                    written. Support goes to hcmuniverse@gmail.com via
                    PayPal.
                  </p>
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
