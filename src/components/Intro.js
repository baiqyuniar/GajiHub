import React from "react";

const Intro = () => {
  return (
    <div className="px-4 py-16 mt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="flex flex-col items-center justify-between lg:flex-row-reverse">
        <div className="mb-10 lg:max-w-lg lg:pr-5 lg:mb-0">
          <div className="max-w-xl mb-6">
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
              Semua proses manajemen HR kini dalam satu sistem
            </h2>
            <p className="text-base text-gray-700 md:text-lg">
              Dengan satu platform untuk data karyawan, HR, dan operasional,
              semua orang dapat mengakses data secara real time untuk membuat
              keputusan yang tepat. Anda dapat mengandalkan software payroll dan
              HR GajiHub untuk menghadirkan teknologi yang mendorong pertumbuhan
              bisnis dan menjaga keamanan data Anda.
            </p>
          </div>
        </div>
        <div className="relative md:mr-10 lg:w-1/2">
          <img
            className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
            src={require("../assets/gajihub-screenshot-payroll.jpg")}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Intro;
