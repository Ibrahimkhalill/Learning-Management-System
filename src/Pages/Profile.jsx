import {
  LockClosedIcon,
  PowerIcon,
  ClipboardIcon,
} from "@heroicons/react/24/outline";

import MyAccount from "../components/MyAccount";
import MyCourses from "../components/MyCourses";
import { useState } from "react";
import { Link } from "react-router-dom";

const Profile = () => {
  const [isClick, setClick] = useState(false);

  const onHnadleClick = () => {
    setClick(!isClick);
  };

  return (
    <div className="container  my-3">
      <div className="grid sm:grid-cols-12 gap-2 justify-center items-start mt-10">
        <div className="col-span-3 flex  flex-col justify-center items-center">
          <div className="w-[200px] h-[300px] bg-coching-nav_color rounded">
            <div className="flex items-center gap-4 p-2 hover:bg-coching-text_color">
              <span className="w-[30px] h-[30px] rounded-full">
                <img
                  src={`../public/images/img1.png`}
                  className="w-[30px] h-[30px] rounded-full"
                  alt=""
                />
              </span>
              <span className="font-bold text-center">My Account</span>
            </div>

            {/* <div className="flex items-center gap-4 p-2 hover:bg-coching-text_color ">
              <span className="rounded-full bg-gray-500 flex items-center justify-center text-white">
                <LockClosedIcon className="w-[25px] h-[25px] text-sm" />
              </span>
              <span className="font-bold">Change Password</span>
            </div> */}

            <div
              className="flex items-center gap-4 p-2 hover:bg-coching-text_color "
              onClick={onHnadleClick}
            >
              <span className="rounded-full bg-gray-500 flex items-center justify-center text-white">
                <ClipboardIcon className="w-[25px] h-[25px] text-sm" />
              </span>
              <span className="font-bold">My Courses</span>
            </div>

            <div className="flex items-center gap-4 p-2 hover:bg-coching-text_color ">
              <span className="rounded-full bg-gray-500 flex items-center justify-center text-white">
                <PowerIcon className="w-[25px] h-[25px] text-sm" />
              </span>
              <span className="font-bold">Logout</span>
            </div>
          </div>
        </div>

        {/* second div */}
        <div className="col-span-9 flex flex-col justify-start items-start">
          {isClick ? <MyCourses /> : <MyAccount />}
        </div>

        {/* {<MyCourses /> <ForgetPassword/>} */}
      </div>
    </div>
  );
};

export default Profile;
