import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppCTA } from "@/components/ui/WhatsAppCTA";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SpeciesCard } from "@/components/ui/SpeciesCard";

export const metadata: Metadata = {
  title: "Marine Life | Liquid Salt Divers",
  description:
    "Discover the incredible marine life of Baa Atoll UNESCO Biosphere Reserve. Manta rays, whale sharks, eagle rays, reef sharks, and hundreds of tropical species.",
};

const SPECIES = [
  {
    name: "Reef Manta Ray",
    scientificName: "Mobula alfredi",
    description:
      "Baa Atoll is home to the largest known population of reef manta rays in the Maldives. During the southwest monsoon, hundreds gather at Hanifaru Bay to feed on concentrated plankton blooms -- one of the greatest wildlife spectacles on Earth.",
    season: "June - November (peak: Aug - Oct)",
  },
  {
    name: "Whale Shark",
    scientificName: "Rhincodon typus",
    description:
      "The world&apos;s largest fish is a regular visitor to Baa Atoll. These gentle giants filter-feed on plankton and small fish near the surface, often allowing snorkellers to swim alongside them. Encounters are most frequent during the wet season when plankton is abundant.",
    season: "May - December",
  },
  {
    name: "Eagle Ray",
    scientificName: "Aetobatus narinari",
    description:
      "Spotted eagle rays glide across sandy channels and reef flats throughout the year. With their distinctive white-spotted pattern and graceful wing-like fins, they are one of the most photogenic species on our dive sites. Often seen in small groups foraging for molluscs in the sand.",
    season: "Year-round",
  },
  {
    name: "Grey Reef Shark",
    scientificName: "Carcharhinus amblyrhynchos",
    description:
      "The most commonly encountered shark species on Baa Atoll reefs. Grey reef sharks patrol channel entrances and reef walls, often in groups. They are curious but not aggressive, and play a vital role in maintaining healthy reef ecosystems.",
    season: "Year-round",
  },
];

export default function MarineLifePage() {
  return (
    <>
      <Nav />
      <main>
        {/* Hero */}
        <section className="relative bg-gradient-to-b from-ocean-navy via-reef-teal to-night-dive pt-32 pb-20">
          <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
            <span className="inline-block mb-4 bg-coral-gold text-white px-4 py-1 rounded-full text-badge uppercase">
              UNESCO Biosphere Reserve
            </span>
            <h1 className="font-display text-5xl md:text-6xl text-salt-white">
              Marine Life
            </h1>
            <p className="mt-4 text-lg text-salt-white/80 max-w-2xl mx-auto">
              Baa Atoll is home to some of the most extraordinary marine
              encounters on the planet. From manta ray aggregations to whale
              shark sightings, every dive brings something remarkable.
            </p>
          </div>
        </section>

        {/* Species Grid */}
        <SectionWrapper className="py-space-12 lg:py-space-16">
          <div className="mx-auto max-w-4xl px-6">
            <h2 className="font-display text-3xl text-ocean-navy mb-4">
              Iconic Species
            </h2>
            <p className="text-ocean-navy/70 mb-10 max-w-2xl">
              These are the headline species that draw divers and snorkellers
              from around the world to Baa Atoll. Sightings vary by season
              &mdash; plan your trip around what you most want to see.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {SPECIES.map((species) => (
                <SpeciesCard
                  key={species.name}
                  name={species.name}
                  scientificName={species.scientificName}
                  description={species.description}
                  season={species.season}
                />
              ))}
            </div>
          </div>
        </SectionWrapper>

        {/* Season Guide */}
        <SectionWrapper dark className="py-space-12 lg:py-space-16">
          <div className="mx-auto max-w-4xl px-6">
            <h2 className="font-display text-3xl text-salt-white mb-6">
              When to Visit
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-salt-white/5 rounded-lg p-6">
                <h3 className="font-body font-semibold text-cyan mb-2">
                  Southwest Monsoon (May&ndash;November)
                </h3>
                <p className="text-sm text-salt-white/70 leading-relaxed">
                  Peak manta ray season at Hanifaru Bay. Whale shark encounters
                  increase significantly. Plankton-rich waters attract
                  filter-feeders in huge numbers. Visibility 10&ndash;25m on the
                  outer reef, with occasional current dives offering thrilling
                  shark encounters.
                </p>
              </div>
              <div className="bg-salt-white/5 rounded-lg p-6">
                <h3 className="font-body font-semibold text-cyan mb-2">
                  Northeast Monsoon (December&ndash;April)
                </h3>
                <p className="text-sm text-salt-white/70 leading-relaxed">
                  Crystal-clear visibility up to 30m+. Ideal conditions for
                  macro photography and reef exploration. Eagle rays, reef
                  sharks, and turtles are present year-round. Calmer seas make
                  this the best period for deeper dives and drift dives along
                  the atoll rim.
                </p>
              </div>
            </div>
          </div>
        </SectionWrapper>

        {/* CTA */}
        <SectionWrapper className="py-space-12 lg:py-space-16">
          <div className="mx-auto max-w-4xl px-6 text-center">
            <h2 className="font-display text-3xl text-ocean-navy mb-4">
              Ready to Dive In?
            </h2>
            <p className="text-ocean-navy/70 mb-8 max-w-xl mx-auto">
              Whether you&apos;re a certified diver or a first-time snorkeller,
              we&apos;ll help you experience the best of Baa Atoll&apos;s marine
              life.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <WhatsAppCTA
                variant="inline"
                label="Plan Your Trip"
                message="Hi! I'd like to plan a trip to see the marine life in Baa Atoll."
              />
              <Link
                href="/packages"
                className="inline-flex items-center gap-2 px-8 py-3 rounded-md border-[1.5px] border-ocean-navy text-ocean-navy font-semibold hover:bg-ocean-navy hover:text-salt-white transition-all duration-200"
              >
                View Packages
              </Link>
            </div>
          </div>
        </SectionWrapper>
      </main>
      <Footer />
      <WhatsAppCTA variant="floating" />
    </>
  );
}
