import type { MetadataRoute } from "next";
import { STATIC_PACKAGES } from "@/lib/data/packages";
import { STATIC_COURSES } from "@/lib/data/courses";
import { STATIC_EXCURSIONS } from "@/lib/data/excursions";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://liquidsaltdivers.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    { url: SITE_URL, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${SITE_URL}/packages`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE_URL}/courses`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/hanifaru-bay`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/marine-life`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/gallery`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${SITE_URL}/team`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${SITE_URL}/accommodation`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${SITE_URL}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
  ];

  const packagePages: MetadataRoute.Sitemap = STATIC_PACKAGES.map((pkg) => ({
    url: `${SITE_URL}/packages/${pkg.slug.current}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  const coursePages: MetadataRoute.Sitemap = STATIC_COURSES.map((course) => ({
    url: `${SITE_URL}/courses/${course.slug.current}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const excursionPages: MetadataRoute.Sitemap = STATIC_EXCURSIONS.map((exc) => ({
    url: `${SITE_URL}/excursions/${exc.slug.current}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticPages, ...packagePages, ...coursePages, ...excursionPages];
}
