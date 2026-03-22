import { defineField, defineType } from "sanity";

export const packageSchema = defineType({
  name: "package",
  title: "Dive Package",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "tagline",
      title: "Tagline",
      type: "string",
    }),
    defineField({
      name: "season",
      title: "Season",
      type: "string",
      description: 'e.g. "June - November" or "Year-round"',
    }),
    defineField({
      name: "heroImage",
      title: "Hero Image",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "cardImage",
      title: "Card Image (16:9)",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "priceFrom",
      title: "Price From (USD)",
      type: "number",
      description: "Lowest starting price across all variants (auto-set or manual)",
      validation: (Rule) => Rule.required().min(0),
    }),
    defineField({
      name: "pricePer",
      title: "Price Per",
      type: "string",
      initialValue: "person",
    }),
    defineField({
      name: "badge",
      title: "Badge Text",
      type: "string",
      description: 'e.g. "Most Popular"',
    }),
    defineField({
      name: "inclusions",
      title: "Common Inclusions",
      type: "array",
      of: [{ type: "string" }],
      description: "Inclusions shared across all variants",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "duration",
      title: "Duration",
      type: "string",
      description: "Summary duration e.g. '3–7 nights'",
    }),
    defineField({
      name: "variants",
      title: "Package Variants",
      type: "array",
      of: [
        {
          type: "object",
          name: "packageVariant",
          title: "Variant",
          fields: [
            defineField({
              name: "nights",
              title: "Nights",
              type: "number",
              validation: (Rule) => Rule.required().min(1),
            }),
            defineField({
              name: "activities",
              title: "Activities Summary",
              type: "string",
              description: 'e.g. "6 Dives" or "2 Manta Snorkeling" or "4 Dives + 2 Manta Snorkeling"',
            }),
            defineField({
              name: "subtitle",
              title: "Subtitle",
              type: "string",
              description: "Short description of this variant",
            }),
            defineField({
              name: "inclusions",
              title: "Variant-Specific Inclusions",
              type: "array",
              of: [{ type: "string" }],
            }),
            defineField({
              name: "roomPricing",
              title: "Room Pricing",
              type: "array",
              of: [
                {
                  type: "object",
                  name: "roomPrice",
                  title: "Room Price",
                  fields: [
                    defineField({
                      name: "roomType",
                      title: "Room Type",
                      type: "string",
                      validation: (Rule) => Rule.required(),
                    }),
                    defineField({
                      name: "twinShare",
                      title: "Twin Share (USD per person)",
                      type: "number",
                      validation: (Rule) => Rule.required().min(0),
                    }),
                    defineField({
                      name: "single",
                      title: "Single (USD per person)",
                      type: "number",
                      validation: (Rule) => Rule.required().min(0),
                    }),
                  ],
                  preview: {
                    select: { title: "roomType", twin: "twinShare", single: "single" },
                    prepare({ title, twin, single }) {
                      return {
                        title: title || "Room",
                        subtitle: `Twin: $${twin} | Single: $${single}`,
                      };
                    },
                  },
                },
              ],
            }),
          ],
          preview: {
            select: { nights: "nights", activities: "activities" },
            prepare({ nights, activities }) {
              return {
                title: `${nights} Nights`,
                subtitle: activities || "",
              };
            },
          },
        },
      ],
    }),
    defineField({
      name: "featured",
      title: "Featured on Homepage",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "order",
      title: "Sort Order",
      type: "number",
    }),
  ],
  orderings: [
    {
      title: "Sort Order",
      name: "orderAsc",
      by: [{ field: "order", direction: "asc" }],
    },
  ],
});
