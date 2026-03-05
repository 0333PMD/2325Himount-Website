# Agent1 Notes

## Summary
Implemented a stronger Next.js App Router scaffold with reusable layout/components and dedicated routes for:
- `/`
- `/floor-plans`
- `/amenities`
- `/neighborhood`
- `/contact`

## What Changed
- Added reusable UI components in `app/components/`:
  - `SiteHeader.js`
  - `SiteFooter.js`
  - `PageHero.js`
  - `MarkdownContent.js`
  - `UnitsGrid.js`
- Upgraded content loading in `lib/content.js`:
  - YAML parsing for site/units/gallery
  - Markdown + frontmatter parsing for content pages
- Reworked app pages and routing to use shared content/config.
- Expanded design system in `app/globals.css` for warm, mobile-first styling.
- Added markdown/frontmatter dependencies (`gray-matter`, `marked`) in `package.json`.

## Build Verification
- `npm install` completed.
- `npm run build` completed successfully with static export-compatible output.

## Assumptions
- Contact form is currently a static front-end form (no server handler connected yet).
- Copy remains a v0 placeholder seed and should be replaced with final researched content.
