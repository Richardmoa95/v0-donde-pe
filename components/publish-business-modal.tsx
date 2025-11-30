"use client"

import { useState } from "react"
import { X } from "lucide-react"

interface PublishBusinessModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function PublishBusinessModal({ isOpen, onClose }: PublishBusinessModalProps) {
  const [selectedType, setSelectedType] = useState<string | null>(null)

  const businessTypes = [
    {
      id: "alojamiento",
      label: "Alojamiento",
      icon: "🏠",
      description: "Accommodations",
    },
    {
      id: "experiencia",
      label: "Experiencia",
      icon: "🎈",
      description: "Experiences",
    },
    {
      id: "servicio",
      label: "Servicio",
      icon: "🔔",
      description: "Services",
    },
  ]

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-background rounded-2xl p-8 max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button onClick={onClose} className="absolute top-6 left-6 p-2 hover:bg-secondary rounded-lg transition-colors">
          <X className="w-6 h-6" />
        </button>

        {/* Title */}
        <div className="text-center mb-12 mt-4">
          <h2 className="text-3xl font-bold text-foreground mb-2">¿Qué te gustaría compartir?</h2>
          <p className="text-muted-foreground">Selecciona el tipo de negocio que deseas registrar</p>
        </div>

        {/* Business Type Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {businessTypes.map((type) => (
            <button
              key={type.id}
              onClick={() => setSelectedType(type.id)}
              className={`flex flex-col items-center justify-center p-8 rounded-xl border-2 transition-all ${
                selectedType === type.id
                  ? "border-primary bg-primary/5"
                  : "border-border hover:border-primary/50 hover:bg-secondary"
              }`}
            >
              <div className="text-5xl mb-4">{type.icon}</div>
              <h3 className="text-lg font-semibold text-foreground">{type.label}</h3>
              <p className="text-xs text-muted-foreground mt-1">{type.description}</p>
            </button>
          ))}
        </div>

        {/* Next Button */}
        <div className="flex justify-end">
          <button
            disabled={!selectedType}
            className={`px-8 py-3 rounded-lg font-medium transition-all ${
              selectedType
                ? "bg-primary text-primary-foreground hover:opacity-90"
                : "bg-secondary text-muted-foreground cursor-not-allowed"
            }`}
          >
            Siguiente
          </button>
        </div>
      </div>
    </div>
  )
}
