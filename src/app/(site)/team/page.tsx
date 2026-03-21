import type { Metadata } from "next";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppCTA } from "@/components/ui/WhatsAppCTA";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { TeamCard } from "@/components/ui/TeamCard";

export const metadata: Metadata = {
  title: "Our Team | Liquid Salt Divers",
  description:
    "Meet the passionate dive professionals behind Liquid Salt Divers in Baa Atoll, Maldives. PADI certified instructors, guides, and crew.",
};

const TEAM_MEMBERS = [
  {
    name: "Ryshyn",
    role: "Founder & PADI Course Director",
    bio: "With over 15 years of diving experience and thousands of logged dives across the Maldives, Ryshyn founded Liquid Salt Divers to share the magic of Baa Atoll with the world. As a PADI Course Director, he leads instructor-level training and sets the standard for safety and excellence.",
  },
  {
    name: "Jazeel",
    role: "Senior Dive Instructor",
    bio: "Jazeel brings calm confidence to every dive, whether guiding beginners through their first breath underwater or leading advanced deep dives. His encyclopaedic knowledge of local dive sites makes every trip an education.",
  },
  {
    name: "Aiman",
    role: "Dive Instructor",
    bio: "Aiman is known for his patience and infectious enthusiasm. Specialising in Open Water and Advanced courses, he has a gift for putting nervous first-timers at ease and turning them into lifelong divers.",
  },
  {
    name: "Raikko",
    role: "Dive Instructor",
    bio: "Raikko combines technical precision with a genuine love for marine conservation. He leads speciality courses and is passionate about teaching responsible diving practices to every student.",
  },
  {
    name: "Nazeeh",
    role: "Dive Guide",
    bio: "Born and raised in the Maldives, Nazeeh has an intuitive understanding of the ocean currents and marine behaviour in Baa Atoll. His sharp eyes spot the creatures others miss.",
  },
  {
    name: "Jaish",
    role: "Dive Guide",
    bio: "Jaish is the team\u2019s underwater photographer, always ready to point out the perfect shot. His intimate knowledge of Hanifaru Bay and its manta ray feeding patterns is second to none.",
  },
  {
    name: "Beybe",
    role: "Dive Guide",
    bio: "Beybe brings energy and warmth to every excursion. Whether it is a reef dive or a snorkelling safari, his positive attitude and attention to safety make every outing memorable.",
  },
  {
    name: "Haisham",
    role: "Boat Captain",
    bio: "Haisham has navigated the waters of Baa Atoll for over a decade. His seamanship ensures smooth, safe transfers to every dive site, and he always knows where the conditions are best.",
  },
  {
    name: "Irey",
    role: "Boat Captain",
    bio: "Irey keeps the dive dhoni running like clockwork. Skilled in both navigation and boat maintenance, he works closely with the dive team to ensure perfect timing at every site.",
  },
  {
    name: "Rehan",
    role: "Operations",
    bio: "Rehan is the organisational backbone of Liquid Salt Divers. From scheduling dives and managing bookings to coordinating logistics, he makes sure everything runs seamlessly behind the scenes.",
  },
];

export default function TeamPage() {
  return (
    <>
      <Nav />
      <main>
        {/* Hero */}
        <section className="relative bg-gradient-to-b from-ocean-navy via-reef-teal to-night-dive pt-32 pb-20">
          <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
            <h1 className="font-display text-5xl md:text-6xl text-salt-white">Meet the Team</h1>
            <p className="mt-4 text-lg text-salt-white/80">
              The passionate crew that makes every dive unforgettable
            </p>
          </div>
        </section>

        {/* Team Grid */}
        <SectionWrapper className="py-space-12 lg:py-space-16">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {TEAM_MEMBERS.map((member) => (
                <div key={member.name} className="flex flex-col">
                  <TeamCard
                    name={member.name}
                    role={member.role}
                  />
                  <p className="mt-2 px-6 text-sm text-ocean-navy/70 text-center leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </SectionWrapper>

        {/* CTA Section */}
        <SectionWrapper className="py-space-12 lg:py-space-16 bg-sand">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <h2 className="font-display text-3xl md:text-4xl text-ocean-navy">
              Ready to Dive With Us?
            </h2>
            <p className="mt-4 text-ocean-navy/70">
              Our team is here to make your Maldives diving experience truly special.
              Get in touch to start planning your adventure.
            </p>
            <div className="mt-8">
              <WhatsAppCTA
                variant="inline"
                label="Chat With Our Team"
                message="Hi! I'd like to learn more about your dive team and book a trip."
              />
            </div>
          </div>
        </SectionWrapper>
      </main>
      <Footer />
      <WhatsAppCTA variant="floating" />
    </>
  );
}
