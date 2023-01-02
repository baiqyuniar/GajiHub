import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const HeaderB = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  return (
    <div className="px-8 py-5 mx-auto border-b-2 shadow-md">
      <div className="relative flex items-center justify-between">
        <div className="flex items-center">
          <a
            onClick={() => navigate("/")}
            aria-label="Company"
            title="Company"
            className="inline-flex items-center mr-8"
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
                    class="cls-1"
                  />
                  <path
                    d="M259.84 144c-3-1-14.35-4.52-28.24 7.25l-29 23.42 18.09-6.79a9.18 9.18 0 0 1 11.64 12.23 100.64 100.64 0 0 1-103.18 60c-46.27-4.91-83.8-42.2-89-88.45a100.41 100.41 0 0 1 170-83.41 19.79 19.79 0 1 0 27.92-28.05A139.6 139.6 0 0 0 128 .51C59.63 6.27 4.72 62.36.3 130.86c-5.25 81.42 59.49 149.35 139.81 149.35a140.15 140.15 0 0 0 122.4-72 97.37 97.37 0 0 0 6.5-13.25c8.41-22.41 8.08-45.21-9.17-50.96ZM884.05 31.28a11.3 11.3 0 0 0-11.3 11.3v101.87H731.53V42.58a11.3 11.3 0 1 0-22.6 0v226.33a11.3 11.3 0 1 0 22.6 0V167.05h141.22v101.86a11.3 11.3 0 0 0 22.6 0V42.58a11.3 11.3 0 0 0-11.3-11.3ZM572.69 77.64a19.78 19.78 0 0 0-19.78 19.78v208a13.49 13.49 0 0 1-13.5 13.5h-8.16a19.78 19.78 0 0 0-19.78 19.78 19.78 19.78 0 0 0 19.78 19.78h8.16a53 53 0 0 0 53.05-53.05v-208a19.76 19.76 0 0 0-19.77-19.79Z"
                    class="cls-1"
                  />
                  <circle cx="572.69" cy="25.27" r="25.27" class="cls-1" />
                  <path
                    d="M649.71 77.64a19.78 19.78 0 0 0-19.78 19.78v163a19.78 19.78 0 0 0 19.78 19.78 19.78 19.78 0 0 0 19.78-19.78v-163a19.77 19.77 0 0 0-19.78-19.78ZM649.71 0a25.27 25.27 0 1 0 0 50.54 25.27 25.27 0 0 0 0-50.54ZM1361.53 167.39c-5.12-46.39-42.53-83.85-88.87-89.09a101.12 101.12 0 0 0-90.46 36.9V42.58a11.3 11.3 0 1 0-22.6 0v136.34a101.29 101.29 0 1 0 201.93-11.53Zm-22.62 21.79a78.71 78.71 0 1 1-88.29-88.29 78.92 78.92 0 0 1 88.29 88.29ZM1111.44 77.64a11.3 11.3 0 0 0-11.3 11.3v93.85c0 39.11-30 72.81-69.05 74.73a72.79 72.79 0 0 1-76.38-72.62v-96a11.3 11.3 0 0 0-22.6 0v96a95.26 95.26 0 0 0 168 61.55v22.46a11.3 11.3 0 1 0 22.6 0v-180a11.29 11.29 0 0 0-11.27-11.27ZM511.48 178.93a101.66 101.66 0 1 0-39.56 80.12v1.39a19.78 19.78 0 0 0 39.56 0v-81.51Zm-101.29 61.73a61.73 61.73 0 1 1 61.73-61.73 61.81 61.81 0 0 1-61.73 61.73Z"
                    class="cls-1"
                  />
                </g>
              </g>
            </svg>
          </a>
          <ul className="flex items-center hidden space-x-8 lg:flex">
            <li>
              <a
                onClick={() => navigate("/")}
                aria-label="Our product"
                title="Our product"
                className="font-base tracking-wide text-gray-700 transition-colors duration-200 uppercase hover:cursor-pointer"
              >
                Home
              </a>
            </li>
            <li>
              <a
                onClick={() => navigate("/blogs")}
                aria-label="Our product"
                title="Our product"
                className="font-base tracking-wide text-gray-700 transition-colors duration-200 uppercase hover:cursor-pointer"
              >
                Tips Manajemen
              </a>
            </li>
            <li>
              <a
                onClick={() => navigate("/blogs")}
                aria-label="Product pricing"
                title="Product pricing"
                className="font-base tracking-wide text-gray-700 transition-colors duration-200 uppercase hover:cursor-pointer"
              >
                Tips HR
              </a>
            </li>
            <li>
              <a
                onClick={() => navigate("/blogs")}
                aria-label="About us"
                title="About us"
                className="font-base tracking-wide text-gray-700 transition-colors duration-200 uppercase hover:cursor-pointer"
              >
                Pengembangan Karir
              </a>
            </li>
            <li>
              <a
                onClick={() => navigate("/blogs")}
                aria-label="About us"
                title="About us"
                className="font-base tracking-wide text-gray-700 transition-colors duration-200 uppercase hover:cursor-pointer"
              >
                Regulasi
              </a>
            </li>
            <li>
              <a
                onClick={() => navigate("/blogs")}
                aria-label="About us"
                title="About us"
                className="font-base tracking-wide text-gray-700 transition-colors duration-200 uppercase hover:cursor-pointer"
              >
                Payroll
              </a>
            </li>
            <li>
              <a
                onClick={() => navigate("/blogs")}
                aria-label="About us"
                title="About us"
                className="font-base tracking-wide text-gray-700 transition-colors duration-200 uppercase hover:cursor-pointer"
              >
                Perpajakan
              </a>
            </li>
          </ul>
        </div>
        <ul className="flex items-center hidden space-x-8 lg:flex">
          <li>
            <div className="pt-2 relative mx-auto text-gray-600">
              <input
                className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
                type="search"
                name="search"
                placeholder="Search"
              />
              <button
                type="submit"
                className="absolute right-0 top-0 mt-5 mr-4"
              >
                <svg
                  className="text-gray-600 h-4 w-4 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  version="1.1"
                  id="Capa_1"
                  x="0px"
                  y="0px"
                  viewBox="0 0 56.966 56.966"
                  width="512px"
                  height="512px"
                >
                  <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
                </svg>
              </button>
            </div>
          </li>
        </ul>
        <div className="lg:hidden">
          <button
            aria-label="Open Menu"
            title="Open Menu"
            className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
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
            <div className="absolute z-10 top-0 left-0 w-full">
              <div className="p-5 bg-white border rounded shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <a
                      href="/"
                      aria-label="Company"
                      title="Company"
                      className="inline-flex items-center mr-8"
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
                              class="cls-1"
                            />
                            <path
                              d="M259.84 144c-3-1-14.35-4.52-28.24 7.25l-29 23.42 18.09-6.79a9.18 9.18 0 0 1 11.64 12.23 100.64 100.64 0 0 1-103.18 60c-46.27-4.91-83.8-42.2-89-88.45a100.41 100.41 0 0 1 170-83.41 19.79 19.79 0 1 0 27.92-28.05A139.6 139.6 0 0 0 128 .51C59.63 6.27 4.72 62.36.3 130.86c-5.25 81.42 59.49 149.35 139.81 149.35a140.15 140.15 0 0 0 122.4-72 97.37 97.37 0 0 0 6.5-13.25c8.41-22.41 8.08-45.21-9.17-50.96ZM884.05 31.28a11.3 11.3 0 0 0-11.3 11.3v101.87H731.53V42.58a11.3 11.3 0 1 0-22.6 0v226.33a11.3 11.3 0 1 0 22.6 0V167.05h141.22v101.86a11.3 11.3 0 0 0 22.6 0V42.58a11.3 11.3 0 0 0-11.3-11.3ZM572.69 77.64a19.78 19.78 0 0 0-19.78 19.78v208a13.49 13.49 0 0 1-13.5 13.5h-8.16a19.78 19.78 0 0 0-19.78 19.78 19.78 19.78 0 0 0 19.78 19.78h8.16a53 53 0 0 0 53.05-53.05v-208a19.76 19.76 0 0 0-19.77-19.79Z"
                              class="cls-1"
                            />
                            <circle
                              cx="572.69"
                              cy="25.27"
                              r="25.27"
                              class="cls-1"
                            />
                            <path
                              d="M649.71 77.64a19.78 19.78 0 0 0-19.78 19.78v163a19.78 19.78 0 0 0 19.78 19.78 19.78 19.78 0 0 0 19.78-19.78v-163a19.77 19.77 0 0 0-19.78-19.78ZM649.71 0a25.27 25.27 0 1 0 0 50.54 25.27 25.27 0 0 0 0-50.54ZM1361.53 167.39c-5.12-46.39-42.53-83.85-88.87-89.09a101.12 101.12 0 0 0-90.46 36.9V42.58a11.3 11.3 0 1 0-22.6 0v136.34a101.29 101.29 0 1 0 201.93-11.53Zm-22.62 21.79a78.71 78.71 0 1 1-88.29-88.29 78.92 78.92 0 0 1 88.29 88.29ZM1111.44 77.64a11.3 11.3 0 0 0-11.3 11.3v93.85c0 39.11-30 72.81-69.05 74.73a72.79 72.79 0 0 1-76.38-72.62v-96a11.3 11.3 0 0 0-22.6 0v96a95.26 95.26 0 0 0 168 61.55v22.46a11.3 11.3 0 1 0 22.6 0v-180a11.29 11.29 0 0 0-11.27-11.27ZM511.48 178.93a101.66 101.66 0 1 0-39.56 80.12v1.39a19.78 19.78 0 0 0 39.56 0v-81.51Zm-101.29 61.73a61.73 61.73 0 1 1 61.73-61.73 61.81 61.81 0 0 1-61.73 61.73Z"
                              class="cls-1"
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
                        onClick={() => navigate("/")}
                        aria-label="Our product"
                        title="Our product"
                        className="font-medium tracking-wide text-black transition-colors duration-200 hover:cursor-pointer"
                      >
                        Home
                      </a>
                    </li>
                    <li>
                      <a
                        onClick={() => navigate("/blogs")}
                        aria-label="Our product"
                        title="Our product"
                        className="font-medium tracking-wide text-black transition-colors duration-200 hover:cursor-pointer"
                      >
                        Tips Manajemen
                      </a>
                    </li>
                    <li>
                      <a
                        onClick={() => navigate("/blogs")}
                        aria-label="Product pricing"
                        title="Product pricing"
                        className="font-medium tracking-wide text-black transition-colors duration-200 hover:cursor-pointer"
                      >
                        Tips HR
                      </a>
                    </li>
                    <li>
                      <a
                        onClick={() => navigate("/blogs")}
                        aria-label="Product pricing"
                        title="Product pricing"
                        className="font-medium tracking-wide text-black transition-colors duration-200 hover:cursor-pointer"
                      >
                        Pengembangan Karir
                      </a>
                    </li>
                    <li>
                      <a
                        onClick={() => navigate("/blogs")}
                        aria-label="Product pricing"
                        title="Product pricing"
                        className="font-medium tracking-wide text-black transition-colors duration-200 hover:cursor-pointer"
                      >
                        Regulasi
                      </a>
                    </li>
                    <li>
                      <a
                        onClick={() => navigate("/blogs")}
                        aria-label="Product pricing"
                        title="Product pricing"
                        className="font-medium tracking-wide text-black transition-colors duration-200 hover:cursor-pointer"
                      >
                        Payroll
                      </a>
                    </li>
                    <li>
                      <a
                        onClick={() => navigate("/blogs")}
                        aria-label="About us"
                        title="About us"
                        className="font-medium tracking-wide text-black transition-colors duration-200 hover:cursor-pointer"
                      >
                        Perpajakan
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
  );
};

export default HeaderB;
