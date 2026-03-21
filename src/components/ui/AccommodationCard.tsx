import Image from "next/image";

interface AccommodationCardProps {
  name: string;
  description: string;
  image?: string;
  bookingUrl?: string;
}

export function AccommodationCard({ name, description, image, bookingUrl }: AccommodationCardProps) {
  return (
    <div className="group bg-salt-white rounded-lg overflow-hidden shadow-card hover:shadow-hover transition-all duration-200">
      {/* Image */}
      <div className="relative aspect-video overflow-hidden">
        {image ? (
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-400"
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw"
          />
        ) : (
          <div className="w-full h-full bg-sand" />
        )}
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="font-display text-lg font-semibold text-ocean-navy">{name}</h3>
        <p className="mt-1 text-sm text-ocean-navy/70 line-clamp-2">{description}</p>
        {bookingUrl && (
          <a
            href={bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-cyan hover:text-reef-teal transition-colors"
          >
            View Property
            <svg className="w-3 h-3" fill="none" viewBox="0 0 12 12" aria-hidden="true">
              <path d="M2 10L10 2m0 0H4m6 0v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        )}
      </div>
    </div>
  );
}
