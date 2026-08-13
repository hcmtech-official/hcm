import { Coins, PieChart, Map, ShieldAlert } from "lucide-react";
import DivisionHero from "../components/DivisionHero";
import AppBadges from "../components/AppBadges";
import { divisions } from "../data/divisions";

const d = divisions.find((x) => x.key === "crypto");

const allocation = [
  { label: "Community & ecosystem", pct: 40 },
  { label: "Team (vested over time)", pct: 20 },
  { label: "Treasury", pct: 20 },
  { label: "Early backers", pct: 15 },
  { label: "Liquidity", pct: 5 },
];

const roadmap = [
  { stage: "Now", body: "Concept and whitepaper — defining what the token is actually for before anything else." },
  { stage: "Next", body: "Publish tokenomics and vesting schedule in full, open the concept up for community feedback." },
  { stage: "Later", body: "Testnet, security audit, and a decision on whether a token is genuinely the right tool here." },
];

export default function Crypto() {
  return (
    <>
      <DivisionHero
        code={d.code}
        name={d.name}
        tagline={d.tagline}
        description="HCM's early-stage exploration of its own token — published honestly, at concept stage, before any code, audit, or launch."
        color={d.color}
        image="https://commons.wikimedia.org/wiki/Special:FilePath/Bitcoin%20BTC%20golden%20coin%20with%20the%20symbol.jpg?width=1600"
        imageCredit="Photo via Wikimedia Commons"
      />

      <section className="border-b border-[var(--color-line)] px-5 py-6 sm:px-8">
        <div className="mx-auto flex max-w-5xl items-start gap-3 rounded-xl border border-[var(--color-line)] bg-[var(--color-surface)] p-4">
          <ShieldAlert size={18} style={{ color: d.color }} className="mt-0.5 shrink-0" />
          <p className="text-sm text-[var(--color-ink-dim)]">
            <strong className="text-[var(--color-ink)]">No token exists yet.</strong>{" "}
            Everything on this page is a concept, not an offer to sell or a
            solicitation to invest. Nothing here is financial advice.
          </p>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="mb-6 flex items-center gap-3">
            <Coins size={22} style={{ color: d.color }} />
            <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-ink-dim)]">
              The idea
            </h2>
          </div>
          <p className="max-w-2xl text-sm leading-relaxed text-[var(--color-ink-dim)] sm:text-base">
            HCM already runs as a portfolio of divisions under one brand.
            The token concept is a way to let people hold a stake in that
            portfolio directly — not a promise of returns, a mechanism for
            shared ownership as more divisions launch. Whether that's
            actually the right structure is still an open question, which
            is exactly why this page exists at concept stage rather than as
            a launch.
          </p>
        </div>
      </section>

      <section className="border-t border-[var(--color-line)] px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="mb-6 flex items-center gap-3">
            <PieChart size={22} style={{ color: d.color }} />
            <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-ink-dim)]">
              Proposed allocation — a draft, not final
            </h2>
          </div>
          <div className="space-y-3">
            {allocation.map((a) => (
              <div key={a.label}>
                <div className="mb-1 flex items-center justify-between text-sm">
                  <span className="text-[var(--color-ink)]">{a.label}</span>
                  <span className="font-mono text-[var(--color-ink-dim)]">{a.pct}%</span>
                </div>
                <div className="h-2 w-full overflow-hidden rounded-full bg-[var(--color-void-soft)]">
                  <div
                    className="h-full rounded-full"
                    style={{ width: `${a.pct}%`, background: d.color }}
                  />
                </div>
              </div>
            ))}
          </div>
          <p className="mt-4 font-mono text-[11px] text-[var(--color-ink-dim)]">
            Illustrative split only — subject to change before any
            whitepaper is finalized.
          </p>
        </div>
      </section>

      <section className="border-t border-[var(--color-line)] px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="mb-6 flex items-center gap-3">
            <Map size={22} style={{ color: d.color }} />
            <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-ink-dim)]">
              Roadmap
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {roadmap.map((r) => (
              <div
                key={r.stage}
                className="rounded-2xl border border-[var(--color-line)] bg-[var(--color-surface)] p-6"
              >
                <div className="font-mono text-[11px] uppercase tracking-[0.2em]" style={{ color: d.color }}>
                  {r.stage}
                </div>
                <p className="mt-2 text-sm leading-relaxed text-[var(--color-ink-dim)]">
                  {r.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <AppBadges color={d.color} />
    </>
  );
}
