import React, { useState } from 'react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Updated navLinks to match your Homepage sections
  const navSections = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'learn', label: 'Learn' },
    { id: 'features', label: 'Features' },
    { id: 'testimonials', label: 'Testimonials' },
    { id: 'pricing', label: 'Pricing' },
    { id: 'contact', label: 'Contact' }
  ]

  const handleScroll = (id) => {
    const element = document.getElementById(id)
    if (element) {
      const headerHeight = 64 // Height of your fixed header
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerHeight
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
    setIsMenuOpen(false)
  }

  return (
    <header className="bg-black text-white fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo with scroll to top */}
          <div className="flex items-center">
            <button 
              onClick={() => handleScroll('home')}
              className="text-xl font-bold cursor-pointer hover:text-[#D4AF37] transition-colors"
            >
              Soft Living <span className="text-[#D4AF37]">with Livvie</span>
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navSections.map((section) => (
              <button
                key={section.id}
                onClick={() => handleScroll(section.id)}
                className="text-gray-300 hover:text-[#D4AF37] hover:scale-105 transition-all duration-200 text-sm font-medium"
              >
                {section.label}
              </button>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-[#D4AF37]"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-800">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navSections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => handleScroll(section.id)}
                  className="w-full text-left text-gray-300 hover:text-[#D4AF37] block px-3 py-2 rounded-md text-base font-medium"
                >
                  {section.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header