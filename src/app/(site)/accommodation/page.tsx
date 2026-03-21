import type { Metadata } from "next";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppCTA } from "@/components/ui/WhatsAppCTA";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { AccommodationCard } from "@/components/ui/AccommodationCard";

export const metadata: Metadata = {
  title: "Accommodation | Liquid Salt Divers",
  description:
    "Stay at our trusted accommodation partners near Dharavandhoo, Baa Atoll. From beachfront guesthouses to boutique retreats in the Maldives.",
};

const PROPERTIES = [
  {
    name: "Aveyla Manta Village",
    description:
      "A charming beachfront guesthouse just steps from the harbour. Aveyla Manta Village offers comfortable rooms with ocean views, a rooftop terrace, and easy access to Liquid Salt Divers for daily departures.",
    image: "/images/accommodation/aveyla-manta-village.jpg",
    bookingUrl: "https://www.booking.com/hotel/mv/aveyla-manta-village.html",
  },
  {
    name: "Kiha Beach",
    description:
      "Modern and stylish, Kiha Beach combines island hospitality with contemporary comfort. Enjoy spacious rooms, an in-house restaurant serving local and international cuisine, and a prime Dharavandhoo location.",
    image: "/images/accommodation/kiha-beach.jpg",
    bookingUrl: "https://www.booking.com/hotel/mv/kiha-beach.html",
  },
  {
    name: "Lvis Blancura",
    description:
      "A boutique retreat offering a peaceful escape on Dharavandhoo. Lvis Blancura features elegantly appointed rooms, a lush garden courtyard, and personalised service that makes every guest feel at home.",
    image: "/images/accommodation/lvis-blancura.jpg",
    bookingUrl: "https://www.booking.com/hotel/mv/lvis-blancura.html",
  },
  {
    name: "Chak\u2019z Beach",
    description:
      "Laid-back and welcoming, Chak\u2019z Beach is perfect for divers who want to be close to the action. With direct beach access, gear storage, and a friendly atmosphere, it is a favourite among returning guests.",
    image: "/images/accommodation/chakz-beach.jpg",
    bookingUrl: "https://www.booking.com/hotel/mv/chakz-beach.html",
  },
];

export default function AccommodationPage() {
  return (
    <>
      <Nav />
      <main>
        {/* Hero */}
        <section className="relative bg-gradient-to-b from-ocean-navy via-reef-teal to-night-dive pt-32 pb-20">
          <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
            <h1 className="font-display text-5xl md:text-6xl text-salt-white">Accommodation</h1>
            <p className="mt-4 text-lg text-salt-white/80">
              Trusted partners on Dharavandhoo island, steps from our dive centre
            </p>
          </div>
        </section>

        {/* Properties Grid */}
        <SectionWrapper className="py-space-12 lg:py-space-16">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {PROPERTIES.map((property) => (
                <AccommodationCard
                  key={property.name}
                  name={property.name}
                  description={property.description}
                  image={property.image}
                  bookingUrl={property.bookingUrl}
                />
              ))}
            </div>
          </div>
        </SectionWrapper>

        {/* Info Section */}
        <SectionWrapper className="py-space-12 lg:py-space-16 bg-sand">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <h2 className="font-display text-3xl md:text-4xl text-ocean-navy">
              Need Help Choosing?
            </h2>
            <p className="mt-4 text-ocean-navy/70">
              All our accommodation partners are within walking distance of the dive centre.
              We can help arrange your stay alongside your dive package for a seamless experience.
            </p>
            <div className="mt-8">
              <WhatsAppCTA
                variant="inline"
                label="Ask About Accommodation"
                message="Hi! I'd like help choosing accommodation for my diving trip to Dharavandhoo."
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
