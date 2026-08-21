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
    mealCategories: [
      {
        key: "vegetarian",
        label: "Vegetarian",
        meals: [
          {
            code: "VLML",
            name: "Vegetarian Lacto-Ovo Meal",
            altName: "Lacto Avo",
            icon: Egg,
            highlight: true,
            recommendedFor: "Non-meat eaters (dairy and eggs acceptable)",
            prohibited: "Meat, seafood, fish, fowl, lard, gelatin",
            sayThis: "\u201CVegetarian, dairy and eggs are fine\u201D",
          },
          {
            code: "AVML",
            name: "Asian / Hindu Vegetarian Meal",
            icon: Flame,
            recommendedFor: "Asian / Hindu vegetarians",
            prohibited: "Meat, fish, fowl, lard or gelatin, egg",
            sayThis: "\u201CAsian vegetarian, no egg\u201D",
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
      className="relative rounded-2xl border p-5"
      style={{
        borderColor: meal.highlight ? color : "var(--color-line)",
        background: meal.highlight
          ? `color-mix(in srgb, ${color} 8%, var(--color-surface))`
          : "var(--color-surface)",
      }}
    >
      {meal.highlight && (
        <span
          className="absolute -top-3 left-5 rounded-full px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider"
          style={{ background: color, color: "var(--color-surface)" }}
        >
          Also called "{meal.altName}"
        </span>
      )}
      <div className="flex items-start gap-3">
        <div
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl"
          style={{ background: `color-mix(in srgb, ${color} 18%, var(--color-surface))` }}
        >
          <Icon size={20} style={{ color }} />
        </div>
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
