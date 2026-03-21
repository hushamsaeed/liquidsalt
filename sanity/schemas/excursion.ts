import { defineField, defineType } from "sanity";

export const excursionSchema = defineType({
  name: "excursion",
  title: "Excursion",
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
      name: "heroImage",
      title: "Hero Image",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "price",
      title: "Price (USD)",
      type: "number",
    }),
    defineField({
      name: "pricePer",
      title: "Price Per",
      type: "string",
      initialValue: "person",
    }),
    defineField({
      name: "whatToExpect",
      title: "What to Expect",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "duration",
      title: "Duration",
      type: "string",
    }),
    defineField({
      name: "order",
      title: "Sort Order",
      type: "number",
    }),
  ],
});
