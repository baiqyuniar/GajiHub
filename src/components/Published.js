import React, { useState } from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Published = () => {
  const posts = [
    {
      img: require("../assets/infokomputer.png"),
    },
    {
      img: require("../assets/investing.png"),
    },
    {
      img: require("../assets/itech.png"),
    },
    {
      img: require("../assets/kabarbisnis.png"),
    },
    {
      img: require("../assets/kedaulatan-rakyat.png"),
    },
    {
      img: require("../assets/kontan.png"),
    },
    {
      img: require("../assets/linenews.png"),
    },
    {
      img: require("../assets/siar.png"),
    },
    {
      img: require("../assets/tagar.png"),
    },
    {
      img: require("../assets/tempoco.png"),
    },
  ];

  const [sliderRef, setSliderRef] = useState(null);

  const sliderSettings = {
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: true,
    speed: 500,
    autoplay: true,
    lazyLoad: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <section id="produk" className="w-full relative bg-[#e53e6a]">
      <div className="container px-6 py-10 mx-auto">
        <h1 className="text-3xl z-10 font-semibold text-center text-white capitalize lg:text-4xl my-8">
          Telah Diliput Oleh
        </h1>

        <Slider ref={setSliderRef} {...sliderSettings}>
          {posts.map((item, index) => (
            <div
              key={index}
              className="flex flex-col justify-center items-center transition-colors duration-300 transform cursor-default group rounded-xl my-12"
            >
              <img
                src={item.img}
                loading="lazy"
                alt="published"
                className="object-fill bg-white rounded-full p-4"
              />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Published;
