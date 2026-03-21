import Image from "next/image";
import Link from "next/link";

interface ExperienceTileProps {
  title: string;
  description: string;
  href: string;
  image?: string;
}

export function ExperienceTile({ title, description, href, image }: ExperienceTileProps) {
  return (
    <Link
      href={href}
      className="group relative block aspect-[4/3] overflow-hidden rounded-lg"
    >
      {/* Background */}
      {image ? (
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-400"
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
        />
      ) : (
        <div className="absolute inset-0 bg-ocean-navy" />
      )}

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-manta-black/80 via-manta-black/30 to-transparent" />

      {/* Hover border */}
      <div className="absolute inset-0 border-2 border-transparent group-hover:border-cyan rounded-lg transition-colors duration-300" />

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-5">
        <h3 className="font-display text-xl font-semibold text-salt-white">{title}</h3>
        <p className="mt-1 text-sm text-salt-white/70 line-clamp-2">{description}</p>
        <span className="mt-2 inline-flex items-center gap-1 text-sm font-medium text-cyan opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Learn more
          <svg className="w-4 h-4" fill="none" viewBox="0 0 16 16" aria-hidden="true">
            <path d="M3 8h10m-4-4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </div>
    </Link>
  );
}
