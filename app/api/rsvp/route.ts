import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { name, email, attendance, guests, dietaryRestrictions, message } = body;

  const attendingText = attendance === "yes" ? "Joyfully Accepts ✓" : "Regretfully Declines ✗";

  try {
    await resend.emails.send({
      from: "RSVP <onboarding@resend.dev>",
      to: "kjcastanos@gmail.com",
      subject: `RSVP from ${name} — Nikko & Travis Wedding`,
      html: `
        <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; padding: 32px; background: #1a1a1a; color: #d4af37;">
          <h1 style="font-size: 28px; margin-bottom: 8px;">New RSVP Received</h1>
          <p style="color: #999; font-size: 13px; margin-bottom: 32px;">Nikko & Travis — October 02, 2026</p>

          <table style="width: 100%; border-collapse: collapse;">
            <tr style="border-bottom: 1px solid #333;">
              <td style="padding: 12px 0; color: #999; font-size: 12px; text-transform: uppercase; letter-spacing: 2px; width: 40%;">Name</td>
              <td style="padding: 12px 0; font-size: 15px;">${name}</td>
            </tr>
            <tr style="border-bottom: 1px solid #333;">
              <td style="padding: 12px 0; color: #999; font-size: 12px; text-transform: uppercase; letter-spacing: 2px;">Email</td>
              <td style="padding: 12px 0; font-size: 15px;">${email}</td>
            </tr>
            <tr style="border-bottom: 1px solid #333;">
              <td style="padding: 12px 0; color: #999; font-size: 12px; text-transform: uppercase; letter-spacing: 2px;">Attendance</td>
              <td style="padding: 12px 0; font-size: 15px;">${attendingText}</td>
            </tr>
            <tr style="border-bottom: 1px solid #333;">
              <td style="padding: 12px 0; color: #999; font-size: 12px; text-transform: uppercase; letter-spacing: 2px;"># of People</td>
              <td style="padding: 12px 0; font-size: 15px;">${guests}</td>
            </tr>
            ${dietaryRestrictions ? `
            <tr style="border-bottom: 1px solid #333;">
              <td style="padding: 12px 0; color: #999; font-size: 12px; text-transform: uppercase; letter-spacing: 2px;">Dietary</td>
              <td style="padding: 12px 0; font-size: 15px;">${dietaryRestrictions}</td>
            </tr>` : ""}
            ${message ? `
            <tr>
              <td style="padding: 12px 0; color: #999; font-size: 12px; text-transform: uppercase; letter-spacing: 2px;">Message</td>
              <td style="padding: 12px 0; font-size: 15px; font-style: italic;">"${message}"</td>
            </tr>` : ""}
          </table>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Resend error:", error);
    return NextResponse.json({ success: false, error: "Failed to send email" }, { status: 500 });
  }
}
