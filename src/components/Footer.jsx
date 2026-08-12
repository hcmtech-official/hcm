import { Link } from "react-router-dom";
import { divisions, socials } from "../data/divisions";

// lightweight inline marks so we're not pulling brand logo packs
function XMark(props) {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" {...props}>
      <path d="M18.9 2H22l-7.6 8.7L23.3 22h-6.9l-5.4-6.6L4.8 22H1.7l8.1-9.3L1 2h7.1l4.9 6.1L18.9 2Zm-1.2 18h1.9L7.4 4H5.4l12.3 16Z" />
    </svg>
  );
}
function TikTokMark(props) {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" {...props}>
      <path d="M16.6 2h-3.2v13.7a2.9 2.9 0 1 1-2.9-3c.2 0 .5 0 .7.1v-3.3a6.2 6.2 0 1 0 5.4 6.2V8.6a7.5 7.5 0 0 0 4.4 1.4V6.8a4.3 4.3 0 0 1-4.4-4.3Z" />
    </svg>
  );
}
function YouTubeMark(props) {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" {...props}>
      <path d="M23.5 6.7a3 3 0 0 0-2.1-2.1C19.5 4 12 4 12 4s-7.5 0-9.4.6A3 3 0 0 0 .5 6.7 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.3 3 3 0 0 0 2.1 2.1C4.5 20 12 20 12 20s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.3ZM9.6 15.5V8.5L15.8 12l-6.2 3.5Z" />
    </svg>
  );
}

const iconFor = { X: XMark, TikTok: TikTokMark, YouTube: YouTubeMark };

export default function Footer() {
  return (
    <footer className="border-t border-[var(--color-line)]">
      <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8">
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="font-display text-xl font-bold">HCM</div>
            <p className="mt-2 max-w-xs text-sm text-[var(--color-ink-dim)]">
              One brand. Six worlds — tech, AI, travel, games, music and motion
              pictures, built by the same hands.
            </p>
          </div>

          <div>
            <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--color-ink-dim)]">
              Divisions
            </div>
            <ul className="mt-3 space-y-2">
              {divisions.map((d) => (
                <li key={d.key}>
                  <Link
                    to={d.path}
                    className="text-sm text-[var(--color-ink)] transition-colors hover:opacity-70"
                  >
                    {d.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--color-ink-dim)]">
              Follow
            </div>
            <ul className="mt-3 space-y-3">
              {socials.map((s) => {
                const Icon = iconFor[s.name];
                return (
                  <li key={s.name}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 text-sm text-[var(--color-ink)] transition-colors hover:text-[var(--color-core-soft)]"
                    >
                      <Icon />
                      {s.name}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-[var(--color-line)] pt-6 font-mono text-[11px] text-[var(--color-ink-dim)] sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} HCM. All divisions, one build.</span>
          <span>Built on React + Vite + Tailwind — swap this text anywhere in /src/pages.</span>
        </div>
      </div>
    </footer>
  );
}
