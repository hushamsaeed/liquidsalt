"use client";

import { SectionWrapper } from "../ui/SectionWrapper";
import { TeamCard } from "../ui/TeamCard";

// Static data — will be replaced with Sanity CMS data
const TEAM = [
  { name: "Ryshyn", role: "Founder & PADI Instructor", instagram: "liquidsaltdivers" },
  { name: "Jazeel", role: "Senior Dive Instructor", instagram: "" },
  { name: "Aiman", role: "Dive Instructor", instagram: "" },
  { name: "Nazeeh", role: "Dive Guide", instagram: "" },
  { name: "Jaish", role: "Dive Guide", instagram: "" },
  { name: "Haisham", role: "Boat Captain", instagram: "" },
  { name: "Irey", role: "Boat Captain", instagram: "" },
  { name: "Raikko", role: "Dive Instructor", instagram: "" },
  { name: "Beybe", role: "Dive Guide", instagram: "" },
  { name: "Rehan", role: "Operations", instagram: "" },
];

export function TeamSection() {
  return (
    <SectionWrapper className="py-space-12 lg:py-space-16" id="team">
      <div className="mx-auto max-w-7xl px-6">
        <blockquote className="text-center mb-12">
          <p className="font-display text-pull-quote italic text-ocean-navy/80">
            &ldquo;Every reef has its guardians.&rdquo;
          </p>
        </blockquote>

        <h2 className="font-display text-4xl md:text-5xl text-ocean-navy text-center">
          Meet The Team
        </h2>
        <p className="mt-4 text-center text-ocean-navy/60 max-w-2xl mx-auto">
          Multilingual instructors and local guides who know every cleaning station,
          every channel, and every manta by name.
        </p>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {TEAM.map((member) => (
            <TeamCard
              key={member.name}
              name={member.name}
              role={member.role}
              instagram={member.instagram || undefined}
            />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
