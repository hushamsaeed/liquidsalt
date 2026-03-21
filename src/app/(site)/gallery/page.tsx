"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppCTA } from "@/components/ui/WhatsAppCTA";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

type Category = "All" | "Underwater" | "Above Water" | "Marine Life" | "Island";

interface GalleryItem {
  id: number;
  src: string;
  alt: string;
  category: Exclude<Category, "All">;
}

const CATEGORIES: Category[] = ["All", "Underwater", "Above Water", "Marine Life", "Island"];

const GALLERY_ITEMS: GalleryItem[] = [
  { id: 1, src: "/images/gallery/underwater-01.webp", alt: "Manta ray gliding over the reef at Hanifaru Bay", category: "Underwater" },
  { id: 2, src: "/images/gallery/underwater-02.webp", alt: "Divers exploring a coral garden in Baa Atoll", category: "Underwater" },
  { id: 3, src: "/images/gallery/underwater-03.webp", alt: "Night dive revealing bioluminescent plankton", category: "Underwater" },
  { id: 4, src: "/images/gallery/above-water-01.webp", alt: "Dhoni boat at sunset in the Maldives", category: "Above Water" },
  { id: 5, src: "/images/gallery/above-water-02.webp", alt: "Divers gearing up on the boat deck", category: "Above Water" },
  { id: 6, src: "/images/gallery/above-water-03.webp", alt: "Golden hour over Dharavandhoo harbour", category: "Above Water" },
  { id: 7, src: "/images/gallery/marine-life-01.webp", alt: "Hawksbill turtle resting on soft coral", category: "Marine Life" },
  { id: 8, src: "/images/gallery/marine-life-02.webp", alt: "Whale shark feeding near the surface", category: "Marine Life" },
  { id: 9, src: "/images/gallery/marine-life-03.webp", alt: "Clownfish nestled in a vibrant anemone", category: "Marine Life" },
  { id: 10, src: "/images/gallery/island-01.webp", alt: "Aerial view of Dharavandhoo island", category: "Island" },
  { id: 11, src: "/images/gallery/island-02.webp", alt: "Palm-fringed sandbank at low tide", category: "Island" },
  { id: 12, src: "/images/gallery/island-03.webp", alt: "Crystal clear lagoon from the jetty", category: "Island" },
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const [lightboxItem, setLightboxItem] = useState<GalleryItem | null>(null);

  const filtered =
    activeCategory === "All"
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  const closeLightbox = useCallback(() => setLightboxItem(null), []);

  useEffect(() => {
    if (!lightboxItem) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [lightboxItem, closeLightbox]);

  return (
    <>
      <Nav />
      <main>
        {/* Hero */}
        <section className="relative bg-gradient-to-b from-ocean-navy via-reef-teal to-night-dive pt-32 pb-20">
          <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
            <h1 className="font-display text-5xl md:text-6xl text-salt-white">Gallery</h1>
            <p className="mt-4 text-lg text-salt-white/80">
              Moments captured above and below the surface in Baa Atoll
            </p>
          </div>
        </section>

        {/* Filter + Grid */}
        <SectionWrapper className="py-space-12 lg:py-space-16">
          <div className="mx-auto max-w-7xl px-6">
            {/* Category Filters */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`
                    px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200
                    ${activeCategory === cat
                      ? "bg-cyan text-ocean-navy shadow-glow"
                      : "bg-ocean-navy/5 text-ocean-navy/70 hover:bg-ocean-navy/10 hover:text-ocean-navy"
                    }
                  `}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Image Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {filtered.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setLightboxItem(item)}
                  className="group relative aspect-[4/3] overflow-hidden rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan"
                  aria-label={`View: ${item.alt}`}
                >
                  {item.src ? (
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-400"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  ) : (
                    <div className="w-full h-full bg-sand" />
                  )}
                  <div className="absolute inset-0 bg-ocean-navy/0 group-hover:bg-ocean-navy/30 transition-colors duration-300 flex items-end">
                    <span className="p-4 text-sm text-salt-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {item.alt}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </SectionWrapper>
      </main>
      <Footer />
      <WhatsAppCTA variant="floating" />

      {/* Lightbox */}
      {lightboxItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-night-dive/90 backdrop-blur-sm p-4"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label={lightboxItem.alt}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-salt-white/80 hover:text-salt-white transition-colors z-10"
            aria-label="Close lightbox"
          >
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
          <div
            className="relative max-w-5xl w-full aspect-[4/3] rounded-lg overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={lightboxItem.src}
              alt={lightboxItem.alt}
              fill
              className="object-contain"
              sizes="90vw"
              priority
            />
          </div>
          <p className="absolute bottom-6 left-0 right-0 text-center text-sm text-salt-white/70">
            {lightboxItem.alt}
          </p>
        </div>
      )}
    </>
  );
}
