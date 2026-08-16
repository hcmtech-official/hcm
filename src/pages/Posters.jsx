import { Image as ImageIcon, Upload } from "lucide-react";
import DivisionHero from "../components/DivisionHero";
import AppBadges from "../components/AppBadges";
import { divisions } from "../data/divisions";

const d = divisions.find((x) => x.key === "posters");

// Add entries here as posters/logos come in:
// { title: "Name", img: "./posters/filename.jpg" }
const posters = [];

export default function Posters() {
  return (
    <>
      <DivisionHero
        code={d.code}
        name={d.name}
        tagline={d.tagline}
        description="A gallery of HCM's posters and logos — pulled together from across every division, in one place."
        color={d.color}
      />

      <section className="px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-ink-dim)]">
            The gallery
          </h2>

          {posters.length === 0 ? (
            <div className="mt-6 rounded-2xl border border-dashed border-[var(--color-line)] bg-[var(--color-surface)] p-10 text-center">
              <Upload size={26} style={{ color: d.color }} className="mx-auto" />
              <h3 className="mt-4 font-display text-lg font-bold">
                Empty for now — send over the posters and logos
              </h3>
              <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-[var(--color-ink-dim)]">
                Share the images and this gallery gets filled in — one card
                per piece, same layout the rest of HCM uses.
              </p>
            </div>
          ) : (
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {posters.map((p) => (
                <div
                  key={p.title}
                  className="overflow-hidden rounded-2xl border border-[var(--color-line)] bg-[var(--color-surface)]"
                >
                  <img src={p.img} alt={p.title} loading="lazy" className="w-full object-cover" />
                  <div className="p-4">
                    <div className="flex items-center gap-2">
                      <ImageIcon size={16} style={{ color: d.color }} />
                      <h3 className="font-display text-sm font-bold">{p.title}</h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
      <AppBadges color={d.color} />
    </>
  );
}
