export const runtime = "nodejs";

import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { name, email, request: message } = await req.json();

  const API_KEY = process.env.EMAIL_SERVICE_API_KEY;
  const TO_EMAIL = process.env.RECIEVER_EMAIL; // keep your existing env var name
  const FROM_EMAIL = process.env.SENDER_EMAIL;

  if (!API_KEY) {
    console.error("Missing EMAIL_SERVICE_API_KEY");
    return NextResponse.json({ success: false, error: "Email service not configured" }, { status: 500 });
  }
  if (!TO_EMAIL || !FROM_EMAIL) {
    console.error("Missing RECIEVER_EMAIL or SENDER_EMAIL env vars");
    return NextResponse.json({ success: false, error: "Receiver/Sender email not configured" }, { status: 500 });
  }

  const payload = {
    sender: { name: "Contact form Data", email: FROM_EMAIL },
    to: [{ email: TO_EMAIL }],
    replyTo: { email, name },
    subject: `Contact Form Submission from ${name || "Unknown"}`,
    htmlContent: `
      <h3>Contact Form Submission</h3>
      <p><strong>Name:</strong> ${name || ""}</p>
      <p><strong>Email:</strong> ${email || ""}</p>
      <p><strong>Message:</strong><br/>${message || ""}</p>
    `,
  };

  try {
    const res = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "api-key": API_KEY,
      },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      const text = await res.text();
      console.error("Brevo API error:", res.status, text);
      return NextResponse.json({ success: false, error: `Email provider error (${res.status})` }, { status: 500 });
    }

    return NextResponse.json({ success: true, status: 200 });
  } catch (err: any) {
    console.error("Email sending failed:", err?.message || err);
    return NextResponse.json({ success: false, error: "Internal server error" }, { status: 500 });
  }
}