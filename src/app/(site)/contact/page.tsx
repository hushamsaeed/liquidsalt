"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppCTA } from "@/components/ui/WhatsAppCTA";
import { Button } from "@/components/ui/Button";
import {
  InputField,
  SelectField,
  TextareaField,
  HoneypotField,
} from "@/components/forms/FormField";

/* ── Static metadata must be in a separate file for "use client" pages ── */
// See contact/metadata.ts or layout.tsx for SEO metadata

interface EnquiryFormData {
  fullName: string;
  email: string;
  phone: string;
  country: string;
  interest: string;
  preferredDates: string;
  guests: string;
  certLevel: string;
  message: string;
  website: string; // honeypot
}

const COUNTRY_OPTIONS = [
  { value: "GB", label: "United Kingdom" },
  { value: "US", label: "United States" },
  { value: "DE", label: "Germany" },
  { value: "FR", label: "France" },
  { value: "IT", label: "Italy" },
  { value: "ES", label: "Spain" },
  { value: "NL", label: "Netherlands" },
  { value: "CH", label: "Switzerland" },
  { value: "AT", label: "Austria" },
  { value: "AU", label: "Australia" },
  { value: "NZ", label: "New Zealand" },
  { value: "CA", label: "Canada" },
  { value: "JP", label: "Japan" },
  { value: "CN", label: "China" },
  { value: "KR", label: "South Korea" },
  { value: "IN", label: "India" },
  { value: "AE", label: "United Arab Emirates" },
  { value: "SA", label: "Saudi Arabia" },
  { value: "ZA", label: "South Africa" },
  { value: "BR", label: "Brazil" },
  { value: "RU", label: "Russia" },
  { value: "SE", label: "Sweden" },
  { value: "NO", label: "Norway" },
  { value: "DK", label: "Denmark" },
  { value: "FI", label: "Finland" },
  { value: "SG", label: "Singapore" },
  { value: "MY", label: "Malaysia" },
  { value: "TH", label: "Thailand" },
  { value: "MV", label: "Maldives" },
  { value: "OTHER", label: "Other" },
];

const INTEREST_OPTIONS = [
  { value: "manta-madness", label: "Manta Madness" },
  { value: "dive-dive-dive", label: "Dive Dive Dive" },
  { value: "dive-hanifaru", label: "Dive Hanifaru" },
  { value: "discover-scuba", label: "Discover Scuba" },
  { value: "open-water", label: "Open Water" },
  { value: "advanced", label: "Advanced" },
  { value: "rescue", label: "Rescue" },
  { value: "divemaster", label: "Divemaster" },
  { value: "bubble-maker", label: "Bubble Maker" },
  { value: "nitrox", label: "NITROX" },
  { value: "efr", label: "EFR" },
  { value: "reactivate", label: "ReActivate" },
  { value: "general", label: "General Enquiry" },
];

const CERT_OPTIONS = [
  { value: "none", label: "None" },
  { value: "open-water", label: "Open Water" },
  { value: "advanced", label: "Advanced" },
  { value: "rescue", label: "Rescue" },
  { value: "divemaster", label: "Divemaster" },
  { value: "instructor", label: "Instructor" },
];

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [serverError, setServerError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<EnquiryFormData>({
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      country: "",
      interest: "",
      preferredDates: "",
      guests: "",
      certLevel: "",
      message: "",
      website: "",
    },
  });

  async function onSubmit(data: EnquiryFormData) {
    // Honeypot check
    if (data.website) return;

    setStatus("submitting");
    setServerError("");

    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.message || "Something went wrong. Please try again.");
      }

      setStatus("success");
      reset();
    } catch (err) {
      setServerError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
      setStatus("error");
    }
  }

  return (
    <>
      <Nav />
      <main>
        {/* Hero */}
        <section className="relative bg-gradient-to-b from-ocean-navy via-reef-teal to-night-dive pt-32 pb-20">
          <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
            <h1 className="font-display text-5xl md:text-6xl text-salt-white">
              Contact Us
            </h1>
            <p className="mt-4 text-lg text-salt-white/80 max-w-2xl mx-auto">
              Send us an enquiry and we&apos;ll get back to you within 24 hours. Or message us directly on WhatsApp for an instant reply.
            </p>
          </div>
        </section>

        {/* Form + Sidebar */}
        <section className="py-space-12 lg:py-space-16">
          <div className="mx-auto max-w-5xl px-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Form */}
              <div className="lg:col-span-2">
                {status === "success" ? (
                  <div className="rounded-lg border-2 border-cyan bg-cyan/5 p-8 text-center">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-cyan/10 flex items-center justify-center">
                      <svg className="w-8 h-8 text-cyan" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <h2 className="font-display text-2xl text-ocean-navy mb-2">
                      Enquiry Sent
                    </h2>
                    <p className="text-ocean-navy/70 mb-6">
                      Thank you for your message. We&apos;ll get back to you within 24 hours. For a faster response, reach out on WhatsApp.
                    </p>
                    <WhatsAppCTA
                      variant="inline"
                      label="Continue on WhatsApp"
                      message="Hi! I just sent an enquiry through your website and wanted to follow up."
                    />
                  </div>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-6">
                    <h2 className="font-display text-2xl text-ocean-navy mb-2">
                      Send an Enquiry
                    </h2>

                    {status === "error" && serverError && (
                      <div className="rounded-md bg-coral-gold/10 border border-coral-gold/30 p-4 text-sm text-coral-gold" role="alert">
                        {serverError}
                      </div>
                    )}

                    <HoneypotField register={register as unknown as (name: string) => Record<string, unknown>} />

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <InputField
                        label="Full Name"
                        type="text"
                        placeholder="Your full name"
                        required
                        error={errors.fullName?.message}
                        {...register("fullName", { required: "Full name is required" })}
                      />
                      <InputField
                        label="Email"
                        type="email"
                        placeholder="you@example.com"
                        required
                        error={errors.email?.message}
                        {...register("email", {
                          required: "Email is required",
                          pattern: {
                            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                            message: "Please enter a valid email address",
                          },
                        })}
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <InputField
                        label="Phone / WhatsApp"
                        type="tel"
                        placeholder="+1 234 567 890"
                        hint="Optional, but helpful for quick replies"
                        {...register("phone")}
                      />
                      <SelectField
                        label="Country"
                        options={COUNTRY_OPTIONS}
                        placeholder="Select your country"
                        required
                        error={errors.country?.message}
                        {...register("country", { required: "Country is required" })}
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <SelectField
                        label="Package / Course of Interest"
                        options={INTEREST_OPTIONS}
                        placeholder="What are you interested in?"
                        required
                        error={errors.interest?.message}
                        {...register("interest", { required: "Please select an option" })}
                      />
                      <SelectField
                        label="Certification Level"
                        options={CERT_OPTIONS}
                        placeholder="Your current level"
                        {...register("certLevel")}
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <InputField
                        label="Preferred Dates"
                        type="text"
                        placeholder="e.g. 15–22 July 2026"
                        hint="Approximate dates are fine"
                        {...register("preferredDates")}
                      />
                      <InputField
                        label="Number of Guests"
                        type="number"
                        placeholder="1"
                        min={1}
                        max={20}
                        {...register("guests")}
                      />
                    </div>

                    <TextareaField
                      label="Message"
                      placeholder="Tell us about your trip plans, questions, or anything else..."
                      maxLength={500}
                      error={errors.message?.message}
                      {...register("message", {
                        maxLength: {
                          value: 500,
                          message: "Message must be 500 characters or fewer",
                        },
                      })}
                    />

                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      disabled={status === "submitting"}
                      className="w-full sm:w-auto"
                    >
                      {status === "submitting" ? "Sending..." : "Send Enquiry"}
                    </Button>
                  </form>
                )}
              </div>

              {/* Sidebar */}
              <div>
                <div className="bg-salt-white rounded-lg p-6 shadow-card sticky top-24 space-y-6">
                  <h3 className="font-semibold text-ocean-navy">Get in Touch Directly</h3>

                  {/* WhatsApp */}
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-full bg-[#25D366]/10 flex items-center justify-center shrink-0">
                      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-[#25D366]" aria-hidden="true">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-ocean-navy">WhatsApp</p>
                      <a
                        href="https://wa.me/9607773998"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-cyan hover:underline"
                      >
                        +960 777 3998
                      </a>
                      <p className="text-xs text-ocean-navy/50 mt-0.5">Fastest way to reach us</p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-full bg-cyan/10 flex items-center justify-center shrink-0">
                      <svg className="w-5 h-5 text-cyan" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-ocean-navy">Email</p>
                      <a
                        href="mailto:info@liquidsaltdivers.com"
                        className="text-sm text-cyan hover:underline"
                      >
                        info@liquidsaltdivers.com
                      </a>
                      <p className="text-xs text-ocean-navy/50 mt-0.5">We reply within 24 hours</p>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-full bg-cyan/10 flex items-center justify-center shrink-0">
                      <svg className="w-5 h-5 text-cyan" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="1.5" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-ocean-navy">Location</p>
                      <p className="text-sm text-ocean-navy/70">
                        Dharavandhoo, Baa Atoll<br />
                        Republic of Maldives
                      </p>
                    </div>
                  </div>

                  <hr className="border-ocean-navy/10" />

                  <WhatsAppCTA
                    variant="inline"
                    label="Chat on WhatsApp"
                    message="Hi! I'd like to enquire about diving with Liquid Salt Divers."
                    className="w-full justify-center"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppCTA variant="floating" />
    </>
  );
}
