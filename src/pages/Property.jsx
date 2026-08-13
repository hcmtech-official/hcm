import { Home, Video, FileSignature, Wallet } from "lucide-react";
import DivisionHero from "../components/DivisionHero";
import AppBadges from "../components/AppBadges";
import { divisions } from "../data/divisions";

const d = divisions.find((x) => x.key === "property");

const offerings = [
  {
    icon: Home,
    title: "List online, no branch needed",
    body: "Your listing goes live across the major property sites without a shopfront or a walk-in office behind it.",
  },
  {
    icon: Video,
    title: "Virtual inspections",
    body: "Video walkthroughs and live virtual open homes, so buyers and renters can inspect from anywhere.",
  },
  {
    icon: FileSignature,
    title: "Digital offers & contracts",
    body: "Offers, paperwork, and signatures handled online, with a person on the other end whenever you need one.",
  },
  {
    icon: Wallet,
    title: "A flat fee, not a branch overhead",
    body: "No physical office to fund means a straightforward fee instead of the traditional percentage commission.",
  },
];

export default function Property() {
  return (
    <>
      <DivisionHero
        code={d.code}
        name={d.name}
        tagline={d.tagline}
        description="A real estate agency built to run entirely online — the same job a high street agent does, without the office lease baked into your fee."
        color={d.color}
      />

      <section className="px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-ink-dim)]">
            How it works
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {offerings.map((o) => (
              <div
                key={o.title}
                className="rounded-2xl border border-[var(--color-line)] bg-[var(--color-surface)] p-6"
              >
                <o.icon size={22} style={{ color: d.color }} />
                <h3 className="mt-4 font-display text-lg font-bold">{o.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--color-ink-dim)]">
                  {o.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <AppBadges color={d.color} />
    </>
  );
}
