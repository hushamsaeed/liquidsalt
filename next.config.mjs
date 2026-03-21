/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "cdn.sanity.io" },
      { protocol: "https", hostname: "res.cloudinary.com" },
    ],
  },

  // 301 redirects from old Wix URL structure
  async redirects() {
    return [
      // Common Wix URL patterns → new structure
      { source: "/diving-courses", destination: "/courses", permanent: true },
      { source: "/diving-courses/:slug", destination: "/courses/:slug", permanent: true },
      { source: "/dive-packages", destination: "/packages", permanent: true },
      { source: "/dive-packages/:slug", destination: "/packages/:slug", permanent: true },
      { source: "/our-team", destination: "/team", permanent: true },
      { source: "/meet-the-team", destination: "/team", permanent: true },
      { source: "/about-us", destination: "/about", permanent: true },
      { source: "/our-story", destination: "/about", permanent: true },
      { source: "/contact-us", destination: "/contact", permanent: true },
      { source: "/book-now", destination: "/contact", permanent: true },
      { source: "/photo-gallery", destination: "/gallery", permanent: true },
      { source: "/hanifaru", destination: "/hanifaru-bay", permanent: true },
      { source: "/manta-snorkelling", destination: "/packages/manta-madness", permanent: true },
      { source: "/manta-madness", destination: "/packages/manta-madness", permanent: true },
      { source: "/discover-scuba-diving", destination: "/courses/discover-scuba", permanent: true },
      { source: "/open-water-course", destination: "/courses/open-water", permanent: true },
      { source: "/advanced-open-water", destination: "/courses/advanced-open-water", permanent: true },
      { source: "/rescue-diver", destination: "/courses/rescue-diver", permanent: true },
      { source: "/divemaster-course", destination: "/courses/divemaster", permanent: true },
      { source: "/snorkeling", destination: "/excursions/snorkelling", permanent: true },
      { source: "/snorkelling-trips", destination: "/excursions/snorkelling", permanent: true },
      { source: "/fishing", destination: "/excursions/big-game-fishing", permanent: true },
      { source: "/where-to-stay", destination: "/accommodation", permanent: true },
    ];
  },

  // Security headers
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
        ],
      },
    ];
  },
};

export default nextConfig;
