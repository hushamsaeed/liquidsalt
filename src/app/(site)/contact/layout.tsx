import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Enquiry Form | Liquid Salt Divers",
  description:
    "Get in touch with Liquid Salt Divers. Send an enquiry about dive packages, PADI courses, or Hanifaru Bay trips. Based on Dharavandhoo, Baa Atoll, Maldives.",
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
