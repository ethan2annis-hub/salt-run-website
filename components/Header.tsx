'use client'

import { useState, useEffect } from 'react'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-[0_2px_20px_rgba(0,0,0,0.08)] backdrop-blur-sm'
          : 'bg-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0 group cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="flex items-center space-x-2">
              <div className="text-[28px] font-bold text-dark-gray tracking-tight group-hover:text-golden-yellow transition-colors duration-300">
                SALT RUN
              </div>
              <div className={`w-1.5 h-1.5 rounded-full bg-golden-yellow transition-transform duration-300 ${isScrolled ? 'scale-100' : 'scale-0'}`} />
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {[
              { label: 'How it works', id: 'how-it-works' },
              { label: 'Pricing', id: 'pricing' },
              { label: 'FAQs', id: 'faqs' },
              { label: 'Testimonials', id: 'testimonials' },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="relative px-4 py-2 text-[15px] font-medium text-medium-gray hover:text-dark-gray transition-colors duration-200 group"
              >
                {item.label}
                <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-golden-yellow scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </button>
            ))}
          </nav>

          {/* Phone Number - Desktop */}
          <a
            href="tel:8014770670"
            className="hidden md:flex items-center space-x-2 px-5 py-2.5 border-2 border-golden-yellow text-dark-gray font-semibold text-[15px] rounded-lg hover:bg-golden-yellow hover:shadow-[0_4px_16px_rgba(255,199,0,0.3)] transition-all duration-300 group"
          >
            <svg className="w-4 h-4 transition-transform duration-300 group-hover:rotate-12" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            <span>(801) 477-0670</span>
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden relative w-10 h-10 flex items-center justify-center focus:outline-none group"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span
                className={`w-full h-0.5 bg-dark-gray transition-all duration-300 ${
                  isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''
                }`}
              />
              <span
                className={`w-full h-0.5 bg-dark-gray transition-all duration-300 ${
                  isMobileMenuOpen ? 'opacity-0' : ''
                }`}
              />
              <span
                className={`w-full h-0.5 bg-dark-gray transition-all duration-300 ${
                  isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
                }`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <nav className="py-4 space-y-1 border-t border-gray-100">
            {[
              { label: 'How it works', id: 'how-it-works' },
              { label: 'Pricing', id: 'pricing' },
              { label: 'FAQs', id: 'faqs' },
              { label: 'Testimonials', id: 'testimonials' },
            ].map((item, index) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="w-full text-left px-4 py-3 text-[15px] font-medium text-medium-gray hover:text-dark-gray hover:bg-off-white transition-all duration-200 rounded-lg"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {item.label}
              </button>
            ))}
            <a
              href="tel:8014770670"
              className="flex items-center justify-center space-x-2 mx-4 mt-4 px-5 py-3 bg-golden-yellow text-dark-gray font-semibold text-[15px] rounded-lg hover:shadow-[0_4px_16px_rgba(255,199,0,0.3)] transition-all duration-300"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              <span>(801) 477-0670</span>
            </a>
          </nav>
        </div>
      </div>
    </header>
  )
}
