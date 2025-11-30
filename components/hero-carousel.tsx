"use client"

import { useState, useEffect } from "react"

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0)

  const slides = [
    { id: 1, color: "from-primary to-accent" },
    { id: 2, color: "from-accent to-primary" },
    { id: 3, color: "from-purple-500 to-pink-500" },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative w-full h-96 md:h-[500px] overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20">
      {/* Carousel Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className={`w-full h-full bg-gradient-to-br ${slide.color} opacity-30`} />

          {/* Diagonal Lines Pattern */}
          <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 1200 400">
            <line x1="0" y1="0" x2="1200" y2="400" stroke="currentColor" strokeWidth="2" opacity="0.1" />
            <line x1="1200" y1="0" x2="0" y2="400" stroke="currentColor" strokeWidth="2" opacity="0.1" />
            <line x1="0" y1="100" x2="1200" y2="500" stroke="currentColor" strokeWidth="2" opacity="0.1" />
            <line x1="1200" y1="100" x2="0" y2="500" stroke="currentColor" strokeWidth="2" opacity="0.1" />
          </svg>
        </div>
      ))}

      {/* Navigation Dots */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === current ? "bg-primary w-8" : "bg-primary/50 hover:bg-primary/75"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
