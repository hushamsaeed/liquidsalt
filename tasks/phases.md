# Liquid Salt Divers — Phases

## Phase 1: Foundation
**Status**: DONE ✅
**Goal**: Project scaffolding, design token system, Sanity CMS schemas, deployable skeleton
**Tasks**:
- [ ] Initialize Next.js 14 project with TypeScript + App Router
- [ ] Configure Tailwind CSS with full design token system (colours, typography, spacing, shadows, radii from FSD)
- [ ] Set up CSS custom properties for all design tokens
- [ ] Install and configure Sanity.io studio (embedded at /studio)
- [ ] Create Sanity schemas: Package, Course, Excursion, TeamMember, Accommodation, GalleryImage, MarineSpecies, Testimonial, SiteSettings
- [ ] Configure Vercel project and verify deployment
- [ ] Copy logo assets from _intake/logos/ to public/
- [ ] Set up favicon set from _intake/logos/ (14-19)
- [ ] Configure ESLint, Prettier, TypeScript strict mode
- [ ] Install core dependencies: Framer Motion, React Hook Form, Resend
- [ ] Set up Vitest + React Testing Library
- [ ] Create globals.css with all design tokens rendering
**Done when**:
- [ ] `npm run build` exits 0
- [ ] `npm run lint` exits 0
- [ ] Design tokens test page renders all colours, typography, spacing at localhost
- [ ] Sanity Studio accessible at localhost:3000/studio
- [ ] `public/logos/` contains logo files

## Phase 2: Design System & Components
**Status**: DONE ✅
**Goal**: All shared UI components built and visually verified
**Tasks**:
- [ ] Navigation component (transparent → solid scroll, mobile hamburger, dropdown menus)
- [ ] Footer component (4-column grid, PADI logo, social icons, WhatsApp)
- [ ] Hero section component (video/image bg, overlay gradient, tagline, dual CTAs)
- [ ] Package card component (image, badge, price, inclusions, CTA — per FSD 3.3)
- [ ] Team member card component (circular photo, desaturate hover, Instagram link — per FSD 3.4)
- [ ] Button system (Primary, Secondary, Ghost Light, Ghost Dark, Danger — per FSD 3.5)
- [ ] WhatsApp floating CTA component (persistent, one-tap)
- [ ] Form components (text input, select, date picker, textarea, honeypot)
- [ ] Section wrapper component (scroll reveal via Framer Motion)
- [ ] Credential strip / badge bar component
- [ ] Experience tile component (bg image, hover scale, cyan border)
- [ ] Testimonial card component
- [ ] Accommodation card component
- [ ] Species card component (marine life identification)
- [ ] Season calendar component (horizontal month bar)
- [ ] Mapbox island map component (Dharavandhoo + Hanifaru Bay pins)
- [ ] Gemini API integration for icon/image generation
- [ ] Set up Cloudinary image loader for next/image
**Done when**:
- [ ] `npm run build` exits 0
- [ ] Component showcase page at /dev/components renders all components
- [ ] Nav transitions work on scroll
- [ ] All button variants render correctly
- [ ] Map renders with custom styling and pins

## Phase 3: Homepage
**Status**: DONE ✅
**Goal**: Complete homepage with all 12 sections per FSD spec, fully responsive
**Tasks**:
- [ ] Section 01: Hero — video/image bg, "Deeply Addictive." tagline, pre-season banner, dual CTAs, scroll indicator
- [ ] Section 02: Credential Strip — PADI 5 Star, Hanifaru Bay, UNESCO, rating, international instructors
- [ ] Section 03: Orientation — split layout with Mapbox map, island description, UNESCO status
- [ ] Section 04: Manta Madness — full-bleed dark section, pull quote, cinematic image, stat strip, CTA
- [ ] Section 05: Packages — 3 package cards from Sanity, "Most Popular" badge, pricing
- [ ] Section 06: Experiences — 6 experience tiles with hover effects
- [ ] Section 07: Hanifaru Bay Editorial — species cards, season calendar, long-form content
- [ ] Section 08: Meet The Team — team grid from Sanity, hover colour transition
- [ ] Section 09: Accommodation — partner property cards from Sanity
- [ ] Section 10: Social Proof — rating widget, testimonial rotation
- [ ] Section 11: Pre-Season CTA — coral gold banner, countdown, WhatsApp CTA
- [ ] Section 12: Footer (already built in Phase 2, wire up)
- [ ] Scroll animations: section reveals, parallax on manta section, staggered entrances
- [ ] Seed Sanity with initial content for all homepage sections
- [ ] Generate placeholder images via Gemini API for sections needing photography
- [ ] Responsive testing: 320px, 768px, 1280px, 1920px
**Done when**:
- [ ] `npm run build` exits 0
- [ ] Homepage renders all 12 sections with content
- [ ] `npx playwright test tests/homepage.spec.ts` passes (responsive snapshot tests)
- [ ] Scroll animations trigger correctly
- [ ] Mapbox map renders with pins

## Phase 4: Package & Course Pages
**Status**: DONE ✅
**Goal**: All 3 package pages + 9 PADI course pages live with CMS content and working forms
**Tasks**:
- [ ] Dynamic route: /packages/[slug] with Sanity data fetching (SSG with revalidation)
- [ ] Package page template: hero image, full inclusions, pricing breakdown, booking CTA, related packages
- [ ] Manta Madness page content
- [ ] Dive Dive Dive page content
- [ ] Dive Hanifaru page content
- [ ] Dynamic route: /courses/[slug] with Sanity data fetching
- [ ] Course page template: overview, prerequisites, duration, pricing, what's included, course enquiry CTA
- [ ] All 9 PADI course pages: Discover Scuba, Open Water, Advanced, Rescue, Divemaster, Bubble Maker, NITROX, EFR, ReActivate
- [ ] Booking enquiry form (per FSD Section 7) with honeypot, validation
- [ ] Course enquiry form with course selector and certification level
- [ ] API route: form submission handler with Resend email delivery
- [ ] Auto-response email template (branded HTML)
- [ ] Admin notification email
- [ ] Seed all package and course content in Sanity
- [ ] Generate Gemini images for packages and courses
**Done when**:
- [ ] `npm run build` exits 0
- [ ] All 3 package pages render at /packages/[slug] with CMS content
- [ ] All 9 course pages render at /courses/[slug] with CMS content
- [ ] Form submission sends email (verified with Resend test mode)
- [ ] `npx playwright test tests/packages.spec.ts` passes
- [ ] `npx playwright test tests/courses.spec.ts` passes

## Phase 5: Content Pages
**Status**: TODO
**Goal**: All remaining content pages built and linked
**Tasks**:
- [ ] Excursion pages (4): Snorkelling, Sandbank, Night Snorkel, Big Game Fishing — dynamic from Sanity
- [ ] Marine Life hub page with species cards (manta, whale shark, reef species)
- [ ] Hanifaru Bay editorial page with season calendar, UNESCO info, FAQ
- [ ] Gallery page with category filtering (underwater / above-water), lightbox, lazy loading
- [ ] Meet the Team page (expanded from homepage section) — full bios from Sanity
- [ ] Accommodation page with partner property cards and booking links
- [ ] About / Our Story page with conservation section
- [ ] Contact page with full enquiry form, map embed, WhatsApp CTA
- [ ] Seed all content in Sanity
- [ ] Generate remaining Gemini images
- [ ] Internal linking: all pages cross-linked per SEO spec
**Done when**:
- [ ] `npm run build` exits 0
- [ ] All content pages render with CMS data
- [ ] Gallery lightbox and filtering works
- [ ] Contact form submits successfully
- [ ] `npx playwright test tests/content-pages.spec.ts` passes
- [ ] Zero broken internal links (verified with link checker)

## Phase 6: Integration & SEO
**Status**: TODO
**Goal**: Analytics, schema markup, SEO infrastructure, image pipeline complete
**Tasks**:
- [ ] GA4 integration with page view and conversion event tracking
- [ ] Meta Pixel integration with standard events
- [ ] GTM container setup (if using GTM approach)
- [ ] Schema markup: DiveShop + LocalBusiness on all pages
- [ ] Schema markup: FAQPage on Hanifaru Bay page and homepage
- [ ] Schema markup: BreadcrumbList on all inner pages
- [ ] Open Graph tags for all pages (title, description, image)
- [ ] Twitter Card meta tags
- [ ] sitemap.xml generation (dynamic from pages + Sanity content)
- [ ] robots.txt configuration
- [ ] 301 redirect map from existing Wix URLs (middleware or next.config.js redirects)
- [ ] On-page SEO: title tags, meta descriptions per FSD Section 6.1
- [ ] Image alt text audit — all images have descriptive alt text
- [ ] Cloudinary image pipeline: WebP auto-conversion, responsive sizing
- [ ] Font preloading for Playfair Display and Inter
- [ ] hreflang tag scaffold (en-MV primary)
**Done when**:
- [ ] `npm run build` exits 0
- [ ] Lighthouse SEO score >= 95
- [ ] Schema validates at schema.org validator (zero errors)
- [ ] `/sitemap.xml` returns valid XML with all pages
- [ ] `/robots.txt` returns valid content
- [ ] GA4 page_view event fires (verified in GA4 DebugView or Tag Assistant)
- [ ] OG tags render correctly (verified with social sharing debugger)

## Phase 7: QA & Performance
**Status**: TODO
**Goal**: All QA checklist items from FSD Section 9 pass, site ready for launch
**Tasks**:
- [ ] PageSpeed optimization: target >= 90 mobile, >= 95 desktop
- [ ] Core Web Vitals: LCP < 2.5s, CLS < 0.1, FID < 100ms
- [ ] Total page weight audit: < 1.5MB compressed
- [ ] Cross-browser testing: Chrome, Firefox, Safari, Edge (latest 2 versions)
- [ ] Mobile device testing: iOS Safari, Android Chrome (real devices or BrowserStack)
- [ ] Accessibility audit: axe-core zero critical violations
- [ ] Keyboard navigation test: all interactive elements reachable
- [ ] Screen reader test: NVDA / VoiceOver on key pages
- [ ] Form testing: submission, validation, auto-response, honeypot
- [ ] WhatsApp CTA testing: iOS and Android with correct number and pre-fill
- [ ] All internal links verified (zero 404s)
- [ ] SSL / HTTPS enforcement verified
- [ ] Custom 404 page with navigation
- [ ] Image alt text: 100% coverage
- [ ] 301 redirects verified (all old Wix URLs)
- [ ] GA4 + Meta Pixel events verified via Tag Assistant
- [ ] Final Lighthouse CI run
**Done when**:
- [ ] `npx playwright test` — all E2E tests pass
- [ ] Lighthouse Mobile >= 90, Desktop >= 95, SEO >= 95, Accessibility >= 95
- [ ] Zero critical accessibility violations (axe-core)
- [ ] All FSD Section 9 QA checklist items marked PASS
- [ ] `npm run build` exits 0 with zero warnings
**Outputs**: <!-- filled on completion -->
