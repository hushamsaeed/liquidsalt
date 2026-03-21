"use client";

import { SectionWrapper } from "../ui/SectionWrapper";
import { AccommodationCard } from "../ui/AccommodationCard";

const PROPERTIES = [
  {
    name: "Aveyla Manta Village",
    description: "Beachfront guesthouse with ocean-facing rooms, rooftop terrace, and direct beach access.",
    bookingUrl: "#",
  },
  {
    name: "Kiha Beach",
    description: "Boutique hotel steps from the harbour. Modern rooms with island-style décor.",
    bookingUrl: "#",
  },
  {
    name: "Lvis Blancura",
    description: "Contemporary guesthouse with a pool, dive-friendly facilities, and sunset views.",
    bookingUrl: "#",
  },
  {
    name: "Chak'z Beach",
    description: "Budget-friendly beachside option with warm hospitality and home-cooked Maldivian meals.",
    bookingUrl: "#",
  },
];

export function AccommodationSection() {
  return (
    <SectionWrapper className="py-space-12 lg:py-space-16 bg-sand" id="accommodation">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="font-display text-4xl md:text-5xl text-ocean-navy">
          Where to Stay on Dharavandhoo
        </h2>
        <p className="mt-4 text-ocean-navy/60 max-w-2xl">
          Our recommended beachfront properties — all within walking distance of the dive centre.
        </p>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROPERTIES.map((prop) => (
            <AccommodationCard key={prop.name} {...prop} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
