import { defineField, defineType } from "sanity";

export const marineSpeciesSchema = defineType({
  name: "marineSpecies",
  title: "Marine Species",
  type: "document",
  fields: [
    defineField({
      name: "commonName",
      title: "Common Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "scientificName",
      title: "Scientific Name",
      type: "string",
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "commonName", maxLength: 96 },
    }),
    defineField({
      name: "image",
      title: "Image",
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
      name: "bestMonths",
      title: "Best Months to See",
      type: "array",
      of: [{ type: "string" }],
      options: {
        list: [
          "January", "February", "March", "April", "May", "June",
          "July", "August", "September", "October", "November", "December",
        ],
      },
    }),
    defineField({
      name: "conservationStatus",
      title: "Conservation Status",
      type: "string",
    }),
    defineField({
      name: "order",
      title: "Sort Order",
      type: "number",
    }),
  ],
});
