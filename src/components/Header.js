import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [dropdownOpen, setdropdownOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="w-full top-0 z-20 lg:fixed bg-[#e53e6a] ">
      <div className="px-4 sticky z-10 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="relative flex items-center text-white justify-between">
          <a
            onClick={() => navigate("/")}
            aria-label="Company"
            title="Company"
            className="inline-flex items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1362.17 358.5"
              className="w-32 h-16"
              fill="white"
            >
              <g id="Layer_2" data-name="Layer 2">
                <g id="Layer_1-2" data-name="Layer 1">
                  <path
                    d="M266 110.18c-15.36-12-41.92-12.17-74.65 11.24l-16.83 12-40 28.64-29.56-32.4a19.78 19.78 0 0 0-29.22 26.66l41.4 45.36a19.79 19.79 0 0 0 26.12 2.75s80.49-65.09 80.93-65.42c10.54-9 20.67-12.79 34.73-9.44 11.39 2.72 20.71 12.1 20.88 21.44 2.73-16.89-2.53-32.01-13.8-40.83Z"
                    className="cls-1"
                  />
                  <path
                    d="M259.84 144c-3-1-14.35-4.52-28.24 7.25l-29 23.42 18.09-6.79a9.18 9.18 0 0 1 11.64 12.23 100.64 100.64 0 0 1-103.18 60c-46.27-4.91-83.8-42.2-89-88.45a100.41 100.41 0 0 1 170-83.41 19.79 19.79 0 1 0 27.92-28.05A139.6 139.6 0 0 0 128 .51C59.63 6.27 4.72 62.36.3 130.86c-5.25 81.42 59.49 149.35 139.81 149.35a140.15 140.15 0 0 0 122.4-72 97.37 97.37 0 0 0 6.5-13.25c8.41-22.41 8.08-45.21-9.17-50.96ZM884.05 31.28a11.3 11.3 0 0 0-11.3 11.3v101.87H731.53V42.58a11.3 11.3 0 1 0-22.6 0v226.33a11.3 11.3 0 1 0 22.6 0V167.05h141.22v101.86a11.3 11.3 0 0 0 22.6 0V42.58a11.3 11.3 0 0 0-11.3-11.3ZM572.69 77.64a19.78 19.78 0 0 0-19.78 19.78v208a13.49 13.49 0 0 1-13.5 13.5h-8.16a19.78 19.78 0 0 0-19.78 19.78 19.78 19.78 0 0 0 19.78 19.78h8.16a53 53 0 0 0 53.05-53.05v-208a19.76 19.76 0 0 0-19.77-19.79Z"
                    className="cls-1"
                  />
                  <circle cx="572.69" cy="25.27" r="25.27" className="cls-1" />
                  <path
                    d="M649.71 77.64a19.78 19.78 0 0 0-19.78 19.78v163a19.78 19.78 0 0 0 19.78 19.78 19.78 19.78 0 0 0 19.78-19.78v-163a19.77 19.77 0 0 0-19.78-19.78ZM649.71 0a25.27 25.27 0 1 0 0 50.54 25.27 25.27 0 0 0 0-50.54ZM1361.53 167.39c-5.12-46.39-42.53-83.85-88.87-89.09a101.12 101.12 0 0 0-90.46 36.9V42.58a11.3 11.3 0 1 0-22.6 0v136.34a101.29 101.29 0 1 0 201.93-11.53Zm-22.62 21.79a78.71 78.71 0 1 1-88.29-88.29 78.92 78.92 0 0 1 88.29 88.29ZM1111.44 77.64a11.3 11.3 0 0 0-11.3 11.3v93.85c0 39.11-30 72.81-69.05 74.73a72.79 72.79 0 0 1-76.38-72.62v-96a11.3 11.3 0 0 0-22.6 0v96a95.26 95.26 0 0 0 168 61.55v22.46a11.3 11.3 0 1 0 22.6 0v-180a11.29 11.29 0 0 0-11.27-11.27ZM511.48 178.93a101.66 101.66 0 1 0-39.56 80.12v1.39a19.78 19.78 0 0 0 39.56 0v-81.51Zm-101.29 61.73a61.73 61.73 0 1 1 61.73-61.73 61.81 61.81 0 0 1-61.73 61.73Z"
                    className="cls-1"
                  />
                </g>
              </g>
            </svg>
          </a>
          <ul className="flex items-center hidden space-x-8 lg:flex">
            <li>
              <div
                onClick={() => setdropdownOpen(!dropdownOpen)}
                className="font-medium hover:cursor-pointer tracking-wide text-white transition-colors duration-200 flex items-center justify-center"
              >
                Solusi
                <span>
                  <svg
                    className="fill-current ml-2 h-4 w-4 transform group-hover:-rotate-180
        transition duration-150 ease-in-out"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </span>
              </div>

              <div
                className={`${
                  dropdownOpen
                    ? `top-full opacity-100 visible`
                    : "top-[110%] invisible opacity-0"
                } absolute center z-40 mt-2 w-auto rounded border-light bg-slate-100 rounded-md py-5 shadow-card transition-all`}
              >
                <a
                  nav
                  className="block py-2 px-5 hover:bg-[#e53e6a] text-base font-semibold text-gray-600 hover:bg-opacity-40 hover:rounded-lg"
                >
                  Payroll
                </a>
                <a
                  href="/"
                  className="block py-2 px-5 hover:bg-[#e53e6a] text-base font-semibold text-gray-600 hover:bg-opacity-40 hover:rounded-lg"
                >
                  Absensi
                </a>
                <a
                  href="/"
                  className="block py-2 px-5 hover:bg-[#e53e6a] text-base font-semibold text-gray-600 hover:bg-opacity-40 hover:rounded-lg"
                >
                  Kelola PPh 21
                </a>
                <a
                  href="/"
                  className="block py-2 px-5 hover:bg-[#e53e6a] text-base font-semibold text-gray-600 hover:bg-opacity-40 hover:rounded-lg"
                >
                  BPJS
                </a>
                <a
                  href="/"
                  className="block py-2 px-5 hover:bg-[#e53e6a] text-base font-semibold text-gray-600 hover:bg-opacity-40 hover:rounded-lg"
                >
                  Akuntansi
                </a>
                <a
                  href="/"
                  className="block py-2 px-5 hover:bg-[#e53e6a] text-base font-semibold text-gray-600 hover:bg-opacity-40 hover:rounded-lg"
                >
                  ESS Employee Self Service
                </a>
                <a
                  href="/"
                  className="block py-2 px-5 hover:bg-[#e53e6a] text-base font-semibold text-gray-600 hover:bg-opacity-40 hover:rounded-lg"
                >
                  Kelola Cuti & Izin
                </a>
                <a
                  href="/"
                  className="block py-2 px-5 hover:bg-[#e53e6a] text-base font-semibold text-gray-600 hover:bg-opacity-40 hover:rounded-lg"
                >
                  Analisa Data
                </a>
              </div>
            </li>
            <li>
              <a
                onClick={() => navigate("/harga")}
                aria-label="Our product"
                title="Our product"
                className="font-medium tracking-wide text-white hover:cursor-pointer transition-colors duration-200 hover:text-deep-purple-accent-400"
              >
                Harga
              </a>
            </li>
            <li>
              <a
                onClick={() => navigate("/blog")}
                aria-label="Product pricing"
                title="Product pricing"
                className="font-medium tracking-wide text-white hover:cursor-pointer transition-colors duration-200 hover:text-deep-purple-accent-400"
              >
                Blog
              </a>
            </li>
            <li>
              <a
                onClick={() => navigate("/login")}
                aria-label="About us"
                title="About us"
                className="font-medium tracking-wide text-white hover:cursor-pointer transition-colors duration-200 hover:text-deep-purple-accent-400"
              >
                Login
              </a>
            </li>
          </ul>
          <ul className="flex items-center hidden space-x-8 lg:flex">
            <li>
              <a
                onClick={() => navigate("/daftar")}
                className="uppercase inline-flex items-center hover:cursor-pointer justify-center h-12 px-6 font-medium tracking-wide text-black transition duration-200 rounded-full shadow-md bg-yellow-400 hover:bg-yellow-600 focus:shadow-outline focus:outline-none"
                aria-label="Sign up"
                title="Sign up"
              >
                Daftar <span className="font-bold ml-1">Gratis</span>
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
            </li>
          </ul>
          <div className="lg:hidden">
            <button
              aria-label="Open Menu"
              title="Open Menu"
              className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline"
              onClick={() => setIsMenuOpen(true)}
            >
              <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                />
                <path
                  fill="currentColor"
                  d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                />
                <path
                  fill="currentColor"
                  d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                />
              </svg>
            </button>
            {isMenuOpen && (
              <div className="absolute top-0 left-0 w-full">
                <div className="p-5 bg-white border rounded shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <a
                        onClick={() => navigate("/")}
                        aria-label="Company"
                        title="Company"
                        className="inline-flex items-center hover:cursor-pointer"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 1362.17 358.5"
                          className="w-32 h-16"
                          fill="#e53e6a"
                        >
                          <g id="Layer_2" data-name="Layer 2">
                            <g id="Layer_1-2" data-name="Layer 1">
                              <path
                                d="M266 110.18c-15.36-12-41.92-12.17-74.65 11.24l-16.83 12-40 28.64-29.56-32.4a19.78 19.78 0 0 0-29.22 26.66l41.4 45.36a19.79 19.79 0 0 0 26.12 2.75s80.49-65.09 80.93-65.42c10.54-9 20.67-12.79 34.73-9.44 11.39 2.72 20.71 12.1 20.88 21.44 2.73-16.89-2.53-32.01-13.8-40.83Z"
                                className="cls-1"
                              />
                              <path
                                d="M259.84 144c-3-1-14.35-4.52-28.24 7.25l-29 23.42 18.09-6.79a9.18 9.18 0 0 1 11.64 12.23 100.64 100.64 0 0 1-103.18 60c-46.27-4.91-83.8-42.2-89-88.45a100.41 100.41 0 0 1 170-83.41 19.79 19.79 0 1 0 27.92-28.05A139.6 139.6 0 0 0 128 .51C59.63 6.27 4.72 62.36.3 130.86c-5.25 81.42 59.49 149.35 139.81 149.35a140.15 140.15 0 0 0 122.4-72 97.37 97.37 0 0 0 6.5-13.25c8.41-22.41 8.08-45.21-9.17-50.96ZM884.05 31.28a11.3 11.3 0 0 0-11.3 11.3v101.87H731.53V42.58a11.3 11.3 0 1 0-22.6 0v226.33a11.3 11.3 0 1 0 22.6 0V167.05h141.22v101.86a11.3 11.3 0 0 0 22.6 0V42.58a11.3 11.3 0 0 0-11.3-11.3ZM572.69 77.64a19.78 19.78 0 0 0-19.78 19.78v208a13.49 13.49 0 0 1-13.5 13.5h-8.16a19.78 19.78 0 0 0-19.78 19.78 19.78 19.78 0 0 0 19.78 19.78h8.16a53 53 0 0 0 53.05-53.05v-208a19.76 19.76 0 0 0-19.77-19.79Z"
                                className="cls-1"
                              />
                              <circle
                                cx="572.69"
                                cy="25.27"
                                r="25.27"
                                className="cls-1"
                              />
                              <path
                                d="M649.71 77.64a19.78 19.78 0 0 0-19.78 19.78v163a19.78 19.78 0 0 0 19.78 19.78 19.78 19.78 0 0 0 19.78-19.78v-163a19.77 19.77 0 0 0-19.78-19.78ZM649.71 0a25.27 25.27 0 1 0 0 50.54 25.27 25.27 0 0 0 0-50.54ZM1361.53 167.39c-5.12-46.39-42.53-83.85-88.87-89.09a101.12 101.12 0 0 0-90.46 36.9V42.58a11.3 11.3 0 1 0-22.6 0v136.34a101.29 101.29 0 1 0 201.93-11.53Zm-22.62 21.79a78.71 78.71 0 1 1-88.29-88.29 78.92 78.92 0 0 1 88.29 88.29ZM1111.44 77.64a11.3 11.3 0 0 0-11.3 11.3v93.85c0 39.11-30 72.81-69.05 74.73a72.79 72.79 0 0 1-76.38-72.62v-96a11.3 11.3 0 0 0-22.6 0v96a95.26 95.26 0 0 0 168 61.55v22.46a11.3 11.3 0 1 0 22.6 0v-180a11.29 11.29 0 0 0-11.27-11.27ZM511.48 178.93a101.66 101.66 0 1 0-39.56 80.12v1.39a19.78 19.78 0 0 0 39.56 0v-81.51Zm-101.29 61.73a61.73 61.73 0 1 1 61.73-61.73 61.81 61.81 0 0 1-61.73 61.73Z"
                                className="cls-1"
                              />
                            </g>
                          </g>
                        </svg>
                      </a>
                    </div>
                    <div>
                      <button
                        aria-label="Close Menu"
                        title="Close Menu"
                        className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                          <path
                            fill="currentColor"
                            d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <nav>
                    <ul className="space-y-4">
                      <li>
                        <a
                          href="/"
                          aria-label="Our product"
                          title="Our product"
                          className="font-medium tracking-wide text-black hover:cursor-pointer transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          Solusi
                        </a>
                      </li>
                      <li>
                        <a
                          onClick={() => navigate("/harga")}
                          aria-label="Our product"
                          title="Our product"
                          className="font-medium tracking-wide text-black hover:cursor-pointer transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          Harga
                        </a>
                      </li>
                      <li>
                        <a
                          onClick={() => navigate("/blog")}
                          aria-label="Product pricing"
                          title="Product pricing"
                          className="font-medium tracking-wide text-black hover:cursor-pointer transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          Blog
                        </a>
                      </li>
                      <li>
                        <a
                          onClick={() => navigate("/login")}
                          aria-label="About us"
                          title="About us"
                          className="font-medium tracking-wide text-black hover:cursor-pointer transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          Login
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
