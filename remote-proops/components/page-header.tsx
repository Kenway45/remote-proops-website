"use client"

import Image from "next/image"
import Link from "next/link"

interface PageHeaderProps {
  onChatbotOpen?: () => void
}

export default function PageHeader({ onChatbotOpen }: PageHeaderProps) {
  return (
    <nav className="fixed top-0 w-full z-50 bg-[#0A192F]/80 backdrop-blur-md border-b border-[#64FFDA]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/">
              <Image src="/logo.png" alt="Remote ProOps Logo" width={150} height={40} className="h-8 w-auto" />
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link href="/#services" className="text-[#CCD6F6] hover:text-[#64FFDA] transition-colors font-mono">
                Services
              </Link>
              <Link href="/about" className="text-[#CCD6F6] hover:text-[#64FFDA] transition-colors font-mono">
                About
              </Link>
              <Link href="/#pricing" className="text-[#CCD6F6] hover:text-[#64FFDA] transition-colors font-mono">
                Pricing
              </Link>
              <Link href="/contact" className="text-[#CCD6F6] hover:text-[#64FFDA] transition-colors font-mono">
                Contact
              </Link>
              <button
                onClick={onChatbotOpen}
                className="bg-[#64FFDA] text-[#0A192F] px-6 py-2 rounded-md font-mono font-bold hover:bg-[#00A3FF] transition-colors glow-cyan"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
