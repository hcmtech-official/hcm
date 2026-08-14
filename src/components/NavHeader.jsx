import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { divisions } from "../data/divisions";

export default function NavHeader({ accent = "var(--color-core)" }) {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-line)] bg-[var(--color-void)]/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
        <Link to="/" className="group flex items-center gap-2" onClick={() => setOpen(false)}>
          <img src="./logo-icon.svg" alt="" width="28" height="28" className="rounded-[7px]" />
          <span
            className="font-display text-2xl font-bold tracking-tight transition-colors"
            style={{ color: pathname === "/" ? accent : "var(--color-ink)" }}
          >
            HCM
          </span>
          <span className="hidden font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--color-ink-dim)] sm:inline">
            / one brand, one universe
          </span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {divisions.map((d) => (
            <Link
              key={d.key}
              to={d.path}
              className="font-mono text-xs uppercase tracking-[0.15em] text-[var(--color-ink-dim)] transition-colors hover:text-[var(--color-ink)]"
              style={pathname === d.path ? { color: d.color } : undefined}
            >
              {d.code}
            </Link>
          ))}
        </nav>

        <button
          className="text-[var(--color-ink)] md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-[var(--color-line)] px-5 py-4 md:hidden">
          <ul className="flex flex-col gap-4">
            {divisions.map((d) => (
              <li key={d.key}>
                <Link
                  to={d.path}
                  onClick={() => setOpen(false)}
                  className="font-mono text-sm uppercase tracking-[0.15em]"
                  style={{ color: pathname === d.path ? d.color : "var(--color-ink-dim)" }}
                >
                  {d.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
