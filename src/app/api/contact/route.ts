import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { name, email, company, service, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      // In development without Resend configured, log to console
      console.log("Contact form submission:", {
        name,
        email,
        company,
        service,
        message,
      });
      return NextResponse.json({ success: true });
    }

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Lumos Contact Form <onboarding@resend.dev>",
        to: ["dhillon_amardeep@outlook.com"],
        reply_to: email,
        subject: `New inquiry from ${name}${company ? ` at ${company}` : ""}`,
        html: `
          <div style="font-family: Inter, sans-serif; max-width: 600px; margin: 0 auto; padding: 40px 20px;">
            <div style="background: linear-gradient(135deg, #7C3AED, #0F0E17); padding: 32px; border-radius: 12px; margin-bottom: 32px;">
              <h1 style="color: white; margin: 0; font-size: 24px; font-weight: 700;">New Lumos Inquiry</h1>
              <p style="color: rgba(255,255,255,0.7); margin: 8px 0 0;">Someone wants to work with you</p>
            </div>

            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #E5E7EB; font-weight: 600; color: #374151; width: 130px;">Name</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #E5E7EB; color: #111827;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #E5E7EB; font-weight: 600; color: #374151;">Email</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #E5E7EB; color: #111827;"><a href="mailto:${email}" style="color: #7C3AED;">${email}</a></td>
              </tr>
              ${
                company
                  ? `<tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #E5E7EB; font-weight: 600; color: #374151;">Company</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #E5E7EB; color: #111827;">${company}</td>
              </tr>`
                  : ""
              }
              ${
                service
                  ? `<tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #E5E7EB; font-weight: 600; color: #374151;">Service</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #E5E7EB; color: #111827;">${service}</td>
              </tr>`
                  : ""
              }
            </table>

            <div style="margin-top: 24px; padding: 20px; background: #F9FAFB; border-radius: 8px; border-left: 4px solid #7C3AED;">
              <p style="font-weight: 600; color: #374151; margin: 0 0 8px;">Message</p>
              <p style="color: #111827; margin: 0; line-height: 1.6; white-space: pre-wrap;">${message}</p>
            </div>

            <div style="margin-top: 32px; text-align: center; color: #9CA3AF; font-size: 12px;">
              <p>Sent via Lumos contact form · lumosai.ca</p>
            </div>
          </div>
        `,
      }),
    });

    if (!response.ok) {
      const error = await response.text();
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Failed to send email. Please try again." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
