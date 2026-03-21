import type { PortableTextBlock, ImageAsset, Slug } from "sanity";

export interface SanityImage {
  _type: "image";
  asset: ImageAsset;
  hotspot?: { x: number; y: number; height: number; width: number };
}

export interface Package {
  _id: string;
  title: string;
  slug: Slug;
  tagline?: string;
  heroImage?: SanityImage;
  cardImage?: SanityImage;
  priceFrom: number;
  pricePer?: string;
  badge?: string;
  inclusions?: string[];
  description?: PortableTextBlock[];
  duration?: string;
  featured?: boolean;
  order?: number;
}

export interface Course {
  _id: string;
  title: string;
  slug: Slug;
  level?: string;
  heroImage?: SanityImage;
  overview?: PortableTextBlock[];
  prerequisites?: string[];
  duration?: string;
  price: number;
  included?: string[];
  minAge?: number;
  order?: number;
}

export interface TeamMember {
  _id: string;
  name: string;
  role: string;
  photo?: SanityImage;
  bio?: string;
  certifications?: string[];
  instagram?: string;
  order?: number;
}

export interface Excursion {
  _id: string;
  title: string;
  slug: Slug;
  heroImage?: SanityImage;
  shortDescription?: string;
  description?: PortableTextBlock[];
  price?: number;
  duration?: string;
  included?: string[];
  order?: number;
}

export interface Accommodation {
  _id: string;
  name: string;
  description: string;
  image?: SanityImage;
  bookingUrl?: string;
  order?: number;
}

export interface Testimonial {
  _id: string;
  name: string;
  country?: string;
  text: string;
  rating?: number;
}

export interface GalleryImage {
  _id: string;
  title?: string;
  image: SanityImage;
  category?: string;
  alt: string;
  order?: number;
}

export interface MarineSpecies {
  _id: string;
  name: string;
  scientificName?: string;
  description: string;
  image?: SanityImage;
  season?: string;
  order?: number;
}

export interface SiteSettings {
  _id: string;
  siteName: string;
  tagline?: string;
  description?: string;
  phone?: string;
  whatsapp?: string;
  email?: string;
  address?: string;
  googleRating?: number;
  tripAdvisorRating?: number;
}
