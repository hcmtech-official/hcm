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
  {
    date: "2026-08-21",
    market: "korea",
    ticker: "005930",
    company: "Samsung Electronics",
    exchange: "KRX",
    fiscalYear: "FY2025, year ended December 31, 2025",
    stats: [
      { label: "Full-year revenue", value: "₩333.6T (+11%)" },
      { label: "Full-year operating profit", value: "₩43.6T (+33%)" },
      { label: "Q4 revenue", value: "₩93.8T (record)" },
      { label: "Q4 operating profit", value: "₩20.1T (record)" },
      { label: "Full-year R&D spend", value: "₩37.7T (record)" },
      { label: "Market cap", value: "Passed ₩1,000T, a first for a Korean company" },
    ],
    summary:
      "Samsung closed 2025 with record annual revenue and operating profit up a third on the year, driven by its Device Solutions division — memory chips, especially high-bandwidth memory for AI — while the phone and appliance division actually shrank in the December quarter as new-model launch effects faded. Chip pricing and AI-driven demand did the heavy lifting this year, not consumer electronics.",
    ownership:
      "Samsung Electronics has no majority owner on paper — the founding Lee family holds only a small direct stake — but effective control runs through a web of cross-shareholdings: Samsung Life Insurance and Samsung C&T each hold meaningful blocks, and the Lee family controls those companies. Executive Chairman Lee Jae-yong leads through that chain rather than a large personal stake. Foreign investors own just under half the company, and the National Pension Service of Korea is one of the largest single institutional holders — a reminder that Korea's own retirement system is deeply invested in this one stock.",
    traderRead:
      "A trader would separate the two divisions here rather than read revenue as one number. Memory chip pricing is cyclical — when it's up, as in 2025, profit swings hard in Samsung's favour, and when it turns, it swings just as hard the other way. The phone and appliance business declining sequentially while chips carried the year is a concentration risk worth watching, not a reason to panic. The cross-shareholding control structure also matters for governance risk: minority shareholders don't get to vote out the controlling family the way they could challenge a single large shareholder, so decisions can prioritise group-wide strategy over pure per-share value.",
    healthSignals: [
      "Profit growth (+33%) far outpacing revenue growth (+11%) — margin expansion, not just bigger sales",
      "Record R&D spend alongside record profit — investing from strength, not cutting to protect margin",
      "Watch: one division (memory/DS) is carrying the whole group's growth this cycle",
      "Watch: control runs through cross-shareholdings, not a simple majority stake — governance is less direct than a single controlling shareholder",
    ],
  },
  {
    date: "2026-08-21",
    market: "singapore",
    ticker: "SE",
    company: "Sea Limited",
    exchange: "NYSE",
    fiscalYear: "FY2025, year ended December 31, 2025",
    stats: [
      { label: "Full-year revenue", value: "$22.9B (+36%)" },
      { label: "Full-year net income", value: "$1.61B (up ~260%)" },
      { label: "Q4 revenue", value: "$6.9B (+38%)" },
      { label: "Shopee active buyers", value: "≈ 400 million" },
      { label: "Consumer/SME loans outstanding", value: "$9.2B (+80%)" },
    ],
    summary:
      "Sea — parent of Shopee, the gaming publisher Garena, and the fintech arm Monee — more than tripled net income for the year on revenue growth of 36%, with all three businesses scaling well. Shopee's order volume and revenue both grew fastest in the December quarter, and Monee's lending book grew 80% year over year, a much faster pace than its e-commerce or gaming arms.",
    ownership:
      "Sea runs a dual-class share structure: ordinary shares most investors hold get one vote, while founder and CEO Forrest Li's Class B shares carry more votes each — after Tencent converted its own Class B stake to ordinary shares in 2022, Li ended up with roughly 58% of total voting power while owning well under 15% of the actual economic value of the company. Tencent remains a large economic shareholder in the high-teens percent. Institutional funds own the majority of ordinary shares by number, but Li's vote weighting means he can't be outvoted by them.",
    traderRead:
      "A trader reads Monee's 80% loan growth as the number worth watching most closely, not celebrating outright — fast-growing consumer and SME lending is exactly where credit losses show up with a lag, so the real test of this business is what happens to loan quality a few quarters from now, not today's growth rate. Net income more than tripling looks dramatic, but it's coming off a small base — Sea only turned consistently profitable in the last two years, so the percentage gain is less meaningful than the trend of it holding steady. The founder's outsized voting power versus his actual ownership stake is a governance point traders price in as a small structural discount versus companies with one-share-one-vote.",
    healthSignals: [
      "All three business lines (e-commerce, gaming, fintech) grew and were profitable simultaneously — not one segment propping up the others",
      "Fast-growing loan book (Monee) is the segment to monitor for credit quality next, not just growth",
      "Net income growth is off a recent, small profitability base — trend matters more than the percentage",
      "Watch: founder voting control (~58%) is well above his economic ownership stake (<15%) — a governance concentration point",
    ],
  },
  {
    date: "2026-08-21",
    market: "australia",
    ticker: "WTC",
    company: "WiseTech Global",
    exchange: "ASX",
    fiscalYear: "FY2025, year ended June 30, 2025",
    stats: [
      { label: "Guided FY25 revenue", value: "A$1.2B–$1.3B (downgraded)" },
      { label: "Operating cash flow", value: "A$436.5m (+25%)" },
      { label: "Product development headcount", value: "64% of total staff" },
      { label: "Founder direct stake", value: "≈ 37%, via RealWise Holdings" },
      { label: "Customers", value: "17,000+ logistics companies, 193 countries" },
    ],
    summary:
      "WiseTech, the Sydney-based logistics software company behind the CargoWise platform, cut its FY2025 earnings guidance during the year after organisational disruption — including a governance controversy involving founder and then-CEO Richard White, who stepped down after nearly three decades in the role once the board's review cleared him of the more serious allegations but confirmed enough disruption to justify the guidance cut. Underneath the headline, cash generation stayed strong: operating cash flow grew 25%, and R&D investment kept climbing.",
    ownership:
      "Founder Richard White remains WiseTech's largest shareholder by a wide margin, holding roughly 37% of the company through his vehicle RealWise Holdings — enough to heavily influence, though not unilaterally control, shareholder votes under the company's one-share-one-vote structure. He has been steadily selling down small parcels of stock over time even while retaining his large founder base. The rest of the register has shifted increasingly toward large global institutional investors as the company has grown from its 2016 IPO.",
    traderRead:
      "This is a case study in separating the operating business from the headline drama. A trader checks whether cash flow and R&D kept growing through the disruption — here, both did, which suggests the core CargoWise franchise stayed healthy even while leadership and guidance were in turmoil. The bigger question for a concentrated founder holding like White's: succession risk. When one person holds over a third of the company and was central to both its technology vision and, per the controversy, its recent instability, a trader has to price in what happens to strategy and culture once that influence recedes — not just this quarter's numbers.",
    healthSignals: [
      "Operating cash flow grew 25% even through a leadership and guidance crisis — the core business kept generating cash",
      "R&D and product-development headcount share kept rising, not falling, during the disruption",
      "Guidance was cut mid-year — a real signal, not overcaution, since it followed confirmed internal disruption",
      "Watch: founder holds over a third of the company and was at the centre of the year's governance controversy — succession and culture risk",
    ],
  },
  {
    date: "2026-08-21",
    market: "india",
    ticker: "TCS",
    company: "Tata Consultancy Services",
    exchange: "NSE/BSE",
    fiscalYear: "FY2025, year ended March 31, 2025",
    stats: [
      { label: "Annual revenue", value: "Crossed $30B for the first time" },
      { label: "Promoter (Tata Sons) holding", value: "≈ 71.7%" },
      { label: "Workforce", value: "607,000+ consultants, 55 countries" },
      { label: "Dividend payout ratio", value: "≈ 45%" },
      { label: "5-year sales growth", value: "≈ 10.2% (recent commentary calls this soft)" },
    ],
    summary:
      "TCS, India's largest IT services company, crossed $30 billion in annual revenue for the first time in FY2025, backed by what management called a strong order book for a second straight quarter. Growth has been steady rather than explosive — five-year sales growth of around 10% a year is being read by some market commentary as underwhelming for a company of TCS's scale, even as margins stayed industry-leading.",
    ownership:
      "Tata Sons, the unlisted holding company at the centre of the wider Tata Group, owns roughly 72% of TCS and has held that level steadily — this isn't a company where promoter ownership drifts quarter to quarter. That concentration means TCS functions as one of the Tata Group's main cash engines: dividends and buybacks from TCS flow back up to fund Tata Sons and, through it, the rest of the conglomerate. Public shareholders hold the remaining float and can vote on resolutions, but don't come close to challenging promoter control.",
    traderRead:
      "A trader treats TCS less like a standalone bet and more like a proxy for the health of the entire Tata Group, given how much of Tata Sons' income depends on TCS dividends — a slowdown here has ripple effects well beyond the stock itself. The 10% five-year growth rate against a $30 billion base is the number to sit with: at this size, compounding even modest growth is hard, so a trader checks whether new deal wins (the order book strength management is pointing to) are actually translating into revenue next year, or just optimistic commentary. Industry-leading margins held through a period of soft growth is a mild positive sign — TCS isn't cutting price to chase volume.",
    healthSignals: [
      "Crossed $30B revenue for the first time — a scale milestone, but recent growth rate (~10%/yr) is being read as soft by some analysts",
      "Margins held up despite slower growth — no sign of discounting to win volume",
      "Promoter (Tata Sons) stake has stayed stable near 72% — no dilution or concentration drift to flag",
      "Watch: TCS dividends are a major funding source for the wider Tata Group, so its performance carries weight beyond its own share price",
    ],
  },
  {
    date: "2026-08-21",
    market: "china",
    ticker: "0700",
    company: "Tencent Holdings",
    exchange: "HKEX",
    fiscalYear: "FY2025, year ended December 31, 2025",
    stats: [
      { label: "Full-year revenue", value: "RMB 751.8B (+14%)" },
      { label: "Full-year net profit", value: "RMB 224.8B (+16%)" },
      { label: "Q4 operating margin", value: "36%, up from 34%" },
      { label: "Share buybacks", value: "≈ HK$80B (~US$10.3B)" },
      { label: "International games revenue", value: "Exceeded $10B for the first time" },
    ],
    summary:
      "Tencent's 2025 revenue grew 14% to RMB751.8 billion with net profit up 16%, ahead of analyst estimates, as AI improved ad targeting and game engagement while its cloud business turned scale-profitable for the first time. International games revenue passed $10 billion annually for the first time, a sign the company's gaming business is no longer purely a domestic China story. Margin expanded alongside growth — profit grew faster than revenue, the same efficiency signal seen in several of this week's other reports.",
    ownership:
      "No single shareholder controls Tencent outright. Prosus — the Amsterdam-listed arm of South African group Naspers — is the largest shareholder at just under 23%, a stake it has been gradually selling down for years to fund its own share buybacks; each sale still leaves Prosus as by far the biggest holder. Co-founder and CEO Pony Ma holds roughly 8.8% through his own holding vehicle, making him the largest individual holder but well short of control. The company is incorporated in the Cayman Islands, a structure common to Chinese tech firms listed offshore, and trades on the Hong Kong exchange with a US ADR line for offshore investors.",
    traderRead:
      "A trader watches the Prosus stake closely, since Tencent shares are Prosus's single largest asset — a steady drip of Prosus selling to fund its own buybacks is a structural, non-fundamental source of supply on the stock, separate from anything Tencent itself is doing operationally. The cloud business reaching scale profitability is arguably the most important line in this report: cloud has been a drag on margin for years across Chinese tech, so Tencent turning it profitable changes the shape of future earnings growth. The large buyback (~HK$80B) alongside a raised dividend signals management sees the stock as attractively priced relative to its own cash generation.",
    healthSignals: [
      "Profit growth (+16%) outpacing revenue growth (+14%) — margin expanding, not compressing",
      "Cloud business reached scale profitability for the first time — removes a historical drag on group margin",
      "International games crossed $10B annually — reduces reliance on the domestic China gaming market",
      "Watch: largest shareholder (Prosus) is a structural, ongoing seller to fund its own buybacks — separate from company fundamentals but a real source of share supply",
    ],
  },
];
