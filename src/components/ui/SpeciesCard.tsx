import Image from "next/image";

interface SpeciesCardProps {
  name: string;
  scientificName?: string;
  description: string;
  image?: string;
  season?: string;
}

export function SpeciesCard({ name, scientificName, description, image, season }: SpeciesCardProps) {
  return (
    <div className="group flex gap-4 p-4 rounded-lg hover:bg-ocean-navy/5 transition-colors duration-200">
      {/* Image */}
      <div className="relative w-20 h-20 shrink-0 rounded-lg overflow-hidden">
        {image ? (
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover"
            sizes="80px"
          />
        ) : (
          <div className="w-full h-full bg-ocean-navy/10 flex items-center justify-center">
            <svg className="w-8 h-8 text-ocean-navy/20" fill="none" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
            </svg>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <h4 className="font-body text-base font-bold text-ocean-navy">{name}</h4>
        {scientificName && (
          <p className="text-xs text-reef-teal italic">{scientificName}</p>
        )}
        <p className="mt-1 text-sm text-ocean-navy/70 line-clamp-2">{description}</p>
        {season && (
          <span className="mt-1.5 inline-block text-xs font-medium text-cyan bg-cyan/10 px-2 py-0.5 rounded-full">
            {season}
          </span>
        )}
      </div>
    </div>
  );
}
