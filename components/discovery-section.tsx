"use client"

import { useState, useRef } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import DiscoveryCard from "./discovery-card"

interface DiscoverySectionProps {
  title: string
  icon?: string
  id: string
}

export default function DiscoverySection({ title, icon, id }: DiscoverySectionProps) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 400
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      })
      setTimeout(checkScroll, 500)
    }
  }

  const checkScroll = () => {
    if (scrollRef.current) {
      setCanScrollLeft(scrollRef.current.scrollLeft > 0)
      setCanScrollRight(
        scrollRef.current.scrollLeft < scrollRef.current.scrollWidth - scrollRef.current.clientWidth - 10,
      )
    }
  }

  return (
    <section id={id} className="w-full">
      <div className="flex items-center gap-3 mb-6">
        {icon && <span className="text-2xl">{icon}</span>}
        <h2 className="text-2xl md:text-3xl font-bold text-foreground">{title}</h2>
      </div>

      <div className="relative">
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto scroll-smooth pb-4 hide-scrollbar"
          onScroll={checkScroll}
        >
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <DiscoveryCard key={item} index={item} />
          ))}
        </div>

        {/* Navigation Buttons */}
        {canScrollLeft && (
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 p-2 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-colors shadow-md"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
        )}
        {canScrollRight && (
          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 p-2 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-colors shadow-md"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        )}
      </div>

      <style>{`
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  )
}
