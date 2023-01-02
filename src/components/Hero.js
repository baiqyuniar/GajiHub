import React from "react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full relative lg:mt-16 bg-[#e53e6a]">
      <div className="px-4 py-8  mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="absolute inset-x-0 bottom-0">
          <svg
            viewBox="0 0 224 12"
            fill="currentColor"
            className="w-full -mb-1  text-white"
            preserveAspectRatio="none"
          >
            <path d="M0,0 C48.8902582,6.27314026 86.2235915,9.40971039 112,9.40971039 C137.776408,9.40971039 175.109742,6.27314026 224,0 L224,12.0441132 L0,12.0441132 L0,0 Z" />
          </svg>
        </div>
        <div className="flex flex-col-reverse items-center justify-between w-full mb-10 lg:flex-row">
          <div className="mb-16 lg:mb-0 lg:max-w-lg lg:pr-5">
            <div className="max-w-xl mb-6">
              <h2 className="font-sans text-5xl font-bold tracking-wide tracking-tight text-gray-900 sm:text-4xl sm:leading-none max-w-lg mb-12">
                Sudahi Semua Kerepotan <br />
                Pengelolaan Payroll dan HR <br />
                di Bisnis Anda
              </h2>
              <p className="text-gray-700 text-base md:text-lg">
                Dengan software payroll GajiHub, Anda bisa mengelola proses
                penggajian, HR dan absensi dalam satu software terintegrasi.
                Hitung gaji, pajak, pengajuan cuti, absensi dan pengelolaan data
                karyawan jadi lebih praktis.
              </p>
            </div>
            <div className="flex items-center space-x-8 lg:flex mt-12">
              <div>
                <a
                  onClick={() => navigate("/daftar")}
                  className="uppercase inline-flex items-center hover:cursor-pointer justify-center h-12 px-6 font-medium tracking-wide text-black transition duration-200 rounded-full shadow-md bg-yellow-400 hover:bg-yellow-600 focus:shadow-outline focus:outline-none"
                  aria-label="Sign up"
                  title="Sign up"
                >
                  Daftar{" "}
                  <span className="font-bold ml-1">Gratis Selamanya</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="32"
                    height="32"
                    className="ml-2"
                  >
                    <path
                      fill="#292D32"
                      opacity=".25"
                      d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                    ></path>
                    <path
                      fill="#fff"
                      d="M16.03 11.4699L13.03 8.46994C12.74 8.17994 12.26 8.17994 11.97 8.46994C11.68 8.75994 11.68 9.23994 11.97 9.52994L13.69 11.2499H8.5C8.09 11.2499 7.75 11.5899 7.75 11.9999C7.75 12.4099 8.09 12.7499 8.5 12.7499H13.69L11.97 14.4699C11.68 14.7599 11.68 15.2399 11.97 15.5299C12.12 15.6799 12.31 15.7499 12.5 15.7499C12.69 15.7499 12.88 15.6799 13.03 15.5299L16.03 12.5299C16.32 12.2399 16.32 11.7599 16.03 11.4699Z"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center lg:w-1/2">
            <img
              className="object-cover mt-4 lg:mt-8"
              src={require("../assets/gajihub-software-payroll.png")}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
