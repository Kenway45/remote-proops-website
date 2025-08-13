import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const formData = await request.json()

    if (!formData.name || !formData.email || !formData.businessType) {
      return NextResponse.json({ error: "Name, email, and business type are required" }, { status: 400 })
    }

    console.log("Consultation form submission received:")
    console.log("Name:", formData.name)
    console.log("Email:", formData.email)
    console.log("Company:", formData.company || "Not provided")
    console.log("Phone:", formData.phone || "Not provided")
    console.log("Business Type:", formData.businessType)
    console.log("Team Size:", formData.teamSize)
    console.log("Budget:", formData.budget)
    console.log("Timeline:", formData.timeline)
    console.log("Current Challenges:", formData.currentChallenges)
    console.log("Preferred Date:", formData.preferredDate || "Not provided")
    console.log("Preferred Time:", formData.preferredTime || "Not provided")
    console.log("Additional Info:", formData.additionalInfo || "Not provided")
    console.log("Timestamp:", new Date().toLocaleString())

    // Return success without sending email
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Consultation form error:", error)
    return NextResponse.json(
      {
        error: "Failed to submit consultation request",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    )
  }
}
