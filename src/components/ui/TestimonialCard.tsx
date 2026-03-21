interface TestimonialCardProps {
  name: string;
  country?: string;
  text: string;
  rating?: number;
}

export function TestimonialCard({ name, country, text, rating = 5 }: TestimonialCardProps) {
  return (
    <div className="bg-salt-white rounded-lg p-6 shadow-card">
      {/* Stars */}
      <div className="flex gap-0.5 mb-3" aria-label={`${rating} out of 5 stars`}>
        {Array.from({ length: 5 }).map((_, i) => (
          <svg
            key={i}
            className={`w-4 h-4 ${i < rating ? "text-coral-gold" : "text-ocean-navy/15"}`}
            fill="currentColor"
            viewBox="0 0 20 20"
            aria-hidden="true"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>

      {/* Quote */}
      <p className="text-sm text-ocean-navy/80 leading-relaxed italic">&ldquo;{text}&rdquo;</p>

      {/* Author */}
      <div className="mt-4 flex items-center gap-2">
        <span className="text-sm font-semibold text-ocean-navy">{name}</span>
        {country && <span className="text-sm text-ocean-navy/50">{country}</span>}
      </div>
    </div>
  );
}
