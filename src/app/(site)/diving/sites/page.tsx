import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { WhatsAppCTA } from "@/components/ui/WhatsAppCTA";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

export const metadata: Metadata = {
  title: "Dive Sites — Baa Atoll",
  description: "Discover the best dive sites in Baa Atoll, Maldives. Channel drifts, thilas, cleaning stations, and Hanifaru Bay — all minutes from Dharavandhoo.",
};

const DIVE_SITES = [
  {
    name: "Hanifaru Bay",
    depth: "5–15m",
    type: "Bay / Aggregation Site",
    description: "The main event. UNESCO-protected bay where plankton-rich currents trigger cyclone feeding aggregations of 200+ manta rays. Snorkelling and diving permitted with licensed guides only.",
    highlights: ["Manta ray aggregations", "Whale shark sightings", "UNESCO protected"],
  },
  {
    name: "Dhonfanu Thila",
    depth: "12–30m",
    type: "Thila (Submerged Pinnacle)",
    description: "A stunning underwater pinnacle covered in soft corals and sea fans. Grey reef sharks patrol the deeper edges while schools of fusiliers swirl above the reef top.",
    highlights: ["Grey reef sharks", "Soft coral gardens", "Strong current drifts"],
  },
  {
    name: "Dharavandhoo Corner",
    depth: "10–25m",
    type: "Channel / Reef",
    description: "Our house reef and a favourite for relaxed afternoon dives. A sloping reef wall with overhangs sheltering nurse sharks, moray eels, and the occasional eagle ray.",
    highlights: ["Nurse sharks", "Eagle rays", "Easy access from island"],
  },
  {
    name: "Nelivaru Haa",
    depth: "15–30m",
    type: "Channel",
    description: "A channel dive best done as a drift. Manta rays visit the cleaning stations here year-round, hovering motionless while cleaner wrasse do their work.",
    highlights: ["Manta cleaning station", "Drift diving", "Year-round mantas"],
  },
  {
    name: "Maavaru Kandu",
    depth: "12–28m",
    type: "Channel",
    description: "Wide channel with excellent visibility and reliable current. White-tip reef sharks rest on the sandy bottom while Napoleon wrasse cruise the reef edge.",
    highlights: ["White-tip reef sharks", "Napoleon wrasse", "Excellent visibility"],
  },
  {
    name: "Kudalhavahaa Thila",
    depth: "8–25m",
    type: "Thila",
    description: "A compact thila surrounded by deep blue. The reef top at 8m is perfect for safety stops, with hawksbill turtles often seen grazing on the sponges.",
    highlights: ["Hawksbill turtles", "Compact reef", "Great for photography"],
  },
];

export default function DiveSitesPage() {
  return (
    <>
      <Nav />
      <main id="main-content">
        <section className="relative bg-gradient-to-b from-ocean-navy to-reef-teal pt-32 pb-20 overflow-hidden">
          <img src="/images/heroes/packages.webp" alt="" className="absolute inset-0 w-full h-full object-cover" aria-hidden="true" />
          <div className="absolute inset-0 bg-gradient-to-b from-ocean-navy/60 via-ocean-navy/40 to-night-dive/80" />
          <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
            <span className="inline-block mb-4 bg-cyan/20 text-cyan px-3 py-1 rounded-full text-badge uppercase font-bold">
              Baa Atoll
            </span>
            <h1 className="font-display text-5xl md:text-6xl text-salt-white">Dive Sites</h1>
            <p className="mt-4 text-lg text-salt-white/80">
              Six of our favourite sites — each with its own character, residents, and reason to return
            </p>
          </div>
        </section>

        <SectionWrapper className="py-space-12 lg:py-space-16">
          <div className="mx-auto max-w-5xl px-6">
            <div className="space-y-8">
              {DIVE_SITES.map((site) => (
                <div key={site.name} className="bg-salt-white rounded-lg p-8 shadow-card">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div className="flex-1">
                      <h2 className="font-display text-2xl text-ocean-navy">{site.name}</h2>
                      <div className="mt-1 flex flex-wrap gap-3 text-sm text-ocean-navy/60">
                        <span>{site.type}</span>
                        <span>&middot;</span>
                        <span>Depth: {site.depth}</span>
                      </div>
                      <p className="mt-3 text-ocean-navy/80 leading-relaxed">{site.description}</p>
                    </div>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {site.highlights.map((h) => (
                      <span key={h} className="text-xs font-medium bg-cyan/10 text-cyan px-2.5 py-1 rounded-full">
                        {h}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Link href="/packages">
                <Button variant="primary" size="lg">View Dive Packages</Button>
              </Link>
            </div>
          </div>
        </SectionWrapper>
      </main>
      <Footer />
      <WhatsAppCTA variant="floating" />
    </>
  );
}
