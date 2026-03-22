import imageUrlBuilder from "@sanity/image-url";
import { client } from "./client";

const builder = imageUrlBuilder(client);

export function urlForImage(source: any) {
  if (!source?.asset) return null;
  return builder.image(source);
}

export function imageUrl(source: any, width = 800): string | null {
  const img = urlForImage(source);
  if (!img) return null;
  return img.width(width).auto("format").quality(80).url();
}
