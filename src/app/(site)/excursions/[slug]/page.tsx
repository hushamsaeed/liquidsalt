import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { WhatsAppCTA } from "@/components/ui/WhatsAppCTA";
import { STATIC_EXCURSIONS } from "@/lib/data/excursions";

interface PageProps {
  params: { slug: string };
}

function getExcursion(slug: string) {
  return STATIC_EXCURSIONS.find((e) => e.slug.current === slug);
}

export async function generateStaticParams() {
  return STATIC_EXCURSIONS.map((e) => ({ slug: e.slug.current }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const excursion = getExcursion(params.slug);
  if (!excursion) return {};
  return {
    title: `${excursion.title} | Liquid Salt Divers`,
    description:
      excursion.shortDescription ||
      `${excursion.title} excursion at Liquid Salt Divers, Baa Atoll, Maldives.`,
  };
}

export default function ExcursionPage({ params }: PageProps) {
  const excursion = getExcursion(params.slug);
  if (!excursion) notFound();

  const relatedExcursions = STATIC_EXCURSIONS.filter(
    (e) => e.slug.current !== params.slug
  );

  return (
    <>
      <Nav />
      <main>
        {/* Hero */}
        <section className="relative bg-gradient-to-b from-ocean-navy via-reef-teal to-night-dive pt-32 pb-20 overflow-hidden">
          {excursion.heroImage && (
            <>
              <img src={excursion.heroImage} alt="" className="absolute inset-0 w-full h-full object-cover" aria-hidden="true" />
              <div className="absolute inset-0 bg-gradient-to-b from-ocean-navy/60 via-ocean-navy/40 to-night-dive/80" />
            </>
          )}
          <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
            <span className="inline-block mb-4 bg-coral-gold text-white px-4 py-1 rounded-full text-badge uppercase">
              Excursion
            </span>
            <h1 className="font-display text-5xl md:text-6xl text-salt-white">
              {excursion.title}
            </h1>
            {excursion.shortDescription && (
              <p className="mt-4 text-lg text-salt-white/80">
                {excursion.shortDescription}
              </p>
            )}
            <div className="mt-6">
              <span className="text-sm text-salt-white/60">from </span>
              <span className="text-4xl font-bold text-coral-gold">
                ${excursion.price}
              </span>
              <span className="text-sm text-salt-white/60"> / person</span>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-space-12 lg:py-space-16">
          <div className="mx-auto max-w-4xl px-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Description */}
              <div className="lg:col-span-2">
                <h2 className="font-display text-3xl text-ocean-navy mb-6">
                  About This Excursion
                </h2>
                <p className="text-ocean-navy/80 leading-relaxed">
                  {excursion.descriptionText}
                </p>

                {excursion.duration && (
                  <div className="mt-8 flex items-center gap-2 text-ocean-navy/70">
                    <svg
                      className="w-5 h-5 text-cyan"
                      fill="none"
                      viewBox="0 0 20 20"
                      aria-hidden="true"
                    >
                      <circle
                        cx="10"
                        cy="10"
                        r="8"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      />
                      <path
                        d="M10 6v4l2.5 2.5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    </svg>
                    <span className="font-medium">
                      Duration: {excursion.duration}
                    </span>
                  </div>
                )}
              </div>

              {/* Sidebar */}
              <div>
                <div className="bg-salt-white rounded-lg p-6 shadow-card sticky top-24">
                  <h3 className="font-semibold text-ocean-navy mb-4">
                    What&apos;s Included
                  </h3>
                  <ul className="space-y-2">
                    {excursion.included?.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-sm text-ocean-navy/80"
                      >
                        <svg
                          className="w-4 h-4 mt-0.5 text-cyan shrink-0"
                          fill="none"
                          viewBox="0 0 16 16"
                          aria-hidden="true"
                        >
                          <path
                            d="M3 8l3.5 3.5L13 5"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 space-y-3">
                    <WhatsAppCTA
                      variant="inline"
                      label="Book via WhatsApp"
                      message={`Hi! I'd like to book the ${excursion.title} excursion.`}
                      className="w-full justify-center"
                    />
                    <Link href="/contact" className="block">
                      <Button variant="ghost-dark" fullWidth>
                        Send Enquiry
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Related Excursions */}
            <div className="mt-16 border-t border-ocean-navy/10 pt-12">
              <h3 className="font-display text-2xl text-ocean-navy mb-6">
                Other Excursions
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {relatedExcursions.map((other) => (
                  <Link
                    key={other.slug.current}
                    href={`/excursions/${other.slug.current}`}
                    className="flex items-center gap-4 p-4 rounded-lg hover:bg-salt-white hover:shadow-card transition-all"
                  >
                    <div className="flex-1">
                      <h4 className="font-semibold text-ocean-navy">
                        {other.title}
                      </h4>
                      <p className="text-sm text-ocean-navy/60 mt-1">
                        {other.shortDescription}
                      </p>
                    </div>
                    <span className="text-lg font-bold text-coral-gold">
                      ${other.price}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppCTA variant="floating" />
    </>
  );
}
