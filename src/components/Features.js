import React, { useState } from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Features = () => {
  const posts = [
    {
      img: require("../assets/slip-gaji.png"),
    },
    {
      img: require("../assets/manajemen-karyawan.png"),
    },
    {
      img: require("../assets/sosial-media.png"),
    },
    {
      img: require("../assets/absensi.png"),
    },
    {
      img: require("../assets/jadwal.png"),
    },
    {
      img: require("../assets/izin-cuti.png"),
    },
    {
      img: require("../assets/peraturan-perusahaan.png"),
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
    <section id="feature" className="w-full relative bg-sprinkle">
      <div className="container px-6 py-10 mx-auto">
        <h1 className="text-3xl font-semibold text-center text-gray-800 capitalize lg:text-4xl ">
          Bagaimana Mobile Apps GajiHub
          <br /> Mentransformasi Perusahaan Anda?
        </h1>

        <Slider ref={setSliderRef} {...sliderSettings}>
          {posts.map((item, index) => (
            <div
              key={index}
              className="flex flex-col justify-center text-center items-center gap-3 p-8 transition-colors duration-300 transform mx-auto cursor-pointer group hover:bg-[#e53e6a] rounded-xl mt-3"
            >
              <img
                className="object-cover rounded-xl shadow-black"
                src={item.img}
                loading="lazy"
                alt=""
              />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Features;
