import { FileText, TrendingUp, ShieldAlert, Landmark } from "lucide-react";
import DivisionHero from "../components/DivisionHero";
import AppBadges from "../components/AppBadges";
import { divisions } from "../data/divisions";

const d = divisions.find((x) => x.key === "investors");

const highlights = [
  { label: "Divisions live", value: "20+" },
  { label: "Illustrative ARR", value: "$4.2M" },
  { label: "YoY growth (illustrative)", value: "+38%" },
  { label: "Markets covered", value: "US · AU · IN" },
];

const markets = [
  {
    market: "United States",
    format: "10-K style annual report",
    body: "Filed the way a US-listed company reports to the SEC — audited financials, a Management Discussion & Analysis section, and a Risk Factors section disclosing what could go wrong, not just what's going right.",
    figure: "Illustrative FY revenue: US$2.6M, +41% YoY",
  },
  {
    market: "Australia",
    format: "ASX-style annual report",
    body: "Structured like an ASX-listed annual report — a Directors' Report, remuneration disclosures, and a corporate governance statement alongside the financials, aimed at both institutional and retail shareholders.",
    figure: "Illustrative FY revenue: A$1.1M, +33% YoY",
  },
  {
    market: "India",
    format: "Companies Act / SEBI-style annual report",
    body: "Formatted to match Indian disclosure norms — a Board's Report, Management Discussion & Analysis, and related-party disclosures, consistent with what SEBI and the Companies Act require of listed entities.",
    figure: "Illustrative FY revenue: ₹3.4Cr, +52% YoY",
  },
];

export default function Investors() {
  return (
    <>
      <DivisionHero
        code={d.code}
        name={d.name}
        tagline={d.tagline}
        description="An investor relations page, built the way real ones are — a shareholder letter, key metrics, and market-specific annual reports. HCM isn't a public company yet; everything below is illustrative."
        color={d.color}
      />

      <section className="border-b border-[var(--color-line)] px-5 py-6 sm:px-8">
        <div className="mx-auto flex max-w-5xl items-start gap-3 rounded-xl border border-[var(--color-line)] bg-[var(--color-surface)] p-4">
          <ShieldAlert size={18} style={{ color: d.color }} className="mt-0.5 shrink-0" />
          <p className="text-sm text-[var(--color-ink-dim)]">
            <strong className="text-[var(--color-ink)]">HCM has no public financials.</strong>{" "}
            Every figure on this page is a dummy, built to show the shape of
            a real investor report. None of it is a real financial
            statement, an offer of securities, or investment advice.
          </p>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-3xl rounded-2xl border border-[var(--color-line)] bg-[var(--color-surface)] p-8 sm:p-10">
          <FileText size={22} style={{ color: d.color }} />
          <h2 className="mt-4 font-display text-xl font-bold sm:text-2xl">
            A letter to shareholders
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-[var(--color-ink-dim)] sm:text-base">
            "This year we took HCM from a single site to a genuine
            portfolio — Tech, AI, Travel, Markets, and everything since,
            each shipped as its own division under one brand. Growth this
            period was driven by new divisions launching faster than we
            retired old ones, and by keeping the build entirely AI-first.
            We're publishing this report the way a real company would,
            before we're actually one — because the discipline of
            reporting honestly should start before anyone's asking us to."
          </p>
          <p className="mt-4 font-mono text-[11px] text-[var(--color-ink-dim)]">
            — Illustrative shareholder letter, HCM
          </p>
        </div>
      </section>

      <section className="border-t border-[var(--color-line)] px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="mb-6 flex items-center gap-3">
            <TrendingUp size={22} style={{ color: d.color }} />
            <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-ink-dim)]">
              Key metrics (illustrative)
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-4">
            {highlights.map((h) => (
              <div
                key={h.label}
                className="rounded-2xl border border-[var(--color-line)] bg-[var(--color-surface)] p-6"
              >
                <div className="font-display text-2xl font-bold" style={{ color: d.color }}>
                  {h.value}
                </div>
                <div className="mt-1 text-sm text-[var(--color-ink-dim)]">{h.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-[var(--color-line)] px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="mb-6 flex items-center gap-3">
            <Landmark size={22} style={{ color: d.color }} />
            <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-ink-dim)]">
              Annual report, by market
            </h2>
          </div>
          <p className="mb-6 max-w-2xl text-sm leading-relaxed text-[var(--color-ink-dim)]">
            Real annual reports don't look the same everywhere — each
            market has its own disclosure format. Here's HCM's dummy report
            in each style.
          </p>
          <div className="grid gap-4 sm:grid-cols-3">
            {markets.map((m) => (
              <div
                key={m.market}
                className="rounded-2xl border border-[var(--color-line)] bg-[var(--color-surface)] p-6"
              >
                <h3 className="font-display text-lg font-bold">{m.market}</h3>
                <div className="mt-1 font-mono text-[11px] uppercase tracking-[0.15em]" style={{ color: d.color }}>
                  {m.format}
                </div>
                <p className="mt-3 text-sm leading-relaxed text-[var(--color-ink-dim)]">
                  {m.body}
                </p>
                <p className="mt-3 font-mono text-[11px] text-[var(--color-ink-dim)]">
                  {m.figure}
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
