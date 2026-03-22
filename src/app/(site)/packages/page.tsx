import type { Metadata } from "next";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { PackageCard } from "@/components/ui/PackageCard";
import { WhatsAppCTA } from "@/components/ui/WhatsAppCTA";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { STATIC_PACKAGES } from "@/lib/data/packages";
import { sanityFetch } from "@/lib/sanity/fetch";
import { allPackagesQuery } from "@/lib/sanity/queries";
import { imageUrl } from "@/lib/sanity/image";
import { toPlainText } from "@/lib/sanity/portableText";

export const metadata: Metadata = {
  title: "Dive Packages",
  description: "Dive packages at Liquid Salt Divers — Manta Madness, Dive Dive Dive, Dive Hanifaru. All-inclusive packages with equipment, boat transfers, and expert guides.",
};

export default async function PackagesPage() {
  // Fetch from Sanity, fall back to static data
  const sanityPackages = await sanityFetch<any[] | null>(allPackagesQuery, {}, null);

  const packages = sanityPackages
    ? sanityPackages.map((pkg: any) => ({
        ...pkg,
        slug: typeof pkg.slug === "string" ? pkg.slug : pkg.slug?.current || "",
        image: imageUrl(pkg.cardImage || pkg.heroImage, 800) || `/images/packages/${typeof pkg.slug === "string" ? pkg.slug : pkg.slug?.current}.webp`,
        descriptionText: toPlainText(pkg.description),
      }))
    : STATIC_PACKAGES.map((pkg) => ({
        ...pkg,
        slug: pkg.slug.current,
        image: `/images/packages/${pkg.slug.current}.webp`,
      }));

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
              {packages.map((pkg: any) => (
                <PackageCard
                  key={pkg.slug}
                  title={pkg.title}
                  slug={pkg.slug}
                  priceFrom={pkg.priceFrom}
                  pricePer={pkg.pricePer}
                  badge={pkg.badge}
                  featured={pkg.featured}
                  inclusions={pkg.inclusions}
                  description={pkg.descriptionText}
                  image={pkg.image}
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
