import { Trophy, Radar, Eye, Sparkles, Gauge, ArrowRight } from "lucide-react";
import DivisionHero from "../components/DivisionHero";
import AppBadges from "../components/AppBadges";
import { divisions } from "../data/divisions";

const d = divisions.find((x) => x.key === "sports");

const wm = (name) =>
  `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(name)}?width=900`;

const sports = [
  {
    name: "American Football",
    note: "The NFL runs on it now — RFID chips track every player, every play, at 20 samples a second.",
    img: wm("American-football-1573095.jpg"),
  },
  {
    name: "Basketball",
    note: "Movement-tracking systems process tens of millions of data points a game to break down what actually wins possessions.",
    img: wm("Basketball game, Đống Đa, Hanoi, May 2023.jpg"),
  },
  {
    name: "Baseball",
    note: "Automated ball-strike systems are already being trialed — the first real step toward AI-called pitches.",
    img: wm("Baseball.jpg"),
  },
  {
    name: "Cricket",
    note: "Ball-tracking has decided LBW calls for years — now bat and ball sensors are reading spin, seam, and impact on every delivery.",
    img: wm("Barsapara Cricket Stadium match under floodlights.jpg"),
  },
  {
    name: "Formula 1",
    note: "Red Bull Racing runs close to four billion race-strategy simulations on cloud AI before a single lights-out.",
    img: wm("2024-08-25 Motorsport, Formel 1, Großer Preis der Niederlande 2024 STP 3912 by Stepro.jpg"),
  },
  {
    name: "Golf",
    note: "Phone-camera AI swing coaches now give real-time voice cues between reps — the same feedback loop that used to require a swing-analysis lab.",
    img: wm("Golfer swing.jpg"),
  },
  {
    name: "NRL",
    note: "Rugby league clubs now run GPS and heart-rate tracking every session — load management data that decides who's actually fit to play, not just who says they are.",
    img: wm("Harry Grant (rugby league).jpg"),
  },
  {
    name: "AFL",
    note: "Player-tracking data across an 18-a-side, full-ground game generates some of the densest data sets in sport — used to model fatigue and rotation in real time.",
    img: wm("Alex Rance and Lance Franklin marking contest.jpg"),
  },
  {
    name: "Soccer",
    note: "Semi-automated offside technology is already deciding World Cup goals — limb-tracking at up to 50 times a second, faster than any linesman's flag.",
    img: wm("SoFi Stadium soccer game.jpg"),
  },
  {
    name: "UFC",
    note: "Wearable and biometric data now shapes fight camps directly — load management and recovery tracking built to catch overtraining before it becomes an injury.",
    img: wm("PLMMA Cage-Octagon MMA.JPG"),
  },
  {
    name: "Billiards",
    note: "Trajectory-prediction overlays are creeping into broadcasts the same way they did in snooker — showing the shot a player is lining up before they take it.",
    img: wm("8-ball Rack in Billiards.jpg"),
  },
];

const shifts = [
  {
    icon: Eye,
    title: "Officiating",
    body: "Ball-tracking and computer vision are already deciding close calls in cricket and edging into baseball and football — less argument, faster decisions.",
  },
  {
    icon: Radar,
    title: "Performance & injury prevention",
    body: "Wearable sensor data is catching fatigue and injury risk before a player feels pain, not after they're already hurt.",
  },
  {
    icon: Sparkles,
    title: "Fan experience",
    body: "Personalized highlight reels and predictive stats are turning a single broadcast into a different experience for every viewer watching it.",
  },
];

export default function Sports() {
  return (
    <>
      <DivisionHero
        code={d.code}
        name={d.name}
        tagline={d.tagline}
        description="Some of the biggest sports in the world, and the same story behind all of them: AI is already changing how they're played, officiated, and watched."
        color={d.color}
      />

      <section className="px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-ink-dim)]">
            The top sports
          </h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {sports.map((s) => (
              <div
                key={s.name}
                className="overflow-hidden rounded-2xl border border-[var(--color-line)] bg-[var(--color-surface)]"
              >
                <img src={s.img} alt={s.name} loading="lazy" className="h-40 w-full object-cover" />
                <div className="p-5">
                  <h3 className="font-display text-lg font-bold">{s.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--color-ink-dim)]">
                    {s.note}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-[var(--color-line)] px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="mb-6 flex items-center gap-3">
            <Gauge size={22} style={{ color: d.color }} />
            <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-ink-dim)]">
              Where AI already runs deepest: Formula 1
            </h2>
          </div>
          <p className="max-w-2xl text-sm leading-relaxed text-[var(--color-ink-dim)] sm:text-base">
            No sport here is more AI-run than F1 already is. Oracle Red
            Bull Racing runs close to four billion Monte Carlo race
            simulations across a season, processes roughly 2TB of
            telemetry per car per session, and now races with a live AI
            strategy agent on the pit wall — reading tyre wear, weather,
            and rival strategy in real time, alongside the engineers, not
            instead of them.
          </p>
          <p className="mt-4 flex items-start gap-2 max-w-2xl text-sm leading-relaxed text-[var(--color-ink-dim)] sm:text-base">
            <ArrowRight size={18} style={{ color: d.color }} className="mt-1 shrink-0" />
            That's the pattern HCM Sports wants to explore everywhere else
            on this page: AI handling scale no human team could process by
            hand, with people still making the calls that matter.
          </p>
        </div>
      </section>

      <section className="border-t border-[var(--color-line)] px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="mb-6 flex items-center gap-3">
            <Trophy size={22} style={{ color: d.color }} />
            <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-ink-dim)]">
              Where HCM sees AI going next
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {shifts.map((s) => (
              <div
                key={s.title}
                className="rounded-2xl border border-[var(--color-line)] bg-[var(--color-surface)] p-6"
              >
                <s.icon size={22} style={{ color: d.color }} />
                <h3 className="mt-4 font-display text-lg font-bold">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--color-ink-dim)]">
                  {s.body}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-6 font-mono text-[11px] text-[var(--color-ink-dim)]">
            HCM Sports is a research and content division exploring these
            shifts — not affiliated with the NFL, NBA, MLB, or any league
            or team pictured here.
          </p>
        </div>
      </section>
      <AppBadges color={d.color} />
    </>
  );
}
