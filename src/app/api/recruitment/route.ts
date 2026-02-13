import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
    try {
        const formData = await req.formData();

        const type = formData.get("type") as string;
        const name = formData.get("name") as string;
        const email = formData.get("email") as string;
        const phone = formData.get("phone") as string;
        const message = formData.get("message") as string;
        const file = formData.get("file") as File | null;

        /* =========================
       VALIDATION
    ========================= */

        if (!name || !email) {
            throw new Error("Name and Email are required.");
        }

        const allowedTypes = [
            "application/pdf",
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
                filename: file.name,
                content: fileBuffer,
                contentType: file.type,
            });
        }

        /* =========================
       NODEMAILER SETUP
    ========================= */

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.GMAIL_USER,
                pass: process.env.GMAIL_PASS,
            },
        });

        /* =========================
       SEND EMAIL TO HR
    ========================= */

        await transporter.sendMail({
            from: `"Evergreen Recruitment" <${process.env.GMAIL_USER}>`,
            // to: "krishukumar139@gmail.com",
            to: `${process.env.GMAIL_USER}`,
            subject: `New Application - ${type}`,
            html: `
                <h2>New Recruitment Application</h2>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Phone:</strong> ${phone}</p>
                <p>${message}</p>
            `,
            attachments,
        });

        return NextResponse.json({ success: true });
    } catch (error: any) {
        console.error(error);
        return NextResponse.json(
            { success: false, message: error.message },
            { status: 500 },
        );
    }
}
