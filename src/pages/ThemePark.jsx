import { Bot, Rocket, Sparkles, Gauge, Vault, ShieldAlert, DoorOpen } from "lucide-react";
import DivisionHero from "../components/DivisionHero";
import AppBadges from "../components/AppBadges";
import { divisions } from "../data/divisions";

const d = divisions.find((x) => x.key === "themepark");

const zones = [
  {
    icon: Bot,
    name: "Robotics Row",
    body: "Watch real working robots build, repair, and improvise up close — not behind glass, in the open, doing actual jobs.",
  },
  {
    icon: Rocket,
    name: "The Bridge",
    body: "Step into walk-through recreations of Mars, the Moon, and Titan — the same worlds HCM is already mapping bases on.",
  },
  {
    icon: Sparkles,
    name: "Neural Nexus",
    body: "AI-generated art, music, and short film, shaped live by what you tell it — you leave with something that only exists because you were there.",
  },
  {
    icon: Gauge,
    name: "Pit Lane",
    body: "Autonomous go-karts and race simulators — every vehicle AI-driven, every lap analyzed the moment it's done.",
  },
  {
    icon: Vault,
    name: "The Vault",
    body: "A hands-on walk through how your own data actually moves — who's asking for it, and what saying no looks like in practice.",
  },
];

export default function ThemePark() {
  return (
    <>
      <DivisionHero
        code={d.code}
        name={d.name}
        tagline={d.tagline}
        description="A theme park with no human staff, anywhere. Robots greet you at the gate, robots run every zone, and every zone is built to let you live inside a different part of what AI can actually do."
        color={d.color}
      />

      <section className="px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="overflow-hidden rounded-2xl border border-[var(--color-line)] bg-black">
            <img
              src="./themepark/hcm-themepark-gateway.svg"
              alt="HCM Theme Park entrance — a glowing gateway with a robot host, no humans"
              className="w-full"
            />
          </div>
        </div>
      </section>

      <section className="border-t border-[var(--color-line)] px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-3xl rounded-2xl border border-[var(--color-line)] bg-[var(--color-surface)] p-8 sm:p-10">
          <DoorOpen size={22} style={{ color: d.color }} />
          <h2 className="mt-4 font-display text-xl font-bold sm:text-2xl">
            This isn't pure fiction
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-[var(--color-ink-dim)] sm:text-base">
            China's first fully robot-run hotel — zero human staff, every
            role from check-in to housekeeping handled by machines —
            begins trials in late 2026 on Shenzhen's West Artificial
            Island. The team behind it has already said the next phase is
            expanding the same robot-only model into attractions on the
            same site. HCM Theme Park takes that same direction and
            builds a destination around it on purpose, rather than
            arriving at it by accident.
          </p>
        </div>
      </section>

      <section className="border-t border-[var(--color-line)] px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-ink-dim)]">
            The zones
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[var(--color-ink-dim)]">
            Each zone is its own world, pulled straight from what HCM
            already builds elsewhere.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {zones.map((z) => (
              <div
                key={z.name}
                className="rounded-2xl border border-[var(--color-line)] bg-[var(--color-surface)] p-6"
              >
                <z.icon size={22} style={{ color: d.color }} />
                <h3 className="mt-4 font-display text-lg font-bold">{z.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--color-ink-dim)]">
                  {z.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-[var(--color-line)] px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-3xl rounded-2xl border border-[var(--color-line)] bg-[var(--color-surface)] p-8">
          <div className="flex items-start gap-3">
            <ShieldAlert size={18} style={{ color: d.color }} className="mt-0.5 shrink-0" />
            <p className="text-sm text-[var(--color-ink-dim)]">
              Concept stage — HCM Theme Park doesn't exist yet. A real
              version of this needs the same robotics maturity the
              hospitality trial above is still proving out, plus real
              safety and accessibility engineering before anyone walks
              through that gate.
            </p>
          </div>
        </div>
      </section>
      <AppBadges color={d.color} />
    </>
  );
}
