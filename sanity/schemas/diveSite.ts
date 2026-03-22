import { defineField, defineType } from "sanity";

export const diveSiteSchema = defineType({
  name: "diveSite",
  title: "Dive Site",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "name", maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "depth",
      title: "Depth Range",
      type: "string",
      description: 'e.g. "5–15m"',
    }),
    defineField({
      name: "siteType",
      title: "Site Type",
      type: "string",
      description: 'e.g. "Thila", "Channel", "Bay", "Reef"',
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 4,
    }),
    defineField({
      name: "highlights",
      title: "Highlights",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "marineLife",
      title: "Key Marine Life",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "difficulty",
      title: "Difficulty",
      type: "string",
      options: {
        list: [
          { title: "All Levels", value: "All Levels" },
          { title: "Intermediate", value: "Intermediate" },
          { title: "Advanced", value: "Advanced" },
        ],
      },
      initialValue: "All Levels",
    }),
    defineField({
      name: "season",
      title: "Best Season",
      type: "string",
      description: 'e.g. "Year-round" or "June – November"',
      initialValue: "Year-round",
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
  preview: {
    select: { title: "name", subtitle: "siteType", media: "image" },
  },
});
