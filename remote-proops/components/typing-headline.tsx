"use client"

import { useEffect, useState } from "react"

interface TypingHeadlineProps {
  text: string
  className?: string
}

export default function TypingHeadline({ text, className = "" }: TypingHeadlineProps) {
  const [displayText, setDisplayText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [showCursor, setShowCursor] = useState(true)

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(text.slice(0, currentIndex + 1))
        setCurrentIndex(currentIndex + 1)
      }, 100)
      return () => clearTimeout(timeout)
    }
  }, [currentIndex, text])

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 500)
    return () => clearInterval(cursorInterval)
  }, [])

  return (
    <h1 className={className}>
      {displayText}
      <span className={`inline-block w-1 bg-[#64FFDA] ml-1 ${showCursor ? "opacity-100" : "opacity-0"}`}>|</span>
    </h1>
  )
}
