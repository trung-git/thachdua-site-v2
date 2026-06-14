# Project Research Summary

**Project:** Dừa Yoga — Landing Page
**Domain:** Yoga instructor personal brand / service business
**Researched:** 2026-06-14
**Confidence:** HIGH

## Executive Summary

Dừa Yoga is a bilingual (Vietnamese + English) landing page for Thạch Thảo, a yoga instructor in Ho Chi Minh City targeting office workers, beginners, and intermediate practitioners. This is a **static content site** — no database, no API, no user accounts. The entire product is a single-page scroll with 8-9 sections, Zalo/Messenger booking links, and zero runtime JavaScript beyond lightweight Alpine.js interactivity for menus and toggles.

The recommended stack is **Astro 6 + Tailwind CSS 4 + Alpine.js**, deployed to **Cloudflare Pages**. Astro is purpose-built for content-driven static sites: zero JS by default, built-in image optimization (WebP/AVIF with responsive srcset), built-in i18n routing, and SEO sitemap generation. This stack produces a site that loads in under 1 second on Vietnamese 4G networks — critical since 80%+ of target users browse on mobile. The total JS payload is ~15KB (Alpine.js only), compared to ~40KB+ if React were involved.

The biggest risks are **content-related, not technical**: using stock photos instead of the real instructor, hiding behind yoga jargon that alienates beginners, and failing to make the Zalo/Messenger booking path crystal clear. The site must be designed mobile-first (375px starting point), every section must answer "what does this mean for a beginner?", and the instructor's real photos and personality must be front-and-center. Pricing must be visible (not hidden behind "contact us"), and at least 3-5 testimonials should be collected before launch.

## Key Findings

### Recommended Stack

See [STACK.md](./STACK.md) for full analysis.

**Core technologies:**
- **Astro 6** — Static site generator with zero-JS default, built-in i18n routing, auto image optimization. Purpose-built for this exact use case. Ships HTML + CSS, no framework runtime.
- **Tailwind CSS 4.3** — Utility-first CSS with CSS-first config (no tailwind.config.js), 10x faster builds via Oxide engine. Generates only used CSS for tiny bundles. Perfect for mobile-first responsive design.
- **Alpine.js 3.x** — ~15KB for mobile menu toggle, language switcher, lightbox, FAQ accordion. Declarative syntax without framework overhead. No build step needed.
- **Cloudflare Pages** — Free static hosting with Asia-Pacific edge CDN (fast for Vietnamese users), unlimited bandwidth, git-push deploy.

**Key version requirements:**
- Node.js >= 22.12.0 (required by Astro 6)
- Astro 6 requires Vite 7, Zod 4

### Expected Features

See [FEATURES.md](./FEATURES.md) for full analysis.

**Must have (table stakes):**
- Hero section with tagline + primary CTA — first impression in 3 seconds
- About instructor (photo, bio, credentials) — trust builder, the instructor IS the product
- Services display (Private 1:1, Group 1:6, Online) — core purpose
- Pricing table — transparency reduces friction; office workers want to know cost before contacting
- Contact/CTA buttons (Zalo + Messenger) — conversion point, must be prominent and repeated
- Mobile responsive — 60%+ traffic is mobile; Vietnamese users skew even higher
- Social media links (Instagram, Facebook minimum)
- Footer with essential info

**Should have (differentiators):**
- Video demo embeds (YouTube/Vimeo) — shows teaching style before booking, huge trust builder
- Segment-specific sections (dân văn phòng / người mới / advanced) — visitors feel "spoken to"
- Bilingual (VI + EN) — serves both Vietnamese and international students in HCMC
- Results/metrics display — "70% re-enrollment, 30% pain reduction after 10 sessions"
- Zalo/Messenger deep links with micro-copy — frictionless booking for Vietnamese users
- Location/map embed — students need to know WHERE classes happen

**Defer (v2+):**
- Testimonials section (no real testimonials yet — fake ones destroy trust)
- Blog/content hub (no content yet; maintenance burden)
- Online payment/checkout (explicitly deferred in PROJECT.md)
- User accounts / CMS / admin panel (overkill for static site)
- Newsletter signup (no email marketing system yet)

### Architecture Approach

See [ARCHITECTURE.md](./ARCHITECTURE.md) for full analysis.

**Pattern: Single-Page Scroll** — One HTML page with smooth-scrolling anchor navigation. No client-side routing. All content pre-rendered at build time. The only external interaction is clicking Zalo/Messenger links that open in a new tab.

**Component structure (9 sections, top to bottom):**
1. **Nav** (sticky) — section anchor links, mobile hamburger
2. **Hero** — full-viewport, tagline + CTA, background image/video
3. **Services** — 3-column card grid (Private, Group, Online)
4. **About** — 2-column (photo + bio + credentials)
5. **Gallery/Demo** — image grid + video embeds with lightbox
6. **Testimonials** — carousel (deferred to v2)
7. **Pricing** — 3-tier cards, middle highlighted as "popular"
8. **Contact** — Zalo + Messenger CTA buttons + location
9. **Footer** — quick links, social, copyright

**Data flow:** Static data files → Astro build → pre-rendered HTML → Cloudflare CDN → browser. No runtime data fetching.

### Critical Pitfalls

See [PITFALLS.md](./PITFALLS.md) for full analysis.

1. **Stock Photo Syndrome** — MUST use real photos of instructor Thảo. Even phone-quality real photos beat professional stock. Budget a 1-hour photoshoot before launch. If visitors can't picture the instructor, they won't book.

2. **Yoga Jargon Wall** — Always pair Sanskrit with plain Vietnamese. Use benefit-first language ("Giảm đau lưng dân văn phòng" not "Hatha Yoga cho người mới"). Test copy with someone who has NEVER done yoga.

3. **Missing Booking Bridge** — Each CTA must explain what happens next: "Nhắn Zalo — Thảo phản hồi trong 30 phút". Show BOTH Zalo and Messenger. Include pre-written message template. Hesitation kills conversions.

4. **Service Soup** — Don't list all 3 services equally. Lead with 1:1 Private as primary. Use a decision guide: "Mới bắt đầu? → 1:1. Có nhóm bạn? → Nhóm nhỏ. Ở xa? → Online."

5. **Mobile-Second Design** — Design mobile-first at 375px. Test on actual phones over 4G. Hero image must load in <200KB. Zalo deep-links must work on mobile.

## Implications for Roadmap

Based on research, suggested phase structure:

### Phase 1: Project Foundation & Core Layout
**Rationale:** Every other phase depends on the project existing with correct config, styles, and layout shell. Astro setup, Tailwind, i18n config, and the Nav+Footer shell must be solid before content sections.
**Delivers:** Working Astro project with Tailwind, i18n routing (/vi/ and /en/), global styles (colors, typography, spacing), sticky Nav with language switcher, Footer with social links.
**Addresses:** Mobile responsive (design constraint from day 1), Footer, Social links, Vietnamese font support
**Avoids:** Pitfall 14 (Vietnamese diacritic rendering — test fonts early), Pitfall 6 (mobile-first is a design constraint, not a feature)

### Phase 2: Content Sections (Hero, About, Services, Pricing)
**Rationale:** These are the table-stakes sections with no interactivity dependencies. They can be built in parallel once the layout shell exists. This is the "meat" of the landing page.
**Delivers:** Hero with tagline + CTA, About instructor (photo + bio + credentials), Services display (3 cards), Pricing table (3 tiers), Results metrics display
**Addresses:** All table-stakes features except Contact CTAs
**Avoids:** Pitfall 1 (real photos required — photoshoot is a dependency), Pitfall 2 (copy must be beginner-friendly), Pitfall 4 (service hierarchy — lead with 1:1), Pitfall 7 (About section must connect, not just list credentials), Pitfall 8 (pricing must be visible)

### Phase 3: Interactive Elements & CTAs
**Rationale:** Gallery lightbox, video embeds, and Zalo/Messenger booking CTAs depend on content sections being present. The booking flow must be carefully designed with micro-copy.
**Delivers:** Gallery with lightbox, Video demo embeds (YouTube/Vimeo), Contact section with Zalo + Messenger buttons (with micro-copy + pre-written messages), Segment-specific sections
**Addresses:** Video demos, Contact/CTA, Zalo deep links, Segment sections
**Avoids:** Pitfall 3 (booking bridge — CTA flow must be crystal clear), Pitfall 10 (address beginner flexibility fear in segment sections)

### Phase 4: Bilingual (VI ↔ EN)
**Rationale:** Bilingual affects ALL content — it doubles the content work. Do this after all sections exist in Vietnamese so you're translating a complete page, not chasing incomplete sections.
**Delivers:** Language switcher, all content translated to English, SEO meta tags for both languages, hreflang tags, English copy validated for clarity
**Addresses:** Bilingual differentiator
**Avoids:** Pitfall 2 (English version must also avoid jargon — different audience, same clarity need)

### Phase 5: Polish & SEO & Launch
**Rationale:** Optimization pass on everything that exists. Image compression, lazy loading, meta tags, OG images, sitemap. This is always last.
**Delivers:** Optimized images (WebP, <200KB hero), lazy loading, Open Graph + Twitter Card meta, JSON-LD structured data, sitemap.xml, smooth scroll animations (subtle, <300ms), favicon
**Addresses:** Performance, SEO, social sharing
**Avoids:** Pitfall 11 (slow image loading), Pitfall 12 (missing meta tags), Pitfall 13 (animation overload — keep it subtle)

### Phase Ordering Rationale

- **Foundation first** — layout shell with i18n config lets you see structure and test Vietnamese rendering immediately
- **Content sections second** — these are independent and can be built in parallel; they're the core value
- **Interactive elements third** — depend on content sections being present; CTA flow needs the full page context
- **Bilingual fourth** — translating a complete page is more efficient than translating fragments
- **Polish last** — optimizes what exists; premature optimization wastes effort on sections that might change

### Research Flags

Phases likely needing deeper research during planning:
- **Phase 4 (Bilingual):** Astro i18n routing config, hreflang implementation, content duplication strategy — need to verify Astro 6 i18n specifics

Phases with standard patterns (skip research-phase):
- **Phase 1 (Foundation):** Well-documented Astro + Tailwind setup patterns
- **Phase 2 (Content Sections):** Standard static content components
- **Phase 5 (Polish):** Standard optimization checklist

## Confidence Assessment

| Area | Confidence | Notes |
|------|------------|-------|
| Stack | HIGH | Verified against official Astro 6 docs, Tailwind 4.3 blog, Alpine.js docs. Version requirements confirmed. |
| Features | HIGH | Based on analysis of 5 reference sites (courtneywatts.com, yogawithadriene.com, etc.) + PROJECT.md requirements |
| Architecture | HIGH | Standard single-page scroll pattern. courtneywatts.com analyzed as reference. All components are presentational/static. |
| Pitfalls | HIGH | Cross-referenced with Unbounce conversion research, Yoga Alliance standards, Vietnamese digital behavior patterns |

**Overall confidence:** HIGH

### Gaps to Address

- **Pricing data:** Not yet provided by instructor Thảo. Pricing table needs actual numbers. Collect during Phase 2 planning.
- **Testimonials:** Explicitly deferred — no real testimonials exist yet. Phase 5 or future milestone.
- **Content copy:** Vietnamese and English copy needs to be written/reviewed by a non-yogi for clarity. This is a Phase 2-4 task.
- **Photoshoot dependency:** Real instructor photos are required before Phase 2 can complete. Schedule before or during Phase 1.
- **Physical location details:** District/address needed for Contact section and location embed. Collect during planning.

## Sources

### Primary (HIGH confidence)
- [Astro 6 docs](https://docs.astro.build/) — i18n routing, image optimization, static site generation
- [Tailwind CSS 4.3 blog](https://tailwindcss.com/blog/tailwindcss-v4-3) — current stable version, CSS-first config
- courtneywatts.com — reference site analyzed for landing page structure and UX patterns

### Secondary (HIGH confidence)
- [yogawithadriene.com](https://yogawithadriene.com) — ecosystem benchmark (12M+ subscribers)
- [yogawithkassandra.com](https://yogawithkassandra.com) — individual instructor reference
- [brettlarkin.com](https://brettlarkin.com) — training-focused instructor UI patterns
- Vietnamese digital behavior patterns — Zalo 80%+ penetration, mobile-first browsing
- Unbounce landing page conversion research

### Tertiary (MEDIUM confidence)
- Pricing strategy — general landing page research, less yoga-specific data
- Segment-specific section effectiveness — inferred from reference sites, not A/B tested

---
*Research completed: 2026-06-14*
*Ready for roadmap: yes*
