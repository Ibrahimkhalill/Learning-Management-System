import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { Search } from "./";
import { useEffect, useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useTheme } from "./ThemeContext";

const Navber = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [visible, setVisible] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const handleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const handleFalse = () => {
    setIsMenuOpen(false);
  };
  const handLeSearchVisible = () => {
    setVisible(!visible);
  };

  return (
    <div className="h-[60px] flex justify-evenly gap-5 items-center bg-coching-nav_color text-white ">
      {/* first div */}
      <div className=" container h-[60px] flex justify-between items-center bg-coching-nav_color gap-4 text-white ">
        <div className="flex items-start">
          <Link onClick={handleFalse} to={"/"}>
            <img
              className="h-[50px] w-[150px]  object-cover cursor-pointer"
              src={"../public/images/logo.png"}
              alt=""
            />
          </Link>
        </div>

        <div className="hidden  lg:flex grow justify-end gap-20">
          <ul className="flex  items-center gap-4 text-sm xl:text-sm font-bold">
            <>
              {/* <div
                  className="bg-coching-text_color   flex h-10 p-1 items-center rounded"
                  onClick={handLeSearchVisible}
                >
                  <input
                    type="text"
                    placeholder="Search Course..."
                    className="flex grow bg-coching-nav_color items-center p-1 h-[100%] outline-none text-white"
                  />
                  <button className="w-[45px]">
                    <MagnifyingGlassIcon className="h-[27px] m-auto stroke-slate-900" />
                  </button>
                </div> */}

              <li>
                <Link onClick={handleFalse} to={"/"}>
                  Home
                </Link>
              </li>
              <li>
                <Link onClick={handleFalse} to={"/course"}>
                  Courses
                </Link>
              </li>
              <li>
                <Link onClick={handleFalse}>About</Link>
              </li>
              <li>
                <Link onClick={handleFalse} to={"/contact"}>
                  Contact
                </Link>
              </li>
              <li onClick={toggleTheme} className="cursor-pointer">
                {theme === "light" ? (
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 16 16"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278zM4.858 1.311A7.269 7.269 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.316 7.316 0 0 0 5.205-2.162c-.337.042-.68.063-1.029.063-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286z"></path>
                  </svg>
                ) : (
                  <div className="mantine-ThemeIcon-root focus-reset flex-shrink-0 cursor-pointer p-1 mantine-ttu7i1">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 16 16"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"></path>
                    </svg>
                  </div>
                )}
              </li>
            </>
          </ul>
          <div className="flex  items-center ml-4">
            <Link
              onClick={handleFalse}
              to={"/login"}
              className="cursor-pointer"
            >
              SingIn
            </Link>
            <Link onClick={handleFalse} to={"/profile"}>
              <span className="w-[40px] h-[40px] bg-slate-400 rounded-full flex justify-center items-end ml-2 cursor-pointer">
                <img
                  src={"../public/images/img1.png"}
                  className="w-[40px] h-[40px] object-cover rounded-full"
                  alt=""
                />
              </span>
            </Link>
          </div>
        </div>
      </div>
      <div onClick={toggleTheme} className="cursor-pointer lg:hidden">
       
          {theme === "light" ? (
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 16 16"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278zM4.858 1.311A7.269 7.269 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.316 7.316 0 0 0 5.205-2.162c-.337.042-.68.063-1.029.063-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286z"></path>
            </svg>
          ) : (
            <div className="mantine-ThemeIcon-root focus-reset flex-shrink-0 cursor-pointer p-1 mantine-ttu7i1">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 16 16"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"></path>
              </svg>
            </div>
          )}
       
      </div>

      <button className="lg:hidden" onClick={handleMenu}>
        {isMenuOpen ? (
          <XMarkIcon className="h-[30px] text-coching-text_color cursor-pointer mr-2" />
        ) : (
          <Bars3Icon className="h-[30px] text-coching-text_color cursor-pointer mr-2" />
        )}
      </button>

      {/* User Details */}

      {/* Mobile Device */}
      {isMenuOpen && (
        <div className="fixed bg-coching-nav_color inset-0 h-[55%] z-[999]">
          <div className="flex justify-between items-center">
            <Link onClick={handleFalse} to={"/"}>
              <img
                className="h-[50px] w-[150px] object-cover m-2 cursor-pointer"
                src={"../public/images/logo.png"}
                alt=""
              />
            </Link>
            <button className="lg:hidden" onClick={handleMenu}>
              <XMarkIcon className="h-[30px] mr-3 text-coching-text_color cursor-pointer" />
            </button>
          </div>
          <div className="mt-5 ml-4">
            <ul className="flex items-center flex-col gap-4 text-sm xl:text-sm font-bold">
              <li className="hover:bg-slate-500 block w-full p-2 rounded">
                <Link onClick={handleFalse} to={"/"}>
                  Home
                </Link>
              </li>
              <li className="hover:bg-slate-500 block w-full p-2 rounded">
                <Link onClick={handleFalse} to={"/course"}>
                  Courses
                </Link>
              </li>
              <li className="hover:bg-slate-500 block w-full p-2 rounded">
                <Link onClick={handleFalse}>About</Link>
              </li>
              <li className="hover:bg-slate-500 block w-full p-2 rounded">
                <Link onClick={handleFalse} to={"/contact"}>
                  Contact
                </Link>
              </li>
              <li className=" block w-full p-2 rounded">
                <div className="bg-coching-text_color  flex h-10 p-1 items-center rounded">
                  <input
                    type="text"
                    placeholder="Search Course..."
                    className="flex grow bg-coching-nav_color items-center p-2 h-[100%] outline-none text-white"
                  />
                  <button className="w-[45px]">
                    <MagnifyingGlassIcon className="h-[27px] m-auto stroke-slate-900" />
                  </button>
                </div>
              </li>

              <button className="bg-coching-text_color w-[40%] p-2 rounded text-coching-nav_color">
                <Link onClick={handleFalse} to={"/login"}>
                  Login
                </Link>
              </button>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navber;
