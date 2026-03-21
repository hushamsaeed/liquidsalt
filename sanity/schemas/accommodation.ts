import { defineField, defineType } from "sanity";

export const accommodationSchema = defineType({
  name: "accommodation",
  title: "Accommodation",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Property Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "name", maxLength: 96 },
    }),
    defineField({
      name: "image",
      title: "Property Image",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
    }),
    defineField({
      name: "priceRange",
      title: "Price Range",
      type: "string",
    }),
    defineField({
      name: "bookingUrl",
      title: "Booking URL",
      type: "url",
    }),
    defineField({
      name: "amenities",
      title: "Amenities",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "order",
      title: "Sort Order",
      type: "number",
    }),
  ],
});
