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
      title: "Inclusions",
      type: "array",
      of: [{ type: "string" }],
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
