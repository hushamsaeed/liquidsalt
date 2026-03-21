import Image from "next/image";

const credentials = [
  { label: "PADI 5 Star", icon: "padi" },
  { label: "Hanifaru Bay", icon: "pin" },
  { label: "Baa Atoll UNESCO Reserve", icon: "shield" },
  { label: "International Instructors", icon: "globe" },
];

export function CredentialStrip() {
  return (
    <section className="bg-night-dive py-4 overflow-hidden" aria-label="Credentials">
      {/* Desktop: static flex row */}
      <div className="hidden md:flex mx-auto max-w-7xl items-center justify-center gap-8 px-6">
        {credentials.map((cred) => (
          <div key={cred.label} className="flex items-center gap-2 text-salt-white/80">
            <CredIcon type={cred.icon} />
            <span className="text-sm font-medium tracking-wide">{cred.label}</span>
          </div>
        ))}
      </div>

      {/* Mobile: marquee scroll */}
      <div className="md:hidden relative">
        <div className="flex animate-marquee gap-8 whitespace-nowrap">
          {[...credentials, ...credentials].map((cred, i) => (
            <div key={`${cred.label}-${i}`} className="flex items-center gap-2 text-salt-white/80">
              <CredIcon type={cred.icon} />
              <span className="text-sm font-medium tracking-wide">{cred.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CredIcon({ type }: { type: string }) {
  const cls = "w-4 h-4 text-cyan shrink-0";
  switch (type) {
    case "padi":
      return (
        <svg className={cls} fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
          <path d="M8 1l2 3h3l-1 3 2 2-3 1-1 3-2-2-2 2-1-3-3-1 2-2-1-3h3z" />
        </svg>
      );
    case "pin":
      return (
        <svg className={cls} fill="none" viewBox="0 0 16 16" aria-hidden="true">
          <path d="M8 1C5.24 1 3 3.24 3 6c0 4 5 9 5 9s5-5 5-9c0-2.76-2.24-5-5-5zm0 7a2 2 0 110-4 2 2 0 010 4z" fill="currentColor" />
        </svg>
      );
    case "shield":
      return (
        <svg className={cls} fill="none" viewBox="0 0 16 16" aria-hidden="true">
          <path d="M8 1L2 4v4c0 3.5 2.6 6.8 6 7.5 3.4-.7 6-4 6-7.5V4L8 1z" fill="currentColor" />
        </svg>
      );
    case "globe":
      return (
        <svg className={cls} fill="none" viewBox="0 0 16 16" aria-hidden="true">
          <circle cx="8" cy="8" r="6.5" stroke="currentColor" strokeWidth="1.5" />
          <ellipse cx="8" cy="8" rx="3" ry="6.5" stroke="currentColor" strokeWidth="1.5" />
          <path d="M1.5 8h13" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      );
    default:
      return null;
  }
}
