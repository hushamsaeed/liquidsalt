"use client";

import { WhatsAppCTA } from "@/components/ui/WhatsAppCTA";

export function PreSeasonCTA() {
  return (
    <section className="wave-divider bg-coral-gold pt-16 pb-space-8 lg:pt-16 lg:pb-space-12" id="pre-season-offer">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <h2 className="font-display text-3xl md:text-4xl text-white">
          Pre-Season Discounts Are Back
        </h2>
        <p className="mt-4 text-lg text-white/90">
          Get <strong>15% off</strong> all packages booked before <strong>20 May 2026</strong>.
          The manta season waits for no one.
        </p>
        <div className="mt-8">
          <WhatsAppCTA
            variant="inline"
            label="Book Now via WhatsApp"
            message="Hi! I'd like to book a package with the 15% pre-season discount."
            className="bg-white text-coral-gold hover:bg-salt-white animate-[gentle-pulse_3s_ease-in-out_infinite]"
          />
        </div>
      </div>
    </section>
  );
}
