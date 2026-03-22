/**
 * Seed Sanity CMS with all static content data.
 * Usage: SANITY_API_TOKEN=your_token npx tsx scripts/seed-sanity.ts
 */

import { createClient } from "next-sanity";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "bs3v46tq";
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
const token = process.env.SANITY_API_TOKEN;

if (!token) {
  console.error("❌ SANITY_API_TOKEN required. Get one from https://www.sanity.io/manage → API → Tokens → Add API token (Editor role)");
  process.exit(1);
}

const client = createClient({
  projectId,
  dataset,
  apiVersion: "2024-03-01",
  useCdn: false,
  token,
});

// ── Package Data ──
const packages = [
  {
    _type: "package",
    _id: "pkg-manta-madness",
    title: "Manta Madness",
    slug: { _type: "slug", current: "manta-madness" },
    tagline: "The ultimate Hanifaru Bay snorkel experience",
    priceFrom: 450,
    pricePer: "person",
    badge: "Most Popular",
    featured: true,
    duration: "3 days",
    order: 1,
    inclusions: [
      "3 Hanifaru Bay snorkel trips",
      "2 guided reef dives",
      "Full equipment hire",
      "Boat transfers included",
      "Marine biologist briefing",
      "Underwater photography tips",
    ],
    description: [
      {
        _type: "block",
        _key: "desc1",
        style: "normal",
        children: [
          {
            _type: "span",
            _key: "s1",
            text: "Manta Madness is our flagship package — designed for those who have travelled to Baa Atoll for one reason: manta rays. Over three days, you will make three trips to Hanifaru Bay during peak aggregation conditions, guided by our most experienced instructors who know the bay's currents intimately. Between snorkel sessions, you will dive two of the best reef sites in the atoll, encountering reef sharks, eagle rays, and the technicolour coral gardens that make this UNESCO biosphere unique.",
          },
        ],
      },
    ],
  },
  {
    _type: "package",
    _id: "pkg-dive-dive-dive",
    title: "Dive Dive Dive",
    slug: { _type: "slug", current: "dive-dive-dive" },
    tagline: "Six dives across the best reefs in Baa Atoll",
    priceFrom: 380,
    pricePer: "person",
    featured: false,
    duration: "4 days",
    order: 2,
    inclusions: [
      "6 guided reef dives",
      "Full equipment hire",
      "Boat transfers included",
      "Dive log signed by instructor",
      "Channel and reef site mix",
    ],
    description: [
      {
        _type: "block",
        _key: "desc1",
        style: "normal",
        children: [
          {
            _type: "span",
            _key: "s1",
            text: "For certified divers who want to maximise bottom time. Six dives over four days, carefully selected to showcase the full range of Baa Atoll's underwater landscapes: channel drifts where grey reef sharks patrol, thilas carpeted in soft coral, and cleaning stations where manta rays hover motionless while cleaner wrasse do their work.",
          },
        ],
      },
    ],
  },
  {
    _type: "package",
    _id: "pkg-dive-hanifaru",
    title: "Dive Hanifaru",
    slug: { _type: "slug", current: "dive-hanifaru" },
    tagline: "Scuba dive Hanifaru Bay with the experts",
    priceFrom: 520,
    pricePer: "person",
    featured: false,
    duration: "3 days",
    order: 3,
    inclusions: [
      "2 Hanifaru Bay dives",
      "2 premium reef dives",
      "1 night dive experience",
      "Full equipment hire",
      "Underwater photography tips",
      "Boat transfers included",
    ],
    description: [
      {
        _type: "block",
        _key: "desc1",
        style: "normal",
        children: [
          {
            _type: "span",
            _key: "s1",
            text: "The definitive Hanifaru experience for scuba divers. Two dives inside Hanifaru Bay itself — where conditions permit — combined with two premium reef dives and a spectacular night dive. Requires Advanced Open Water certification or equivalent.",
          },
        ],
      },
    ],
  },
];

// ── Course Data ──
const courses = [
  { _id: "course-discover-scuba", title: "Discover Scuba Diving", slug: "discover-scuba", level: "beginner", duration: "Half day", price: 95, minAge: 10, order: 1, prerequisites: ["No experience required", "Able to swim"], included: ["Pool/confined water session", "One open water dive", "Full equipment", "PADI instructor"], overview: "Your first breath underwater. Discover Scuba Diving is the perfect introduction for anyone curious about the underwater world." },
  { _id: "course-open-water", title: "PADI Open Water Diver", slug: "open-water", level: "beginner", duration: "3–4 days", price: 450, minAge: 10, order: 2, prerequisites: ["No prior diving experience", "Able to swim 200m", "Able to float for 10 minutes"], included: ["All course materials", "4 open water dives", "Full equipment hire", "PADI certification card", "Multilingual instruction"], overview: "The world's most popular scuba certification. Over 3–4 days, you will master the fundamental skills of scuba diving." },
  { _id: "course-advanced", title: "Advanced Open Water Diver", slug: "advanced-open-water", level: "intermediate", duration: "2–3 days", price: 380, minAge: 12, order: 3, prerequisites: ["PADI Open Water certification (or equivalent)"], included: ["5 adventure dives", "Deep dive specialty", "Navigation specialty", "Full equipment hire", "PADI certification card"], overview: "Take your diving to the next level with five adventure dives including deep diving to 30 metres and underwater navigation." },
  { _id: "course-rescue", title: "Rescue Diver", slug: "rescue-diver", level: "intermediate", duration: "3–4 days", price: 420, minAge: 12, order: 4, prerequisites: ["PADI Advanced Open Water (or equivalent)", "EFR certification within 24 months"], included: ["Rescue scenarios and exercises", "Full equipment hire", "PADI certification card", "EFR refresher if needed"], overview: "The course that changes how you dive. Learn to prevent and manage problems in the water through scenario-based exercises." },
  { _id: "course-divemaster", title: "PADI Divemaster", slug: "divemaster", level: "professional", duration: "4–6 weeks", price: 950, minAge: 18, order: 5, prerequisites: ["PADI Rescue Diver certification", "40 logged dives minimum", "EFR certification within 24 months", "Medical clearance"], included: ["Full Divemaster training program", "Crew-Pak materials", "PADI Divemaster certification", "Professional liability insurance for training"], overview: "Your first professional-level certification. Transform from experienced recreational diver to dive professional." },
  { _id: "course-bubble-maker", title: "Bubble Maker", slug: "bubble-maker", level: "beginner", duration: "1–2 hours", price: 65, minAge: 8, order: 6, prerequisites: ["Age 8+", "Comfortable in water"], included: ["Supervised pool experience", "Child-sized equipment", "PADI instructor", "Certificate of completion"], overview: "Scuba diving for kids aged 8 and above. Maximum depth of 2 metres, maximum fun." },
  { _id: "course-nitrox", title: "Enriched Air (NITROX)", slug: "nitrox", level: "specialty", duration: "Half day", price: 180, minAge: 12, order: 7, prerequisites: ["PADI Open Water certification (or equivalent)"], included: ["NITROX theory", "Oxygen analyser training", "2 NITROX dives", "PADI specialty certification"], overview: "Dive longer, feel better. Enriched Air NITROX allows you to extend your no-decompression limits." },
  { _id: "course-efr", title: "Emergency First Response (EFR)", slug: "efr", level: "specialty", duration: "1 day", price: 150, minAge: 12, order: 8, prerequisites: ["No prior training required"], included: ["CPR and first aid training", "AED training", "Course materials", "EFR certification card"], overview: "Life-saving skills for divers and non-divers alike. CPR, first aid, and AED training." },
  { _id: "course-reactivate", title: "ReActivate", slug: "reactivate", level: "beginner", duration: "Half day", price: 85, minAge: 10, order: 9, prerequisites: ["Previous scuba certification"], included: ["Knowledge review", "In-water skills refresher", "1 open water dive", "Updated certification card"], overview: "Been a while since your last dive? Quick refresher that reviews essential scuba theory and key skills." },
].map((c) => ({
  _type: "course",
  _id: c._id,
  title: c.title,
  slug: { _type: "slug", current: c.slug },
  level: c.level,
  duration: c.duration,
  price: c.price,
  minAge: c.minAge,
  order: c.order,
  prerequisites: c.prerequisites,
  included: c.included,
  overview: [{ _type: "block", _key: "o1", style: "normal", children: [{ _type: "span", _key: "s1", text: c.overview }] }],
}));

// ── Team Data ──
const team = [
  { _id: "team-ryshyn", name: "Ryshyn", role: "Founder & PADI Course Director", instagram: "liquidsaltdivers", order: 1, certifications: ["PADI Course Director", "EFR Instructor"], bio: "Founded Liquid Salt Divers to share the magic of Baa Atoll with the world. Over 10,000 logged dives and counting." },
  { _id: "team-jazeel", name: "Jazeel", role: "Senior Dive Instructor", order: 2, certifications: ["PADI IDC Staff Instructor", "EFR Instructor"], bio: "Specialises in deep dives and wreck exploration. Known for his calm demeanour and encyclopaedic reef knowledge." },
  { _id: "team-aiman", name: "Aiman", role: "Dive Instructor", order: 3, certifications: ["PADI Open Water Instructor", "PADI Enriched Air Specialty"], bio: "Passionate about marine conservation and underwater photography." },
  { _id: "team-nazeeh", name: "Nazeeh", role: "Dive Guide", order: 4, certifications: ["PADI Divemaster", "PADI Rescue Diver"], bio: "Born and raised in Baa Atoll, knows every manta by name and every cleaning station by heart." },
  { _id: "team-jaish", name: "Jaish", role: "Dive Guide", order: 5, certifications: ["PADI Divemaster"], bio: "An expert at spotting the smallest nudibranchs and the largest whale sharks." },
  { _id: "team-haisham", name: "Haisham", role: "Boat Captain", order: 6, certifications: ["Licensed Marine Captain"], bio: "Navigates Baa Atoll waters with decades of experience." },
  { _id: "team-irey", name: "Irey", role: "Boat Captain", order: 7, certifications: ["Licensed Marine Captain"], bio: "Knows every channel and current in the atoll." },
  { _id: "team-raikko", name: "Raikko", role: "Dive Instructor", order: 8, certifications: ["PADI Open Water Instructor", "PADI Deep Diver Specialty"], bio: "Brings energy and precision to every dive briefing." },
  { _id: "team-beybe", name: "Beybe", role: "Dive Guide", order: 9, certifications: ["PADI Divemaster", "PADI Coral Reef Conservation"], bio: "A reef guardian at heart, champions sustainable diving practices." },
  { _id: "team-rehan", name: "Rehan", role: "Operations", order: 10, certifications: [], bio: "Keeps everything running behind the scenes, from logistics to guest coordination." },
].map((t) => ({ _type: "teamMember", ...t }));

// ── Excursion Data ──
const excursions = [
  { _id: "exc-snorkelling", title: "Snorkelling", slug: "snorkelling", duration: "Half day", price: 65, order: 1, shortDescription: "Swim alongside manta rays and explore coral gardens", description: "Our guided snorkelling trips take you to the best sites in Baa Atoll — from the manta ray aggregation at Hanifaru Bay to pristine house reefs teeming with tropical fish.", included: ["Guided snorkel trip", "Full snorkel equipment", "Boat transfers", "Marine biology briefing", "Drinks and snacks"] },
  { _id: "exc-sandbank", title: "Sandbank Trip", slug: "sandbank", duration: "Half day", price: 45, order: 2, shortDescription: "Pristine white sand surrounded by turquoise lagoon", description: "A classic Maldivian experience. We take you by boat to a pristine sandbank in the middle of the atoll.", included: ["Boat transfer to sandbank", "Snorkel equipment", "Refreshments", "Beach towels"] },
  { _id: "exc-night-snorkel", title: "Night Snorkel", slug: "night-snorkel", duration: "2 hours", price: 55, order: 3, shortDescription: "Bioluminescent plankton and nocturnal reef creatures", description: "As darkness falls, the reef transforms. Witness bioluminescent plankton, hunting octopuses, and sleeping parrotfish.", included: ["Guided night snorkel", "Underwater torch", "Full snorkel equipment", "Hot drinks after"] },
  { _id: "exc-fishing", title: "Big Game Fishing", slug: "big-game-fishing", duration: "Full day", price: 350, order: 4, shortDescription: "Yellowfin tuna, wahoo, and sailfish in deep blue water", description: "Beyond the atoll rim, the deep blue Indian Ocean drops to over 2,000 metres. Our fishing trips target yellowfin tuna, wahoo, mahi-mahi, and sailfish.", included: ["Full day charter", "All fishing equipment", "Lunch and drinks", "Experienced captain", "Catch prepared for dinner"] },
].map((e) => ({
  _type: "excursion",
  _id: e._id,
  title: e.title,
  slug: { _type: "slug", current: e.slug },
  duration: e.duration,
  price: e.price,
  order: e.order,
  shortDescription: e.shortDescription,
  description: [{ _type: "block", _key: "d1", style: "normal", children: [{ _type: "span", _key: "s1", text: e.description }] }],
  included: e.included,
}));

// ── Accommodation Data ──
const accommodation = [
  { _id: "acc-aveyla", name: "Aveyla Manta Village", description: "Beachfront guesthouse with ocean-facing rooms, rooftop terrace, and direct beach access.", bookingUrl: "#", order: 1 },
  { _id: "acc-kiha", name: "Kiha Beach", description: "Boutique hotel steps from the harbour. Modern rooms with island-style décor.", bookingUrl: "#", order: 2 },
  { _id: "acc-lvis", name: "Lvis Blancura", description: "Contemporary guesthouse with a pool, dive-friendly facilities, and sunset views.", bookingUrl: "#", order: 3 },
  { _id: "acc-chakz", name: "Chak'z Beach", description: "Budget-friendly beachside option with warm hospitality and home-cooked Maldivian meals.", bookingUrl: "#", order: 4 },
].map((a) => ({ _type: "accommodation", ...a }));

// ── Testimonial Data ──
const testimonials = [
  { _id: "test-sarah", author: "Sarah K.", location: "Australia", quote: "Swimming with over 100 manta rays was the most incredible experience of my life. The team knew exactly where to go and made everything seamless.", rating: 5, source: "google", featured: true, order: 1 },
  { _id: "test-marco", author: "Marco B.", location: "Italy", quote: "Best dive centre in the Maldives. Professional, friendly, and they know every cleaning station personally. Ryshyn is a legend.", rating: 5, source: "google", featured: true, order: 2 },
  { _id: "test-yuki", author: "Yuki T.", location: "Japan", quote: "Did my Advanced Open Water here. The instructors are patient, the reef is absolutely stunning, and the night dive was unforgettable.", rating: 5, source: "google", featured: true, order: 3 },
].map((t) => ({ _type: "testimonial", ...t }));

// ── Marine Species Data ──
const species = [
  { _id: "species-manta", commonName: "Reef Manta Ray", scientificName: "Mobula alfredi", bestMonths: ["May", "June", "July", "August", "September", "October", "November"], conservationStatus: "Vulnerable", order: 1, description: "The star of Hanifaru Bay. Aggregations of 100+ during cyclone feeding events — one of the greatest marine spectacles on Earth." },
  { _id: "species-whale-shark", commonName: "Whale Shark", scientificName: "Rhincodon typus", bestMonths: ["May", "June", "July", "August", "September", "October", "November"], conservationStatus: "Endangered", order: 2, description: "The world's largest fish. Regular sightings in Baa Atoll channels during the southwest monsoon plankton bloom." },
  { _id: "species-eagle-ray", commonName: "Eagle Ray", scientificName: "Aetobatus narinari", bestMonths: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], conservationStatus: "Near Threatened", order: 3, description: "Spotted eagles cruise the sandy channels between reefs. Often seen in groups of 3–8 at cleaning stations." },
  { _id: "species-grey-reef", commonName: "Grey Reef Shark", scientificName: "Carcharhinus amblyrhynchos", bestMonths: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], conservationStatus: "Near Threatened", order: 4, description: "Resident reef predator at channel dive sites. A constant, graceful presence on almost every dive." },
].map((s) => ({
  _type: "marineSpecies",
  _id: s._id,
  commonName: s.commonName,
  scientificName: s.scientificName,
  slug: { _type: "slug", current: s.commonName.toLowerCase().replace(/\s+/g, "-") },
  bestMonths: s.bestMonths,
  conservationStatus: s.conservationStatus,
  order: s.order,
  description: [{ _type: "block", _key: "d1", style: "normal", children: [{ _type: "span", _key: "s1", text: s.description }] }],
}));

// ── Site Settings ──
const siteSettings = {
  _type: "siteSettings",
  _id: "siteSettings",
  siteName: "Liquid Salt Divers",
  tagline: "Deeply Addictive.",
  description: "PADI 5 Star Dive Centre on Dharavandhoo island, Baa Atoll UNESCO Marine Biosphere Reserve, Maldives.",
  phone: "+960-7773998",
  whatsapp: "+9607773998",
  email: "info@liquidsaltdivers.com",
  address: "Dharavandhoo, Baa Atoll, Maldives",
  googleRating: 5.0,
  tripAdvisorRating: 5.0,
};

async function seed() {
  const allDocs = [
    ...packages,
    ...courses,
    ...team,
    ...excursions,
    ...accommodation,
    ...testimonials,
    ...species,
    siteSettings,
  ];

  console.log(`\n🌊 Seeding ${allDocs.length} documents to Sanity...\n`);

  let success = 0;
  let failed = 0;

  for (const doc of allDocs) {
    try {
      await client.createOrReplace(doc);
      console.log(`✅ ${doc._type}: ${(doc as any).title || (doc as any).name || (doc as any).commonName || (doc as any).author || doc._id}`);
      success++;
    } catch (err: any) {
      console.error(`❌ ${doc._type} ${doc._id}: ${err.message}`);
      failed++;
    }
  }

  console.log(`\n📊 Done: ${success} created, ${failed} failed, ${allDocs.length} total\n`);
}

seed();
