---
phase: 01-core-content
plan: 01
subsystem: infra
tags: [nextjs, tailwindcss, typescript, static-export, pnpm]

# Dependency graph
requires: []
provides:
  - Next.js project with static export configuration
  - Tailwind CSS v4 custom theme with design tokens
  - Playfair Display + Inter fonts with Vietnamese support
  - Centralized content constants for i18n readiness
  - Placeholder images for hero and about sections
affects: [01-core-content, 02-pricing, 03-language]

# Tech tracking
tech-stack:
  added: [next@16.2.9, react@19.2.4, tailwindcss@4.3.1, typescript@5.9.3, @tailwindcss/postcss@4.3.1]
  patterns: [tailwind-v4-theme-directive, next-font-google-vietnamese, static-export-config, centralized-constants]

key-files:
  created:
    - next.config.ts — Static export configuration
    - src/app/globals.css — Tailwind v4 theme with @theme directive
    - src/app/layout.tsx — Root layout with font loading and metadata
    - src/lib/constants.ts — All site content data (teacherInfo, services, navLinks, heroContent)
    - public/images/hero-placeholder.svg — Hero background placeholder (1200x800)
    - public/images/about-placeholder.svg — About section placeholder (600x800)
  modified:
    - package.json — Project dependencies and scripts

key-decisions:
  - "Used next.config.ts (TypeScript) instead of next.config.js — matches create-next-app v16 output"
  - "Sage green (#7C9A82) as accent color — works with cream base and yoga/wellness aesthetic"
  - "Playfair Display + Inter font pairing — editorial feel, excellent Vietnamese diacritics support"
  - "All content centralized in constants.ts for future i18n (Phase 3)"

patterns-established:
  - "Tailwind v4 @theme directive for custom colors and fonts (no tailwind.config.js)"
  - "next/font/google with subsets: ['latin', 'vietnamese'] for Vietnamese diacritics"
  - "output: 'export' + images.unoptimized for static site generation"
  - "Centralized constants pattern for content data"

requirements-completed: [NAV-01, NAV-02]

# Metrics
duration: 5min
completed: 2026-06-14
---

# Phase 1 Plan 01: Initialize Next.js with Design System Summary

**Next.js 16.2.9 static export with Tailwind CSS v4 @theme, Playfair Display + Inter fonts with Vietnamese support, and centralized content constants**

## Performance

- **Duration:** 5 min
- **Started:** 2026-06-14T09:29:19Z
- **Completed:** 2026-06-14T09:34:36Z
- **Tasks:** 2
- **Files modified:** 7

## Accomplishments

- Next.js 16.2.9 project scaffolded with App Router, TypeScript, and Tailwind CSS v4
- Static export configured (`output: 'export'`, `images.unoptimized: true`) producing HTML in `out/`
- Tailwind v4 theme with sage accent (#7C9A82), cream base (#FFFBF5), and stone text colors
- Playfair Display and Inter fonts loading with Vietnamese diacritics (ă, ơ, ư, đ) support
- All site content centralized in `src/lib/constants.ts` for future i18n

## Task Commits

Each task was committed atomically:

1. **Task 1: Initialize Next.js Project with Static Export** - `abb7a16` (feat)
2. **Task 2: Configure Tailwind v4 Theme, Fonts, and Content Constants** - `ee2d360` (feat)

## Files Created/Modified

- `next.config.ts` — Static export configuration (`output: 'export'`, `images.unoptimized`)
- `src/app/globals.css` — Tailwind v4 @theme with custom colors (cream, warm, sage, stone) and font families
- `src/app/layout.tsx` — Root layout with Playfair Display + Inter fonts, `lang="vi"`, metadata
- `src/lib/constants.ts` — Exports: `teacherInfo`, `services`, `navLinks`, `heroContent`
- `public/images/hero-placeholder.svg` — 1200x800 sage green placeholder
- `public/images/about-placeholder.svg` — 600x800 warm-50 placeholder
- `package.json` — Updated name to "dua-yoga"

## Decisions Made

- Used `next.config.ts` (TypeScript) instead of `next.config.js` — matches create-next-app v16 scaffold output
- Sage green (#7C9A82) as accent color — selected for yoga/wellness aesthetic, works with cream neutral base
- Playfair Display + Inter font pairing — editorial serif + clean sans-serif, excellent Vietnamese diacritics
- All content centralized in `constants.ts` — enables future i18n without refactoring components

## Deviations from Plan

None - plan executed exactly as written.

## Issues Encountered

None.

## User Setup Required

None - no external service configuration required.

## Next Phase Readiness

- Project foundation complete, ready for component development (Plan 02: Hero + About sections)
- Static export produces working HTML in `out/` directory
- Design tokens (colors, fonts, spacing) available via Tailwind utility classes
- Content constants ready for component consumption

---
*Phase: 01-core-content*
*Completed: 2026-06-14*
