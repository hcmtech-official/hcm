import { useState } from "react";
import { Sparkles, GitBranch, Mail, Globe2, Clock, Rocket } from "lucide-react";
import Globe from "../components/Globe";

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
  { city: "Sydney", region: "Australia", lat: -33.87, lon: 151.21 },
  { city: "Singapore", region: "Singapore", lat: 1.35, lon: 103.82 },
  { city: "Tokyo", region: "Japan", lat: 35.68, lon: 139.69 },
  { city: "Mumbai", region: "India", lat: 19.08, lon: 72.88 },
  { city: "New York", region: "United States", lat: 40.71, lon: -74.01 },
  { city: "London", region: "United Kingdom", lat: 51.51, lon: -0.13 },
];

const offWorld = [
  {
    city: "Artemis Base Camp",
    region: "The Moon, lunar south pole",
    note: "NASA's planned permanent lunar outpost — dome habitats shielded by a layer of lunar regolith, built for a sustained human presence rather than a short visit.",
    img: "https://commons.wikimedia.org/wiki/Special:FilePath/Artemis%20Base%20Camp.png?width=1200",
  },
  {
    city: "Mars Base Alpha",
    region: "Mars",
    note: "SpaceX's name for the first Mars settlement — the earliest structures are expected to be landed Starships themselves, before purpose-built habitats follow.",
    img: "https://commons.wikimedia.org/wiki/Special:FilePath/PIA23302-FirstHumansOnMars-ArtistConcept.jpg?width=1200",
  },
  {
    city: "Selk Crater",
    region: "Titan, Saturn's largest moon",
    note: "The likely next stop after Mars — Titan has a dense atmosphere that actually shields against radiation, unlike Mars, plus abundant organic chemistry. NASA's Dragonfly rotorcraft lands there in 2034.",
    img: "https://commons.wikimedia.org/wiki/Special:FilePath/Df-aerial.jpg?width=1200",
  },
];

const planets = [
  {
    key: "earth",
    label: "Earth",
    color: "var(--color-core)",
    hex: "#5B57FF",
    texture: "https://commons.wikimedia.org/wiki/Special:FilePath/Blue%20Marble%202002.png?width=2048",
  },
  {
    key: "moon",
    label: "Moon",
    color: "var(--color-moon)",
    hex: "#94a3b8",
    texture: "https://commons.wikimedia.org/wiki/Special:FilePath/Solarsystemscope%20texture%202k%20moon.jpg?width=2048",
  },
  {
    key: "mars",
    label: "Mars",
    color: "var(--color-mars)",
    hex: "#dc2626",
    texture: "https://commons.wikimedia.org/wiki/Special:FilePath/Solarsystemscope%20texture%202k%20mars.jpg?width=2048",
  },
  {
    key: "titan",
    label: "Titan",
    color: "var(--color-titan)",
    hex: "#d97706",
    proceduralTexture: "titan",
  },
];

const openRoles = [
  {
    title: "Systems Integrity Lead",
    location: "Remote",
    body: "Owns what happens when AI-built systems disagree with each other across divisions — the referee role for a company with 20+ moving parts.",
  },
  {
    title: "Creative Partnerships Lead",
    location: "Remote",
    body: "The human relationship layer behind HCM University's launch guarantee — lining up real funding, distribution, and platform partners before a course opens.",
  },
  {
    title: "Off-World Operations Scout",
    location: "Artemis Base Camp, The Moon",
    body: "Early-stage groundwork for what an HCM presence on the Moon would actually need — logistics, comms latency, and what 'a division' even means off-planet.",
  },
  {
    title: "Off-World Operations Scout",
    location: "Mars Base Alpha, Mars",
    body: "Same brief, further out — laying the groundwork for HCM's eventual presence at Mars Base Alpha, years ahead of anyone actually being there.",
  },
  {
    title: "Off-World Operations Scout",
    location: "Selk Crater, Titan",
    body: "The furthest-out version of the role — Titan is the realistic candidate after Mars, and this one starts the groundwork decades before anyone else even gets there.",
  },
];

const futureRoles = [
  {
    tag: "Open now · Remote, Earth",
    title: "AI Judgment Steward",
    subtitle: "A real role, defined 20 years ahead of where most companies are thinking — because that's how far ahead HCM builds.",
    body: [
      "By 2046, AI runs almost everything at HCM end to end — sourcing, building, shipping, support. What it still can't do on its own is decide what to do when the right answer genuinely depends on judgment: two reasonable outcomes, real consequences, and no clean rule to fall back on. That's this job.",
      "You'd review the hardest calls surfaced across every division — not to override AI by default, but to catch what it missed, add context it didn't have, and feed that judgment back in so the system gets better at recognizing similar situations on its own next time.",
      "No formal path exists into this role yet — the job itself is still being defined by whoever ends up doing it first.",
    ],
  },
  {
    tag: "Open now · Mars Base Alpha",
    title: "Life Support Continuity Steward",
    subtitle: "The job that exists because getting it wrong means people don't get air or water.",
    body: [
      "At Mars Base Alpha, life support — oxygen, water recycling, pressure, temperature — runs on automated systems making constant micro-adjustments no person could track by hand. This role holds final authority over those systems for the moments the automated call and the safe call might not be the same thing.",
      "Not a technician swapping parts — someone reviewing every system-flagged anomaly, deciding when to trust the automation and when to override it, then feeding every real edge case back in so it's caught automatically next time.",
      "No formal path into this yet — Mars Base Alpha hasn't been built. It's on this page because that thinking has to start before someone's already living there depending on it, not after.",
    ],
  },
  {
    tag: "Open now · Earth-based, Titan operations",
    title: "Deep-Time Mission Steward",
    subtitle: "Titan is roughly 70 light-minutes from Earth — too far for a joystick.",
    body: [
      "With a one-way signal delay over an hour, nothing on Titan can be controlled in real time. Missions like Dragonfly (landing 2034) run on pre-set autonomous judgment for days between check-ins. This role defines the boundaries of that judgment in advance — what the craft decides on its own, what it holds for a human — then refines it, transmission by transmission, against what actually comes back.",
      "Closer to writing the rules a capable but isolated colleague has to live by, than operating anything directly.",
      "No formal path yet — defined here ahead of the mission actually needing it filled.",
    ],
  },
];

export default function Careers() {
  const [planet, setPlanet] = useState("earth");
  const active = planets.find((p) => p.key === planet);

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
            day one, on this world and, eventually, on the others too.
          </p>

          <div className="mb-6 flex flex-wrap gap-2">
            {planets.map((p) => (
              <button
                key={p.key}
                onClick={() => setPlanet(p.key)}
                className="rounded-full border px-4 py-2 font-mono text-[11px] uppercase tracking-[0.15em] transition-colors"
                style={
                  planet === p.key
                    ? { borderColor: p.color, color: p.color, background: `color-mix(in srgb, ${p.color} 12%, transparent)` }
                    : { borderColor: "var(--color-line)", color: "var(--color-ink-dim)" }
                }
              >
                {p.label}
              </button>
            ))}
          </div>

          <Globe
            key={planet}
            textureUrl={active.texture}
            proceduralTexture={active.proceduralTexture}
            color={active.hex}
            markers={
              planet === "earth"
                ? locations
                : planet === "moon"
                ? [{ lat: -89.5, lon: 0, label: "Artemis Base Camp" }]
                : planet === "mars"
                ? [{ lat: 5, lon: -30, label: "Mars Base Alpha" }]
                : [{ lat: 7, lon: 161, label: "Selk Crater" }]
            }
          />
          <p className="mt-3 font-mono text-[11px] text-[var(--color-ink-dim)]">
            Drag to rotate.{" "}
            {planet === "earth" && "Real Blue Marble Earth imagery."}
            {planet === "moon" && "Real NASA lunar surface data."}
            {planet === "mars" && "Real NASA Mars surface data."}
            {planet === "titan" &&
              "Titan's surface is permanently hidden under haze — this shows how it actually looks from outside, based on real Cassini imagery: a hazy amber globe with soft atmospheric banding, not a fabricated surface."}
          </p>

          {planet === "earth" && (
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
          )}
          {planet === "moon" && (
            <div className="mt-6 rounded-xl border border-[var(--color-line)] bg-[var(--color-surface)] px-4 py-3">
              <div className="font-display text-sm font-bold">Artemis Base Camp</div>
              <div className="font-mono text-[10px] uppercase tracking-[0.1em] text-[var(--color-ink-dim)]">
                Lunar south pole
              </div>
            </div>
          )}
          {planet === "mars" && (
            <div className="mt-6 rounded-xl border border-[var(--color-line)] bg-[var(--color-surface)] px-4 py-3">
              <div className="font-display text-sm font-bold">Mars Base Alpha</div>
              <div className="font-mono text-[10px] uppercase tracking-[0.1em] text-[var(--color-ink-dim)]">
                Site not yet confirmed
              </div>
            </div>
          )}
          {planet === "titan" && (
            <div className="mt-6 rounded-xl border border-[var(--color-line)] bg-[var(--color-surface)] px-4 py-3">
              <div className="font-display text-sm font-bold">Selk Crater</div>
              <div className="font-mono text-[10px] uppercase tracking-[0.1em] text-[var(--color-ink-dim)]">
                Dragonfly landing site, 2034
              </div>
            </div>
          )}

          <div className="mt-8 flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--color-ink-dim)]">
            <Rocket size={14} style={{ color: "var(--color-core-soft)" }} />
            Off-world — future
          </div>
          <div className="mt-3 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {offWorld.map((l) => (
              <div
                key={l.city}
                className="overflow-hidden rounded-2xl border border-dashed border-[var(--color-line)] bg-[var(--color-surface)]"
              >
                <img src={l.img} alt={l.city} loading="lazy" className="h-40 w-full object-cover" />
                <div className="p-4">
                  <div className="font-display text-sm font-bold">{l.city}</div>
                  <div className="font-mono text-[10px] uppercase tracking-[0.1em] text-[var(--color-ink-dim)]">
                    {l.region}
                  </div>
                  <p className="mt-2 text-xs leading-relaxed text-[var(--color-ink-dim)]">
                    {l.note}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-4 font-mono text-[11px] text-[var(--color-ink-dim)]">
            Not real HCM locations yet — named for and pictured using
            humanity's own real off-world plans, marking where "where HCM
            exists" goes next, eventually. Photos: NASA / Wikimedia
            Commons, public domain and CC-licensed concept art.
          </p>
        </div>
      </section>

      <section className="border-t border-[var(--color-line)] px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="mb-6 flex items-center gap-3">
            <Clock size={22} style={{ color: "var(--color-core-soft)" }} />
            <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-ink-dim)]">
              Job openings, on three worlds
            </h2>
          </div>
          <div className="space-y-6">
            {futureRoles.map((r) => (
              <div
                key={r.title}
                className="rounded-2xl border border-[var(--color-line)] bg-[var(--color-surface)] p-8 sm:p-10"
              >
                <div
                  className="inline-block rounded-full border px-3 py-1 font-mono text-[11px] uppercase tracking-[0.2em]"
                  style={{ borderColor: "var(--color-core)", color: "var(--color-core-soft)" }}
                >
                  {r.tag}
                </div>
                <h3 className="mt-4 font-display text-2xl font-bold">{r.title}</h3>
                <p className="mt-2 text-sm text-[var(--color-ink-dim)]">{r.subtitle}</p>
                {r.body.map((p, i) => (
                  <p key={i} className="mt-4 text-sm leading-relaxed text-[var(--color-ink-dim)] sm:text-base">
                    {p}
                  </p>
                ))}
                <a
                  href={`mailto:${CAREERS_EMAIL}?subject=${encodeURIComponent(`${r.title} — expression of interest`)}`}
                  className="mt-6 inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-opacity hover:opacity-85"
                  style={{ background: "var(--color-core)", color: "white" }}
                >
                  <Mail size={16} />
                  Apply for this role
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-[var(--color-line)] px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-6 font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-ink-dim)]">
            Other roles we've got going
          </h2>
          <div className="space-y-4">
            {openRoles.map((r) => (
              <div
                key={r.title + r.location}
                className="rounded-2xl border border-[var(--color-line)] bg-[var(--color-surface)] p-6"
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="font-display text-lg font-bold">{r.title}</h3>
                  <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-[var(--color-core-soft)]">
                    {r.location}
                  </span>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-[var(--color-ink-dim)]">
                  {r.body}
                </p>
              </div>
            ))}
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
