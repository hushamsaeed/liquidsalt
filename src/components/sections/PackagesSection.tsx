"use client";

import { SectionWrapper } from "../ui/SectionWrapper";
import { PackageCard } from "../ui/PackageCard";

// Static data — will be replaced with Sanity CMS data in Phase 4
const PACKAGES = [
  {
    title: "Manta Madness",
    slug: "manta-madness",
    badge: "Most Popular",
    priceFrom: 450,
    featured: true,
    image: "/images/packages/manta-madness.webp",
    inclusions: [
      "3 Hanifaru Bay snorkel trips",
      "2 guided reef dives",
      "Full equipment hire",
      "Boat transfers included",
      "Marine biologist briefing",
    ],
  },
  {
    title: "Dive Dive Dive",
    slug: "dive-dive-dive",
    priceFrom: 380,
    image: "/images/packages/dive-dive-dive.webp",
    inclusions: [
      "6 guided reef dives",
      "Full equipment hire",
      "Boat transfers included",
      "Dive log signed by instructor",
    ],
  },
  {
    title: "Dive Hanifaru",
    slug: "dive-hanifaru",
    priceFrom: 520,
    image: "/images/packages/dive-hanifaru.webp",
    inclusions: [
      "2 Hanifaru Bay dives",
      "2 premium reef dives",
      "1 night dive experience",
      "Full equipment hire",
      "Underwater photography tips",
    ],
  },
];

export function PackagesSection() {
  return (
    <SectionWrapper className="py-space-12 lg:py-space-16 bg-salt-white" id="packages">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="font-display text-4xl md:text-5xl text-ocean-navy text-center">
          Choose Your Dive
        </h2>
        <p className="mt-4 text-center text-ocean-navy/60 max-w-2xl mx-auto">
          Three packages designed around the best diving Baa Atoll has to offer.
          Every package includes boat transfers and full equipment.
        </p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {PACKAGES.map((pkg) => (
            <PackageCard key={pkg.slug} {...pkg} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
