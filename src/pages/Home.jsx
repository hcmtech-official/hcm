import { Link } from "react-router-dom";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { divisions } from "../data/divisions";
import OrbitDiagram from "../components/OrbitDiagram";
import ChatWidget from "../components/ChatWidget";

export default function Home() {
  return (
    <>
      <section className="px-5 pb-16 pt-16 text-center sm:px-8 sm:pt-24">
        <div className="mx-auto max-w-3xl">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-[var(--color-ink-dim)]">
            One brand, one universe
          </p>
          <h1 className="mt-4 font-display text-balance text-5xl font-bold leading-[1.02] sm:text-7xl">
            HCM
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-balance text-lg text-[var(--color-ink-dim)] sm:text-xl">
            Everything we build lives under one name. Pick a world below —
            each one runs its own thing, but they all come from the same
            place.
          </p>
        </div>
      </section>

      <section className="px-5 pb-20 sm:px-8">
        <OrbitDiagram />
      </section>

      <section className="border-t border-[var(--color-line)] px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-mono text-xs uppercase tracking-[0.3em] text-[var(--color-ink-dim)]">
            The HCM Universe
          </h2>
          <p className="mt-2 max-w-lg text-sm text-[var(--color-ink-dim)]">
            One universe, one brand — everything HCM has built so far lives
            here.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {divisions.map((d) => (
              <Link
                key={d.key}
                to={d.path}
                className="group flex flex-col justify-between rounded-2xl border border-[var(--color-line)] bg-[var(--color-surface)] p-6 transition-colors hover:border-[var(--color-core-soft)]"
              >
                <div>
                  <div
                    className="font-mono text-[11px] uppercase tracking-[0.2em]"
                    style={{ color: d.color }}
                  >
                    {d.code}
                  </div>
                  <div className="mt-2 font-display text-xl font-bold">{d.name}</div>
                  <p className="mt-2 text-sm text-[var(--color-ink-dim)]">{d.summary}</p>
                </div>
                <div className="mt-6 flex items-center gap-1 text-sm font-medium" style={{ color: d.color }}>
                  Enter
                  <ArrowUpRight
                    size={16}
                    className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-[var(--color-line)] px-5 py-12 sm:px-8">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 rounded-2xl border border-[var(--color-line)] bg-[var(--color-surface)] p-6 sm:flex-row sm:items-center sm:p-8">
          <div>
            <div
              className="font-mono text-[11px] uppercase tracking-[0.2em]"
              style={{ color: "var(--color-core-soft)" }}
            >
              We're hiring
            </div>
            <h2 className="mt-2 font-display text-xl font-bold sm:text-2xl">
              Would you like to join HCM?
            </h2>
            <p className="mt-1 text-sm text-[var(--color-ink-dim)]">
              AI builds first here — we're looking for people who want to
              build the AI itself.
            </p>
          </div>
          <Link
            to="/careers"
            className="inline-flex shrink-0 items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-opacity hover:opacity-85"
            style={{ background: "var(--color-core)", color: "white" }}
          >
            See open roles
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      <ChatWidget />
    </>
  );
}
