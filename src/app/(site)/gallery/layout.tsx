import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery | Liquid Salt Divers",
  description:
    "Browse underwater photography, marine life encounters, and island scenery from Liquid Salt Divers in Baa Atoll, Maldives.",
};

export default function GalleryLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
