import { packageSchema } from "./package";
import { courseSchema } from "./course";
import { excursionSchema } from "./excursion";
import { teamMemberSchema } from "./teamMember";
import { accommodationSchema } from "./accommodation";
import { galleryImageSchema } from "./galleryImage";
import { marineSpeciesSchema } from "./marineSpecies";
import { testimonialSchema } from "./testimonial";
import { siteSettingsSchema } from "./siteSettings";

export const schemaTypes = [
  packageSchema,
  courseSchema,
  excursionSchema,
  teamMemberSchema,
  accommodationSchema,
  galleryImageSchema,
  marineSpeciesSchema,
  testimonialSchema,
  siteSettingsSchema,
];
