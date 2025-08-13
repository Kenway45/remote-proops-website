"use client"

import { useState } from "react"

interface PricingCardProps {
  title: string
  price: string
  description: string
  features: string[]
  isPopular?: boolean
}

export default function PricingCard({ title, price, description, features, isPopular = false }: PricingCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className={`relative p-8 rounded-lg border transition-all duration-300 transform ${
        isPopular ? "border-[#64FFDA] bg-[#64FFDA]/5 scale-105" : "border-[#64FFDA]/20 bg-[#0B0B0E]/50"
      } ${isHovered ? "scale-110 glow-cyan" : ""}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isPopular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="bg-[#64FFDA] text-[#0A192F] px-4 py-1 rounded-full text-sm font-mono font-bold">
            MOST POPULAR
          </span>
        </div>
      )}

      <div className="text-center mb-8">
        <h3 className="text-2xl font-mono font-bold text-[#64FFDA] mb-2">{title}</h3>
        <div className="text-4xl font-mono font-bold text-[#CCD6F6] mb-2">{price}</div>
        <p className="text-[#8892B0]">{description}</p>
      </div>

      <ul className="space-y-4 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="text-[#CCD6F6] flex items-center">
            <span className="w-2 h-2 bg-[#64FFDA] rounded-full mr-3 flex-shrink-0"></span>
            {feature}
          </li>
        ))}
      </ul>

      <button
        className={`w-full py-3 rounded-lg font-mono font-bold transition-all duration-300 ${
          isPopular
            ? "bg-[#64FFDA] text-[#0A192F] hover:bg-[#00A3FF]"
            : "border border-[#64FFDA] text-[#64FFDA] hover:bg-[#64FFDA] hover:text-[#0A192F]"
        }`}
      >
        Get Started
      </button>
    </div>
  )
}
