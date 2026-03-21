"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

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
  const [mobileAccordion, setMobileAccordion] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.touchAction = "none";
    } else {
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={`
          fixed top-0 left-0 right-0 z-40
          transition-all duration-300 ease-out
          ${scrolled || mobileOpen
            ? "bg-ocean-navy/95 backdrop-blur-md shadow-lg"
            : "bg-transparent"
          }
        `}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4" aria-label="Main navigation">
          {/* Logo */}
          <Link href="/" className="relative z-[70] shrink-0" aria-label="Liquid Salt Divers — Home">
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
            onClick={() => {
              setMobileOpen(!mobileOpen);
              setMobileAccordion(null);
            }}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            <span className={`block h-0.5 w-6 bg-salt-white transition-all duration-300 ${mobileOpen ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`block h-0.5 w-6 bg-salt-white transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 w-6 bg-salt-white transition-all duration-300 ${mobileOpen ? "-translate-y-2 -rotate-45" : ""}`} />
          </button>
        </nav>
      </header>

      {/* Mobile Overlay — rendered OUTSIDE header for proper stacking */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] bg-ocean-navy lg:hidden"
            style={{ width: "100vw", height: "100vh", touchAction: "none" }}
          >
            <div className="flex flex-col items-start px-8 pt-24 pb-12 h-full overflow-y-auto">
              {NAV_ITEMS.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.3 }}
                  className="w-full border-b border-salt-white/10 last:border-0"
                >
                  {item.children ? (
                    <>
                      <button
                        onClick={() => setMobileAccordion(mobileAccordion === item.label ? null : item.label)}
                        className="flex w-full items-center justify-between py-4 text-xl font-semibold text-salt-white hover:text-cyan transition-colors"
                      >
                        {item.label}
                        <svg
                          className={`w-4 h-4 text-salt-white/40 transition-transform duration-200 ${
                            mobileAccordion === item.label ? "rotate-180" : ""
                          }`}
                          fill="none"
                          viewBox="0 0 16 16"
                          aria-hidden="true"
                        >
                          <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                        </svg>
                      </button>
                      <AnimatePresence>
                        {mobileAccordion === item.label && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden"
                          >
                            <div className="pb-3 pl-4 flex flex-col gap-2">
                              <Link
                                href={item.href}
                                onClick={() => setMobileOpen(false)}
                                className="text-sm font-medium text-cyan"
                              >
                                View All {item.label}
                              </Link>
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
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className={`block py-4 text-xl font-semibold transition-colors ${
                        item.cta
                          ? "text-cyan hover:text-cyan/80"
                          : "text-salt-white hover:text-cyan"
                      }`}
                    >
                      {item.label}
                    </Link>
                  )}
                </motion.div>
              ))}

              {/* Bottom CTA */}
              <div className="mt-auto pt-8 w-full">
                <a
                  href={`https://wa.me/${(process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "+9607773998").replace(/[^0-9]/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-lg bg-[#25D366] text-white font-semibold hover:bg-[#20BA5A] transition-colors"
                >
                  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
