import { Bot, LineChart, UserCheck, Scale, ShieldAlert } from "lucide-react";
import DivisionHero from "../components/DivisionHero";
import AppBadges from "../components/AppBadges";
import { divisions } from "../data/divisions";

const d = divisions.find((x) => x.key === "hr");

const now = [
  {
    icon: Bot,
    title: "Agentic recruiting assistants",
    body: "AI teammates now coordinate scheduling, screen candidates, and handle first-round conversations — teams using them report time-to-hire cut by up to 70%.",
  },
  {
    icon: UserCheck,
    title: "Skills-based hiring over degrees",
    body: "The majority of employers now report skills-based hiring criteria for entry-level roles, with AI doing the matching instead of a keyword-scanning resume filter.",
  },
  {
    icon: LineChart,
    title: "Predictive workforce analytics",
    body: "AI has moved past picking candidates from resumes — it's now used to forecast turnover risk and staffing gaps before they show up in the numbers.",
  },
];

const vision = [
  {
    title: "Sourcing & screening",
    body: "AI handles the full funnel — finding candidates, structured first-round conversations, and shortlisting — freeing whoever's hiring to focus on the final call.",
  },
  {
    title: "Onboarding",
    body: "A new hire's first weeks — paperwork, systems access, team introductions, early questions — guided end-to-end by an AI onboarding assistant, not a scattered PDF packet.",
  },
  {
    title: "Performance & growth",
    body: "Continuous, structured feedback instead of an annual review — tracking real output and flagging where someone's ready for more, or quietly struggling.",
  },
  {
    title: "Compliance, automatically",
    body: "Pay equity reporting, classification rules, and jurisdiction-specific requirements checked continuously in the background, not scrambled together once a year.",
  },
];

export default function HR() {
  return (
    <>
      <DivisionHero
        code={d.code}
        name={d.name}
        tagline={d.tagline}
        description="HCM already runs AI-first. HCM HR is us turning that same question outward: what would it actually take for a workplace's hiring, onboarding, and people function to run the same way?"
        color={d.color}
      />

      <section className="px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-ink-dim)]">
            Where AI already is
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {now.map((n) => (
              <div
                key={n.title}
                className="rounded-2xl border border-[var(--color-line)] bg-[var(--color-surface)] p-6"
              >
                <n.icon size={22} style={{ color: d.color }} />
                <h3 className="mt-4 font-display text-lg font-bold">{n.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--color-ink-dim)]">
                  {n.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-[var(--color-line)] px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-ink-dim)]">
            The AI HR vision
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[var(--color-ink-dim)]">
            Most companies are bolting AI onto individual HR tasks. The
            more interesting question is what the whole function looks
            like if it's built AI-first from the ground up:
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {vision.map((v) => (
              <div
                key={v.title}
                className="rounded-2xl border border-[var(--color-line)] bg-[var(--color-surface)] p-6"
              >
                <h3 className="font-display text-lg font-bold">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--color-ink-dim)]">
                  {v.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-[var(--color-line)] px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-3xl rounded-2xl border border-[var(--color-line)] bg-[var(--color-surface)] p-8">
          <div className="flex items-start gap-3">
            <ShieldAlert size={20} style={{ color: d.color }} className="mt-0.5 shrink-0" />
            <div>
              <h3 className="font-display text-lg font-bold">
                The part that can't be automated away
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--color-ink-dim)]">
                Hiring and employment decisions are legally sensitive for
                good reason — algorithmic bias in screening tools is a
                real, documented risk, not a hypothetical one. Any real AI
                HR system needs human oversight built in from day one:
                auditable decisions, a person accountable for the outcome,
                and compliance with anti-discrimination law in whatever
                jurisdiction it operates in. That governance layer isn't
                optional — it's the actual hard part of this vision.
              </p>
            </div>
          </div>
        </div>
      </section>
      <AppBadges color={d.color} />
    </>
  );
}
