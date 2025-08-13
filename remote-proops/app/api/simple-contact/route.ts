import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const { name, email, company, message } = await request.json()

    console.log("=== CONTACT FORM SUBMISSION ===")
    console.log("Name:", name)
    console.log("Email:", email)
    console.log("Company:", company || "Not provided")
    console.log("Message:", message)
    console.log("Timestamp:", new Date().toLocaleString())
    console.log("===============================")

    return NextResponse.json({
      success: true,
      message: "Contact form logged successfully",
    })
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json({ error: "Failed to process message" }, { status: 500 })
  }
}
