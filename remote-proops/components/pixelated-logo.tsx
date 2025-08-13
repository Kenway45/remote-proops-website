"use client"

export default function PixelatedLogo({ className = "" }: { className?: string }) {
  return (
    <div className={`pixelated-logo ${className}`}>
      <div className="remote-text">
        <span className="pixel-letter">R</span>
        <span className="pixel-letter">E</span>
        <span className="pixel-letter">M</span>
        <span className="pixel-letter">O</span>
        <span className="pixel-letter">T</span>
        <span className="pixel-letter">E</span>
      </div>
      <div className="proops-text">ProOps</div>
    </div>
  )
}
