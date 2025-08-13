"use client"

import { useState, useEffect, useRef } from "react"

interface ChatMessage {
  type: "bot" | "user"
  content: string
  options?: string[]
}

interface AIChatbotProps {
  isOpen: boolean
  onClose: () => void
}

export default function AIChatbot({ isOpen, onClose }: AIChatbotProps) {
  const [messages, setMessages] = useState<ChatMessage[]>([])
  const [currentInput, setCurrentInput] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const [isAuditMode, setIsAuditMode] = useState(true)
  const [currentStep, setCurrentStep] = useState(0)
  const [userAnswers, setUserAnswers] = useState<string[]>([])
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const questions = [
    {
      question:
        "Welcome to Remote ProOps! To begin your audit, what is the biggest operational challenge in your business right now?",
      options: [
        "Too much time on admin tasks",
        "Poor customer response times",
        "Disorganized processes",
        "Scaling team operations",
      ],
    },
    {
      question: "About how many hours a week do you spend on administrative tasks?",
      options: ["Less than 10 hours", "10-20 hours", "20-30 hours", "More than 30 hours"],
    },
    {
      question: "Which of these areas needs the most urgent attention?",
      options: ["Customer Support", "CRM Management", "Hiring Support", "Content Creation"],
    },
  ]

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setTimeout(() => {
        addBotMessage(questions[0].question, questions[0].options)
      }, 500)
    }
  }, [isOpen])

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  const addBotMessage = (content: string, options?: string[]) => {
    setIsTyping(true)
    setTimeout(() => {
      setMessages((prev) => [...prev, { type: "bot", content, options }])
      setIsTyping(false)
    }, 1000)
  }

  const addUserMessage = (content: string) => {
    setMessages((prev) => [...prev, { type: "user", content }])
  }

  const handleSendMessage = async () => {
    if (!currentInput.trim()) return

    const userMessage = currentInput.trim()
    setCurrentInput("")
    addUserMessage(userMessage)
    setIsTyping(true)

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: userMessage,
          context: `User has completed audit. Previous answers: ${userAnswers.join(", ")}`,
        }),
      })

      const data = await response.json()

      setTimeout(() => {
        addBotMessage(data.response)
      }, 1000)
    } catch (error) {
      setTimeout(() => {
        addBotMessage(
          "I apologize, but I'm experiencing technical difficulties. Please try again or contact us directly.",
        )
      }, 1000)
    }
  }

  const handleOptionClick = (option: string) => {
    addUserMessage(option)
    const newAnswers = [...userAnswers, option]
    setUserAnswers(newAnswers)

    if (currentStep < questions.length - 1) {
      setTimeout(() => {
        const nextStep = currentStep + 1
        setCurrentStep(nextStep)
        addBotMessage(questions[nextStep].question, questions[nextStep].options)
      }, 1500)
    } else {
      setTimeout(() => {
        generateRecommendation(newAnswers)
        setIsAuditMode(false) // Switch to free chat mode after audit
      }, 1500)
    }
  }

  const generateRecommendation = (answers: string[]) => {
    let recommendation = ""
    let packageSuggestion = ""

    if (answers[1].includes("More than 30") || answers[1].includes("20-30")) {
      packageSuggestion = "Growth Package"
      recommendation = `Based on your responses, our ${packageSuggestion} could save you over 15 hours per week. With your focus on ${answers[0].toLowerCase()} and ${answers[2].toLowerCase()}, we'd assign a dedicated VA plus a specialist to handle these areas.`
    } else if (answers[1].includes("10-20")) {
      packageSuggestion = "Starter Package"
      recommendation = `Our ${packageSuggestion} would be perfect for your current needs. We can help streamline your ${answers[2].toLowerCase()} processes and reduce your administrative burden significantly.`
    } else {
      packageSuggestion = "Custom Solution"
      recommendation = `Given your specific situation with ${answers[0].toLowerCase()}, we'd recommend a ${packageSuggestion} tailored to your ${answers[2].toLowerCase()} needs.`
    }

    addBotMessage(recommendation)

    setTimeout(() => {
      addBotMessage(
        "Would you like to book a 15-minute call with a human Ops Strategist to build a detailed plan, or do you have any other questions I can help with?",
        ["Yes, book a call", "I have more questions", "Send me more information"],
      )
    }, 2000)
  }

  const handleFinalAction = (action: string) => {
    addUserMessage(action)

    if (action === "Yes, book a call") {
      setTimeout(() => {
        addBotMessage("Perfect! I'm redirecting you to our calendar to schedule your free consultation.")
        setTimeout(() => {
          window.open("https://calendly.com", "_blank")
        }, 2000)
      }, 1000)
    } else if (action === "I have more questions") {
      setTimeout(() => {
        addBotMessage(
          "Great! I'm here to help. Feel free to ask me anything about Remote ProOps, our services, or how we can help your business.",
        )
      }, 1000)
    } else if (action === "Send me more information") {
      setTimeout(() => {
        addBotMessage("I'll send you a detailed proposal via email. Please check your inbox in the next few minutes.")
      }, 1000)
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/20 backdrop-blur-md flex items-center justify-center p-4">
      <div className="w-full max-w-2xl h-[80vh] glass-card-enhanced flex flex-col overflow-hidden animate-slide-up">
        {/* Header */}
        <div className="p-6 border-b border-slate-200/20 flex justify-between items-center bg-gradient-to-r from-blue-50/50 to-purple-50/50">
          <div>
            <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {isAuditMode ? "AI Ops Audit" : "AI Assistant"}
            </h2>
            <p className="text-slate-600 text-sm">Powered by Remote ProOps Intelligence</p>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-slate-600 transition-colors text-2xl hover:rotate-90"
          >
            ×
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-gradient-to-b from-slate-50/30 to-blue-50/30">
          {messages.map((message, index) => (
            <div key={index} className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}>
              <div
                className={`max-w-[80%] p-4 rounded-2xl animate-slide-up ${
                  message.type === "user"
                    ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg"
                    : "bg-white/90 backdrop-blur-sm text-slate-700 border border-slate-200/50 shadow-md"
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <p className="whitespace-pre-wrap leading-relaxed">{message.content}</p>

                {message.options && (
                  <div className="mt-4 space-y-2">
                    {message.options.map((option, optionIndex) => (
                      <button
                        key={optionIndex}
                        onClick={() => {
                          if (isAuditMode && currentStep < questions.length) {
                            handleOptionClick(option)
                          } else {
                            handleFinalAction(option)
                          }
                        }}
                        className="block w-full text-left p-3 border border-slate-300/50 rounded-xl hover:border-blue-400 hover:bg-blue-50/50 transition-all duration-200 text-slate-700 hover:text-blue-600 hover:scale-105 ripple"
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}

          {isTyping && (
            <div className="flex justify-start">
              <div className="bg-white/90 backdrop-blur-sm text-slate-700 border border-slate-200/50 p-4 rounded-2xl shadow-md">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"></div>
                  <div
                    className="w-2 h-2 bg-purple-500 rounded-full animate-bounce"
                    style={{ animationDelay: "0.1s" }}
                  ></div>
                  <div
                    className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"
                    style={{ animationDelay: "0.2s" }}
                  ></div>
                </div>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Input Area - Show after audit is complete */}
        {!isAuditMode && (
          <div className="p-4 border-t border-slate-200/20 bg-gradient-to-r from-blue-50/30 to-purple-50/30">
            <div className="flex gap-3">
              <input
                type="text"
                value={currentInput}
                onChange={(e) => setCurrentInput(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                placeholder="Ask me anything about Remote ProOps..."
                className="flex-1 px-4 py-3 border border-slate-300/50 rounded-xl focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 outline-none transition-all duration-200 bg-white/80 backdrop-blur-sm"
                disabled={isTyping}
              />
              <button
                onClick={handleSendMessage}
                disabled={isTyping || !currentInput.trim()}
                className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl hover:scale-105 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed ripple"
              >
                Send
              </button>
            </div>
          </div>
        )}

        {/* Footer */}
        <div className="p-4 border-t border-slate-200/20 text-center bg-gradient-to-r from-blue-50/30 to-purple-50/30">
          <p className="text-slate-500 text-sm flex items-center justify-center gap-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
              />
            </svg>
            Your information is secure and confidential
          </p>
        </div>
      </div>
    </div>
  )
}
