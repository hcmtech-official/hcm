import { ShieldCheck, Globe2, Rocket, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import DivisionHero from "../components/DivisionHero";
import AppBadges from "../components/AppBadges";
import { divisions } from "../data/divisions";

const d = divisions.find((x) => x.key === "green");

const wm = (name) =>
  `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(name)}?width=1400`;

const worlds = [
  {
    name: "Earth",
    img: wm("The Earth seen from Apollo 17.jpg"),
    note: "The one world with the least excuse — protection here means what it's always meant: emissions, biodiversity, and not treating a shared atmosphere like nobody owns it.",
  },
  {
    name: "The Moon",
    img: wm("FullMoon2010.jpg"),
    note: "Untouched compared to Earth, but not for long — multiple countries and companies are planning permanent bases at the lunar south pole this decade. The window to set rules before there's a mess is now, not after.",
  },
  {
    name: "Mars",
    img: wm("OSIRIS Mars true color.jpg"),
    note: "The same forward-contamination questions apply here as anywhere else humans are about to show up — except this time we might actually get the framework in place before the first permanent footprint.",
  },
];

export default function Green() {
  return (
    <>
      <DivisionHero
        code={d.code}
        name={d.name}
        tagline={d.tagline}
        description="Not just protecting Earth — building the framework now so Earth, the Moon, and Mars all stay protected once people are actually living on more than one of them."
        color={d.color}
      />

      <section className="px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-3xl rounded-2xl border border-[var(--color-line)] bg-[var(--color-surface)] p-8 sm:p-10">
          <ShieldCheck size={22} style={{ color: d.color }} />
          <h2 className="mt-4 font-display text-xl font-bold sm:text-2xl">
            Not starting from zero
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-[var(--color-ink-dim)] sm:text-base">
            A real framework for this already exists — COSPAR's Planetary
            Protection Policy, built on the 1967 Outer Space Treaty,
            governs "forward contamination" (Earth life reaching other
            worlds) and "backward contamination" (anything returning from
            them). It's been quietly updated for 2026 as crewed Mars
            missions move from planning into real engineering. HCM Green's
            position is simple: that same protect-before-you-arrive
            thinking should apply consistently, everywhere humans are
            headed — not just where a treaty happens to already cover it.
          </p>
        </div>
      </section>

      <section className="border-t border-[var(--color-line)] px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="mb-2 flex items-center gap-3">
            <Globe2 size={22} style={{ color: d.color }} />
            <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-ink-dim)]">
              Three worlds, one framework
            </h2>
          </div>
          <div className="mt-6 grid gap-6 sm:grid-cols-3">
            {worlds.map((w) => (
              <div
                key={w.name}
                className="overflow-hidden rounded-2xl border border-[var(--color-line)] bg-[var(--color-surface)]"
              >
                <img src={w.img} alt={w.name} loading="lazy" className="h-56 w-full object-cover" />
                <div className="p-5">
                  <h3 className="font-display text-lg font-bold">{w.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--color-ink-dim)]">
                    {w.note}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-[var(--color-line)] px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-3xl">
          <div className="mb-2 flex items-center gap-3">
            <Rocket size={22} style={{ color: d.color }} />
            <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-ink-dim)]">
              After Mars, the same rule applies
            </h2>
          </div>
          <p className="mt-3 text-sm leading-relaxed text-[var(--color-ink-dim)] sm:text-base">
            <Link to="/careers" className="underline decoration-dotted underline-offset-4" style={{ color: d.color }}>
              Titan
            </Link>{" "}
            is the realistic next stop after Mars — dense atmosphere,
            abundant organic chemistry, and NASA's real Dragonfly mission
            already headed there for 2034. The point of building this
            framework now, for three worlds, isn't really about the
            number three. It's so the same protection thinking is already
            in place the next time humanity picks a new world, instead of
            being written after the fact, once again.
          </p>
          <a
            href="https://cosparhq.cnes.fr"
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex items-center gap-2 font-mono text-[11px] text-[var(--color-ink-dim)] hover:underline"
          >
            COSPAR Planetary Protection Policy
            <ArrowUpRight size={14} />
          </a>
        </div>
      </section>
      <AppBadges color={d.color} />
    </>
  );
}
