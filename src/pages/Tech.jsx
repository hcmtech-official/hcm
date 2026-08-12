import { ExternalLink, Globe, Wrench, Smartphone } from "lucide-react";
import DivisionHero from "../components/DivisionHero";
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
            Recent work
          </h2>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <a
              href="https://github.com/hcm-tech"
              target="_blank"
              rel="noreferrer"
              className="group flex items-center justify-between rounded-2xl border border-[var(--color-line)] bg-[var(--color-surface)] p-6 transition-colors hover:border-[var(--color-tech)]"
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

            <a
              href="#"
              target="_blank"
              rel="noreferrer"
              className="group flex items-center justify-between rounded-2xl border border-[var(--color-line)] bg-[var(--color-surface)] p-6 transition-colors hover:border-[var(--color-tech)]"
            >
              <div className="flex items-center gap-4">
                <Globe size={26} style={{ color: d.color }} />
                <div>
                  <div className="font-display text-lg font-bold">Cake Creation</div>
                  <p className="text-sm text-[var(--color-ink-dim)]">
                    Our latest build — a full storefront rebuild for a cake &amp;
                    grazing business.
                  </p>
                </div>
              </div>
              <ExternalLink
                size={18}
                className="text-[var(--color-ink-dim)] transition-colors group-hover:text-[var(--color-tech)]"
              />
            </a>
          </div>
          <p className="mt-4 font-mono text-[11px] text-[var(--color-ink-dim)]">
            Swap the GitHub org and Cake Creation URLs in{" "}
            <code>src/pages/Tech.jsx</code> once both are live.
          </p>
        </div>
      </section>
    </>
  );
}
