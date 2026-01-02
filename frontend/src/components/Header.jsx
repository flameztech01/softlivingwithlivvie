import React, { useState } from 'react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navLinks = ['Home', 'About', 'Works', 'Testimonials', 'Contact']

  return (
    <header className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-xl font-bold">
              Soft Living <span className="text-[#D4AF37]">with Livvie</span>
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link}
                href="#"
                className="text-gray-300 hover:text-[#D4AF37] hover:scale-105 transition-all duration-200"
              >
                {link}
              </a>
            ))}
            <button className="bg-[#D4AF37] text-black px-4 py-2 rounded-md text-sm font-medium hover:bg-[#B8860B] transition-colors">
              Contact
            </button>
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
              {navLinks.map((link) => (
                <a
                  key={link}
                  href="#"
                  className="text-gray-300 hover:text-[#D4AF37] block px-3 py-2 rounded-md text-base font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link}
                </a>
              ))}
              <button className="w-full bg-[#D4AF37] text-black px-4 py-2 rounded-md text-base font-medium hover:bg-[#B8860B] transition-colors mt-2">
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header