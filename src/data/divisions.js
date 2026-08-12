// Single source of truth for every HCM division.
// Add a new division by adding one entry here — nav, footer, and the
// homepage orbit diagram all read from this file.

export const divisions = [
  {
    key: "tech",
    code: "TECH",
    name: "HCM Tech",
    tagline: "It's your build.",
    path: "/tech",
    color: "var(--color-tech)",
    summary:
      "Websites for real businesses and repairs for the devices that keep them running.",
  },
  {
    key: "ai",
    code: "AI",
    name: "HCM AI",
    tagline: "It's your edge.",
    path: "/ai",
    color: "var(--color-ai)",
    summary:
      "Practical AI tooling and automation for teams that don't have an AI team.",
  },
  {
    key: "travel",
    code: "TRAVEL",
    name: "HCM Travel",
    tagline: "It's your next trip.",
    path: "/travel",
    color: "var(--color-travel)",
    summary:
      "Trips planned around how you actually want to travel, not a template itinerary.",
  },
  {
    key: "games",
    code: "GAMES",
    name: "HCM Games",
    tagline: "It's your arena.",
    path: "/games",
    color: "var(--color-games)",
    summary: "A place to build games and a place to play them, under one roof.",
  },
  {
    key: "music",
    code: "MUSIC",
    name: "HCM Music",
    tagline: "It's your music.",
    path: "/music",
    color: "var(--color-music)",
    summary: "Sound built and shared on your terms.",
  },
  {
    key: "film",
    code: "FILM",
    name: "HCM Motion Pictures",
    tagline: "It's your motion pictures.",
    path: "/film",
    color: "var(--color-film)",
    summary: "Stories made to be watched, not scrolled past.",
  },
];

export const socials = [
  { name: "X", href: "https://x.com/hcmtechx", handle: "@hcmtechx" },
  { name: "TikTok", href: "https://www.tiktok.com/@hcmtechtiktok", handle: "@hcmtechtiktok" },
  { name: "YouTube", href: "https://youtube.com/@hcmtechyoutube", handle: "@hcmtechyoutube" },
];
