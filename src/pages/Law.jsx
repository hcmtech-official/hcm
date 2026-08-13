import { Scale, MonitorPlay, Car, ShieldQuestion } from "lucide-react";
import DivisionHero from "../components/DivisionHero";
import AppBadges from "../components/AppBadges";
import { divisions } from "../data/divisions";

const d = divisions.find((x) => x.key === "law");

const topics = [
  {
    icon: MonitorPlay,
    title: "Creator & platform law",
    body: "Copyright and fair use on YouTube, AI-generated content disclosure rules, demonetization and account suspension disputes, and what platform terms of service actually let a creator do.",
  },
  {
    icon: Scale,
    title: "Social media law",
    body: "Defamation, impersonation, privacy, and advertising disclosure — the legal side of running an account with an audience attached to it.",
  },
  {
    icon: Car,
    title: "Gig & ride-share law",
    body: "Worker classification, minimum standards, and deactivation rights for people driving or delivering through an app rather than working for an employer.",
  },
  {
    icon: ShieldQuestion,
    title: "Wherever IT runs the system",
    body: "Any space where software — not a person — is making the calls: algorithmic account bans, automated contracts, and the gap between what a platform can do and what the law actually allows.",
  },
];

export default function Law() {
  return (
    <>
      <DivisionHero
        code={d.code}
        name={d.name}
        tagline={d.tagline}
        description="A lot of law now runs quietly inside IT systems — the terms nobody reads, the algorithm that decides an account's fate, the contract a gig app enforces automatically. HCM Law explains that layer in plain English."
        color={d.color}
      />

      <section className="px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-ink-dim)]">
            What we cover
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
            General legal information, not legal advice. Laws vary by
            country and change often — talk to a qualified lawyer about
            your own situation.
          </p>
        </div>
      </section>
      <AppBadges color={d.color} />
    </>
  );
}
