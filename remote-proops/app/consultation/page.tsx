"use client"

import type React from "react"
import { useState, useEffect } from "react"
import Navigation from "@/components/navigation"

export default function ConsultationPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    businessType: "",
    teamSize: "",
    currentChallenges: "",
    budget: "",
    timeline: "",
    preferredDate: "",
    preferredTime: "",
    additionalInfo: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [showCalendly, setShowCalendly] = useState(false)

  useEffect(() => {
    const calendlyScript = document.createElement("script")
    calendlyScript.src = "https://assets.calendly.com/assets/external/widget.js"
    calendlyScript.async = true
    document.body.appendChild(calendlyScript)

    return () => {
      if (document.body.contains(calendlyScript)) {
        document.body.removeChild(calendlyScript)
      }
    }
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    setTimeout(() => {
      setSubmitted(true)
      setTimeout(() => setShowCalendly(true), 2000)
      setIsSubmitting(false)
    }, 1000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  if (submitted) {
    return (
      <div className="min-h-screen">
        <Navigation />
        <div className="pt-24 pb-16 px-4 flex items-center justify-center min-h-screen">
          <div className="subtle-card p-12 rounded-3xl text-center max-w-4xl animate-slide-up">
            {!showCalendly ? (
              <>
                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse-glow">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h1 className="text-4xl font-bold text-gradient mb-4">Requirements Submitted!</h1>
                <p className="text-xl text-slate-600 mb-4">Thank you! We've received your consultation request.</p>
                <p className="text-lg text-slate-500 mb-8">Now let's schedule your consultation call...</p>
              </>
            ) : (
              <>
                <h1 className="text-4xl font-bold text-gradient mb-6">Schedule Your Consultation</h1>
                <div
                  className="calendly-inline-widget rounded-3xl overflow-hidden shadow-2xl border border-slate-200"
                  data-url="https://calendly.com/remoteproops/consultation"
                  data-text-color="1e293b"
                  data-primary-color="667eea"
                  data-background-color="ffffff"
                  style={{
                    minWidth: "320px",
                    height: "700px",
                    filter: "drop-shadow(0 25px 25px rgb(0 0 0 / 0.15))",
                  }}
                ></div>
                <p className="text-sm text-slate-500 mt-4 mb-6">
                  Select a time that works best for you. You'll receive a confirmation email with meeting details.
                </p>
                <button
                  onClick={() => (window.location.href = "/")}
                  className="btn-primary text-white px-8 py-4 rounded-3xl text-lg font-semibold ripple mt-6"
                >
                  Return Home
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gradient mb-6 animate-slide-up">Book Your Consultation</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Let's discuss your business needs and create a customized solution that drives growth and efficiency.
          </p>
        </div>
      </section>

      {/* Consultation Form */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <form onSubmit={handleSubmit} className="subtle-card p-8 rounded-3xl">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Basic Information */}
              <div className="md:col-span-2">
                <h3 className="text-2xl font-bold text-slate-800 mb-6 text-center">Basic Information</h3>
              </div>

              <div className="input-group">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="floating-input rounded-3xl"
                  placeholder=" "
                />
                <label className="floating-label">Full Name *</label>
              </div>

              <div className="input-group">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="floating-input rounded-3xl"
                  placeholder=" "
                />
                <label className="floating-label">Email Address *</label>
              </div>

              <div className="input-group">
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="floating-input rounded-3xl"
                  placeholder=" "
                />
                <label className="floating-label">Company Name</label>
              </div>

              <div className="input-group">
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="floating-input rounded-3xl"
                  placeholder=" "
                />
                <label className="floating-label">Phone Number</label>
              </div>

              {/* Business Details */}
              <div className="md:col-span-2 mt-8">
                <h3 className="text-2xl font-bold text-slate-800 mb-6 text-center">Business Details</h3>
              </div>

              <div className="input-group">
                <select
                  name="businessType"
                  value={formData.businessType}
                  onChange={handleChange}
                  className="floating-input rounded-3xl"
                  required
                >
                  <option value="">Select Business Type</option>
                  <option value="startup">Startup</option>
                  <option value="small-business">Small Business</option>
                  <option value="medium-business">Medium Business</option>
                  <option value="enterprise">Enterprise</option>
                  <option value="agency">Agency</option>
                  <option value="ecommerce">E-commerce</option>
                  <option value="saas">SaaS</option>
                  <option value="other">Other</option>
                </select>
                <label className="floating-label">Business Type *</label>
              </div>

              <div className="input-group">
                <select
                  name="teamSize"
                  value={formData.teamSize}
                  onChange={handleChange}
                  className="floating-input rounded-3xl"
                  required
                >
                  <option value="">Select Team Size</option>
                  <option value="1-5">1-5 employees</option>
                  <option value="6-20">6-20 employees</option>
                  <option value="21-50">21-50 employees</option>
                  <option value="51-100">51-100 employees</option>
                  <option value="100+">100+ employees</option>
                </select>
                <label className="floating-label">Team Size *</label>
              </div>

              <div className="md:col-span-2 input-group">
                <textarea
                  name="currentChallenges"
                  value={formData.currentChallenges}
                  onChange={handleChange}
                  rows={4}
                  className="floating-input rounded-3xl"
                  placeholder=" "
                  required
                />
                <label className="floating-label">Current Business Challenges *</label>
              </div>

              {/* Project Details */}
              <div className="md:col-span-2 mt-8">
                <h3 className="text-2xl font-bold text-slate-800 mb-6 text-center">Project Details</h3>
              </div>

              <div className="input-group">
                <select
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className="floating-input rounded-3xl"
                  required
                >
                  <option value="">Select Budget Range</option>
                  <option value="under-1000">Under $1,000/month</option>
                  <option value="1000-3000">$1,000 - $3,000/month</option>
                  <option value="3000-5000">$3,000 - $5,000/month</option>
                  <option value="5000-10000">$5,000 - $10,000/month</option>
                  <option value="10000+">$10,000+/month</option>
                </select>
                <label className="floating-label">Budget Range *</label>
              </div>

              <div className="input-group">
                <select
                  name="timeline"
                  value={formData.timeline}
                  onChange={handleChange}
                  className="floating-input rounded-3xl"
                  required
                >
                  <option value="">Select Timeline</option>
                  <option value="asap">ASAP</option>
                  <option value="1-month">Within 1 month</option>
                  <option value="2-3-months">2-3 months</option>
                  <option value="3-6-months">3-6 months</option>
                  <option value="6-months+">6+ months</option>
                </select>
                <label className="floating-label">Timeline *</label>
              </div>

              <div className="input-group">
                <input
                  type="date"
                  name="preferredDate"
                  value={formData.preferredDate}
                  onChange={handleChange}
                  className="floating-input rounded-3xl"
                  min={new Date().toISOString().split("T")[0]}
                />
                <label className="floating-label">Preferred Consultation Date</label>
              </div>

              <div className="input-group">
                <select
                  name="preferredTime"
                  value={formData.preferredTime}
                  onChange={handleChange}
                  className="floating-input rounded-3xl"
                >
                  <option value="">Select Preferred Time</option>
                  <option value="9am-12pm">9:00 AM - 12:00 PM</option>
                  <option value="12pm-3pm">12:00 PM - 3:00 PM</option>
                  <option value="3pm-6pm">3:00 PM - 6:00 PM</option>
                  <option value="6pm-9pm">6:00 PM - 9:00 PM</option>
                </select>
                <label className="floating-label">Preferred Time</label>
              </div>

              <div className="md:col-span-2 input-group">
                <textarea
                  name="additionalInfo"
                  value={formData.additionalInfo}
                  onChange={handleChange}
                  rows={4}
                  className="floating-input rounded-3xl"
                  placeholder=" "
                />
                <label className="floating-label">Additional Information</label>
              </div>
            </div>

            <div className="text-center mt-8">
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary text-white px-12 py-4 rounded-3xl text-lg font-semibold ripple disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Submitting...
                  </span>
                ) : (
                  "Submit Requirements & Schedule Call"
                )}
              </button>
              <p className="text-sm text-slate-500 mt-4">
                After submitting, you'll receive an email confirmation and can immediately schedule your consultation
                call.
              </p>
            </div>
          </form>
        </div>
      </section>
    </div>
  )
}
