import { Sparkles, GitBranch, Mail, Globe2, Clock, Rocket } from "lucide-react";
import WorldMap from "../components/WorldMap";

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

const locations = [
  { city: "Sydney", region: "Australia" },
  { city: "Singapore", region: "Singapore" },
  { city: "Tokyo", region: "Japan" },
  { city: "Mumbai", region: "India" },
  { city: "New York", region: "United States" },
  { city: "London", region: "United Kingdom" },
];

const offWorld = [
  { city: "Artemis Base Camp", region: "The Moon, lunar south pole" },
  { city: "Mars Base Alpha", region: "Mars" },
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
        <div className="mx-auto max-w-5xl">
          <div className="mb-2 flex items-center gap-3">
            <Globe2 size={22} style={{ color: "var(--color-core-soft)" }} />
            <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-ink-dim)]">
              Where HCM exists
            </h2>
          </div>
          <p className="mb-6 max-w-2xl text-sm leading-relaxed text-[var(--color-ink-dim)]">
            No head office — HCM is built to work across time zones from
            day one. Six cities where the AI-first team currently connects
            from:
          </p>
          <WorldMap />
          <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {locations.map((l) => (
              <div
                key={l.city}
                className="rounded-xl border border-[var(--color-line)] bg-[var(--color-surface)] px-4 py-3"
              >
                <div className="font-display text-sm font-bold">{l.city}</div>
                <div className="font-mono text-[10px] uppercase tracking-[0.1em] text-[var(--color-ink-dim)]">
                  {l.region}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--color-ink-dim)]">
            <Rocket size={14} style={{ color: "var(--color-core-soft)" }} />
            Off-world — future
          </div>
          <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {offWorld.map((l) => (
              <div
                key={l.city}
                className="rounded-xl border border-dashed border-[var(--color-line)] bg-transparent px-4 py-3"
              >
                <div className="font-display text-sm font-bold">{l.city}</div>
                <div className="font-mono text-[10px] uppercase tracking-[0.1em] text-[var(--color-ink-dim)]">
                  {l.region}
                </div>
              </div>
            ))}
          </div>
          <p className="mt-3 font-mono text-[11px] text-[var(--color-ink-dim)]">
            Not real HCM locations yet — named for where humanity's own
            off-world bases are actually planned (SpaceX's Mars Base Alpha,
            NASA's Artemis Base Camp), marking where "where HCM exists"
            goes next, eventually.
          </p>
        </div>
      </section>

      <section className="border-t border-[var(--color-line)] px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-3xl">
          <div className="mb-6 flex items-center gap-3">
            <Clock size={22} style={{ color: "var(--color-core-soft)" }} />
            <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-ink-dim)]">
              A role, 20 years from now
            </h2>
          </div>
          <div className="rounded-2xl border border-[var(--color-line)] bg-[var(--color-surface)] p-8 sm:p-10">
            <div
              className="inline-block rounded-full border px-3 py-1 font-mono text-[11px] uppercase tracking-[0.2em]"
              style={{ borderColor: "var(--color-core)", color: "var(--color-core-soft)" }}
            >
              Open now · Remote
            </div>
            <h3 className="mt-4 font-display text-2xl font-bold">
              AI Judgment Steward
            </h3>
            <p className="mt-2 text-sm text-[var(--color-ink-dim)]">
              A real role, defined 20 years ahead of where most companies
              are thinking — because that's how far ahead HCM builds.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-[var(--color-ink-dim)] sm:text-base">
              By 2046, AI runs almost everything at HCM end to end — sourcing,
              building, shipping, support. What it still can't do on its own
              is decide what to do when the right answer genuinely depends on
              judgment: two reasonable outcomes, real consequences, and no
              clean rule to fall back on. That's this job.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-[var(--color-ink-dim)] sm:text-base">
              You'd review the hardest calls surfaced across every division —
              not to override AI by default, but to catch what it missed, add
              context it didn't have, and feed that judgment back in so the
              system gets better at recognizing similar situations on its
              own next time. Less "approve or reject a queue," more defining
              what good judgment actually looks like, case by case, for a
              company that changes what it builds every few months.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-[var(--color-ink-dim)] sm:text-base">
              No formal path exists into this role yet — the job itself is
              still being defined by whoever ends up doing it first.
            </p>
            <a
              href={`mailto:${CAREERS_EMAIL}?subject=${encodeURIComponent("AI Judgment Steward — expression of interest")}`}
              className="mt-6 inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-opacity hover:opacity-85"
              style={{ background: "var(--color-core)", color: "white" }}
            >
              <Mail size={16} />
              Apply for this role
            </a>
          </div>
        </div>
      </section>

      <section className="border-t border-[var(--color-line)] px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-3xl">
          <div className="rounded-2xl border border-[var(--color-line)] bg-[var(--color-surface)] p-8 sm:p-10">
            <Sparkles size={22} style={{ color: "var(--color-core-soft)" }} />
            <h3 className="mt-4 font-display text-xl font-bold">
              Don't see your fit above?
            </h3>
            <p className="mt-2 max-w-lg text-sm leading-relaxed text-[var(--color-ink-dim)]">
              HCM is early, and new roles get defined the same way new
              divisions do — around a real gap someone spotted. If that's
              you, reach out anyway.
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
