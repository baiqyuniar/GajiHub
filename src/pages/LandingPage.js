import React from "react";
import Customer from "../components/Customer";
import Features from "../components/Features";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Intro from "../components/Intro";
import Pricing from "../components/Pricing";
import Published from "../components/Published";
import Services from "../components/Services";
import Whatsapp from "../components/Whatsapp";

const LandingPage = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Intro />
      <Services />
      <Features />
      <Pricing />
      <Customer />
      <Published />
      <Whatsapp />
      <Footer />
    </div>
  );
};

export default LandingPage;
