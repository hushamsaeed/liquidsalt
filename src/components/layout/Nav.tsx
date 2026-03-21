"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const NAV_ITEMS = [
  {
    label: "Diving",
    href: "/diving",
    children: [
      { label: "Dive Sites", href: "/diving/sites" },
      { label: "Marine Life", href: "/marine-life" },
    ],
  },
  {
    label: "Courses",
    href: "/courses",
    children: [
      { label: "Discover Scuba", href: "/courses/discover-scuba" },
      { label: "Open Water", href: "/courses/open-water" },
      { label: "Advanced", href: "/courses/advanced-open-water" },
      { label: "Rescue Diver", href: "/courses/rescue-diver" },
      { label: "Divemaster", href: "/courses/divemaster" },
      { label: "Bubble Maker", href: "/courses/bubble-maker" },
      { label: "NITROX", href: "/courses/nitrox" },
    ],
  },
  {
    label: "Packages",
    href: "/packages",
    children: [
      { label: "Manta Madness", href: "/packages/manta-madness" },
      { label: "Dive Dive Dive", href: "/packages/dive-dive-dive" },
      { label: "Dive Hanifaru", href: "/packages/dive-hanifaru" },
    ],
  },
  {
    label: "Excursions",
    href: "/excursions",
    children: [
      { label: "Snorkelling", href: "/excursions/snorkelling" },
      { label: "Sandbank", href: "/excursions/sandbank" },
      { label: "Night Snorkel", href: "/excursions/night-snorkel" },
      { label: "Big Game Fishing", href: "/excursions/big-game-fishing" },
    ],
  },
  { label: "Gallery", href: "/gallery" },
  { label: "About", href: "/about" },
  {
    label: "Contact",
    href: "/contact",
    cta: true,
  },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <header
      className={`
        fixed top-0 left-0 right-0 z-40
        ${mobileOpen ? "bg-ocean-navy" : ""}
        transition-all duration-300 ease-out
        ${scrolled
          ? "bg-ocean-navy/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
        }
      `}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4" aria-label="Main navigation">
        {/* Logo */}
        <Link href="/" className="relative z-50 shrink-0" aria-label="Liquid Salt Divers — Home">
          <Image
            src="/logos/12_LSD_Nav_White_Transparent_320px_2x.png"
            alt="Liquid Salt Divers"
            width={160}
            height={40}
            className="h-10 w-auto"
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex items-center gap-1">
          {NAV_ITEMS.map((item) => (
            <li
              key={item.label}
              className="relative"
              onMouseEnter={() => item.children && setOpenDropdown(item.label)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              {item.cta ? (
                <Link
                  href={item.href}
                  className="ml-4 rounded-md bg-cyan px-5 py-2 text-sm font-semibold text-ocean-navy transition-all duration-200 hover:bg-cyan/90 hover:shadow-glow"
                >
                  {item.label}
                </Link>
              ) : (
                <>
                  <Link
                    href={item.href}
                    className="flex items-center gap-1 px-3 py-2 text-sm font-semibold text-salt-white/90 hover:text-cyan transition-colors duration-200"
                  >
                    {item.label}
                    {item.children && (
                      <svg className="w-3 h-3 opacity-60" fill="none" viewBox="0 0 12 12" aria-hidden="true">
                        <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                      </svg>
                    )}
                  </Link>
                  {item.children && openDropdown === item.label && (
                    <ul className="absolute top-full left-0 mt-0 w-56 rounded-md bg-ocean-navy border-t-2 border-cyan py-2 shadow-xl animate-in fade-in duration-200">
                      {item.children.map((child) => (
                        <li key={child.label}>
                          <Link
                            href={child.href}
                            className="block px-4 py-2 text-sm text-salt-white/80 hover:text-cyan hover:bg-white/5 transition-colors duration-150"
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              )}
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger */}
        <button
          className="relative z-[70] flex lg:hidden flex-col gap-1.5 p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          <span className={`block h-0.5 w-6 bg-salt-white transition-all duration-300 ${mobileOpen ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`block h-0.5 w-6 bg-salt-white transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`} />
          <span className={`block h-0.5 w-6 bg-salt-white transition-all duration-300 ${mobileOpen ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>

        {/* Mobile Overlay */}
        {mobileOpen && (
          <div className="fixed inset-0 z-[60] bg-ocean-navy flex flex-col items-center justify-center gap-6 lg:hidden overflow-y-auto py-24">
            {NAV_ITEMS.map((item) => (
              <div key={item.label} className="text-center">
                <Link
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={`text-2xl font-semibold transition-colors duration-200 ${
                    item.cta
                      ? "text-cyan hover:text-cyan/80"
                      : "text-salt-white hover:text-cyan"
                  }`}
                >
                  {item.label}
                </Link>
                {item.children && (
                  <div className="mt-2 flex flex-col gap-1">
                    {item.children.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        onClick={() => setMobileOpen(false)}
                        className="text-sm text-salt-white/60 hover:text-cyan transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}
