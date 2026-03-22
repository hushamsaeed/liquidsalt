/** Static package data — used as fallback when Sanity has no content yet */
export const STATIC_PACKAGES = [
  {
    _id: "pkg-manta-madness",
    title: "Manta Madness",
    slug: { current: "manta-madness" },
    tagline: "The ultimate Hanifaru Bay snorkel experience",
    season: "June - November",
    heroImage: "/images/packages/manta-madness.webp",
    priceFrom: 720,
    pricePer: "person",
    badge: "Most Popular",
    featured: true,
    duration: "3–7 nights",
    inclusions: [
      "Accommodation in preferred room category",
      "Full board Meals (Breakfast, Lunch and Dinner)",
      "Manta Snorkeling trips",
      "Return Transfer Male | Dharavandhoo | Male by Domestic Plane",
      "10% Service Charge and 17% TGST included",
      "Green tax $6 per day per person",
    ],
    descriptionText:
      "Embark on an unforgettable aquatic adventure with our exclusive snorkelling package \"Manta Madness\". Nestled in the pristine beauty of Baa Atoll, this package offers the perfect blend of luxury, exploration, and awe-inspiring marine encounters.",
    variants: [
      {
        nights: 3,
        activities: "2 Manta Snorkeling",
        subtitle: "Enjoy 3 nights on full board basis in one of our beautiful rooms and join us for 2 Manta Snorkelling trips",
        roomPricing: [
          { roomType: "Village Deluxe Room", twinShare: 720, single: 969 },
          { roomType: "Beach Deluxe Room", twinShare: 818, single: 1144 },
          { roomType: "Ocean Deluxe Room", twinShare: 818, single: 1144 },
        ],
      },
      {
        nights: 4,
        activities: "2 Manta Snorkeling",
        subtitle: "Enjoy 4 nights on full board basis in one of our beautiful rooms and join us for 2 Manta Snorkelling trips",
        roomPricing: [
          { roomType: "Village Deluxe Room", twinShare: 810, single: 1135 },
          { roomType: "Beach Deluxe Room", twinShare: 929, single: 1375 },
          { roomType: "Ocean Deluxe Room", twinShare: 929, single: 1375 },
        ],
      },
      {
        nights: 5,
        activities: "3 Manta Snorkeling",
        subtitle: "Enjoy 5 nights on full board basis in one of our beautiful rooms and join us for 3 Manta Snorkeling trips",
        roomPricing: [
          { roomType: "Village Deluxe Room", twinShare: 970, single: 1377 },
          { roomType: "Beach Deluxe Room", twinShare: 1119, single: 1677 },
          { roomType: "Ocean Deluxe Room", twinShare: 1119, single: 1677 },
        ],
      },
      {
        nights: 6,
        activities: "4 Manta Snorkeling",
        subtitle: "Enjoy 6 nights on full board basis in one of our beautiful rooms and join us for 4 Manta Snorkeling trips",
        roomPricing: [
          { roomType: "Village Deluxe Room", twinShare: 1130, single: 1620 },
          { roomType: "Beach Deluxe Room", twinShare: 1310, single: 1977 },
          { roomType: "Ocean Deluxe Room", twinShare: 1310, single: 1977 },
        ],
      },
      {
        nights: 7,
        activities: "4 Manta Snorkeling",
        subtitle: "Enjoy 7 nights on full board basis in one of our beautiful rooms and join us for 4 Manta Snorkeling trips",
        roomPricing: [
          { roomType: "Village Deluxe Room", twinShare: 1220, single: 1789 },
          { roomType: "Beach Deluxe Room", twinShare: 1429, single: 2200 },
          { roomType: "Ocean Deluxe Room", twinShare: 1429, single: 2200 },
        ],
      },
    ],
  },
  {
    _id: "pkg-dive-dive-dive",
    title: "Dive Dive Dive",
    slug: { current: "dive-dive-dive" },
    tagline: "Immerse yourself in the wonders of Baa Atoll",
    heroImage: "/images/packages/dive-dive-dive.webp",
    priceFrom: 1020,
    pricePer: "person",
    featured: false,
    duration: "3–7 nights",
    inclusions: [
      "Accommodation in preferred room category",
      "Full board Meals (Breakfast, Lunch and Dinner)",
      "Local area dives (Tank and Weights Only)",
      "Return Transfer Male | Dharavandhoo | Male by Domestic Plane",
      "10% Service Charge and 17% TGST included",
      "Green tax $6 per day per person",
    ],
    descriptionText:
      "Immerse yourself in the wonders of Baa Atoll with our Dive Dive Dive Package. Enjoy full-board accommodations, hassle-free domestic flights, thrilling scuba dives at affordable prices. Explore vibrant coral reefs and marine life in this UNESCO Biosphere Reserve. Your ultimate dive adventure awaits with Liquid Salt Divers.",
    variants: [
      {
        nights: 3,
        activities: "6 Dives",
        subtitle: "Enjoy 3 nights on full board basis in one of our beautiful rooms and join our scheduled boat dive trips for 6 spectacular dives",
        roomPricing: [
          { roomType: "Village Deluxe Room", twinShare: 1020, single: 1259 },
          { roomType: "Beach Deluxe Room", twinShare: 1110, single: 1439 },
          { roomType: "Ocean Deluxe Room", twinShare: 1110, single: 1439 },
        ],
      },
      {
        nights: 4,
        activities: "8 Dives",
        subtitle: "Enjoy 4 nights on full board basis in one of our beautiful rooms and join our scheduled boat dive trips for 8 spectacular dives",
        roomPricing: [
          { roomType: "Village Deluxe Room", twinShare: 1249, single: 1576 },
          { roomType: "Beach Deluxe Room", twinShare: 1369, single: 1818 },
          { roomType: "Ocean Deluxe Room", twinShare: 1369, single: 1818 },
        ],
      },
      {
        nights: 5,
        activities: "10 Dives",
        subtitle: "Enjoy 5 nights on full board basis in one of our beautiful rooms and join our scheduled boat dive trips for 10 spectacular dives",
        roomPricing: [
          { roomType: "Village Deluxe Room", twinShare: 1459, single: 1865 },
          { roomType: "Beach Deluxe Room", twinShare: 1610, single: 2159 },
          { roomType: "Ocean Deluxe Room", twinShare: 1610, single: 2159 },
        ],
      },
      {
        nights: 6,
        activities: "12 Dives",
        subtitle: "Enjoy 6 nights on full board basis in one of our beautiful rooms and join our scheduled boat dive trips for 12 spectacular dives",
        roomPricing: [
          { roomType: "Village Deluxe Room", twinShare: 1688, single: 2177 },
          { roomType: "Beach Deluxe Room", twinShare: 1865, single: 2529 },
          { roomType: "Ocean Deluxe Room", twinShare: 1865, single: 2529 },
        ],
      },
      {
        nights: 7,
        activities: "14 Dives",
        subtitle: "Enjoy 7 nights on full board basis in one of our beautiful rooms and join our scheduled boat dive trips for 14 spectacular dives",
        roomPricing: [
          { roomType: "Village Deluxe Room", twinShare: 1919, single: 2488 },
          { roomType: "Beach Deluxe Room", twinShare: 2125, single: 2899 },
          { roomType: "Ocean Deluxe Room", twinShare: 2125, single: 2899 },
        ],
      },
    ],
  },
  {
    _id: "pkg-dive-hanifaru",
    title: "Dive Hanifaru",
    slug: { current: "dive-hanifaru" },
    tagline: "The perfect blend of scuba diving and manta snorkelling",
    season: "June - November",
    heroImage: "/images/packages/dive-hanifaru.webp",
    priceFrom: 1020,
    pricePer: "person",
    featured: false,
    duration: "3–7 nights",
    inclusions: [
      "Accommodation in preferred room category",
      "Full board Meals (Breakfast, Lunch and Dinner)",
      "Spectacular Dives (Tanks and Weights only)",
      "Manta Snorkeling trips",
      "Return Transfer Male | Dharavandhoo | Male by Domestic Plane",
      "10% Service Charge and 17% TGST included",
      "Green tax $6 per day per person",
    ],
    descriptionText:
      "Introducing the Dive Hanifaru Package — an immersive and unforgettable experience for enthusiasts seeking the perfect blend of excitement and relaxation. We at Liquid Salt Divers invite you to embark on a journey that combines the thrill of scuba diving in the pristine Baa Atoll with the mesmerising beauty of snorkeling alongside majestic Mantas in Hanifaru Bay.",
    variants: [
      {
        nights: 3,
        activities: "4 Dives + 2 Manta Snorkeling",
        subtitle: "Enjoy 3 nights on full board basis in one of our beautiful rooms and join us on 4 of our scheduled boat dives and 2 Manta Snorkelling trips",
        roomPricing: [
          { roomType: "Village Deluxe Room", twinShare: 1020, single: 1255 },
          { roomType: "Beach Deluxe Room", twinShare: 1110, single: 1434 },
          { roomType: "Ocean Deluxe Room", twinShare: 1110, single: 1434 },
        ],
      },
      {
        nights: 4,
        activities: "6 Dives + 2 Manta Snorkeling",
        subtitle: "Enjoy 4 nights on full board basis in one of our beautiful rooms and join us on 6 of our scheduled boat dives and 2 Manta Snorkelling trips",
        roomPricing: [
          { roomType: "Village Deluxe Room", twinShare: 1249, single: 1579 },
          { roomType: "Beach Deluxe Room", twinShare: 1366, single: 1810 },
          { roomType: "Ocean Deluxe Room", twinShare: 1366, single: 1810 },
        ],
      },
      {
        nights: 5,
        activities: "9 Dives + 3 Manta Snorkeling",
        subtitle: "Enjoy 5 nights on full board basis in one of our beautiful rooms and join us on 9 of our scheduled boat dives and 3 Manta Snorkelling trips",
        roomPricing: [
          { roomType: "Village Deluxe Room", twinShare: 1626, single: 2030 },
          { roomType: "Beach Deluxe Room", twinShare: 1777, single: 2329 },
          { roomType: "Ocean Deluxe Room", twinShare: 1777, single: 2329 },
        ],
      },
      {
        nights: 6,
        activities: "12 Dives + 4 Manta Snorkeling",
        subtitle: "Enjoy 6 nights on full board basis in one of our beautiful rooms and join us on 12 of our scheduled boat dives and 4 Manta Snorkelling trips",
        roomPricing: [
          { roomType: "Village Deluxe Room", twinShare: 1977, single: 2510 },
          { roomType: "Beach Deluxe Room", twinShare: 2155, single: 2818 },
          { roomType: "Ocean Deluxe Room", twinShare: 2155, single: 2818 },
        ],
      },
      {
        nights: 7,
        activities: "14 Dives + 4 Manta Snorkeling",
        subtitle: "Enjoy 7 nights on full board basis in one of our beautiful rooms and join us on 14 of our scheduled boat dives and 4 Manta Snorkeling trips",
        roomPricing: [
          { roomType: "Village Deluxe Room", twinShare: 2210, single: 2777 },
          { roomType: "Beach Deluxe Room", twinShare: 2410, single: 3189 },
          { roomType: "Ocean Deluxe Room", twinShare: 2410, single: 3189 },
        ],
      },
    ],
  },
];
