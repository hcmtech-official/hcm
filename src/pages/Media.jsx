import { Layers, Scale, EyeOff, Clock, GraduationCap } from "lucide-react";
import { Link } from "react-router-dom";
import DivisionHero from "../components/DivisionHero";
import AppBadges from "../components/AppBadges";
import { divisions } from "../data/divisions";

const d = divisions.find((x) => x.key === "media");

const offerings = [
  {
    icon: Layers,
    title: "One story, not ten copies",
    body: "When the same event gets covered by dozens of outlets, we merge it into a single synthesized story instead of showing you the same headline repeated.",
  },
  {
    icon: Scale,
    title: "Multiple angles, side by side",
    body: "Where coverage genuinely differs, we show how — without picking a side for you.",
  },
  {
    icon: EyeOff,
    title: "What's being left out",
    body: "Flagging the angles or details that most coverage of a story is quietly skipping.",
  },
  {
    icon: Clock,
    title: "A few minutes, not a scroll",
    body: "A digest built to catch you up quickly, not keep you scrolling.",
  },
];

export default function Media() {
  return (
    <>
      <DivisionHero
        code={d.code}
        name={d.name}
        tagline={d.tagline}
        description="Our mission is to provide synthesized news — one clear account of what happened, pulled together from multiple sources, instead of the same story repeated across ten different headlines."
        color={d.color}
      />

      <section className="px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-ink-dim)]">
            How it's different
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {offerings.map((o) => (
              <div
                key={o.title}
                className="rounded-2xl border border-[var(--color-line)] bg-[var(--color-surface)] p-6"
              >
                <o.icon size={22} style={{ color: d.color }} />
                <h3 className="mt-4 font-display text-lg font-bold">{o.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--color-ink-dim)]">
                  {o.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-[var(--color-line)] px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-3xl rounded-2xl border border-[var(--color-line)] bg-[var(--color-surface)] p-8 sm:p-10">
          <GraduationCap size={22} style={{ color: d.color }} />
          <h2 className="mt-4 font-display text-xl font-bold sm:text-2xl">
            On certification
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-[var(--color-ink-dim)] sm:text-base">
            A certification is supposed to mean something: you put in the
            rigor, and it's supposed to connect to something real on the
            other side. Too often it doesn't — the credential gets sold,
            and what happens after you earn it is someone else's problem.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-[var(--color-ink-dim)] sm:text-base">
            HCM Media's coverage of certification and credentialing holds
            to one principle: never sell the effort without being honest
            about where it leads — and "leads to a job" is quietly
            becoming the wrong promise to make anyway. It's the same
            thinking{" "}
            <Link to="/university" className="underline decoration-dotted underline-offset-4" style={{ color: d.color }}>
              HCM University
            </Link>{" "}
            is built around: what a credential should actually guarantee
            is the chance to create something real, not a role that may
            not exist by the time you graduate.
          </p>
        </div>
      </section>
      <AppBadges color={d.color} />
    </>
  );
}
