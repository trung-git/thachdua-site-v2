# Technology Stack

**Project:** Dừa Yoga — Landing Page
**Researched:** 2026-06-14
**Overall confidence:** HIGH (verified against official docs)

## Recommended Stack

### Core Framework

| Technology | Version | Purpose | Why |
|------------|---------|---------|-----|
| **Astro** | `^6.0` | Static site generator | Purpose-built for content-driven sites. Ships zero JS by default (islands architecture). Built-in i18n routing, image optimization, SEO sitemap. Astro 5.0 introduced Content Layer + Server Islands; v6.0 (current stable) requires Node 22.12+, Vite 7, Zod 4. The `<Image />` component auto-generates WebP/AVIF with responsive `srcset` — critical for mobile-first yoga photography. |
| **Node.js** | `>=22.12.0` | Runtime | Required by Astro v6. Node 18/20 dropped. Use `.nvmrc` to pin version. |

**Why Astro over alternatives:**
- **Next.js**: Overkill for a static landing page. Brings React bundle overhead (~40KB min) for zero interactive components. Server-side features are wasted here.
- **Hugo**: Go-based, fast builds, but templating is painful. No built-in image optimization. i18n requires manual setup. No npm ecosystem.
- **11ty (Eleventy)**: Lightweight but lacks built-in image optimization, i18n routing, and component model. You'd assemble these yourself.
- **Gatsby**: Effectively abandoned. Build times are terrible. Plugin ecosystem is decaying.

### CSS & Styling

| Technology | Version | Purpose | Why |
|------------|---------|---------|-----|
| **Tailwind CSS** | `^4.3` | Utility-first CSS | v4.0 (Jan 2025) was a complete rewrite — CSS-first config, no `tailwind.config.js` needed, 10x faster builds via Oxide engine. v4.3 (May 2026) is current stable. Generates only used CSS → tiny bundles. Perfect for mobile-first responsive design. Astro has official Tailwind integration. |
| **@tailwindcss/typography** | `^4.x` | Prose styling | For blog posts, class descriptions, pricing tables. Provides beautiful defaults for long-form Vietnamese + English text. |

**Why Tailwind over alternatives:**
- **Vanilla CSS**: Too much boilerplate for a multi-page, responsive, bilingual site. No utility consistency.
- **Bootstrap**: Opinionated look, heavy bundle (~20KB min). Designed for apps, not marketing pages.
- **UnoCSS**: Good but smaller ecosystem, fewer learning resources for a personal project.

### Internationalization (i18n)

| Technology | Version | Purpose | Why |
|------------|---------|---------|-----|
| **Astro built-in i18n** | (part of Astro 6) | Route-based localization | Native `astro:i18n` module with `locales`, `defaultLocale`, `prefixDefaultLocale` config. Browser language detection via `Astro.preferredLocale`. File-based routing: `src/pages/vi/` and `src/pages/en/`. No extra package needed. |
| **JSON translation files** | — | UI string translations | Simple `{ "vi": {...}, "en": {...} }` files in `src/i18n/`. Import per-locale. No library needed for ~50-100 strings. |

**Approach:** Use Astro's `prefixDefaultLocale: true` so URLs are `/vi/` and `/en/`. Vietnamese is default locale (`defaultLocale: "vi"`). This gives SEO-friendly URLs for both languages and proper `hreflang` tags.

**Why NOT use a heavy i18n library (i18next, vue-i18n):**
- Only 2 languages, ~50-100 strings total
- No pluralization rules needed (Vietnamese doesn't have plurals)
- No dynamic content loading
- JSON files + Astro's built-in routing is simpler and faster

### Interactive Components

| Technology | Version | Purpose | Why |
|------------|---------|---------|-----|
| **Alpine.js** | `^3.x` | Lightweight interactivity | ~15KB. For mobile menu toggle, language switcher, image gallery lightbox, FAQ accordion. Ships as inline `<script>` — no build step. Perfect "just enough JS" for a landing page. |

**Why Alpine over alternatives:**
- **Vanilla JS**: Works but Alpine's declarative syntax (`x-show`, `x-on`) is cleaner for toggles and menus.
- **React/Vue/Svelte**: Full framework overhead for 3-4 interactive widgets. Wasteful.
- **HTMX**: Designed for server interactions. We have no server.

### Image & Media

| Technology | Version | Purpose | Why |
|------------|---------|---------|-----|
| **Astro `<Image />`** | (built-in) | Image optimization | Auto-generates WebP/AVIF, responsive `srcset`, lazy loading, CLS prevention. Uses Sharp under the hood. |
| **Astro `<Picture />`** | (built-in) | Multi-format images | Generates `<picture>` with multiple formats (AVIF → WebP → original fallback). |
| **YouTube/Vimeo embeds** | — | Video demos | Use `<iframe>` with `loading="lazy"`. Host videos on YouTube (free, CDN, auto-quality). Self-hosting video is expensive and complex. |

**Image strategy:**
- Store source images in `src/assets/` (Astro optimizes at build time)
- Store favicon/OG images in `public/` (served as-is)
- Target: WebP at 80% quality, max 1200px width for hero images
- Use `layout="responsive"` for all content images (auto-generates `srcset`)

### Fonts

| Technology | Version | Purpose | Why |
|------------|---------|---------|-----|
| **Google Fonts** | — | Vietnamese typography | Free, CDN-served, excellent Vietnamese diacritic support. Use `font-display: swap` for performance. |

**Recommended font pairing for yoga brand:**
- **Headings:** Playfair Display or Lora (elegant, warm)
- **Body:** Inter or Nunito (clean, excellent Vietnamese support)
- Both have full Vietnamese character sets (ă, ơ, ư, đ, etc.)

**Why NOT self-host fonts:** For a personal project, Google Fonts CDN is simpler. Self-hosting saves ~100ms but adds build complexity.

### SEO & Meta

| Technology | Version | Purpose | Why |
|------------|---------|---------|-----|
| **@astrojs/sitemap** | (official integration) | XML sitemap | Auto-generates sitemap for both `/vi/` and `/en/` routes. |
| **Astro `<head>` meta** | (built-in) | Open Graph, JSON-LD | Manual meta tags in layout. No library needed for a single-page landing. |

**SEO checklist (built into stack):**
- Automatic `<link rel="canonical">` via Astro
- `<link rel="alternate" hreflang="vi">` and `hreflang="en"` via i18n config
- Open Graph + Twitter Card meta in layout
- JSON-LD structured data for LocalBusiness + Service
- Semantic HTML5 (`<main>`, `<section>`, `<article>`, `<nav>`)
- Automatic sitemap.xml generation

### Deployment

| Technology | Version | Purpose | Why |
|------------|---------|---------|-----|
| **Cloudflare Pages** | — | Static hosting | Free tier: unlimited bandwidth, 500 builds/month. Global CDN with edge nodes in Asia. Automatic HTTPS. Git integration (push to deploy). |
| **GitHub** | — | Source control + CI | Free. Triggers Cloudflare Pages builds on push. |

**Why Cloudflare Pages over alternatives:**
- **Vercel**: Free tier is generous but Cloudflare has better Asia-Pacific edge performance (important for Vietnamese users).
- **Netlify**: Similar to Cloudflare but bandwidth limits on free tier (100GB/mo).
- **GitHub Pages**: No edge CDN, slower in Asia, no preview deployments.

### Dev Tools

| Technology | Version | Purpose | Why |
|------------|---------|---------|-----|
| **TypeScript** | `^5.x` | Type safety | Astro has built-in TS support. Catches errors in component props, i18n keys, content schemas. |
| **Prettier** | `^3.x` | Code formatting | With `prettier-plugin-astro` and `prettier-plugin-tailwindcss`. Consistent code style. |
| **ESLint** | `^9.x` | Linting | With `eslint-plugin-astro`. Catches common mistakes. |

## Alternatives Considered

| Category | Recommended | Alternative | Why Not |
|----------|-------------|-------------|---------|
| Framework | Astro 6 | Next.js 15 | React bundle overhead for a static page. App Router complexity. |
| Framework | Astro 6 | Hugo | No npm ecosystem, painful templates, no image optimization. |
| CSS | Tailwind 4 | Vanilla CSS | Too much boilerplate for responsive + bilingual. |
| CSS | Tailwind 4 | Bootstrap | Heavy, opinionated look, not designed for marketing pages. |
| Interactivity | Alpine.js | React islands | Full framework for 3-4 toggles. Overkill. |
| Hosting | Cloudflare Pages | Vercel | Cloudflare has better Asia edge performance. |
| Hosting | Cloudflare Pages | GitHub Pages | No edge CDN, no preview deploys. |
| Video | YouTube embeds | Self-hosted | CDN costs, encoding complexity, player UX. |
| i18n | Astro built-in | i18next | Overkill for 2 languages, 50 strings. |

## Installation

```bash
# Create Astro project
npm create astro@latest dua-yoga -- --template minimal

# Install dependencies
cd dua-yoga
npm install

# Add Tailwind CSS (Astro integration)
npx astro add tailwind

# Add sitemap
npx astro add sitemap

# Add Alpine.js
npm install alpinejs

# Dev tools
npm install -D prettier prettier-plugin-astro prettier-plugin-tailwindcss eslint eslint-plugin-astro
```

## Project Structure

```
dua-yoga/
├── src/
│   ├── assets/           # Source images (Astro optimizes)
│   │   ├── hero/
│   │   ├── services/
│   │   └── gallery/
│   ├── components/       # Reusable Astro components
│   │   ├── Header.astro
│   │   ├── Hero.astro
│   │   ├── Services.astro
│   │   ├── Pricing.astro
│   │   ├── Gallery.astro
│   │   ├── Testimonials.astro
│   │   ├── Contact.astro
│   │   ├── Footer.astro
│   │   └── LanguageSwitcher.astro
│   ├── i18n/             # Translation files
│   │   ├── vi.json
│   │   └── en.json
│   ├── layouts/
│   │   └── BaseLayout.astro
│   └── pages/
│       ├── index.astro       # Redirects to /vi/
│       ├── vi/
│       │   └── index.astro   # Vietnamese landing page
│       └── en/
│           └── index.astro   # English landing page
├── public/
│   ├── favicon.svg
│   └── og-image.jpg
├── astro.config.mjs
├── tailwind.config.mjs   # Optional in Tailwind v4 (CSS-first config)
└── package.json
```

## Sources

- [Astro 5.0 announcement](https://astro.build/blog/astro-5/) — verified Content Layer, Server Islands, Vite 6 (Dec 2024)
- [Astro v6 upgrade guide](https://docs.astro.build/en/guides/upgrade-to/v6/) — verified Node 22, Vite 7, Zod 4 requirements
- [Astro i18n docs](https://docs.astro.build/en/guides/internationalization/) — verified built-in i18n routing, locales config, browser detection
- [Astro Images docs](https://docs.astro.build/en/guides/images/) — verified `<Image />`, `<Picture />`, responsive images, SVG components
- [Tailwind CSS v4.3 blog](https://tailwindcss.com/blog/tailwindcss-v4-3) — verified current stable version (May 2026)
- [Tailwind CSS v4.0 blog](https://tailwindcss.com/blog/tailwindcss-v4) — verified CSS-first config, Oxide engine (Jan 2025)
