"use client"

import Link from "next/link"
import Navigation from "@/components/navigation"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      <section className="pt-16 min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Enhanced animated background elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full mix-blend-multiply filter blur-xl animate-float"></div>
          <div
            className="absolute top-40 right-10 w-96 h-96 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mix-blend-multiply filter blur-xl animate-float"
            style={{ animationDelay: "2s" }}
          ></div>
          <div
            className="absolute bottom-20 left-1/2 w-96 h-96 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full mix-blend-multiply filter blur-xl animate-float"
            style={{ animationDelay: "4s" }}
          ></div>
        </div>

        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-blue-400 rounded-full opacity-30 animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 text-center max-w-6xl mx-auto px-4">
          <div className="animate-slide-up">
            <div className="mb-8">
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-4 relative">
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent animate-gradient-x">
                  Remote ProOps
                </span>
              </h1>
            </div>

            <div className="relative mb-8">
              <p className="text-2xl md:text-4xl text-slate-600 mb-4 font-light tracking-wide">
                The Digital Operations Core
              </p>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full animate-pulse-glow"></div>
            </div>

            <p className="text-xl md:text-2xl text-slate-500 mb-12 max-w-4xl mx-auto leading-relaxed">
              Transform your startup operations with AI-powered remote teams. We handle the complexity, you focus on
              growth.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link
                href="/contact"
                className="btn-primary text-white px-10 py-5 rounded-3xl text-xl font-bold animate-pulse-glow hover:scale-105 transition-all duration-300 shadow-2xl"
              >
                Start Your Free Audit
              </Link>
              <Link
                href="/services"
                className="glass-effect border-2 border-blue-600 text-blue-600 px-10 py-5 rounded-3xl text-xl font-bold hover:bg-blue-600 hover:text-white transition-all duration-300 hover:scale-105 shadow-xl"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-gradient mb-6 animate-slide-up">
              Why Choose Remote ProOps?
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We deliver comprehensive remote operations solutions that scale with your business
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass-effect p-8 rounded-3xl card-hover group">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl flex items-center justify-center mb-6 animate-pulse-glow group-hover:scale-110 transition-all duration-300">
                <div className="w-10 h-10 bg-white rounded-2xl"></div>
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">POD Model</h3>
              <p className="text-slate-600 leading-relaxed">
                Dedicated teams that work as extensions of your business, not just freelancers. Complete accountability
                and seamless integration.
              </p>
            </div>

            <div className="glass-effect p-8 rounded-3xl card-hover group">
              <div
                className="w-20 h-20 bg-gradient-to-br from-purple-500 to-cyan-600 rounded-3xl flex items-center justify-center mb-6 animate-pulse-glow group-hover:scale-110 transition-all duration-300"
                style={{ animationDelay: "0.5s" }}
              >
                <div className="w-10 h-10 bg-white rounded-2xl"></div>
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">AI-Powered Automation</h3>
              <p className="text-slate-600 leading-relaxed">
                Smart workflows and process automation that eliminate repetitive tasks and ensure consistent,
                high-quality results.
              </p>
            </div>

            <div className="glass-effect p-8 rounded-3xl card-hover group">
              <div
                className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-3xl flex items-center justify-center mb-6 animate-pulse-glow group-hover:scale-110 transition-all duration-300"
                style={{ animationDelay: "1s" }}
              >
                <div className="w-10 h-10 bg-white rounded-2xl"></div>
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Fully Managed</h3>
              <p className="text-slate-600 leading-relaxed">
                Complete operations management with dedicated leads handling performance, quality, and delivery while
                you focus on growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">Ready to Transform Your Operations?</h2>
          <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
            Join hundreds of startups that have streamlined their operations and accelerated growth with Remote ProOps.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/consultation" className="btn-primary text-white px-8 py-4 rounded-3xl text-lg font-semibold">
              Schedule Free Consultation
            </Link>
            <Link
              href="/about"
              className="border-2 border-slate-300 text-slate-700 px-8 py-4 rounded-3xl text-lg font-semibold hover:border-blue-600 hover:text-blue-600 transition-all duration-300"
            >
              Learn More About Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
