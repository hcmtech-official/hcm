import { FlaskConical, GitBranch, MessagesSquare, Rocket, BookOpen, ArrowUpRight } from "lucide-react";
import DivisionHero from "../components/DivisionHero";
import AppBadges from "../components/AppBadges";
import { divisions } from "../data/divisions";

const d = divisions.find((x) => x.key === "labs");

const topics = [
  {
    icon: FlaskConical,
    title: "Early-access prototypes",
    body: "Working previews of AI-driven ideas HCM is testing — live before they're polished, so you're seeing them at the same stage we are.",
  },
  {
    icon: MessagesSquare,
    title: "Feedback shapes what happens next",
    body: "What actually gets used decides what moves forward and what gets retired — the experiments don't get finished behind closed doors.",
  },
  {
    icon: GitBranch,
    title: "Where ideas don't fit anywhere yet",
    body: "Not everything belongs to Tech, AI, or any other division on day one. Labs is where those ideas start before they have a home.",
  },
  {
    icon: Rocket,
    title: "From lab to its own division",
    body: "The path most HCM divisions actually took — tested here first, then spun out once it's proven itself.",
  },
];

const papers = [
  {
    title: "A Programming Paradigm for Spatiotemporal Composability",
    org: "DeepSeek AI & Peking University",
    date: "Aug 2026",
    note: "The theory behind DeepSeek Harness — an agent runtime where the model, tools, memory, and even the agent loop itself are all swappable plugins. Introduces reversible effects and reactive coeffects so agents can modify their own components mid-run without a restart.",
    url: "https://github.com/deepseek-ai/deepseek-harness",
  },
  {
    title: "ReAct: Synergizing Reasoning and Acting in Language Models",
    org: "Yao et al., Princeton / Google Research",
    date: "2022",
    note: "The original interleaved reason-then-act loop most modern agent harnesses, HCM's included, still trace their lineage back to.",
    url: "https://arxiv.org/abs/2210.03629",
  },
  {
    title: "Toolformer: Language Models Can Teach Themselves to Use Tools",
    org: "Schick et al., Meta AI",
    date: "2023",
    note: "Early proof that a model can learn when and how to call a tool on its own, rather than being hand-scripted to.",
    url: "https://arxiv.org/abs/2302.04761",
  },
  {
    title: "Voyager: An Open-Ended Embodied Agent with Large Language Models",
    org: "Wang et al., NVIDIA",
    date: "2023",
    note: "A lifelong-learning agent that writes and stores its own skills as it goes — an early look at agents that accumulate capability over time instead of resetting.",
    url: "https://arxiv.org/abs/2305.16291",
  },
];

export default function Labs() {
  return (
    <>
      <DivisionHero
        code={d.code}
        name={d.name}
        tagline={d.tagline}
        description="HCM's experimental arm — early, rough-edged previews of AI-driven ideas, released before they're finished so the direction gets shaped by what people actually use."
        color={d.color}
      />

      <section className="px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-ink-dim)]">
            How it works
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {topics.map((t) => (
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
          <p className="mt-6 font-mono text-[11px] text-[var(--color-ink-dim)]">
            Nothing in HCM Labs is a finished product yet — expect rough
            edges, and expect things to change fast.
          </p>
        </div>
      </section>

      <section className="border-t border-[var(--color-line)] px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="mb-2 flex items-center gap-3">
            <BookOpen size={22} style={{ color: d.color }} />
            <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-ink-dim)]">
              Research we're tracking
            </h2>
          </div>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[var(--color-ink-dim)]">
            The papers actually shaping how agent harnesses like HCM's get
            built — not a comprehensive list, just what's currently
            informing the roadmap.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {papers.map((p) => (
              <a
                key={p.title}
                href={p.url}
                target="_blank"
                rel="noreferrer"
                className="group rounded-2xl border border-[var(--color-line)] bg-[var(--color-surface)] p-6 transition hover:border-[var(--color-ink-dim)]"
              >
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-display text-base font-bold leading-snug">
                    {p.title}
                  </h3>
                  <ArrowUpRight
                    size={16}
                    className="mt-1 shrink-0 opacity-50 transition group-hover:opacity-100"
                  />
                </div>
                <p className="mt-2 font-mono text-[11px] uppercase tracking-wide text-[var(--color-ink-dim)]">
                  {p.org} · {p.date}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-[var(--color-ink-dim)]">
                  {p.note}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>
      <AppBadges color={d.color} />
    </>
  );
}
