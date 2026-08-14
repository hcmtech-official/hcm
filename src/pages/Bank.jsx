import { Vault, Eye, Tag, ShieldCheck, AlertTriangle, KeyRound } from "lucide-react";
import DivisionHero from "../components/DivisionHero";
import AppBadges from "../components/AppBadges";
import { divisions } from "../data/divisions";

const d = divisions.find((x) => x.key === "bank");

const steps = [
  {
    icon: Eye,
    title: "See what's there",
    body: "Before anything else — a clear view of what data of yours actually exists on the platform. No selling decision until you can see what you'd be selling.",
  },
  {
    icon: Tag,
    title: "Set a price, or don't",
    body: "Nothing is sold by default. If you choose to make something available, you set the price — the same piece of data can simply stay private instead.",
  },
  {
    icon: KeyRound,
    title: "Companies request access",
    body: "A business that wants your data has to make an offer for it, not just take it. You see who's asking and what they're offering before anything changes hands.",
  },
  {
    icon: ShieldCheck,
    title: "You approve, every time",
    body: "No standing permission that quietly stays on. Each sale is a specific, revocable yes — closer to authorizing a transaction than agreeing to a terms-of-service page.",
  },
];

export default function Bank() {
  return (
    <>
      <DivisionHero
        code={d.code}
        name={d.name}
        tagline={d.tagline}
        description="A bank, but not about money — somewhere to deposit your data instead of losing track of it, see exactly what's held, and decide for yourself whether anyone gets to buy access to it."
        color={d.color}
      />

      <section className="px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-3xl rounded-2xl border border-[var(--color-line)] bg-[var(--color-surface)] p-8 sm:p-10">
          <AlertTriangle size={22} style={{ color: d.color }} />
          <h2 className="mt-4 font-display text-xl font-bold sm:text-2xl">
            The problem
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-[var(--color-ink-dim)] sm:text-base">
            Data breaches happen constantly, and the person the data
            actually belongs to is usually the last to know — if they
            ever find out at all. There's no equivalent of a bank
            statement for your own information: no record of what's held,
            who's touched it, or where it went. HCM Bank starts from a
            simple idea — data should have the same custody and consent
            expectations money does.
          </p>
        </div>
      </section>

      <section className="border-t border-[var(--color-line)] px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="mb-2 flex items-center gap-3">
            <Vault size={22} style={{ color: d.color }} />
            <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-ink-dim)]">
              How it works
            </h2>
          </div>
          <p className="mb-6 max-w-2xl text-sm leading-relaxed text-[var(--color-ink-dim)]">
            Four steps, in order — nothing happens without you seeing it
            and saying yes first.
          </p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s) => (
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
        <div className="mx-auto max-w-3xl">
          <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-ink-dim)]">
            Not a new idea, on purpose
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-[var(--color-ink-dim)] sm:text-base">
            Data unions and personal data marketplaces have been tried
            before — the model isn't new. What HCM Bank is really
            proposing is calling it what it functionally is: a bank.
            Deposits held in custody, statements you can actually read,
            and withdrawals — in this case, access — that need your
            authorization every time, not once in a terms-of-service
            page nobody reads.
          </p>
          <p className="mt-6 font-mono text-[11px] text-[var(--color-ink-dim)]">
            Concept stage — no platform exists yet. Something handling
            real personal data at this scale would need serious security
            engineering and regulatory compliance (GDPR, CCPA, and
            equivalents) built in from day one, not bolted on after.
          </p>
        </div>
      </section>
      <AppBadges color={d.color} />
    </>
  );
}
