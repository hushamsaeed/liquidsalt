import Link from "next/link";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <>
      <Nav />
      <main className="flex min-h-[70vh] flex-col items-center justify-center px-6 text-center">
        <p className="text-8xl font-display text-ocean-navy/10">404</p>
        <h1 className="mt-4 font-display text-3xl text-ocean-navy">
          This page has drifted away
        </h1>
        <p className="mt-3 text-ocean-navy/60 max-w-md">
          Like a manta ray at the end of the season, the page you&apos;re looking
          for has moved on. Let&apos;s get you back to the reef.
        </p>
        <div className="mt-8 flex gap-4">
          <Link href="/">
            <Button variant="primary">Back to Home</Button>
          </Link>
          <Link href="/contact">
            <Button variant="ghost-dark">Contact Us</Button>
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
