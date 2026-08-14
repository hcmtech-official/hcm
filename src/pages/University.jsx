import { Scale3d, Sparkles as SparklesIcon, Users, Lightbulb, Rocket } from "lucide-react";

const ACCENT = "var(--color-core)";

const model = [
  {
    icon: Scale3d,
    title: "Seats match launch capacity, not demand",
    body: "The number of course seats is set by how many real creative launches HCM can actually back — funding, platform, distribution — not by how many people want to enroll. If the backing isn't there yet, the seats aren't either.",
  },
  {
    icon: Rocket,
    title: "The guarantee is a launch, not a job",
    body: "Coding bootcamps guarantee a job offer. HCM University guarantees something further out: your creation actually gets built and put in front of real people, backed by HCM, no matter what.",
  },
  {
    icon: Users,
    title: "Small by design",
    body: "Enrollment stays capped on purpose. A university that guarantees a real launch can only ever be as big as the number of launches it can genuinely support.",
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
            Every degree ends in something you made. No exceptions.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-[var(--color-ink-dim)] sm:text-lg">
            HCM University isn't training people to fill jobs — the honest
            bet is that most conventional jobs won't exist for much longer.
            It's training people to create, and guaranteeing that what they
            create actually gets made.
          </p>
          <p className="mt-3 font-mono text-[11px] text-[var(--color-ink-dim)]">
            Photo: Wikimedia Commons, CC BY-SA — architectural reference,
            not an actual campus render.
          </p>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-3xl rounded-2xl border border-[var(--color-line)] bg-[var(--color-surface)] p-8 sm:p-10">
          <Lightbulb size={22} style={{ color: "var(--color-core-soft)" }} />
          <h2 className="mt-4 font-display text-xl font-bold sm:text-2xl">
            If there's no job to train for, what do you train for?
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-[var(--color-ink-dim)] sm:text-base">
            If AI genuinely ends up doing most of the work people currently
            get paid for, the honest question isn't "which job will still
            exist" — it's what's actually left for a person to do that
            still matters. Our answer: creating things that didn't exist
            before. Products, ideas, culture, businesses — the part of the
            work that starts from nothing, which AI can accelerate but
            still needs a person to originate.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-[var(--color-ink-dim)] sm:text-base">
            So HCM University doesn't hand you a role at the end. It hands
            you the access most people never get: real backing to build
            what you made and put it in front of the world.
          </p>
        </div>
      </section>

      <section className="border-t border-[var(--color-line)] px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-ink-dim)]">
            The equilibrium model
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[var(--color-ink-dim)]">
            The mechanism stays the same discipline as a job-guarantee
            bootcamp — just pointed at a different outcome. Instead of
            capping seats at the number of confirmed job openings, HCM
            University caps seats at the number of creative launches it
            can genuinely fund, build, and distribute.
          </p>
          <div className="mt-8 overflow-hidden rounded-2xl border border-[var(--color-line)] bg-black">
            <img
              src="./university/equilibrium.svg"
              alt="Courses and creative launches held in equilibrium"
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
          <SparklesIcon size={22} style={{ color: "var(--color-core-soft)" }} />
          <h2 className="mt-4 font-display text-xl font-bold sm:text-2xl">
            The guarantee, in full
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-[var(--color-ink-dim)] sm:text-base">
            Complete the course. Earn the degree. What you built during it
            gets real backing — funding, HCM's own build capacity, and a
            path to real distribution — with no separate pitch process and
            no exceptions. If HCM University can't back that guarantee for
            a given course, that course doesn't open.
          </p>
          <div className="mt-6 flex items-center gap-2 font-mono text-[11px] text-[var(--color-ink-dim)]">
            <Rocket size={14} style={{ color: "var(--color-core-soft)" }} />
            Concept stage — no courses are open yet. The model is being
            worked out before anything is announced.
          </div>
        </div>
      </section>
    </>
  );
}
