"use client";

import { SectionWrapper } from "../ui/SectionWrapper";
import { SpeciesCard } from "../ui/SpeciesCard";
import { SeasonCalendar } from "../ui/SeasonCalendar";

const SPECIES = [
  {
    name: "Reef Manta Ray",
    scientificName: "Mobula alfredi",
    description: "The star of Hanifaru Bay. Aggregations of 100+ during cyclone feeding events — one of the greatest marine spectacles on Earth.",
    season: "May — November",
    image: "/images/species/reef-manta-ray.webp",
  },
  {
    name: "Whale Shark",
    scientificName: "Rhincodon typus",
    description: "The world's largest fish. Regular sightings in Baa Atoll channels during the southwest monsoon plankton bloom.",
    season: "May — November",
    image: "/images/species/whale-shark.webp",
  },
  {
    name: "Eagle Ray",
    scientificName: "Aetobatus narinari",
    description: "Spotted eagles cruise the sandy channels between reefs. Often seen in groups of 3–8 at cleaning stations.",
    season: "Year-round",
    image: "/images/species/eagle-ray.webp",
  },
  {
    name: "Grey Reef Shark",
    scientificName: "Carcharhinus amblyrhynchos",
    description: "Resident reef predator at channel dive sites. A constant, graceful presence on almost every dive.",
    season: "Year-round",
    image: "/images/species/grey-reef-shark.webp",
  },
];

export function HanifaruBayEditorial() {
  return (
    <SectionWrapper className="py-space-12 lg:py-space-16 bg-salt-white" id="hanifaru-bay">
      <div className="mx-auto max-w-7xl px-6">
        {/* Editorial pull quote — Vignelli treatment */}
        <blockquote className="mb-12">
          <p className="font-display text-3xl md:text-4xl lg:text-5xl italic text-gradient-ocean leading-tight">
            &ldquo;There are only a handful of places in the world where visitors
            can get so close to so many manta rays.&rdquo;
          </p>
        </blockquote>

        <h2 className="font-display text-4xl md:text-5xl text-ocean-navy">
          The Reef at Hanifaru
        </h2>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Editorial */}
          <div>
            <p className="text-lg text-ocean-navy/80 leading-relaxed">
              Hanifaru Bay sits in a deep pocket on the western rim of Baa Atoll.
              During the southwest monsoon, tidal currents funnel vast clouds of
              plankton into the bay&apos;s natural amphitheatre. What follows is one of
              the most extraordinary feeding events in the marine world.
            </p>
            <p className="mt-4 text-ocean-navy/70 leading-relaxed">
              Manta rays arrive individually, then in pairs, then in dozens. On peak
              days, more than 200 individuals have been counted in a single
              aggregation — spiralling in tight formation, mouths agape, filtering
              tonnes of plankton from the water column. It is, by any measure, one
              of the great wildlife spectacles on the planet.
            </p>
            <p className="mt-4 text-ocean-navy/70 leading-relaxed">
              In 2011, UNESCO designated Baa Atoll as a Marine Biosphere Reserve —
              the only such designation in the Maldives. Hanifaru Bay is the jewel
              of that reserve, and Liquid Salt Divers operates from the closest
              inhabited island: Dharavandhoo, just 8 minutes by boat.
            </p>

            {/* Season Calendar */}
            <div className="mt-10 p-6 bg-white rounded-lg shadow-card">
              <SeasonCalendar />
            </div>
          </div>

          {/* Species Cards */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-reef-teal mb-4">
              Marine Life You&apos;ll Encounter
            </h3>
            <div className="space-y-2">
              {SPECIES.map((species) => (
                <SpeciesCard key={species.name} {...species} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
