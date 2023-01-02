import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Pricing from "../components/Pricing";
import Whatsapp from "../components/Whatsapp";

const Harga = () => {
  return (
    <div>
      <Header />
      <div className="md:mt-24">
        <Pricing />
      </div>
      <Whatsapp />
      <Footer />
    </div>
  );
};

export default Harga;
