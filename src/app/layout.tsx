import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Liquid Salt Divers | PADI 5 Star Dive Centre — Baa Atoll, Maldives",
  description:
    "Dive with manta rays at Hanifaru Bay. PADI 5 Star Dive Centre on Dharavandhoo island, Baa Atoll UNESCO Marine Biosphere Reserve, Maldives.",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://liquidsaltdivers.com"),
  icons: {
    icon: [
      { url: "/favicons/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicons/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicons/favicon-48x48.png", sizes: "48x48", type: "image/png" },
    ],
    apple: [
      { url: "/favicons/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      { url: "/favicons/android-chrome-192x192.png", sizes: "192x192", type: "image/png", rel: "icon" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfairDisplay.variable} ${inter.variable}`}>
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}
