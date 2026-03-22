export const revalidate = 60;

import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { WhatsAppCTA } from "@/components/ui/WhatsAppCTA";
import { STATIC_COURSES } from "@/lib/data/courses";
import { sanityFetch } from "@/lib/sanity/fetch";
import { courseBySlugQuery, courseSlugsQuery } from "@/lib/sanity/queries";
import { imageUrl } from "@/lib/sanity/image";
import { toPlainText } from "@/lib/sanity/portableText";

interface PageProps {
  params: { slug: string };
}

async function getCourse(slug: string) {
  // Try Sanity first
  const sanityCourse = await sanityFetch<any>(courseBySlugQuery, { slug }, null);
  if (sanityCourse) {
    return {
      ...sanityCourse,
      heroImage: imageUrl(sanityCourse.heroImage, 1920) || undefined,
      overviewText: toPlainText(sanityCourse.overview),
      slug: typeof sanityCourse.slug === "string"
        ? { current: sanityCourse.slug }
        : sanityCourse.slug,
    };
  }
  // Fallback to static
  return STATIC_COURSES.find((c) => c.slug.current === slug) || null;
}

export async function generateStaticParams() {
  const sanitySlugs = await sanityFetch<{ slug: string }[]>(courseSlugsQuery, {}, []);
  const staticSlugs = STATIC_COURSES.map((c) => ({ slug: c.slug.current }));
  const allSlugs = [...staticSlugs];
  for (const s of sanitySlugs) {
    if (!allSlugs.find((x) => x.slug === s.slug)) allSlugs.push(s);
  }
  return allSlugs;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const course = await getCourse(params.slug);
  if (!course) return {};
  return {
    title: `${course.title} | PADI Course | Liquid Salt Divers`,
    description: `${course.title} — ${course.duration}, $${course.price}. Learn to dive in Baa Atoll, Maldives with Liquid Salt Divers.`,
  };
}

const levelColors: Record<string, string> = {
  beginner: "bg-cyan/10 text-cyan",
  intermediate: "bg-reef-teal/10 text-reef-teal",
  advanced: "bg-ocean-navy/10 text-ocean-navy",
  professional: "bg-coral-gold/10 text-coral-gold",
  specialty: "bg-manta-black/10 text-manta-black",
};

export default async function CoursePage({ params }: PageProps) {
  const course = await getCourse(params.slug);
  if (!course) notFound();

  const relatedCourses = STATIC_COURSES.filter(
    (c) => c.slug.current !== params.slug && c.level === course.level
  ).slice(0, 2);

  return (
    <>
      <Nav />
      <main>
        {/* Hero */}
        <section className="relative bg-gradient-to-b from-ocean-navy to-reef-teal pt-32 pb-20">
          <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
            {course.level && (
              <span className={`inline-block mb-4 px-3 py-1 rounded-full text-badge uppercase font-bold ${levelColors[course.level] || "bg-ocean-navy/10 text-ocean-navy"}`}>
                {course.level}
              </span>
            )}
            <h1 className="font-display text-5xl md:text-6xl text-salt-white">{course.title}</h1>
            <div className="mt-6 flex items-center justify-center gap-6 text-salt-white/70">
              {course.duration && (
                <span className="flex items-center gap-1.5">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 16 16" aria-hidden="true">
                    <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.5" />
                    <path d="M8 5v3l2 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                  {course.duration}
                </span>
              )}
              {course.minAge && (
                <span>Age {course.minAge}+</span>
              )}
            </div>
            <div className="mt-4">
              <span className="text-4xl font-bold text-coral-gold">${course.price}</span>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-space-12 lg:py-space-16">
          <div className="mx-auto max-w-4xl px-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Main content */}
              <div className="lg:col-span-2">
                <h2 className="font-display text-3xl text-ocean-navy mb-6">Overview</h2>
                <p className="text-ocean-navy/80 leading-relaxed">{course.overviewText}</p>

                {/* Prerequisites */}
                {course.prerequisites && course.prerequisites.length > 0 && (
                  <div className="mt-10">
                    <h3 className="font-semibold text-ocean-navy mb-3">Prerequisites</h3>
                    <ul className="space-y-2">
                      {course.prerequisites.map((req: string) => (
                        <li key={req} className="flex items-start gap-2 text-sm text-ocean-navy/80">
                          <svg className="w-4 h-4 mt-0.5 text-reef-teal shrink-0" fill="none" viewBox="0 0 16 16" aria-hidden="true">
                            <path d="M3 8l3.5 3.5L13 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Sidebar */}
              <div>
                <div className="bg-salt-white rounded-lg p-6 shadow-card sticky top-24">
                  <h3 className="font-semibold text-ocean-navy mb-4">What&apos;s Included</h3>
                  <ul className="space-y-2">
                    {course.included?.map((item: string) => (
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
                      label="Enquire via WhatsApp"
                      message={`Hi! I'd like to enquire about the ${course.title} course.`}
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

            {/* Related courses */}
            {relatedCourses.length > 0 && (
              <div className="mt-16 border-t border-ocean-navy/10 pt-12">
                <h3 className="font-display text-2xl text-ocean-navy mb-6">Related Courses</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {relatedCourses.map((other) => (
                    <Link
                      key={other.slug.current}
                      href={`/courses/${other.slug.current}`}
                      className="flex items-center gap-4 p-4 rounded-lg hover:bg-salt-white hover:shadow-card transition-all"
                    >
                      <div className="flex-1">
                        <h4 className="font-semibold text-ocean-navy">{other.title}</h4>
                        <p className="text-sm text-ocean-navy/60 mt-1">{other.duration} &middot; Age {other.minAge}+</p>
                      </div>
                      <span className="text-lg font-bold text-coral-gold">${other.price}</span>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppCTA variant="floating" />
    </>
  );
}
