import { Radar, Users2, Battery, Cpu, Sparkles, Layers } from "lucide-react";
import DivisionHero from "../components/DivisionHero";
import AppBadges from "../components/AppBadges";
import { divisions } from "../data/divisions";

const d = divisions.find((x) => x.key === "drones");

const wm = (name) =>
  `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(name)}?width=1400`;

const gallery = [
  {
    caption: "Where drones already are",
    img: wm("Quadcopter camera drone in flight.jpg"),
  },
  {
    caption: "AI-native, not AI-added",
    img: wm("Quadcopter Drone in flight.jpg"),
  },
];

const now = [
  {
    icon: Cpu,
    title: "AI-native, not retrofitted",
    body: "The shift underway right now: drones designed around autonomy from the start, not piloted aircraft with AI bolted on after. The person's job moves from flying to mission planning.",
  },
  {
    icon: Users2,
    title: "Swarm coordination",
    body: "Individual operators are already managing fleets of dozens to hundreds of drones at once — sharing perception and dividing tasks through mesh networking, not a single remote control.",
  },
  {
    icon: Battery,
    title: "Hydrogen extending flight time",
    body: "Battery-only drones are being pushed toward 2–4 hour flight times as hydrogen fuel cells reach commercial viability — the difference between a quick job and covering real ground.",
  },
];

const concept = [
  {
    icon: Radar,
    title: "Fully decentralized swarm",
    body: "No single point of failure — each drone in the swarm can lose contact with the others and still complete its part of the mission, then rejoin and resync automatically.",
  },
  {
    icon: Layers,
    title: "Modular payload, one airframe",
    body: "The same base drone reconfigures for the job — a sensor pack for inspection, a medical payload for disaster response, a camera rig for filming — instead of buying a different drone for each.",
  },
  {
    icon: Sparkles,
    title: "Mission-level autonomy",
    body: "Not \"fly to this point\" — \"survey this district and flag anything that's changed since last week.\" The drone plans its own flight path to do the job, not just follows one.",
  },
];

export default function Drones() {
  return (
    <>
      <DivisionHero
        code={d.code}
        name={d.name}
        tagline={d.tagline}
        description="Drone technology is moving faster than almost anything else in hardware right now. HCM Drones tracks where it actually is, and where a genuinely futuristic drone goes next."
        color={d.color}
      />

      <section className="px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-6 sm:grid-cols-2">
            {gallery.map((g) => (
              <div
                key={g.caption}
                className="overflow-hidden rounded-2xl border border-[var(--color-line)] bg-[var(--color-surface)]"
              >
                <img src={g.img} alt={g.caption} loading="lazy" className="h-64 w-full object-cover" />
                <div className="p-4">
                  <p className="text-sm text-[var(--color-ink-dim)]">{g.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-[var(--color-line)] px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-ink-dim)]">
            Where drones already are
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {now.map((n) => (
              <div
                key={n.title}
                className="rounded-2xl border border-[var(--color-line)] bg-[var(--color-surface)] p-6"
              >
                <n.icon size={22} style={{ color: d.color }} />
                <h3 className="mt-4 font-display text-lg font-bold">{n.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--color-ink-dim)]">
                  {n.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-[var(--color-line)] px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-ink-dim)]">
            What a genuinely futuristic drone looks like
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[var(--color-ink-dim)]">
            Not a faster quadcopter — a shift in what "a drone" even means.
            Three capabilities that push past where the current generation
            stops:
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {concept.map((c) => (
              <div
                key={c.title}
                className="rounded-2xl border border-[var(--color-line)] bg-[var(--color-surface)] p-6"
              >
                <c.icon size={22} style={{ color: d.color }} />
                <h3 className="mt-4 font-display text-lg font-bold">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--color-ink-dim)]">
                  {c.body}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-6 font-mono text-[11px] text-[var(--color-ink-dim)]">
            Concept stage — nothing built yet, extrapolated from where the
            industry is genuinely headed in 2026.
          </p>
        </div>
      </section>
      <AppBadges color={d.color} />
    </>
  );
}
