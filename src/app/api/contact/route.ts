import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

type ContactPayload = {
  name?: string;
  email?: string;
  projectType?: string;
  message?: string;
};

const requiredEnv = [
  "SMTP_HOST",
  "SMTP_PORT",
  "SMTP_USER",
  "SMTP_PASS",
  "CONTACT_TO",
] as const;

export async function POST(request: Request) {
  try {
    const payload = (await request.json()) as ContactPayload;
    const name = (payload.name || "").trim();
    const email = (payload.email || "").trim();
    const projectType = (payload.projectType || "").trim();
    const message = (payload.message || "").trim();
    const targetEmail =
      process.env.CONTACT_TO ||
      process.env.NEXT_PUBLIC_CONTACT_TO ||
      "james.wang@techalphasolutions.com";

    if (!name || !email || !projectType || !message) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 },
      );
    }

    const subject = `New contact from ${name}`;
    const textBody = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Project type: ${projectType}`,
      "",
      message,
    ].join("\n");

    const mailtoUrl = `mailto:${targetEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(textBody)}`;

    const missing = requiredEnv.filter((key) => !process.env[key]);
    if (missing.length) {
      // If SMTP is not configured, gracefully fall back to a mailto link so the user can still reach us.
      return NextResponse.json({
        ok: false,
        fallbackMailto: mailtoUrl,
        error: `Missing server configuration: ${missing.join(", ")}`,
      });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: Number(process.env.SMTP_PORT) === 465,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from:
        process.env.SMTP_FROM ||
        `"TechAlpha Contact" <${process.env.SMTP_USER as string}>`,
      to: targetEmail,
      replyTo: email,
      subject,
      text: textBody,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Unable to send message right now." },
      { status: 500 },
    );
  }
}
