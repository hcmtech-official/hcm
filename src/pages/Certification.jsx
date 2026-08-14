import { Link } from "react-router-dom";
import { GraduationCap, ShieldCheck, Lightbulb } from "lucide-react";

const ACCENT = "var(--color-core)";

const principles = [
  {
    icon: ShieldCheck,
    title: "The rigor has to connect to something",
    body: "You put in the effort a certification demands — that effort is supposed to lead somewhere real. Too often it doesn't: the credential gets sold, and what happens after you earn it becomes someone else's problem.",
  },
  {
    icon: Lightbulb,
    title: "\"Leads to a job\" is the wrong promise now",
    body: "The old version of this promise was a role waiting at the end. HCM Certification is built around a different bet: what a credential should guarantee is the chance to create something real, not a job that may not exist by the time you finish.",
  },
];

export default function Certification() {
  return (
    <>
      <section
        className="border-b border-[var(--color-line)] px-5 py-20 sm:px-8 sm:py-28"
        style={{
          background: `radial-gradient(1100px 420px at 50% -10%, color-mix(in srgb, ${ACCENT} 16%, transparent), transparent)`,
        }}
      >
        <div className="mx-auto max-w-4xl">
          <div
            className="mb-5 inline-block rounded-full border px-3 py-1 font-mono text-[11px] uppercase tracking-[0.2em]"
            style={{ borderColor: ACCENT, color: "var(--color-core-soft)" }}
          >
            HCM Certification
          </div>
          <h1 className="font-display text-balance text-4xl font-bold leading-[1.05] sm:text-6xl">
            HCM Certification
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-[var(--color-ink-dim)] sm:text-lg">
            Never sell the rigor without being honest about where it
            leads. That's the one principle every HCM certification is
            held to.
          </p>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-ink-dim)]">
            The principle
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {principles.map((p) => (
              <div
                key={p.title}
                className="rounded-2xl border border-[var(--color-line)] bg-[var(--color-surface)] p-6"
              >
                <p.icon size={22} style={{ color: "var(--color-core-soft)" }} />
                <h3 className="mt-4 font-display text-lg font-bold">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--color-ink-dim)]">
                  {p.body}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-6 max-w-2xl text-sm leading-relaxed text-[var(--color-ink-dim)]">
            It's the same thinking{" "}
            <Link to="/university" className="underline decoration-dotted underline-offset-4" style={{ color: "var(--color-core-soft)" }}>
              HCM University
            </Link>{" "}
            is built around, at a smaller scale — a single certification
            instead of a full degree, same guarantee behind it.
          </p>
        </div>
      </section>

      <section className="border-t border-[var(--color-line)] px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="mb-2 flex items-center gap-3">
            <GraduationCap size={22} style={{ color: "var(--color-core-soft)" }} />
            <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-ink-dim)]">
              What it looks like
            </h2>
          </div>
          <div className="mt-6 overflow-hidden rounded-2xl border border-[var(--color-line)]">
            <img
              src="./credentials/certificate.svg"
              alt="Sample HCM Certification design"
              className="w-full"
            />
          </div>
          <p className="mt-3 font-mono text-[11px] text-[var(--color-ink-dim)]">
            A sample of the certificate design — no certification track is
            live yet, this is the format it will follow.
          </p>
        </div>
      </section>
    </>
  );
}
