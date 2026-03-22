import { groq } from "next-sanity";

// ── Packages ──
export const allPackagesQuery = groq`
  *[_type == "package"] | order(order asc) {
    _id, title, slug, tagline, cardImage, priceFrom, pricePer,
    badge, inclusions, duration, featured, order
  }
`;

export const packageBySlugQuery = groq`
  *[_type == "package" && slug.current == $slug][0] {
    _id, title, slug, tagline, heroImage, cardImage,
    priceFrom, pricePer, badge, inclusions, description,
    duration, featured
  }
`;

export const packageSlugsQuery = groq`
  *[_type == "package"] { "slug": slug.current }
`;

// ── Courses ──
export const allCoursesQuery = groq`
  *[_type == "course"] | order(order asc) {
    _id, title, slug, level, heroImage, duration, price, minAge, order
  }
`;

export const courseBySlugQuery = groq`
  *[_type == "course" && slug.current == $slug][0] {
    _id, title, slug, level, heroImage, overview, prerequisites,
    duration, price, included, minAge
  }
`;

export const courseSlugsQuery = groq`
  *[_type == "course"] { "slug": slug.current }
`;

// ── Team ──
export const allTeamQuery = groq`
  *[_type == "teamMember"] | order(order asc) {
    _id, name, role, photo, bio, certifications, instagram, order
  }
`;

// ── Excursions ──
export const allExcursionsQuery = groq`
  *[_type == "excursion"] | order(order asc) {
    _id, title, slug, heroImage, shortDescription, price, duration, order
  }
`;

export const excursionBySlugQuery = groq`
  *[_type == "excursion" && slug.current == $slug][0] {
    _id, title, slug, heroImage, shortDescription, description, price, duration, included
  }
`;

export const excursionSlugsQuery = groq`
  *[_type == "excursion"] { "slug": slug.current }
`;

// ── Accommodation ──
export const allAccommodationQuery = groq`
  *[_type == "accommodation"] | order(order asc) {
    _id, name, description, image, bookingUrl, order
  }
`;

// ── Testimonials (schema uses author/quote/location — alias to name/text/country) ──
export const allTestimonialsQuery = groq`
  *[_type == "testimonial"] | order(order asc) [0...6] {
    _id,
    "name": author,
    "country": location,
    "text": quote,
    rating
  }
`;

// ── Gallery ──
export const allGalleryQuery = groq`
  *[_type == "galleryImage"] | order(order asc) {
    _id, title, image, category, alt, order
  }
`;

// ── Marine Species (schema uses commonName — alias to name) ──
export const allSpeciesQuery = groq`
  *[_type == "marineSpecies"] | order(order asc) {
    _id,
    "name": commonName,
    scientificName,
    description,
    image,
    "season": select(
      count(bestMonths) > 0 => bestMonths[0] + " — " + bestMonths[count(bestMonths)-1],
      "Year-round"
    ),
    order
  }
`;

// ── Site Settings ──
export const siteSettingsQuery = groq`
  *[_type == "siteSettings"][0] {
    _id, siteName, tagline, description, phone, whatsapp,
    email, address, googleRating, tripAdvisorRating
  }
`;
