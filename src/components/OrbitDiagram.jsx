import { useState } from "react";
import { Link } from "react-router-dom";
import { divisions } from "../data/divisions";

// Six divisions placed evenly around a central HCM core. Pure SVG,
// no animation libraries required — a CSS transition handles the
// draw-in and the hover states.
export default function OrbitDiagram() {
  const [active, setActive] = useState(null);
  const size = 640;
  const center = size / 2;
  const radius = 240;

  const points = divisions.map((d, i) => {
    const angle = (i / divisions.length) * Math.PI * 2 - Math.PI / 2;
    return {
      ...d,
      x: center + radius * Math.cos(angle),
      y: center + radius * Math.sin(angle),
    };
  });

  return (
    <div className="relative mx-auto w-full max-w-2xl">
      <svg
        viewBox={`0 0 ${size} ${size}`}
        className="h-auto w-full"
        role="img"
        aria-label="HCM at the center, connected to its six divisions"
      >
        {points.map((p) => (
          <line
            key={`line-${p.key}`}
            x1={center}
            y1={center}
            x2={p.x}
            y2={p.y}
            stroke={active === null || active === p.key ? p.color : "var(--color-line)"}
            strokeWidth={active === p.key ? 2 : 1}
            opacity={active === null || active === p.key ? 0.8 : 0.25}
            style={{ transition: "opacity 200ms, stroke-width 200ms" }}
          />
        ))}

        <circle cx={center} cy={center} r={54} fill="var(--color-void-soft)" stroke="var(--color-core)" strokeWidth="1.5" />
        <text
          x={center}
          y={center + 8}
          textAnchor="middle"
          className="font-display"
          style={{ fill: "var(--color-ink)", fontSize: 30, fontWeight: 700 }}
        >
          HCM
        </text>

        {points.map((p) => (
          <g
            key={p.key}
            onMouseEnter={() => setActive(p.key)}
            onMouseLeave={() => setActive(null)}
            style={{ cursor: "pointer" }}
          >
            <Link to={p.path} aria-label={p.name}>
              <circle
                cx={p.x}
                cy={p.y}
                r={active === p.key ? 30 : 26}
                fill="var(--color-surface)"
                stroke={p.color}
                strokeWidth={active === p.key ? 2.5 : 1.5}
                style={{ transition: "r 150ms, stroke-width 150ms" }}
              />
              <text
                x={p.x}
                y={p.y + 4}
                textAnchor="middle"
                className="font-mono"
                style={{ fill: p.color, fontSize: 10, fontWeight: 600, letterSpacing: 0.5 }}
              >
                {p.code}
              </text>
            </Link>
          </g>
        ))}
      </svg>

      {/* accessible fallback list for keyboard / screen-reader users */}
      <ul className="sr-only">
        {divisions.map((d) => (
          <li key={d.key}>
            <Link to={d.path}>{d.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
