import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppCTA } from "@/components/ui/WhatsAppCTA";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { STATIC_EXCURSIONS } from "@/lib/data/excursions";
import { sanityFetch } from "@/lib/sanity/fetch";
import { allExcursionsQuery } from "@/lib/sanity/queries";
import { imageUrl } from "@/lib/sanity/image";

export const metadata: Metadata = {
  title: "Excursions",
  description: "Excursions from Dharavandhoo — snorkelling, sandbank trips, night snorkelling, and big game fishing in the Baa Atoll, Maldives.",
};

export default async function ExcursionsPage() {
  // Fetch from Sanity, fall back to static data
  const sanityExcursions = await sanityFetch<any[] | null>(allExcursionsQuery, {}, null);

  const excursions = sanityExcursions
    ? sanityExcursions.map((exc: any) => ({
        ...exc,
        slug: typeof exc.slug === "string" ? exc.slug : exc.slug?.current || "",
        heroImageUrl: imageUrl(exc.heroImage, 800) || `/images/experiences/${typeof exc.slug === "string" ? exc.slug : exc.slug?.current}.webp`,
      }))
    : STATIC_EXCURSIONS.map((exc) => ({
        ...exc,
        slug: exc.slug.current,
        heroImageUrl: exc.heroImage,
      }));

  return (
    <>
      <Nav />
      <main id="main-content">
        <section className="relative bg-gradient-to-b from-ocean-navy to-reef-teal pt-32 pb-20 overflow-hidden">
          <img src="/images/heroes/excursions.webp" alt="" className="absolute inset-0 w-full h-full object-cover" aria-hidden="true" />
          <div className="absolute inset-0 bg-gradient-to-b from-ocean-navy/60 via-ocean-navy/40 to-night-dive/80" />
          <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
            <h1 className="font-display text-5xl md:text-6xl text-salt-white">Excursions</h1>
            <p className="mt-4 text-lg text-salt-white/80">
              Beyond diving — ways to connect with the ocean and the island
            </p>
          </div>
        </section>

        <SectionWrapper className="py-space-12 lg:py-space-16">
          <div className="mx-auto max-w-5xl px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {excursions.map((exc: any) => (
                <Link
                  key={exc.slug}
                  href={`/excursions/${exc.slug}`}
                  className="group block bg-salt-white rounded-lg overflow-hidden shadow-card hover:shadow-hover hover:-translate-y-1 transition-all duration-200"
                >
                  <div className="relative aspect-video overflow-hidden">
                    {exc.heroImageUrl ? (
                      <img src={exc.heroImageUrl} alt={exc.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-400" />
                    ) : (
                      <div className="w-full h-full bg-ocean-navy/10" />
                    )}
                  </div>
                  <div className="p-6">
                    <h2 className="font-display text-xl text-ocean-navy group-hover:text-cyan transition-colors">{exc.title}</h2>
                    <p className="mt-2 text-sm text-ocean-navy/60">{exc.shortDescription}</p>
                    <div className="mt-3 flex items-center justify-between">
                      <span className="text-sm text-ocean-navy/50">{exc.duration}</span>
                      {exc.price && <span className="text-lg font-bold text-coral-gold">${exc.price}</span>}
                    </div>
                  </div>
                </Link>
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
