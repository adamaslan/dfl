# ASCOT Awards Pages — Remaining Work

## Status: MVP Complete & Merged

Two ASCOT Awards pages are live on `main`:

- `/ascot-awards-2025` — 12 categories (6 whiskey, 6 white spirits)
- `/ascot-awards-2026` — 41 categories (9 bourbon, 16 American whiskey, 5 Scotch & world whiskey, 11 white spirits)

Both pages are linked from the homepage (`src/app/page.js`). CSS styling uses module imports matching all other articles in the repo (Layout.module.css, Header.module.css, Awards.module.css), not Tailwind. Merged in PR #330.

### Component Architecture

- **AwardWinners.jsx** — `WinnerCard` and `AwardSection` render the award grids
- **spiritStyle.js** — Maps category names to placeholder-tile glyphs and color tints (bourbon 🥃, rye 🌾, gin 🌿, vodka ❄️, rum 🏝️, etc.)
- **Awards.module.css** — Grid layout (1→2→3→4 columns on widening screens), card styling, and placeholder-tile CSS custom properties (`--tile-from`, `--tile-to`, `--tile-ink`)

### Image Fallback Mechanism

`BottleImage` component gracefully falls back to a designed placeholder tile when a bottle image URL is `null` or fails to load:

- Tile displays: category-derived glyph + bottle-name initials on a tinted gradient background
- Example: "Old Soul Bourbon Tintype #1" → "🥃 OS" on wheat-gold gradient
- This approach is permanent; bottle photography cannot be sourced (see constraints)

---

## Open Items

- [ ] **Source real bottle photography** — The primary win. Set `image` to a URL in the winners.js files (one per entry, matching the bottle name exactly). Next.config.mjs already allows `res.cloudinary.com`, but Cloudinary credentials would be needed to upload new images. Alternative: find existing CDN-hosted product images for the winning bottles by name (e.g., Distiller.com, Untappd, manufacturer websites). For now, only 2/41 live URLs remain on 2026 (both Untappd).

- [ ] **Add earlier award years** — The ASCOT Awards have run since at least 2021 (per Fred Minnick's blog). Identify and port 2022, 2023, 2024 award results if publicly available, following the same structure (create `src/app/ascot-awards-20XX/` with `page.jsx`, `winners.js`). Link from homepage.

- [ ] **Verify winner names against official source** — Cross-reference all entries in both winners.js files against the official ASCOT Awards source to catch any typos or name mismatches. Fred Minnick's blog posts and ascotawards.com are the primary sources.

- [ ] **Investigate the 2-out-of-43 image asymmetry** — 2026 has exactly two live image URLs (both Untappd, on "Best Small Batch Bourbon" and "Best Craft Bourbon"); 2025 has zero. This is likely because those two entries were manually sourced, but the mechanism (how/why these two) should be documented or normalized.

---

## Known Constraints

### No Real Bottle Photography Available

- **Why**: Original source URLs (mostly Unsplash photo IDs on 2025; mixed hosts on 2026) are dead or hotlink-blocked. Cloudinary credentials would allow uploading new images to `res.cloudinary.com`, but none are currently configured.
- **Impact**: Placeholder tiles are the permanent rendering strategy. This is not a bug; it's a deliberate design choice (see Awards.module.css `.bottleTile` and spiritStyle.js matching logic).
- **Next steps**: To upgrade from placeholders to real images, either obtain Cloudinary credentials and bulk-upload product shots, or find CDN-hosted product images by bottle name and populate the `image` field in winners.js.

### No Unsourced Historical Claims

- Earlier versions included unsourced founding-date claims (e.g., "a 2012 Louisville speakeasy"). These were removed after CodeRabbit review; the official ASCOT Awards source (Fred Minnick) establishes the first awards as 2021. **Do not reintroduce any founding date or historical narrative without a verifiable cite.**
- Apply this rule to all historical context added to page.jsx intro text.

---

## Implementation Notes

- **Image mechanism**: Set `image: "https://..."` for each entry in winners.js. If a URL 404s at render time, `BottleImage` catches the `onError` event and falls back to the placeholder tile.
- **Styling**: No Tailwind; all CSS is in Awards.module.css using CSS Grid and flexbox. Placeholder colors are defined via CSS custom properties in `.tint*` classes (e.g., `.tintBourbon`, `.tintRye`).
- **Category matching**: spiritStyle.js uses regex patterns to map category names to glyphs and tints. Order matters: narrower terms precede broader ones (e.g., "American Single Malt" before "Whiskey").
- **Markup**: Page titles, descriptions, and OG/Twitter metadata are in each year's page.jsx. Footer cites Fred Minnick and Shore Fire Media for 2025; ascotawards.com/playoffs/ for 2026.
