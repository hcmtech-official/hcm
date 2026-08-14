import { Vault, Eye, Tag, ShieldCheck, AlertTriangle, KeyRound, Hash, Quote } from "lucide-react";
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
        <div className="mx-auto max-w-3xl rounded-2xl border border-[var(--color-line)] bg-[var(--color-surface)] p-8 sm:p-10">
          <Quote size={22} style={{ color: d.color }} />
          <h2 className="mt-4 font-display text-xl font-bold sm:text-2xl">
            Where this comes from
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-[var(--color-ink-dim)] sm:text-base">
            Picture an ordinary doctor's appointment. Partway through, the
            practitioner asks, almost in passing: "Do you mind if I use an
            AI tool to transcribe this?" — followed by, "Your data will be
            stored in Australia, that's fine, right?" There's no real
            pause to think it over. The professional is already reaching
            for the recorder, the appointment is moving on, and you're
            already in a vulnerable position just by being the patient in
            the room. Technically, consent was given. But nobody was
            actually handed a real choice — what data, stored where,
            controlled by whom — only a few seconds to agree while
            something else was already in motion.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-[var(--color-ink-dim)] sm:text-base">
            That's the exact situation HCM Bank is built to prevent. The
            practitioner shouldn't be the one asking a rushed yes-or-no
            question mid-appointment. The AI service should have to come
            to the patient first — request access against their own
            personal ID, the way a transaction requests authorization from
            a wallet address — and the patient should see exactly what
            would be collected and where it would go before anything is
            recorded, not while it's already happening.
          </p>
        </div>
      </section>

      <section className="border-t border-[var(--color-line)] px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="mb-2 flex items-center gap-3">
            <Hash size={22} style={{ color: d.color }} />
            <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-ink-dim)]">
              The token model
            </h2>
          </div>
          <p className="max-w-2xl text-sm leading-relaxed text-[var(--color-ink-dim)] sm:text-base">
            Every HCM Bank account gets its own personal ID — a hash,
            similar in spirit to a cryptocurrency wallet address. It
            doesn't reveal anything on its own. It's simply what any
            outside service — a clinic's transcription tool, an app, a
            company — has to present a request against before it can
            collect or store anything. The request itself shows exactly
            what's being asked for and why, in advance, so the decision
            happens before data collection starts — not as a rushed
            verbal yes squeezed into the middle of it.
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
