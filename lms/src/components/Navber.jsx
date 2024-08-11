import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { Search } from "./";
import { useState } from "react";
import {
  FlagIcon,
  MagnifyingGlassIcon,
  StarIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "@heroicons/react/24/outline";
const Navber = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [visible, setVisible] = useState(false);

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
    <div className="h-[60px] flex justify-evenly items-center bg-coching-nav_color text-white ">
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
            {!visible ? (
              <>
                <div
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
                </div>

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
              </>
            ) : (
              <div
                className="bg-coching-text_color w-[50vw]   flex h-10 p-1 items-center rounded"
               
              >
                <input
                  type="text"
                  placeholder="Search Course..."
                  className="flex grow bg-coching-nav_color items-center p-1 h-[100%] outline-none text-white"
                />
                <button className="w-[45px]">
                  <MagnifyingGlassIcon className="h-[27px] m-auto stroke-slate-900" />
                </button>
              </div>
            )}
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
