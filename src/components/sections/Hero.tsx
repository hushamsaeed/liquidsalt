"use client";

import { motion } from "framer-motion";
import { Button } from "../ui/Button";
import Link from "next/link";

interface HeroProps {
  tagline?: string;
  subtitle?: string;
  promoText?: string;
  promoHref?: string;
  primaryCTA?: { label: string; href: string };
  secondaryCTA?: { label: string; href: string };
  videoSrc?: string;
  posterSrc?: string;
  imageSrc?: string;
}

export function Hero({
  tagline = "Deeply Addictive.",
  subtitle = "PADI 5 Star Dive Centre \u00B7 Hanifaru Bay \u00B7 Baa Atoll UNESCO Biosphere Reserve",
  promoText = "15% OFF \u2014 Book Before 20 May 2026",
  promoHref = "/contact",
  primaryCTA = { label: "Explore Packages", href: "/packages" },
  secondaryCTA = { label: "View Gallery", href: "/gallery" },
  videoSrc,
  posterSrc,
  imageSrc,
}: HeroProps) {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Background */}
      {videoSrc ? (
        <video
          autoPlay
          muted
          loop
          playsInline
          poster={posterSrc}
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      ) : imageSrc ? (
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${imageSrc})` }}
        />
      ) : (
        <div className="absolute inset-0 bg-gradient-to-b from-ocean-navy via-reef-teal to-night-dive" />
      )}

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-manta-black/55" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center px-6 text-center">
        {/* Promo banner */}
        {promoText && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0 }}
          >
            <Link
              href={promoHref}
              className="mb-8 inline-block rounded-full bg-coral-gold px-5 py-2 text-sm font-semibold text-white hover:bg-coral-gold/90 transition-colors"
            >
              {promoText}
            </Link>
          </motion.div>
        )}

        {/* Tagline */}
        <motion.h1
          className="font-display text-hero-mobile md:text-hero-desktop text-salt-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {tagline}
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="mt-6 text-hero-sub uppercase tracking-[0.12em] text-salt-white/80"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {subtitle}
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="mt-10 flex flex-col sm:flex-row gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Link href={primaryCTA.href}>
            <Button variant="primary" size="lg">{primaryCTA.label}</Button>
          </Link>
          <Link href={secondaryCTA.href}>
            <Button variant="ghost-light" size="lg">{secondaryCTA.label}</Button>
          </Link>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <svg
          className="w-6 h-6 text-salt-white/60 animate-scroll-bounce"
          fill="none"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M7 10l5 5 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </motion.div>
    </section>
  );
}
