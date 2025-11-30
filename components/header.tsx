"use client"

import { useState } from "react"
import { Menu, X, User, UtensilsCrossed, Camera, Palette, MapPin } from "lucide-react"
import LoginModal from "./login-modal"
import PublishBusinessModal from "./publish-business-modal"

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [loginModalOpen, setLoginModalOpen] = useState(false)
  const [publishBusinessModalOpen, setPublishBusinessModalOpen] = useState(false)

  const navItems = [
    { label: "Sabores", icon: UtensilsCrossed },
    { label: "Momentos", icon: Camera },
    { label: "Cultura", icon: Palette },
    { label: "Escapadas", icon: MapPin },
  ]

  return (
    <>
      <header className="sticky top-0 z-50 bg-background border-b border-border">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="text-2xl font-bold text-primary">DondePé</div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-1">
              {navItems.map((item) => {
                const Icon = item.icon
                return (
                  <a
                    key={item.label}
                    href="#"
                    className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-foreground hover:text-primary hover:bg-secondary rounded-lg transition-colors group"
                  >
                    <Icon className="w-4 h-4 group-hover:text-primary" />
                    <span>{item.label}</span>
                  </a>
                )
              })}
            </nav>

            {/* Right Section */}
            <div className="flex items-center gap-4">
              <button
                onClick={() => setPublishBusinessModalOpen(true)}
                className="hidden md:block px-4 py-2 bg-primary text-primary-foreground rounded-lg font-medium text-sm hover:opacity-90 transition-opacity"
              >
                Publicar negocio
              </button>
              <button
                onClick={() => setLoginModalOpen(true)}
                className="hidden md:block p-2 hover:bg-secondary rounded-lg transition-colors"
              >
                <User className="w-5 h-5" />
              </button>

              {/* Mobile Menu Button */}
              <button className="md:hidden p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <nav className="md:hidden mt-4 pt-4 border-t border-border space-y-2">
              {navItems.map((item) => {
                const Icon = item.icon
                return (
                  <a
                    key={item.label}
                    href="#"
                    className="flex items-center gap-3 px-4 py-2 text-sm hover:bg-secondary rounded-lg transition-colors"
                  >
                    <Icon className="w-4 h-4 text-primary" />
                    <span>{item.label}</span>
                  </a>
                )
              })}
              <button
                onClick={() => setPublishBusinessModalOpen(true)}
                className="w-full mt-4 px-4 py-2 bg-primary text-primary-foreground rounded-lg font-medium text-sm hover:opacity-90 transition-opacity"
              >
                Publicar negocio
              </button>
            </nav>
          )}
        </div>
      </header>

      <LoginModal isOpen={loginModalOpen} onClose={() => setLoginModalOpen(false)} />
      <PublishBusinessModal isOpen={publishBusinessModalOpen} onClose={() => setPublishBusinessModalOpen(false)} />
    </>
  )
}
