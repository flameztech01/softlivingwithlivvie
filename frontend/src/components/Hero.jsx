import React from 'react'

const Hero = () => {
  return (
    <section className="bg-black text-white min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
          
          {/* Left Content */}
          <div className="md:w-1/2 space-y-6">
            <div>
              <p className="text-[#D4AF37] text-lg font-medium mb-2">Financial Coach & Entrepreneur</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                My name is <span className="text-[#D4AF37]">OLIVIA-EDIKAN</span>
              </h1>
            </div>
            
            <div className="space-y-4">
              <p className="text-xl text-gray-300">
                Mostly known as <span className="text-[#D4AF37] font-semibold">coach Olivia</span>. I'm a financial coach and entrepreneur.
              </p>
              
              <div className="bg-gray-900 p-4 rounded-lg border-l-4 border-[#D4AF37]">
                <p className="text-lg">
                  I have a student base of over <span className="text-[#D4AF37] font-bold">8000 students</span>. With many successful testimonials from all my updates.
                </p>
              </div>
            </div>
            
            <div className="pt-4">
              <button className="bg-[#D4AF37] text-black font-bold px-8 py-3 rounded-md hover:bg-[#B8860B] transition-all duration-300 transform hover:scale-105">
                View Testimonials
              </button>
            </div>
          </div>
          
          {/* Right Image */}
          <div className="md:w-1/2 flex justify-center md:justify-end">
            <div className="relative">
              {/* Decorative circle */}
              <div className="absolute -top-4 -right-4 w-20 h-20 border-2 border-[#D4AF37] rounded-full opacity-50"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 border-2 border-[#FFB6C1] rounded-full opacity-30"></div>
              
              {/* Image container */}
              <div className="relative z-10">
                <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-[#D4AF37]">
                  <img 
                    src="/me.jpeg" 
                    alt="Coach Olivia" 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Stats badge */}
                <div className="absolute -bottom-4 -right-4 bg-black border-2 border-[#D4AF37] rounded-lg p-3 shadow-lg">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-[#D4AF37]">8K+</p>
                    <p className="text-xs text-gray-300">Students</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="mt-12 md:mt-20 flex justify-center">
          <div className="animate-bounce">
            <svg className="w-6 h-6 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero