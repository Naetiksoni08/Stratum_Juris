import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import nodemailer from "nodemailer";
import { connectDB } from "@/lib/db";
import { Lead } from "@/lib/models/Lead";

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(7),
  queryType: z.string().min(1),
  description: z.string().min(10),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const parsed = schema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Invalid form data", details: parsed.error.flatten() },
        { status: 400 }
      );
    }

    const { name, email, phone, queryType, description } = parsed.data;
    const enquiryDate = new Date().toLocaleDateString("en-IN", {
      day: "2-digit", month: "short", year: "numeric",
    });

    // ── 1. Save to MongoDB ──────────────────────────────────────
    await connectDB();
    await Lead.create({
      name,
      email,
      phone,
      message: description,
      source: queryType,
      tags: [queryType],
      enquiryDate,
      status: "pending",
    });

    // ── 2. Notify founder ───────────────────────────────────────
    await transporter.sendMail({
      from: process.env.SMTP_FROM,
      to: process.env.SMTP_TO,
      subject: `New Inquiry — ${queryType} | ${name}`,
      html: `
        <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; padding: 32px; border: 1px solid #e8e2d9; background: #fdfcfb;">
          <div style="border-top: 3px solid #B8973A; padding-top: 24px; margin-bottom: 28px;">
            <h1 style="font-size: 22px; color: #0A1628; margin: 0 0 4px;">New Client Inquiry</h1>
            <p style="font-size: 12px; color: #888; margin: 0; font-family: sans-serif; letter-spacing: 0.1em; text-transform: uppercase;">Stratum Juris — Website</p>
          </div>
          <table style="width: 100%; border-collapse: collapse; font-family: sans-serif; font-size: 14px;">
            <tr style="border-bottom: 1px solid #f0ece7;">
              <td style="padding: 10px 0; color: #888; width: 140px;">Name</td>
              <td style="padding: 10px 0; color: #0A1628; font-weight: 600;">${name}</td>
            </tr>
            <tr style="border-bottom: 1px solid #f0ece7;">
              <td style="padding: 10px 0; color: #888;">Email</td>
              <td style="padding: 10px 0; color: #0A1628;"><a href="mailto:${email}" style="color: #B8973A;">${email}</a></td>
            </tr>
            <tr style="border-bottom: 1px solid #f0ece7;">
              <td style="padding: 10px 0; color: #888;">Phone</td>
              <td style="padding: 10px 0; color: #0A1628;"><a href="tel:${phone}" style="color: #B8973A;">${phone}</a></td>
            </tr>
            <tr style="border-bottom: 1px solid #f0ece7;">
              <td style="padding: 10px 0; color: #888;">Service Type</td>
              <td style="padding: 10px 0; color: #0A1628;">${queryType}</td>
            </tr>
            <tr style="border-bottom: 1px solid #f0ece7;">
              <td style="padding: 10px 0; color: #888;">Date</td>
              <td style="padding: 10px 0; color: #0A1628;">${enquiryDate}</td>
            </tr>
          </table>
          <div style="margin-top: 24px; background: #f7f4f0; padding: 20px; border-left: 3px solid #B8973A;">
            <p style="font-family: sans-serif; font-size: 12px; color: #888; text-transform: uppercase; letter-spacing: 0.1em; margin: 0 0 8px;">Message</p>
            <p style="font-size: 15px; color: #0A1628; line-height: 1.7; margin: 0;">${description}</p>
          </div>
          <p style="font-family: sans-serif; font-size: 12px; color: #aaa; margin-top: 32px; border-top: 1px solid #f0ece7; padding-top: 16px;">
            This inquiry was submitted via the Stratum Juris website contact form.
          </p>
        </div>
      `,
    });

    // ── 3. Confirmation to client ───────────────────────────────
    await transporter.sendMail({
      from: process.env.SMTP_FROM,
      to: email,
      subject: `We have received your enquiry — Stratum Juris`,
      html: `
        <div style="font-family: Georgia, serif; max-width: 600px; margin: 0; padding: 32px; background: #ffffff; text-align: left;">
          <h1 style="font-size: 22px; color: #0a1628; margin-bottom: 24px; border-bottom: 2px solid #c9a84c; padding-bottom: 12px;">
            Stratum Juris — Advocates &amp; Solicitors
          </h1>
          <p style="font-size: 17px; color: #333333; line-height: 1.7;">Dear <strong>${name}</strong>,</p>
          <p style="font-size: 17px; color: #333333; line-height: 1.7;">Thank you for reaching out to <strong>Stratum Juris</strong>.</p>
          <p style="font-size: 17px; color: #333333; line-height: 1.7;">We have received your enquiry and our team will get back to you within <strong>24 hours</strong>.</p>
          <br/>
          <p style="font-size: 17px; color: #333333; line-height: 1.7;">Warm regards,</p>
          <p style="font-size: 17px; color: #0a1628;"><strong>Stratum Juris</strong></p>
        </div>
      `,
    });

    return NextResponse.json({ success: true }, { status: 200 });

  } catch (err) {
    console.error("Contact form error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}