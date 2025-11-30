"use client"

import { Facebook, Instagram, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-foreground text-background mt-20 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-2">DondePé</h3>
            <p className="text-sm opacity-75">
              Descubre los mejores sabores, momentos y experiencias que el Perú tiene para ofrecer.
            </p>
            <div className="flex gap-3 mt-4">
              <a href="#" className="p-2 bg-background/20 hover:bg-primary rounded-lg transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-background/20 hover:bg-primary rounded-lg transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-background/20 hover:bg-primary rounded-lg transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Explore */}
          <div>
            <h4 className="font-semibold mb-4">Explorar</h4>
            <ul className="space-y-2 text-sm opacity-75">
              <li>
                <a href="#" className="hover:opacity-100 transition-opacity">
                  Sabores
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-100 transition-opacity">
                  Momentos
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-100 transition-opacity">
                  Cultura
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-100 transition-opacity">
                  Escapadas
                </a>
              </li>
            </ul>
          </div>

          {/* Información */}
          <div>
            <h4 className="font-semibold mb-4">Información</h4>
            <ul className="space-y-2 text-sm opacity-75">
              <li>
                <a href="#" className="hover:opacity-100 transition-opacity">
                  Cómo funciona
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-100 transition-opacity">
                  Términos y Condiciones
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-100 transition-opacity">
                  Política de Privacidad
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-100 transition-opacity">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="font-semibold mb-4">Contacto</h4>
            <p className="text-sm opacity-75 mb-2">contacto@dondepe.com</p>
            <p className="text-sm opacity-75">+51 (1) 2345-6789</p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 pt-8 flex flex-col md:flex-row items-center justify-between text-sm opacity-75">
          <p>&copy; 2025 DondePé. Todos los derechos reservados.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="hover:opacity-100 transition-opacity">
              Legales
            </a>
            <a href="#" className="hover:opacity-100 transition-opacity">
              Soporte
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
