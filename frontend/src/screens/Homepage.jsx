import React from 'react'
import Header from '../components/Header.jsx'
import Hero from '../components/Hero.jsx'
import Hero2 from '../components/Hero2.jsx'
import Learn from '../components/Learn.jsx'
import Features from '../components/Features.jsx'
import Testimonials from '../components/Testimonials.jsx'

const Homepage = () => {
  return (
    <div>
      <Header />
      <Hero />
        <Hero2 />
        <Learn />
        <Features />
        <Testimonials />
    </div>
  )
}

export default Homepage
