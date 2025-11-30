"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import { MapPin, Clock, Heart, Share2, ChevronRight } from "lucide-react"
import { useState } from "react"

export default function DetailsPage({ params }: { params: { id: string } }) {
  const [activeTab, setActiveTab] = useState("informacion")
  const [isFavorite, setIsFavorite] = useState(false)

  // Mock data - in a real app, this would come from an API based on params.id
  const business = {
    id: params.id,
    name: "Sabor Andino",
    category: "Restaurante",
    description:
      "Disfruta de auténtica gastronomía peruana en un ambiente acogedor con decoración tradicional. Nuestro menú está inspirado en las tradiciones culinarias de los Andes peruanos, utilizando ingredientes frescos y técnicas ancestrales. Cada plato es una experiencia única que te transportará a través de los sabores del Perú.",
    tags: ["Restaurante", "Huérfano"],
    location: "1.2 km",
    status: "Abierto ahora",
    images: [
      "/peruvian-restaurant-main.jpg",
      "/peruvian-dish.jpg",
      "/peruvian-cuisine.jpg",
      "/andean-food.jpg",
    ],
  }

  const tabs = [
    { id: "informacion", label: "Información" },
    { id: "menu", label: "Menú" },
    { id: "resenas", label: "Reseñas" },
    { id: "mapa", label: "Mapa" },
    { id: "atributos", label: "Atributos" },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
          <a href="/" className="hover:text-foreground transition-colors">
            Inicio
          </a>
          <ChevronRight className="w-4 h-4" />
          <span>{business.category}</span>
          <ChevronRight className="w-4 h-4" />
          <span className="text-foreground">{business.name}</span>
        </div>

        {/* Title and Actions */}
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-4xl font-bold text-foreground">{business.name}</h1>
          <div className="flex gap-3">
            <button
              onClick={() => setIsFavorite(!isFavorite)}
              className="p-3 rounded-lg border border-border hover:bg-secondary transition-colors"
            >
              <Heart className={`w-6 h-6 ${isFavorite ? "fill-primary text-primary" : "text-foreground"}`} />
            </button>
            <button className="p-3 rounded-lg border border-border hover:bg-secondary transition-colors">
              <Share2 className="w-6 h-6 text-foreground" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Images */}
          <div className="lg:col-span-2">
            {/* Main Image */}
            <div className="mb-4 rounded-xl overflow-hidden bg-secondary h-96">
              <img
                src={business.images[0] || "/placeholder.svg"}
                alt={business.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Thumbnail Images */}
            <div className="grid grid-cols-3 gap-4">
              {business.images.slice(1).map((image, index) => (
                <div
                  key={index}
                  className="rounded-lg overflow-hidden bg-secondary aspect-square cursor-pointer hover:opacity-80 transition-opacity"
                >
                  <img
                    src={image || "/placeholder.svg"}
                    alt={`Gallery ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Info */}
          <div className="lg:col-span-1">
            {/* Tabs */}
            <div className="border-b border-border mb-6">
              <div className="flex gap-4 overflow-x-auto">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`pb-3 px-2 text-sm font-medium whitespace-nowrap border-b-2 transition-colors ${
                      activeTab === tab.id
                        ? "border-primary text-primary"
                        : "border-transparent text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Tab Content */}
            <div className="space-y-6">
              {activeTab === "informacion" && (
                <>
                  <div>
                    <p className="text-sm text-foreground leading-relaxed">{business.description}</p>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {business.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-secondary text-secondary-foreground text-xs font-medium rounded-full border border-border"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Info Box */}
                  <div className="space-y-3 pt-4 border-t border-border">
                    <div className="flex items-center gap-3">
                      <MapPin className="w-5 h-5 text-primary" />
                      <span className="text-sm text-foreground">{business.location}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock className="w-5 h-5 text-primary" />
                      <span className="text-sm text-foreground">{business.status}</span>
                    </div>
                  </div>
                </>
              )}

              {activeTab === "menu" && (
                <div className="text-center py-8 text-muted-foreground">
                  <p>Menú disponible pronto</p>
                </div>
              )}

              {activeTab === "resenas" && (
                <div className="text-center py-8 text-muted-foreground">
                  <p>Reseñas disponibles pronto</p>
                </div>
              )}

              {activeTab === "mapa" && (
                <div className="text-center py-8 text-muted-foreground">
                  <p>Mapa disponible pronto</p>
                </div>
              )}

              {activeTab === "atributos" && (
                <div className="text-center py-8 text-muted-foreground">
                  <p>Atributos disponibles pronto</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
