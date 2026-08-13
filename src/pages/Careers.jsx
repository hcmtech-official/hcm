import { Sparkles, GitBranch, Mail } from "lucide-react";

const CAREERS_EMAIL = "careers@hcmtech-official.com";

const whatWeLookFor = [
  {
    title: "Comfortable working AI-first",
    body: "AI does the building by default at HCM. You'll be directing, refining, and pushing it further — not typing everything by hand.",
  },
  {
    title: "Drawn to gaps, not job descriptions",
    body: "Every HCM division started as a gap someone spotted. We're looking for people who notice those too, and want to go build for one.",
  },
  {
    title: "Fine owning something end to end",
    body: "Small team, AI-first tooling, real ownership — you'll take a gap from idea to shipped division, not one slice of a bigger process.",
  },
];

export default function Careers() {
  return (
    <>
      <section className="border-b border-[var(--color-line)] px-5 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto max-w-3xl">
          <div
            className="mb-5 inline-block rounded-full border px-3 py-1 font-mono text-[11px] uppercase tracking-[0.2em]"
            style={{ borderColor: "var(--color-core)", color: "var(--color-core-soft)" }}
          >
            Careers
          </div>
          <h1 className="font-display text-balance text-4xl font-bold leading-[1.05] sm:text-5xl">
            Would you like to join HCM?
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-[var(--color-ink-dim)] sm:text-lg">
            HCM runs AI-first — AI builds by default, across every division.
            We're looking for people who want to build the AI itself, not
            compete with what it can already do.
          </p>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-ink-dim)]">
            What we look for
          </h2>
          <div className="mt-6 space-y-6">
            {whatWeLookFor.map((w) => (
              <div key={w.title} className="border-l-2 border-[var(--color-line)] pl-5">
                <h3 className="font-display text-lg font-bold">{w.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-[var(--color-ink-dim)]">
                  {w.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-[var(--color-line)] px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-3xl">
          <div className="rounded-2xl border border-[var(--color-line)] bg-[var(--color-surface)] p-8 sm:p-10">
            <Sparkles size={22} style={{ color: "var(--color-core-soft)" }} />
            <h3 className="mt-4 font-display text-xl font-bold">
              No open roles listed yet
            </h3>
            <p className="mt-2 max-w-lg text-sm leading-relaxed text-[var(--color-ink-dim)]">
              HCM is early, and new divisions get built as gaps get found —
              hiring will follow the same pattern. If that sounds like your
              kind of problem to work on, reach out anyway.
            </p>
            <a
              href={`mailto:${CAREERS_EMAIL}`}
              className="mt-6 inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-opacity hover:opacity-85"
              style={{ background: "var(--color-core)", color: "white" }}
            >
              <Mail size={16} />
              {CAREERS_EMAIL}
            </a>
            <p className="mt-4 flex items-center gap-2 font-mono text-[11px] text-[var(--color-ink-dim)]">
              <GitBranch size={14} />
              Placeholder inbox — swap for the real one in{" "}
              <code>src/pages/Careers.jsx</code>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
