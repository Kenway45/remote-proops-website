import type React from "react"
import type { Metadata } from "next"
import { VT323, Inter } from "next/font/google"
import "./globals.css"

const vt323 = VT323({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-vt323",
})

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "Remote ProOps - The Digital Ops Core",
  description:
    "Your Startup's Operations, Powered by AI. We build and manage your remote operations team, so you can focus on growth.",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${vt323.variable} ${inter.variable} antialiased`}>
      <body className="bg-gradient-to-br from-slate-50 to-blue-50 text-slate-800 font-sans">{children}</body>
    </html>
  )
}
