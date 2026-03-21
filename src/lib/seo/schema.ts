const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://liquidsaltdivers.com";
const WHATSAPP = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "+9607773998";

export function diveShopSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["DivingBusiness", "LocalBusiness"],
    name: "Liquid Salt Divers",
    url: SITE_URL,
    logo: `${SITE_URL}/logos/01_LSD_FullColour_Transparent_1200px.png`,
    image: `${SITE_URL}/og/og-default.png`,
    description:
      "PADI 5 Star Dive Centre on Dharavandhoo island, Baa Atoll UNESCO Marine Biosphere Reserve, Maldives. Minutes from Hanifaru Bay.",
    telephone: WHATSAPP,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Dharavandhoo",
      addressLocality: "Baa Atoll",
      addressRegion: "Baa Atoll",
      addressCountry: "MV",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 5.1568,
      longitude: 72.9381,
    },
    priceRange: "$65–$950",
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "07:00",
      closes: "18:00",
    },
    sameAs: [
      "https://www.instagram.com/liquidsaltdivers",
      "https://www.facebook.com/liquidsaltdivers",
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "120",
      bestRating: "5",
    },
    hasCredential: {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "PADI 5 Star Dive Centre",
    },
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}
