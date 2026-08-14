import { Scale3d, ShieldCheck, Users, Briefcase, Sparkles } from "lucide-react";

const ACCENT = "var(--color-core)";

const model = [
  {
    icon: Scale3d,
    title: "Seats match jobs, not demand",
    body: "The number of course seats offered is set by the number of real, confirmed roles waiting on the other side — not by how many people want to enroll. If the roles aren't there yet, the seats aren't either.",
  },
  {
    icon: Briefcase,
    title: "The guarantee is unconditional",
    body: "Most \"job guarantee\" programs today are really a refund or a payment plan if it doesn't work out. HCM University's guarantee is the placement itself — finish the course, earn the degree, start the role. No fallback clause.",
  },
  {
    icon: Users,
    title: "Small by design",
    body: "Enrollment stays capped on purpose. A university that guarantees outcomes can only ever be as big as the number of outcomes it can actually deliver.",
  },
];

export default function University() {
  return (
    <>
      <section
        className="relative border-b border-[var(--color-line)] px-5 py-24 sm:px-8 sm:py-32"
        style={{
          backgroundImage:
            "linear-gradient(180deg, rgba(8,9,13,0.55), rgba(8,9,13,0.92)), url('https://commons.wikimedia.org/wiki/Special:FilePath/Xanadu%20-%20futuristic%20architecture.jpg?width=1800')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="mx-auto max-w-3xl">
          <div
            className="mb-5 inline-block rounded-full border px-3 py-1 font-mono text-[11px] uppercase tracking-[0.2em]"
            style={{ borderColor: ACCENT, color: "var(--color-core-soft)" }}
          >
            HCM University
          </div>
          <h1 className="font-display text-balance text-4xl font-bold leading-[1.05] sm:text-6xl">
            Every degree ends in a job. No exceptions.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-[var(--color-ink-dim)] sm:text-lg">
            HCM University enrolls exactly as many students as there are
            real roles waiting for them — nothing more. Finish the course,
            earn the degree, and you start a guaranteed, paid, one-year
            position. That's the whole model.
          </p>
          <p className="mt-3 font-mono text-[11px] text-[var(--color-ink-dim)]">
            Photo: Wikimedia Commons, CC BY-SA — architectural reference,
            not an actual campus render.
          </p>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-ink-dim)]">
            The equilibrium model
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[var(--color-ink-dim)]">
            Coding bootcamps have offered "job guarantees" for years — but
            most are really a tuition refund if you don't land something
            within six months. HCM University works the other direction:
            the number of jobs decides the number of seats, so the
            guarantee never has to be walked back.
          </p>
          <div className="mt-8 overflow-hidden rounded-2xl border border-[var(--color-line)] bg-black">
            <img
              src="./university/equilibrium.svg"
              alt="Courses and jobs held in equilibrium"
              className="w-full"
            />
          </div>
        </div>
      </section>

      <section className="border-t border-[var(--color-line)] px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-ink-dim)]">
            How it actually works
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {model.map((m) => (
              <div
                key={m.title}
                className="rounded-2xl border border-[var(--color-line)] bg-[var(--color-surface)] p-6"
              >
                <m.icon size={22} style={{ color: "var(--color-core-soft)" }} />
                <h3 className="mt-4 font-display text-lg font-bold">{m.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--color-ink-dim)]">
                  {m.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-[var(--color-line)] px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-3xl rounded-2xl border border-[var(--color-line)] bg-[var(--color-surface)] p-8 sm:p-10">
          <ShieldCheck size={22} style={{ color: "var(--color-core-soft)" }} />
          <h2 className="mt-4 font-display text-xl font-bold sm:text-2xl">
            The guarantee, in full
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-[var(--color-ink-dim)] sm:text-base">
            Complete the course. Earn the degree. Start a guaranteed,
            paid, one-year position — directly, with no separate
            application process and no exceptions. If HCM University
            can't back that guarantee for a given course, that course
            doesn't open.
          </p>
          <div className="mt-6 flex items-center gap-2 font-mono text-[11px] text-[var(--color-ink-dim)]">
            <Sparkles size={14} style={{ color: "var(--color-core-soft)" }} />
            Concept stage — no courses are open yet. The model is being
            worked out before anything is announced.
          </div>
        </div>
      </section>
    </>
  );
}
