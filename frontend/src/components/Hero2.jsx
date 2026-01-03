import React from "react";
import {
  FaRobot,
  FaGlobe,
  FaGraduationCap,
  FaShieldAlt,
  FaMoneyBillWave,
  FaHandsHelping,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Hero2 = () => {
  const features = [
    {
      icon: <FaRobot className="text-3xl" />,
      title: "AI-Powered Writing",
      description:
        "Earn legit income using advanced AI tools for content creation",
    },
    {
      icon: <FaGlobe className="text-3xl" />,
      title: "Works Worldwide",
      description:
        "Accessible from anywhere, payments sent directly to your bank",
    },
    {
      icon: <FaGraduationCap className="text-3xl" />,
      title: "Full Mentorship",
      description: "Step-by-step guidance from expert coaches",
    },
    {
      icon: <FaShieldAlt className="text-3xl" />,
      title: "Tested & Trusted",
      description: "Proven system with guaranteed results",
    },
    {
      icon: <FaMoneyBillWave className="text-3xl" />,
      title: "No Stress Income",
      description: "Legitimate earnings - no betting or referrals required",
    },
    {
      icon: <FaHandsHelping className="text-3xl" />,
      title: "Community Support",
      description: "Join 8000+ successful students in our network",
    },
  ];

  return (
    <section className="bg-black text-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-block mb-4">
            <span className="bg-[#D4AF37] text-black text-sm font-semibold px-4 py-2 rounded-full">
              NEW BEGINNERS COURSE
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            AI UPDATE <span className="text-[#D4AF37]">FOR BEGINNERS</span>
          </h2>
          <p className="text-xl text-gray-300">
            by{" "}
            <span className="text-[#D4AF37] font-semibold">
              Softliving with Livvie
            </span>
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 md:gap-12">
          {/* Main Content */}
          <div className="lg:w-2/3">
            <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl p-6 md:p-8 mb-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-[#D4AF37] rounded-lg">
                  <FaRobot className="text-2xl text-black" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold">HOW IT WORKS</h3>
              </div>

              <div className="space-y-6">
                <p className="text-xl leading-relaxed">
                  Earn legit income writing with AI —{" "}
                  <span className="text-[#D4AF37] font-semibold">
                    no betting, no referrals, no stress
                  </span>
                  .
                </p>

                <div className="bg-gray-900/50 p-6 rounded-xl border-l-4 border-[#D4AF37]">
                  <p className="text-lg md:text-xl">
                    <span className="text-[#D4AF37] font-bold">
                      Works worldwide
                    </span>
                    , pays directly to your bank, and includes full mentorship.
                  </p>
                </div>

                <p className="text-xl font-bold text-[#D4AF37]">
                  Tested, trusted, and guaranteed results.
                </p>
              </div>

              <div className="mt-8 pt-8 border-t border-gray-800">
                <Link
                  to="https://t.me/TheyluvOlivia"
                  target="_blank"
                  rel='noopener noreferrer'
                  className="bg-[#D4AF37] text-black font-bold px-8 py-4 rounded-lg hover:bg-[#B8860B] transition-all duration-300 transform hover:scale-105 text-lg w-full md:w-auto"
                >
                  Start Your AI Journey Now
                </Link>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-gray-900 p-4 rounded-xl text-center">
                <p className="text-3xl font-bold text-[#D4AF37]">8K+</p>
                <p className="text-sm text-gray-300">Active Students</p>
              </div>
              <div className="bg-gray-900 p-4 rounded-xl text-center">
                <p className="text-3xl font-bold text-[#D4AF37]">100%</p>
                <p className="text-sm text-gray-300">Guaranteed Results</p>
              </div>
              <div className="bg-gray-900 p-4 rounded-xl text-center">
                <p className="text-3xl font-bold text-[#D4AF37">24/7</p>
                <p className="text-sm text-gray-300">Support Available</p>
              </div>
              <div className="bg-gray-900 p-4 rounded-xl text-center">
                <p className="text-3xl font-bold text-[#D4AF37]">100+</p>
                <p className="text-sm text-gray-300">Countries</p>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="lg:w-1/3">
            <div className="sticky top-8">
              <h3 className="text-2xl font-bold mb-6 text-center lg:text-left">
                What You Get
              </h3>
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="bg-gray-900/50 hover:bg-gray-800/50 p-4 rounded-xl border border-gray-800 hover:border-[#D4AF37]/30 transition-all duration-300"
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-black rounded-lg border border-gray-800">
                        <span className="text-[#D4AF37]">{feature.icon}</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-lg mb-1">
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

              {/* CTA Box */}
              <div className="mt-8 bg-gradient-to-r from-[#D4AF37] to-[#B8860B] p-6 rounded-xl text-center">
                <h4 className="text-xl font-bold text-black mb-2">
                  Limited Time Offer
                </h4>
                <p className="text-black mb-4">
                  Get started today and receive 1-on-1 coaching session
                </p>
                <button className="bg-black text-white font-bold px-6 py-3 rounded-lg hover:bg-gray-900 transition-colors w-full">
                  Enroll Now - 50% OFF
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonial Preview */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 mb-6">
            <div className="w-8 h-0.5 bg-[#D4AF37]"></div>
            <span className="text-[#D4AF37] font-semibold">
              SUCCESS STORIES
            </span>
            <div className="w-8 h-0.5 bg-[#D4AF37]"></div>
          </div>
          <p className="text-xl italic text-gray-300 max-w-3xl mx-auto">
            "Thanks to Coach Olivia's AI course, I went from zero to earning
            $2,500 monthly writing with AI tools. Life-changing!"
          </p>
          <p className="mt-4 text-[#D4AF37]">— Sarah T., Course Graduate</p>
        </div>
      </div>
    </section>
  );
};

export default Hero2;
