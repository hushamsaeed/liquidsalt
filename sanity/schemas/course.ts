import { defineField, defineType } from "sanity";

export const courseSchema = defineType({
  name: "course",
  title: "PADI Course",
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
      name: "level",
      title: "Certification Level",
      type: "string",
      options: {
        list: [
          { title: "Beginner", value: "beginner" },
          { title: "Intermediate", value: "intermediate" },
          { title: "Advanced", value: "advanced" },
          { title: "Professional", value: "professional" },
          { title: "Specialty", value: "specialty" },
        ],
      },
    }),
    defineField({
      name: "heroImage",
      title: "Hero Image",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "overview",
      title: "Overview",
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "prerequisites",
      title: "Prerequisites",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "duration",
      title: "Duration",
      type: "string",
    }),
    defineField({
      name: "price",
      title: "Price (USD)",
      type: "number",
      validation: (Rule) => Rule.required().min(0),
    }),
    defineField({
      name: "included",
      title: "What's Included",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "minAge",
      title: "Minimum Age",
      type: "number",
    }),
    defineField({
      name: "order",
      title: "Sort Order",
      type: "number",
    }),
  ],
});
