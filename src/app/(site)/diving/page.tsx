import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { WhatsAppCTA } from "@/components/ui/WhatsAppCTA";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

export const metadata: Metadata = {
  title: "Diving in Baa Atoll",
  description: "Explore 30+ dive sites across the Baa Atoll UNESCO Marine Biosphere Reserve with Liquid Salt Divers. Channel drifts, cleaning stations, and manta ray encounters.",
};

export default function DivingPage() {
  return (
    <>
      <Nav />
      <main id="main-content">
        <section className="relative bg-gradient-to-b from-ocean-navy to-reef-teal pt-32 pb-20 overflow-hidden">
          <img src="/images/heroes/packages.webp" alt="" className="absolute inset-0 w-full h-full object-cover" aria-hidden="true" />
          <div className="absolute inset-0 bg-gradient-to-b from-ocean-navy/60 via-ocean-navy/40 to-night-dive/80" />
          <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
            <h1 className="font-display text-5xl md:text-6xl text-salt-white">Diving</h1>
            <p className="mt-4 text-lg text-salt-white/80">
              30+ dive sites in the Baa Atoll UNESCO Marine Biosphere Reserve
            </p>
          </div>
        </section>

        <SectionWrapper className="py-space-12 lg:py-space-16">
          <div className="mx-auto max-w-4xl px-6">
            <p className="text-lg text-ocean-navy/80 leading-relaxed">
              Baa Atoll is home to some of the most biodiverse marine environments on Earth. From channel drifts
              where grey reef sharks patrol to thilas carpeted in soft coral, and the legendary manta ray
              aggregations at Hanifaru Bay — every dive here is a story worth telling.
            </p>
            <p className="mt-4 text-ocean-navy/70 leading-relaxed">
              Our PADI-certified instructors dive these sites daily. They know every cleaning station,
              every current pattern, and every manta by name. Whether you&apos;re a first-time diver or
              a seasoned pro, Baa Atoll will surprise you.
            </p>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
              <Link href="/diving/sites" className="group block p-8 bg-salt-white rounded-lg shadow-card hover:shadow-hover transition-all">
                <h2 className="font-display text-2xl text-ocean-navy group-hover:text-cyan transition-colors">Dive Sites</h2>
                <p className="mt-2 text-ocean-navy/60">Explore our curated selection of the best dive sites in Baa Atoll.</p>
              </Link>
              <Link href="/marine-life" className="group block p-8 bg-salt-white rounded-lg shadow-card hover:shadow-hover transition-all">
                <h2 className="font-display text-2xl text-ocean-navy group-hover:text-cyan transition-colors">Marine Life</h2>
                <p className="mt-2 text-ocean-navy/60">Manta rays, whale sharks, eagle rays, and the reef residents you&apos;ll encounter.</p>
              </Link>
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
