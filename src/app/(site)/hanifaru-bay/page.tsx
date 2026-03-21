import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppCTA } from "@/components/ui/WhatsAppCTA";
import { SeasonCalendar } from "@/components/ui/SeasonCalendar";
import { SpeciesCard } from "@/components/ui/SpeciesCard";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Hanifaru Bay | Manta Ray Aggregation in Baa Atoll | Liquid Salt Divers",
  description:
    "Discover Hanifaru Bay, the UNESCO Biosphere Reserve famous for the world&apos;s largest manta ray feeding aggregation. Snorkel with mantas and whale sharks from Dharavandhoo, Baa Atoll, Maldives.",
};

const FAQ_ITEMS = [
  {
    question: "Do I need to be a diver to visit Hanifaru Bay?",
    answer:
      "No. Scuba diving is not permitted inside Hanifaru Bay to protect the animals. All visits are snorkel-only, so non-divers can enjoy the experience just as much as certified divers.",
  },
  {
    question: "When is the best time to see manta rays at Hanifaru Bay?",
    answer:
      "Peak manta season runs from May to November, with the largest aggregations typically between June and October during the south-west monsoon. Plankton blooms triggered by tidal currents draw mantas into the bay in huge numbers.",
  },
  {
    question: "How much does a Hanifaru Bay trip cost?",
    answer:
      "Trip prices vary depending on the package you choose. Our Manta Madness and Dive Hanifaru packages both include Hanifaru Bay excursions. A park entry fee (payable at the ranger station) applies to all visitors. Contact us for current pricing.",
  },
  {
    question: "How many mantas can I see at one time?",
    answer:
      "On a good day during peak season, it is common to see 50 to 100 reef manta rays feeding together. On exceptional days, over 200 mantas have been recorded in the bay simultaneously, creating one of the ocean&apos;s greatest wildlife spectacles.",
  },
  {
    question: "Are there rules for snorkelling in Hanifaru Bay?",
    answer:
      "Yes. Hanifaru Bay is a Marine Protected Area with strict guidelines enforced by resident rangers. Visitors must stay on the surface (no freediving), maintain a minimum distance from animals, not use flash photography, and follow the instructions of the guide at all times.",
  },
];

export default function HanifaruBayPage() {
  return (
    <>
      <Nav />
      <main>
        {/* Hero */}
        <section className="relative bg-gradient-to-b from-ocean-navy via-reef-teal to-night-dive pt-32 pb-20">
          <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
            <span className="inline-block mb-4 bg-coral-gold text-white px-4 py-1 rounded-full text-sm uppercase tracking-wide font-semibold">
              UNESCO Biosphere Reserve
            </span>
            <h1 className="font-display text-5xl md:text-6xl text-salt-white">
              Hanifaru Bay
            </h1>
            <p className="mt-4 text-lg text-salt-white/80 max-w-2xl mx-auto">
              The world&apos;s largest known manta ray feeding aggregation, just eight minutes by boat from Dharavandhoo.
            </p>
          </div>
        </section>

        {/* What is Hanifaru Bay */}
        <section className="py-space-12 lg:py-space-16">
          <div className="mx-auto max-w-4xl px-6">
            <h2 className="font-display text-3xl md:text-4xl text-ocean-navy mb-6">
              What Is Hanifaru Bay?
            </h2>
            <div className="space-y-4 text-ocean-navy/80 leading-relaxed">
              <p>
                Hanifaru Bay is a small, sheltered inlet on the eastern edge of Baa Atoll in the Maldives. In 2011 it was designated a core area of the UNESCO Baa Atoll Biosphere Reserve, recognising its extraordinary importance as a feeding ground for reef manta rays and, occasionally, whale sharks.
              </p>
              <p>
                What makes Hanifaru unique is a trick of geography. The bay funnels tidal currents through a narrow channel, concentrating plankton into a dense soup that attracts filter-feeding megafauna in staggering numbers. During the south-west monsoon (May&ndash;November), conditions align to create what marine biologists call &ldquo;cyclone feeding&rdquo;&mdash;mantas spiral in tight, overlapping circles to maximise every mouthful of plankton. It is an event without parallel anywhere on Earth.
              </p>
            </div>
          </div>
        </section>

        {/* Manta Biology */}
        <section className="py-space-12 lg:py-space-16 bg-salt-white">
          <div className="mx-auto max-w-4xl px-6">
            <h2 className="font-display text-3xl md:text-4xl text-ocean-navy mb-6">
              Manta Ray Biology &amp; Aggregation
            </h2>
            <div className="space-y-4 text-ocean-navy/80 leading-relaxed">
              <p>
                The reef manta ray (<span className="italic">Mobula alfredi</span>) is one of the largest rays in the ocean, with wingspans reaching over five metres. Despite their size, mantas are gentle filter feeders that consume up to 13% of their body weight in plankton each week. Each individual can be identified by the unique spot pattern on its belly&mdash;like a fingerprint.
              </p>
              <p>
                At Hanifaru Bay, mantas gather in numbers that dwarf any other known aggregation site. Researchers from the Manta Trust have catalogued over 5,000 individual mantas in the region. When conditions peak, dozens&mdash;sometimes hundreds&mdash;of mantas converge in the bay, barrel-rolling and chain-feeding in mesmerising formation. Whale sharks occasionally join the feast, cruising through the plankton cloud alongside the mantas.
              </p>
              <p>
                This behaviour is driven entirely by food availability. When south-westerly swells push plankton-rich water against the bay&apos;s reef wall, the resulting upwelling traps an extraordinary concentration of zooplankton. The mantas follow the food, and Hanifaru becomes the greatest show in the ocean.
              </p>
            </div>
          </div>
        </section>

        {/* Best Time to Visit + Season Calendar */}
        <section className="py-space-12 lg:py-space-16">
          <div className="mx-auto max-w-4xl px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div>
                <h2 className="font-display text-3xl md:text-4xl text-ocean-navy mb-6">
                  Best Time to Visit
                </h2>
                <div className="space-y-4 text-ocean-navy/80 leading-relaxed">
                  <p>
                    Hanifaru Bay is open to visitors from May through November, coinciding with the south-west monsoon season. This is when tidal conditions create the plankton concentrations that draw mantas into the bay.
                  </p>
                  <p>
                    <strong className="text-ocean-navy">June to October</strong> is the peak window, with the largest aggregations typically occurring in July and August. During these months it is common to encounter 50&ndash;100 mantas on a single visit, with exceptional days bringing over 200.
                  </p>
                  <p>
                    Outside the monsoon season the bay is quieter, though mantas are resident in Baa Atoll year-round and can be spotted at cleaning stations on nearby reefs.
                  </p>
                </div>
              </div>
              <div className="bg-salt-white rounded-lg p-6 shadow-card">
                <SeasonCalendar />
              </div>
            </div>
          </div>
        </section>

        {/* How to Get There */}
        <section className="py-space-12 lg:py-space-16 bg-salt-white">
          <div className="mx-auto max-w-4xl px-6">
            <h2 className="font-display text-3xl md:text-4xl text-ocean-navy mb-6">
              How to Get There
            </h2>
            <div className="space-y-4 text-ocean-navy/80 leading-relaxed">
              <p>
                Hanifaru Bay is located just 1.5 kilometres off the coast of Dharavandhoo island in Baa Atoll. From our dive centre on Dharavandhoo, it is an <strong className="text-ocean-navy">eight-minute boat ride</strong>&mdash;one of the shortest transfers to Hanifaru of any operator in the Maldives.
              </p>
              <p>
                Getting to Dharavandhoo is straightforward. The island has its own domestic airport (DRV) with daily flights from Velana International Airport in Mal&eacute;. The flight takes approximately 25 minutes. From the airport it is a short walk to the harbour and our dive centre.
              </p>
              <p>
                All Hanifaru Bay trips depart from our centre and include a briefing, equipment, and an experienced guide. A ranger from the Baa Atoll Biosphere Reserve office is stationed at the bay entrance to manage visitor numbers and enforce conservation rules.
              </p>
            </div>
          </div>
        </section>

        {/* Species Cards */}
        <section className="py-space-12 lg:py-space-16">
          <div className="mx-auto max-w-4xl px-6">
            <h2 className="font-display text-3xl md:text-4xl text-ocean-navy mb-8">
              Key Species
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <SpeciesCard
                name="Reef Manta Ray"
                scientificName="Mobula alfredi"
                description="Wingspan up to 5.5 metres. Identified by unique belly markings. Feeds on zooplankton using cephalic fins to funnel water into its mouth."
                season="Year-round (peak May–Nov)"
              />
              <SpeciesCard
                name="Whale Shark"
                scientificName="Rhincodon typus"
                description="The world&apos;s largest fish, reaching 12 metres or more. A gentle filter feeder occasionally seen at Hanifaru Bay during peak plankton events."
                season="May–November"
              />
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-space-12 lg:py-space-16 bg-salt-white">
          <div className="mx-auto max-w-4xl px-6">
            <h2 className="font-display text-3xl md:text-4xl text-ocean-navy mb-8">
              Frequently Asked Questions
            </h2>
            <dl className="space-y-6">
              {FAQ_ITEMS.map((item) => (
                <div key={item.question} className="border-b border-ocean-navy/10 pb-6 last:border-0">
                  <dt className="font-body font-semibold text-ocean-navy text-lg">
                    {item.question}
                  </dt>
                  <dd className="mt-2 text-ocean-navy/70 leading-relaxed">
                    {item.answer}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* CTA */}
        <section className="py-space-12 lg:py-space-16 bg-gradient-to-b from-reef-teal to-ocean-navy">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <h2 className="font-display text-3xl md:text-4xl text-salt-white mb-4">
              Ready to Swim with Mantas?
            </h2>
            <p className="text-salt-white/80 mb-8 max-w-xl mx-auto">
              Our Manta Madness package is built around Hanifaru Bay, combining snorkel trips with world-class diving across Baa Atoll.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/packages/manta-madness">
                <Button variant="primary" size="lg">
                  View Manta Madness Package
                </Button>
              </Link>
              <WhatsAppCTA
                variant="inline"
                label="Ask Us About Hanifaru"
                message="Hi! I'd like to know more about visiting Hanifaru Bay."
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppCTA variant="floating" />
    </>
  );
}
