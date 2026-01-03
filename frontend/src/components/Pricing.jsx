import React from 'react'
import { FaGem, FaCrown, FaUsers, FaChartLine, FaPaperPlane, FaTelegram } from 'react-icons/fa'

const Pricing = () => {
  const telegramLink = 'https://t.me/TheyluvOlivia'
  
  const pricingPlans = [
    {
      icon: <FaGem className="text-3xl" />,
      title: "Regular Classes",
      price: "₦35,000",
      features: [
        "Access to all recorded lessons",
        "PDF materials & templates",
        "Private Telegram group access",
        "Daily Q&A support",
        "Monthly live classes",
        "Lifetime access"
      ],
      highlighted: false
    },
    {
      icon: <FaCrown className="text-3xl" />,
      title: "Private Classes",
      price: "₦70,000",
      features: [
        "Everything in Regular Classes +",
        "1-on-1 personal coaching",
        "Customized learning plan",
        "Priority support",
        "Direct mentor access",
        "Career guidance sessions",
        "Portfolio review"
      ],
      highlighted: true
    }
  ]

  return (
    <section className="bg-black text-white py-16 md:py-24" id="pricing">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            COURSE <span className="text-[#D4AF37]">PRICING</span>
          </h2>
          <div className="flex justify-center mb-6">
            <div className="w-24 h-1 bg-gradient-to-r from-[#D4AF37] to-[#FFB6C1] rounded-full"></div>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Choose the perfect plan for your AI writing journey
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 md:gap-12">
          
          {/* Pricing Cards */}
          <div className="lg:col-span-2 grid md:grid-cols-2 gap-8">
            {pricingPlans.map((plan, index) => (
              <div 
                key={index}
                className={`relative rounded-2xl border-2 p-8 transition-all duration-300 hover:transform hover:scale-[1.02] ${
                  plan.highlighted 
                    ? 'border-[#D4AF37] bg-gradient-to-b from-gray-900 to-black shadow-2xl shadow-[#D4AF37]/10' 
                    : 'border-gray-800 bg-gray-900/50'
                }`}
              >
                {/* Popular Badge */}
                {plan.highlighted && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#D4AF37] text-black font-bold px-4 py-1 rounded-full text-sm">
                    MOST POPULAR
                  </div>
                )}

                {/* Plan Icon & Title */}
                <div className="flex items-center gap-4 mb-6">
                  <div className={`p-3 rounded-lg ${
                    plan.highlighted ? 'bg-[#D4AF37]' : 'bg-black border border-gray-800'
                  }`}>
                    <span className={plan.highlighted ? 'text-black' : 'text-[#D4AF37]'}>
                      {plan.icon}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">{plan.title}</h3>
                  </div>
                </div>

                {/* Price */}
                <div className="mb-8">
                  <p className="text-5xl font-bold text-[#D4AF37] mb-2">{plan.price}</p>
                  <p className="text-gray-400">One-time payment • Lifetime access</p>
                </div>

                {/* Features List */}
                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="w-5 h-5 bg-[#D4AF37] rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                        <div className="w-1.5 h-1.5 bg-black rounded-full"></div>
                      </div>
                      <p className="text-gray-300">{feature}</p>
                    </div>
                  ))}
                </div>

                {/* Enroll Button */}
                <a 
                  href={telegramLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block w-full text-center font-bold py-4 rounded-lg transition-all duration-300 ${
                    plan.highlighted
                      ? 'bg-[#D4AF37] text-black hover:bg-[#B8860B]'
                      : 'bg-black border-2 border-[#D4AF37] text-white hover:bg-[#D4AF37] hover:text-black'
                  }`}
                >
                  Enroll Now on Telegram
                </a>
              </div>
            ))}
          </div>

          {/* Right Column - Info & Contact */}
          <div className="space-y-8">
            {/* Stats Card */}
            <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-[#D4AF37] rounded-lg">
                  <FaUsers className="text-xl text-black" />
                </div>
                <h3 className="text-2xl font-bold">Success Track Record</h3>
              </div>
              
              <div className="mb-6">
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-4xl font-bold text-[#D4AF37]">5,000+</span>
                  <span className="text-gray-400">students and counting</span>
                </div>
                <p className="text-gray-300">
                  ✨ Taught 5,000+ students and counting
                </p>
              </div>

              <div className="flex items-center gap-3 mt-4 p-4 bg-black/50 rounded-xl">
                <FaChartLine className="text-[#D4AF37]" />
                <p className="font-semibold">Practical & income-focused training</p>
              </div>
            </div>

            {/* Divider */}
            <div className="relative my-8">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-800"></div>
              </div>
              <div className="relative flex justify-center">
                <span className="bg-black px-4 text-gray-500">⸻</span>
              </div>
            </div>

            {/* Telegram Only Contact Card */}
            <div className="bg-gradient-to-br from-black to-gray-900 border border-[#D4AF37]/30 rounded-2xl p-6">
              <h3 className="text-2xl font-bold mb-6 text-center">
                ENROLL VIA <span className="text-[#D4AF37]">TELEGRAM</span>
              </h3>
              
              <div className="space-y-6">
                {/* Main Telegram Channel */}
                <a 
                  href={telegramLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-[#D4AF37] hover:bg-gray-800/50 transition-all duration-300 group"
                >
                  <div className="p-3 bg-[#D4AF37] rounded-lg">
                    <FaPaperPlane className="text-xl text-black" />
                  </div>
                  <div className="flex-grow">
                    <p className="font-bold mb-1">Official Telegram Channel</p>
                    <p className="text-gray-300">@TheyluvOlivia</p>
                  </div>
                  <FaTelegram className="text-[#D4AF37] text-xl group-hover:scale-110 transition-transform" />
                </a>

                {/* Telegram Support */}
                <a 
                  href={telegramLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-[#D4AF37] hover:bg-gray-800/50 transition-all duration-300 group"
                >
                  <div className="p-3 bg-[#D4AF37] rounded-lg">
                    <FaTelegram className="text-xl text-black" />
                  </div>
                  <div className="flex-grow">
                    <p className="font-bold mb-1">Direct Message for Support</p>
                    <p className="text-gray-300">Available 24/7 on Telegram</p>
                  </div>
                  <FaTelegram className="text-[#D4AF37] text-xl group-hover:scale-110 transition-transform" />
                </a>
              </div>

              {/* Note */}
              <div className="mt-6 p-4 bg-black/50 rounded-xl border border-gray-800">
                <p className="text-sm text-gray-300 text-center">
                  ⚡ All communication happens on Telegram only
                </p>
                <p className="text-sm text-gray-400 text-center mt-2">
                  Spots are limited. Enroll today to secure your position!
                </p>
              </div>
            </div>

            {/* Guarantee */}
            <div className="text-center p-6 border border-gray-800 rounded-2xl">
              <div className="inline-flex items-center gap-2 mb-3">
                <div className="w-6 h-6 bg-[#D4AF37] rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-black rounded-full"></div>
                </div>
                <span className="font-bold">Money-Back Guarantee</span>
              </div>
              <p className="text-gray-300">
                30-day satisfaction guarantee. If not satisfied, get your money back.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Pricing