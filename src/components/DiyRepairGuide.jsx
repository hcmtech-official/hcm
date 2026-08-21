import { useState } from "react";
import {
  Camera,
  ShoppingCart,
  ListChecks,
  Scale,
  ExternalLink,
  CircleDot,
} from "lucide-react";

const tools = [
  {
    name: "Replacement key kit (keycap + hinge clip, + rubber cup if needed)",
    note: "Must match your exact model — see Step 1 before ordering.",
    cost: "$8 – $20 per key",
    source: "Macfixit Australia, or eBay AU (search your model number + \"keycap\")",
  },
  {
    name: "Plastic spudger / pry tool",
    note: "Never use metal — it scratches the case and can short the keyboard.",
    cost: "$8 – $15",
    source: "iFixit, Jaycar, or any phone-repair tool kit",
  },
  {
    name: "Fine-point tweezers",
    note: "For placing the small hinge clip pieces.",
    cost: "$5 – $10",
    source: "Jaycar, Officeworks, or a phone-repair tool kit",
  },
  {
    name: "Canned air",
    note: "Clears crumbs/dust from the switch well before refitting.",
    cost: "~$10",
    source: "Officeworks, Bunnings, JB Hi-Fi",
  },
  {
    name: "Isopropyl alcohol + cotton swabs",
    note: "Only if there's sticky residue — let it fully dry before reassembly.",
    cost: "~$5",
    source: "Chemist or supermarket",
  },
];

const steps = [
  {
    title: "Identify your exact model",
    body: "Apple menu → About This Mac for the model, or flip it over and read the A-number on the bottom case. This decides everything — MacBook Airs from late 2019 onward use the scissor-switch \"Magic Keyboard\"; keys are individually replaceable. Older butterfly-mechanism Airs (2015–2019) generally aren't — a broken key on those means a full top case, which is the Apple Store repair, not a DIY one.",
  },
  {
    title: "Order the matching key kit",
    body: "Match the model number, the specific key (letter/size), and the layout (ANSI vs ISO). A mismatched clip will look right in the listing photo and still not seat properly.",
  },
  {
    title: "Power down fully",
    body: "Shut down (don't just sleep) and unplug the charger before you touch the keyboard.",
  },
  {
    title: "Lift the damaged keycap",
    body: "Slide the spudger under one edge and gently pry upward. It unclips rather than pulls — if it's fighting you, reposition the spudger instead of forcing it.",
  },
  {
    title: "Check the hinge clip",
    body: "If it's cracked, bent, or a piece is missing, replace it along with the keycap. A good clip with a new cap on top is a common source of a key that still feels wrong afterwards.",
  },
  {
    title: "Clean the well",
    body: "Canned air first to clear debris. If there's sticky residue, a lightly dampened (not wet) alcohol swab, then let it dry completely before continuing.",
  },
  {
    title: "Seat the new hinge, then the cap",
    body: "Clip the hinge into its mounting points on the keyboard base first. Then align the keycap over it and press down evenly — corners before centre — until it clicks flat.",
  },
  {
    title: "Test before you call it done",
    body: "Press the key repeatedly and check it sits level with its neighbours and has the same travel. If it feels off, unclip and reseat rather than living with it.",
  },
];

const comparison = [
  {
    label: "DIY (this guide)",
    price: "$15 – $35",
    detail: "Parts + tools, one key. Reusable tools if more keys need doing later.",
    highlight: true,
  },
  {
    label: "Independent Sydney repair shop",
    price: "$100 – $250",
    detail: "Often same-day. Worth it if you'd rather not open the case yourself.",
    highlight: false,
  },
  {
    label: "Apple Store (out of warranty)",
    price: "$400 – $700+",
    detail: "Apple doesn't sell single keys — a keyboard issue means a full top case replacement (keyboard + trackpad + battery), which is why the price jumps this much.",
    highlight: false,
  },
];

function PhotoSlot({ label }) {
  return (
    <div className="flex aspect-[4/3] flex-col items-center justify-center gap-2 rounded-xl border border-dashed border-[var(--color-line)] bg-black/20 text-center">
      <Camera size={22} className="text-[var(--color-ink-dim)]" />
      <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-[var(--color-ink-dim)]">
        {label}
      </span>
      <span className="max-w-[80%] text-xs text-[var(--color-ink-dim)]">
        Photos coming soon
      </span>
    </div>
  );
}

export default function DiyRepairGuide({ color }) {
  const [status] = useState("in-progress");

  return (
    <section className="border-t border-[var(--color-line)] px-5 py-16 sm:px-8">
      <div className="mx-auto max-w-5xl">
        <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-ink-dim)]">
          DIY Repair Guide
        </h2>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[var(--color-ink-dim)]">
          A repair we're logging as we do it — tools, real cost, and the
          actual steps, not just a stock photo tutorial.
        </p>

        <div className="mt-6 overflow-hidden rounded-2xl border border-[var(--color-line)] bg-[var(--color-surface)]">
          <div className="p-8 sm:p-10">
            <div className="flex flex-wrap items-center gap-3">
              <div
                className="inline-block rounded-full border px-3 py-1 font-mono text-[11px] uppercase tracking-[0.2em]"
                style={{ borderColor: color, color }}
              >
                Live repair log
              </div>
              <div className="inline-flex items-center gap-1.5 rounded-full border border-[var(--color-line)] px-3 py-1 font-mono text-[11px] uppercase tracking-[0.15em] text-[var(--color-ink-dim)]">
                <CircleDot size={12} className={status === "in-progress" ? "animate-pulse" : ""} />
                {status === "in-progress" ? "In progress" : "Fixed"}
              </div>
            </div>

            <h3 className="mt-4 font-display text-2xl font-bold sm:text-3xl">
              Fixing a MacBook Air keyboard key
            </h3>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[var(--color-ink-dim)] sm:text-base">
              One key isn't sitting right — this section tracks the actual
              fix from here: before/after photos of the real unit, the exact
              parts ordered, and whether it worked first time.
            </p>

            {/* Photo placeholders */}
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <PhotoSlot label="Before" />
              <PhotoSlot label="After" />
            </div>

            {/* Tools & parts */}
            <div className="mt-10">
              <div className="flex items-center gap-2">
                <ShoppingCart size={18} style={{ color }} />
                <h4 className="font-display text-lg font-bold">
                  Tools &amp; parts
                </h4>
              </div>
              <div className="mt-4 divide-y divide-[var(--color-line)] overflow-hidden rounded-xl border border-[var(--color-line)]">
                {tools.map((t) => (
                  <div key={t.name} className="flex flex-col gap-1 p-4 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
                    <div>
                      <div className="text-sm font-semibold">{t.name}</div>
                      <p className="mt-1 text-xs leading-relaxed text-[var(--color-ink-dim)]">
                        {t.note}
                      </p>
                      <p className="mt-1 text-xs text-[var(--color-ink-dim)]">
                        Buy: {t.source}
                      </p>
                    </div>
                    <div
                      className="whitespace-nowrap font-mono text-sm font-semibold sm:text-right"
                      style={{ color }}
                    >
                      {t.cost}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Steps */}
            <div className="mt-10">
              <div className="flex items-center gap-2">
                <ListChecks size={18} style={{ color }} />
                <h4 className="font-display text-lg font-bold">
                  Step by step
                </h4>
              </div>
              <ol className="mt-4 space-y-4">
                {steps.map((s, i) => (
                  <li key={s.title} className="flex gap-4">
                    <span
                      className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full font-mono text-xs font-bold"
                      style={{ background: color, color: "var(--color-void)" }}
                    >
                      {i + 1}
                    </span>
                    <div>
                      <div className="text-sm font-semibold">{s.title}</div>
                      <p className="mt-1 text-sm leading-relaxed text-[var(--color-ink-dim)]">
                        {s.body}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            {/* Cost comparison */}
            <div className="mt-10">
              <div className="flex items-center gap-2">
                <Scale size={18} style={{ color }} />
                <h4 className="font-display text-lg font-bold">
                  DIY vs. paying someone else
                </h4>
              </div>
              <div className="mt-4 grid gap-4 sm:grid-cols-3">
                {comparison.map((c) => (
                  <div
                    key={c.label}
                    className="rounded-xl border p-5"
                    style={{
                      borderColor: c.highlight ? color : "var(--color-line)",
                      background: c.highlight ? `${color}14` : "transparent",
                    }}
                  >
                    <div className="text-xs font-semibold uppercase tracking-[0.1em] text-[var(--color-ink-dim)]">
                      {c.label}
                    </div>
                    <div
                      className="mt-2 font-display text-2xl font-bold"
                      style={{ color: c.highlight ? color : undefined }}
                    >
                      {c.price}
                    </div>
                    <p className="mt-2 text-xs leading-relaxed text-[var(--color-ink-dim)]">
                      {c.detail}
                    </p>
                  </div>
                ))}
              </div>
              <p className="mt-4 flex items-start gap-2 text-xs leading-relaxed text-[var(--color-ink-dim)]">
                <ExternalLink size={14} className="mt-0.5 shrink-0" />
                Rough Sydney-area figures, gathered from Apple's own repair
                pricing pattern and independent repair shops — get an actual
                quote before deciding if yours is more involved than a
                single key.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
