import { Car, PlaneTakeoff, Building2, UtensilsCrossed, CarFront, Bot } from "lucide-react";
import DivisionHero from "../components/DivisionHero";
import AppBadges from "../components/AppBadges";
import { divisions } from "../data/divisions";

const d = divisions.find((x) => x.key === "aerospace");

const journey = [
  {
    icon: Car,
    step: "Pickup",
    body: "An AI-driven car collects you from wherever you're boarding from — no human driver anywhere in the vehicle.",
  },
  {
    icon: PlaneTakeoff,
    step: "Flight",
    body: "HCM Airways: no pilot, no cabin crew. The aircraft flies itself, ultra-long-range, end to end.",
  },
  {
    icon: Building2,
    step: "Arrival",
    body: "An airport run entirely by AI — gates, customs, baggage — no staff standing between you and the exit.",
  },
  {
    icon: UtensilsCrossed,
    step: "Dining",
    body: "Restaurants at the airport, each customizing every dish to your own taste — not a menu, a match.",
  },
  {
    icon: CarFront,
    step: "Onward",
    body: "Another AI-driven car takes you from the airport to wherever you're actually going.",
  },
];

export default function Aerospace() {
  return (
    <>
      <DivisionHero
        code={d.code}
        name={d.name}
        tagline={d.tagline}
        description="HCM Airways — an ultra-long-range concept airline with no human in the loop, anywhere in the journey. Not just the flight — the pickup, the airport, and the meal at the other end too."
        color={d.color}
      />

      <section className="px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="overflow-hidden rounded-2xl border border-[var(--color-line)] bg-black">
            <img
              src="./aerospace/hcm-airways-concept.svg"
              alt="HCM Airways autonomous ULR concept aircraft"
              className="w-full"
            />
          </div>
          <p className="mt-3 font-mono text-[11px] text-[var(--color-ink-dim)]">
            Original concept design, inspired by the latest ultra-long-range
            widebody airframes — not a real Airbus or any other
            manufacturer's aircraft.
          </p>
        </div>
      </section>

      <section className="border-t border-[var(--color-line)] px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="mb-2 flex items-center gap-3">
            <Bot size={22} style={{ color: d.color }} />
            <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-ink-dim)]">
              End to end, no humans
            </h2>
          </div>
          <p className="mb-6 max-w-2xl text-sm leading-relaxed text-[var(--color-ink-dim)]">
            Not just an autonomous plane — the whole trip, from the moment
            you're picked up to the moment you're dropped off.
          </p>
          <div className="grid gap-4 sm:grid-cols-5">
            {journey.map((j) => (
              <div
                key={j.step}
                className="rounded-2xl border border-[var(--color-line)] bg-[var(--color-surface)] p-6"
              >
                <j.icon size={22} style={{ color: d.color }} />
                <h3 className="mt-4 font-display text-lg font-bold">{j.step}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--color-ink-dim)]">
                  {j.body}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-6 font-mono text-[11px] text-[var(--color-ink-dim)]">
            Concept stage — HCM Airways doesn't operate any aircraft yet.
            Full autonomy in commercial aviation faces real certification
            and regulatory hurdles that are nowhere near solved.
          </p>
        </div>
      </section>
      <AppBadges color={d.color} />
    </>
  );
}
