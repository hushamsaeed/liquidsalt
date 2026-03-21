"use client";

import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { TeamCard } from "@/components/ui/TeamCard";

// Static data — will be replaced with Sanity CMS data
const TEAM = [
  {
    name: "Ryshyn",
    role: "Founder & PADI Instructor",
    instagram: "liquidsaltdivers",
    certifications: ["PADI Course Director", "EFR Instructor"],
    bio: "Founded Liquid Salt Divers to share the magic of Baa Atoll with the world. Over 10,000 logged dives and counting.",
  },
  {
    name: "Jazeel",
    role: "Senior Dive Instructor",
    instagram: "",
    certifications: ["PADI IDC Staff Instructor", "EFR Instructor"],
    bio: "Specialises in deep dives and wreck exploration. Known for his calm demeanour and encyclopaedic reef knowledge.",
  },
  {
    name: "Aiman",
    role: "Dive Instructor",
    instagram: "",
    certifications: ["PADI Open Water Instructor", "PADI Enriched Air Specialty"],
    bio: "Passionate about marine conservation and underwater photography. Guides divers through Hanifaru with infectious enthusiasm.",
  },
  {
    name: "Nazeeh",
    role: "Dive Guide",
    instagram: "",
    certifications: ["PADI Divemaster", "PADI Rescue Diver"],
    bio: "Born and raised in Baa Atoll, Nazeeh knows every manta by name and every cleaning station by heart.",
  },
  {
    name: "Jaish",
    role: "Dive Guide",
    instagram: "",
    certifications: ["PADI Divemaster"],
    bio: "An expert at spotting the smallest nudibranchs and the largest whale sharks. Eagle-eyed and always smiling.",
  },
  {
    name: "Haisham",
    role: "Boat Captain",
    instagram: "",
    certifications: ["Licensed Marine Captain"],
    bio: "Navigates Baa Atoll waters with decades of experience. Gets the team to dive sites safely and on time, every time.",
  },
  {
    name: "Irey",
    role: "Boat Captain",
    instagram: "",
    certifications: ["Licensed Marine Captain"],
    bio: "Knows every channel and current in the atoll. His seamanship ensures smooth sailing for every dive trip.",
  },
  {
    name: "Raikko",
    role: "Dive Instructor",
    instagram: "",
    certifications: ["PADI Open Water Instructor", "PADI Deep Diver Specialty"],
    bio: "Brings energy and precision to every dive briefing. Raikko makes even first-timers feel like seasoned pros.",
  },
  {
    name: "Beybe",
    role: "Dive Guide",
    instagram: "",
    certifications: ["PADI Divemaster", "PADI Coral Reef Conservation"],
    bio: "A reef guardian at heart, Beybe leads eco-focused dives and champions sustainable diving practices.",
  },
  {
    name: "Rehan",
    role: "Operations",
    instagram: "",
    certifications: [],
    bio: "Keeps everything running behind the scenes, from logistics to guest coordination. The backbone of Liquid Salt.",
  },
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
              certifications={member.certifications}
              bio={member.bio}
            />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
