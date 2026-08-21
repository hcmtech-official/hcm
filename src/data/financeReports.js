// HCM Finance — daily annual report training ground.
// Add a new day by appending one entry to `reports`, keyed by market + date.
// Markets rotate: us -> korea -> singapore -> australia -> india -> china -> us ...

export const markets = [
  { key: "us", name: "United States", flag: "🇺🇸" },
  { key: "korea", name: "South Korea", flag: "🇰🇷" },
  { key: "singapore", name: "Singapore", flag: "🇸🇬" },
  { key: "australia", name: "Australia", flag: "🇦🇺" },
  { key: "india", name: "India", flag: "🇮🇳" },
  { key: "china", name: "China", flag: "🇨🇳" },
];

export const reports = [
  {
    date: "2026-08-21",
    market: "us",
    ticker: "AAPL",
    company: "Apple Inc.",
    exchange: "NASDAQ",
    fiscalYear: "FY2025, year ended September 30, 2025",
    stats: [
      { label: "Full-year revenue", value: "≈ $416B" },
      { label: "Full-year net income", value: "≈ $112B" },
      { label: "Latest quarter revenue", value: "$143.8B (record)" },
      { label: "Latest quarter net income", value: "$42.1B (record)" },
      { label: "Gross margin", value: "48.2%" },
      { label: "Operating cash flow (qtr)", value: "$53.9B (record)" },
    ],
    summary:
      "Apple closed its fiscal year with revenue around $416 billion and net income near $112 billion, then opened the new fiscal year with its strongest quarter yet — revenue up 16% year over year, led by a 23% jump in iPhone sales and a fresh high in Services. Gross margin expanded, and operating cash flow hit a new record, meaning the business is converting sales into usable cash at a faster rate than a year ago.",
    ownership:
      "No single person or founder controls Apple. Roughly two-thirds of shares sit with institutional investors — Vanguard and BlackRock are the two largest, each holding high-single-digit percentages, followed by State Street, Fidelity, and Berkshire Hathaway. Company insiders, including CEO Tim Cook, hold a small fraction of a percent combined. There is only one class of stock, so no founder or executive carries outsized voting power the way some tech companies structure things — governance runs through an independent board rather than a controlling shareholder.",
    traderRead:
      "A trader reading this looks past the headline revenue number and checks where the growth is coming from. Here, iPhone — still over half of total revenue — grew fastest, which is unusual this late in a product's life and worth asking why (new model cycle, pricing, or a weak prior-year comparison). Services grew more slowly in percentage terms but carries a much higher margin, so it does more work per dollar for profit. Gross margin ticking up and cash flow hitting a record both suggest efficiency gains, not just bigger sales — that combination is generally read as a stronger quarter than the revenue number alone implies. The buyback program is steadily shrinking the share count, which lifts EPS even in a flat-earnings year, so it's worth separating real earnings growth from the boost that comes purely from fewer shares outstanding.",
    healthSignals: [
      "Revenue growth broad-based across product line and geography, not one region carrying it",
      "Margin expanding alongside revenue growth, not shrinking",
      "Cash flow growing faster than or in line with net income — a sign earnings are real, not accounting timing",
      "Ownership spread across many large institutions with no single controlling holder",
      "Watch: iPhone concentration and exposure to Greater China remain the two biggest single risks to the growth story",
    ],
  },
];
