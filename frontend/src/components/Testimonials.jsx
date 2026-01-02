import React, { useState, useEffect } from 'react'
import { FaChevronLeft, FaChevronRight, FaStar, FaQuoteLeft, FaPlay, FaPause } from 'react-icons/fa'

const Testimonials = () => {
  // Use the same pattern as your BizzzedScreen.jsx - NO ./public/
  const testimonials = [
    { id: 1, image: '/now1.jpg', name: 'Sarah M.', role: 'Student', rating: 5 },
    { id: 2, image: '/now2.jpg', name: 'John D.', role: 'Freelancer', rating: 5 },
    { id: 3, image: '/3.jpg', name: 'Aisha B.', role: 'Entrepreneur', rating: 5 },
    { id: 4, image: '/4.jpg', name: 'Michael T.', role: 'Writer', rating: 5 },
    { id: 5, image: '/5.jpg', name: 'Chinwe O.', role: 'Student', rating: 5 },
    { id: 6, image: '/6.jpg', name: 'David K.', role: 'Content Creator', rating: 5 },
    { id: 7, image: '/7.jpg', name: 'Fatima A.', role: 'Marketer', rating: 5 },
  ]

  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
  }

  const goToSlide = (index) => {
    setCurrentSlide(index)
  }

  useEffect(() => {
    let slideInterval
    if (isAutoPlaying) {
      slideInterval = setInterval(() => {
        nextSlide()
      }, 4000)
    }
    return () => clearInterval(slideInterval)
  }, [isAutoPlaying, currentSlide])

  return (
    <section className="bg-gradient-to-b from-black to-gray-900 text-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <FaQuoteLeft className="text-[#D4AF37]" />
            <span className="text-[#D4AF37] font-semibold">SUCCESS STORIES</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            What Our <span className="text-[#D4AF37]">Students Say</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Real testimonials from 8,000+ students who transformed their lives
          </p>
        </div>

        {/* Main Slideshow */}
        <div className="relative max-w-6xl mx-auto mb-12">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 md:-left-12 top-1/2 -translate-y-1/2 z-10 bg-black/80 hover:bg-[#D4AF37] text-white hover:text-black w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 border border-gray-800"
          >
            <FaChevronLeft />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-4 md:-right-12 top-1/2 -translate-y-1/2 z-10 bg-black/80 hover:bg-[#D4AF37] text-white hover:text-black w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 border border-gray-800"
          >
            <FaChevronRight />
          </button>

          {/* Auto-play Toggle */}
          <button
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className="absolute top-4 right-4 z-10 bg-black/80 hover:bg-[#D4AF37] text-white hover:text-black w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 border border-gray-800"
          >
            {isAutoPlaying ? <FaPause /> : <FaPlay />}
          </button>

          {/* Main Slide */}
          <div className="relative overflow-hidden rounded-2xl border-2 border-[#D4AF37]/30 bg-gradient-to-br from-gray-900 to-black">
            {/* Rating Stars */}
            <div className="absolute top-6 left-6 z-10 flex gap-1">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="text-[#D4AF37]" />
              ))}
            </div>
            
            {/* Image Container */}
            <div className="aspect-[4/3] md:aspect-video relative">
              <img
                src={testimonials[currentSlide].image}
                alt={`Testimonial from ${testimonials[currentSlide].name}`}
                className="w-full h-full object-contain"
              />
              
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
              
              {/* Student Info */}
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-xl font-bold">{testimonials[currentSlide].name}</h3>
                <p className="text-gray-300">{testimonials[currentSlide].role}</p>
              </div>
            </div>

            {/* Slide Number Indicator */}
            <div className="absolute bottom-6 right-6 bg-black/80 px-3 py-1 rounded-full text-sm">
              {currentSlide + 1} / {testimonials.length}
            </div>
          </div>
        </div>

        {/* Thumbnail Navigation */}
        <div className="max-w-4xl mx-auto mb-8">
          <div className="flex justify-center gap-3 md:gap-4 overflow-x-auto py-4">
            {testimonials.map((testimonial, index) => (
              <button
                key={testimonial.id}
                onClick={() => goToSlide(index)}
                className={`flex-shrink-0 w-20 h-20 md:w-24 md:h-24 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                  currentSlide === index 
                    ? 'border-[#D4AF37] scale-110' 
                    : 'border-gray-700 hover:border-gray-500'
                }`}
              >
                <img
                  src={testimonial.image}
                  alt={`Preview ${testimonial.name}`}
                  className="w-full h-full object-cover"
                />
                {/* Active indicator */}
                {currentSlide === index && (
                  <div className="absolute inset-0 bg-[#D4AF37]/20"></div>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center gap-2 mb-12">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentSlide === index 
                  ? 'bg-[#D4AF37] w-8' 
                  : 'bg-gray-700 hover:bg-gray-500'
              }`}
            />
          ))}
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
          <div className="bg-gray-900/50 p-4 rounded-xl text-center border border-gray-800">
            <p className="text-3xl font-bold text-[#D4AF37]">8K+</p>
            <p className="text-sm text-gray-300">Students</p>
          </div>
          <div className="bg-gray-900/50 p-4 rounded-xl text-center border border-gray-800">
            <p className="text-3xl font-bold text-[#D4AF37]">97%</p>
            <p className="text-sm text-gray-300">Success Rate</p>
          </div>
          <div className="bg-gray-900/50 p-4 rounded-xl text-center border border-gray-800">
            <p className="text-3xl font-bold text-[#D4AF37]">50+</p>
            <p className="text-sm text-gray-300">Countries</p>
          </div>
          <div className="bg-gray-900/50 p-4 rounded-xl text-center border border-gray-800">
            <p className="text-3xl font-bold text-[#D4AF37]">4.9</p>
            <p className="text-sm text-gray-300">Average Rating</p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-[#D4AF37] to-[#B8860B] text-black font-bold px-10 py-4 rounded-full hover:shadow-2xl hover:shadow-[#D4AF37]/30 transition-all duration-300 transform hover:scale-105 text-lg">
            Join Successful Students →
          </button>
          <p className="mt-4 text-gray-400 text-sm">
            Start your journey today and add your success story
          </p>
        </div>
      </div>
    </section>
  )
}

export default Testimonials