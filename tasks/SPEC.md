# Liquid Salt Divers — Website Redesign

## Summary

Website redesign for Liquid Salt Divers, a PADI 5 Star Dive Centre on Dharavandhoo island, Baa Atoll UNESCO Marine Biosphere Reserve, Maldives. Migrating from Wix to a custom Next.js site focused on cinematic underwater storytelling, direct booking conversion, and SEO dominance for Hanifaru Bay search terms.

The site must communicate the visceral, once-in-a-lifetime nature of diving alongside manta rays at Hanifaru Bay. Design follows five principles: reef-like composition, Rembrandt-style light/contrast, authoritative typography, underwater weightlessness, and musical descent rhythm.

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 14 (App Router, SSR/SSG) |
| Styling | Tailwind CSS + CSS Custom Properties |
| Animation | Framer Motion + CSS transitions |
| CMS | Sanity.io (headless) |
| Hosting | Vercel |
| Media CDN | Cloudinary |
| Maps | Mapbox GL JS |
| Forms | React Hook Form + Resend (email API) |
| Analytics | GA4 + Meta Pixel via GTM |
| DNS | Cloudflare |
| Image Generation | Google Gemini API (icons, placeholder imagery) |
| Package Manager | npm |
| Language | TypeScript |

## Architecture

```
liquidsalt/
├── _intake/                    # Source documents, logos (not deployed)
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── (site)/             # Public site route group
│   │   │   ├── page.tsx        # Homepage
│   │   │   ├── packages/       # Package pages (dynamic from Sanity)
│   │   │   ├── courses/        # PADI course pages (dynamic from Sanity)
│   │   │   ├── excursions/     # Excursion pages
│   │   │   ├── marine-life/    # Marine life hub + species pages
│   │   │   ├── hanifaru-bay/   # Hanifaru Bay editorial
│   │   │   ├── gallery/        # Photo gallery
│   │   │   ├── team/           # Meet the team
│   │   │   ├── accommodation/  # Partner properties
│   │   │   ├── about/          # Our story + conservation
│   │   │   └── contact/        # Contact / booking form
│   │   ├── api/                # API routes (form handlers)
│   │   └── studio/             # Sanity Studio (embedded)
│   ├── components/
│   │   ├── ui/                 # Button, Card, Badge, Input, etc.
│   │   ├── layout/             # Nav, Footer, Section wrappers
│   │   ├── sections/           # Homepage sections (01-12)
│   │   ├── forms/              # Enquiry, booking, course forms
│   │   └── maps/               # Mapbox island map
│   ├── lib/
│   │   ├── sanity/             # Sanity client, queries, types
│   │   ├── gemini/             # Gemini API image generation
│   │   ├── cloudinary/         # Image optimization helpers
│   │   └── utils/              # Shared utilities
│   └── styles/
│       └── globals.css         # Design tokens, Tailwind base
├── sanity/
│   ├── schemas/                # Content schemas
│   └── sanity.config.ts
├── public/
│   ├── logos/                  # Logo assets from _intake
│   ├── favicons/               # Favicon set
│   └── og/                     # Open Graph images
├── tasks/                      # Project management
├── designs/pencil/             # Pencil design files
└── docs/                       # Documentation
```

## Environment Variables

| Variable | Purpose | Required |
|----------|---------|----------|
| `NEXT_PUBLIC_GA4_ID` | Google Analytics 4 Measurement ID | Phase 6 |
| `NEXT_PUBLIC_META_PIXEL_ID` | Meta/Facebook Pixel ID | Phase 6 |
| `NEXT_PUBLIC_SANITY_PROJECT_ID` | Sanity project identifier | Phase 1 |
| `NEXT_PUBLIC_SANITY_DATASET` | Sanity dataset (production) | Phase 1 |
| `SANITY_API_TOKEN` | Sanity write token (server-side only) | Phase 1 |
| `NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME` | Cloudinary cloud name | Phase 1 |
| `CLOUDINARY_API_KEY` | Cloudinary API key | Phase 1 |
| `CLOUDINARY_API_SECRET` | Cloudinary API secret | Phase 1 |
| `NEXT_PUBLIC_MAPBOX_TOKEN` | Mapbox GL JS access token | Phase 2 |
| `RESEND_API_KEY` | Resend email API key | Phase 4 |
| `GEMINI_API_KEY` | Google Gemini API key for image generation | Phase 2 |
| `NEXT_PUBLIC_SITE_URL` | Production site URL | Phase 1 |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | WhatsApp number (+960-7773998) | Phase 1 |

## Test Setup

- **Unit/Component**: Vitest + React Testing Library
- **E2E**: Playwright
- **Linting**: ESLint + Prettier
- **Type checking**: TypeScript strict mode
- **Performance**: Lighthouse CI (>= 90 mobile, >= 95 desktop)
- **Accessibility**: axe-core automated checks
- **No external services required for tests** — Sanity queries mocked in unit tests

## Features & Acceptance Criteria

### Homepage (12 sections per FSD)
- [ ] Hero with video/image background, tagline "Deeply Addictive.", dual CTAs
- [ ] Credential strip: PADI 5 Star, Hanifaru Bay, UNESCO, ratings
- [ ] Orientation section with Mapbox interactive map
- [ ] Manta Madness cinematic feature section (dark, immersive)
- [ ] Package cards grid (3 packages with pricing and CTAs)
- [ ] Experiences grid (6 tiles with hover effects)
- [ ] Hanifaru Bay editorial panel with species cards and season calendar
- [ ] Team grid with hover colour transition
- [ ] Accommodation partner cards
- [ ] Social proof / testimonials
- [ ] Pre-season CTA banner (15% off before 20 May 2026)
- [ ] Footer with full nav, social links, PADI logo

### Package Pages (3)
- [ ] Manta Madness, Dive Dive Dive, Dive Hanifaru
- [ ] Full inclusions, pricing, hero image, booking CTA
- [ ] Schema markup per package
- [ ] Sanity CMS managed

### PADI Course Pages (9)
- [ ] Discover Scuba, Open Water, Advanced, Rescue, Divemaster, Bubble Maker, NITROX, EFR, ReActivate
- [ ] Prerequisites, duration, pricing, what's included
- [ ] Course enquiry form with certification level selector
- [ ] Sanity CMS managed

### Excursion Pages (4)
- [ ] Snorkelling, Sandbank, Night Snorkel, Big Game Fishing
- [ ] Description, pricing, what to expect, booking CTA

### Content Pages
- [ ] Marine Life hub (manta rays, whale sharks, reef species)
- [ ] Hanifaru Bay editorial with season calendar
- [ ] Gallery with category filtering and lightbox
- [ ] Meet the Team with bios, certs, Instagram links
- [ ] Accommodation partner listings
- [ ] About / Our Story + Conservation
- [ ] Contact page with full enquiry form

### Forms
- [ ] General enquiry / booking form (per FSD Section 7)
- [ ] Honeypot spam protection
- [ ] Auto-response email via Resend
- [ ] Admin notification email
- [ ] WhatsApp pre-fill on success

### SEO & Analytics
- [ ] GA4 + Meta Pixel via GTM
- [ ] Schema markup: DiveShop, LocalBusiness, FAQPage, BreadcrumbList
- [ ] Open Graph tags all pages
- [ ] sitemap.xml + robots.txt
- [ ] 301 redirect map from Wix URLs

### Performance
- [ ] PageSpeed >= 90 mobile, >= 95 desktop
- [ ] LCP < 2.5s, CLS < 0.1, FID < 100ms
- [ ] Total page weight < 1.5MB compressed
- [ ] All images WebP with JPEG fallback via Cloudinary

### Accessibility
- [ ] WCAG 2.1 AA compliance
- [ ] Keyboard navigable
- [ ] Contrast ratios met (4.5:1 body, 3:1 large text)
- [ ] Skip-to-content link
- [ ] Descriptive alt text on all images

## Out of Scope (Phase 2 / Future)
- Online payment / Stripe integration
- Dive log / guest portal
- Live underwater camera feed
- Email capture automation series
- Multi-language (German, French, Dhivehi)
- Real underwater photography shoot

## Definition of Done
- All P0 requirements from BRD Sections 3.1, 3.2, 3.3 implemented
- All 12 homepage sections rendering per FSD spec
- All 3 package pages + 9 course pages live with CMS content
- Forms tested and delivering emails
- WhatsApp CTAs tested on iOS and Android
- GA4 + Meta Pixel verified
- SSL/HTTPS enforced
- Sitemap submitted
- PageSpeed >= 90 mobile
- WCAG 2.1 AA — zero critical violations
- Cross-browser: Chrome, Firefox, Safari, Edge (latest 2 versions)
