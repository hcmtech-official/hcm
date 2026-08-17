import { useMemo } from "react";
import {
  ComposedChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine,
} from "recharts";
import { TrendingUp, TrendingDown, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { divisions } from "../data/divisions";

const d = divisions.find((x) => x.key === "markets");

const PAIR = { from: "GBP", to: "USD" };

// Real GBP/USD daily data — Alpha Vantage FX_DAILY, pulled 2026-08-17.
const RAW = [
  ["2026-06-22", 1.31920, 1.32730, 1.31760, 1.32470],
  ["2026-06-23", 1.32560, 1.32600, 1.31790, 1.32030],
  ["2026-06-24", 1.31960, 1.32090, 1.31370, 1.31650],
  ["2026-06-25", 1.31650, 1.32190, 1.31450, 1.31910],
  ["2026-06-26", 1.31880, 1.32310, 1.31770, 1.32010],
  ["2026-06-29", 1.32000, 1.32620, 1.31820, 1.32560],
  ["2026-06-30", 1.32550, 1.32760, 1.32090, 1.32600],
  ["2026-07-01", 1.32570, 1.32920, 1.32160, 1.32710],
  ["2026-07-02", 1.32730, 1.33840, 1.32540, 1.33460],
  ["2026-07-03", 1.33460, 1.33810, 1.33280, 1.33510],
  ["2026-07-06", 1.33510, 1.33970, 1.33250, 1.33900],
  ["2026-07-07", 1.33880, 1.34010, 1.33460, 1.33520],
  ["2026-07-08", 1.33510, 1.34100, 1.33190, 1.33860],
  ["2026-07-09", 1.33860, 1.34300, 1.33740, 1.34050],
  ["2026-07-10", 1.34070, 1.34510, 1.33890, 1.34050],
  ["2026-07-13", 1.33880, 1.34110, 1.33390, 1.33460],
  ["2026-07-14", 1.33460, 1.34420, 1.33390, 1.33890],
  ["2026-07-15", 1.33800, 1.35570, 1.33710, 1.35390],
  ["2026-07-16", 1.35390, 1.35440, 1.34570, 1.34760],
  ["2026-07-17", 1.34760, 1.34800, 1.34230, 1.34530],
  ["2026-07-20", 1.34390, 1.34810, 1.34100, 1.34280],
  ["2026-07-21", 1.34290, 1.34550, 1.33570, 1.33710],
  ["2026-07-22", 1.33720, 1.33950, 1.33520, 1.33710],
  ["2026-07-23", 1.33750, 1.33930, 1.32960, 1.33130],
  ["2026-07-24", 1.33070, 1.33480, 1.32990, 1.33190],
  ["2026-07-27", 1.33160, 1.33630, 1.32810, 1.32870],
  ["2026-07-28", 1.32870, 1.33110, 1.32700, 1.32850],
  ["2026-07-29", 1.32950, 1.33870, 1.32750, 1.33690],
  ["2026-07-30", 1.33690, 1.34760, 1.33290, 1.34640],
  ["2026-07-31", 1.34640, 1.34930, 1.33970, 1.34800],
  ["2026-08-03", 1.34770, 1.35060, 1.34140, 1.34280],
  ["2026-08-04", 1.34260, 1.34550, 1.34150, 1.34480],
  ["2026-08-05", 1.34490, 1.34850, 1.34320, 1.34660],
  ["2026-08-06", 1.34640, 1.34790, 1.34450, 1.34530],
  ["2026-08-07", 1.34510, 1.35080, 1.34310, 1.34880],
  ["2026-08-10", 1.34790, 1.35300, 1.34720, 1.35030],
  ["2026-08-11", 1.35070, 1.35150, 1.34890, 1.35040],
  ["2026-08-12", 1.35040, 1.35410, 1.34840, 1.34920],
  ["2026-08-13", 1.34920, 1.35120, 1.34710, 1.34850],
  ["2026-08-14", 1.34840, 1.35610, 1.34800, 1.35300],
];

const CANDLES = RAW.map(([date, open, high, low, close]) => ({
  date: date.slice(5),
  fullDate: date,
  open,
  high,
  low,
  close,
  range: [low, high],
  up: close >= open,
}));

const PALETTE = {
  bg: "#0B0F0E",
  panel: "#101614",
  grid: "#1C2624",
  textDim: "#5C7A70",
  text: "#DCEFE7",
  up: "#3DDC97",
  down: "#E85D4C",
};

function Candle(props) {
  const { x, y, width, height, payload } = props;
  const { open, high, low, close, up } = payload;
  if (high === low) return null;
  const pxPerUnit = height / (high - low);
  const bodyTopVal = Math.max(open, close);
  const bodyBottomVal = Math.min(open, close);
  const bodyTop = y + (high - bodyTopVal) * pxPerUnit;
  const bodyBottom = y + (high - bodyBottomVal) * pxPerUnit;
  const bodyHeight = Math.max(bodyBottom - bodyTop, 1.5);
  const color = up ? PALETTE.up : PALETTE.down;
  const cx = x + width / 2;
  const bodyWidth = Math.max(width * 0.6, 3);

  return (
    <g>
      <line x1={cx} x2={cx} y1={y} y2={y + height} stroke={color} strokeWidth={1} />
      <rect
        x={cx - bodyWidth / 2}
        y={bodyTop}
        width={bodyWidth}
        height={bodyHeight}
        fill={color}
        fillOpacity={up ? 0.25 : 1}
        stroke={color}
        strokeWidth={1}
      />
    </g>
  );
}

function CandleTooltip({ active, payload, label }) {
  if (!active || !payload || !payload.length) return null;
  const dd = payload[0].payload;
  return (
    <div
      style={{
        background: "#050807",
        border: `1px solid ${PALETTE.grid}`,
        borderRadius: 3,
        padding: "8px 10px",
        fontSize: 11,
        fontFamily: "'IBM Plex Mono', monospace",
      }}
    >
      <div style={{ color: PALETTE.textDim, marginBottom: 6, fontSize: 10 }}>{dd.fullDate}</div>
      <div style={{ display: "grid", gridTemplateColumns: "16px auto", gap: "2px 10px", color: PALETTE.text }}>
        <span>O</span><span>{dd.open.toFixed(5)}</span>
        <span>H</span><span>{dd.high.toFixed(5)}</span>
        <span>L</span><span>{dd.low.toFixed(5)}</span>
        <span>C</span><span>{dd.close.toFixed(5)}</span>
      </div>
    </div>
  );
}

export default function MarketsFxSample() {
  const first = CANDLES[0];
  const last = CANDLES[CANDLES.length - 1];
  const change = last.close - first.open;
  const changePct = (change / first.open) * 100;
  const up = change >= 0;

  const { resistance, support, resistanceDate, supportDate } = useMemo(() => {
    let hi = -Infinity, lo = Infinity, hiDate = "", loDate = "";
    for (const c of CANDLES) {
      if (c.high > hi) { hi = c.high; hiDate = c.date; }
      if (c.low < lo) { lo = c.low; loDate = c.date; }
    }
    return { resistance: hi, support: lo, resistanceDate: hiDate, supportDate: loDate };
  }, []);

  const yMin = support - 0.0018;
  const yMax = resistance + 0.0018;

  return (
    <>
      <section className="px-5 pt-10 sm:px-8">
        <div className="mx-auto max-w-5xl">
          <Link
            to="/markets"
            className="inline-flex items-center gap-1.5 font-mono text-xs text-[var(--color-ink-dim)] hover:underline"
          >
            <ArrowLeft size={14} /> Back to HCM Markets
          </Link>
          <div
            className="mt-4 inline-block rounded-full border px-3 py-1 font-mono text-[11px] uppercase tracking-[0.2em]"
            style={{ borderColor: d.color, color: d.color }}
          >
            Live sample project
          </div>
          <h1 className="mt-4 font-display text-3xl font-bold sm:text-4xl">FX price-action terminal</h1>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[var(--color-ink-dim)] sm:text-base">
            A working demo of what an HCM data terminal looks like end to end — real market data, an actual
            candlestick chart, and automatically detected support and resistance. Built on live GBP/USD
            data pulled from Alpha Vantage.
          </p>
        </div>
      </section>

      <section className="px-5 py-10 sm:px-8">
        <div className="mx-auto max-w-5xl">
          <div
            style={{
              background: PALETTE.bg,
              color: PALETTE.text,
              fontFamily: "'IBM Plex Mono', ui-monospace, monospace",
              borderRadius: 16,
              border: `1px solid ${PALETTE.grid}`,
              padding: "20px 16px",
            }}
          >
            <header style={{ marginBottom: 14 }}>
              <div style={{ fontSize: 22, fontWeight: 700, letterSpacing: "0.02em" }}>
                {PAIR.from}/{PAIR.to}
              </div>
              <div style={{ fontSize: 10, color: PALETTE.textDim, letterSpacing: "0.05em", marginTop: 2 }}>
                Daily candles · Alpha Vantage · 40 sessions
              </div>
            </header>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-end",
                marginBottom: 16,
                flexWrap: "wrap",
                gap: 12,
              }}
            >
              <div
                style={{
                  fontSize: 30,
                  fontWeight: 700,
                  display: "flex",
                  alignItems: "baseline",
                  gap: 12,
                  flexWrap: "wrap",
                }}
              >
                {last.close.toFixed(5)}
                <span
                  style={{
                    fontSize: 13,
                    display: "flex",
                    alignItems: "center",
                    gap: 4,
                    fontWeight: 500,
                    color: up ? PALETTE.up : PALETTE.down,
                  }}
                >
                  {up ? <TrendingUp size={16} /> : <TrendingDown size={16} />}
                  {Math.abs(change).toFixed(5)} ({changePct.toFixed(2)}%)
                </span>
              </div>
              <div style={{ display: "flex", gap: 18 }}>
                <div>
                  <span style={{ display: "block", fontSize: 9, color: PALETTE.textDim, letterSpacing: "0.1em" }}>
                    RESISTANCE
                  </span>
                  <span style={{ display: "block", fontSize: 14, marginTop: 2, color: PALETTE.down }}>
                    {resistance.toFixed(5)}
                  </span>
                </div>
                <div>
                  <span style={{ display: "block", fontSize: 9, color: PALETTE.textDim, letterSpacing: "0.1em" }}>
                    SUPPORT
                  </span>
                  <span style={{ display: "block", fontSize: 14, marginTop: 2, color: PALETTE.up }}>
                    {support.toFixed(5)}
                  </span>
                </div>
              </div>
            </div>

            <div style={{ background: PALETTE.panel, border: `1px solid ${PALETTE.grid}`, borderRadius: 4, padding: "12px 8px" }}>
              <ResponsiveContainer width="100%" height={340}>
                <ComposedChart data={CANDLES} margin={{ top: 14, right: 10, left: 0, bottom: 0 }}>
                  <CartesianGrid stroke={PALETTE.grid} strokeDasharray="0" vertical={false} />
                  <XAxis
                    dataKey="date"
                    tick={{ fill: PALETTE.textDim, fontSize: 10, fontFamily: "monospace" }}
                    axisLine={{ stroke: PALETTE.grid }}
                    tickLine={false}
                    interval="preserveStartEnd"
                    minTickGap={36}
                  />
                  <YAxis
                    domain={[yMin, yMax]}
                    tick={{ fill: PALETTE.textDim, fontSize: 10, fontFamily: "monospace" }}
                    axisLine={false}
                    tickLine={false}
                    width={58}
                    tickFormatter={(v) => v.toFixed(4)}
                  />
                  <Tooltip content={<CandleTooltip />} cursor={{ fill: "rgba(91,87,255,0.06)" }} />
                  <Bar dataKey="range" shape={<Candle />} isAnimationActive={false} />
                  <ReferenceLine
                    y={resistance}
                    stroke={PALETTE.down}
                    strokeDasharray="4 3"
                    strokeOpacity={0.85}
                    label={{ value: `RESISTANCE ${resistance.toFixed(4)}`, position: "insideTopLeft", fill: PALETTE.down, fontSize: 9 }}
                  />
                  <ReferenceLine
                    y={support}
                    stroke={PALETTE.up}
                    strokeDasharray="4 3"
                    strokeOpacity={0.85}
                    label={{ value: `SUPPORT ${support.toFixed(4)}`, position: "insideBottomLeft", fill: PALETTE.up, fontSize: 9 }}
                  />
                </ComposedChart>
              </ResponsiveContainer>
            </div>

            <div style={{ display: "flex", gap: 10, marginTop: 12, flexWrap: "wrap" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, background: PALETTE.panel, border: `1px solid ${PALETTE.grid}`, borderRadius: 4, padding: "8px 12px", flex: "1 1 140px" }}>
                <span style={{ width: 8, height: 8, borderRadius: "50%", background: PALETTE.down, flexShrink: 0 }} />
                <div>
                  <div style={{ fontSize: 11, color: PALETTE.text }}>Major resistance</div>
                  <div style={{ fontSize: 10, color: PALETTE.textDim, marginTop: 2 }}>
                    {resistance.toFixed(5)} · set {resistanceDate}
                  </div>
                </div>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 8, background: PALETTE.panel, border: `1px solid ${PALETTE.grid}`, borderRadius: 4, padding: "8px 12px", flex: "1 1 140px" }}>
                <span style={{ width: 8, height: 8, borderRadius: "50%", background: PALETTE.up, flexShrink: 0 }} />
                <div>
                  <div style={{ fontSize: 11, color: PALETTE.text }}>Major support</div>
                  <div style={{ fontSize: 10, color: PALETTE.textDim, marginTop: 2 }}>
                    {support.toFixed(5)} · set {supportDate}
                  </div>
                </div>
              </div>
            </div>

            <div style={{ display: "flex", justifyContent: "space-between", marginTop: 14, fontSize: 9, color: PALETTE.textDim, letterSpacing: "0.08em" }}>
              <span>DATA: ALPHA VANTAGE (FX_DAILY)</span>
              <span>LAST CANDLE {last.fullDate}</span>
            </div>
          </div>

          <p className="mt-6 font-mono text-[11px] text-[var(--color-ink-dim)]">
            Sample data snapshot, not a live feed — general market information for a general audience,
            not trading or financial advice.
          </p>
        </div>
      </section>
      <div className="pb-16" />
    </>
  );
}
