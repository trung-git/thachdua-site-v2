import Navigation from "@/components/Navigation"
import Hero from "@/components/Hero"
import About from "@/components/About"
import Services from "@/components/Services"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <>
      {/* Skip link for keyboard accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-sage focus:text-white focus:px-4 focus:py-2 focus:rounded-lg"
      >
        Chuyển đến nội dung chính
      </a>

      <Navigation />

      <main id="main-content">
        <Hero />

        <About />

        <Services />

        {/* Booking anchor target — Phase 2 adds actual booking section */}
        <div id="booking" className="sr-only" aria-hidden="true" />
      </main>

      <Footer />
    </>
  )
}
