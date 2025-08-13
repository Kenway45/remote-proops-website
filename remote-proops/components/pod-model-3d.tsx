"use client"

import { useEffect, useRef, useState } from "react"

export default function PodModel3D() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect()
        const centerX = rect.left + rect.width / 2
        const centerY = rect.top + rect.height / 2

        setMousePosition({
          x: (e.clientX - centerX) / rect.width,
          y: (e.clientY - centerY) / rect.height,
        })
      }
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <div
      ref={containerRef}
      className="relative w-96 h-96 mx-auto"
      style={{
        transform: `perspective(1000px) rotateX(${mousePosition.y * 10}deg) rotateY(${mousePosition.x * 10}deg)`,
        transition: "transform 0.1s ease-out",
      }}
    >
      {/* Central Client Orb */}
      <div
        className="absolute top-1/2 left-1/2 w-20 h-20 rounded-full bg-gradient-to-br from-[#64FFDA] to-[#00A3FF] transform -translate-x-1/2 -translate-y-1/2 animate-pulse-glow"
        style={{
          boxShadow: "0 0 40px rgba(100, 255, 218, 0.6), inset 0 0 20px rgba(0, 163, 255, 0.3)",
        }}
      >
        <div className="absolute inset-2 rounded-full bg-gradient-to-br from-[#00A3FF]/30 to-transparent" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[#0A192F] font-mono text-xs font-bold">
          CLIENT
        </div>
      </div>

      {/* Orbiting VA Sphere */}
      <div
        className="absolute top-1/2 left-1/2 w-12 h-12 animate-spin"
        style={{
          animation: "spin 20s linear infinite",
          transformOrigin: "50% 50%",
        }}
      >
        <div
          className="absolute w-12 h-12 rounded-full bg-gradient-to-br from-[#64FFDA]/80 to-[#00A3FF]/60 glow-cyan"
          style={{
            transform: "translateX(-120px) translateY(-60px)",
            boxShadow: "0 0 20px rgba(100, 255, 218, 0.4)",
          }}
        >
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[#0A192F] font-mono text-xs font-bold">
            VA
          </div>
        </div>
        {/* Connection Line */}
        <div
          className="absolute top-1/2 left-1/2 h-px bg-gradient-to-r from-[#64FFDA] to-transparent opacity-60"
          style={{
            width: "120px",
            transform: "translateX(-120px) translateY(-60px) rotate(26.57deg)",
            transformOrigin: "right center",
          }}
        />
      </div>

      {/* Orbiting Ops Lead Sphere */}
      <div
        className="absolute top-1/2 left-1/2 w-12 h-12"
        style={{
          animation: "spin 25s linear infinite reverse",
          transformOrigin: "50% 50%",
        }}
      >
        <div
          className="absolute w-12 h-12 rounded-full bg-gradient-to-br from-[#64FFDA]/80 to-[#00A3FF]/60 glow-cyan"
          style={{
            transform: "translateX(100px) translateY(-80px)",
            boxShadow: "0 0 20px rgba(100, 255, 218, 0.4)",
          }}
        >
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[#0A192F] font-mono text-xs font-bold">
            OPS
          </div>
        </div>
        {/* Connection Line */}
        <div
          className="absolute top-1/2 left-1/2 h-px bg-gradient-to-r from-[#64FFDA] to-transparent opacity-60"
          style={{
            width: "128px",
            transform: "translateX(0px) translateY(-80px) rotate(-38.66deg)",
            transformOrigin: "left center",
          }}
        />
      </div>

      {/* Orbiting Specialist Sphere */}
      <div
        className="absolute top-1/2 left-1/2 w-12 h-12"
        style={{
          animation: "spin 30s linear infinite",
          transformOrigin: "50% 50%",
        }}
      >
        <div
          className="absolute w-12 h-12 rounded-full bg-gradient-to-br from-[#64FFDA]/80 to-[#00A3FF]/60 glow-cyan"
          style={{
            transform: "translateX(-80px) translateY(100px)",
            boxShadow: "0 0 20px rgba(100, 255, 218, 0.4)",
          }}
        >
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[#0A192F] font-mono text-xs font-bold">
            SPEC
          </div>
        </div>
        {/* Connection Line */}
        <div
          className="absolute top-1/2 left-1/2 h-px bg-gradient-to-r from-[#64FFDA] to-transparent opacity-60"
          style={{
            width: "128px",
            transform: "translateX(-80px) translateY(100px) rotate(128.66deg)",
            transformOrigin: "right center",
          }}
        />
      </div>

      {/* Orbital Rings */}
      <div
        className="absolute top-1/2 left-1/2 w-80 h-80 border border-[#64FFDA]/20 rounded-full transform -translate-x-1/2 -translate-y-1/2 animate-spin"
        style={{ animation: "spin 60s linear infinite" }}
      />
      <div
        className="absolute top-1/2 left-1/2 w-64 h-64 border border-[#00A3FF]/15 rounded-full transform -translate-x-1/2 -translate-y-1/2 animate-spin"
        style={{ animation: "spin 45s linear infinite reverse" }}
      />
    </div>
  )
}
