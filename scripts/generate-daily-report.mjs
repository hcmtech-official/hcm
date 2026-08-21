#!/usr/bin/env node
// Runs daily via .github/workflows/finance-daily.yml
// 1. Picks the next market + ticker in rotation (scripts/rotation-state.json)
// 2. Asks Claude (with web search) to research that company's latest annual/
//    quarterly report and produce one JSON entry matching the site's schema
// 3. Validates the JSON, appends it to src/data/finance-reports.json
// 4. Advances and saves rotation state
//
// Requires env var ANTHROPIC_API_KEY. Exits non-zero on any failure so the
// Action fails loudly instead of publishing bad data.

import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");

const WATCHLIST_PATH = path.join(__dirname, "watchlist.json");
const STATE_PATH = path.join(__dirname, "rotation-state.json");
const REPORTS_PATH = path.join(ROOT, "src/data/finance-reports.json");

const MARKET_NAMES = {
  us: "United States",
  korea: "South Korea",
  singapore: "Singapore",
  australia: "Australia",
  india: "India",
  china: "China",
};

async function readJson(p) {
  return JSON.parse(await fs.readFile(p, "utf8"));
}

async function writeJson(p, data) {
  await fs.writeFile(p, JSON.stringify(data, null, 2) + "\n", "utf8");
}

function todayIso() {
  return new Date().toISOString().slice(0, 10);
}

const SCHEMA_INSTRUCTIONS = `Return ONLY a single JSON object (no markdown fences, no prose before or after) with exactly these fields:

{
  "market": "<market key given to you>",
  "ticker": "<exchange ticker/code>",
  "company": "<full company name>",
  "exchange": "<exchange name, e.g. NASDAQ, KRX, HKEX, NSE/BSE, ASX>",
  "fiscalYear": "<e.g. 'FY2025, year ended December 31, 2025'>",
  "sourceUrl": "<direct URL to the company's actual official investor-relations press release or results PDF for their latest results — must be a real URL you found via search, not invented>",
  "sourceLabel": "<short label for that source, e.g. 'Apple Newsroom — Q1 FY2026 results release'>",
  "stats": [ { "label": "...", "value": "..." } ] (exactly 5-6 entries — key headline figures with real numbers),
  "summary": "<3-5 sentence plain-English summary of the results, your own words>",
  "ownership": "<3-5 sentence description of who owns/controls the company — major shareholders, founder stake, insider/institutional split, governance structure>",
  "traderRead": "<4-6 sentence 'how a trader reads this' analysis — what to look past the headline number for, what's a real vs cosmetic signal>",
  "healthSignals": ["<4-5 short bullet points, plain checklist style, at least one prefixed 'Watch:' flagging a risk>"],
  "releaseExcerpt": {
    "context": "<e.g. 'From the CEO's comments in the release'>",
    "paraphrase": "<2-3 sentence PARAPHRASE (your own words, not a direct quote) of what a specific executive said in the release>",
    "lesson": "<1-2 sentence lesson for a beginner investor on how to read that kind of statement critically>"
  },
  "readingGuide": [
    { "title": "<short step title>", "content": "<2-3 sentence explanation teaching how to read that part of THIS company's specific release format>" }
  ] (exactly 4 entries)
}

Hard rules:
- Every number in "stats", "summary", "ownership" must come from real search results you retrieved — never invent figures.
- "sourceUrl" must be a real URL from your search results, ideally the company's own investor relations / newsroom page or an official results PDF/8-K filing.
- COPYRIGHT: never reproduce more than a short phrase verbatim from any source. "releaseExcerpt.paraphrase" must be entirely reworded, never copied wording.
- Write for a beginner investor building a daily reading habit — plain English, no unexplained jargon.
- Match the tone of a direct, no-fluff financial educator, not a press release.`;

async function callClaude(market, ticker) {
  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) throw new Error("ANTHROPIC_API_KEY is not set");

  const userPrompt = `Research the most recent annual or quarterly results release for this company and produce today's HCM Finance training-ground entry.

Market: ${market} (${MARKET_NAMES[market]})
Company to cover: ${ticker}

Search the web to find their latest official results release (investor relations page, newsroom, or regulatory filing) and base every figure on what you find there.

${SCHEMA_INSTRUCTIONS}`;

  const res = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "x-api-key": apiKey,
      "anthropic-version": "2023-06-01",
    },
    body: JSON.stringify({
      model: "claude-sonnet-4-6",
      max_tokens: 4000,
      tools: [{ type: "web_search_20250305", name: "web_search" }],
      messages: [{ role: "user", content: userPrompt }],
    }),
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Anthropic API error ${res.status}: ${text.slice(0, 500)}`);
  }

  const data = await res.json();
  const textBlocks = (data.content || [])
    .filter((b) => b.type === "text")
    .map((b) => b.text)
    .join("\n");

  const cleaned = textBlocks
    .replace(/```json/gi, "")
    .replace(/```/g, "")
    .trim();

  const jsonMatch = cleaned.match(/\{[\s\S]*\}/);
  if (!jsonMatch) {
    throw new Error("No JSON object found in model response:\n" + cleaned.slice(0, 1000));
  }

  return JSON.parse(jsonMatch[0]);
}

function validateEntry(entry) {
  const required = [
    "market", "ticker", "company", "exchange", "fiscalYear",
    "sourceUrl", "sourceLabel", "stats", "summary", "ownership",
    "traderRead", "healthSignals", "releaseExcerpt", "readingGuide",
  ];
  for (const key of required) {
    if (entry[key] === undefined || entry[key] === null || entry[key] === "") {
      throw new Error(`Generated entry is missing required field: ${key}`);
    }
  }
  if (!Array.isArray(entry.stats) || entry.stats.length < 4) {
    throw new Error("stats must be an array of at least 4 items");
  }
  if (!Array.isArray(entry.healthSignals) || entry.healthSignals.length < 3) {
    throw new Error("healthSignals must be an array of at least 3 items");
  }
  if (!Array.isArray(entry.readingGuide) || entry.readingGuide.length < 3) {
    throw new Error("readingGuide must be an array of at least 3 items");
  }
  if (!entry.releaseExcerpt.context || !entry.releaseExcerpt.paraphrase || !entry.releaseExcerpt.lesson) {
    throw new Error("releaseExcerpt is incomplete");
  }
  if (!/^https?:\/\//.test(entry.sourceUrl)) {
    throw new Error("sourceUrl is not a valid URL: " + entry.sourceUrl);
  }
}

async function main() {
  const watchlist = await readJson(WATCHLIST_PATH);
  const state = await readJson(STATE_PATH);
  const reports = await readJson(REPORTS_PATH);

  const market = state.marketOrder[state.marketIndex % state.marketOrder.length];
  const list = watchlist[market];
  const tickerIdx = state.tickerIndexByMarket[market] % list.length;
  const ticker = list[tickerIdx];

  console.log(`Today: market="${market}" pick="${ticker}"`);

  const entry = await callClaude(market, ticker);
  entry.market = market; // enforce, don't trust the model
  entry.date = todayIso();

  validateEntry(entry);

  reports.push(entry);
  await writeJson(REPORTS_PATH, reports);

  state.marketIndex = (state.marketIndex + 1) % state.marketOrder.length;
  state.tickerIndexByMarket[market] = (tickerIdx + 1) % list.length;
  await writeJson(STATE_PATH, state);

  console.log(`Added report for ${entry.company} (${entry.ticker}) in ${market}. Reports total: ${reports.length}`);
}

main().catch((err) => {
  console.error("generate-daily-report failed:", err);
  process.exit(1);
});
