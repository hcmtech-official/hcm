import { Bot, Warehouse, Cpu, ShieldCheck } from "lucide-react";
import DivisionHero from "../components/DivisionHero";
import AppBadges from "../components/AppBadges";
import { divisions } from "../data/divisions";

const d = divisions.find((x) => x.key === "robotics");

const topics = [
  {
    icon: Bot,
    title: "Humanoid robots",
    body: "Bipedal robots moving from pilot programs to real factory and warehouse floors — what they can actually do today.",
  },
  {
    icon: Warehouse,
    title: "Warehouse & logistics automation",
    body: "Picking, sorting, and material handling — where robots are already working alongside people at scale.",
  },
  {
    icon: Cpu,
    title: "AI-driven autonomy",
    body: "How AI is letting robots plan, adapt, and handle unstructured tasks instead of just repeating fixed motions.",
  },
  {
    icon: ShieldCheck,
    title: "Safety & standards",
    body: "The safety standards and reliability benchmarks that decide whether a robot is actually ready for a shared workspace.",
  },
];

export default function Robotics() {
  return (
    <>
      <DivisionHero
        code={d.code}
        name={d.name}
        tagline={d.tagline}
        description="Where robotics actually stands right now — humanoids, warehouse automation, and the AI making machines more capable, minus the hype."
        color={d.color}
        image="https://commons.wikimedia.org/wiki/Special:FilePath/Amazon_warehouse_robot_2020.JPG"
        imageCredit="CC BY-SA 4.0, via Wikimedia Commons"
      />

      <section className="px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-ink-dim)]">
            What we cover
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {topics.map((t) => (
              <div
                key={t.title}
                className="rounded-2xl border border-[var(--color-line)] bg-[var(--color-surface)] p-6"
              >
                <t.icon size={22} style={{ color: d.color }} />
                <h3 className="mt-4 font-display text-lg font-bold">{t.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--color-ink-dim)]">
                  {t.body}
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
