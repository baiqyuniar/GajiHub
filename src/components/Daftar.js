import React from "react";

const Daftar = () => {
  return (
    <section className="px-4 py-16 mt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid max-w-6xl grid-cols-1 px-6 gap-16 mx-auto lg:px-8 md:grid-cols-2 md:divide-x">
        <div className="py-6 md:py-0 md:px-6">
          <p className="pt-2 pb-4 sticky">Pilih paket</p>
          <div className="space-y-4">
            <div class="shadow-lg bg-white p-4 border-gray-400">
              <div class="flex-row gap-4 flex justify-center items-center">
                <div className="w-full">
                  <label class="relative flex flex-row w-full form-check-label">
                    <input
                      type="radio"
                      checked
                      class="justify-center items-center flex mt-2 rounded-full h-8 w-8 form-check-input bg-white checked:bg-blue-600 checked:border-blue-600"
                    />
                    <div>
                      <p className="ml-4 font-bold">
                        Paket Pro - Coba Gratis 14 Hari
                      </p>
                      <p className="ml-4">
                        Rp. <span className="font-bold">4.900</span> per bulan
                      </p>
                    </div>
                  </label>
                </div>
              </div>
            </div>

            <div class="shadow-lg bg-white p-4 border-gray-400">
              <div class="flex-row gap-4 flex justify-center items-center">
                <div className="w-full">
                  <label class="relative flex flex-row w-full form-check-label">
                    <input
                      type="radio"
                      class="justify-center items-center flex mt-2 rounded-full h-8 w-8 form-check-input bg-white checked:bg-blue-600 checked:border-blue-600"
                    />
                    <div>
                      <p className="ml-4 font-bold">
                        Paket Elite - Coba Gratis 14 Hari
                      </p>
                      <p className="ml-4">
                        Rp. <span className="font-bold">11.900</span> per bulan
                      </p>
                    </div>
                  </label>
                </div>
              </div>
            </div>

            <div class="shadow-lg bg-white p-4 border-gray-400">
              <div class="flex-row gap-4 flex justify-center items-center">
                <div className="w-full">
                  <label class="relative flex flex-row w-full form-check-label">
                    <input
                      type="radio"
                      class="justify-center items-center flex mt-2 rounded-full h-8 w-8 form-check-input bg-white checked:bg-blue-600 checked:border-blue-600"
                    />
                    <div>
                      <p className="ml-4 font-bold">Paket Gratis</p>
                      <p className="ml-4">Gratis Selamanya</p>
                    </div>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>

        <form
          novalidate=""
          className="flex flex-col py-6 space-y-6 md:py-0 md:px-6 ng-untouched ng-pristine ng-valid"
        >
          <label className="block">
            <span className="mb-1">Nama Lengkap</span>
            <div class="flex relative my-4">
              <span class="rounded-l-md inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
                <svg
                  width="24"
                  height="24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </span>
              <input
                type="text"
                id="nama"
                class=" rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                name="nama"
                placeholder="Nama"
              />
            </div>
          </label>

          <label className="block">
            <span className="mb-1">Nama Perusahaan</span>
            <div class="flex relative my-4">
              <span class="rounded-l-md inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
                <svg
                  width="24"
                  height="24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                </svg>
              </span>
              <input
                type="text"
                id="nama"
                class=" rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                name="nama"
                placeholder="PT. XXX"
              />
            </div>
          </label>

          <label className="block">
            <span className="mb-1">Jabatan di perusahaan sebagai</span>
            <div class="flex relative my-4">
              <span class="rounded-l-md inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
                <svg
                  width="24"
                  height="24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                </svg>
              </span>
              <input
                type="text"
                id="jabatan"
                class=" rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                name="jabatan"
                placeholder="Pemilik"
              />
            </div>
          </label>

          <label className="block">
            <span className="mb-1">Jumlah Karyawan</span>
            <div class="flex relative ">
              <select className="w-full rounded-lg flex-1  border border-gray-300  py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent">
                <option selected>1</option>
                <option>6-10</option>
                <option>11-25</option>
                <option>26-50</option>
                <option>Lebih dari 50</option>
              </select>
            </div>
          </label>

          <label className="block">
            <span className="mb-1">Nomor HP</span>
            <div class="flex relative my-4">
              <span class="rounded-l-md inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
                <svg
                  width="24"
                  height="24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
              </span>
              <input
                type="text"
                id="nomor"
                class=" rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                name="nomor"
                placeholder="0812XXXX"
              />
            </div>
          </label>

          <label className="block">
            <span className="mb-1">Email Address</span>
            <div class="flex relative my-4">
              <span class="rounded-l-md inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
                <svg
                  width="24"
                  height="24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="12" cy="12" r="4"></circle>
                  <path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94"></path>
                </svg>
              </span>
              <input
                type="text"
                id="email-with-icon"
                class=" rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                name="email"
                placeholder="alamat@email.com"
              />
            </div>
          </label>

          <a
            href="#"
            class="text-base text-[#e53e6a] text-left underline font-roboto leading-normal hover:underline mb-6"
          >
            Masukkan Kode Kupon
          </a>

          <button
            type="button"
            className="w-full px-8 py-1 text-lg text-white rounded focus:ring hover:ring focus:ring-opacity-75 bg-blue-700 focus:ring-blue-500 hover:ring-blue-400"
          >
            Daftar sekarang
          </button>

          <p class="text-sm my-4 text-center leading-normal hover:underline mb-6">
            Sudah pernah daftar?{" "}
            <a href="/login" className="text-[#e53e6a] font-bold">
              Login disini
            </a>
          </p>
        </form>
      </div>
    </section>
  );
};

export default Daftar;
