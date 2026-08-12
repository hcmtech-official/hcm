import { Clapperboard, Film as FilmIcon, Camera } from "lucide-react";
import DivisionHero from "../components/DivisionHero";
import { divisions } from "../data/divisions";

const d = divisions.find((x) => x.key === "film");

const offerings = [
  { icon: FilmIcon, title: "Original shorts", body: "Short-form films and series produced under the HCM name." },
  { icon: Camera, title: "Production support", body: "Filming, editing, and post-production for outside projects." },
  { icon: Clapperboard, title: "Behind the scenes", body: "Process and making-of content alongside the finished work." },
];

export default function Film() {
  return (
    <>
      <DivisionHero
        code={d.code}
        name={d.name}
        tagline={d.tagline}
        description="The screen side of HCM — original shorts, production work, and the process behind both."
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
    </>
  );
}
