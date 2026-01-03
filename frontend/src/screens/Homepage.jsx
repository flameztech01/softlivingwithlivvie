import React from "react";
import Header from "../components/Header.jsx";
import Hero from "../components/Hero.jsx";
import Hero2 from "../components/Hero2.jsx";
import Learn from "../components/Learn.jsx";
import Features from "../components/Features.jsx";
import AdsVideo from "../components/AdsVideo.jsx";
import Testimonials from "../components/Testimonials.jsx";
import Pricing from "../components/Pricing.jsx";
import Footer from "../components/Footer.jsx";

const Homepage = () => {
  return (
    <div>
      <Header />
      <section id="home">
        <Hero />
      </section>
      <section id="about">
        <Hero2 />
      </section>
      <section id="learn">
        <Learn />
      </section>
      <section id="features">
        <Features />
      </section>
      <section id="ads-video">
        <AdsVideo />
      </section>
      <section id="testimonials">
        <Testimonials />
      </section>
      <section id="pricing">
        <Pricing />
      </section>
      <section id="contact">
        <Footer />
      </section>
    </div>
  );
};

export default Homepage;