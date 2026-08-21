// HCM Finance — daily annual report training ground.
// Report data lives in ./finance-reports.json so the daily automation
// (scripts/generate-daily-report.mjs, run by GitHub Actions) can safely
// append a new entry without editing JS source.
// Markets rotate: us -> korea -> singapore -> australia -> india -> china -> us ...

import reportsData from "./finance-reports.json";

export const markets = [
  { key: "us", name: "United States", flag: "🇺🇸" },
  { key: "korea", name: "South Korea", flag: "🇰🇷" },
  { key: "singapore", name: "Singapore", flag: "🇸🇬" },
  { key: "australia", name: "Australia", flag: "🇦🇺" },
  { key: "india", name: "India", flag: "🇮🇳" },
  { key: "china", name: "China", flag: "🇨🇳" },
];

export const reports = reportsData;
