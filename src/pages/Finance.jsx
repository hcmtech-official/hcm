import { useMemo, useState } from "react";
import {
  BookOpenCheck,
  Building2,
  LineChart,
  ShieldCheck,
  Calendar,
  ExternalLink,
  GraduationCap,
} from "lucide-react";
import DivisionHero from "../components/DivisionHero";
import { divisions } from "../data/divisions";
import { markets, reports } from "../data/financeReports";

const d = divisions.find((x) => x.key === "finance");

function formatDate(iso) {
  return new Date(iso + "T00:00:00").toLocaleDateString("en-AU", {
    weekday: "short",
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export default function Finance() {
  const [activeMarket, setActiveMarket] = useState("us");

  const marketReports = useMemo(
    () =>
      reports
        .filter((r) => r.market === activeMarket)
        .sort((a, b) => (a.date < b.date ? 1 : -1)),
    [activeMarket]
  );

  const [activeDate, setActiveDate] = useState(marketReports[0]?.date);
  const report =
    marketReports.find((r) => r.date === activeDate) || marketReports[0];

  function selectMarket(key) {
    setActiveMarket(key);
    const first = reports
      .filter((r) => r.market === key)
      .sort((a, b) => (a.date < b.date ? 1 : -1))[0];
    setActiveDate(first?.date);
  }

  return (
    <>
      <DivisionHero
        code={d.code}
        name={d.name}
        tagline={d.tagline}
        description="One company, one annual report, every morning. Read the same stock everyone else skims and you'll start seeing what a trader sees — company health, who actually owns it, and whether the numbers hold up."
        color={d.color}
      />

      <section className="px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-ink-dim)]">
            Markets
          </h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {markets.map((m) => (
              <button
                key={m.key}
                onClick={() => selectMarket(m.key)}
                className="rounded-full border px-4 py-2 text-sm font-medium transition-colors"
                style={
                  activeMarket === m.key
                    ? {
                        borderColor: d.color,
                        background: d.color,
                        color: "#06080e",
                      }
                    : {
                        borderColor: "var(--color-line)",
                        color: "var(--color-ink-dim)",
                      }
                }
              >
                <span className="mr-1.5">{m.flag}</span>
                {m.name}
              </button>
            ))}
          </div>

          {!report ? (
            <div className="mt-10 rounded-2xl border border-[var(--color-line)] p-8 text-sm text-[var(--color-ink-dim)]">
              No report published for this market yet — check back after the
              next 7:00 AM update.
            </div>
          ) : (
            <div className="mt-10 grid gap-8 sm:grid-cols-[160px_1fr]">
              {/* Date rail */}
              <div className="flex gap-2 overflow-x-auto sm:flex-col sm:overflow-visible">
                {marketReports.map((r) => (
                  <button
                    key={r.date}
                    onClick={() => setActiveDate(r.date)}
                    className="flex shrink-0 items-center gap-2 rounded-xl border px-3 py-2 text-left text-xs sm:shrink"
                    style={
                      r.date === activeDate
                        ? { borderColor: d.color, color: d.color }
                        : {
                            borderColor: "var(--color-line)",
                            color: "var(--color-ink-dim)",
                          }
                    }
                  >
                    <Calendar size={13} className="shrink-0" />
                    {formatDate(r.date)}
                  </button>
                ))}
              </div>

              {/* Report */}
              <div className="rounded-2xl border border-[var(--color-line)] p-6 sm:p-8">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <div>
                    <div className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-ink-dim)]">
                      {report.exchange} · {report.ticker}
                    </div>
                    <h3 className="font-display text-2xl font-bold sm:text-3xl">
                      {report.company}
                    </h3>
                    <p className="mt-1 text-sm text-[var(--color-ink-dim)]">
                      {report.fiscalYear}
                    </p>
                  </div>
                </div>

                {report.sourceUrl && (
                  <a
                    href={report.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-medium transition-colors"
                    style={{ borderColor: d.color, color: d.color }}
                  >
                    <ExternalLink size={12} />
                    {report.sourceLabel || "Read the original release"}
                  </a>
                )}

                <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
                  {report.stats.map((s) => (
                    <div
                      key={s.label}
                      className="rounded-xl border border-[var(--color-line)] p-3"
                    >
                      <div className="text-[11px] text-[var(--color-ink-dim)]">
                        {s.label}
                      </div>
                      <div className="mt-1 font-mono text-sm font-semibold">
                        {s.value}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 space-y-8">
                  <div>
                    <div
                      className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em]"
                      style={{ color: d.color }}
                    >
                      <BookOpenCheck size={14} /> Summary
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-[var(--color-ink-dim)]">
                      {report.summary}
                    </p>
                  </div>

                  <div>
                    <div
                      className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em]"
                      style={{ color: d.color }}
                    >
                      <Building2 size={14} /> Who owns it
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-[var(--color-ink-dim)]">
                      {report.ownership}
                    </p>
                  </div>

                  <div>
                    <div
                      className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em]"
                      style={{ color: d.color }}
                    >
                      <LineChart size={14} /> How a trader reads this
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-[var(--color-ink-dim)]">
                      {report.traderRead}
                    </p>
                  </div>

                  <div>
                    <div
                      className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em]"
                      style={{ color: d.color }}
                    >
                      <ShieldCheck size={14} /> Health checklist
                    </div>
                    <ul className="mt-2 space-y-1.5 text-sm leading-relaxed text-[var(--color-ink-dim)]">
                      {report.healthSignals.map((h, i) => (
                        <li key={i} className="flex gap-2">
                          <span style={{ color: d.color }}>—</span>
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {report.releaseExcerpt && (
                    <div
                      className="rounded-xl border p-4"
                      style={{ borderColor: "var(--color-line)" }}
                    >
                      <div className="text-[11px] font-mono uppercase tracking-[0.15em] text-[var(--color-ink-dim)]">
                        From the release · {report.releaseExcerpt.context}
                      </div>
                      <p className="mt-2 text-sm italic leading-relaxed">
                        {report.releaseExcerpt.paraphrase}
                      </p>
                      <p className="mt-2 text-[11px] text-[var(--color-ink-dim)]">
                        Paraphrased — read the original release above for
                        exact wording.
                      </p>
                      <div
                        className="mt-3 flex items-start gap-2 text-sm leading-relaxed"
                        style={{ color: d.color }}
                      >
                        <span className="shrink-0">→</span>
                        <span className="text-[var(--color-ink-dim)]">
                          {report.releaseExcerpt.lesson}
                        </span>
                      </div>
                    </div>
                  )}

                  {report.readingGuide && (
                    <div>
                      <div
                        className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em]"
                        style={{ color: d.color }}
                      >
                        <GraduationCap size={14} /> How to read this release
                      </div>
                      <p className="mt-2 text-xs text-[var(--color-ink-dim)]">
                        The skill this section builds: reading the primary
                        source itself, not just a summary of it.
                      </p>
                      <ol className="mt-3 space-y-4">
                        {report.readingGuide.map((step, i) => (
                          <li key={i} className="flex gap-3">
                            <span
                              className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[11px] font-bold"
                              style={{
                                background: d.color,
                                color: "#06080e",
                              }}
                            >
                              {i + 1}
                            </span>
                            <div>
                              <div className="text-sm font-semibold">
                                {step.title}
                              </div>
                              <p className="mt-1 text-sm leading-relaxed text-[var(--color-ink-dim)]">
                                {step.content}
                              </p>
                            </div>
                          </li>
                        ))}
                      </ol>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          <p className="mt-8 text-xs text-[var(--color-ink-dim)]">
            New report published daily at 7:00 AM. One market per day, cycling
            US → Korea → Singapore → Australia → India → China.
          </p>
        </div>
      </section>
    </>
  );
}
