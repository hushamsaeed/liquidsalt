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

export default function HomePage() {
  return (
    <>
      <Nav />

      <main id="main-content">
        {/* 01 — Hero: The Surface */}
        <Hero />

        {/* 02 — Credential Strip */}
        <CredentialStrip />

        {/* 03 — Where You Are */}
        <Orientation />

        {/* 04 — Manta Madness Feature */}
        <MantaMadness />

        {/* 05 — Packages */}
        <PackagesSection />

        {/* 06 — Experiences */}
        <ExperiencesSection />

        {/* 07 — Hanifaru Bay Editorial */}
        <HanifaruBayEditorial />

        {/* 08 — Meet The Team */}
        <TeamSection />

        {/* 09 — Accommodation */}
        <AccommodationSection />

        {/* 10 — Social Proof */}
        <SocialProof />

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
