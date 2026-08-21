import { useState } from "react";
import { ExternalLink, Globe, Wrench, Smartphone, ShoppingBag, Truck, CreditCard, KanbanSquare, Users, ShieldCheck, MessageSquareText, Link2, Sparkles } from "lucide-react";
import DivisionHero from "../components/DivisionHero";
import AppBadges from "../components/AppBadges";
import { divisions } from "../data/divisions";

function GithubMark(props) {
  return (
    <svg viewBox="0 0 24 24" width="26" height="26" fill="currentColor" {...props}>
      <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.1 3.29 9.4 7.86 10.94.58.1.79-.25.79-.56 0-.27-.01-1.17-.02-2.12-3.2.7-3.88-1.36-3.88-1.36-.52-1.34-1.28-1.7-1.28-1.7-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.71 1.26 3.37.96.1-.75.4-1.26.73-1.55-2.55-.29-5.23-1.28-5.23-5.68 0-1.26.45-2.28 1.19-3.08-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.64 1.6.24 2.77.12 3.05.74.8 1.19 1.82 1.19 3.08 0 4.41-2.69 5.38-5.25 5.67.41.36.78 1.07.78 2.16 0 1.56-.01 2.82-.01 3.2 0 .32.21.67.8.56A11.5 11.5 0 0 0 23.5 12c0-6.27-5.23-11.5-11.5-11.5Z" />
    </svg>
  );
}

const d = divisions.find((x) => x.key === "tech");

const services = [
  {
    icon: Globe,
    title: "Websites, built for the public",
    body: "Small business and personal sites — designed, built, and shipped. From a first landing page to a full storefront, made to actually bring people in.",
  },
  {
    icon: Smartphone,
    title: "Mobile device repair",
    body: "Screens, batteries, charging ports, water damage — diagnosed and fixed, with straight answers about what's worth repairing.",
  },
  {
    icon: Wrench,
    title: "PC repair & builds",
    body: "Slow machines, failing drives, and custom builds. Hardware and software both, sorted properly instead of patched over.",
  },
];

const showcases = [
  {
    tag: "Client project",
    name: "KKreations World",
    subtitle: "Grazing, cakes & sweet treats — Sydney",
    description:
      "A full storefront rebuild for a Sydney home-bakery — grazing boxes, cupcake bouquets, strawberry towers, and custom cakes. Built to move customers off Instagram DMs and into a proper ordering flow: live pricing, guided order form, deposit payments, and order tracking, plus a dashboard for the business side.",
    href: "https://hcmtech-official.github.io/hcm-tech/kkreations/",
    features: [
      {
        icon: ShoppingBag,
        title: "Full ordering flow",
        body: "Menu, live pricing by size, and a guided order form — no back-and-forth over DMs to get a quote.",
      },
      {
        icon: CreditCard,
        title: "Deposit payments",
        body: "Card via Stripe, plus Afterpay and Zip, so customers can lock in a date without paying in full upfront.",
      },
      {
        icon: Truck,
        title: "Order tracking & admin",
        body: "A trackable order code for customers, and a business dashboard for active orders, revenue, and expenses.",
      },
    ],
  },
  {
    tag: "Internal tool",
    name: "HCM Issue Tracker",
    subtitle: "The board we use to run HCM's own build",
    description:
      "A lightweight kanban board built for HCM itself — anyone can raise an issue, and the team moves it through To do, In progress, and Done. No login needed to raise something; an admin view behind a password handles triage.",
    href: "https://hcmtech-official.github.io/hcm-tech/issues/",
    features: [
      {
        icon: KanbanSquare,
        title: "Three-column board",
        body: "To do, in progress, and done — a clear view of what's moving and what's stuck.",
      },
      {
        icon: Users,
        title: "Open to raise, gated to manage",
        body: "Anyone can submit an issue with no login. Moving or closing one needs admin access.",
      },
      {
        icon: ShieldCheck,
        title: "Built the same way as everything else",
        body: "A static page, vibe-coded like the rest of HCM's early tools — quick to stand up, easy to iterate on.",
      },
    ],
  },
];

const spotIt = {
  prompt:
    "A Sydney home-bakery needs to take a card payment with no terminal in sight. Watch the clip, then guess what this is called.",
  video: "/hcm/videos/square-payment-links-tutorial.mp4",
  answer: "Square Payment Links",
  explanation:
    "A payment link is a one-off checkout page a business generates and sends however suits — text, DM, email. The customer taps it, lands on a secure Square-hosted checkout, and pays by card or Express Checkout (Google Pay / Apple Pay). No card reader, no app install, no manual invoice — just a link.",
  points: [
    { icon: MessageSquareText, title: "Sent like a message", body: "Texted straight to the customer's phone — no separate app or portal for them to open." },
    { icon: Link2, title: "Hosted checkout", body: "The link opens a secure, Square-hosted page — the business never handles raw card details." },
    { icon: Sparkles, title: "Express checkout built in", body: "Google Pay and Apple Pay sit right alongside manual card entry, so paying takes one tap." },
  ],
};

function SpotIt({ color }) {
  const [revealed, setRevealed] = useState(false);

  return (
    <section className="border-t border-[var(--color-line)] px-5 py-16 sm:px-8">
      <div className="mx-auto max-w-5xl">
        <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-ink-dim)]">
          What is this called?
        </h2>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[var(--color-ink-dim)]">
          {spotIt.prompt}
        </p>

        <div className="mt-6 overflow-hidden rounded-2xl border border-[var(--color-line)] bg-[var(--color-surface)] sm:grid sm:grid-cols-[280px_1fr]">
          <div className="bg-black/40 p-4 sm:p-5">
            <video
              className="mx-auto w-full max-w-[220px] rounded-xl border border-[var(--color-line)]"
              src={spotIt.video}
              controls
              playsInline
              preload="metadata"
            />
          </div>

          <div className="p-8 sm:p-10">
            {!revealed ? (
              <button
                type="button"
                onClick={() => setRevealed(true)}
                className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-opacity hover:opacity-85"
                style={{ background: color, color: "var(--color-void)" }}
              >
                Reveal the answer
              </button>
            ) : (
              <>
                <div
                  className="inline-block rounded-full border px-3 py-1 font-mono text-[11px] uppercase tracking-[0.2em]"
                  style={{ borderColor: color, color }}
                >
                  Answer
                </div>
                <h3 className="mt-4 font-display text-2xl font-bold sm:text-3xl">
                  {spotIt.answer}
                </h3>
                <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[var(--color-ink-dim)] sm:text-base">
                  {spotIt.explanation}
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-3">
                  {spotIt.points.map((p) => (
                    <div key={p.title}>
                      <p.icon size={20} style={{ color }} />
                      <h4 className="mt-3 font-display text-base font-bold">{p.title}</h4>
                      <p className="mt-1 text-sm leading-relaxed text-[var(--color-ink-dim)]">
                        {p.body}
                      </p>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Tech() {
  return (
    <>
      <DivisionHero
        code={d.code}
        name={d.name}
        tagline={d.tagline}
        description="The engineering side of HCM — the sites we build for clients, the code behind every other division, and hands-on repair for the hardware that runs it all."
        color={d.color}
      />

      <section className="px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-ink-dim)]">
            What we do
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {services.map((s) => (
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
        </div>
      </section>

      <section className="border-t border-[var(--color-line)] px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-ink-dim)]">
            Source
          </h2>
          <a
            href="https://github.com/hcmtech-official/hcm"
            target="_blank"
            rel="noreferrer"
            className="group mt-6 flex items-center justify-between rounded-2xl border border-[var(--color-line)] bg-[var(--color-surface)] p-6 transition-colors hover:border-[var(--color-tech)]"
          >
            <div className="flex items-center gap-4">
              <GithubMark />
              <div>
                <div className="font-display text-lg font-bold">GitHub</div>
                <p className="text-sm text-[var(--color-ink-dim)]">
                  Source for HCM's own sites and tools.
                </p>
              </div>
            </div>
            <ExternalLink
              size={18}
              className="text-[var(--color-ink-dim)] transition-colors group-hover:text-[var(--color-tech)]"
            />
          </a>
        </div>
      </section>

      <section className="border-t border-[var(--color-line)] px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-ink-dim)]">
            Showcase
          </h2>

          <div className="mt-6 space-y-6">
            {showcases.map((s) => (
              <div
                key={s.name}
                className="overflow-hidden rounded-2xl border border-[var(--color-line)] bg-[var(--color-surface)]"
              >
                <div className="p-8 sm:p-10">
                  <div
                    className="inline-block rounded-full border px-3 py-1 font-mono text-[11px] uppercase tracking-[0.2em]"
                    style={{ borderColor: d.color, color: d.color }}
                  >
                    {s.tag}
                  </div>
                  <h3 className="mt-4 font-display text-2xl font-bold sm:text-3xl">
                    {s.name}
                  </h3>
                  <p className="mt-1 text-sm text-[var(--color-ink-dim)]">{s.subtitle}</p>
                  <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[var(--color-ink-dim)] sm:text-base">
                    {s.description}
                  </p>

                  <div className="mt-8 grid gap-4 sm:grid-cols-3">
                    {s.features.map((f) => (
                      <div key={f.title}>
                        <f.icon size={20} style={{ color: d.color }} />
                        <h4 className="mt-3 font-display text-base font-bold">
                          {f.title}
                        </h4>
                        <p className="mt-1 text-sm leading-relaxed text-[var(--color-ink-dim)]">
                          {f.body}
                        </p>
                      </div>
                    ))}
                  </div>

                  <a
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-8 inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-opacity hover:opacity-85"
                    style={{ background: d.color, color: "var(--color-void)" }}
                  >
                    View the project
                    <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-[var(--color-line)] px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-ink-dim)]">
            Projects
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[var(--color-ink-dim)]">
            Small, real automation work — the kind that saves a few minutes
            a day, every day, which adds up to a lot more than it looks
            like at first.
          </p>

          <div className="mt-6 overflow-hidden rounded-2xl border border-[var(--color-line)] bg-[var(--color-surface)]">
            <div className="p-8 sm:p-10">
              <div
                className="inline-block rounded-full border px-3 py-1 font-mono text-[11px] uppercase tracking-[0.2em]"
                style={{ borderColor: d.color, color: d.color }}
              >
                Personal automation · Zapier
              </div>
              <h3 className="mt-4 font-display text-2xl font-bold">
                Work calendar → personal calendar, automatically
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-[var(--color-ink-dim)] sm:text-base">
                The problem: a work calendar invite lands in Outlook, but
                the event that actually matters for planning a personal
                day — picking someone up, being home in time for
                something — needs to be in a personal Google Calendar too.
                Copying it across by hand every time is exactly the kind
                of small, repeated task automation exists for.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-[var(--color-ink-dim)] sm:text-base">
                The fix took one Zap. Forwarding the Outlook calendar email
                to a personal inbox triggers it — Zapier reads the
                forwarded email and creates the matching event directly in
                Google Calendar, with no manual re-entry and no separate
                app to open.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                <div>
                  <div className="font-mono text-[11px] uppercase tracking-[0.15em]" style={{ color: d.color }}>
                    Trigger
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--color-ink-dim)]">
                    A work Outlook calendar email, forwarded to a personal
                    inbox.
                  </p>
                </div>
                <div>
                  <div className="font-mono text-[11px] uppercase tracking-[0.15em]" style={{ color: d.color }}>
                    Action
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--color-ink-dim)]">
                    Zapier reads the email and creates a matching event in
                    Google Calendar.
                  </p>
                </div>
                <div>
                  <div className="font-mono text-[11px] uppercase tracking-[0.15em]" style={{ color: d.color }}>
                    Result
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--color-ink-dim)]">
                    One event, two calendars, zero manual entry — forward
                    and forget.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SpotIt color={d.color} />

      <AppBadges color={d.color} />
    </>
  );
}
