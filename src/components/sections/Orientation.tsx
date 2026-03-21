"use client";

import { SectionWrapper } from "../ui/SectionWrapper";
import { IslandMap } from "../maps/IslandMap";

export function Orientation() {
  return (
    <SectionWrapper className="py-space-12 lg:py-space-16" id="where-you-are">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div>
            <h2 className="font-display text-4xl md:text-5xl text-ocean-navy">
              Where You Are
            </h2>
            <p className="mt-6 text-lg text-ocean-navy/80 leading-relaxed">
              Dharavandhoo is a local island in the heart of the{" "}
              <strong>Baa Atoll UNESCO Marine Biosphere Reserve</strong> — the
              only UNESCO biosphere in the Maldives. From our dive centre, Hanifaru
              Bay is just <strong>8 minutes by boat</strong>.
            </p>
            <p className="mt-4 text-ocean-navy/70 leading-relaxed">
              Unlike resort islands, Dharavandhoo offers an authentic Maldivian
              experience. Walk the sandy streets, eat at local cafés, and dive some
              of the most biodiverse reefs on Earth — all from one island.
            </p>

            {/* Stats */}
            <div className="mt-8 grid grid-cols-3 gap-6">
              <div>
                <p className="font-display text-3xl text-cyan">8 min</p>
                <p className="text-sm text-ocean-navy/60 mt-1">to Hanifaru Bay</p>
              </div>
              <div>
                <p className="font-display text-3xl text-cyan">30+</p>
                <p className="text-sm text-ocean-navy/60 mt-1">dive sites</p>
              </div>
              <div>
                <p className="font-display text-3xl text-cyan">2011</p>
                <p className="text-sm text-ocean-navy/60 mt-1">UNESCO protected</p>
              </div>
            </div>
          </div>

          {/* Map */}
          <IslandMap className="h-[400px] lg:h-[500px]" />
        </div>
      </div>
    </SectionWrapper>
  );
}
