/**
 * Maps an award category to a visual treatment for its placeholder tile.
 *
 * Real bottle photography isn't available for these winners, so each card gets
 * a deliberate, category-derived tile rather than a generic icon. Order matters:
 * the first matching pattern wins, so narrower terms precede broader ones
 * ("single malt" before "whiskey", "rye" before "bourbon").
 */
const SPIRIT_STYLES = [
  { test: /mezcal|agave|tequila/i, key: "agave", glyph: "🌵", tint: "agave" },
  { test: /gin/i, glyph: "🌿", key: "gin", tint: "gin" },
  { test: /vodka/i, glyph: "❄️", key: "vodka", tint: "vodka" },
  { test: /rum/i, glyph: "🏝️", key: "rum", tint: "rum" },
  { test: /cognac|brandy|calvados/i, glyph: "🍇", key: "brandy", tint: "brandy" },
  { test: /liqueur/i, glyph: "🍬", key: "liqueur", tint: "liqueur" },
  // "American Single Malt" is its own category, not Scotch — exclude it here
  // before the broader single-malt match.
  { test: /american single malt/i, glyph: "🌾", key: "singleMalt", tint: "singleMalt" },
  { test: /scotch|single malt/i, glyph: "🏔️", key: "scotch", tint: "scotch" },
  { test: /irish/i, glyph: "☘️", key: "irish", tint: "irish" },
  { test: /rye/i, glyph: "🌾", key: "rye", tint: "rye" },
  { test: /bourbon/i, glyph: "🥃", key: "bourbon", tint: "bourbon" },
];

const DEFAULT_STYLE = { key: "whiskey", glyph: "🥃", tint: "whiskey" };

export function spiritStyleFor(category = "") {
  return SPIRIT_STYLES.find((s) => s.test.test(category)) ?? DEFAULT_STYLE;
}

/**
 * Up to two initials from the bottle name, skipping leading articles and any
 * leading numeric token ("1800 Guachimonton" -> "G", "Old Soul" -> "OS").
 */
export function initialsFor(winner = "") {
  const words = winner
    .replace(/[^\p{L}\p{N}\s]/gu, " ")
    .split(/\s+/)
    .filter(Boolean)
    .filter((w) => !/^(the|a|an|of|and)$/i.test(w))
    .filter((w) => !/^\d+$/.test(w));

  return words
    .slice(0, 2)
    .map((w) => w[0].toUpperCase())
    .join("");
}
