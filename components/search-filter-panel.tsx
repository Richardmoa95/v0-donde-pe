"use client"

import { useState } from "react"
import {
  Search,
  MapPin,
  X,
  Utensils,
  Coffee,
  Fish,
  Wine,
  Flame,
  Zap,
  Pizza,
  IceCream,
  Home,
  Globe,
  Beef,
  Leaf,
} from "lucide-react"

const categories = [
  { name: "Nikkei", icon: Utensils },
  { name: "Cafeterías", icon: Coffee },
  { name: "Criollo", icon: Flame },
  { name: "Bares", icon: Wine },
  { name: "Parrillas", icon: Beef },
  { name: "Comida rápida", icon: Zap },
  { name: "Pizzerías", icon: Pizza },
  { name: "Cevicherías", icon: Fish },
  { name: "Heladerías", icon: IceCream },
  { name: "Huariques", icon: Home },
  { name: "Chifas", icon: Globe },
  { name: "Pollerías", icon: Flame },
  { name: "Norteño", icon: Utensils },
  { name: "Selvático", icon: Leaf },
]

const groupOptions = ["En pareja", "En familia", "Con amigos", "Solo", "Con mascota", "Con niños"]

const scheduleOptions = ["Abierto ahora", "24 horas", "Desayuno", "Almuerzo", "Cena", "Madrugada"]

interface FilterState {
  query: string
  selectedCategories: string[]
  location: string
  groupWith: string[]
  minPrice: number
  maxPrice: number
  schedule: string
  isOpen: boolean
}

export default function SearchFilterPanel() {
  const [filters, setFilters] = useState<FilterState>({
    query: "",
    selectedCategories: [],
    location: "",
    groupWith: [],
    minPrice: 0,
    maxPrice: 200,
    schedule: "",
    isOpen: false,
  })

  const handleCategoryToggle = (category: string) => {
    setFilters((prev) => ({
      ...prev,
      selectedCategories: prev.selectedCategories.includes(category)
        ? prev.selectedCategories.filter((c) => c !== category)
        : [...prev.selectedCategories, category],
    }))
  }

  const handleGroupToggle = (group: string) => {
    setFilters((prev) => ({
      ...prev,
      groupWith: prev.groupWith.includes(group)
        ? prev.groupWith.filter((g) => g !== group)
        : [...prev.groupWith, group],
    }))
  }

  const handleSearch = () => {
    console.log("[v0] Search filters applied:", filters)
  }

  return (
    <>
      {/* Search Bar Trigger */}
      <div className="flex justify-center -translate-y-8 relative z-20 px-4">
        <div className="w-full max-w-2xl">
          <button
            onClick={() => setFilters((prev) => ({ ...prev, isOpen: !prev.isOpen }))}
            className="w-full flex items-center gap-2 bg-background border border-border rounded-lg px-4 py-3 shadow-lg hover:border-primary transition-colors"
          >
            <input
              type="text"
              placeholder="¿Qué quieres hacer hoy?"
              value={filters.query}
              onChange={(e) => setFilters((prev) => ({ ...prev, query: e.target.value }))}
              onClick={(e) => e.stopPropagation()}
              className="flex-1 bg-transparent outline-none text-foreground placeholder:text-muted-foreground"
            />
            <Search className="w-5 h-5 text-primary" />
          </button>
        </div>
      </div>

      {/* Filter Panel Modal */}
      {filters.isOpen && (
        <div className="fixed inset-0 bg-black/50 z-40 flex items-end md:items-center justify-center">
          <div className="bg-background w-full md:w-11/12 md:max-w-5xl md:rounded-2xl md:max-h-[90vh] rounded-t-2xl shadow-xl overflow-y-auto max-h-[90vh]">
            {/* Header */}
            <div className="sticky top-0 bg-background border-b border-border p-4 md:p-6 flex justify-between items-center">
              <h2 className="text-2xl font-bold text-foreground">Busca tu experiencia</h2>
              <button
                onClick={() => setFilters((prev) => ({ ...prev, isOpen: false }))}
                className="p-2 hover:bg-secondary rounded-lg transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Filter Sections */}
            <div className="p-4 md:p-6 space-y-8">
              {/* Search Input */}
              <div>
                <label className="block text-sm font-semibold text-foreground mb-3">¿Qué quieres hacer?</label>
                <input
                  type="text"
                  placeholder="Buscar..."
                  value={filters.query}
                  onChange={(e) => setFilters((prev) => ({ ...prev, query: e.target.value }))}
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:border-primary bg-background text-foreground"
                />
              </div>

              {/* Category Type */}
              <div>
                <h3 className="text-base font-semibold text-foreground mb-4">Category Type</h3>
                <div className="grid grid-cols-3 md:grid-cols-7 gap-3">
                  {categories.map((cat) => {
                    const IconComponent = cat.icon
                    return (
                      <button
                        key={cat.name}
                        onClick={() => handleCategoryToggle(cat.name)}
                        className={`p-3 rounded-lg border-2 transition-all flex flex-col items-center gap-2 ${
                          filters.selectedCategories.includes(cat.name)
                            ? "border-primary bg-secondary"
                            : "border-border hover:border-primary/50"
                        }`}
                      >
                        <IconComponent className="w-6 h-6 text-foreground" />
                        <span className="text-xs font-medium text-center text-foreground line-clamp-2">{cat.name}</span>
                      </button>
                    )
                  })}
                </div>
              </div>

              {/* Location */}
              <div className="border-t border-border pt-6">
                <label className="block text-sm font-semibold text-foreground mb-3">¿Dónde quieres buscar?</label>
                <div className="flex items-center gap-2 px-4 py-2 border border-border rounded-lg bg-background">
                  <MapPin className="w-5 h-5 text-primary" />
                  <input
                    type="text"
                    placeholder="San Martín de Porres, Lima"
                    value={filters.location}
                    onChange={(e) =>
                      setFilters((prev) => ({
                        ...prev,
                        location: e.target.value,
                      }))
                    }
                    className="flex-1 bg-transparent outline-none text-foreground placeholder:text-muted-foreground"
                  />
                </div>
              </div>

              {/* Group Composition */}
              <div className="border-t border-border pt-6">
                <h3 className="text-base font-semibold text-foreground mb-4">¿Con quién?</h3>
                <div className="space-y-3">
                  {groupOptions.map((option) => (
                    <label key={option} className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={filters.groupWith.includes(option)}
                        onChange={() => handleGroupToggle(option)}
                        className="w-5 h-5 rounded border-border accent-primary"
                      />
                      <span className="text-foreground">{option}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Budget */}
              <div className="border-t border-border pt-6">
                <h3 className="text-base font-semibold text-foreground mb-4">Presupuesto</h3>
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="flex-1">
                      <label className="text-sm text-muted-foreground">Min</label>
                      <input
                        type="number"
                        value={filters.minPrice}
                        onChange={(e) =>
                          setFilters((prev) => ({
                            ...prev,
                            minPrice: Number.parseInt(e.target.value) || 0,
                          }))
                        }
                        className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground mt-1"
                      />
                    </div>
                    <div className="flex-1">
                      <label className="text-sm text-muted-foreground">Max</label>
                      <input
                        type="number"
                        value={filters.maxPrice}
                        onChange={(e) =>
                          setFilters((prev) => ({
                            ...prev,
                            maxPrice: Number.parseInt(e.target.value) || 200,
                          }))
                        }
                        className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground mt-1"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Schedule */}
              <div className="border-t border-border pt-6">
                <h3 className="text-base font-semibold text-foreground mb-4">Horarios</h3>
                <div className="space-y-3">
                  {scheduleOptions.map((option) => (
                    <label key={option} className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="radio"
                        name="schedule"
                        checked={filters.schedule === option}
                        onChange={() =>
                          setFilters((prev) => ({
                            ...prev,
                            schedule: option,
                          }))
                        }
                        className="w-5 h-5 accent-primary"
                      />
                      <span className="text-foreground">{option}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Search Button */}
              <div className="border-t border-border pt-6 flex gap-3">
                <button
                  onClick={() => setFilters((prev) => ({ ...prev, isOpen: false }))}
                  className="flex-1 px-6 py-3 border border-border rounded-lg font-medium text-foreground hover:bg-secondary transition-colors"
                >
                  Limpiar filtros
                </button>
                <button
                  onClick={handleSearch}
                  className="flex-1 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity"
                >
                  Buscar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
