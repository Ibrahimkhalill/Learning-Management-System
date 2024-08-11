import React from "react";
import img1 from "../assets/download.svg";
import img2 from "../assets/login.png";
const Login = () => {
  return (
    <div className="flex container min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="flex flex-col gap-6 lg:flex-row lg:gap-2">
        <div className="w-full lg:mt-10 space-y-8">
          <div>
            <h2 className=" text-center text-3xl font-bold leading-9 tracking-tight text-coching-button_color">
              Login
            </h2>
            <h4 className=" text-center text-base font-bold leading-9 tracking-tight text-gray-400">
              Do not share your login information with anyone
            </h4>
          </div>

          <div className=" space-y-8 mt-10 sm:mx-auto sm:w-full sm:max-w-lg">
            <form action="#" method="POST" className="space-y-6">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-400"
                >
                  Your email address *
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    placeholder="boss@gmail.com"
                    className="block w-full rounded-md  pl-2 py-1.5 text-gray-400 shadow-sm bg-slate-800   placeholder:text-gray-400 outline-coching-button_color sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium leading-6 text-gray-400"
                  >
                    Enter password *
                  </label>
                  <div className="text-sm">
                    <a
                      href="#"
                      className="font-semibold text-coching-button_color "
                    >
                      Forgot password?
                    </a>
                  </div>
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    required
                    autoComplete="current-password"
                    placeholder="anypassword123"
                    className="block w-full rounded-md  pl-2 py-1.5 text-gray-400 shadow-sm bg-slate-800   placeholder:text-gray-400 outline-coching-button_color sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-coching-button_color px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Sign in
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="w-full">
          <div className="flex h-full w-full items-center justify-center">
            <img src={img2} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
