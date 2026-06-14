# Roadmap: Dừa Yoga Landing Page

## Overview

Landing page cho Dừa Yoga — thương hiệu yoga của Nguyễn Thạch Thảo. Trang web tĩnh giới thiệu giáo viên, dịch vụ, bảng giá, và cho phép đặt lịch qua Zalo. Xây dựng theo vertical slices: nội dung cốt lõi → giá & đặt lịch → polish đa ngôn ngữ & hiệu suất.

## Phases

**Phase Numbering:**

- Integer phases (1, 2, 3): Planned milestone work
- Decimal phases (2.1, 2.2): Urgent insertions (marked with INSERTED)

Decimal phases appear between their surrounding integers in numeric order.

- [x] **Phase 1: Core Content** - Hero, Navigation, About the teacher, Services overview (completed 2026-06-14)
- [ ] **Phase 2: Pricing & Gallery** - Service pricing with booking CTAs, yoga photo gallery, contact/location
- [ ] **Phase 3: Polish & Ship** - Bilingual (VI/EN), mobile optimization, performance, SEO

## Phase Details

### Phase 1: Core Content

**Goal**: Users can see the teacher's identity, credentials, and service offerings — the complete first impression
**Depends on**: Nothing (first phase)
**Requirements**: NAV-01, NAV-02, ABT-01, ABT-02, SRV-01, SRV-02, SRV-03
**Success Criteria** (what must be TRUE):

  1. User sees Hero section with headline, subheadline, and CTA button for booking
  2. User sees sticky navigation bar that stays visible when scrolling, with hamburger menu on mobile
  3. User reads teacher introduction with profile, experience, and 200-Hour Yoga Alliance certification
  4. User sees professional photo of the teacher
  5. User sees 3 services (Private 1:1, Small Group 1:6, Online Class) with short descriptions, with Small Group highlighted as primary

**Plans:** 3/3 plans complete

Plans:

- [x] 01-01-PLAN.md — Project scaffold: Next.js + Tailwind v4 + fonts + content constants
- [x] 01-02-PLAN.md — Core components: Navigation, Hero, About, Services, Footer
- [x] 01-03-PLAN.md — Page composition: wire components, accessibility, static export verification

### Phase 2: Pricing & Gallery

**Goal**: Users can see pricing, book via Zalo, and browse yoga photos — the complete revenue path
**Depends on**: Phase 1
**Requirements**: PRC-01, PRC-02, Gal-01, CON-01, CON-02
**Success Criteria** (what must be TRUE):

  1. User sees specific pricing for each service package
  2. User sees CTA button to book via Zalo/Messenger for each package
  3. User browses yoga photo gallery of the teacher
  4. User clicks Zalo link to be directed to teacher's personal Zalo
  5. User sees location info (studio + home teaching)

**Plans**: TBD

Plans:

- [ ] 02-01: TBD

### Phase 3: Polish & Ship

**Goal**: Site is bilingual, fast, mobile-optimized, and discoverable on Google — ready to ship
**Depends on**: Phase 2
**Requirements**: NAV-03, MBL-01, PRF-01, SEO-01
**Success Criteria** (what must be TRUE):

  1. User switches between Vietnamese and English via language switcher
  2. User experiences smooth mobile-first design on phone
  3. User sees page load under 3 seconds on 4G connection
  4. User finds the page on Google when searching "yoga quận [X]" or "yoga teacher HCMC"

**Plans**: TBD

Plans:

- [ ] 03-01: TBD

## Progress

**Execution Order:**
Phases execute in numeric order: 1 → 2 → 3

| Phase | Plans Complete | Status | Completed |
|-------|----------------|--------|-----------|
| 1. Core Content | 3/3 | Complete    | 2026-06-14 |
| 2. Pricing & Gallery | 0/1 | Not started | - |
| 3. Polish & Ship | 0/1 | Not started | - |
