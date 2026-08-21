import { useState } from "react";
import { ChevronDown, Plane, ExternalLink, Leaf, Tag, Egg, Sprout, Soup, Flame } from "lucide-react";

// Add more airlines here later — the UI below is driven entirely by this array.
const airlines = [
  {
    key: "vietnam-airlines",
    name: "Vietnam Airlines",
    allianceBadge: "SkyTeam member",
    logo: "https://www.vietnamairlines.com/content/dam/vna/logos/logo-vna.png",
    heroImage:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Vietnam_Airlines_Airbus_A350-941_VN-A886.JPG",
    heroImageCredit: {
      text: "Photo: Badboyinterlude, CC BY-SA 4.0, via Wikimedia Commons",
      href: "https://commons.wikimedia.org/wiki/File:Vietnam_Airlines_Airbus_A350-941_VN-A886.JPG",
    },
    officialLink: "https://www.vietnamairlines.com/us/en/travel-information/special-services/special-meals",
    mealPhoto: {
      src: "https://commons.wikimedia.org/wiki/Special:FilePath/A_Vietnam_Airlines_Economy_Class_meal.jpg",
      credit: {
        text: "Photo: Taiyo FUJII, CC BY 2.0, via Wikimedia Commons",
        href: "https://commons.wikimedia.org/wiki/File:A_Vietnam_Airlines_Economy_Class_meal.jpg",
      },
      disclaimer:
        "A real Vietnam Airlines economy meal, shown for general reference only. Presentation, portions and dishes vary by route, aircraft, cabin class and date — this photo may not match the exact vegetarian tray served on your flight.",
    },
    mealCategories: [
      {
        key: "vegetarian",
        label: "Vegetarian",
        meals: [
          {
            code: "VLML",
            name: "Vegetarian Lacto-Ovo Meal",
            altName: "Lacto Avo",
            meaning: "\u201CLacto-ovo\u201D means the diet still includes dairy (lacto) and eggs (ovo) \u2014 just no meat, poultry, or fish. It's the most common type of vegetarian diet.",
            icon: Egg,
            highlight: true,
            recommendedFor: "Non-meat eaters (dairy and eggs acceptable)",
            prohibited: "Meat, seafood, fish, fowl, lard, gelatin",
            sayThis: "\u201CVegetarian, dairy and eggs are fine\u201D",
            photo: {
              src: "https://commons.wikimedia.org/wiki/Special:FilePath/Western_Vegetarian_Airline_meal.jpg",
              credit: {
                text: "Photo: Cathay Pacific lacto-ovo meal, via Wikimedia Commons",
                href: "https://commons.wikimedia.org/wiki/File:Western_Vegetarian_Airline_meal.jpg",
              },
              note: "Shown from Cathay Pacific — the same meal type, not Vietnam Airlines' own plating.",
            },
          },
          {
            code: "AVML",
            name: "Asian / Hindu Vegetarian Meal",
            icon: Flame,
            recommendedFor: "Asian / Hindu vegetarians",
            prohibited: "Meat, fish, fowl, lard or gelatin, egg",
            sayThis: "\u201CAsian vegetarian, no egg\u201D",
            photo: {
              src: "https://commons.wikimedia.org/wiki/Special:FilePath/Lufthansa_Asian_vegetarian_meal,_July_2016.jpg",
              credit: {
                text: "Photo: Lufthansa Asian vegetarian meal, via Wikimedia Commons",
                href: "https://commons.wikimedia.org/wiki/File:Lufthansa_Asian_vegetarian_meal,_July_2016.jpg",
              },
              note: "Shown from Lufthansa — the same meal type, not Vietnam Airlines' own plating.",
            },
          },
          {
            code: "VGML",
            name: "Vegetarian Vegan Meal",
            icon: Sprout,
            recommendedFor: "Strict vegetarians",
            prohibited: "Animal products, meat, seafood, fish, fowl, lard, gelatin, eggs, dairy, honey",
            sayThis: "\u201CVegan \u2014 no dairy, no eggs\u201D",
          },
          {
            code: "VJML",
            name: "Vegetarian Jain Meal",
            icon: Leaf,
            recommendedFor: "Jain vegetarians",
            prohibited: "Meat, poultry, seafood, fish, eggs, dairy, root and bulbous vegetables",
            sayThis: "\u201CJain vegetarian \u2014 no onion or garlic\u201D",
          },
          {
            code: "VOML",
            name: "Vegetarian Oriental Meal",
            icon: Soup,
            recommendedFor: "Eastern vegetarians",
            prohibited: "Meat, poultry, seafood, fish, eggs, dairy, root and bulbous vegetables",
            sayThis: "\u201COriental vegetarian, no dairy or eggs\u201D",
          },
        ],
      },
    ],
  },
];

function MealCard({ meal, color }) {
  const Icon = meal.icon;
  return (
    <div
      className="relative overflow-hidden rounded-2xl border"
      style={{
        borderColor: meal.highlight ? color : "var(--color-line)",
        background: meal.highlight
          ? `color-mix(in srgb, ${color} 8%, var(--color-surface))`
          : "var(--color-surface)",
      }}
    >
      {meal.highlight && (
        <span
          className="absolute left-5 top-2 z-10 rounded-full px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider"
          style={{ background: color, color: "var(--color-surface)" }}
        >
          Also called "{meal.altName}"
        </span>
      )}

      {meal.photo ? (
        <div className="relative">
          <img
            src={meal.photo.src}
            alt={`${meal.name} example`}
            className="h-40 w-full object-cover"
            loading="lazy"
          />
          <span className="absolute bottom-1.5 right-2 rounded bg-black/60 px-1.5 py-0.5 text-[9px] text-white">
            Example only — see disclaimer below
          </span>
        </div>
      ) : (
        <div
          className="flex h-16 items-center gap-2 px-5 pt-1 text-xs text-[var(--color-ink-dim)]"
        >
          <Icon size={16} style={{ color }} />
          No verified photo of this meal available yet
        </div>
      )}

      <div className="p-5 pt-4">
        <div className="flex items-start gap-3">
          {meal.photo && (
            <div
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg"
              style={{ background: `color-mix(in srgb, ${color} 18%, var(--color-surface))` }}
            >
              <Icon size={18} style={{ color }} />
            </div>
          )}
          <div className="min-w-0 flex-1">
            <div className="flex items-center justify-between gap-2">
              <h4 className="font-display text-base font-bold leading-tight">{meal.name}</h4>
              <span
                className="shrink-0 rounded-md border px-2 py-0.5 font-mono text-xs"
                style={{ borderColor: color, color }}
              >
                {meal.code}
              </span>
            </div>
          </div>
        </div>

        {meal.meaning && (
          <p className="mt-2 text-xs leading-relaxed text-[var(--color-ink-dim)] opacity-80">
            {meal.meaning}
          </p>
        )}

        <p className="mt-3 text-sm leading-relaxed text-[var(--color-ink-dim)]">
          <span className="text-[var(--color-ink)]">Who it's for: </span>
          {meal.recommendedFor}
        </p>
        <p className="mt-1.5 text-sm leading-relaxed text-[var(--color-ink-dim)]">
          <span className="text-[var(--color-ink)]">Won't contain: </span>
          {meal.prohibited}
        </p>
        {meal.sayThis && (
          <p className="mt-3 rounded-lg bg-[var(--color-surface)] px-3 py-2 text-sm leading-relaxed text-[var(--color-ink)]">
            <span className="text-[var(--color-ink-dim)]">Say to crew: </span>
            {meal.sayThis}
          </p>
        )}
        {meal.photo && (
          <div className="mt-2 space-y-0.5">
            <p className="text-[10px] italic text-[var(--color-ink-dim)]">
              {meal.photo.note} Actual dish, portions and presentation vary by route, aircraft, cabin
              class and date — treat this as a general example, not what will be served.
            </p>
            <a
              href={meal.photo.credit.href}
              target="_blank"
              rel="noreferrer"
              className="block text-[10px] text-[var(--color-ink-dim)] hover:underline"
            >
              {meal.photo.credit.text}
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

export default function AirlineMealGuide({ color }) {
  const [openAirline, setOpenAirline] = useState(null);
  const [activeCategory, setActiveCategory] = useState("vegetarian");

  return (
    <section className="border-t border-[var(--color-line)] px-5 py-16 sm:px-8">
      <div className="mx-auto max-w-5xl">
        <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-ink-dim)]">
          Airline partners
        </h2>
        <p className="mt-2 max-w-2xl text-sm text-[var(--color-ink-dim)]">
          Flight details and onboard special-meal codes for the carriers we book most, so you know exactly what to request before you fly.
        </p>

        <div className="mt-6 space-y-4">
          {airlines.map((airline) => {
            const isOpen = openAirline === airline.key;
            return (
              <div
                key={airline.key}
                className="overflow-hidden rounded-2xl border border-[var(--color-line)] bg-[var(--color-surface)]"
              >
                {/* Clickable header row */}
                <button
                  onClick={() => setOpenAirline(isOpen ? null : airline.key)}
                  className="flex w-full items-center justify-between gap-4 p-5 text-left"
                >
                  <div className="flex items-center gap-4">
                    <img
                      src={airline.logo}
                      alt={`${airline.name} logo`}
                      className="h-8 w-auto object-contain"
                    />
                    <div>
                      <h3 className="font-display text-lg font-bold">{airline.name}</h3>
                      <p className="text-xs text-[var(--color-ink-dim)]">{airline.allianceBadge}</p>
                    </div>
                  </div>
                  <ChevronDown
                    size={20}
                    className="shrink-0 text-[var(--color-ink-dim)] transition-transform duration-300"
                    style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
                  />
                </button>

                {/* Expandable panel */}
                <div
                  className="grid transition-all duration-300 ease-in-out"
                  style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                >
                  <div className="overflow-hidden">
                    <div className="border-t border-[var(--color-line)] px-5 pb-6 pt-5">
                      {/* Hero photo */}
                      <div className="relative overflow-hidden rounded-xl">
                        <img
                          src={airline.heroImage}
                          alt={`${airline.name} aircraft`}
                          className="h-56 w-full object-cover sm:h-72"
                          loading="lazy"
                        />
                        <img
                          src={airline.logo}
                          alt=""
                          className="absolute bottom-3 left-3 h-8 w-auto rounded bg-white/90 px-2 py-1 object-contain"
                        />
                      </div>
                      {airline.heroImageCredit && (
                        <a
                          href={airline.heroImageCredit.href}
                          target="_blank"
                          rel="noreferrer"
                          className="mt-1.5 block text-right text-[10px] text-[var(--color-ink-dim)] hover:underline"
                        >
                          {airline.heroImageCredit.text}
                        </a>
                      )}

                      {/* Meals subsection */}
                      <div className="mt-6">
                        <div className="flex items-center gap-2">
                          <Plane size={16} style={{ color }} />
                          <h4 className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-ink-dim)]">
                            Meals
                          </h4>
                        </div>

                        {/* Real meal photo, with disclaimer since presentation varies */}
                        {airline.mealPhoto && (
                          <div className="mt-3">
                            <div className="overflow-hidden rounded-xl">
                              <img
                                src={airline.mealPhoto.src}
                                alt={`${airline.name} in-flight meal, shown for reference`}
                                className="h-48 w-full object-cover sm:h-64"
                                loading="lazy"
                              />
                            </div>
                            <div className="mt-1.5 flex flex-col gap-0.5 sm:flex-row sm:items-start sm:justify-between">
                              <p className="text-xs italic text-[var(--color-ink-dim)]">
                                {airline.mealPhoto.disclaimer}
                              </p>
                              <a
                                href={airline.mealPhoto.credit.href}
                                target="_blank"
                                rel="noreferrer"
                                className="shrink-0 text-[10px] text-[var(--color-ink-dim)] hover:underline"
                              >
                                {airline.mealPhoto.credit.text}
                              </a>
                            </div>
                          </div>
                        )}

                        {/* How to actually spot it on the plane */}
                        <div
                          className="mt-3 flex items-start gap-3 rounded-xl border p-4"
                          style={{ borderColor: "var(--color-line)", background: `color-mix(in srgb, ${color} 6%, var(--color-surface))` }}
                        >
                          <Tag size={18} className="mt-0.5 shrink-0" style={{ color }} />
                          <p className="text-sm leading-relaxed text-[var(--color-ink-dim)]">
                            <span className="text-[var(--color-ink)] font-medium">How to spot it on the plane: </span>
                            special meals come sealed with a small printed label on the lid showing the
                            code and the passenger's name — crew hand it out separately from the regular
                            trolley pass. You don't need to remember any code: just tell the crew the
                            phrase under "Say to crew" below, or point at the card on this page.
                          </p>
                        </div>

                        {/* Horizontal scroll of meal categories */}
                        <div className="mt-3 flex gap-2 overflow-x-auto pb-2">
                          {airline.mealCategories.map((cat) => (
                            <button
                              key={cat.key}
                              onClick={() => setActiveCategory(cat.key)}
                              className="flex shrink-0 items-center gap-1.5 rounded-full border px-4 py-1.5 text-sm font-medium transition-colors"
                              style={{
                                borderColor: activeCategory === cat.key ? color : "var(--color-line)",
                                background:
                                  activeCategory === cat.key
                                    ? `color-mix(in srgb, ${color} 15%, var(--color-surface))`
                                    : "transparent",
                                color: activeCategory === cat.key ? "var(--color-ink)" : "var(--color-ink-dim)",
                              }}
                            >
                              <Leaf size={14} />
                              {cat.label}
                            </button>
                          ))}
                        </div>

                        {/* Meal cards for the active category */}
                        {airline.mealCategories
                          .filter((cat) => cat.key === activeCategory)
                          .map((cat) => (
                            <div key={cat.key} className="mt-5 grid gap-4 sm:grid-cols-2">
                              {cat.meals.map((meal) => (
                                <MealCard key={meal.code} meal={meal} color={color} />
                              ))}
                            </div>
                          ))}

                        <p className="mt-5 text-xs text-[var(--color-ink-dim)]">
                          Special meals must be booked at least 24 hours before departure. Codes and
                          descriptions are the airline's own — always confirm at booking, since catering
                          can vary by route.
                        </p>

                        <a
                          href={airline.officialLink}
                          target="_blank"
                          rel="noreferrer"
                          className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium hover:underline"
                          style={{ color }}
                        >
                          See the full special-meal list on {airline.name}
                          <ExternalLink size={14} />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
