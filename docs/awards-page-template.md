# How to Create a New ASCOT Awards Year Page

This guide walks you through adding a new ASCOT Awards year page (e.g., `ascot-awards-2027`) to the dfl Next.js repo using the App Router.

## Critical Rule

**Never invent founding dates or origin history for the ASCOT Awards.** The first ASCOT Awards was in 2021, per Fred Minnick's reporting. Unsourced historical claims have been caught in review and removed.

---

## Step 1: Create the Winners Data File

Create `src/app/ascot-awards-<YEAR>/winners.js` — this file exports the `winnersData` object as the single source of truth for all award entries.

### Winner Entry Shape

Each winner object contains:

```javascript
{
  category: string,     // Used as React key AND passed to spiritStyleFor() for tile tint.
                        // MUST be unique within the page.
  winner: string,       // The winning bottle name.
  image: null | URL,    // Bottle image URL (string) or null. If null, a spirit-themed
                        // placeholder tile is rendered instead.
  runnersUp: [],        // Array of strings (runner-up bottle names). May be empty.
  note: string,         // (Optional) Special note to display below the winner.
                        // Only rendered if this field exists. Used for "Best in Show"
                        // callouts and similar honors.
}
```

### Example Winners Data File

```javascript
// src/app/ascot-awards-2027/winners.js
export const winnersData = {
  whiskey: [
    {
      category: "Bourbon of the Year",
      winner: "Bottle Name Here",
      image: null,
      runnersUp: [],
    },
    {
      category: "American Single Malt of the Year",
      winner: "Another Bottle",
      image: null,
      runnersUp: ["Runner-up 1", "Runner-up 2"],
    },
    {
      category: "American Whiskey of the Year",
      winner: "The Champion",
      image: null,
      runnersUp: [],
      note: "🥇 Also crowned Best in Show",
    },
  ],
  whiteSpirits: [
    // ... similar structure
  ],
};
```

### The `note` Field and Highlighting

Pass `highlightNotes={true}` to `<AwardSection>` to switch note styling:

- **With `highlightNotes={true}`**: Note renders with `✨` glyph and amber/gold color (`.noteHighlight` class)
- **With `highlightNotes={false}` (default)**: Note renders with `📌` glyph and grey color (`.note` class)

In the 2025 example, both sections use `highlightNotes={true}` because all notes are "Best in Show" honors.

---

## Step 2: Create the Page Component

Create `src/app/ascot-awards-<YEAR>/page.jsx` — this is the article page that renders the winners.

### Copy the Structure

Use the exact layout pattern from `ascot-awards-2025/page.jsx`. Update only the year, title, description, and introductory copy:

```jsx
import styles from "../styles/Layout.module.css";
import headerStyles from "../styles/Header.module.css";
import awardStyles from "../styles/Awards.module.css";
import { AwardSection } from "../(components)/AwardWinners";
import { winnersData } from "./winners";

const PAGE_TITLE = "2027 ASCOT Awards – Best in Category Winners";
const PAGE_DESCRIPTION =
  "Over X entries from [region] went in blind. These are the Best in Category champions of the 2027 ASCOT Awards.";
const FIRST_IMAGE = {
  path: "https://your-image-url.jpg",
  alt: "2027 ASCOT Awards Best in Category winners",
  width: 1200,
  height: 630,
};

export const metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    images: [
      {
        url: FIRST_IMAGE.path,
        width: FIRST_IMAGE.width,
        height: FIRST_IMAGE.height,
        alt: FIRST_IMAGE.alt,
      },
    ],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: PAGE_TITLE,
    images: {
      url: FIRST_IMAGE.path,
      alt: FIRST_IMAGE.alt,
      width: FIRST_IMAGE.width,
      height: FIRST_IMAGE.height,
    },
  },
};

export default function Ascot2027Winners() {
  return (
    <div className={styles.gridcontainer4}>
      <div className={headerStyles.description}>
        🏅 2027 ASCOT Awards – Best in Category Winners<br />
      </div>

      <p className={awardStyles.byline}>By Adam Aslan</p>

      <div className={awardStyles.intro}>
        <p>
          <span className={awardStyles.introLead}>Introduce the year:</span>{" "}
          Write your opening narrative here. Explain entry count, judging panel
          details, and overall theme. Keep it to 2-3 sentences per paragraph.
        </p>
        <p>
          Include any "Best in Show" winners and key statistics. This intro
          section uses a warm yellow background (.intro style) and is
          center-aligned with a max-width of 800px.
        </p>
      </div>

      <AwardSection
        title="🥃 Whiskey Winners"
        data={winnersData.whiskey}
        highlightNotes
      />
      <AwardSection
        title="🍸 White Spirit Winners"
        data={winnersData.whiteSpirits}
        highlightNotes
      />

      <footer className={awardStyles.footer}>
        <p>
          Source:{" "}
          <a
            href="https://your-source-url.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Source Attribution
          </a>{" "}
          &amp;{" "}
          <a
            href="https://your-second-source.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Additional Source
          </a>
        </p>
        <p>© 2027 ASCOT Awards. All rights reserved.</p>
      </footer>
    </div>
  );
}
```

### Layout Classes

- **`styles.gridcontainer4`** — Main article container (from Layout.module.css)
- **`headerStyles.description`** — Page title bar
- **`awardStyles.byline`** — Byline text (centered, subtle gray)
- **`awardStyles.intro`** — Warm yellow intro box (max-width 800px, centered)
- **`awardStyles.footer`** — Footer with source attribution (border-top, smaller text)

The winners grid is rendered by `<AwardSection>` and uses CSS Module classes from `Awards.module.css` (`.section`, `.grid`, `.card`, etc.). **No Tailwind here** — the awards pages use CSS Modules throughout.

---

## Step 3: Add a Homepage Card

The homepage (`src/app/page.js`) displays award cards in a **Tailwind grid**. Add a new `<Link>` card for your year.

### Card Structure

The homepage uses `Link` + nested Tailwind classes (unlike the article pages, which use CSS Modules). **This inconsistency is known** — the homepage predates the awards refactor:

```jsx
<Link href="/ascot-awards-2027" className="block group">
  <div className="flex flex-col rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5">
    <div className="relative overflow-hidden">
      <img
        className="w-full h-64 md:h-80 object-cover transform transition-all duration-500 group-hover:scale-105"
        alt="Award-winning spirits from the 2027 ASCOT Awards"
        src="https://your-image-url.jpg"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30"></div>
    </div>
    <div className="p-4 bg-amber-100 transition-colors duration-300 group-hover:bg-yellow-100">
      <h2 className="text-xl font-semibold mb-2 text-gray-800">
        2027 ASCOT Awards: [Subtitle]
      </h2>
      <h3 className="text-lg text-gray-600">
        [Entry count], [region], [key statistic].
      </h3>
    </div>
  </div>
</Link>
```

### Where to Insert

In `src/app/page.js`, find the grid starting around line 32 (the "parent" div with Tailwind grid). The existing 2025 and 2026 cards are at the top. **Insert your new card in the same `<div className="grid grid-cols-1 sm:grid-cols-2 ...">` section**, keeping the most recent year first.

---

## Step 4: Verify the Build

Build and verify the page prerenderes correctly:

```bash
npm run build
```

After build completes, check that the page renders:

1. Open `.next/server/app/ascot-awards-<YEAR>.html` (the prerendered HTML)
2. Verify the page contains winner cards by searching for the CSS grid class:
   ```bash
   grep -c "_card__" .next/server/app/ascot-awards-<YEAR>.html
   ```
   This counts the number of rendered winner cards. Should match your total winner count across sections.

3. Confirm no build errors and that `npm run dev` serves the page at `http://localhost:3000/ascot-awards-<YEAR>` without 404s.

---

## Understanding the Spirit-Tile System

When a winner entry has `image: null`, a placeholder tile is rendered using `spiritStyleFor()` from `src/app/(components)/spiritStyle.js`.

### How Category Matching Works

Each category string is tested against regex patterns **in order**. The **first match wins**. Pattern order matters because narrower patterns must come before broader ones:

```javascript
// Narrower patterns first:
{ test: /american single malt/i, ... }  // Must come before /single malt/i

// Broader patterns after:
{ test: /scotch|single malt/i, ... }
{ test: /rye/i, ... }
{ test: /bourbon/i, ... }   // Catch-all for whiskeys not otherwise matched
```

Example matching:

- "American Single Malt of the Year" → matches `/american single malt/i` → tint `singleMalt`
- "Scotch of the Year" → skips `/american single malt/i`, matches `/scotch|single malt/i` → tint `scotch`
- "Rye of the Year" → matches `/rye/i` (comes before `/bourbon/i`) → tint `rye`

### Adding a New Spirit Type

If a new ASCOT year introduces a spirit category not in the current list (e.g., "Vermouth of the Year"), you must:

1. **Add an entry to `SPIRIT_STYLES` in `spiritStyle.js`:**

   ```javascript
   { test: /vermouth/i, glyph: "🍋", key: "vermouth", tint: "vermouth" },
   ```

   - `test`: Regex to match the category name (case-insensitive)
   - `glyph`: Emoji to display on the placeholder tile
   - `key`: Internal identifier (used for analytics, not displayed)
   - `tint`: Name of the CSS class variable (e.g., `vermouth` → `.tintVermouth`)

   Place it in order so it doesn't block a broader match.

2. **Add a CSS class to `src/app/styles/Awards.module.css`:**

   ```css
   .tintVermouth {
     --tile-from: #dbeafe;
     --tile-to: #f0f9ff;
     --tile-ink: #0369a1;
   }
   ```

   The class name **must follow the pattern** `.tint<CapitalizedName>`. The `<CapitalizedName>` part is derived from the `tint` value:
   - `tint: "vermouth"` → `.tintVermouth`
   - `tint: "gin"` → `.tintGin`
   - `tint: "bourbon"` → `.tintBourbon`

   (The code in `AwardWinners.jsx` capitalizes the first letter and appends the rest: `tint[0].toUpperCase() + tint.slice(1)`.)

   Choose colors using CSS custom properties (`--tile-from`, `--tile-to`, `--tile-ink`) for gradient and text color:

   ```css
   --tile-from: #start-color;   /* Gradient start (top-left) */
   --tile-to: #end-color;       /* Gradient end (bottom-right) */
   --tile-ink: #text-color;     /* Glyph and initials color */
   ```

   See existing `.tint*` classes in `Awards.module.css` for color examples.

---

## Summary Checklist

- [ ] Create `src/app/ascot-awards-<YEAR>/winners.js` with `winnersData` export
- [ ] Create `src/app/ascot-awards-<YEAR>/page.jsx` with metadata and `<AwardSection>` components
- [ ] Add homepage card to `src/app/page.js` (in the main Tailwind grid, top section)
- [ ] If new spirit type is needed: add entry to `SPIRIT_STYLES` and `.tint*` class to `Awards.module.css`
- [ ] Run `npm run build` and verify `.next/server/app/ascot-awards-<YEAR>.html` renders correctly
- [ ] Confirm `npm run dev` serves the page without 404s

---

## File Reference

- **Winners data:** `src/app/ascot-awards-<YEAR>/winners.js`
- **Page component:** `src/app/ascot-awards-<YEAR>/page.jsx`
- **Shared styles:** `src/app/styles/Awards.module.css`, `Layout.module.css`, `Header.module.css`
- **Rendering logic:** `src/app/(components)/AwardWinners.jsx`
- **Category-to-style mapping:** `src/app/(components)/spiritStyle.js`
- **Homepage:** `src/app/page.js`
