import { Activity, HeartPulse, LifeBuoy, BookOpenText } from "lucide-react";
import DivisionHero from "../components/DivisionHero";
import AppBadges from "../components/AppBadges";
import { divisions } from "../data/divisions";

const d = divisions.find((x) => x.key === "health");

const topics = [
  {
    icon: Activity,
    title: "Diabetes",
    body: "Plain-English explainers on type 1 and type 2 diabetes — what's actually going on in the body, and what day-to-day management tends to involve.",
  },
  {
    icon: HeartPulse,
    title: "Heart health",
    body: "The basics of blood pressure, cholesterol, and common heart conditions, written for someone who's just been handed a diagnosis and needs a starting point.",
  },
  {
    icon: LifeBuoy,
    title: "Addiction & recovery",
    body: "Understanding what addiction is, how recovery pathways generally work, and where to find real professional support — written with care, not judgment.",
  },
  {
    icon: BookOpenText,
    title: "General health literacy",
    body: "Breaking down medical language and common conditions so appointments are easier to walk into prepared.",
  },
];

export default function Health() {
  return (
    <>
      <DivisionHero
        code={d.code}
        name={d.name}
        tagline={d.tagline}
        description="Clear, judgment-free information on the health topics people actually search for at 2am — a starting point for understanding, not a replacement for a doctor."
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
            General information only — not a diagnosis or medical advice.
            Always talk to a doctor or qualified professional about your own
            situation. If you or someone you know is in crisis, contact a
            local crisis line or emergency services.
          </p>
        </div>
      </section>
      <AppBadges color={d.color} />
    </>
  );
}
