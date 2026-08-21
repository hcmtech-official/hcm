import { useState } from "react";
import {
  Camera,
  ShoppingCart,
  ListChecks,
  Scale,
  ExternalLink,
  CircleDot,
} from "lucide-react";

/* Original line-art illustrations — not product photos.
   Retailer photos are one tap away via the Buy link on each card. */
function ToolArt({ kind, color }) {
  const stroke = color;
  const common = { fill: "none", stroke, strokeWidth: 2.2, strokeLinecap: "round", strokeLinejoin: "round" };
  if (kind === "spudger") {
    return (
      <svg viewBox="0 0 120 120" className="h-16 w-16">
        <path d="M30 100 L78 52" {...common} strokeWidth={5} />
        <path d="M78 52 L96 34 C100 30 100 24 96 20 C92 16 86 16 82 20 L64 38 Z" {...common} />
        <path d="M30 100 L22 108" {...common} strokeWidth={5} />
      </svg>
    );
  }
  if (kind === "tweezers") {
    return (
      <svg viewBox="0 0 120 120" className="h-16 w-16">
        <path d="M40 18 C30 40 30 40 44 62 L58 84" {...common} />
        <path d="M80 18 C90 40 90 40 76 62 L58 84" {...common} />
        <path d="M58 84 L50 100" {...common} />
        <path d="M58 84 L66 100" {...common} />
        <path d="M46 34 L74 34" stroke={stroke} strokeWidth={1.4} opacity={0.5} />
      </svg>
    );
  }
  if (kind === "keycap") {
    return (
      <svg viewBox="0 0 120 120" className="h-16 w-16">
        <rect x="24" y="24" width="72" height="52" rx="8" {...common} />
        <path d="M40 76 C40 90 44 96 60 96 C76 96 80 90 80 76" {...common} strokeWidth={2} />
        <text x="60" y="56" textAnchor="middle" fontSize="22" fontWeight="700" fill={stroke} stroke="none">K</text>
      </svg>
    );
  }
  if (kind === "air") {
    return (
      <svg viewBox="0 0 120 120" className="h-16 w-16">
        <rect x="40" y="38" width="32" height="66" rx="6" {...common} />
        <path d="M48 38 L48 26 C48 20 52 16 56 16 L60 16" {...common} />
        <path d="M64 16 L72 16 L72 28 L60 30 L48 26" {...common} strokeWidth={1.6} />
        <path d="M78 50 L92 46 M80 60 L94 60 M78 70 L92 74" stroke={stroke} strokeWidth={1.8} opacity={0.6} strokeLinecap="round" />
      </svg>
    );
  }
  // isopropyl
  return (
    <svg viewBox="0 0 120 120" className="h-16 w-16">
      <rect x="38" y="42" width="34" height="58" rx="5" {...common} />
      <path d="M48 42 L48 28 L62 28 L62 42" {...common} />
      <rect x="45" y="60" width="20" height="14" stroke={stroke} strokeWidth={1.4} opacity={0.5} fill="none" />
      <path d="M84 50 L96 42 M84 60 L98 60 M84 70 L96 78" stroke={stroke} strokeWidth={1.6} opacity={0.4} strokeLinecap="round" />
    </svg>
  );
}

const tools = [
  {
    key: "keycap",
    name: "MacBook OEM keycap + hinge kit",
    note: "Genuine part harvested from an original keyboard — exact font, texture and \"snap-in\" fit. Order the matching key + your MacBook model number.",
    price: "$29.99",
    retailer: "Macfixit Australia",
    href: "https://www.macfixit.com.au/products/macbook-replacement-keycap",
    budgetNote: "Budget option: generic keycap + clip kits run ~$8–19 on eBay AU (search your model number + \"keycap\") — cheaper, but fit quality varies.",
  },
  {
    key: "spudger",
    name: "Nylon spudger — non-marking pry tool",
    note: "The actual Apple service-part spudger (922-5065). Never use metal — it scratches the case and can short the keyboard.",
    price: "$1.99",
    retailer: "Macfixit Australia",
    href: "https://www.macfixit.com.au/products/3m-spudger-apple-pry-tool-non-marking-nylon-black-stick-922-5065",
  },
  {
    key: "tweezers",
    name: "iFixit angled precision tweezers",
    note: "Anti-static stainless steel, fine angled tip — for placing the small hinge clip pieces.",
    price: "$19.99",
    retailer: "Macfixit Australia",
    href: "https://www.macfixit.com.au/products/ifixit-angled-precision-tweezers",
  },
  {
    key: "air",
    name: "Pressurised air duster, 400mL",
    note: "Clears crumbs and dust from the switch well before refitting the new key.",
    price: "$10.00",
    retailer: "Officeworks",
    href: "https://www.officeworks.com.au/shop/officeworks/p/laser-clean-range-pressurised-air-duster-400ml-lascl1827f",
  },
  {
    key: "isopropyl",
    name: "Isocol rubbing alcohol, 345mL (64%)",
    note: "Only needed if there's sticky residue in the well — dab on a cotton swab and let it fully dry before reassembly.",
    price: "$9.99",
    retailer: "Chemist Warehouse",
    href: "https://www.chemistwarehouse.com.au/buy/40678/isocol-rubbing-alcohol-345ml",
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
    price: "$15 – $65",
    detail: "Budget eBay parts land near the low end; OEM parts + proper tools from Macfixit (as priced above) land near the high end. Either way, the tools are reusable if more keys need doing later.",
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
              <p className="mt-2 text-xs leading-relaxed text-[var(--color-ink-dim)]">
                Real current prices from real AU retailers. The icons are our
                own illustrations, not the retailers' photos — tap "View at{" "}
                {"{retailer}"}" on any card to see the actual product photo
                before buying.
              </p>

              <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {tools.map((t) => (
                  <div
                    key={t.key}
                    className="flex flex-col rounded-xl border border-[var(--color-line)] p-5"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div
                        className="flex h-16 w-16 shrink-0 items-center justify-center rounded-lg"
                        style={{ background: `${color}14` }}
                      >
                        <ToolArt kind={t.key} color={color} />
                      </div>
                      <div
                        className="whitespace-nowrap rounded-full px-2.5 py-1 font-mono text-sm font-bold"
                        style={{ background: `${color}14`, color }}
                      >
                        {t.price}
                      </div>
                    </div>

                    <div className="mt-4 text-sm font-semibold">{t.name}</div>
                    <p className="mt-1 flex-1 text-xs leading-relaxed text-[var(--color-ink-dim)]">
                      {t.note}
                    </p>
                    {t.budgetNote && (
                      <p className="mt-2 text-xs leading-relaxed text-[var(--color-ink-dim)] opacity-80">
                        {t.budgetNote}
                      </p>
                    )}

                    <a
                      href={t.href}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold"
                      style={{ color }}
                    >
                      View at {t.retailer}
                      <ExternalLink size={12} />
                    </a>
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
