import { Building2, Sparkles } from "lucide-react";
import DivisionHero from "../components/DivisionHero";
import AppBadges from "../components/AppBadges";
import { divisions } from "../data/divisions";

const d = divisions.find((x) => x.key === "law");

const flag = (name) =>
  `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(name)}?width=160`;

const countries = [
  {
    name: "Australia",
    flag: flag("Flag of Australia.svg"),
    general:
      "Platforms are regulated under the Online Safety Act, with codes covering seriously harmful content like child exploitation material.",
    minors:
      "World-first: the Online Safety Amendment (Social Media Minimum Age) Act bans under-16s from holding accounts on major platforms outright, in force since December 2025, with no parental-consent exception and penalties up to roughly A$50 million per platform.",
  },
  {
    name: "United States",
    flag: flag("Flag of the United States.svg"),
    general:
      "No single federal social media law — regulation is a patchwork of the FTC's endorsement/disclosure rules for creators and state-level statutes, several of which are being challenged in court.",
    minors:
      "COPPA requires parental consent for collecting data from under-13s. There's no federal under-16 ban, but over a dozen states have passed their own age or design-code restrictions, and the proposed Kids Online Safety Act would add a broader 'duty of care' for platforms toward minors.",
  },
  {
    name: "Canada",
    flag: flag("Flag of Canada.svg"),
    general:
      "Privacy is governed federally by PIPEDA; there's no single consolidated online-safety statute yet.",
    minors:
      "The Online Harms Bill (reintroduction expected) would add a 24-hour takedown rule for child exploitation material and create a Digital Safety Commission — reports suggest it may include an under-14 social media restriction, though nothing is law yet.",
  },
  {
    name: "New Zealand",
    flag: flag("Flag of New Zealand.svg"),
    general:
      "Online harassment and abuse are covered by the Harmful Digital Communications Act 2015; there's no universal age-verification requirement yet.",
    minors:
      "A member's bill modeled on Australia's ban (Social Media Age-Restricted Users Bill) has been proposed and debated, but as of mid-2026 it remains stalled amid coalition disagreement — nothing enacted yet.",
  },
  {
    name: "India",
    flag: flag("Flag of India.svg"),
    general:
      "Platforms operate under the IT Rules (intermediary guidelines), with separate disclosure norms from the advertising standards body for influencers.",
    minors:
      "The Digital Personal Data Protection Act defines a child as anyone under 18 — broader than most countries — and requires verifiable parental consent before processing a minor's data, banning behavioural tracking and targeted ads aimed at children entirely.",
  },
  {
    name: "China",
    flag: flag("Flag of the People's Republic of China.svg"),
    general:
      "Platforms operate under real-name registration requirements and the Personal Information Protection Law, which treats any data belonging to a under-14 user as sensitive by default.",
    minors:
      "Mandatory 'minor mode' caps daily use (as low as one hour for under-16s) and blocks access overnight; live-streaming accounts are banned outright for under-16s, enforced through real-name age verification rather than self-reported birthdates.",
  },
];

export default function Law() {
  return (
    <>
      <DivisionHero
        code={d.code}
        name={d.name}
        tagline={d.tagline}
        description="A lot of social media law now runs quietly inside IT systems — age gates, content filters, consent flows — and it's different in every country. HCM Law tracks it country by country, in plain English."
        color={d.color}
      />

      <section className="px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-ink-dim)]">
            Six countries, to start
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[var(--color-ink-dim)]">
            What creators, everyday users, and the platforms themselves are
            legally required to do — split into general content rules and
            the (usually stricter) rules around children.
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {countries.map((c) => (
              <div
                key={c.name}
                className="rounded-2xl border border-[var(--color-line)] bg-[var(--color-surface)] p-6"
              >
                <div className="flex items-center gap-3">
                  <img
                    src={c.flag}
                    alt={`Flag of ${c.name}`}
                    className="h-6 w-9 rounded-sm object-cover"
                    loading="lazy"
                  />
                  <h3 className="font-display text-lg font-bold">{c.name}</h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-[var(--color-ink-dim)]">
                  <span className="font-mono text-[10px] uppercase tracking-[0.15em]" style={{ color: d.color }}>
                    General
                  </span>{" "}
                  {c.general}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-[var(--color-ink-dim)]">
                  <span className="font-mono text-[10px] uppercase tracking-[0.15em]" style={{ color: d.color }}>
                    Minors
                  </span>{" "}
                  {c.minors}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-6 font-mono text-[11px] text-[var(--color-ink-dim)]">
            General legal information, not legal advice. Laws here are
            genuinely moving targets — several are proposed, not yet in
            force. Verify against the current regulator before relying on
            anything above.
          </p>
        </div>
      </section>

      <section className="border-t border-[var(--color-line)] px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-3xl rounded-2xl border border-[var(--color-line)] bg-[var(--color-surface)] p-8 sm:p-10">
          <Building2 size={22} style={{ color: d.color }} />
          <h2 className="mt-4 font-display text-xl font-bold sm:text-2xl">
            Where this is headed
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-[var(--color-ink-dim)] sm:text-base">
            This page is the research layer. The actual goal is a product:
            software that keeps corporates compliant with social media and
            content law as it changes, country by country, without needing
            a standing legal team to watch every jurisdiction — flagging
            what's changed, what applies to your platform, and what to fix,
            automatically.
          </p>
          <div className="mt-4 flex items-center gap-2 font-mono text-[11px] text-[var(--color-ink-dim)]">
            <Sparkles size={14} style={{ color: d.color }} />
            Currently research and content — the compliance product is next.
          </div>
        </div>
      </section>
      <AppBadges color={d.color} />
    </>
  );
}
