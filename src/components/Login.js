import React from "react";
import Whatsapp from "./Whatsapp";

const Login = () => {
  return (
    <div className="rounded-xl mt-40">
      <div className="flex my-auto bg-white rounded-lg shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-4xl">
        <div className="hidden lg:block lg:w-1/3  bg-login">
          <img
            className="w-20 mt-8 ml-8"
            src={require("../assets/logo-light.76c98a3957379e167b35.png")}
          />
        </div>
        <div className="w-full p-8 lg:w-1/2">
          <p className="text-xl text-gray-600 text-center">Selamat Datang di</p>
          <a href="/">
            <svg
              className="my-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1362.17 358.5"
            >
              <g id="Layer_2" data-name="Layer 2">
                <g id="Layer_1-2" data-name="Layer 1">
                  <path
                    fill="#e53e6a"
                    d="M266,110.18c-15.36-12-41.92-12.17-74.65,11.24h0l-16.83,12-40,28.64-29.56-32.4a19.78,19.78,0,0,0-29.22,26.66l41.4,45.36a19.79,19.79,0,0,0,26.12,2.75s80.49-65.09,80.93-65.42c10.54-9,20.67-12.79,34.73-9.44,11.39,2.72,20.71,12.1,20.88,21.44C282.53,134.12,277.27,119,266,110.18Z"
                  />
                  <path
                    fill="#e53e6a"
                    d="M259.84,144c-3-1-14.35-4.52-28.24,7.25l-29,23.42,18.09-6.79a9.18,9.18,0,0,1,11.64,12.23,100.64,100.64,0,0,1-103.18,60c-46.27-4.91-83.8-42.2-89-88.45a100.41,100.41,0,0,1,170-83.41,19.79,19.79,0,1,0,27.92-28.05A139.6,139.6,0,0,0,128,.51C59.63,6.27,4.72,62.36.3,130.86c-5.25,81.42,59.49,149.35,139.81,149.35a140.15,140.15,0,0,0,122.4-72,97.37,97.37,0,0,0,6.5-13.25C277.42,172.55,277.09,149.75,259.84,144Z"
                  />
                  <path
                    fill="#e53e6a"
                    d="M884.05,31.28a11.3,11.3,0,0,0-11.3,11.3V144.45H731.53V42.58a11.3,11.3,0,1,0-22.6,0V268.91a11.3,11.3,0,1,0,22.6,0V167.05H872.75V268.91a11.3,11.3,0,0,0,22.6,0V42.58A11.3,11.3,0,0,0,884.05,31.28Z"
                  />
                  <path
                    fill="#e53e6a"
                    d="M572.69,77.64a19.78,19.78,0,0,0-19.78,19.78v208a13.49,13.49,0,0,1-13.5,13.5h-8.16a19.78,19.78,0,0,0-19.78,19.78h0a19.78,19.78,0,0,0,19.78,19.78h8.16a53,53,0,0,0,53.05-53.05v-208A19.76,19.76,0,0,0,572.69,77.64Z"
                  />
                  <circle fill="#e53e6a" cx="572.69" cy="25.27" r="25.27" />
                  <path
                    fill="#e53e6a"
                    d="M649.71,77.64h0a19.78,19.78,0,0,0-19.78,19.78v163a19.78,19.78,0,0,0,19.78,19.78h0a19.78,19.78,0,0,0,19.78-19.78v-163A19.77,19.77,0,0,0,649.71,77.64Z"
                  />
                  <path
                    fill="#e53e6a"
                    d="M649.71,0h0a25.27,25.27,0,1,0,0,50.54h0a25.27,25.27,0,0,0,0-50.54Z"
                  />
                  <path
                    fill="#e53e6a"
                    d="M1361.53,167.39C1356.41,121,1319,83.54,1272.66,78.3a101.12,101.12,0,0,0-90.46,36.9V42.58a11.3,11.3,0,1,0-22.6,0V178.92a101.29,101.29,0,1,0,201.93-11.53Zm-22.62,21.79a78.71,78.71,0,1,1-88.29-88.29A78.92,78.92,0,0,1,1338.91,189.18Z"
                  />
                  <path
                    fill="#e53e6a"
                    d="M1111.44,77.64a11.3,11.3,0,0,0-11.3,11.3v93.85c0,39.11-30,72.81-69.05,74.73a72.79,72.79,0,0,1-76.38-72.62v-96a11.3,11.3,0,0,0-22.6,0v96a95.26,95.26,0,0,0,168,61.55v22.46a11.3,11.3,0,1,0,22.6,0v-180A11.29,11.29,0,0,0,1111.44,77.64Z"
                  />
                  <path
                    fill="#e53e6a"
                    d="M511.48,178.93h0a101.66,101.66,0,1,0-39.56,80.12v1.39a19.78,19.78,0,0,0,39.56,0V178.93ZM410.19,240.66a61.73,61.73,0,1,1,61.73-61.73A61.81,61.81,0,0,1,410.19,240.66Z"
                  />
                </g>
              </g>
            </svg>
          </a>

          <div className="mt-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Email
            </label>
            <input
              className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
              type="email"
            />
          </div>
          <div className="mt-4">
            <div className="flex justify-between">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Password
              </label>
            </div>
            <input
              className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
              type="password"
            />
          </div>
          <div className="w-full mt-3 flex flex-row justify-between">
            <div className=" flex items-center gap-x-1">
              <input
                type="checkbox"
                name="remember"
                id=""
                className=" w-4 h-4  "
              />
              <label for="" className="text-sm text-slate-400">
                Ingat saya
              </label>
            </div>
            <div>
              <a
                href="#"
                className="text-sm text-slate-400 hover:text-blue-500"
              >
                Lupa password?
              </a>
            </div>
          </div>
          <div className="mt-8">
            <button className="bg-gray-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-gray-600">
              Masuk
            </button>
          </div>
          <a
            href="#"
            className="flex items-center justify-center mt-4 text-white rounded-lg shadow-md hover:bg-gray-100"
          >
            <div className="px-4 py-3">
              <svg className="h-6 w-6" viewBox="0 0 40 40">
                <path
                  d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                  fill="#FFC107"
                />
                <path
                  d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z"
                  fill="#FF3D00"
                />
                <path
                  d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z"
                  fill="#4CAF50"
                />
                <path
                  d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                  fill="#1976D2"
                />
              </svg>
            </div>
            <h1 className="px-4 py-3 w-5/6 text-center text-gray-600 font-bold">
              Sign in dengan Google
            </h1>
          </a>
        </div>
      </div>
      <Whatsapp />
    </div>
  );
};

export default Login;
