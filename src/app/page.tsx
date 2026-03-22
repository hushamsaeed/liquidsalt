export const revalidate = 60; // Revalidate every 60 seconds

import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { CredentialStrip } from "@/components/sections/CredentialStrip";
import { Orientation } from "@/components/sections/Orientation";
import { MantaMadness } from "@/components/sections/MantaMadness";
import { PackagesSection } from "@/components/sections/PackagesSection";
import { ExperiencesSection } from "@/components/sections/ExperiencesSection";
import { HanifaruBayEditorial } from "@/components/sections/HanifaruBayEditorial";
import { TeamSection } from "@/components/sections/TeamSection";
import { AccommodationSection } from "@/components/sections/AccommodationSection";
import { SocialProof } from "@/components/sections/SocialProof";
import { PreSeasonCTA } from "@/components/sections/PreSeasonCTA";
import { WhatsAppCTA } from "@/components/ui/WhatsAppCTA";
import { sanityFetch } from "@/lib/sanity/fetch";
import {
  allPackagesQuery,
  allTeamQuery,
  allAccommodationQuery,
  allTestimonialsQuery,
  allSpeciesQuery,
} from "@/lib/sanity/queries";
import { imageUrl } from "@/lib/sanity/image";
import { toPlainText } from "@/lib/sanity/portableText";

type SanityDoc = Record<string, any>;

export default async function HomePage() {
  const [packages, team, accommodation, testimonials, species] =
    await Promise.all([
      sanityFetch<SanityDoc[]>(allPackagesQuery, {}, []),
      sanityFetch<SanityDoc[]>(allTeamQuery, {}, []),
      sanityFetch<SanityDoc[]>(allAccommodationQuery, {}, []),
      sanityFetch<SanityDoc[]>(allTestimonialsQuery, {}, []),
      sanityFetch<SanityDoc[]>(allSpeciesQuery, {}, []),
    ]);

  // Map Sanity data to serializable props (convert image objects to URL strings)
  const mappedPackages =
    packages.length > 0
      ? packages.map((pkg) => ({
          title: pkg.title,
          slug: pkg.slug?.current || pkg.slug,
          badge: pkg.badge,
          priceFrom: pkg.priceFrom,
          pricePer: pkg.pricePer,
          image:
            imageUrl(pkg.cardImage) ||
            `/images/packages/${pkg.slug?.current || pkg.slug}.webp`,
          inclusions: pkg.inclusions,
          description: pkg.tagline,
          featured: pkg.featured,
        }))
      : undefined;

  const mappedTeam =
    team.length > 0
      ? team.map((member) => ({
          name: member.name,
          role: member.role,
          photo: imageUrl(member.photo) || undefined,
          instagram: member.instagram,
          certifications: member.certifications,
          bio: member.bio,
        }))
      : undefined;

  const mappedAccommodation =
    accommodation.length > 0
      ? accommodation.map((prop) => ({
          name: prop.name,
          description: prop.description,
          image: imageUrl(prop.image) || undefined,
          bookingUrl: prop.bookingUrl,
        }))
      : undefined;

  const mappedTestimonials =
    testimonials.length > 0
      ? testimonials.map((t) => ({
          name: t.name,
          country: t.country,
          text: t.text,
          rating: t.rating,
        }))
      : undefined;

  const mappedSpecies =
    species.length > 0
      ? species.map((s) => ({
          name: s.name,
          scientificName: s.scientificName,
          description: toPlainText(s.description),
          image: imageUrl(s.image) || undefined,
          season: s.season,
        }))
      : undefined;

  return (
    <>
      <Nav />

      <main id="main-content">
        {/* 01 — Hero: The Surface */}
        <Hero imageSrc="/images/heroes/homepage.webp" />

        {/* 02 — Credential Strip */}
        <CredentialStrip />

        {/* 03 — Where You Are */}
        <Orientation />

        {/* 04 — Manta Madness Feature */}
        <MantaMadness />

        {/* 05 — Packages */}
        <PackagesSection packages={mappedPackages} />

        {/* 06 — Experiences */}
        <ExperiencesSection />

        {/* 07 — Hanifaru Bay Editorial */}
        <HanifaruBayEditorial species={mappedSpecies} />

        {/* 08 — Meet The Team */}
        <TeamSection team={mappedTeam} />

        {/* 09 — Accommodation */}
        <AccommodationSection accommodation={mappedAccommodation} />

        {/* 10 — Social Proof */}
        <SocialProof testimonials={mappedTestimonials} />

        {/* 11 — Pre-Season CTA */}
        <PreSeasonCTA />
      </main>

      {/* 12 — Footer */}
      <Footer />

      {/* Floating WhatsApp */}
      <WhatsAppCTA variant="floating" />
    </>
  );
}
