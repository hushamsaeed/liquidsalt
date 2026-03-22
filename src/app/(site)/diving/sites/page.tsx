export const revalidate = 60;

import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { WhatsAppCTA } from "@/components/ui/WhatsAppCTA";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { STATIC_DIVE_SITES } from "@/lib/data/diveSites";
import { sanityFetch } from "@/lib/sanity/fetch";
import { allDiveSitesQuery } from "@/lib/sanity/queries";

export const metadata: Metadata = {
  title: "Dive Sites — Baa Atoll",
  description: "Discover the best dive sites in Baa Atoll, Maldives. Channel drifts, thilas, cleaning stations, and Hanifaru Bay — all minutes from Dharavandhoo.",
};

export default async function DiveSitesPage() {
  const sanitySites = await sanityFetch<any[] | null>(allDiveSitesQuery, {}, null);
  const sites = sanitySites && sanitySites.length > 0 ? sanitySites : STATIC_DIVE_SITES;

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
              {sites.length} of our favourite sites — each with its own character, residents, and reason to return
            </p>
          </div>
        </section>

        <SectionWrapper className="py-space-12 lg:py-space-16">
          <div className="mx-auto max-w-5xl px-6">
            <div className="space-y-8">
              {sites.map((site: any) => (
                <div key={site._id || site.name} className="bg-salt-white rounded-lg p-8 shadow-card">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 flex-wrap">
                        <h2 className="font-display text-2xl text-ocean-navy">{site.name}</h2>
                        {site.difficulty && site.difficulty !== "All Levels" && (
                          <span className={`text-xs font-bold px-2 py-0.5 rounded-full uppercase ${
                            site.difficulty === "Advanced"
                              ? "bg-coral-gold/15 text-coral-gold"
                              : "bg-cyan/15 text-cyan"
                          }`}>
                            {site.difficulty}
                          </span>
                        )}
                      </div>
                      <div className="mt-1 flex flex-wrap gap-3 text-sm text-ocean-navy/60">
                        {site.siteType && <span>{site.siteType}</span>}
                        {site.siteType && site.depth && <span>&middot;</span>}
                        {site.depth && <span>Depth: {site.depth}</span>}
                        {site.season && site.season !== "Year-round" && (
                          <>
                            <span>&middot;</span>
                            <span>{site.season}</span>
                          </>
                        )}
                      </div>
                      <p className="mt-3 text-ocean-navy/80 leading-relaxed">{site.description}</p>
                    </div>
                  </div>

                  {/* Highlights */}
                  {site.highlights && site.highlights.length > 0 && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {site.highlights.map((h: string) => (
                        <span key={h} className="text-xs font-medium bg-cyan/10 text-cyan px-2.5 py-1 rounded-full">
                          {h}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Marine Life */}
                  {site.marineLife && site.marineLife.length > 0 && (
                    <div className="mt-3 flex flex-wrap gap-2">
                      {site.marineLife.map((m: string) => (
                        <span key={m} className="text-xs text-ocean-navy/50 bg-ocean-navy/5 px-2 py-0.5 rounded">
                          {m}
                        </span>
                      ))}
                    </div>
                  )}
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
