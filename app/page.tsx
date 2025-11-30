import Header from "@/components/header"
import HeroCarousel from "@/components/hero-carousel"
import SearchBar from "@/components/search-bar"
import DiscoverySection from "@/components/discovery-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroCarousel />
      <SearchBar />

      <div className="max-w-7xl mx-auto px-4 py-12 space-y-16">
        <DiscoverySection title="Tendencia ahora" icon="⭐" id="trending" />
        <DiscoverySection title="Lo mejor en tu zona" icon="🎯" id="nearby" />
        <DiscoverySection title="24 horas" icon="🌙" id="24hours" />
        <DiscoverySection title="Nuevos descubrimientos" icon="✨" id="new" />
        <DiscoverySection title="Para una cita" icon="💝" id="date" />
        <DiscoverySection title="Para tu mancha" icon="👥" id="hangout" />
      </div>

      <Footer />
    </main>
  )
}
