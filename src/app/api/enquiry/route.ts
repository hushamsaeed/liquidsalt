import { NextRequest, NextResponse } from "next/server";

interface EnquiryFormData {
  name: string;
  email: string;
  phone?: string;
  country: string;
  interest: string;
  dates?: string;
  guests?: number;
  certLevel?: string;
  message?: string;
  website?: string; // honeypot
}

export async function POST(request: NextRequest) {
  try {
    const data: EnquiryFormData = await request.json();

    // Honeypot check
    if (data.website) {
      // Silently reject spam
      return NextResponse.json({ success: true });
    }

    // Basic validation
    if (!data.name || !data.email || !data.country || !data.interest) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    // Rate limiting: simple in-memory (production would use Redis)
    // For now, trust the form-level protection

    const RESEND_API_KEY = process.env.RESEND_API_KEY;

    if (RESEND_API_KEY) {
      const { Resend } = await import("resend");
      const resend = new Resend(RESEND_API_KEY);

      // Send admin notification
      await resend.emails.send({
        from: "Liquid Salt Divers <bookings@liquidsaltdivers.com>",
        to: ["info@liquidsaltdivers.com"],
        subject: `New Enquiry: ${data.interest} — ${data.name}`,
        html: `
          <h2>New Booking Enquiry</h2>
          <table style="border-collapse: collapse; width: 100%;">
            <tr><td style="padding: 8px; font-weight: bold;">Name</td><td style="padding: 8px;">${escapeHtml(data.name)}</td></tr>
            <tr><td style="padding: 8px; font-weight: bold;">Email</td><td style="padding: 8px;"><a href="mailto:${escapeHtml(data.email)}">${escapeHtml(data.email)}</a></td></tr>
            ${data.phone ? `<tr><td style="padding: 8px; font-weight: bold;">Phone/WhatsApp</td><td style="padding: 8px;"><a href="https://wa.me/${data.phone.replace(/[^0-9]/g, "")}">${escapeHtml(data.phone)}</a></td></tr>` : ""}
            <tr><td style="padding: 8px; font-weight: bold;">Country</td><td style="padding: 8px;">${escapeHtml(data.country)}</td></tr>
            <tr><td style="padding: 8px; font-weight: bold;">Interest</td><td style="padding: 8px;">${escapeHtml(data.interest)}</td></tr>
            ${data.dates ? `<tr><td style="padding: 8px; font-weight: bold;">Dates</td><td style="padding: 8px;">${escapeHtml(data.dates)}</td></tr>` : ""}
            ${data.guests ? `<tr><td style="padding: 8px; font-weight: bold;">Guests</td><td style="padding: 8px;">${data.guests}</td></tr>` : ""}
            ${data.certLevel ? `<tr><td style="padding: 8px; font-weight: bold;">Cert Level</td><td style="padding: 8px;">${escapeHtml(data.certLevel)}</td></tr>` : ""}
            ${data.message ? `<tr><td style="padding: 8px; font-weight: bold;">Message</td><td style="padding: 8px;">${escapeHtml(data.message)}</td></tr>` : ""}
          </table>
        `,
      });

      // Send auto-response to guest
      await resend.emails.send({
        from: "Liquid Salt Divers <bookings@liquidsaltdivers.com>",
        to: [data.email],
        subject: "We received your enquiry — Liquid Salt Divers",
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <div style="background: #003B5C; padding: 24px; text-align: center;">
              <h1 style="color: #F0F8FF; font-size: 24px; margin: 0;">Liquid Salt Divers</h1>
              <p style="color: #00B4D8; font-size: 14px; margin: 8px 0 0;">PADI 5 Star Dive Centre &bull; Baa Atoll, Maldives</p>
            </div>
            <div style="padding: 32px 24px;">
              <p style="color: #003B5C; font-size: 16px;">Hi ${escapeHtml(data.name)},</p>
              <p style="color: #003B5C; font-size: 16px;">Thank you for your enquiry about <strong>${escapeHtml(data.interest)}</strong>. We&apos;ll get back to you within 24 hours.</p>
              <p style="color: #003B5C; font-size: 16px;">In the meantime, feel free to reach us directly on WhatsApp for a faster response:</p>
              <p style="text-align: center; margin: 24px 0;">
                <a href="https://wa.me/9607773998" style="background: #25D366; color: white; padding: 12px 24px; border-radius: 24px; text-decoration: none; font-weight: bold;">Chat on WhatsApp</a>
              </p>
              <p style="color: #666; font-size: 14px;">Deeply addictive.<br>The Liquid Salt Divers Team</p>
            </div>
          </div>
        `,
      });
    } else {
      // Log to console when Resend is not configured
      console.log("[Enquiry] No RESEND_API_KEY — logging form data:");
      console.log(JSON.stringify(data, null, 2));
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("[Enquiry] Error:", error);
    return NextResponse.json(
      { error: "Failed to process enquiry" },
      { status: 500 }
    );
  }
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
