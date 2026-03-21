"use client";

import { Button } from "@/components/ui/Button";
import { PackageCard } from "@/components/ui/PackageCard";
import { TeamCard } from "@/components/ui/TeamCard";
import { ExperienceTile } from "@/components/ui/ExperienceTile";
import { TestimonialCard } from "@/components/ui/TestimonialCard";
import { AccommodationCard } from "@/components/ui/AccommodationCard";
import { SpeciesCard } from "@/components/ui/SpeciesCard";
import { SeasonCalendar } from "@/components/ui/SeasonCalendar";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { WhatsAppCTA } from "@/components/ui/WhatsAppCTA";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { CredentialStrip } from "@/components/sections/CredentialStrip";
import { InputField, SelectField, TextareaField } from "@/components/forms/FormField";

export default function ComponentShowcase() {
  return (
    <div className="min-h-screen">
      <Nav />

      {/* Hero */}
      <Hero />

      {/* Credential Strip */}
      <CredentialStrip />

      {/* Buttons */}
      <SectionWrapper className="py-space-12 px-6 max-w-7xl mx-auto">
        <h2 className="font-display text-3xl text-ocean-navy mb-8">Buttons</h2>
        <div className="flex flex-wrap gap-4 items-center">
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="ghost-dark">Ghost Dark</Button>
          <Button variant="danger">Danger</Button>
        </div>
        <div className="mt-4 flex flex-wrap gap-4 items-center p-6 bg-ocean-navy rounded-lg">
          <Button variant="ghost-light">Ghost Light</Button>
        </div>
        <div className="mt-4 flex flex-wrap gap-4 items-center">
          <Button variant="primary" size="sm">Small</Button>
          <Button variant="primary" size="md">Medium</Button>
          <Button variant="primary" size="lg">Large</Button>
          <Button variant="primary" disabled>Disabled</Button>
        </div>
      </SectionWrapper>

      {/* Package Cards */}
      <SectionWrapper className="py-space-12 px-6 max-w-7xl mx-auto">
        <h2 className="font-display text-3xl text-ocean-navy mb-8">Package Cards</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <PackageCard
            title="Manta Madness"
            slug="manta-madness"
            badge="Most Popular"
            priceFrom={450}
            featured
            inclusions={[
              "3 Hanifaru Bay snorkel trips",
              "2 reef dives",
              "Full equipment hire",
              "Boat transfers",
              "Marine biologist briefing",
            ]}
          />
          <PackageCard
            title="Dive Dive Dive"
            slug="dive-dive-dive"
            priceFrom={380}
            inclusions={[
              "6 guided reef dives",
              "Full equipment hire",
              "Boat transfers",
              "Dive log signed",
            ]}
          />
          <PackageCard
            title="Dive Hanifaru"
            slug="dive-hanifaru"
            priceFrom={520}
            inclusions={[
              "2 Hanifaru Bay dives",
              "2 reef dives",
              "1 night dive",
              "Full equipment hire",
            ]}
          />
        </div>
      </SectionWrapper>

      {/* Team Cards */}
      <SectionWrapper className="py-space-12 px-6 max-w-7xl mx-auto">
        <h2 className="font-display text-3xl text-ocean-navy mb-8">Team Cards</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <TeamCard name="Ryshyn" role="Founder & PADI Instructor" instagram="@ryshyn" />
          <TeamCard name="Jazeel" role="Senior Instructor" instagram="@jazeel" />
          <TeamCard name="Aiman" role="Dive Guide" />
          <TeamCard name="Nazeeh" role="Boat Captain" />
        </div>
      </SectionWrapper>

      {/* Experience Tiles */}
      <SectionWrapper className="py-space-12 px-6 max-w-7xl mx-auto">
        <h2 className="font-display text-3xl text-ocean-navy mb-8">Experience Tiles</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <ExperienceTile title="Scuba Diving" description="Explore the reefs of Baa Atoll" href="/diving" />
          <ExperienceTile title="PADI Courses" description="From beginner to Divemaster" href="/courses" />
          <ExperienceTile title="Snorkelling" description="Hanifaru Bay manta encounters" href="/excursions/snorkelling" />
        </div>
      </SectionWrapper>

      {/* Testimonials */}
      <SectionWrapper className="py-space-12 px-6 max-w-7xl mx-auto">
        <h2 className="font-display text-3xl text-ocean-navy mb-8">Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <TestimonialCard
            name="Sarah K."
            country="Australia"
            text="Swimming with over 100 manta rays was the most incredible experience of my life. The team made everything seamless."
            rating={5}
          />
          <TestimonialCard
            name="Marco B."
            country="Italy"
            text="Best dive centre in the Maldives. Professional, friendly, and they know every cleaning station personally."
            rating={5}
          />
          <TestimonialCard
            name="Yuki T."
            country="Japan"
            text="Did my Advanced Open Water here. The instructors are patient and the reef is absolutely stunning."
            rating={5}
          />
        </div>
      </SectionWrapper>

      {/* Accommodation Cards */}
      <SectionWrapper className="py-space-12 px-6 max-w-7xl mx-auto bg-sand">
        <h2 className="font-display text-3xl text-ocean-navy mb-8">Accommodation</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <AccommodationCard
            name="Aveyla Manta Village"
            description="Beachfront guesthouse with ocean views"
            bookingUrl="https://example.com"
          />
          <AccommodationCard
            name="Kiha Beach"
            description="Boutique hotel steps from the harbour"
            bookingUrl="https://example.com"
          />
        </div>
      </SectionWrapper>

      {/* Species Cards + Season Calendar */}
      <SectionWrapper className="py-space-12 px-6 max-w-7xl mx-auto">
        <h2 className="font-display text-3xl text-ocean-navy mb-8">Marine Life & Season</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-2">
            <SpeciesCard
              name="Reef Manta Ray"
              scientificName="Mobula alfredi"
              description="The primary attraction at Hanifaru Bay. Aggregations of 100+ individuals during peak season."
              season="May — November"
            />
            <SpeciesCard
              name="Whale Shark"
              scientificName="Rhincodon typus"
              description="The world's largest fish. Regular sightings in Baa Atoll during the southwest monsoon."
              season="May — November"
            />
            <SpeciesCard
              name="Grey Reef Shark"
              scientificName="Carcharhinus amblyrhynchos"
              description="Resident reef predator seen on most dives at the channel sites."
            />
          </div>
          <div className="p-6 bg-salt-white rounded-lg shadow-card">
            <SeasonCalendar />
          </div>
        </div>
      </SectionWrapper>

      {/* Form Components */}
      <SectionWrapper className="py-space-12 px-6 max-w-7xl mx-auto">
        <h2 className="font-display text-3xl text-ocean-navy mb-8">Form Components</h2>
        <div className="max-w-md space-y-4">
          <InputField label="Full Name" placeholder="Your name" required />
          <InputField label="Email" type="email" placeholder="you@example.com" required />
          <InputField label="With Error" error="This field is required" />
          <SelectField
            label="Package"
            required
            placeholder="Select a package"
            options={[
              { value: "manta-madness", label: "Manta Madness" },
              { value: "dive-dive-dive", label: "Dive Dive Dive" },
              { value: "dive-hanifaru", label: "Dive Hanifaru" },
            ]}
          />
          <TextareaField label="Message" placeholder="Tell us about your trip..." maxLength={500} />
        </div>
      </SectionWrapper>

      {/* WhatsApp CTA (inline) */}
      <SectionWrapper className="py-space-12 px-6 max-w-7xl mx-auto">
        <h2 className="font-display text-3xl text-ocean-navy mb-8">WhatsApp CTA</h2>
        <WhatsAppCTA variant="inline" />
      </SectionWrapper>

      {/* Floating WhatsApp */}
      <WhatsAppCTA variant="floating" />

      <Footer />
    </div>
  );
}
