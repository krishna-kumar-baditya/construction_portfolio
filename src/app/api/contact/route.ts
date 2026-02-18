import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { z } from "zod";
import { escapeHtml, rateLimit, stripControlChars } from "@/lib/security";

export const runtime = "nodejs";

const contactSchema = z.object({
  name: z.string().trim().min(1).max(100),
  email: z.string().trim().email().max(254),
  subject: z.string().trim().min(1).max(120).optional().default("General Inquiry"),
  message: z.string().trim().min(1).max(4000),
  // Honeypot field for basic bot filtering.
  website: z.string().optional(),
});

export async function POST(req: Request) {
  try {
    const limit = rateLimit(req, {
      keyPrefix: "contact",
      max: 5,
      windowMs: 10 * 60 * 1000,
    });
    if (!limit.allowed) {
      return NextResponse.json(
        { success: false, message: "Too many requests. Try again later." },
        {
          status: 429,
          headers: { "Retry-After": String(limit.retryAfterSeconds) },
        }
      );
    }

    const rawBody = await req.json();
    const parsed = contactSchema.safeParse(rawBody);
    if (!parsed.success) {
      return NextResponse.json(
        { success: false, message: "Invalid request payload." },
        { status: 400 }
      );
    }

    if (parsed.data.website) {
      return NextResponse.json({ success: true });
    }

    const name = stripControlChars(parsed.data.name);
    const email = stripControlChars(parsed.data.email);
    const subject = stripControlChars(parsed.data.subject).replace(/[\r\n]/g, " ");
    const message = stripControlChars(parsed.data.message);

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Website Contact Form" <${process.env.GMAIL_USER}>`,
      to: "krishukumar139@gmail.com", // your receiving email
      subject: `Contact Form - ${subject}`,
      html: `
        <h2>New Website Inquiry</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Subject:</strong> ${escapeHtml(subject)}</p>
        <hr />
        <p>${escapeHtml(message).replace(/\n/g, "<br/>")}</p>
      `,
    });

    return NextResponse.json({ success: true });

  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { success: false, message: "Unable to send message at this time." },
      { status: 500 }
    );
  }
}
