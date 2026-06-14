'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { navLinks } from '@/lib/constants'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-cream/95 backdrop-blur-sm border-b border-warm-100 min-h-[72px]">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <a href="/" className="font-serif text-2xl font-bold text-stone-900">
          Dừa Yoga
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-bold text-stone-900 hover:text-sage transition-colors focus-visible:ring-2 focus-visible:ring-sage focus-visible:ring-offset-2"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden focus-visible:ring-2 focus-visible:ring-sage focus-visible:ring-offset-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6 text-stone-900" /> : <Menu className="w-6 h-6 text-stone-900" />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col gap-4 px-6 pb-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-sm font-bold text-stone-900 hover:text-sage transition-colors focus-visible:ring-2 focus-visible:ring-sage focus-visible:ring-offset-2"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}
