import { BookOpen, Target, Download, Brain } from "lucide-react";
import DivisionHero from "../components/DivisionHero";
import AppBadges from "../components/AppBadges";
import { divisions } from "../data/divisions";

const d = divisions.find((x) => x.key === "books");

export default function Books() {
  return (
    <>
      <DivisionHero
        code={d.code}
        name={d.name}
        tagline={d.tagline}
        description="HCM Books exists to write the books AI itself hasn't had written about it yet — plain, opinionated, and willing to take a position."
        color={d.color}
      />

      <section className="px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-3xl rounded-2xl border border-[var(--color-line)] bg-[var(--color-surface)] p-8 sm:p-10">
          <Target size={22} style={{ color: d.color }} />
          <h2 className="mt-4 font-display text-xl font-bold sm:text-2xl">
            The objective
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-[var(--color-ink-dim)] sm:text-base">
            HCM plans to write books entirely about AI — its ideas,
            its consequences, and the fields that don't exist yet to make
            sense of it. Every title under this division starts from a
            real, arguable position, not a survey of what's already been
            said.
          </p>
        </div>
      </section>

      <section className="border-t border-[var(--color-line)] px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-ink-dim)]">
            First title — out now
          </h2>

          <div className="mt-6 overflow-hidden rounded-2xl border border-[var(--color-line)] bg-[var(--color-surface)]">
            <div className="grid gap-8 p-8 sm:grid-cols-[1fr_1.4fr] sm:p-10">
              <div
                className="flex aspect-[3/4] flex-col justify-between rounded-xl p-6"
                style={{ background: `linear-gradient(160deg, ${d.color}, #1a0f05)` }}
              >
                <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/70">
                  HCM Books
                </div>
                <div>
                  <Brain size={28} className="mb-3 text-white/90" />
                  <div className="font-display text-2xl font-bold leading-tight text-white">
                    AI Psychology
                  </div>
                  <div className="mt-2 text-sm italic text-white/70">
                    Why studying the human mind isn't enough anymore
                  </div>
                </div>
                <div className="font-mono text-[10px] text-white/50">A first title from HCM Books</div>
              </div>

              <div>
                <div
                  className="inline-block rounded-full border px-3 py-1 font-mono text-[11px] uppercase tracking-[0.2em]"
                  style={{ borderColor: d.color, color: d.color }}
                >
                  Non-fiction · 5 pages
                </div>
                <h3 className="mt-4 font-display text-2xl font-bold">AI Psychology</h3>
                <p className="mt-4 text-sm leading-relaxed text-[var(--color-ink-dim)] sm:text-base">
                  Psychology has spent a century and a half studying the
                  human mind. This book asks the obvious question nobody's
                  built a field around yet: now that we spend real parts of
                  our lives talking to systems that behave in psychologically
                  legible ways — consistent, biased, sometimes manipulable —
                  doesn't that deserve a discipline of its own, built on its
                  own terms rather than borrowed from ours?
                </p>
                <p className="mt-4 text-sm leading-relaxed text-[var(--color-ink-dim)]">
                  It's not a claim that AI has a mind like a person's. It's
                  an argument that the behavior is real, consequential, and
                  different enough from human behavior that studying it
                  through psychology's old lens is starting to cost us more
                  than it explains.
                </p>
                <a
                  href="./documents/AI-Psychology.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-opacity hover:opacity-85"
                  style={{ background: d.color, color: "white" }}
                >
                  <Download size={16} />
                  Read AI Psychology
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-[var(--color-line)] px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="mb-6 flex items-center gap-3">
            <BookOpen size={22} style={{ color: d.color }} />
            <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-ink-dim)]">
              What's next
            </h2>
          </div>
          <p className="max-w-2xl text-sm leading-relaxed text-[var(--color-ink-dim)]">
            AI Psychology is the first title, not the only one. Future
            books under this division will take the same approach — a real
            position on an AI question, argued properly, kept short enough
            to actually finish.
          </p>
        </div>
      </section>
      <AppBadges color={d.color} />
    </>
  );
}
