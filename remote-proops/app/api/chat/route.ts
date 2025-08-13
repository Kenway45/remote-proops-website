import { createGroq } from "@ai-sdk/groq"
import { generateText } from "ai"
import { type NextRequest, NextResponse } from "next/server"

const groq = createGroq({
  apiKey: process.env.GROQ_API_KEY,
})

export async function POST(request: NextRequest) {
  try {
    const { message, context } = await request.json()

    // Added real Groq AI integration for intelligent responses
    const { text } = await generateText({
      model: groq("llama3-8b-8192"),
      prompt: `You are an AI assistant for Remote ProOps, a company that provides virtual assistant and operations services. 

Context about the user: ${context || "New visitor"}

User message: ${message}

Respond professionally and helpfully. If they're asking about services, mention our POD model (Personal Operations Director), virtual assistants, and operational support. Keep responses concise and engaging.`,
    })

    return NextResponse.json({ response: text })
  } catch (error) {
    console.error("Chat API error:", error)
    return NextResponse.json(
      {
        response: "I apologize, but I'm experiencing technical difficulties. Please try again or contact us directly.",
      },
      { status: 500 },
    )
  }
}
