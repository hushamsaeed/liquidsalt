import type { Metadata } from "next";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { PackageCard } from "@/components/ui/PackageCard";
import { WhatsAppCTA } from "@/components/ui/WhatsAppCTA";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { STATIC_PACKAGES } from "@/lib/data/packages";

export const metadata: Metadata = {
  title: "Dive Packages",
  description: "Dive packages at Liquid Salt Divers — Manta Madness, Dive Dive Dive, Dive Hanifaru. All-inclusive packages with equipment, boat transfers, and expert guides.",
};

export default function PackagesPage() {
  return (
    <>
      <Nav />
      <main id="main-content">
        <section className="relative bg-gradient-to-b from-ocean-navy to-reef-teal pt-32 pb-20 overflow-hidden">
          <img src="/images/heroes/packages.webp" alt="" className="absolute inset-0 w-full h-full object-cover" aria-hidden="true" />
          <div className="absolute inset-0 bg-gradient-to-b from-ocean-navy/60 via-ocean-navy/40 to-night-dive/80" />
          <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
            <h1 className="font-display text-5xl md:text-6xl text-salt-white">Packages</h1>
            <p className="mt-4 text-lg text-salt-white/80">
              Three packages designed around the best diving Baa Atoll has to offer
            </p>
          </div>
        </section>

        <SectionWrapper className="py-space-12 lg:py-space-16">
          <div className="mx-auto max-w-5xl px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {STATIC_PACKAGES.map((pkg) => (
                <PackageCard
                  key={pkg.slug.current}
                  title={pkg.title}
                  slug={pkg.slug.current}
                  priceFrom={pkg.priceFrom}
                  pricePer={pkg.pricePer}
                  badge={pkg.badge}
                  featured={pkg.featured}
                  inclusions={pkg.inclusions}
                  description={pkg.descriptionText}
                  image={`/images/packages/${pkg.slug.current}.webp`}
                />
              ))}
            </div>
          </div>
        </SectionWrapper>
      </main>
      <Footer />
      <WhatsAppCTA variant="floating" />
    </>
  );
}
