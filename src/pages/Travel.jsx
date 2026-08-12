import { Compass, Map, PlaneTakeoff } from "lucide-react";
import DivisionHero from "../components/DivisionHero";
import { divisions } from "../data/divisions";

const d = divisions.find((x) => x.key === "travel");

const process = [
  {
    icon: Compass,
    step: "Discover",
    body: "Tell us the shape of the trip — slow and scenic, fast and packed, somewhere new or somewhere back. We build a shortlist around that, not a generic top-ten.",
  },
  {
    icon: Map,
    step: "Plan",
    body: "A day-by-day itinerary with real logistics: flights, stays, and the gaps in between filled with things worth doing, not filler.",
  },
  {
    icon: PlaneTakeoff,
    step: "Go",
    body: "One itinerary to follow, bookings confirmed ahead of time, and a way to reach us if anything changes mid-trip.",
  },
];

const collections = [
  { title: "Weekend escapes", body: "Short trips within a few hours, built around one or two days off." },
  { title: "First big trip", body: "Longer international routes for people planning their first major trip abroad." },
  { title: "Slow travel", body: "Fewer stops, longer stays — for people who'd rather know one place well." },
];

export default function Travel() {
  return (
    <>
      <DivisionHero
        code={d.code}
        name={d.name}
        tagline={d.tagline}
        description="Trip planning built around how you actually want to travel — a real itinerary, not a template with your name swapped in."
        color={d.color}
      />

      <section className="px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-ink-dim)]">
            How it works
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {process.map((p) => (
              <div
                key={p.step}
                className="rounded-2xl border border-[var(--color-line)] bg-[var(--color-surface)] p-6"
              >
                <p.icon size={22} style={{ color: d.color }} />
                <h3 className="mt-4 font-display text-lg font-bold">{p.step}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--color-ink-dim)]">
                  {p.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-[var(--color-line)] px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-ink-dim)]">
            Collections
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {collections.map((c) => (
              <div
                key={c.title}
                className="rounded-2xl border p-6"
                style={{ borderColor: "var(--color-line)", background: `color-mix(in srgb, ${d.color} 6%, var(--color-surface))` }}
              >
                <h3 className="font-display text-lg font-bold">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--color-ink-dim)]">
                  {c.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
