# Feature Landscape

**Domain:** Yoga instructor personal landing page
**Researched:** 2026-06-14
**Reference sites:** courtneywatts.com, yogawithadriene.com, yogainternational.com, yogawithkassandra.com, brettlarkin.com

## Table Stakes

Features users expect. Missing = product feels incomplete or untrustworthy.

| Feature | Why Expected | Complexity | Notes |
|---------|--------------|------------|-------|
| **Hero section with tagline** | First impression; communicates what this is in 3 seconds | Low | Courtney Watts: "Rooted in presence. Powered by movement." Adriene: "Yoga is really the art of waking up." |
| **About the instructor** | Trust builder; students want to know WHO is teaching them | Low | Photo + bio + credentials. Courtney Watts has dedicated "Meet Courtney" section. Brett Larkin has personal story. |
| **Services/Programs display** | Core purpose — visitors need to know what's offered | Med | Cards with image, short description, duration. Courtney uses 6 program cards with images. |
| **Pricing table** | Reduces friction; office workers want to know cost before contacting | Med | Courtney: clear monthly/yearly plans + individual programs. Transparency is standard in 2026. |
| **Contact/CTA button** | Conversion point — how to actually book | Low | Must be prominent, repeated. Courtney: "Start Today" in header + footer. |
| **Mobile responsive** | 60%+ traffic is mobile; Vietnamese users skew even higher | Med | All reference sites are fully responsive. Non-negotiable. |
| **Social media links** | Expected credibility signal | Low | Instagram, Facebook minimum. All reference sites have footer social links. |
| **Footer with essential info** | Navigation, copyright, contact details | Low | All sites have structured footer with quick links + contact. |

## Differentiators

Features that set Dừa Yoga apart. Not expected, but valued and competitive advantage.

| Feature | Value Proposition | Complexity | Notes |
|---------|-------------------|------------|-------|
| **Video demo embeds** | Shows teaching style before booking — huge trust builder | Med | PROJECT.md mentions video demos available. Courtney uses video backgrounds. Kassandra has YouTube embeds. Use YouTube/Vimeo embed (free hosting). |
| **Segment-specific landing sections** | Office workers vs beginners vs advanced feel "spoken to" | Med | Brett Larkin segments by life situation (working full-time, injured, retired). Dừa Yoga should segment by: dân văn phòng, người mới, người tập lâu năm. |
| **Bilingual (VI + EN)** | Serves both Vietnamese and international students | High | Not seen on most Western sites. Major differentiator for HCMC market. Requires language switcher + content duplication. |
| **Anatomy knowledge showcase** | Positions Thảo as expert, not generic instructor | Med | Brett Larkin has "Doctor's Roundtable" for healthcare credibility. Dừa Yoga can show anatomy-focused approach with educational content snippets. |
| **Results/metrics display** | "70% re-enrollment, 30% pain reduction after 10 sessions" — quantified proof | Low | PROJECT.md has these stats. Display prominently. Brett Larkin shows "3,000+ certified teachers from 30 countries." |
| **Embedded video intro from instructor** | Personal connection before meeting; shows personality | Med | Courtney has professional video. A short self-intro video from Thảo builds trust faster than text. |
| **Zalo/Messenger deep link** | Frictionless booking for Vietnamese users | Low | Custom URL schemes: `https://zalo.me/<number>` and `m.me/<page>`. No backend needed. |
| **Location/map embed** | For in-person classes, students need to know WHERE | Low | Google Maps embed for small group / private session location. |

## Anti-Features

Features to explicitly NOT build. Each has a reason and alternative.

| Anti-Feature | Why Avoid | What to Do Instead |
|--------------|-----------|-------------------|
| **Online payment/checkout** | PROJECT.md explicitly defers this; adds complexity, tax/legal overhead | Use Zalo/Messenger for booking + bank transfer for payment |
| **Blog/content hub** | No content yet; maintenance burden for solo instructor | Defer to future milestone. Use YouTube/Instagram for content distribution instead. |
| **CMS/admin panel** | Overkill for a single-instructor static site | Edit content directly in code. Use markdown or simple config file for pricing updates. |
| **User accounts/login** | No self-service booking system; adds auth complexity | Zalo/Messenger handles all student communication |
| **Class scheduling calendar** | Requires backend, availability management | Use Zalo/Messenger for scheduling. Show general availability (e.g., "Mon-Fri 7am-9pm") as text. |
| **E-commerce / merchandise** | Not a core offering; distracts from services | Defer entirely |
| **Testimonials section (now)** | No testimonials yet; fake testimonials destroy trust | Add in future milestone when real testimonials exist. PROJECT.md already defers this. |
| **Complex animations/parallax** | Slows load time on mobile; Vietnamese internet can be spotty | Use subtle CSS transitions only. Prioritize fast load over visual effects. |
| **Multi-page navigation** | Landing page = single page. Multi-page adds complexity without value for this stage. | Single-page with smooth scroll anchors (#about, #services, #pricing, #contact) |
| **Newsletter signup** | No email marketing system yet; adds integration complexity | Defer. Use social media follows instead. |

## Feature Dependencies

```
Hero Section → (standalone, no dependencies)
About Instructor → (standalone, needs photo + bio content)
Services Display → (standalone, needs service descriptions + images)
Pricing Table → (standalone, needs pricing data)
Video Demos → depends on YouTube/Vimeo hosting
Segment Sections → depends on Services Display (references service types)
Bilingual → affects ALL other features (doubles content)
Contact CTA → depends on Zalo/Messenger URLs
Results Metrics → (standalone, needs verified stats)
Location Map → (standalone, needs physical address)
```

## Content Inventory (from PROJECT.md)

| Content | Status | Used In |
|---------|--------|---------|
| Instructor photo | Available | Hero, About |
| Yoga practice images | Available | Hero, Services, Gallery |
| Video demos | Available | Video section, Services |
| Bio + credentials | Available (in PROJECT.md) | About section |
| Service descriptions | Available (Private 1:1, Group 1:6, Online) | Services section |
| Pricing data | Needed from instructor | Pricing table |
| Testimonials | NOT available | Deferred |
| Blog content | NOT available | Deferred |

## MVP Recommendation

**Phase 1 — Core Landing Page (Table Stakes):**
1. Hero section with tagline + primary CTA
2. About instructor (photo, bio, credentials, results metrics)
3. Services display (3 cards: Private 1:1, Group 1:6, Online)
4. Pricing table (needs data from Thảo)
5. Contact section with Zalo/Messenger buttons
6. Mobile responsive layout
7. Footer with social links

**Phase 2 — Differentiators:**
1. Video demo embeds (YouTube/Vimeo)
2. Segment-specific sections (dân văn phòng / người mới / advanced)
3. Instructor video intro
4. Location map embed

**Phase 3 — Bilingual:**
1. Language switcher (VI ↔ EN)
2. Translate all content
3. SEO meta tags for both languages

**Defer to future milestones:**
- Testimonials (when real ones exist)
- Blog/content hub
- Online booking system
- Newsletter signup

## Sources

| Source | Type | Confidence |
|--------|------|------------|
| courtneywatts.com | Reference site (primary) | HIGH — directly referenced in PROJECT.md |
| yogawithadriene.com | Ecosystem reference | HIGH — 12M+ subscriber benchmark |
| yogainternational.com | Platform reference | HIGH — membership model patterns |
| yogawithkassandra.com | Individual instructor reference | HIGH — similar scale to Dừa Yoga |
| brettlarkin.com | Training-focused instructor | MEDIUM — different business model but good UI patterns |
