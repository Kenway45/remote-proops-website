import { type NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    const { name, email, company, message } = await request.json()

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Name, email, and message are required" }, { status: 400 })
    }

    console.log("Contact form submission received:")
    console.log("Name:", name)
    console.log("Email:", email)
    console.log("Company:", company || "Not provided")
    console.log("Message:", message)
    console.log("Timestamp:", new Date().toLocaleString())

    try {
      const emailResult = await resend.emails.send({
        from: "onboarding@resend.dev",
        to: "afterhours5455@gmail.com",
        subject: `New Contact Form Message from ${name}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #333; border-bottom: 2px solid #6366f1; padding-bottom: 10px;">
              New Contact Form Submission
            </h2>
            <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Company:</strong> ${company || "Not provided"}</p>
            </div>
            <div style="margin: 20px 0;">
              <h3 style="color: #333;">Message:</h3>
              <div style="background: white; padding: 15px; border-left: 4px solid #6366f1; border-radius: 4px;">
                ${message.replace(/\n/g, "<br>")}
              </div>
            </div>
            <p style="color: #666; font-size: 12px; margin-top: 30px;">
              Submitted: ${new Date().toLocaleString()}
            </p>
          </div>
        `,
      })

      console.log("Email sent successfully via Resend:", emailResult)
    } catch (emailError) {
      console.error("Failed to send email via Resend:", emailError)
      // Continue with success response even if email fails
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json(
      {
        error: "Failed to process message",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    )
  }
}
