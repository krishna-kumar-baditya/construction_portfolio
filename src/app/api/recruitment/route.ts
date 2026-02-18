import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { z } from "zod";
import { escapeHtml, rateLimit, stripControlChars } from "@/lib/security";

export const runtime = "nodejs";

const recruitmentSchema = z.object({
    type: z.string().trim().min(1).max(80).default("General"),
    name: z.string().trim().min(1).max(100),
    email: z.string().trim().email().max(254),
    phone: z.string().trim().max(30).optional().default(""),
    message: z.string().trim().max(4000).optional().default(""),
    // Honeypot field for basic bot filtering.
    website: z.string().optional().default(""),
});

export async function POST(req: Request) {
    try {
        const limit = rateLimit(req, {
            keyPrefix: "recruitment",
            max: 4,
            windowMs: 10 * 60 * 1000,
        });
        if (!limit.allowed) {
            return NextResponse.json(
                { success: false, message: "Too many requests. Try again later." },
                {
                    status: 429,
                    headers: { "Retry-After": String(limit.retryAfterSeconds) },
                },
            );
        }

        const formData = await req.formData();

        const parsed = recruitmentSchema.safeParse({
            type: formData.get("type"),
            name: formData.get("name"),
            email: formData.get("email"),
            phone: formData.get("phone"),
            message: formData.get("message"),
            website: formData.get("website"),
        });
        if (!parsed.success) {
            return NextResponse.json(
                { success: false, message: "Invalid request payload." },
                { status: 400 },
            );
        }

        if (parsed.data.website) {
            return NextResponse.json({ success: true });
        }

        const type = stripControlChars(parsed.data.type).replace(/[\r\n]/g, " ");
        const name = stripControlChars(parsed.data.name);
        const email = stripControlChars(parsed.data.email);
        const phone = stripControlChars(parsed.data.phone);
        const message = stripControlChars(parsed.data.message);
        const file = formData.get("file") as File | null;

        const allowedTypes = [
            "application/pdf",
            "application/msword",
            "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        ];

        let attachments: any[] = [];

        if (file) {
            if (!allowedTypes.includes(file.type)) {
                throw new Error("Only PDF and DOCX files are allowed.");
            }

            if (file.size > 5 * 1024 * 1024) {
                throw new Error("File size must be under 5MB.");
            }

            const fileBuffer = Buffer.from(await file.arrayBuffer());

            attachments.push({
                filename: file.name.replace(/[^\w.\-() ]/g, "_"),
                content: fileBuffer,
                contentType: file.type,
            });
        }

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.GMAIL_USER,
                pass: process.env.GMAIL_PASS,
            },
        });

        await transporter.sendMail({
            from: `"Evergreen Recruitment" <${process.env.GMAIL_USER}>`,
            to: `${process.env.GMAIL_USER}`,
            subject: `New Application - ${type}`,
            html: `
                <h2>New Recruitment Application</h2>
                <p><strong>Name:</strong> ${escapeHtml(name)}</p>
                <p><strong>Email:</strong> ${escapeHtml(email)}</p>
                <p><strong>Phone:</strong> ${escapeHtml(phone || "-")}</p>
                <p>${escapeHtml(message || "-").replace(/\n/g, "<br/>")}</p>
            `,
            attachments,
        });

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error("Recruitment API error:", error);
        return NextResponse.json(
            { success: false, message: "Unable to submit application at this time." },
            { status: 500 },
        );
    }
}
