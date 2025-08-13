"use client"

import { useState } from "react"

interface ServiceCardProps {
  title: string
  description: string
  icon: string
  features: string[]
}

export default function ServiceCard({ title, description, icon, features }: ServiceCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className={`relative p-6 rounded-lg border border-[#64FFDA]/20 bg-[#0B0B0E]/50 backdrop-blur-sm transition-all duration-300 transform ${
        isHovered ? "scale-105 border-[#64FFDA] glow-cyan" : "hover:border-[#64FFDA]/40"
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-mono font-bold text-[#64FFDA] mb-3">{title}</h3>
      <p className="text-[#8892B0] mb-4">{description}</p>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="text-sm text-[#CCD6F6] flex items-center">
            <span className="w-2 h-2 bg-[#64FFDA] rounded-full mr-3 flex-shrink-0"></span>
            {feature}
          </li>
        ))}
      </ul>
    </div>
  )
}
