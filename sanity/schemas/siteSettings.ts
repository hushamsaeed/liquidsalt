import { defineField, defineType } from "sanity";

export const siteSettingsSchema = defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Site Title",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Site Description",
      type: "text",
    }),
    defineField({
      name: "whatsappNumber",
      title: "WhatsApp Number",
      type: "string",
      description: "International format, e.g. +960-7773998",
    }),
    defineField({
      name: "email",
      title: "Contact Email",
      type: "string",
    }),
    defineField({
      name: "phone",
      title: "Phone Number",
      type: "string",
    }),
    defineField({
      name: "address",
      title: "Address",
      type: "text",
    }),
    defineField({
      name: "socialLinks",
      title: "Social Links",
      type: "object",
      fields: [
        defineField({ name: "instagram", title: "Instagram", type: "url" }),
        defineField({ name: "facebook", title: "Facebook", type: "url" }),
        defineField({ name: "youtube", title: "YouTube", type: "url" }),
        defineField({ name: "tripadvisor", title: "TripAdvisor", type: "url" }),
      ],
    }),
    defineField({
      name: "preSeasonDiscount",
      title: "Pre-Season Discount",
      type: "object",
      fields: [
        defineField({ name: "enabled", title: "Enabled", type: "boolean" }),
        defineField({ name: "percentage", title: "Discount %", type: "number" }),
        defineField({ name: "deadline", title: "Deadline", type: "date" }),
        defineField({ name: "message", title: "Banner Message", type: "string" }),
      ],
    }),
  ],
});
