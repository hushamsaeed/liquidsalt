"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "@/components/ui/Button";

interface PackageCardProps {
  title: string;
  slug: string;
  image?: string;
  badge?: string;
  priceFrom: number;
  pricePer?: string;
  inclusions?: string[];
  description?: string;
  featured?: boolean;
}

export function PackageCard({
  title,
  slug,
  image,
  badge,
  priceFrom,
  pricePer = "person",
  inclusions = [],
  description,
  featured = false,
}: PackageCardProps) {
  const [expanded, setExpanded] = useState(false);
  const hasExpandableContent = inclusions.length > 6 || !!description;

  return (
    <div
      onClick={() => hasExpandableContent && setExpanded((prev) => !prev)}
      className={`
        group relative flex flex-col
        bg-salt-white rounded-lg overflow-hidden
        shadow-card hover:shadow-[0_8px_40px_rgba(0,180,216,0.25)] hover:-translate-y-[6px]
        transition-all duration-200
        ${featured ? "border-t-4 border-coral-gold" : ""}
        ${hasExpandableContent ? "cursor-pointer" : ""}
      `}
    >
      {/* Image */}
      <div className="relative aspect-video overflow-hidden">
        {image ? (
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-400"
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
          />
        ) : (
          <div className="w-full h-full bg-ocean-navy/10" />
        )}
        {badge && (
          <span className="absolute top-3 left-3 bg-coral-gold text-white px-3 py-1 rounded-full text-badge uppercase">
            {badge}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-6">
        <h3 className="font-display text-card-title text-ocean-navy">{title}</h3>

        {/* Price */}
        <div className="mt-2 mb-4">
          <span className="text-card-price-sub text-ocean-navy/60">from </span>
          <span className="text-card-price text-coral-gold">${priceFrom}</span>
          <span className="text-card-price-sub text-ocean-navy/60"> / {pricePer}</span>
        </div>

        {/* Inclusions */}
        {inclusions.length > 0 && (
          <ul className="mb-4 space-y-1.5 flex-1">
            {(expanded ? inclusions : inclusions.slice(0, 6)).map((item) => (
              <li key={item} className="flex items-start gap-2 text-inclusion text-ocean-navy/80">
                <svg className="w-4 h-4 mt-0.5 text-cyan shrink-0" fill="none" viewBox="0 0 16 16" aria-hidden="true">
                  <path d="M3 8l3.5 3.5L13 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {item}
              </li>
            ))}
          </ul>
        )}

        {/* Expandable description */}
        <AnimatePresence>
          {expanded && description && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <p className="mb-4 text-sm text-ocean-navy/70 leading-relaxed">{description}</p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Toggle text */}
        {hasExpandableContent && (
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setExpanded((prev) => !prev);
            }}
            className="mb-4 text-sm font-medium text-cyan hover:text-reef-teal transition-colors duration-200 text-left"
          >
            {expanded ? "Close" : "See details"}
          </button>
        )}

        {/* CTA */}
        <Link
          href={`/packages/${slug}`}
          className="mt-auto"
          onClick={(e) => e.stopPropagation()}
        >
          <Button variant="primary" fullWidth>
            Book This Package
          </Button>
        </Link>
      </div>
    </div>
  );
}
