import { Disc3, Mic2, Radio } from "lucide-react";
import DivisionHero from "../components/DivisionHero";
import AppBadges from "../components/AppBadges";
import VideoEmbed from "../components/VideoEmbed";
import { divisions } from "../data/divisions";

const d = divisions.find((x) => x.key === "music");

const offerings = [
  { icon: Mic2, title: "Original releases", body: "Tracks and projects released under the HCM Music name." },
  { icon: Disc3, title: "Production", body: "Mixing, mastering, and production support for other artists." },
  { icon: Radio, title: "Playlists & spotlights", body: "Curated playlists and features for tracks worth hearing." },
];

export default function Music() {
  return (
    <>
      <DivisionHero
        code={d.code}
        name={d.name}
        tagline={d.tagline}
        description="The sound side of HCM — releases, production, and a home for tracks that deserve one."
        color={d.color}
      />
      <section className="px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-ink-dim)]">
            What's here
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {offerings.map((o) => (
              <div key={o.title} className="rounded-2xl border border-[var(--color-line)] bg-[var(--color-surface)] p-6">
                <o.icon size={22} style={{ color: d.color }} />
                <h3 className="mt-4 font-display text-lg font-bold">{o.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--color-ink-dim)]">{o.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-[var(--color-line)] px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-md">
          <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-ink-dim)]">
            Sample work
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-[var(--color-ink-dim)]">
            A first piece out of HCM Music — early, and a sign of where this
            division is headed.
          </p>
          <div className="mt-6">
            <VideoEmbed id="GvlHxFwQ6QM" title="HCM Music sample" vertical />
          </div>
        </div>
      </section>
      <AppBadges color={d.color} />
    </>
  );
}
