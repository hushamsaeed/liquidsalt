"use client";

import { useRef, useEffect, useState } from "react";
import { useInView } from "framer-motion";
import { SectionWrapper } from "../ui/SectionWrapper";
import { IslandMap } from "../maps/IslandMap";

function CountUp({ end, suffix = "", duration = 2000 }: { end: number; suffix?: string; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const start = 0;
    const startTime = Date.now();
    const tick = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      setValue(Math.floor(start + (end - start) * eased));
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [isInView, end, duration]);

  return <span ref={ref}>{value}{suffix}</span>;
}

export function Orientation() {
  return (
    <SectionWrapper className="py-space-12 lg:py-space-16" id="where-you-are">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-12 items-center">
          {/* Text — 40% on desktop */}
          <div>
            <h2 className="font-display text-4xl md:text-5xl text-gradient-ocean">
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
              experience. Walk the sandy streets, eat at local caf&eacute;s, and dive some
              of the most biodiverse reefs on Earth — all from one island.
            </p>

            {/* Stats with count-up */}
            <div className="mt-8 grid grid-cols-3 gap-6">
              <div>
                <p className="font-display text-3xl text-cyan">
                  <CountUp end={8} duration={1200} /> min
                </p>
                <p className="text-sm text-ocean-navy/60 mt-1">to Hanifaru Bay</p>
              </div>
              <div>
                <p className="font-display text-3xl text-cyan">
                  <CountUp end={30} duration={1500} />+
                </p>
                <p className="text-sm text-ocean-navy/60 mt-1">dive sites</p>
              </div>
              <div>
                <p className="font-display text-3xl text-cyan">
                  <CountUp end={2011} duration={2000} />
                </p>
                <p className="text-sm text-ocean-navy/60 mt-1">UNESCO protected</p>
              </div>
            </div>
          </div>

          {/* Map — 60% on desktop */}
          <IslandMap className="h-[400px] lg:h-[500px]" />
        </div>
      </div>
    </SectionWrapper>
  );
}
