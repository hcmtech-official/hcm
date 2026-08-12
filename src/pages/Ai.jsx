import { Bot, Workflow, LineChart } from "lucide-react";
import DivisionHero from "../components/DivisionHero";
import { divisions } from "../data/divisions";

const d = divisions.find((x) => x.key === "ai");

const offerings = [
  {
    icon: Bot,
    title: "Assistants that know your business",
    body: "Custom chat and support assistants trained on your own docs, menus, or catalogue — not a generic bot bolted onto your site.",
  },
  {
    icon: Workflow,
    title: "Automation for the repetitive stuff",
    body: "Order intake, follow-up emails, scheduling, data entry — the tasks that eat a small team's week, handed off cleanly.",
  },
  {
    icon: LineChart,
    title: "Straight advice on where AI actually helps",
    body: "An honest read on what's worth automating now, what to wait on, and what still needs a human — before any code gets written.",
  },
];

export default function Ai() {
  return (
    <>
      <DivisionHero
        code={d.code}
        name={d.name}
        tagline={d.tagline}
        description="Practical AI work for teams that don't have an AI team — built on the same engineering foundation as HCM Tech."
        color={d.color}
      />

      <section className="px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-ink-dim)]">
            Where we help
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
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
    </>
  );
}
