import Image from "next/image"
import { ChevronDown } from "lucide-react"
import { heroContent } from "@/lib/constants"

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <Image
        src="/images/hero-placeholder.svg"
        alt="Giáo viên yoga Nguyễn Thạch Thảo đang tập yoga"
        fill
        className="object-cover"
        priority
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/35" />

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6 max-w-3xl mx-auto">
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-4 tracking-tight">
          {heroContent.headline}
        </h1>
        <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
          {heroContent.subheadline}
        </p>
        <a
          href="#booking"
          className="inline-block bg-sage text-white px-8 py-3 rounded-full text-base font-bold hover:bg-sage-dark transition-colors min-h-[48px]"
        >
          {heroContent.ctaText}
        </a>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        aria-label="Cuộn xuống để tìm hiểu thêm"
      >
        <ChevronDown className="w-8 h-8 text-white animate-bounce" />
      </div>
    </section>
  )
}
