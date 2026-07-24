import { NextResponse } from "next/server";
import { getResendClient } from "@/lib/resend";
import { contactFormSchema } from "@/lib/validations/contact";
import { siteConfig } from "@/content/site";

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const parsed = contactFormSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Please check the form and try again." },
      { status: 400 }
    );
  }

  const { name, email, projectType, budget, message, company } = parsed.data;

  // Honeypot tripped: pretend success, send nothing.
  if (company) {
    return NextResponse.json({ ok: true });
  }

  const resend = getResendClient();
  if (!resend) {
    console.error("Contact form: RESEND_API_KEY is not configured.");
    return NextResponse.json(
      { error: "Email delivery isn't configured yet. Please email directly instead." },
      { status: 500 }
    );
  }

  const toEmail = process.env.CONTACT_TO_EMAIL || siteConfig.email;
  const fromEmail = process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev";

  try {
    const { error } = await resend.emails.send({
      from: `${siteConfig.name} Portfolio <${fromEmail}>`,
      to: [toEmail],
      replyTo: email,
      subject: `New project inquiry from ${name}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Project type: ${projectType}`,
        `Budget: ${budget || "Not specified"}`,
        "",
        message,
      ].join("\n"),
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Couldn't send your message. Please try emailing directly." },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact form error:", err);
    return NextResponse.json(
      { error: "Something went wrong. Please try emailing directly." },
      { status: 500 }
    );
  }
}
