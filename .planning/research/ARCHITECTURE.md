# Architecture Patterns — Dừa Yoga Landing Page

**Domain:** Single-page yoga instructor landing page
**Researched:** 2026-06-14
**Reference:** courtneywatts.com (analyzed structure and UX patterns)

---

## Recommended Architecture

**Pattern: Single-Page Scroll (SPA-like)**

A single HTML page with smooth-scrolling sections. No client-side routing needed. All content loads on initial visit; navigation jumps to section anchors.

```
┌─────────────────────────────────────────────────────────┐
│  NAV (sticky)                                           │
│  [Logo]  [Services] [About] [Pricing] [Contact]         │
├─────────────────────────────────────────────────────────┤
│  HERO                                                   │
│  Tagline + CTA button                                   │
├─────────────────────────────────────────────────────────┤
│  SERVICES (3 cards)                                     │
│  [Private 1:1] [Group 1:6] [Online]                     │
├─────────────────────────────────────────────────────────┤
│  ABOUT INSTRUCTOR                                       │
│  Photo + Bio + Credentials                              │
├─────────────────────────────────────────────────────────┤
│  GALLERY / DEMO                                         │
│  Images + Video embeds                                  │
├─────────────────────────────────────────────────────────┤
│  TESTIMONIALS                                           │
│  Social proof carousel                                  │
├─────────────────────────────────────────────────────────┤
│  PRICING (3 tiers)                                      │
│  [Single] [Package] [Unlimited]                         │
├─────────────────────────────────────────────────────────┤
│  CONTACT / BOOKING                                      │
│  Zalo + Messenger CTAs                                  │
├─────────────────────────────────────────────────────────┤
│  FOOTER                                                 │
│  Links + Social + Copyright                             │
└─────────────────────────────────────────────────────────┘
```

---

## Component Boundaries

| Component | Responsibility | Reads From | Writes To |
|-----------|---------------|------------|-----------|
| **Nav** | Section anchor links, sticky behavior | Static config | URL hash |
| **Hero** | First impression, tagline, primary CTA | Static content | — |
| **Services** | Display 3 service types with details | Static content | — |
| **About** | Instructor bio, photo, credentials | Static content | — |
| **Gallery** | Image grid + video player | Static assets (images, video URLs) | — |
| **Testimonials** | Social proof display (carousel/grid) | Static content | — |
| **Pricing** | Price cards with feature comparison | Static content | — |
| **Contact** | Zalo/Messenger booking CTAs | Static config (URLs) | External: Zalo, Messenger |
| **Footer** | Navigation, social links, legal | Static config | — |

**Key insight:** This is a **static content site** — no database, no API, no state management. All components are presentational, reading from static data files or hardcoded content.

---

## Data Flow

```
Static Data Files (content.json)
         │
         ▼
    ┌─────────┐
    │  Build   │  (Astro/Next.js static generation)
    │  Step    │
    └────┬────┘
         │
         ▼
    ┌─────────┐
    │   HTML   │  (pre-rendered at build time)
    │  Output  │
    └────┬────┘
         │
         ▼
    ┌─────────┐
    │  Browser │  (static hosting: Vercel/Netlify/GitHub Pages)
    │  Client  │
    └─────────┘
         │
         ▼
    External Services (Zalo, Messenger — link-only, no API integration)
```

**No runtime data flow.** The only "external" interaction is clicking booking links that open Zalo/Messenger in a new tab.

---

## Section-by-Section Architecture

### 1. Navigation (Sticky)

```
┌─────────────────────────────────────────┐
│ 🥥 Logo    Services  About  Pricing  📞 │
└─────────────────────────────────────────┘
```

- Sticky top with backdrop blur
- Smooth scroll to `#services`, `#about`, `#pricing`, `#contact`
- Mobile: hamburger menu

### 2. Hero Section

```
┌─────────────────────────────────────────┐
│                                         │
│   Dừa Yoga                              │
│   "Balance your body, calm your mind"   │
│                                         │
│   [Explore Services]                    │
│                                         │
│   🎥 Background video or hero image     │
│                                         │
└─────────────────────────────────────────┘
```

- Full-viewport height
- Background: looping yoga video (muted) or high-res hero image
- Single primary CTA → scrolls to Services

### 3. Services Section (3 Cards)

```
┌─────────────────────────────────────────┐
│  Choose Your Practice                   │
│                                         │
│  ┌─────────┐ ┌─────────┐ ┌─────────┐   │
│  │ 1:1     │ │ Group   │ │ Online  │   │
│  │ Private │ │ 1:6     │ │ Class   │   │
│  │         │ │         │ │         │   │
│  │ Details │ │ Details │ │ Details │   │
│  │ [Book]  │ │ [Book]  │ │ [Book]  │   │
│  └─────────┘ └─────────┘ └─────────┘   │
└─────────────────────────────────────────┘
```

- 3-column grid (responsive: stack on mobile)
- Each card: image, service name, description, benefit bullets, CTA
- CTA links to Contact section

### 4. About Instructor

```
┌─────────────────────────────────────────┐
│  ┌──────────┐  Meet Thạch Thảo         │
│  │          │                           │
│  │  Photo   │  Bio paragraph 1          │
│  │          │  Bio paragraph 2          │
│  │          │                           │
│  └──────────┘  ✅ Certified RYT 200     │
│                ✅ 5+ years experience    │
│                ✅ Specialized in ...     │
└─────────────────────────────────────────┘
```

- 2-column layout (image left, text right)
- Credentials as badge/chip list
- Photo: professional, warm, natural setting

### 5. Gallery / Demo

```
┌─────────────────────────────────────────┐
│  See the Practice                       │
│                                         │
│  ┌─────┐ ┌─────┐ ┌─────┐ ┌─────┐      │
│  │     │ │     │ │     │ │     │      │
│  │ img │ │ img │ │ vid │ │ img │      │
│  └─────┘ └─────┘ └─────┘ └─────┘      │
│                                         │
│  ┌─────┐ ┌─────┐ ┌─────┐ ┌─────┐      │
│  │ vid │ │ img │ │ img │ │ img │      │
│  └─────┘ └─────┘ └─────┘ └─────┘      │
└─────────────────────────────────────────┘
```

- Masonry or uniform grid
- Images: WebP optimized, lazy-loaded
- Videos: YouTube/Vimeo embed or self-hosted with `<video>`
- Lightbox on click

### 6. Testimonials

```
┌─────────────────────────────────────────┐
│  What Students Say                      │
│                                         │
│  ┌─────────────────────────────────┐    │
│  │  ⭐⭐⭐⭐⭐                        │    │
│  │  "Thảo's classes changed my..." │    │
│  │  — Minh, Office Worker          │    │
│  └─────────────────────────────────┘    │
│                                         │
│     ○ ● ○ ○                            │
└─────────────────────────────────────────┘
```

- Carousel with auto-rotate
- Each card: quote, name, context (office worker / beginner / etc.)
- Star rating visual

### 7. Pricing Section (3 Tiers)

```
┌─────────────────────────────────────────┐
│  Pricing                                │
│                                         │
│  ┌─────────┐ ┌──────────┐ ┌─────────┐  │
│  │ Single  │ │ Package  │ │ Monthly │  │
│  │ Session │ │ (10x)    │ │ Unlimited│  │
│  │         │ │ POPULAR  │ │         │  │
│  │ 500k VND│ │ 4.5M VND │ │ 2M VND  │  │
│  │         │ │          │ │         │  │
│  │ Features│ │ Features │ │ Features│  │
│  │         │ │          │ │         │  │
│  │ [Book]  │ │ [Book]   │ │ [Book]  │  │
│  └─────────┘ └──────────┘ └─────────┘  │
└─────────────────────────────────────────┘
```

- 3-column grid, middle card highlighted (most popular)
- Feature comparison list per tier
- CTA → Contact section (Zalo/Messenger)

### 8. Contact / Booking

```
┌─────────────────────────────────────────┐
│  Ready to Start?                        │
│                                         │
│  ┌─────────┐    ┌─────────────┐        │
│  │  💬 Zalo │    │ 📱 Messenger │        │
│  │  Chat    │    │  Chat        │        │
│  └─────────┘    └─────────────┘        │
│                                         │
│  📍 Location: District X, HCMC         │
│  📧 Email: ...                          │
└─────────────────────────────────────────┘
```

- Two large CTA buttons (Zalo, Messenger)
- Links open in new tab to pre-filled messages
- Optional: embedded map for location

### 9. Footer

```
┌─────────────────────────────────────────┐
│  🥥 Dừa Yoga                            │
│                                         │
│  Quick Links    Connect    Newsletter   │
│  - Services     - Zalo     [email]      │
│  - About        - Messenger [Subscribe] │
│  - Pricing      - Facebook             │
│  - Contact      - Instagram             │
│                                         │
│  © 2026 Dừa Yoga. All rights reserved.  │
└─────────────────────────────────────────┘
```

---

## Build Order (Dependencies)

```
Phase 1: Foundation
  ├── Project setup (Astro/Next.js + Tailwind)
  ├── Global styles (colors, typography, spacing)
  └── Layout shell (Nav + Footer)

Phase 2: Content Sections (no dependencies between these)
  ├── Hero section
  ├── Services section
  ├── About section
  └── Pricing section

Phase 3: Interactive Elements
  ├── Gallery with lightbox
  ├── Testimonials carousel
  └── Contact CTAs (Zalo/Messenger links)

Phase 4: Polish
  ├── Mobile responsive pass
  ├── Smooth scroll behavior
  ├── Animations (fade-in on scroll)
  ├── Image optimization (WebP, lazy loading)
  └── SEO meta tags + OG images
```

**Why this order:**
1. Foundation first — layout shell lets you see structure immediately
2. Content sections are independent — can be built in parallel
3. Interactive elements depend on content sections being present
4. Polish is always last — optimizes what exists

---

## Component Implementation (Astro Recommended)

```astro
---
// src/pages/index.astro
import Nav from '../components/Nav.astro';
import Hero from '../components/Hero.astro';
import Services from '../components/Services.astro';
import About from '../components/About.astro';
import Gallery from '../components/Gallery.astro';
import Testimonials from '../components/Testimonials.astro';
import Pricing from '../components/Pricing.astro';
import Contact from '../components/Contact.astro';
import Footer from '../components/Footer.astro';
import { content } from '../data/content';
---

<Nav />
<main>
  <Hero data={content.hero} />
  <Services data={content.services} />
  <About data={content.about} />
  <Gallery data={content.gallery} />
  <Testimonials data={content.testimonials} />
  <Pricing data={content.pricing} />
  <Contact data={content.contact} />
</main>
<Footer data={content.footer} />
```

**Data file structure:**
```
src/data/
  content.ts    — All text, prices, URLs in one place
  images.ts     — Image paths and alt text
```

---

## Anti-Patterns to Avoid

| Anti-Pattern | Why Bad | Instead |
|-------------|---------|---------|
| Separate page per section | Unnecessary complexity for a landing page | Single scroll page |
| Client-side routing (React Router) | No need — it's one page | Anchor links + smooth scroll |
| Dynamic data fetching | No API to call | Static content in data files |
| Heavy JS framework (React full) | Overkill for static content | Astro (zero JS by default) |
| Embedded booking widget | External booking tools add complexity | Simple Zalo/Messenger links |
| Auto-playing video with sound | Bad UX, annoys visitors | Muted background video or click-to-play |

---

## Scalability Considerations

| Concern | Current (Landing Page) | Future (If Grows) |
|---------|----------------------|-------------------|
| Content updates | Edit data file, rebuild | Add headless CMS (Sanity/Contentful) |
| Booking | Zalo/Messenger links | Integrate Calendly or custom booking |
| Payments | Manual via chat | Stripe/PayOS integration |
| Blog/Articles | Not needed | Add `/blog` route with Astro content collections |
| Multi-language | Vietnamese only | Astro i18n with `/en` prefix |

---

## Sources

- courtneywatts.com (reference site analyzed 2026-06-14)
- Astro documentation for static site patterns
- Standard landing page UX conventions for service-based businesses
