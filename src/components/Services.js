import React from "react";

const Services = () => {
  return (
    <div className="w-full relative bg-gray-100">
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12 py-2">
          <h2 className="max-w-lg tracking-wider mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 md:mx-auto">
            <span className="relative inline-block">
              <svg
                viewBox="0 0 52 24"
                fill="currentColor"
                className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
              >
                <defs>
                  <pattern
                    id="18302e52-9e2a-4c8e-9550-0cbb21b38e55"
                    x="0"
                    y="0"
                    width=".135"
                    height=".30"
                  >
                    <circle cx="1" cy="1" r=".7" />
                  </pattern>
                </defs>
                <rect
                  fill="url(#18302e52-9e2a-4c8e-9550-0cbb21b38e55)"
                  width="52"
                  height="24"
                />
              </svg>
            </span>
            Bagaimana Software Payroll dan HR GajiHub Membantu Anda?
          </h2>
        </div>
        <div className="grid gap-8 row-gap-5 lg:grid-cols-3">
          <div className="relative p-px overflow-hidden transition duration-300 transform border rounded shadow-sm hover:scale-105 group hover:shadow-xl">
            <div className="absolute bottom-0 left-0 w-full h-1 duration-300 origin-left transform scale-x-0  group-hover:scale-x-100" />
            <div className="absolute bottom-0 left-0 w-1 h-full duration-300 origin-bottom transform scale-y-0  group-hover:scale-y-100" />
            <div className="absolute top-0 left-0 w-full h-1 duration-300 origin-right transform scale-x-0  group-hover:scale-x-100" />
            <div className="absolute bottom-0 right-0 w-1 h-full duration-300 origin-top transform scale-y-0  group-hover:scale-y-100" />
            <div className="relative p-5 bg-white rounded-sm">
              <div className="flex flex-col mb-2 lg:items-center lg:flex-row">
                <div className="flex items-center justify-center w-10 h-10 mb-4 mr-2 rounded-full bg-indigo-50 lg:mb-0">
                  <img
                    className="w-8 h-8"
                    src={require("../assets/icon-7.png")}
                    alt="Penghitungan pajak karyawan dan BPJS"
                  />
                </div>
                <h6 className="font-semibold leading-5">
                  Penghitungan pajak karyawan dan BPJS
                </h6>
              </div>
              <p className="mb-2 text-sm text-gray-900">
                Mulai dari penghitungan PPh 21 dan PPh 26, kini Anda bisa
                melakukan itu semua dengan praktis di GajiHub. Anda juga dapat
                menghitung premi BPJS, baik BPJS Ketenagakerjaan maupun BPJS
                langsung dari sistem GajiHub.
              </p>
            </div>
          </div>

          <div className="relative p-px overflow-hidden transition duration-300 transform border rounded shadow-sm hover:scale-105 group hover:shadow-xl">
            <div className="absolute bottom-0 left-0 w-full h-1 duration-300 origin-left transform scale-x-0  group-hover:scale-x-100" />
            <div className="absolute bottom-0 left-0 w-1 h-full duration-300 origin-bottom transform scale-y-0  group-hover:scale-y-100" />
            <div className="absolute top-0 left-0 w-full h-1 duration-300 origin-right transform scale-x-0  group-hover:scale-x-100" />
            <div className="absolute bottom-0 right-0 w-1 h-full duration-300 origin-top transform scale-y-0  group-hover:scale-y-100" />
            <div className="relative p-5 bg-white rounded-sm">
              <div className="flex flex-col mb-2 lg:items-center lg:flex-row">
                <div className="flex items-center justify-center w-10 h-10 mb-4 mr-2 rounded-full bg-indigo-50 lg:mb-0">
                  <img
                    className="w-8 h-8"
                    src={require("../assets/icon-6.png")}
                    alt="Menghitung gaji, THR, dan benefit Lainnya"
                  />
                </div>
                <h6 className="font-semibold leading-5">
                  Menghitung gaji, THR, dan benefit Lainnya
                </h6>
              </div>
              <p className="mb-2 text-sm text-gray-900">
                Sistem penggajian karyawan di GajiHub fleksibel dan dapat
                diakses online memudahkan perhitungan gaji karyawan dengan
                beragam komponen tunjangan, termasuk mengkalkulasi lembur, THR,
                bonus dan benefit lainnya.
              </p>
            </div>
          </div>

          <div className="relative p-px overflow-hidden transition duration-300 transform border rounded shadow-sm hover:scale-105 group hover:shadow-xl">
            <div className="absolute bottom-0 left-0 w-full h-1 duration-300 origin-left transform scale-x-0  group-hover:scale-x-100" />
            <div className="absolute bottom-0 left-0 w-1 h-full duration-300 origin-bottom transform scale-y-0  group-hover:scale-y-100" />
            <div className="absolute top-0 left-0 w-full h-1 duration-300 origin-right transform scale-x-0  group-hover:scale-x-100" />
            <div className="absolute bottom-0 right-0 w-1 h-full duration-300 origin-top transform scale-y-0  group-hover:scale-y-100" />
            <div className="relative p-5 bg-white rounded-sm">
              <div className="flex flex-col mb-2 lg:items-center lg:flex-row">
                <div className="flex items-center justify-center w-10 h-10 mb-4 mr-2 rounded-full bg-indigo-50 lg:mb-0">
                  <img
                    className="w-8 h-8"
                    src={require("../assets/icon-5.png")}
                    alt="Analisis kinerja karyawan"
                  />
                </div>
                <h6 className="font-semibold leading-5">
                  Analisis kinerja karyawan
                </h6>
              </div>
              <p className="mb-2 text-sm text-gray-900">
                GajiHub menyediakan fitur yang Anda butuhkan untuk Analisis
                Kinerja Karyawan secara real-time di satu tempat. Mulai dari
                Data Kompensasi, Demografi Karyawan, sampai Data Produktivitas
                bisa Anda peroleh di GajiHub.
              </p>
            </div>
          </div>

          <div className="relative p-px overflow-hidden transition duration-300 transform border rounded shadow-sm hover:scale-105 group hover:shadow-xl">
            <div className="absolute bottom-0 left-0 w-full h-1 duration-300 origin-left transform scale-x-0  group-hover:scale-x-100" />
            <div className="absolute bottom-0 left-0 w-1 h-full duration-300 origin-bottom transform scale-y-0  group-hover:scale-y-100" />
            <div className="absolute top-0 left-0 w-full h-1 duration-300 origin-right transform scale-x-0  group-hover:scale-x-100" />
            <div className="absolute bottom-0 right-0 w-1 h-full duration-300 origin-top transform scale-y-0  group-hover:scale-y-100" />
            <div className="relative p-5 bg-white rounded-sm">
              <div className="flex flex-col mb-2 lg:items-center lg:flex-row">
                <div className="flex items-center justify-center w-10 h-10 mb-4 mr-2 rounded-full bg-indigo-50 lg:mb-0">
                  <img
                    className="w-8 h-8"
                    src={require("../assets/icon-4.png")}
                    alt="Pengelolaan cuti dan izin karyawan"
                  />
                </div>
                <h6 className="font-semibold leading-5">
                  Pengelolaan cuti dan izin karyawan
                </h6>
              </div>
              <p className="mb-2 text-sm text-gray-900">
                Anda mengelola izin karyawan yang berlaku di perusahaan Anda
                dengan mudah. Di GajiHub Anda juga fleksibel mengakomodasi
                periode cuti individu dan periode bersama.
              </p>
            </div>
          </div>

          <div className="relative p-px overflow-hidden transition duration-300 transform border rounded shadow-sm hover:scale-105 group hover:shadow-xl">
            <div className="absolute bottom-0 left-0 w-full h-1 duration-300 origin-left transform scale-x-0  group-hover:scale-x-100" />
            <div className="absolute bottom-0 left-0 w-1 h-full duration-300 origin-bottom transform scale-y-0  group-hover:scale-y-100" />
            <div className="absolute top-0 left-0 w-full h-1 duration-300 origin-right transform scale-x-0  group-hover:scale-x-100" />
            <div className="absolute bottom-0 right-0 w-1 h-full duration-300 origin-top transform scale-y-0  group-hover:scale-y-100" />
            <div className="relative p-5 bg-white rounded-sm">
              <div className="flex flex-col mb-2 lg:items-center lg:flex-row">
                <div className="flex items-center justify-center w-10 h-10 mb-4 mr-2 rounded-full bg-indigo-50 lg:mb-0">
                  <img
                    className="w-8 h-8"
                    src={require("../assets/icon-3.png")}
                    alt="Mengelola pola kerja"
                  />
                </div>
                <h6 className="font-semibold leading-5">
                  Mengelola pola kerja
                </h6>
              </div>
              <p className="mb-2 text-sm text-gray-900">
                Perusahaan Anda menerapkan peraturan jam kerja yang beragam atau
                memiliki pembagian pola kerja? Dengan GajiHub membuat
                pengelolaan jam kerja menjadi lebih mudah!
              </p>
            </div>
          </div>

          <div className="relative p-px overflow-hidden transition duration-300 transform border rounded shadow-sm hover:scale-105 group hover:shadow-xl">
            <div className="absolute bottom-0 left-0 w-full h-1 duration-300 origin-left transform scale-x-0  group-hover:scale-x-100" />
            <div className="absolute bottom-0 left-0 w-1 h-full duration-300 origin-bottom transform scale-y-0  group-hover:scale-y-100" />
            <div className="absolute top-0 left-0 w-full h-1 duration-300 origin-right transform scale-x-0  group-hover:scale-x-100" />
            <div className="absolute bottom-0 right-0 w-1 h-full duration-300 origin-top transform scale-y-0  group-hover:scale-y-100" />
            <div className="relative p-5 bg-white rounded-sm">
              <div className="flex flex-col mb-2 lg:items-center lg:flex-row">
                <div className="flex items-center justify-center w-10 h-10 mb-4 mr-2 rounded-full bg-indigo-50 lg:mb-0">
                  <img
                    className="w-8 h-8"
                    src={require("../assets/icon-2.png")}
                    alt="Mencatat absensi karyawan"
                  />
                </div>
                <h6 className="font-semibold leading-5">
                  Mencatat absensi karyawan
                </h6>
              </div>
              <p className="mb-2 text-sm text-gray-900 h-20">
                Informasi dan pencatatan absensi berjalan lebih optimal dengan
                dengan integrasi langsung ke sistem penggajian perusahan.
              </p>
            </div>
          </div>

          <div className="relative p-px overflow-hidden transition duration-300 transform border rounded shadow-sm hover:scale-105 group hover:shadow-xl">
            <div className="absolute bottom-0 left-0 w-full h-1 duration-300 origin-left transform scale-x-0  group-hover:scale-x-100" />
            <div className="absolute bottom-0 left-0 w-1 h-full duration-300 origin-bottom transform scale-y-0  group-hover:scale-y-100" />
            <div className="absolute top-0 left-0 w-full h-1 duration-300 origin-right transform scale-x-0  group-hover:scale-x-100" />
            <div className="absolute bottom-0 right-0 w-1 h-full duration-300 origin-top transform scale-y-0  group-hover:scale-y-100" />
            <div className="relative p-5 bg-white rounded-sm">
              <div className="flex flex-col mb-2 lg:items-center lg:flex-row">
                <div className="flex items-center justify-center w-10 h-10 mb-4 mr-2 rounded-full bg-indigo-50 lg:mb-0">
                  <img
                    className="w-8 h-8"
                    src={require("../assets/icon-1.png")}
                    alt="Kelola data karyawan lebih mudah"
                  />
                </div>
                <h6 className="font-semibold leading-5">
                  Kelola data karyawan lebih mudah
                </h6>
              </div>
              <p className="mb-2 text-sm text-gray-900">
                Seluruh data karyawan bisa Anda akses dan kelola dalam satu
                sistem sehingga memudahkan Anda dalam melakukan manajemen SDM
                lebih efisien.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
