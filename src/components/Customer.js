import React from "react";
import { useNavigate } from "react-router-dom";

const Customer = () => {
  const navigate = useNavigate();
  return (
    <div className="px-4 z-10 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <h2 className="mb-6 font-sans text-3xl font-bold tracking-wide text-slate-800 sm:text-xl">
          Mereka Yang Sudah Menggunakan <br />
          <span className="font-extrabold sm:text-4xl">
            Software Payroll Gajihub
          </span>
        </h2>
      </div>
      <div className="grid max-w-screen-lg gap-8 row-gap-5 mb-8 sm:grid-cols-2 lg:grid-cols-3 sm:mx-auto">
        <div>
          <div className="relative w-full transition-shadow duration-300 hover:shadow-xl">
            <img
              className="object-cover w-full h-56 rounded shadow-lg sm:h-64 md:h-80 lg:h-96"
              src={require("../assets/Anna.png")}
              alt=""
            />
            <a
              onClick={() => navigate("https://youtu.be/8q6oy5wRTrA")}
              target="_blank"
              aria-label="Play Video"
              className="absolute inset-0 flex items-center justify-center w-full h-full transition-colors duration-300 bg-gray-900 bg-opacity-50 group hover:bg-opacity-25"
            >
              <div className="flex items-center justify-center w-16 h-16 transition duration-300 transform bg-gray-100 rounded-full shadow-2xl group-hover:scale-110">
                <svg
                  className="w-10 text-gray-900"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M16.53,11.152l-8-5C8.221,5.958,7.833,5.949,7.515,6.125C7.197,6.302,7,6.636,7,7v10 c0,0.364,0.197,0.698,0.515,0.875C7.667,17.958,7.833,18,8,18c0.184,0,0.368-0.051,0.53-0.152l8-5C16.822,12.665,17,12.345,17,12 S16.822,11.335,16.53,11.152z" />
                </svg>
              </div>
            </a>
          </div>
          <div>
            <p className="my-6 font-base text-center text-black">
              Mengurus payroll di akhir bulan bisa sangat melelahkan. Tapi
              semenjak make GajiHub, cuman perlu klik klik aja langsung beres!
            </p>
          </div>
          <div className="flex items-center justify-center">
            <div className="inline-flex items-center justify-center h-12 px-6 font-semibold tracking-wide text-white rounded-lg transition duration-200 rounded shadow-md bg-[#e53e6a]  focus:shadow-outline focus:outline-none">
              Ana, Owner Batiklurik.id
            </div>
          </div>
        </div>

        <div>
          <div className="relative w-full transition-shadow duration-300 hover:shadow-xl">
            <img
              className="object-cover w-full h-56 rounded shadow-lg sm:h-64 md:h-80 lg:h-96"
              src={require("../assets/Adi.png")}
              alt=""
            />
            <a
              onClick={() => navigate("https://youtu.be/09i9VKDpx8w")}
              target="_blank"
              aria-label="Play Video"
              className="absolute inset-0 flex items-center justify-center w-full h-full transition-colors duration-300 bg-gray-900 bg-opacity-50 group hover:bg-opacity-25"
            >
              <div className="flex items-center justify-center w-16 h-16 transition duration-300 transform bg-gray-100 rounded-full shadow-2xl group-hover:scale-110">
                <svg
                  className="w-10 text-gray-900"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M16.53,11.152l-8-5C8.221,5.958,7.833,5.949,7.515,6.125C7.197,6.302,7,6.636,7,7v10 c0,0.364,0.197,0.698,0.515,0.875C7.667,17.958,7.833,18,8,18c0.184,0,0.368-0.051,0.53-0.152l8-5C16.822,12.665,17,12.345,17,12 S16.822,11.335,16.53,11.152z" />
                </svg>
              </div>
            </a>
          </div>
          <div>
            <p className="my-6 font-base text-center text-black">
              Karyawan pada suka menggunakan GajiHub, karena mau reimburs atau
              klaim lembur jadi ga repot lagi.
            </p>
          </div>
          <div className="flex items-center  justify-center">
            <div className="inline-flex items-center justify-center h-12 px-6 font-semibold tracking-wide text-white rounded-lg transition duration-200 rounded shadow-md bg-[#e53e6a] focus:shadow-outline focus:outline-none">
              Adi, Founder Niffly Jewelry
            </div>
          </div>
        </div>

        <div>
          <div className="relative w-full transition-shadow duration-300 hover:shadow-xl">
            <img
              className="object-cover w-full h-56 rounded shadow-lg sm:h-64 md:h-80 lg:h-96"
              src={require("../assets/Ferry.png")}
              alt=""
            />
            <a
              onClick={() => navigate("https://youtu.be/n8MYkAllSVA")}
              target="_blank"
              aria-label="Play Video"
              className="absolute inset-0 flex items-center justify-center w-full h-full transition-colors duration-300 bg-gray-900 bg-opacity-50 group hover:bg-opacity-25"
            >
              <div className="flex items-center justify-center w-16 h-16 transition duration-300 transform bg-gray-100 rounded-full shadow-2xl group-hover:scale-110">
                <svg
                  className="w-10 text-gray-900"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M16.53,11.152l-8-5C8.221,5.958,7.833,5.949,7.515,6.125C7.197,6.302,7,6.636,7,7v10 c0,0.364,0.197,0.698,0.515,0.875C7.667,17.958,7.833,18,8,18c0.184,0,0.368-0.051,0.53-0.152l8-5C16.822,12.665,17,12.345,17,12 S16.822,11.335,16.53,11.152z" />
                </svg>
              </div>
            </a>
          </div>
          <div>
            <p className="my-6 font-base text-center text-black">
              Mengurus pajak dan bpjs karyawan itu sungguh membingungkan. Tapi
              dengan GajiHub, kita tau beres deh, semua sudah dihitungkan oleh
              GajiHub
            </p>

            <div className="flex items-center justify-center">
              <div className="inline-flex items-center justify-center h-12 px-6 font-semibold tracking-wide text-white rounded-lg transition duration-200 rounded shadow-md bg-[#e53e6a] focus:shadow-outline focus:outline-none">
                Ferry, Co Founder Kerjoo
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customer;
