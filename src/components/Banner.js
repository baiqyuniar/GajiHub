import React from "react";

const Banner = () => {
  return (
    <div className="bg-[#e53e6a]">
      <div className="px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
          <div className="flex flex-col mb-16 sm:text-center sm:mb-0">
            <div className="max-w-xl mb-4 md:mx-auto sm:text-center lg:max-w-2xl mt-12">
              <h2 className="mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-white sm:text-5xl md:mx-auto">
                Daftar GajiHub Sekarang
              </h2>
              <p className="text-base text-gray-300 md:text-lg">
                Dapatkan aplikasi absensi beserta software payroll terlengkap!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
