# Project: Liquid Salt Divers

> Keep this file under 150 lines. Loaded every session — every line costs context.

## Stack
- **Language / Runtime**: TypeScript / Node.js 20
- **Framework**: Next.js 14 (App Router, SSR/SSG/ISR)
- **CMS**: Sanity.io (project ID: bs3v46tq, dataset: production)
- **Styling**: Tailwind CSS + CSS Custom Properties
- **Animation**: Framer Motion + CSS keyframes
- **Testing**: Vitest + React Testing Library + Playwright
- **Package manager**: npm

## Commands
```bash
# Dev server:   npm run dev
# Build:        NEXT_PUBLIC_SANITY_PROJECT_ID=bs3v46tq npm run build
# Type check:   npx tsc --noEmit
# Lint:         npm run lint
# Tests:        npm run test:run
# Seed CMS:     SANITY_API_TOKEN=<token> npx tsx scripts/seed-sanity.ts
# Gen images:   GEMINI_API_KEY=<key> npx tsx scripts/generate-images.ts
```

## Structure
```
src/
  app/                    # Next.js App Router
    (site)/               # Public pages (packages, courses, excursions, etc.)
    api/enquiry/          # Form submission API route
    studio/[[...tool]]/   # Sanity Studio (embedded)
  components/
    ui/                   # Button, PackageCard, TeamCard, ExperienceTile, etc.
    layout/               # Nav, Footer
    sections/             # Homepage sections (Hero, MantaMadness, etc.)
    forms/                # FormField (Input, Select, Textarea, Honeypot)
    maps/                 # IslandMap (Mapbox)
  lib/
    sanity/               # client, queries, types, image, fetch, portableText
    gemini/               # Gemini API image generation client
    cloudinary/           # Image loader
    data/                 # Static fallback data (packages, courses, excursions)
sanity/schemas/           # 9 Sanity document schemas
scripts/                  # seed-sanity.ts, generate-images.ts
public/images/            # 40 Gemini-generated images
```

## Key Files
- Component pattern: `src/components/ui/PackageCard.tsx`
- Page pattern: `src/app/(site)/packages/[slug]/page.tsx`
- Sanity queries: `src/lib/sanity/queries.ts`
- Design tokens: `src/app/globals.css` + `tailwind.config.ts`

## Deployment
- **Live URL**: https://liquidsalt.thecrayfish.tech
- **GitHub**: https://github.com/hushamsaeed/liquidsalt
- **Hosting**: Dokploy on dokploy.thecrayfish.tech (Docker Swarm)
- **Domain**: liquidsalt.thecrayfish.tech (Traefik + Let's Encrypt)
- **ISR**: Pages revalidate every 60 seconds from Sanity CMS
- **Deploy**: Push to main → Dokploy auto-deploys via Dockerfile

## Sanity CMS
- **Studio**: https://liquidsalt.thecrayfish.tech/studio
- **Project ID**: bs3v46tq
- **Schemas**: package, course, excursion, teamMember, accommodation, galleryImage, marineSpecies, testimonial, siteSettings
- **Data flow**: Pages fetch Sanity → fall back to static data in `src/lib/data/`
- **Images**: Sanity images converted via `imageUrl()` from `src/lib/sanity/image.ts`

## Design Principles
Five cinematic principles from the FSD (in `_intake/LiquidSaltDivers_FSD.docx`):
1. Reef Composition (Da Vinci) — organic asymmetric layouts
2. Two Registers (Rembrandt) — light sections vs deep dark sections
3. Typography as Destination (Vignelli) — large authoritative type
4. Weightlessness (Turner) — caustics, shimmer, parallax
5. The Descent (Beethoven) — page builds like a dive

## Conventions
- Colors: ocean-navy, cyan, reef-teal, coral-gold, salt-white, manta-black, night-dive, sand
- Fonts: Playfair Display (display), Inter (body)
- Spacing: 8pt grid (space-1 through space-24)
- All sections use SectionWrapper for scroll-reveal animations
- WhatsApp CTA on every page (floating + inline variants)
- No unescaped quotes in JSX (use &apos; &ldquo; etc.)

---

## Core Rules
- **Plan first.** 3+ steps → write tasks/todo.md before code.
- **Verify before done.** Tests must pass. Show output.
- **No hacks.** Workarounds get replaced with real fixes.
- **Minimal impact.** Only change what the task requires.
- **Ask before destroying.** Deletes, force-pushes, truncates → confirm first.

## Learned Rules
- SSH to dokploy.thecrayfish.tech rate-limits aggressively — max 1-2 connections, then blocked for 2-5 min. Batch commands into single sessions.
- Dokploy API uses better-auth at `/api/auth/sign-in/email`, not tRPC auth. Session cookie: `better-auth.session_token`.
- `scripts/` must be excluded from tsconfig (already done) to prevent build errors from seed scripts.
- Sanity PortableText fields (description, overview) must be converted via `toPlainText()` before rendering as React children.
- Build requires `NEXT_PUBLIC_SANITY_PROJECT_ID=bs3v46tq` env var — Dockerfile has it baked in.
