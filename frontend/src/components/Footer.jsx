import React from 'react'
import { FaTelegram } from 'react-icons/fa'

const Footer = () => {
  const telegramLink = 'https://t.me/TheyluvOlivia'
  
  // Quick Links matching the header sections
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
  }

  const telegramChannels = [
    { 
      icon: <FaTelegram />, 
      href: telegramLink, 
      label: 'Official Channel', 
      description: 'Get daily AI writing tips & updates' 
    },
    { 
      icon: <FaTelegram />, 
      href: telegramLink, 
      label: 'Community Group', 
      description: 'Join our growing community' 
    },
    { 
      icon: <FaTelegram />, 
      href: telegramLink, 
      label: 'Support Center', 
      description: 'Get instant support & help' 
    },
  ]

  return (
    <footer className="bg-black text-white border-t border-gray-800">
      
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Brand Column */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <span className="text-2xl font-bold text-[#D4AF37]">S</span>
              <h3 className="text-xl font-bold">
                Soft Living <span className="text-[#D4AF37]">with Livvie</span>
              </h3>
            </div>
            <p className="text-gray-400 mb-8">
              Empowering individuals worldwide to achieve financial freedom through AI writing and legitimate income streams.
            </p>
            
            {/* Telegram Links */}
            <div className="mb-6">
              <h4 className="text-lg font-bold mb-6 text-[#D4AF37]">Join Our Telegram</h4>
              <div className="space-y-4">
                {telegramChannels.map((channel, index) => (
                  <a
                    key={index}
                    href={channel.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={channel.label}
                    className="flex items-start gap-3 p-3 bg-gray-900 hover:bg-gray-800 rounded-lg transition-all duration-300 group border border-gray-800 hover:border-[#D4AF37]"
                  >
                    <div className="w-10 h-10 bg-gray-800 group-hover:bg-[#D4AF37] rounded-full flex items-center justify-center transition-colors duration-300">
                      <FaTelegram className="text-gray-400 group-hover:text-black text-lg" />
                    </div>
                    <div>
                      <p className="font-medium text-white group-hover:text-[#D4AF37] transition-colors">{channel.label}</p>
                      <p className="text-sm text-gray-400">{channel.description}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Links - matching header sections */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-[#D4AF37]">Quick Links</h4>
            <ul className="space-y-3">
              {navSections.map((section) => (
                <li key={section.id}>
                  <button
                    onClick={() => handleScroll(section.id)}
                    className="w-full text-left text-gray-400 hover:text-[#D4AF37] transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    {section.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Telegram Exclusive Section */}
          <div className="lg:col-span-2">
            <div className="bg-gradient-to-r from-gray-900 to-black p-6 rounded-xl border border-gray-800">
              <h4 className="text-2xl font-bold mb-4 text-white">Everything Happens on Telegram</h4>
              <p className="text-gray-300 mb-6">
                All our communication, community interaction, support, and content delivery happens exclusively on Telegram. 
                Join our channel to access everything in one place!
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="text-center p-4 bg-gray-900 rounded-lg">
                  <div className="w-12 h-12 bg-[#D4AF37] rounded-full flex items-center justify-center mx-auto mb-3">
                    <FaTelegram className="text-black text-xl" />
                  </div>
                  <h5 className="font-bold text-white mb-1">Daily Content</h5>
                  <p className="text-sm text-gray-400">AI writing tips & strategies</p>
                </div>
                
                <div className="text-center p-4 bg-gray-900 rounded-lg">
                  <div className="w-12 h-12 bg-[#D4AF37] rounded-full flex items-center justify-center mx-auto mb-3">
                    <FaTelegram className="text-black text-xl" />
                  </div>
                  <h5 className="font-bold text-white mb-1">Community</h5>
                  <p className="text-sm text-gray-400">Network & collaborate</p>
                </div>
                
                <div className="text-center p-4 bg-gray-900 rounded-lg">
                  <div className="w-12 h-12 bg-[#D4AF37] rounded-full flex items-center justify-center mx-auto mb-3">
                    <FaTelegram className="text-black text-xl" />
                  </div>
                  <h5 className="font-bold text-white mb-1">Support</h5>
                  <p className="text-sm text-gray-400">Direct access to help</p>
                </div>
              </div>
              
              <a
                href={telegramLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-[#D4AF37] hover:bg-[#B8860B] text-black font-bold py-3 px-6 rounded-lg transition-colors duration-300"
              >
                <FaTelegram className="text-xl" />
                Join Our Telegram Channel
              </a>
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center">
              <p className="text-3xl font-bold text-[#D4AF37]">8K+</p>
              <p className="text-sm text-gray-400">Students Trained</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-[#D4AF37]">50+</p>
              <p className="text-sm text-gray-400">Countries</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-[#D4AF37]">100%</p>
              <p className="text-sm text-gray-400">Success Rate</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-[#D4AF37]">5K+</p>
              <p className="text-sm text-gray-400">Active Members</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-900/50 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Soft Living with Livvie. All rights reserved.
            </p>
            
            <div className="flex flex-wrap gap-6 text-sm text-gray-400">
              <a href="#" className="hover:text-[#D4AF37] transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-[#D4AF37] transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-[#D4AF37] transition-colors">
                Refund Policy
              </a>
              <a href="#" className="hover:text-[#D4AF37] transition-colors">
                Disclaimer
              </a>
            </div>
          </div>
          
          {/* Trust Badges */}
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <div className="px-4 py-2 bg-gray-800 rounded-lg border border-gray-700">
              <span className="text-sm text-gray-300">📱 Telegram Exclusive Platform</span>
            </div>
            <div className="px-4 py-2 bg-gray-800 rounded-lg border border-gray-700">
              <span className="text-sm text-gray-300">⭐ 5-Star Community</span>
            </div>
            <div className="px-4 py-2 bg-gray-800 rounded-lg border border-gray-700">
              <span className="text-sm text-gray-300">🚀 Instant Access</span>
            </div>
            <div className="px-4 py-2 bg-gray-800 rounded-lg border border-gray-700">
              <span className="text-sm text-gray-300">✅ 30-Day Guarantee</span>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top */}
      <button
        onClick={() => handleScroll('home')}
        className="fixed bottom-6 right-6 w-12 h-12 bg-[#D4AF37] text-black rounded-full flex items-center justify-center shadow-lg hover:bg-[#B8860B] transition-colors duration-300 z-50"
        aria-label="Back to top"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 15l7-7 7 7" />
        </svg>
      </button>
    </footer>
  )
}

export default Footer