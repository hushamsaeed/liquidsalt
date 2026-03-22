"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { WhatsAppCTA } from "@/components/ui/WhatsAppCTA";

interface RoomPrice {
  roomType: string;
  twinShare: number;
  single: number;
}

interface Variant {
  nights: number;
  activities?: string;
  subtitle?: string;
  inclusions?: string[];
  roomPricing?: RoomPrice[];
}

interface VariantSelectorProps {
  variants: Variant[];
  packageTitle: string;
}

export function VariantSelector({ variants, packageTitle }: VariantSelectorProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selected = variants[selectedIndex];

  return (
    <div>
      <h3 className="font-display text-2xl text-ocean-navy mb-6">Choose Your Package</h3>

      {/* Night selector tabs */}
      <div className="flex flex-wrap gap-2 mb-8">
        {variants.map((v, i) => (
          <button
            key={v.nights}
            onClick={() => setSelectedIndex(i)}
            className={`
              px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200
              ${i === selectedIndex
                ? "bg-ocean-navy text-salt-white shadow-card"
                : "bg-salt-white text-ocean-navy/70 hover:bg-ocean-navy/5 border border-ocean-navy/10"
              }
            `}
          >
            <span className="block text-base font-bold">{v.nights} Nights</span>
            {v.activities && (
              <span className="block text-xs mt-0.5 opacity-80">{v.activities}</span>
            )}
          </button>
        ))}
      </div>

      {/* Selected variant details */}
      <AnimatePresence mode="wait">
        <motion.div
          key={selectedIndex}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.2 }}
        >
          {selected.subtitle && (
            <p className="text-ocean-navy/70 mb-6">{selected.subtitle}</p>
          )}

          {/* Variant-specific inclusions */}
          {selected.inclusions && selected.inclusions.length > 0 && (
            <div className="mb-6">
              <h4 className="font-semibold text-ocean-navy text-sm uppercase tracking-wider mb-3">Package Includes</h4>
              <ul className="space-y-1.5">
                {selected.inclusions.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-ocean-navy/80">
                    <svg className="w-4 h-4 mt-0.5 text-cyan shrink-0" fill="none" viewBox="0 0 16 16" aria-hidden="true">
                      <path d="M3 8l3.5 3.5L13 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Pricing table */}
          {selected.roomPricing && selected.roomPricing.length > 0 && (
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b-2 border-ocean-navy/10">
                    <th className="text-left py-3 pr-4 text-sm font-semibold text-ocean-navy">Room Type</th>
                    <th className="text-right py-3 px-4 text-sm font-semibold text-ocean-navy">Twin Share</th>
                    <th className="text-right py-3 pl-4 text-sm font-semibold text-ocean-navy">Single</th>
                  </tr>
                </thead>
                <tbody>
                  {selected.roomPricing.map((room) => (
                    <tr key={room.roomType} className="border-b border-ocean-navy/5 hover:bg-salt-white/50 transition-colors">
                      <td className="py-3 pr-4 text-sm text-ocean-navy/80">{room.roomType}</td>
                      <td className="py-3 px-4 text-right">
                        <span className="text-lg font-bold text-coral-gold">${room.twinShare.toLocaleString()}</span>
                        <span className="text-xs text-ocean-navy/50 block">per person</span>
                      </td>
                      <td className="py-3 pl-4 text-right">
                        <span className="text-lg font-bold text-ocean-navy">${room.single.toLocaleString()}</span>
                        <span className="text-xs text-ocean-navy/50 block">per person</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {/* Book CTA for this variant */}
          <div className="mt-6">
            <WhatsAppCTA
              variant="inline"
              label={`Book ${selected.nights}-Night Package`}
              message={`Hi! I'd like to book the ${packageTitle} — ${selected.nights} Nights${selected.activities ? ` (${selected.activities})` : ""} package.`}
              className="w-full sm:w-auto justify-center"
            />
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
