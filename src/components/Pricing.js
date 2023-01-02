import React from "react";
import { useNavigate } from "react-router-dom";

const Pricing = () => {
  const navigate = useNavigate();

  return (
    <div className="relative">
      <img
        src={require("../assets/banner-3.jpeg")}
        className="absolute inset-0 object-cover w-full h-full"
        alt=""
      />
      <div className="relative bg-gray-900 bg-opacity-75">
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="grid max-w-md gap-10 row-gap-5 lg:max-w-screen-lg sm:row-gap-10 lg:grid-cols-3 xl:max-w-screen-lg sm:mx-auto">
            <div className="flex flex-col justify-between p-8 transition-shadow duration-300 bg-white border rounded shadow-sm sm:items-center hover:shadow">
              <div className="text-center">
                <div className="text-lg font-semibold uppercase">Gratis</div>
                <div className="flex flex-col items-center justify-center mt-2">
                  <div>
                    <h1 className="mr-1 text-3xl font-bold text-gray-300">
                      Rp.
                      <span className="text-yellow-500 ml-2 text-7xl">0</span>
                    </h1>
                  </div>
                  <p className="mt-3 text-gray-400">unlimited karyawan</p>
                </div>
                <div className="mt-8 space-y-3 border-t-2">
                  <div className="text-gray-700 mt-3 font-bold">
                    Payrol
                    <p className="font-light my-1"> Hitung payroll Otomatis</p>
                    <p className="font-light my-1"> Hitung Payroll Otomatis</p>
                    <p className="font-light my-1"> Hitung Lembur Otomatis</p>
                    <p className="font-light my-1"> Hitung THR Otomatis</p>
                    <p className="font-light my-1">
                      Slip Gaji Realtime via Mobile Apps
                    </p>
                    <p className="font-light my-1"> Integrasi Payroll Bank</p>
                    <p className="font-light my-1">
                      {" "}
                      Integrasi dengan Absensi & HRIS
                    </p>
                    <p className="font-light my-1"> Integrasi Akuntansi</p>
                    <p className="font-light my-1"> Kelola Renumerasi</p>
                  </div>
                  <div className="text-gray-700 mt-6 font-bold">
                    Absensi
                    <p className="font-light my-1">
                      {" "}
                      Validasi Presensi via GPS
                    </p>
                    <p className="font-light my-1">
                      {" "}
                      Realtime Approval Presensi
                    </p>
                    <p className="font-light my-1"> Swafoto Presensi</p>
                    <p className="font-light my-1"> Perhitungan Lembur</p>
                    <p className="font-light my-1">Perhitungan Keterlambatan</p>
                    <p className="font-light my-1">
                      {" "}
                      Simpan Foto Presensi 7 hari
                    </p>
                  </div>
                  <div className="text-gray-700 mt-6 font-bold">
                    HRIS
                    <p className="font-light my-1"> Manajemen Karyawan</p>
                    <p className="font-light my-1">Manajemen Karir</p>
                    <p className="font-light my-1">Pengajuan Cuti & Izin</p>
                    <p className="font-light my-1">
                      Realtime Approval Cuti & Izin
                    </p>
                    <p className="font-light my-1">Kalender Libur Perusahaan</p>
                    <p className="font-light my-1">Sosial Media Internal</p>
                    <p className="font-light my-1">Pengumuman Perusahaan</p>
                    <p className="font-light my-1">
                      Employee Self Service Mobile Apps
                    </p>
                  </div>
                  <div className="text-gray-700 mt-6 font-bold">
                    Ekstra
                    <p className="font-light my-1">Basic Support - via Email</p>
                  </div>
                </div>
              </div>
              <div>
                <a
                  onClick={() => navigate("/daftar")}
                  className="inline-flex items-center over:cursor-pointer justify-center w-full h-12 px-6 mt-6 font-medium rounded-full tracking-wide text-white transition duration-200 bg-yellow-500 rounded shadow-md hover:bg-gray-900 focus:shadow-outline focus:outline-none"
                >
                  Daftar
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
            <div className="relative flex flex-col justify-between p-8 transition-shadow duration-300 bg-white border rounded shadow-sm sm:items-center hover:shadow border-[#e53e6a]">
              <div className="absolute inset-x-0 top-0 flex justify-center -mt-3">
                <div className="inline-block px-3 py-1 text-xs font-medium tracking-wider text-white uppercase rounded bg-[#e53e6a]">
                  Best Deal
                </div>
              </div>
              <div className="text-center">
                <div className="text-lg font-semibold uppercase">Pro</div>
                <div className="flex flex-col items-center justify-center mt-2">
                  <div>
                    <h1 className="mr-1 text-3xl font-bold text-gray-300">
                      Rp.
                      <span className="text-pink-700 ml-2 text-7xl">4.900</span>
                    </h1>
                  </div>
                  <p className="mt-3 text-gray-400">/bulan/karyawan</p>
                </div>
                <div className="mt-8 space-y-3 border-t-2">
                  <div className="text-gray-500 my-4">
                    Termasuk Semua Fitur Paket Gratis
                  </div>

                  <div className="text-gray-700 mt-6 font-bold">
                    Absensi
                    <p className="font-light my-1">Manajemen Shift Kerja</p>
                    <p className="font-light my-1">Kunjungan Klien</p>
                    <p className="font-light my-1">
                      Validasi Presensi via IP Address
                    </p>
                    <p className="font-light my-1">Custom Menu Mobile Apps</p>
                    <p className="font-light my-1">Opsi Input Waktu Manual</p>
                    <p className="font-light my-1">Multi Lokasi Presensi</p>
                    <p className="font-light my-1">
                      Pengaturan Validasi Presensi Advance
                    </p>
                    <p className="font-light my-1">
                      Simpan Foto Presensi 3 Bulan
                    </p>
                  </div>

                  <div className="text-gray-700 mt-6 font-bold">
                    HRIS
                    <p className="font-light my-1"> Manajemen Karyawan</p>
                    <p className="font-light my-1">Manajemen Karir</p>
                    <p className="font-light my-1">Pengajuan Cuti & Izin</p>
                    <p className="font-light my-1">
                      Realtime Approval Cuti & Izin
                    </p>
                    <p className="font-light my-1">Kalender Libur Perusahaan</p>
                    <p className="font-light my-1">Sosial Media Internal</p>
                    <p className="font-light my-1">Pengumuman Perusahaan</p>
                    <p className="font-light my-1">
                      Employee Self Service Mobile Apps
                    </p>
                  </div>

                  <div className="text-gray-700 mt-6 font-bold">
                    Ekstra
                    <p className="font-light my-1">Free Training Admin</p>
                    <p className="font-light my-1">
                      Free Konsultasi Implementasi
                    </p>
                    <p className="font-light my-1">Free Import Data Karyawan</p>
                    <p className="font-light my-1">Prioritas Support</p>
                    <p className="font-light my-1">Monthly Auto Backup</p>
                  </div>
                </div>
              </div>

              <div>
                <a
                  onClick={() => navigate("/daftar")}
                  className="inline-flex items-center hover:cursor-pointer justify-center w-full h-12 px-6 mt-6 font-medium rounded-full tracking-wide text-white transition duration-200 bg-pink-800 rounded shadow-md hover:bg-gray-900 focus:shadow-outline focus:outline-none"
                >
                  Daftar
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
            <div className="flex flex-col justify-between p-8 transition-shadow duration-300 bg-white border rounded shadow-sm sm:items-center hover:shadow">
              <div className="text-center">
                <div className="text-lg font-semibold uppercase">Elite</div>
                <div className="flex flex-col items-center justify-center mt-2">
                  <div>
                    <h1 className="mr-1 text-3xl font-bold text-gray-300">
                      Rp.
                      <span className="text-sky-700 ml-2 text-7xl">11.900</span>
                    </h1>
                  </div>
                  <p className="mt-3 text-gray-400">/bulan/karyawan</p>
                </div>
                <div className="mt-8 space-y-3 border-t-2">
                  <div className="text-gray-500 my-4">
                    Termasuk Semua Fitur Paket Pro
                  </div>

                  <div className="text-gray-700 mt-6 font-bold">
                    Payroll
                    <p className="font-light my-1">
                      Hitung Pajak PPh 21 Otomatis
                    </p>
                    <p className="font-light my-1">
                      BPJS Kesehatan & Ketenagakerjaan
                    </p>
                    <p className="font-light my-1">Multi NPWP Pemotong</p>
                    <p className="font-light my-1">
                      Multi Rekening Bank Pembayaran
                    </p>
                    <p className="font-light my-1">
                      Hitung Prorata Gaji Otomatis
                    </p>
                    <p className="font-light my-1">Print Bukti Potong Pajak</p>
                    <p className="font-light my-1">Tunjangan Cuti</p>
                    <p className="font-light my-1">Statistik Penggajian</p>
                  </div>

                  <div className="text-gray-700 mt-6 font-bold">
                    Absensi
                    <p className="font-light my-1">
                      Simpan Foto Presensi 2 tahun
                    </p>
                  </div>

                  <div className="text-gray-700 mt-6 font-bold">
                    Ekstra
                    <p className="font-light my-1">
                      Free Training Admin & Karyawan
                    </p>
                    <p className="font-light my-1">
                      Free Dedicated Implementation Specialist
                    </p>
                    <p className="font-light my-1">
                      Free Import Data Karyawan & Setting Pajak
                    </p>
                    <p className="font-light my-1">Prioritas Utama Support</p>
                    <p className="font-light my-1">Daily Auto Backup</p>
                  </div>
                </div>
              </div>
              <div>
                <a
                  onClick={() => navigate("/daftar")}
                  className="inline-flex items-center justify-center hover:cursor-pointer w-full h-12 px-6 mt-6 font-medium rounded-full tracking-wide text-white transition duration-200 bg-sky-700 rounded shadow-md hover:bg-gray-900 focus:shadow-outline focus:outline-none"
                >
                  Daftar
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
        </div>
      </div>
    </div>
  );
};

export default Pricing;
