import Image from "next/image";
import Link from "next/link";
import { Button } from "./Button";

interface PackageCardProps {
  title: string;
  slug: string;
  image?: string;
  badge?: string;
  priceFrom: number;
  pricePer?: string;
  inclusions?: string[];
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
  featured = false,
}: PackageCardProps) {
  return (
    <div
      className={`
        group relative flex flex-col
        bg-salt-white rounded-lg overflow-hidden
        shadow-card hover:shadow-hover hover:-translate-y-1
        transition-all duration-200
        ${featured ? "border-t-4 border-coral-gold" : ""}
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
          <ul className="mb-6 space-y-1.5 flex-1">
            {inclusions.slice(0, 6).map((item) => (
              <li key={item} className="flex items-start gap-2 text-inclusion text-ocean-navy/80">
                <svg className="w-4 h-4 mt-0.5 text-cyan shrink-0" fill="none" viewBox="0 0 16 16" aria-hidden="true">
                  <path d="M3 8l3.5 3.5L13 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {item}
              </li>
            ))}
          </ul>
        )}

        {/* CTA */}
        <Link href={`/packages/${slug}`} className="mt-auto">
          <Button variant="primary" fullWidth>
            Book This Package
          </Button>
        </Link>
      </div>
    </div>
  );
}
