import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { WhatsAppCTA } from "@/components/ui/WhatsAppCTA";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { STATIC_COURSES } from "@/lib/data/courses";

export const metadata: Metadata = {
  title: "PADI Courses",
  description: "PADI courses from Bubble Maker to Divemaster at Liquid Salt Divers, Baa Atoll, Maldives. Multilingual instructors, stunning reefs, world-class training.",
};

const levelColors: Record<string, string> = {
  beginner: "bg-cyan/10 text-cyan",
  intermediate: "bg-reef-teal/10 text-reef-teal",
  advanced: "bg-ocean-navy/10 text-ocean-navy",
  professional: "bg-coral-gold/10 text-coral-gold",
  specialty: "bg-manta-black/10 text-manta-black",
};

export default function CoursesPage() {
  return (
    <>
      <Nav />
      <main id="main-content">
        <section className="relative bg-gradient-to-b from-ocean-navy to-reef-teal pt-32 pb-20 overflow-hidden">
          <img src="/images/heroes/courses.webp" alt="" className="absolute inset-0 w-full h-full object-cover" aria-hidden="true" />
          <div className="absolute inset-0 bg-gradient-to-b from-ocean-navy/60 via-ocean-navy/40 to-night-dive/80" />
          <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
            <h1 className="font-display text-5xl md:text-6xl text-salt-white">PADI Courses</h1>
            <p className="mt-4 text-lg text-salt-white/80">
              From your first breath underwater to professional-level certification
            </p>
          </div>
        </section>

        <SectionWrapper className="py-space-12 lg:py-space-16">
          <div className="mx-auto max-w-5xl px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {STATIC_COURSES.map((course) => (
                <Link
                  key={course.slug.current}
                  href={`/courses/${course.slug.current}`}
                  className="group block bg-salt-white rounded-lg p-6 shadow-card hover:shadow-hover hover:-translate-y-1 transition-all duration-200"
                >
                  {course.level && (
                    <span className={`inline-block mb-3 px-2.5 py-0.5 rounded-full text-badge uppercase font-bold ${levelColors[course.level] || ""}`}>
                      {course.level}
                    </span>
                  )}
                  <h2 className="font-display text-xl text-ocean-navy group-hover:text-cyan transition-colors">{course.title}</h2>
                  <div className="mt-2 flex items-center gap-3 text-sm text-ocean-navy/60">
                    <span>{course.duration}</span>
                    {course.minAge && <span>Age {course.minAge}+</span>}
                  </div>
                  <p className="mt-3 text-2xl font-bold text-coral-gold">${course.price}</p>
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
