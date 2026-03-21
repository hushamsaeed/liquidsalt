"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

function useCountUp(target: number, isInView: boolean, duration = 2000) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isInView, target, duration]);

  return count;
}

const quoteLines = [
  "\u201CDuring the southwest monsoon, plankton-rich currents funnel into",
  "Hanifaru Bay, triggering a cyclone feeding frenzy. Over 200 reef",
  "manta rays spiral in unison \u2014 one of the greatest wildlife",
  "spectacles in the ocean.\u201D",
];

export function MantaMadness() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const mantaCount = useCountUp(200, isInView);
  const unescoYear = useCountUp(2011, isInView, 2500);
  const boatMinutes = useCountUp(8, isInView, 1200);

  return (
    <section ref={ref} className="shimmer-overlay relative overflow-hidden bg-night-dive py-space-16 lg:py-space-24">
      {/* Caustics overlay */}
      <div className="caustics-overlay absolute inset-0 pointer-events-none z-0" />

      {/* Parallax background placeholder — will be replaced with real imagery */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-night-dive via-ocean-navy/40 to-night-dive"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <span className="text-badge uppercase tracking-widest text-coral-gold">
              The Main Event
            </span>

            <h2 className="mt-4 font-display text-4xl md:text-5xl lg:text-6xl text-salt-white leading-tight">
              Manta Madness
            </h2>

            <blockquote className="mt-8 border-l-2 border-cyan pl-6">
              <p className="font-display text-pull-quote italic text-salt-white/90 leading-relaxed">
                {quoteLines.map((line, i) => (
                  <motion.span
                    key={i}
                    className="block"
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.3 + i * 0.2 }}
                  >
                    {line}
                  </motion.span>
                ))}
              </p>
            </blockquote>

            {/* Stats */}
            <div className="mt-10 flex flex-wrap gap-8">
              <div>
                <p className="font-display text-3xl text-cyan">{mantaCount}+</p>
                <p className="text-sm text-salt-white/60 mt-1">mantas in a single aggregation</p>
              </div>
              <div>
                <p className="font-display text-3xl text-cyan">{unescoYear}</p>
                <p className="text-sm text-salt-white/60 mt-1">UNESCO Biosphere since</p>
              </div>
              <div>
                <p className="font-display text-3xl text-cyan">{boatMinutes} min</p>
                <p className="text-sm text-salt-white/60 mt-1">by boat from Dharavandhoo</p>
              </div>
            </div>

            <div className="mt-10">
              <Link href="/packages/manta-madness">
                <Button variant="primary" size="lg">
                  Manta Madness Package &rarr;
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* Right side — cinematic manta image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative aspect-[3/4] lg:aspect-auto lg:h-[600px] rounded-lg overflow-hidden"
          >
            <img
              src="/images/sections/manta-madness-feature.webp"
              alt="Manta ray silhouetted against ocean surface light at Hanifaru Bay"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-night-dive/40 to-transparent" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
