"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { Button } from "../ui/Button";

export function MantaMadness() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="relative overflow-hidden bg-night-dive py-space-16 lg:py-space-24">
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
                &ldquo;During the southwest monsoon, plankton-rich currents funnel into
                Hanifaru Bay, triggering a cyclone feeding frenzy. Over 200 reef
                manta rays spiral in unison — one of the greatest wildlife
                spectacles in the ocean.&rdquo;
              </p>
            </blockquote>

            {/* Stats */}
            <div className="mt-10 flex flex-wrap gap-8">
              <div>
                <p className="font-display text-3xl text-cyan">200+</p>
                <p className="text-sm text-salt-white/60 mt-1">mantas in a single aggregation</p>
              </div>
              <div>
                <p className="font-display text-3xl text-cyan">UNESCO</p>
                <p className="text-sm text-salt-white/60 mt-1">protected since 2011</p>
              </div>
              <div>
                <p className="font-display text-3xl text-cyan">8 min</p>
                <p className="text-sm text-salt-white/60 mt-1">by boat from Dharavandhoo</p>
              </div>
            </div>

            <div className="mt-10">
              <Link href="/packages/manta-madness">
                <Button variant="primary" size="lg">
                  Manta Madness Package →
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* Right side — cinematic image area */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative aspect-[3/4] lg:aspect-auto lg:h-[600px] rounded-lg overflow-hidden"
          >
            {/* Placeholder gradient — replace with manta photography */}
            <div className="absolute inset-0 bg-gradient-to-t from-night-dive via-ocean-navy to-reef-teal opacity-60" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <svg className="w-24 h-24 text-salt-white/20 mx-auto" fill="none" viewBox="0 0 100 100" aria-hidden="true">
                  <path d="M50 20 C30 20 10 40 10 50 C10 60 25 75 50 80 C75 75 90 60 90 50 C90 40 70 20 50 20Z" stroke="currentColor" strokeWidth="2" />
                  <circle cx="35" cy="45" r="3" fill="currentColor" />
                </svg>
                <p className="text-salt-white/30 text-sm mt-4">Manta ray imagery</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
