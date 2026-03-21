"use client";

import { SectionWrapper } from "../ui/SectionWrapper";
import { ExperienceTile } from "../ui/ExperienceTile";

const EXPERIENCES = [
  { title: "Scuba Diving", description: "Explore 30+ reef and channel dive sites across Baa Atoll", href: "/diving", image: "/images/experiences/scuba-diving.webp" },
  { title: "PADI Courses", description: "From Bubble Maker to Divemaster — complete training pathway", href: "/courses", image: "/images/experiences/padi-courses.webp" },
  { title: "Snorkelling", description: "Swim alongside manta rays at Hanifaru Bay", href: "/excursions/snorkelling", image: "/images/experiences/snorkelling.webp" },
  { title: "Sandbank Trip", description: "Pristine white sand surrounded by turquoise lagoon", href: "/excursions/sandbank", image: "/images/experiences/sandbank.webp" },
  { title: "Night Snorkel", description: "Bioluminescent plankton and nocturnal reef creatures", href: "/excursions/night-snorkel", image: "/images/experiences/night-snorkel.webp" },
  { title: "Big Game Fishing", description: "Yellowfin tuna, wahoo, and sailfish in deep blue water", href: "/excursions/big-game-fishing", image: "/images/experiences/big-game-fishing.webp" },
];

export function ExperiencesSection() {
  return (
    <SectionWrapper className="py-space-12 lg:py-space-16" id="experiences">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="font-display text-4xl md:text-5xl text-ocean-navy text-center">
          Experiences
        </h2>
        <p className="mt-4 text-center text-ocean-navy/60 max-w-2xl mx-auto">
          More than diving — an island full of ways to connect with the ocean.
        </p>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {EXPERIENCES.map((exp) => (
            <ExperienceTile key={exp.title} {...exp} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
