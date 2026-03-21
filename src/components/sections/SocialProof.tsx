"use client";

import { SectionWrapper } from "../ui/SectionWrapper";
import { TestimonialCard } from "../ui/TestimonialCard";

const TESTIMONIALS = [
  {
    name: "Sarah K.",
    country: "Australia",
    text: "Swimming with over 100 manta rays was the most incredible experience of my life. The team knew exactly where to go and made everything seamless.",
    rating: 5,
  },
  {
    name: "Marco B.",
    country: "Italy",
    text: "Best dive centre in the Maldives. Professional, friendly, and they know every cleaning station personally. Ryshyn is a legend.",
    rating: 5,
  },
  {
    name: "Yuki T.",
    country: "Japan",
    text: "Did my Advanced Open Water here. The instructors are patient, the reef is absolutely stunning, and the night dive was unforgettable.",
    rating: 5,
  },
];

export function SocialProof() {
  return (
    <SectionWrapper className="py-space-12 lg:py-space-16" id="reviews">
      <div className="mx-auto max-w-7xl px-6">
        {/* Rating header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-1 mb-2">
            {Array.from({ length: 5 }).map((_, i) => (
              <svg key={i} className="w-6 h-6 text-coral-gold" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <p className="text-2xl font-bold text-ocean-navy">5.0</p>
          <p className="text-sm text-ocean-navy/60 mt-1">Google Reviews</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <TestimonialCard key={t.name} {...t} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
