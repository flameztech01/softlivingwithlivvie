import React from 'react'
import { FaTelegram, FaWhatsapp, FaEnvelope, FaPhone } from 'react-icons/fa'

const Footer = () => {
  const telegramLinks = [
    { icon: <FaTelegram />, href: '#', label: 'Telegram Channel' },
    { icon: <FaTelegram />, href: '#', label: 'Telegram Group' },
  ]

  const quickLinks = [
    { label: 'Home', href: '#' },
    { label: 'About', href: '#' },
    { label: 'Course Features', href: '#' },
    { label: 'What You\'ll Learn', href: '#' },
    { label: 'Testimonials', href: '#' },
    { label: 'Pricing', href: '#' },
  ]

  const contactInfo = [
    { icon: <FaPhone />, text: '+234 701 769 6460', href: 'tel:+2347017696460' },
    { icon: <FaWhatsapp />, text: 'Chat on WhatsApp', href: 'https://wa.me/2347017696460' },
    { icon: <FaTelegram />, text: 'Message on Telegram', href: 'https://t.me/07017696460' },
    { icon: <FaEnvelope />, text: 'hello@softlivingwithlivvie.com', href: 'mailto:hello@softlivingwithlivvie.com' },
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
            <p className="text-gray-400 mb-6">
              Empowering individuals worldwide to achieve financial freedom through AI writing and legitimate income streams.
            </p>
            
            {/* Telegram Links Only */}
            <div className="mb-6">
              <h4 className="text-lg font-bold mb-4 text-[#D4AF37]">Join Our Telegram</h4>
              <div className="flex gap-3">
                {telegramLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 bg-gray-900 hover:bg-[#0088cc] rounded-full flex items-center justify-center transition-colors duration-300 group"
                    title={social.label}
                  >
                    <span className="text-gray-400 group-hover:text-white">
                      {social.icon}
                    </span>
                  </a>
                ))}
              </div>
              <p className="text-sm text-gray-400 mt-2">
                Get updates and connect with our community
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-[#D4AF37]">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-[#D4AF37] transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-[#D4AF37]">Contact Info</h4>
            <ul className="space-y-4">
              {contactInfo.map((contact, index) => (
                <li key={index}>
                  <a
                    href={contact.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-3 text-gray-400 hover:text-[#D4AF37] transition-colors duration-300 group"
                  >
                    <span className="mt-1 text-[#D4AF37] group-hover:scale-110 transition-transform">
                      {contact.icon}
                    </span>
                    <span>{contact.text}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-[#D4AF37]">Stay Updated</h4>
            <p className="text-gray-400 mb-4">
              Subscribe to get tips and updates on AI writing opportunities.
            </p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg focus:outline-none focus:border-[#D4AF37] transition-colors"
              />
              <button
                type="submit"
                className="w-full bg-[#D4AF37] text-black font-bold py-3 rounded-lg hover:bg-[#B8860B] transition-colors duration-300"
              >
                Subscribe
              </button>
            </form>
            <p className="text-xs text-gray-500 mt-2">
              Or join our Telegram for instant updates
            </p>
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
              <p className="text-3xl font-bold text-[#D4AF37]">98%</p>
              <p className="text-sm text-gray-400">Success Rate</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-[#D4AF37]">5K+</p>
              <p className="text-sm text-gray-400">Testimonials</p>
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
              <span className="text-sm text-gray-300">✅ 30-Day Money Back</span>
            </div>
            <div className="px-4 py-2 bg-gray-800 rounded-lg border border-gray-700">
              <span className="text-sm text-gray-300">🔒 Secure Payment</span>
            </div>
            <div className="px-4 py-2 bg-gray-800 rounded-lg border border-gray-700">
              <span className="text-sm text-gray-300">⭐ 5-Star Reviews</span>
            </div>
            <div className="px-4 py-2 bg-gray-800 rounded-lg border border-gray-700">
              <span className="text-sm text-gray-300">📱 Active Telegram Community</span>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
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