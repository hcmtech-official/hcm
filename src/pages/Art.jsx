import { Palette } from "lucide-react";
import DivisionHero from "../components/DivisionHero";
import AppBadges from "../components/AppBadges";
import { divisions } from "../data/divisions";

const d = divisions.find((x) => x.key === "art");

const wm = (name) =>
  `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(name)}?width=1200`;

const paintings = [
  {
    title: "Mona Lisa",
    artist: "Leonardo da Vinci, c. 1503",
    img: wm("Mona Lisa, by Leonardo da Vinci, from C2RMF retouched.jpg"),
  },
  {
    title: "The Birth of Venus",
    artist: "Sandro Botticelli, c. 1485",
    img: wm("Sandro Botticelli - La nascita di Venere - Google Art Project - edited.jpg"),
  },
  {
    title: "The Starry Night",
    artist: "Vincent van Gogh, 1889",
    img: wm("Van Gogh - Starry Night - Google Art Project.jpg"),
  },
  {
    title: "Girl with a Pearl Earring",
    artist: "Johannes Vermeer, c. 1665",
    img: wm("1665 Girl with a Pearl Earring.jpg"),
  },
  {
    title: "The Creation of Adam",
    artist: "Michelangelo, c. 1512",
    img: wm("Michelangelo - Creation of Adam (cropped).jpg"),
  },
];

export default function Art() {
  return (
    <>
      <DivisionHero
        code={d.code}
        name={d.name}
        tagline={d.tagline}
        description="Before HCM makes any case for what it can create in art, it's worth looking at what set the bar in the first place. Five works, centuries apart, that people still travel to stand in front of."
        color={d.color}
      />

      <section className="px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="mb-2 flex items-center gap-3">
            <Palette size={22} style={{ color: d.color }} />
            <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-ink-dim)]">
              The gallery
            </h2>
          </div>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {paintings.map((p) => (
              <div
                key={p.title}
                className="overflow-hidden rounded-2xl border border-[var(--color-line)] bg-[var(--color-surface)]"
              >
                <img src={p.img} alt={p.title} loading="lazy" className="h-72 w-full object-cover" />
                <div className="p-5">
                  <h3 className="font-display text-lg font-bold">{p.title}</h3>
                  <p className="mt-1 text-sm text-[var(--color-ink-dim)]">{p.artist}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-6 font-mono text-[11px] text-[var(--color-ink-dim)]">
            Public-domain works, in museum collections worldwide. Left out
            anything still under copyright (a lot of 20th-century art,
            including Picasso's, still is) rather than reproduce it here.
          </p>
        </div>
      </section>
      <AppBadges color={d.color} />
    </>
  );
}
