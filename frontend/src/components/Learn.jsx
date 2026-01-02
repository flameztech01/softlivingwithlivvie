import React from 'react'
import { FaCheckCircle, FaPenFancy, FaRobot, FaChartLine, FaLightbulb, FaWallet, FaStar } from 'react-icons/fa'

const Learn = () => {
  const learningPoints = [
    {
      icon: <FaPenFancy className="text-2xl" />,
      title: "Professional Writing Skills",
      description: "How to write perfectly and professionally — even with no prior experience",
      color: "from-[#D4AF37] to-[#FFD700]"
    },
    {
      icon: <FaRobot className="text-2xl" />,
      title: "AI Content Generation",
      description: "How to generate high-quality write-ups using AI tools effectively",
      color: "from-[#FF6B6B] to-[#FF8E53]"
    },
    {
      icon: <FaChartLine className="text-2xl" />,
      title: "Step-by-Step Earning Methods",
      description: "Proven methods to earn consistently with clear, actionable steps",
      color: "from-[#4ECDC4] to-[#44A08D]"
    },
    {
      icon: <FaLightbulb className="text-2xl" />,
      title: "Creativity & Confidence Boost",
      description: "Boost your creativity and build unshakable confidence in your skills",
      color: "from-[#FFD93D] to-[#FF9C6D]"
    },
    {
      icon: <FaWallet className="text-2xl" />,
      title: "Earnings Withdrawal Process",
      description: "How to successfully withdraw your earnings to your bank account",
      color: "from-[#6BCF7F] to-[#3BA17C]"
    },
    {
      icon: <FaStar className="text-2xl" />,
      title: "Complete AI Mastery",
      description: "Everything you need to excel with the AI Update program",
      color: "from-[#9D50BB] to-[#6E48AA]"
    }
  ]

  return (
    <section className="bg-gradient-to-b from-black to-gray-900 text-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-3 mb-4">
            <FaCheckCircle className="text-3xl text-[#D4AF37]" />
            <span className="text-[#D4AF37] text-lg font-semibold">COMPREHENSIVE CURRICULUM</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            WHAT YOU'LL <span className="text-[#D4AF37]">LEARN</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Master AI writing and earn legit income with our complete step-by-step training program
          </p>
        </div>

        {/* Learning Points Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {learningPoints.map((point, index) => (
            <div 
              key={index} 
              className="group relative bg-gray-900/50 border border-gray-800 rounded-2xl p-6 hover:border-[#D4AF37]/50 transition-all duration-300 hover:transform hover:scale-[1.02]"
            >
              {/* Number Badge */}
              <div className="absolute -top-3 -left-3 w-10 h-10 bg-[#D4AF37] rounded-full flex items-center justify-center font-bold text-black">
                {index + 1}
              </div>
              
              {/* Icon with Gradient */}
              <div className={`mb-4 p-4 rounded-xl bg-gradient-to-br ${point.color} w-fit`}>
                {point.icon}
              </div>
              
              <h3 className="text-xl font-bold mb-3 group-hover:text-[#D4AF37] transition-colors">
                {point.title}
              </h3>
              
              <p className="text-gray-300">
                {point.description}
              </p>
              
              {/* Hover Line */}
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-[#D4AF37] to-[#FFB6C1] group-hover:w-full transition-all duration-500 rounded-b-2xl"></div>
            </div>
          ))}
        </div>

        {/* Bonus Features */}
        <div className="mt-16 bg-gradient-to-r from-gray-900 to-black border border-[#D4AF37]/30 rounded-2xl p-8 md:p-10">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">
              <span className="text-[#D4AF37]">BONUS</span> INCLUDED
            </h3>
            <p className="text-xl text-gray-300">When you enroll today, you also get:</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center gap-4 bg-black/50 p-4 rounded-xl">
              <div className="p-3 bg-[#D4AF37] rounded-lg">
                <FaCheckCircle className="text-xl text-black" />
              </div>
              <div>
                <h4 className="font-bold">Lifetime Access</h4>
                <p className="text-sm text-gray-300">Course updates included</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4 bg-black/50 p-4 rounded-xl">
              <div className="p-3 bg-[#D4AF37] rounded-lg">
                <FaCheckCircle className="text-xl text-black" />
              </div>
              <div>
                <h4 className="font-bold">Private Community</h4>
                <p className="text-sm text-gray-300">Network with 8K+ students</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4 bg-black/50 p-4 rounded-xl">
              <div className="p-3 bg-[#D4AF37] rounded-lg">
                <FaCheckCircle className="text-xl text-black" />
              </div>
              <div>
                <h4 className="font-bold">1-on-1 Coaching</h4>
                <p className="text-sm text-gray-300">Personalized guidance</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <button className="bg-gradient-to-r from-[#D4AF37] to-[#B8860B] text-black font-bold px-10 py-4 rounded-full hover:shadow-2xl hover:shadow-[#D4AF37]/30 transition-all duration-300 transform hover:scale-105 text-lg md:text-xl">
            Start Learning Today →
          </button>
          <p className="mt-4 text-gray-400 text-sm">
            Join 8,000+ students who've transformed their income with AI writing
          </p>
        </div>

        {/* Decorative Elements */}
        <div className="hidden lg:block absolute right-10 opacity-10">
          <div className="w-32 h-32 border-4 border-[#D4AF37] rounded-full"></div>
        </div>
        <div className="hidden lg:block absolute left-10 opacity-10">
          <div className="w-24 h-24 border-2 border-[#FFB6C1] rounded-full"></div>
        </div>
      </div>
    </section>
  )
}

export default Learn