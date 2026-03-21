import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { WhatsAppCTA } from "@/components/ui/WhatsAppCTA";
import { STATIC_PACKAGES } from "@/lib/data/packages";

// TODO: Replace with Sanity fetch when CMS has content
// import { client } from "@/lib/sanity/client";
// import { packageBySlugQuery, packageSlugsQuery } from "@/lib/sanity/queries";

interface PageProps {
  params: { slug: string };
}

function getPackage(slug: string) {
  return STATIC_PACKAGES.find((p) => p.slug.current === slug);
}

export async function generateStaticParams() {
  return STATIC_PACKAGES.map((p) => ({ slug: p.slug.current }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const pkg = getPackage(params.slug);
  if (!pkg) return {};
  return {
    title: `${pkg.title} | Liquid Salt Divers`,
    description: pkg.tagline || `${pkg.title} dive package at Liquid Salt Divers, Baa Atoll, Maldives.`,
  };
}

export default function PackagePage({ params }: PageProps) {
  const pkg = getPackage(params.slug);
  if (!pkg) notFound();

  const otherPackages = STATIC_PACKAGES.filter((p) => p.slug.current !== params.slug);

  return (
    <>
      <Nav />
      <main>
        {/* Hero */}
        <section className="relative bg-gradient-to-b from-ocean-navy via-reef-teal to-night-dive pt-32 pb-20">
          <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
            {pkg.badge && (
              <span className="inline-block mb-4 bg-coral-gold text-white px-4 py-1 rounded-full text-badge uppercase">
                {pkg.badge}
              </span>
            )}
            <h1 className="font-display text-5xl md:text-6xl text-salt-white">{pkg.title}</h1>
            {pkg.tagline && (
              <p className="mt-4 text-lg text-salt-white/80">{pkg.tagline}</p>
            )}
            <div className="mt-6">
              <span className="text-sm text-salt-white/60">from </span>
              <span className="text-4xl font-bold text-coral-gold">${pkg.priceFrom}</span>
              <span className="text-sm text-salt-white/60"> / {pkg.pricePer || "person"}</span>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-space-12 lg:py-space-16">
          <div className="mx-auto max-w-4xl px-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Description */}
              <div className="lg:col-span-2">
                <h2 className="font-display text-3xl text-ocean-navy mb-6">About This Package</h2>
                <p className="text-ocean-navy/80 leading-relaxed">{pkg.descriptionText}</p>

                {pkg.duration && (
                  <div className="mt-8 flex items-center gap-2 text-ocean-navy/70">
                    <svg className="w-5 h-5 text-cyan" fill="none" viewBox="0 0 20 20" aria-hidden="true">
                      <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="1.5" />
                      <path d="M10 6v4l2.5 2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                    <span className="font-medium">Duration: {pkg.duration}</span>
                  </div>
                )}
              </div>

              {/* Sidebar */}
              <div>
                <div className="bg-salt-white rounded-lg p-6 shadow-card sticky top-24">
                  <h3 className="font-semibold text-ocean-navy mb-4">What&apos;s Included</h3>
                  <ul className="space-y-2">
                    {pkg.inclusions?.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-ocean-navy/80">
                        <svg className="w-4 h-4 mt-0.5 text-cyan shrink-0" fill="none" viewBox="0 0 16 16" aria-hidden="true">
                          <path d="M3 8l3.5 3.5L13 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 space-y-3">
                    <WhatsAppCTA
                      variant="inline"
                      label="Book via WhatsApp"
                      message={`Hi! I'd like to book the ${pkg.title} package.`}
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

            {/* Other packages */}
            <div className="mt-16 border-t border-ocean-navy/10 pt-12">
              <h3 className="font-display text-2xl text-ocean-navy mb-6">Other Packages</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {otherPackages.map((other) => (
                  <Link
                    key={other.slug.current}
                    href={`/packages/${other.slug.current}`}
                    className="flex items-center gap-4 p-4 rounded-lg hover:bg-salt-white hover:shadow-card transition-all"
                  >
                    <div className="flex-1">
                      <h4 className="font-semibold text-ocean-navy">{other.title}</h4>
                      <p className="text-sm text-ocean-navy/60 mt-1">{other.tagline}</p>
                    </div>
                    <span className="text-lg font-bold text-coral-gold">${other.priceFrom}</span>
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
