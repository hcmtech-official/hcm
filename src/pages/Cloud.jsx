import { Cloud as CloudIcon, Server, Boxes, Sparkles } from "lucide-react";
import DivisionHero from "../components/DivisionHero";
import AppBadges from "../components/AppBadges";
import { divisions } from "../data/divisions";

const d = divisions.find((x) => x.key === "cloud");

const providers = [
  {
    name: "Amazon Web Services",
    short: "AWS",
    accent: "#ff9900",
    note: "Still the biggest by market share and the deepest service catalog of the three. EC2, S3, and Lambda remain the default reach-for on most teams' first deploy, and Bedrock is AWS's answer for hosting and serving foundation models without running your own GPU fleet.",
    strength: "Breadth of services and the most mature ecosystem of any provider.",
  },
  {
    name: "Microsoft Azure",
    short: "Azure",
    accent: "#0078d4",
    note: "The obvious pick for anything already living in the Microsoft stack — Active Directory, Office 365, .NET — and the tightest first-party integration with OpenAI's models through Azure OpenAI Service.",
    strength: "Enterprise identity, compliance tooling, and hybrid on-prem/cloud setups.",
  },
  {
    name: "Google Cloud Platform",
    short: "GCP",
    accent: "#4285f4",
    note: "The strongest data and AI/ML bench of the three — BigQuery, Vertex AI, and the TPU hardware Google builds in-house specifically for training and serving its own Gemini models.",
    strength: "Data analytics, machine learning pipelines, and Kubernetes (GCP invented it).",
  },
];

export default function Cloud() {
  return (
    <>
      <DivisionHero
        code={d.code}
        name={d.name}
        tagline={d.tagline}
        description="Every HCM division that isn't a static page runs on somebody's cloud. HCM Cloud is where we track the three that actually matter — AWS, Azure, and GCP — and where we build real, deployed projects on top of them."
        color={d.color}
      />

      <section className="px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-3xl rounded-2xl border border-[var(--color-line)] bg-[var(--color-surface)] p-8 sm:p-10">
          <CloudIcon size={22} style={{ color: d.color }} />
          <h2 className="mt-4 font-display text-xl font-bold sm:text-2xl">
            The objective
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-[var(--color-ink-dim)] sm:text-base">
            Not a comparison for comparison's sake — HCM Cloud exists so
            every other division has somewhere real to actually run.
            That means knowing each provider's genuine strengths, not
            just marketing claims, and picking the right one for the
            job in front of us instead of defaulting to whichever is
            most familiar.
          </p>
        </div>
      </section>

      <section className="border-t border-[var(--color-line)] px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="mb-2 flex items-center gap-3">
            <Server size={22} style={{ color: d.color }} />
            <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-ink-dim)]">
              The big three
            </h2>
          </div>
          <div className="mt-6 grid gap-6 sm:grid-cols-3">
            {providers.map((p) => (
              <div
                key={p.short}
                className="rounded-2xl border border-[var(--color-line)] bg-[var(--color-surface)] p-6"
              >
                <div
                  className="inline-flex rounded-lg px-2.5 py-1 font-mono text-[11px] font-bold tracking-wide"
                  style={{ backgroundColor: `${p.accent}22`, color: p.accent }}
                >
                  {p.short}
                </div>
                <h3 className="mt-4 font-display text-lg font-bold">{p.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--color-ink-dim)]">
                  {p.note}
                </p>
                <p className="mt-4 border-t border-[var(--color-line)] pt-4 text-xs font-semibold uppercase tracking-wide text-[var(--color-ink-dim)]">
                  Strongest at
                </p>
                <p className="mt-1 text-sm text-[var(--color-ink-dim)]">{p.strength}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-[var(--color-line)] px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-3xl rounded-2xl border border-dashed border-[var(--color-line)] bg-[var(--color-surface)] p-8 sm:p-10">
          <div className="flex items-center gap-3">
            <Boxes size={22} style={{ color: d.color }} />
            <h2 className="font-display text-xl font-bold sm:text-2xl">
              Sample project
            </h2>
          </div>
          <p className="mt-3 text-sm leading-relaxed text-[var(--color-ink-dim)] sm:text-base">
            A real, deployed sample project on top of one (or more) of
            these three is next up for this page — coming soon.
          </p>
          <div className="mt-4 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-wide text-[var(--color-ink-dim)]">
            <Sparkles size={14} style={{ color: d.color }} />
            In progress
          </div>
        </div>
      </section>
      <AppBadges color={d.color} />
    </>
  );
}
