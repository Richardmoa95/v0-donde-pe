"use client"

import { MapPin, Heart, Clock } from "lucide-react"
import Link from "next/link"

interface DiscoveryCardProps {
  index: number
}

export default function DiscoveryCard({ index }: DiscoveryCardProps) {
  const categories = [
    "La Huerta Orgánica",
    "Sabor Andino",
    "Café del Mundo",
    "Marina Fresca",
    "Dulces Momentos",
    "Tradición Peruana",
  ]

  const tags = ["Sabores", "Restaurante", "Ambiente", "Música"]

  const businessId = `${categories[index % categories.length].toLowerCase().replace(/\s+/g, "-")}-${index}`

  return (
    <Link href={`/details/${businessId}`}>
      <div className="flex-shrink-0 w-full sm:w-96 group cursor-pointer">
        <div className="rounded-xl overflow-hidden bg-card shadow-md hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
          {/* Image Placeholder */}
          <div className="relative w-full aspect-video bg-gradient-to-br from-secondary to-primary/20 overflow-hidden">
            <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 400 300">
              <line
                x1="0"
                y1="0"
                x2="400"
                y2="300"
                stroke="currentColor"
                strokeWidth="1"
                opacity="0.2"
                className="text-foreground"
              />
              <line
                x1="400"
                y1="0"
                x2="0"
                y2="300"
                stroke="currentColor"
                strokeWidth="1"
                opacity="0.2"
                className="text-foreground"
              />
              <line
                x1="0"
                y1="100"
                x2="400"
                y2="400"
                stroke="currentColor"
                strokeWidth="1"
                opacity="0.2"
                className="text-foreground"
              />
              <line
                x1="400"
                y1="100"
                x2="0"
                y2="400"
                stroke="currentColor"
                strokeWidth="1"
                opacity="0.2"
                className="text-foreground"
              />
            </svg>

            {/* Category Badge */}
            <div className="absolute top-3 right-3 bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-semibold">
              Restaurante
            </div>

            {/* Like Button */}
            <button className="absolute bottom-3 right-3 p-2 bg-background/80 backdrop-blur rounded-full hover:bg-primary hover:text-primary-foreground transition-all">
              <Heart className="w-5 h-5" />
            </button>
          </div>

          {/* Content */}
          <div className="flex-1 p-4 flex flex-col">
            <h3 className="font-semibold text-lg text-foreground mb-2 line-clamp-2">
              {categories[index % categories.length]}
            </h3>

            <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
              Disfruta de auténtica gastronomía peruana en un ambiente acogedor con decoración tradicional.
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-3">
              {tags.slice(0, 2).map((tag, i) => (
                <span key={i} className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded-md">
                  {tag}
                </span>
              ))}
            </div>

            {/* Footer Info */}
            <div className="flex items-center justify-between mt-auto text-xs text-muted-foreground">
              <div className="flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                <span>1.2 km</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span>Abierto ahora</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}
