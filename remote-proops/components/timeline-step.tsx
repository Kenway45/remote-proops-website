"use client"

import { useEffect, useRef, useState } from "react"

interface TimelineStepProps {
  step: number
  title: string
  description: string
  isLast?: boolean
}

export default function TimelineStep({ step, title, description, isLast = false }: TimelineStepProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.5 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} className="relative flex items-center">
      {/* Step Circle */}
      <div
        className={`relative z-10 w-16 h-16 rounded-full border-2 flex items-center justify-center font-mono font-bold text-lg transition-all duration-1000 ${
          isVisible
            ? "border-[#64FFDA] bg-[#64FFDA] text-[#0A192F] glow-cyan"
            : "border-[#8892B0] bg-[#0A192F] text-[#8892B0]"
        }`}
      >
        {step}
      </div>

      {/* Connecting Line */}
      {!isLast && (
        <div
          className="absolute left-8 top-16 w-px h-24 bg-gradient-to-b from-[#64FFDA] to-transparent opacity-0 animate-fade-in-up"
          style={{
            animationDelay: isVisible ? "0.5s" : "0s",
            animationFillMode: "both",
            opacity: isVisible ? 1 : 0,
          }}
        />
      )}

      {/* Content */}
      <div
        className={`ml-8 transition-all duration-1000 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}
      >
        <h3 className="text-xl font-mono font-bold text-[#64FFDA] mb-2">{title}</h3>
        <p className="text-[#8892B0] max-w-md">{description}</p>
      </div>
    </div>
  )
}
