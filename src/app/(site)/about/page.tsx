import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppCTA } from "@/components/ui/WhatsAppCTA";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "About Us | Our Story | Liquid Salt Divers",
  description:
    "Liquid Salt Divers is a PADI 5 Star Dive Centre on Dharavandhoo, Baa Atoll, Maldives. Learn about our story, conservation commitment, and the local island experience.",
};

export default function AboutPage() {
  return (
    <>
      <Nav />
      <main>
        {/* Hero */}
        <section className="relative bg-gradient-to-b from-ocean-navy via-reef-teal to-night-dive pt-32 pb-20">
          <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
            <h1 className="font-display text-5xl md:text-6xl text-salt-white">
              Our Story
            </h1>
            <p className="mt-4 text-lg text-salt-white/80 max-w-2xl mx-auto">
              A PADI 5 Star Dive Centre rooted in Dharavandhoo, powered by community, and committed to the reef.
            </p>
          </div>
        </section>

        {/* Founding Story */}
        <section className="py-space-12 lg:py-space-16">
          <div className="mx-auto max-w-4xl px-6">
            <h2 className="font-display text-3xl md:text-4xl text-ocean-navy mb-6">
              How It Began
            </h2>
            <div className="space-y-4 text-ocean-navy/80 leading-relaxed">
              <p>
                Liquid Salt Divers was founded on Dharavandhoo, a small island in the heart of Baa Atoll&mdash;the Maldives&apos; only UNESCO Biosphere Reserve. The idea was simple: build a dive centre that combines world-class underwater experiences with genuine local hospitality.
              </p>
              <p>
                Dharavandhoo sits just eight minutes from Hanifaru Bay, home to the largest known manta ray feeding aggregation on the planet. That proximity, combined with access to over 30 dive sites across Baa Atoll, made it the perfect base for a dive operation that could offer something truly special.
              </p>
              <p>
                From day one, the centre has been built around a core belief: that diving should be personal, not production-line. Small groups, experienced guides, and a deep knowledge of local conditions mean every trip is tailored to what the ocean offers on any given day.
              </p>
            </div>
          </div>
        </section>

        {/* PADI 5 Star */}
        <section className="py-space-12 lg:py-space-16 bg-salt-white">
          <div className="mx-auto max-w-4xl px-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
              <div className="lg:col-span-2">
                <h2 className="font-display text-3xl md:text-4xl text-ocean-navy mb-6">
                  PADI 5 Star Dive Centre
                </h2>
                <div className="space-y-4 text-ocean-navy/80 leading-relaxed">
                  <p>
                    The PADI 5 Star rating is not just a badge&mdash;it is a commitment to the highest standards in dive education, safety, and environmental responsibility. It means we offer a full range of PADI courses from beginner to professional, maintain impeccable equipment standards, and operate with qualified instructors at every level.
                  </p>
                  <p>
                    For our guests, it means confidence. Whether you are taking your first breath underwater on a Discover Scuba experience or completing your Divemaster internship, you are learning with a team that meets PADI&apos;s most rigorous criteria for quality and safety.
                  </p>
                  <p>
                    We offer courses from Bubble Maker (for children aged 8+) through to Divemaster, along with specialties including NITROX, Emergency First Response, and ReActivate for returning divers.
                  </p>
                </div>
              </div>
              <div className="bg-ocean-navy/5 rounded-lg p-8 text-center">
                <div className="text-6xl font-display text-ocean-navy mb-2">5</div>
                <p className="text-sm font-semibold text-ocean-navy uppercase tracking-wider">Star Rating</p>
                <hr className="my-4 border-ocean-navy/10" />
                <ul className="space-y-2 text-sm text-ocean-navy/70 text-left">
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 mt-0.5 text-cyan shrink-0" fill="none" viewBox="0 0 16 16" aria-hidden="true">
                      <path d="M3 8l3.5 3.5L13 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    Full course range
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 mt-0.5 text-cyan shrink-0" fill="none" viewBox="0 0 16 16" aria-hidden="true">
                      <path d="M3 8l3.5 3.5L13 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    Qualified instructors
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 mt-0.5 text-cyan shrink-0" fill="none" viewBox="0 0 16 16" aria-hidden="true">
                      <path d="M3 8l3.5 3.5L13 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    Top safety standards
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 mt-0.5 text-cyan shrink-0" fill="none" viewBox="0 0 16 16" aria-hidden="true">
                      <path d="M3 8l3.5 3.5L13 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    Environmental commitment
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Conservation */}
        <section className="py-space-12 lg:py-space-16">
          <div className="mx-auto max-w-4xl px-6">
            <h2 className="font-display text-3xl md:text-4xl text-ocean-navy mb-6">
              Conservation Commitment
            </h2>
            <div className="space-y-4 text-ocean-navy/80 leading-relaxed">
              <p>
                Operating inside a UNESCO Biosphere Reserve comes with responsibility. Conservation is not an add-on for us&mdash;it is woven into how we run the centre every day.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Reef Monitoring */}
              <div className="rounded-lg border border-ocean-navy/10 p-6">
                <div className="w-10 h-10 rounded-full bg-cyan/10 flex items-center justify-center mb-4">
                  <svg className="w-5 h-5 text-cyan" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3 className="font-semibold text-ocean-navy mb-2">Reef Monitoring</h3>
                <p className="text-sm text-ocean-navy/70 leading-relaxed">
                  Our team conducts regular reef health surveys, recording coral cover, bleaching events, and species diversity across Baa Atoll&apos;s dive sites. This data feeds directly into regional conservation planning.
                </p>
              </div>

              {/* Manta Trust */}
              <div className="rounded-lg border border-ocean-navy/10 p-6">
                <div className="w-10 h-10 rounded-full bg-cyan/10 flex items-center justify-center mb-4">
                  <svg className="w-5 h-5 text-cyan" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3 className="font-semibold text-ocean-navy mb-2">Manta Trust Partnership</h3>
                <p className="text-sm text-ocean-navy/70 leading-relaxed">
                  We work with the Manta Trust to photograph and identify individual manta rays, contributing to the world&apos;s largest manta ray database. Every sighting helps researchers track population health and movement patterns.
                </p>
              </div>

              {/* Plastic-Free */}
              <div className="rounded-lg border border-ocean-navy/10 p-6">
                <div className="w-10 h-10 rounded-full bg-cyan/10 flex items-center justify-center mb-4">
                  <svg className="w-5 h-5 text-cyan" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3 className="font-semibold text-ocean-navy mb-2">Plastic-Free Operations</h3>
                <p className="text-sm text-ocean-navy/70 leading-relaxed">
                  We have eliminated single-use plastics from our operations. Guests receive reusable water bottles, and we participate in regular beach and reef clean-ups with the Dharavandhoo community.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Dharavandhoo Community */}
        <section className="py-space-12 lg:py-space-16 bg-salt-white">
          <div className="mx-auto max-w-4xl px-6">
            <h2 className="font-display text-3xl md:text-4xl text-ocean-navy mb-6">
              The Dharavandhoo Experience
            </h2>
            <div className="space-y-4 text-ocean-navy/80 leading-relaxed">
              <p>
                Dharavandhoo is not a resort island. It is a real Maldivian community of around 1,800 people, with mosques, schools, local cafes, and a rhythm of daily life that has nothing to do with tourism. Staying here means experiencing the Maldives as it actually is&mdash;not a curated version of it.
              </p>
              <p>
                Our guests stay in locally-owned guesthouses, eat at island restaurants, and walk the sandy streets alongside residents. It is a fundamentally different experience from a resort bubble, and it is one we are proud to be part of.
              </p>
              <p>
                By choosing Dharavandhoo, you are putting money directly into the local economy. Our staff are from the island and the surrounding atoll. The guesthouses are locally owned. The food is prepared by island families. Tourism here benefits the community it is built around.
              </p>
            </div>
          </div>
        </section>

        {/* CTA to Meet the Team */}
        <section className="py-space-12 lg:py-space-16 bg-gradient-to-b from-reef-teal to-ocean-navy">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <h2 className="font-display text-3xl md:text-4xl text-salt-white mb-4">
              Meet the Team
            </h2>
            <p className="text-salt-white/80 mb-8 max-w-xl mx-auto">
              Get to know the instructors, guides, and crew who make Liquid Salt Divers what it is.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/team">
                <Button variant="primary" size="lg">
                  Meet the Team
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="ghost-light" size="lg">
                  Get in Touch
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppCTA variant="floating" />
    </>
  );
}
