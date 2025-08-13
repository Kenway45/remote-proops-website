"use client"

import { useState } from "react"
import Navigation from "@/components/navigation"
import AIChatbot from "@/components/ai-chatbot"

export default function AboutPage() {
  const [isChatbotOpen, setIsChatbotOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navigation onChatbotOpen={() => setIsChatbotOpen(true)} />

      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6 animate-float">
            About Remote ProOps
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            We're the digital operations core that powers ambitious startups to scale without the operational overhead.
          </p>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Our Mission
              </h2>
              <p className="text-slate-700 text-lg leading-relaxed">
                Every startup founder should focus on what they do best - building great products and growing their
                business. Yet too many get bogged down in operational tasks that drain their time and energy.
              </p>
              <p className="text-slate-600 leading-relaxed">
                We exist to change that. Remote ProOps provides the operational backbone that lets founders focus on
                what matters most: innovation, strategy, and growth.
              </p>
            </div>
            <div className="relative">
              <div className="subtle-card p-8 text-center hover:scale-105 transition-all duration-500 group">
                <div className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">
                  500+
                </div>
                <div className="text-slate-600 font-medium">Hours Saved Monthly</div>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-r from-blue-50/50 to-purple-50/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
              The Team Behind the Magic
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Operations experts, automation specialists, and growth hackers working as your extended team.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="subtle-card p-8 text-center group hover:scale-105 transition-all duration-500">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full mx-auto mb-6 flex items-center justify-center group-hover:rotate-12 transition-transform duration-500">
                <span className="text-2xl font-bold text-white">OL</span>
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">Operations Leads</h3>
              <p className="text-slate-600 leading-relaxed">
                Senior professionals who manage your POD team and ensure consistent delivery of high-quality results.
              </p>
            </div>

            <div className="subtle-card p-8 text-center group hover:scale-105 transition-all duration-500">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full mx-auto mb-6 flex items-center justify-center group-hover:rotate-12 transition-transform duration-500">
                <span className="text-2xl font-bold text-white">VA</span>
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">Virtual Assistants</h3>
              <p className="text-slate-600 leading-relaxed">
                Skilled professionals who handle your daily administrative tasks with precision and attention to detail.
              </p>
            </div>

            <div className="subtle-card p-8 text-center group hover:scale-105 transition-all duration-500">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto mb-6 flex items-center justify-center group-hover:rotate-12 transition-transform duration-500">
                <span className="text-2xl font-bold text-white">SP</span>
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">Specialists</h3>
              <p className="text-slate-600 leading-relaxed">
                Domain experts in areas like CRM, content creation, financial management, and automation.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
              Our Core Values
            </h2>
          </div>

          <div className="space-y-12">
            <div className="flex items-start space-x-6 group">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0 mt-2 group-hover:scale-110 transition-transform duration-300">
                <span className="text-white font-bold text-lg">1</span>
              </div>
              <div className="subtle-card p-6 flex-1 group-hover:scale-105 transition-all duration-300">
                <h3 className="text-2xl font-bold text-slate-800 mb-3">Transparency First</h3>
                <p className="text-slate-600 leading-relaxed">
                  You always know what we're working on, how we're performing, and where your investment is going.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-6 group">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0 mt-2 group-hover:scale-110 transition-transform duration-300">
                <span className="text-white font-bold text-lg">2</span>
              </div>
              <div className="subtle-card p-6 flex-1 group-hover:scale-105 transition-all duration-300">
                <h3 className="text-2xl font-bold text-slate-800 mb-3">Quality Over Quantity</h3>
                <p className="text-slate-600 leading-relaxed">
                  We'd rather do fewer things exceptionally well than many things poorly. Every deliverable meets our
                  high standards.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-6 group">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0 mt-2 group-hover:scale-110 transition-transform duration-300">
                <span className="text-white font-bold text-lg">3</span>
              </div>
              <div className="subtle-card p-6 flex-1 group-hover:scale-105 transition-all duration-300">
                <h3 className="text-2xl font-bold text-slate-800 mb-3">Continuous Improvement</h3>
                <p className="text-slate-600 leading-relaxed">
                  We constantly optimize processes, adopt new tools, and refine our approach to deliver better results.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-r from-blue-600/5 to-purple-600/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Ready to Focus on What Matters?
          </h2>
          <p className="text-xl text-slate-600 mb-8">Let us handle your operations while you build the future.</p>
          <button onClick={() => setIsChatbotOpen(true)} className="btn-primary text-lg px-8 py-4">
            Start Your Free AI Ops Audit
          </button>
        </div>
      </section>

      <AIChatbot isOpen={isChatbotOpen} onClose={() => setIsChatbotOpen(false)} />
    </div>
  )
}
