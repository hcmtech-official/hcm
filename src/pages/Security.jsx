import { ShieldAlert, Bug, Skull, Radar, ArrowUpRight } from "lucide-react";
import DivisionHero from "../components/DivisionHero";
import AppBadges from "../components/AppBadges";
import { divisions } from "../data/divisions";

const d = divisions.find((x) => x.key === "security");

const threats = [
  {
    icon: Bug,
    title: "Agentic AI is now the biggest attack surface",
    body: "The single theme that dominated Black Hat USA 2026 — agents that browse, run code, and call tools on your behalf are also the newest thing attackers target. Researchers demonstrated hijacking an AI browser agent through malicious instructions hidden inside ordinary web content, with no simple fix in sight.",
  },
  {
    icon: Radar,
    title: "Nonhuman identities, hiding in plain sight",
    body: "Every AI agent, service account, and API key is an identity too — and dormant ones create blind spots nobody's watching. New open-source tooling debuted at Black Hat specifically to sniff out these unmonitored trust paths before an attacker finds them first.",
  },
  {
    icon: Skull,
    title: "Patch windows are getting longer, not shorter",
    body: "Mid-2026 threat data shows the average patch window stretched by 11 more days industry-wide, even as attackers weaponize new vulnerabilities faster than ever. August 2026's Patch Tuesday alone fixed 421 CVEs, including one zero-day already being exploited in the wild.",
  },
  {
    icon: ShieldAlert,
    title: "State-linked and Wall Street-targeted",
    body: "AWS publicly linked a wave of recent hacking activity to North Korea, and separate campaigns this month specifically targeted Wall Street firms — a reminder that the attackers at the top end aren't hobbyists, they're funded operations.",
  },
];

const events = [
  {
    name: "Black Hat USA 2026",
    when: "Aug 1–6, Mandalay Bay, Las Vegas",
    note: "Its 29th year — 100+ Briefings, 80+ Arsenal open-source tool demos, and six Summits including an inaugural Healthcare Summit. Opened with a main-stage conversation on cyber power in the age of AI.",
  },
  {
    name: "DEF CON 34",
    when: "Aug 6–9, Las Vegas Convention Center",
    note: "The community-driven counterpart to Black Hat — hands-on hacking, contests, and villages, running under this year's theme of \"agency.\"",
  },
  {
    name: "BSides Las Vegas",
    when: "Aug 3–5",
    note: "The smallest and most relaxed leg of Hacker Summer Camp — often where the year's best community research actually gets its first airing.",
  },
];

export default function Security() {
  return (
    <>
      <DivisionHero
        code={d.code}
        name={d.name}
        tagline={d.tagline}
        description="Every system HCM builds — cloud, AI agents, or otherwise — is a target the moment it goes live. HCM Security is where we track how that fight is actually going, straight from the researchers finding the holes."
        color={d.color}
      />

      <section className="px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-3xl rounded-2xl border border-[var(--color-line)] bg-[var(--color-surface)] p-8 sm:p-10">
          <ShieldAlert size={22} style={{ color: d.color }} />
          <h2 className="mt-4 font-display text-xl font-bold sm:text-2xl">
            The state of things right now
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-[var(--color-ink-dim)] sm:text-base">
            2026's defining shift is that the thing being attacked isn't
            just a server anymore — it's an agent that can act. Identity,
            AI governance, and exposure management dominated every major
            security conversation this year, and the gap between what
            attackers can now automate and what defenders can keep up with
            is the story underneath all of it.
          </p>
        </div>
      </section>

      <section className="border-t border-[var(--color-line)] px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="mb-2 flex items-center gap-3">
            <Bug size={22} style={{ color: d.color }} />
            <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-ink-dim)]">
              What's actually happening
            </h2>
          </div>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {threats.map((t) => (
              <div
                key={t.title}
                className="rounded-2xl border border-[var(--color-line)] bg-[var(--color-surface)] p-6"
              >
                <t.icon size={20} style={{ color: d.color }} />
                <h3 className="mt-4 font-display text-base font-bold leading-snug">
                  {t.title}
                </h3>
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
          <div className="mb-2 flex items-center gap-3">
            <Skull size={22} style={{ color: d.color }} />
            <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-ink-dim)]">
              Hacker Summer Camp 2026
            </h2>
          </div>
          <p className="max-w-2xl text-sm leading-relaxed text-[var(--color-ink-dim)]">
            The three conferences that set the security industry's agenda
            for the next twelve months, all running back-to-back in Las
            Vegas this August.
          </p>
          <div className="mt-6 space-y-4">
            {events.map((e) => (
              <div key={e.name} className="border-l-2 pl-4" style={{ borderColor: d.color }}>
                <div className="flex flex-wrap items-baseline gap-x-3">
                  <span className="font-display text-base font-bold">{e.name}</span>
                  <span className="font-mono text-[11px] uppercase tracking-wide text-[var(--color-ink-dim)]">
                    {e.when}
                  </span>
                </div>
                <p className="mt-1 text-sm leading-relaxed text-[var(--color-ink-dim)]">
                  {e.note}
                </p>
              </div>
            ))}
          </div>
          <a
            href="https://blackhat.com/us-26/"
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex items-center gap-2 font-mono text-[11px] text-[var(--color-ink-dim)] hover:underline"
          >
            Black Hat USA 2026
            <ArrowUpRight size={14} />
          </a>
          <p className="mt-6 font-mono text-[11px] text-[var(--color-ink-dim)]">
            Every product HCM ships against a real cloud (see HCM Cloud)
            gets held to this same standard — security isn't a page,
            it's a requirement.
          </p>
        </div>
      </section>
      <AppBadges color={d.color} />
    </>
  );
}
