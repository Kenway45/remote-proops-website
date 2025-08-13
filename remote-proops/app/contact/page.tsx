"use client"

import type React from "react"
import { useState } from "react"
import Navigation from "@/components/navigation"
import AIChatbot from "@/components/ai-chatbot"

export default function ContactPage() {
  const [isChatbotOpen, setIsChatbotOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success">("idle")

  const validateForm = () => {
    return (
      formData.name.trim() && formData.email.trim() && formData.message.trim() && /\S+@\S+\.\S+/.test(formData.email)
    )
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)

    setTimeout(() => {
      setSubmitStatus("success")
      setFormData({ name: "", email: "", company: "", message: "" })
      setIsSubmitting(false)
    }, 1000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navigation onChatbotOpen={() => setIsChatbotOpen(true)} />

      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6 animate-float">
            Get In Touch
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Ready to transform your operations? Let's discuss how Remote ProOps can help your business scale.
          </p>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            <div className="subtle-card p-8 text-center group hover:scale-105 transition-all duration-500">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full mx-auto mb-6 flex items-center justify-center group-hover:rotate-12 transition-transform duration-500">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">AI Ops Audit</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Get instant recommendations with our AI-powered audit tool.
              </p>
              <button onClick={() => setIsChatbotOpen(true)} className="btn-primary w-full">
                Start Audit
              </button>
            </div>

            <div className="subtle-card p-8 text-center group hover:scale-105 transition-all duration-500">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full mx-auto mb-6 flex items-center justify-center group-hover:rotate-12 transition-transform duration-500">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">Schedule a Call</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Book a 15-minute consultation with our operations experts.
              </p>
              <button onClick={() => window.open("https://calendly.com", "_blank")} className="btn-secondary w-full">
                Book Call
              </button>
            </div>

            <div className="subtle-card p-8 text-center group hover:scale-105 transition-all duration-500">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto mb-6 flex items-center justify-center group-hover:rotate-12 transition-transform duration-500">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">Send a Message</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Fill out the form below and we'll respond within 24 hours.
              </p>
              <button
                onClick={() => document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" })}
                className="btn-secondary w-full"
              >
                Send Message
              </button>
            </div>
          </div>

          <div className="max-w-2xl mx-auto">
            <div id="contact-form" className="glass-card p-8">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-8 text-center">
                Send Us a Message
              </h2>

              {submitStatus === "success" && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg text-green-800 animate-slide-up">
                  ✅ Thank you for your message! We'll get back to you within 24 hours.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="input-group">
                    <label htmlFor="name" className="input-label">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="input-field-enhanced"
                      placeholder="Your full name"
                      required
                    />
                  </div>

                  <div className="input-group">
                    <label htmlFor="email" className="input-label">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="input-field-enhanced"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>

                <div className="input-group">
                  <label htmlFor="company" className="input-label">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="input-field-enhanced"
                    placeholder="Your company name"
                  />
                </div>

                <div className="input-group">
                  <label htmlFor="message" className="input-label">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="input-field-enhanced resize-vertical"
                    placeholder="Tell us about your operational challenges and how we can help..."
                    required
                  />
                </div>

                <div className="text-center">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary-enhanced text-lg px-8 py-4 disabled:opacity-50 disabled:cursor-not-allowed ripple relative overflow-hidden"
                  >
                    <span className={isSubmitting ? "opacity-0" : "opacity-100"}>Send Message</span>
                    {isSubmitting && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span className="ml-2">Sending...</span>
                      </div>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-r from-blue-50/50 to-purple-50/50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-6">
            <div className="subtle-card p-6 hover:scale-105 transition-all duration-300">
              <h3 className="text-lg font-bold text-slate-800 mb-3">How quickly can you get started?</h3>
              <p className="text-slate-600 leading-relaxed">
                We can typically begin onboarding within 48 hours of signing up. Our team will schedule a discovery call
                to understand your needs and start building your custom operations plan.
              </p>
            </div>

            <div className="subtle-card p-6 hover:scale-105 transition-all duration-300">
              <h3 className="text-lg font-bold text-slate-800 mb-3">What if I need to scale up or down?</h3>
              <p className="text-slate-600 leading-relaxed">
                Our services are designed to be flexible. You can upgrade, downgrade, or modify your package with 30
                days' notice. We'll work with you to ensure smooth transitions.
              </p>
            </div>

            <div className="subtle-card p-6 hover:scale-105 transition-all duration-300">
              <h3 className="text-lg font-bold text-slate-800 mb-3">Do you work with specific industries?</h3>
              <p className="text-slate-600 leading-relaxed">
                We work with startups and growing businesses across all industries. Our team has experience in SaaS,
                e-commerce, consulting, healthcare, fintech, and many other sectors.
              </p>
            </div>

            <div className="subtle-card p-6 hover:scale-105 transition-all duration-300">
              <h3 className="text-lg font-bold text-slate-800 mb-3">How do you ensure data security?</h3>
              <p className="text-slate-600 leading-relaxed">
                We follow enterprise-grade security protocols, including encrypted communications, secure access
                controls, and regular security audits. All team members sign comprehensive NDAs.
              </p>
            </div>
          </div>
        </div>
      </section>

      <AIChatbot isOpen={isChatbotOpen} onClose={() => setIsChatbotOpen(false)} />
    </div>
  )
}
