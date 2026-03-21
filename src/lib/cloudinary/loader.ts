const CLOUD_NAME = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;

interface CloudinaryLoaderParams {
  src: string;
  width: number;
  quality?: number;
}

/**
 * Next.js image loader for Cloudinary.
 * Use with next/image: <Image loader={cloudinaryLoader} ... />
 */
export function cloudinaryLoader({ src, width, quality }: CloudinaryLoaderParams): string {
  if (!CLOUD_NAME) return src;

  const params = [
    `w_${width}`,
    `q_${quality || "auto"}`,
    "f_auto",
    "c_limit",
  ].join(",");

  // If src is already a full URL, extract the path
  if (src.startsWith("http")) {
    return src;
  }

  return `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/${params}/${src}`;
}
