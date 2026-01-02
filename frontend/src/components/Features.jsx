import React from 'react'
import { FaVideo, FaFilePdf, FaUsers, FaComments, FaCalendarAlt, FaInfinity, FaUserGraduate, FaUserTie, FaUserMd, FaBriefcase, FaUserFriends } from 'react-icons/fa'

const Features = () => {
  const courseFeatures = [
    {
      icon: <FaVideo className="text-2xl" />,
      title: "Recorded Video Lessons",
      description: "High-quality, pre-recorded lessons you can watch anytime"
    },
    {
      icon: <FaFilePdf className="text-2xl" />,
      title: "Detailed PDF Materials",
      description: "Comprehensive guides and templates for easy learning"
    },
    {
      icon: <FaUsers className="text-2xl" />,
      title: "Private Telegram Group",
      description: "Exclusive mentorship and networking community"
    },
    {
      icon: <FaComments className="text-2xl" />,
      title: "Daily Q&A & Support",
      description: "Get your questions answered every day by experts"
    },
    {
      icon: <FaCalendarAlt className="text-2xl" />,
      title: "Monthly Live Classes",
      description: "Interactive live sessions once every month"
    },
    {
      icon: <FaInfinity className="text-2xl" />,
      title: "Lifetime Access",
      description: "No renewals needed - learn at your own pace forever"
    }
  ]

  const targetAudience = [
    {
      icon: <FaUserGraduate className="text-xl" />,
      title: "Absolute Beginners",
      description: "No prior experience needed"
    },
    {
      icon: <FaUserGraduate className="text-xl" />,
      title: "Students",
      description: "Looking to earn while studying"
    },
    {
      icon: <FaUserMd className="text-xl" />,
      title: "Struggling Individuals",
      description: "Wanting to improve their financial situation"
    },
    {
      icon: <FaBriefcase className="text-xl" />,
      title: "9–5 Workers",
      description: "Seeking additional income streams"
    },
    {
      icon: <FaUserFriends className="text-xl" />,
      title: "Anybody & Everybody",
      description: "This course is designed for ALL"
    }
  ]

  return (
    <section className="bg-black text-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            COURSE <span className="text-[#D4AF37]">FEATURES</span>
          </h2>
          <div className="flex justify-center mb-6">
            <div className="w-24 h-1 bg-gradient-to-r from-[#D4AF37] to-[#FFB6C1] rounded-full"></div>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Everything you need to succeed in AI writing and earn legit income
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 md:gap-16">
          
          {/* Left Column - Course Features */}
          <div>
            <div className="mb-10">
              <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                <div className="p-2 bg-[#D4AF37] rounded-lg">
                  <FaVideo className="text-black" />
                </div>
                <span>What's Included</span>
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {courseFeatures.map((feature, index) => (
                  <div 
                    key={index} 
                    className="bg-gray-900/50 border border-gray-800 rounded-xl p-5 hover:border-[#D4AF37]/50 transition-all duration-300 group"
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-black rounded-lg border border-gray-700 group-hover:border-[#D4AF37] transition-colors">
                        <span className="text-[#D4AF37]">{feature.icon}</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-lg mb-2 group-hover:text-[#D4AF37] transition-colors">
                          {feature.title}
                        </h4>
                        <p className="text-gray-300 text-sm">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Divider */}
            <div className="relative my-10">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-800"></div>
              </div>
              <div className="relative flex justify-center">
                <span className="bg-black px-4 text-gray-500">⸻</span>
              </div>
            </div>

            {/* CTA Card */}
            <div className="bg-gradient-to-br from-gray-900 to-black border border-[#D4AF37]/30 rounded-2xl p-6 text-center">
              <h4 className="text-xl font-bold mb-3">Ready to Transform Your Income?</h4>
              <p className="text-gray-300 mb-6">Join 8,000+ successful students today</p>
              <button className="bg-[#D4AF37] text-black font-bold px-8 py-3 rounded-lg hover:bg-[#B8860B] transition-all duration-300 w-full">
                Enroll Now - Limited Spots
              </button>
            </div>
          </div>

          {/* Right Column - Target Audience */}
          <div>
            <div className="sticky top-8">
              <div className="mb-10">
                <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                  <div className="p-2 bg-[#D4AF37] rounded-lg">
                    <FaUserFriends className="text-black" />
                  </div>
                  <span>WHO THIS IS FOR</span>
                </h3>
                
                <div className="space-y-4">
                  {targetAudience.map((person, index) => (
                    <div 
                      key={index} 
                      className="flex items-center gap-4 p-4 bg-gray-900/30 rounded-xl border border-gray-800 hover:border-[#D4AF37]/30 transition-colors group"
                    >
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-gradient-to-br from-[#D4AF37] to-[#FFB6C1] rounded-full flex items-center justify-center">
                          <span className="text-black">{person.icon}</span>
                        </div>
                      </div>
                      <div className="flex-grow">
                        <div className="flex items-center gap-3 mb-1">
                          <div className="w-4 h-4 bg-[#D4AF37] rounded-full flex items-center justify-center">
                            <FaUserGraduate className="text-xs text-black" />
                          </div>
                          <h4 className="font-bold text-lg group-hover:text-[#D4AF37] transition-colors">
                            {person.title}
                          </h4>
                        </div>
                        <p className="text-gray-300 text-sm">
                          {person.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Stats Box */}
              <div className="bg-gray-900 rounded-2xl p-6 border border-gray-800">
                <h4 className="text-xl font-bold mb-4 text-center">Course Statistics</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-3 bg-black rounded-lg">
                    <p className="text-3xl font-bold text-[#D4AF37]">8K+</p>
                    <p className="text-sm text-gray-300">Students</p>
                  </div>
                  <div className="text-center p-3 bg-black rounded-lg">
                    <p className="text-3xl font-bold text-[#D4AF37]">98%</p>
                    <p className="text-sm text-gray-300">Success Rate</p>
                  </div>
                  <div className="text-center p-3 bg-black rounded-lg">
                    <p className="text-3xl font-bold text-[#D4AF37]">50+</p>
                    <p className="text-sm text-gray-300">Countries</p>
                  </div>
                  <div className="text-center p-3 bg-black rounded-lg">
                    <p className="text-3xl font-bold text-[#D4AF37]">24/7</p>
                    <p className="text-sm text-gray-300">Support</p>
                  </div>
                </div>
              </div>

              {/* Testimonial */}
              <div className="mt-6 bg-gradient-to-r from-gray-900 to-black border border-gray-800 rounded-xl p-5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-[#D4AF37] rounded-full flex items-center justify-center">
                    <span className="text-black font-bold">J</span>
                  </div>
                  <div>
                    <p className="font-bold">John D.</p>
                    <p className="text-sm text-gray-400">Course Graduate</p>
                  </div>
                </div>
                <p className="text-gray-300 italic">
                  "As a complete beginner, I was skeptical. But Coach Olivia's course made everything so simple. Now I earn consistently!"
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features