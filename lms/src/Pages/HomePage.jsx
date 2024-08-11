import {
  FlagIcon,
  MagnifyingGlassIcon,
  StarIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";
import { Link } from "react-router-dom";
import img1 from "../assets/download.svg";
import img4 from "../assets/peep1.f4841716.svg";
import Instructor from "../assets/Ibrahim.jpg";
import Review1 from "../assets/23.jpeg";
import Merinasoft from "../assets/merinasoft.png";
const imageStyle = {
  position: "absolute",
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
  boxSizing: "border-box",
  padding: 0,
  border: "none",
  margin: "auto",
  display: "block",
  width: 0,
  height: 0,
  minWidth: "100%",
  maxWidth: "100%",
  minHeight: "100%",
  maxHeight: "100%",
  objectFit: "cover",
};
const HomePage = () => {
  const [faqToast, setFaqToast] = useState(false);
  const [visible, setVisible] = useState(false);
  const handleFaq = () => {
    setFaqToast(!faqToast);
  };
  const handleReview = () => {
    setVisible(true);
  };
  return (
    <div className="bg-slate-900 my-4 container">
      <section
        id="Home"
        className="grid sm:grid-cols-10 gap-10 justify-center items-center"
      >
        <div className="bg-coching-nav_color col-span-4 rounded-full flex justify-center items-center">
          <div className="w-90 h-90 rounded-full overflow-hidden">
            <img
              src={"../public/images/banner.png"}
              className="w-full h-full object-cover"
              alt=""
            />
          </div>
        </div>
        <div className="col-span-5 flex flex-col justify-center items-center">
          <h1 className="text-coching-text_color text-5xl sm:w-[400px] items-center font-bold sm:mb-3">
            Im prove Your Online Learning Expreience Better Instantly
          </h1>
          <p className="text-white text-xl mt-6 text-left sm:ml-20">
            We Have 7+ Online Courses more then 1000+ Online Registered
            Students. Find your desiered course from them.
          </p>
          <div className="w-[100%] hidden mt-10">
            <div className="bg-coching-text_color flex h-10 p-1 items-center rounded">
              <input
                type="text"
                placeholder="Search Course..."
                className="flex grow bg-coching-nav_color items-center p-2 h-[100%] outline-none text-white"
              />
              <button className="w-[45px]">
                <MagnifyingGlassIcon className="h-[27px] m-auto stroke-slate-900" />
              </button>
            </div>
          </div>
          <div className="mt-8 sm:ml-[-100px]">
            <div className="flex items-center">
              <span className="w-[30px] h-[30px] bg-slate-200 rounded-full">
                <img
                  src={"../public/images/img1.png"}
                  className="w-full h-full object-cover rounded-full"
                  alt=""
                />
              </span>
              <span className="w-[30px] h-[30px] bg-slate-200 rounded-full ml-[-15px] z-40">
                <img
                  src={"../public/images/img2.jpg"}
                  className="w-full h-full object-cover rounded-full"
                  alt=""
                />
              </span>
              <span className="w-[30px] h-[30px] bg-slate-200 rounded-full ml-[-15px] z-50">
                <img
                  src={"../public/images/img3.png"}
                  className="w-full h-full object-cover rounded-full"
                  alt=""
                />
              </span>
              <p className="text-white text-md text-left">
                1000+ Student Already truested us.
              </p>
              <Link className="text-blue-700 ml-3 font-bold">View Courses</Link>
            </div>
          </div>
        </div>
      </section>
      {/* Courses Section */}
      <section id="Course" className="grid justify-center items-center">
        <span className="text-[40px] font-bold flex justify-center items-center mt-8 text-coching-text_color divide-y divide-yellow-300 ">
          Our Courses
        </span>
        <div className="grid sm:grid-cols-12  gap-4 mt-5">
          <div className="sm:col-span-4 bg-coching-nav_color p-2">
            <Link>
              <img
                src={"../public/images/math.jpg"}
                className="w-full h-full object-cover"
                alt=""
              />
            </Link>
          </div>
          <div className="sm:col-span-4 bg-coching-nav_color p-2">
            <Link>
              <img
                src={"../public/images/physic.jpg"}
                className="w-full h-full object-cover"
                alt=""
              />
            </Link>
          </div>
          <div className="sm:col-span-4 bg-coching-nav_color p-2">
            <Link>
              <img
                src={"../public/images/biology.jpg"}
                className="w-full h-full object-cover"
                alt=""
              />
            </Link>
          </div>
          <div className="sm:col-span-4 bg-coching-nav_color p-2">
            <Link>
              <img
                src={"../public/images/chemistry.jpg"}
                className="w-full h-full object-cover"
                alt=""
              />
            </Link>
          </div>
          <div className="sm:col-span-4 bg-coching-nav_color p-2">
            <Link>
              <img
                src={"../public/images/sql.jpg"}
                className="w-full h-full object-cover"
                alt=""
              />
            </Link>
          </div>
          <div className="sm:col-span-4 bg-coching-nav_color p-2">
            <Link>
              <img
                src={"../public/images/java.png"}
                className="w-full h-full object-cover"
                alt=""
              />
            </Link>
          </div>
        </div>
      </section>

      {/* Section three  */}
      <section id="Feedback" className="divide-y-4 divide-green-200">
        <span className="text-[40px] font-bold flex justify-center items-center mt-8 text-coching-text_color divide-y divide-yellow-300 ">
          Student Feedback
        </span>
        <div className="grid sm:grid-cols-12 mt-10">
          <div className="col-span-5 items-center">
            <img
              src={"../public/images/feedback.png"}
              className="w-full h-full object-cover"
              alt=""
            />
          </div>
          <div className="col-span-5 mt-10 flex flex-col justify-center">
            <h2 className="text-white text-3xl  font-bold sm:mb-3">
              Our Students Are
              <span className="text-coching-text_color"> Our Strength </span>See
              What They Say About Us.
            </h2>
            <p className="text-violet-100">
              Learners have always expressed their love for Trace Accademy.
            </p>
          </div>
        </div>
      </section>
      {/* Review Sectaion */}

      <section className="wrapper bg-1 gradient-primary border-general bg-slate-900 scroll-mt-16  dark:bg-none">
        <div className="container space-y-14">
          <div className="mantine-Container-root px relative md:px-8 lg:px-16 mantine-akkprt">
            <div
              className={` ${
                visible
                  ? "mantine-SimpleGrid-root mantine-c577qn"
                  : "mantine-SimpleGrid-root h-[900px] overflow-y-hidden mantine-c577qn "
              } `}
            >
              <div className="space-y-6">
                <div className="mantine-Paper-root border-general border dark:bg-slate-800/[0.6] mantine-1jdao0l">
                  <div className="mantine-Group-root mantine-6y1794">
                    <span
                      style={{
                        boxSizing: "border-box",
                        display: "inline-block",
                        overflow: "hidden",
                        width: "initial",
                        height: "initial",
                        background: "none",
                        opacity: 1,
                        border: 0,
                        margin: 0,
                        padding: 0,
                        position: "relative",
                        maxWidth: "10%",
                      }}
                    >
                      <span
                        style={{
                          boxSizing: "border-box",
                          display: "block",
                          width: "initial",
                          height: "initial",
                          background: "none",
                          opacity: 1,
                          border: 0,
                          margin: 0,
                          padding: 0,
                          maxWidth: "100%",
                        }}
                      >
                        <img
                          style={{
                            display: "block",
                            maxWidth: "100%",
                            width: "initial",
                            height: "initial",
                            background: "none",
                            opacity: 1,
                            border: 0,
                            margin: 0,
                            padding: 0,
                          }}
                          alt=""
                          aria-hidden="true"
                          src={img1}
                        />
                      </span>
                      <img
                        alt="Masud Pervez"
                        src={`${Review1}?w=50&q=75`}
                        decoding="async"
                        data-nimg="intrinsic"
                        className="mantine-gnzaph mantine-Group-child rounded-full"
                        style={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          bottom: 0,
                          right: 0,
                          boxSizing: "border-box",
                          padding: 0,
                          border: "none",
                          margin: "auto",
                          display: "block",
                          width: 0,
                          height: 0,
                          minWidth: "100%",
                          maxWidth: "100%",
                          minHeight: "100%",
                          maxHeight: "100%",
                        }}
                      />
                      <noscript>
                        <img
                          alt="Masud Pervez"
                          src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F23.5bbb3c7c.jpg&amp;w=96&amp;q=75"
                          decoding="async"
                          data-nimg="intrinsic"
                          style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            bottom: 0,
                            right: 0,
                            boxSizing: "border-box",
                            padding: 0,
                            border: "none",
                            margin: "auto",
                            display: "block",
                            width: 0,
                            height: 0,
                            minWidth: "100%",
                            maxWidth: "100%",
                            minHeight: "100%",
                            maxHeight: "100%",
                          }}
                          className="mantine-gnzaph mantine-Group-child rounded-full"
                          loading="lazy"
                        />
                      </noscript>
                    </span>
                    <div className="mantine-gnzaph mantine-Group-child space-y-1">
                      <div className="mantine-Text-root mantine-1jcp2pl">
                        Masud Pervez
                      </div>
                      <div className="flex space-x-0.5">
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth="0"
                          viewBox="0 0 1024 1024"
                          color="orange"
                          style={{ color: "orange" }}
                          height="14"
                          width="14"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z"></path>
                        </svg>
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth="0"
                          viewBox="0 0 1024 1024"
                          color="orange"
                          style={{ color: "orange" }}
                          height="14"
                          width="14"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z"></path>
                        </svg>
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth="0"
                          viewBox="0 0 1024 1024"
                          color="orange"
                          style={{ color: "orange" }}
                          height="14"
                          width="14"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z"></path>
                        </svg>
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth="0"
                          viewBox="0 0 1024 1024"
                          color="orange"
                          style={{ color: "orange" }}
                          height="14"
                          width="14"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="mantine-TypographyStylesProvider-root mantine-1ctjcu4">
                    <div className="mantine-1ob529b">
                      খুব অল্প সময়ের মধ্যে রিডাক্সের সবকিছু শিক্ষতে পারছি এটাই
                      বড় পাওনা। এত সুন্দর ভাবে বুঝানোর জন্য ধন্যবাদ জানায় সুমিত
                      দাদাকে। আর এই কোর্স করে আমি আমার বাস্তব জীবনে অনেক উপকৃত
                      হয়েছি।
                    </div>
                  </div>
                </div>
                <div className="mantine-Paper-root border-general border dark:bg-slate-800/[0.6] mantine-1jdao0l">
                  <div className="mantine-Group-root mantine-6y1794">
                    <span
                      style={{
                        boxSizing: "border-box",
                        display: "inline-block",
                        overflow: "hidden",
                        width: "initial",
                        height: "initial",
                        background: "none",
                        opacity: 1,
                        border: 0,
                        margin: 0,
                        padding: 0,
                        position: "relative",
                        maxWidth: "10%",
                      }}
                    >
                      <span
                        style={{
                          boxSizing: "border-box",
                          display: "block",
                          width: "initial",
                          height: "initial",
                          background: "none",
                          opacity: 1,
                          border: 0,
                          margin: 0,
                          padding: 0,
                          maxWidth: "100%",
                        }}
                      >
                        <img
                          style={{
                            display: "block",
                            maxWidth: "100%",
                            width: "initial",
                            height: "initial",
                            background: "none",
                            opacity: 1,
                            border: 0,
                            margin: 0,
                            padding: 0,
                          }}
                          alt=""
                          aria-hidden="true"
                          src={img1}
                        />
                      </span>
                      <img
                        alt="Masud Pervez"
                        src={`${Instructor}?w=96&q=75`}
                        decoding="async"
                        data-nimg="intrinsic"
                        className="mantine-gnzaph mantine-Group-child rounded-full"
                        style={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          bottom: 0,
                          right: 0,
                          boxSizing: "border-box",
                          padding: 0,
                          border: "none",
                          margin: "auto",
                          display: "block",
                          width: 0,
                          height: 0,
                          minWidth: "100%",
                          maxWidth: "100%",
                          minHeight: "100%",
                          maxHeight: "100%",
                        }}
                      />
                      <noscript>
                        <img
                          alt="Masud Pervez"
                          src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F23.5bbb3c7c.jpg&amp;w=96&amp;q=75"
                          decoding="async"
                          data-nimg="intrinsic"
                          style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            bottom: 0,
                            right: 0,
                            boxSizing: "border-box",
                            padding: 0,
                            border: "none",
                            margin: "auto",
                            display: "block",
                            width: 0,
                            height: 0,
                            minWidth: "100%",
                            maxWidth: "100%",
                            minHeight: "100%",
                            maxHeight: "100%",
                          }}
                          className="mantine-gnzaph mantine-Group-child rounded-full"
                          loading="lazy"
                        />
                      </noscript>
                    </span>
                    <div className="mantine-gnzaph mantine-Group-child space-y-1">
                      <div className="mantine-Text-root mantine-1jcp2pl">
                        Masud Pervez
                      </div>
                      <div className="flex space-x-0.5">
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth="0"
                          viewBox="0 0 1024 1024"
                          color="orange"
                          style={{ color: "orange" }}
                          height="14"
                          width="14"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z"></path>
                        </svg>
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth="0"
                          viewBox="0 0 1024 1024"
                          color="orange"
                          style={{ color: "orange" }}
                          height="14"
                          width="14"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z"></path>
                        </svg>
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth="0"
                          viewBox="0 0 1024 1024"
                          color="orange"
                          style={{ color: "orange" }}
                          height="14"
                          width="14"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z"></path>
                        </svg>
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth="0"
                          viewBox="0 0 1024 1024"
                          color="orange"
                          style={{ color: "orange" }}
                          height="14"
                          width="14"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="mantine-TypographyStylesProvider-root mantine-1ctjcu4">
                    <div className="mantine-1ob529b">
                      The course was the best I have ever seen. I have done
                      other courses before but never got full time support like
                      this course. LWS team always support us in any matter.
                      Also one thing that I liked very much was the live session
                      every week which cleared many questions and problems in
                      our mind. Also the marking of the course has been done
                      very well and all our mistakes have been given line by
                      line. Also I learned how to code cleanly and after
                      pointing out mistakes I got it right. No more problems
                      with my redux I am very confident now, thanks a lot to LWS
                      team for giving us such a beautiful course.
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="mantine-Paper-root border-general border dark:bg-slate-800/[0.6] mantine-1jdao0l">
                  <div className="mantine-Group-root mantine-6y1794">
                    <span
                      style={{
                        boxSizing: "border-box",
                        display: "inline-block",
                        overflow: "hidden",
                        width: "initial",
                        height: "initial",
                        background: "none",
                        opacity: 1,
                        border: 0,
                        margin: 0,
                        padding: 0,
                        position: "relative",
                        maxWidth: "10%",
                      }}
                    >
                      <span
                        style={{
                          boxSizing: "border-box",
                          display: "block",
                          width: "initial",
                          height: "initial",
                          background: "none",
                          opacity: 1,
                          border: 0,
                          margin: 0,
                          padding: 0,
                          maxWidth: "100%",
                        }}
                      >
                        <img
                          style={{
                            display: "block",
                            maxWidth: "100%",
                            width: "initial",
                            height: "initial",
                            background: "none",
                            opacity: 1,
                            border: 0,
                            margin: 0,
                            padding: 0,
                          }}
                          alt=""
                          aria-hidden="true"
                          src={img1}
                        />
                      </span>
                      <img
                        alt="Masud Pervez"
                        src={`${Instructor}?w=96&q=75`}
                        decoding="async"
                        data-nimg="intrinsic"
                        className="mantine-gnzaph mantine-Group-child rounded-full"
                        style={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          bottom: 0,
                          right: 0,
                          boxSizing: "border-box",
                          padding: 0,
                          border: "none",
                          margin: "auto",
                          display: "block",
                          width: 0,
                          height: 0,
                          minWidth: "100%",
                          maxWidth: "100%",
                          minHeight: "100%",
                          maxHeight: "100%",
                        }}
                      />
                      <noscript>
                        <img
                          alt="Masud Pervez"
                          src={`${Instructor}?w=96&q=75`}
                          decoding="async"
                          data-nimg="intrinsic"
                          style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            bottom: 0,
                            right: 0,
                            boxSizing: "border-box",
                            padding: 0,
                            border: "none",
                            margin: "auto",
                            display: "block",
                            width: 0,
                            height: 0,
                            minWidth: "100%",
                            maxWidth: "100%",
                            minHeight: "100%",
                            maxHeight: "100%",
                          }}
                          className="mantine-gnzaph mantine-Group-child rounded-full"
                          loading="lazy"
                        />
                      </noscript>
                    </span>
                    <div className="mantine-gnzaph mantine-Group-child space-y-1">
                      <div className="mantine-Text-root mantine-1jcp2pl">
                        Masud Pervez
                      </div>
                      <div className="flex space-x-0.5">
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth="0"
                          viewBox="0 0 1024 1024"
                          color="orange"
                          style={{ color: "orange" }}
                          height="14"
                          width="14"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z"></path>
                        </svg>
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth="0"
                          viewBox="0 0 1024 1024"
                          color="orange"
                          style={{ color: "orange" }}
                          height="14"
                          width="14"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z"></path>
                        </svg>
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth="0"
                          viewBox="0 0 1024 1024"
                          color="orange"
                          style={{ color: "orange" }}
                          height="14"
                          width="14"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z"></path>
                        </svg>
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth="0"
                          viewBox="0 0 1024 1024"
                          color="orange"
                          style={{ color: "orange" }}
                          height="14"
                          width="14"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="mantine-TypographyStylesProvider-root mantine-1ctjcu4">
                    <div className="mantine-1ob529b">
                      I have learned a lot of things and gained confidence about
                      redux. The quiz helps me learn from the documentation and
                      the model test helped me practice new things in redux. The
                      code review and result section is the perfect things in
                      this course. every task has been checked and giving
                      reviews about the programmer skills is awesome. I get more
                      confidence when I see the ranking section. Because a lot
                      of good programmers have ranked in this course
                    </div>
                  </div>
                </div>
                <div className="mantine-Paper-root border-general border dark:bg-slate-800/[0.6] mantine-1jdao0l">
                  <div className="mantine-Group-root mantine-6y1794">
                    <span
                      style={{
                        boxSizing: "border-box",
                        display: "inline-block",
                        overflow: "hidden",
                        width: "initial",
                        height: "initial",
                        background: "none",
                        opacity: 1,
                        border: 0,
                        margin: 0,
                        padding: 0,
                        position: "relative",
                        maxWidth: "10%",
                      }}
                    >
                      <span
                        style={{
                          boxSizing: "border-box",
                          display: "block",
                          width: "initial",
                          height: "initial",
                          background: "none",
                          opacity: 1,
                          border: 0,
                          margin: 0,
                          padding: 0,
                          maxWidth: "100%",
                        }}
                      >
                        <img
                          style={{
                            display: "block",
                            maxWidth: "100%",
                            width: "initial",
                            height: "initial",
                            background: "none",
                            opacity: 1,
                            border: 0,
                            margin: 0,
                            padding: 0,
                          }}
                          alt=""
                          aria-hidden="true"
                          src={img1}
                        />
                      </span>
                      <img
                        alt="Masud Pervez"
                        src={`${Instructor}?w=96&q=75`}
                        decoding="async"
                        data-nimg="intrinsic"
                        className="mantine-gnzaph mantine-Group-child rounded-full"
                        style={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          bottom: 0,
                          right: 0,
                          boxSizing: "border-box",
                          padding: 0,
                          border: "none",
                          margin: "auto",
                          display: "block",
                          width: 0,
                          height: 0,
                          minWidth: "100%",
                          maxWidth: "100%",
                          minHeight: "100%",
                          maxHeight: "100%",
                        }}
                      />
                      <noscript>
                        <img
                          alt="Masud Pervez"
                          src={`${Instructor}?w=96&q=75`}
                          decoding="async"
                          data-nimg="intrinsic"
                          style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            bottom: 0,
                            right: 0,
                            boxSizing: "border-box",
                            padding: 0,
                            border: "none",
                            margin: "auto",
                            display: "block",
                            width: 0,
                            height: 0,
                            minWidth: "100%",
                            maxWidth: "100%",
                            minHeight: "100%",
                            maxHeight: "100%",
                          }}
                          className="mantine-gnzaph mantine-Group-child rounded-full"
                          loading="lazy"
                        />
                      </noscript>
                    </span>
                    <div className="mantine-gnzaph mantine-Group-child space-y-1">
                      <div className="mantine-Text-root mantine-1jcp2pl">
                        Masud Pervez
                      </div>
                      <div className="flex space-x-0.5">
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth="0"
                          viewBox="0 0 1024 1024"
                          color="orange"
                          style={{ color: "orange" }}
                          height="14"
                          width="14"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z"></path>
                        </svg>
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth="0"
                          viewBox="0 0 1024 1024"
                          color="orange"
                          style={{ color: "orange" }}
                          height="14"
                          width="14"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z"></path>
                        </svg>
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth="0"
                          viewBox="0 0 1024 1024"
                          color="orange"
                          style={{ color: "orange" }}
                          height="14"
                          width="14"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z"></path>
                        </svg>
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth="0"
                          viewBox="0 0 1024 1024"
                          color="orange"
                          style={{ color: "orange" }}
                          height="14"
                          width="14"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="mantine-TypographyStylesProvider-root mantine-1ctjcu4">
                    <div className="mantine-1ob529b">
                      I have learned a lot of things and gained confidence about
                      redux. The quiz helps me learn from the documentation and
                      the model test helped me practice new things in redux. The
                      code review and result section is the perfect things in
                      this course. every task has been checked and giving
                      reviews about the programmer skills is awesome. I get more
                      confidence when I see the ranking section. Because a lot
                      of good programmers have ranked in this course
                    </div>
                  </div>
                </div>
                <div className="mantine-Paper-root border-general border dark:bg-slate-800/[0.6] mantine-1jdao0l">
                  <div className="mantine-Group-root mantine-6y1794">
                    <span
                      style={{
                        boxSizing: "border-box",
                        display: "inline-block",
                        overflow: "hidden",
                        width: "initial",
                        height: "initial",
                        background: "none",
                        opacity: 1,
                        border: 0,
                        margin: 0,
                        padding: 0,
                        position: "relative",
                        maxWidth: "10%",
                      }}
                    >
                      <span
                        style={{
                          boxSizing: "border-box",
                          display: "block",
                          width: "initial",
                          height: "initial",
                          background: "none",
                          opacity: 1,
                          border: 0,
                          margin: 0,
                          padding: 0,
                          maxWidth: "100%",
                        }}
                      >
                        <img
                          style={{
                            display: "block",
                            maxWidth: "100%",
                            width: "initial",
                            height: "initial",
                            background: "none",
                            opacity: 1,
                            border: 0,
                            margin: 0,
                            padding: 0,
                          }}
                          alt=""
                          aria-hidden="true"
                          src={img1}
                        />
                      </span>
                      <img
                        alt="Masud Pervez"
                        src={`${Instructor}?w=96&q=75`}
                        decoding="async"
                        data-nimg="intrinsic"
                        className="mantine-gnzaph mantine-Group-child rounded-full"
                        style={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          bottom: 0,
                          right: 0,
                          boxSizing: "border-box",
                          padding: 0,
                          border: "none",
                          margin: "auto",
                          display: "block",
                          width: 0,
                          height: 0,
                          minWidth: "100%",
                          maxWidth: "100%",
                          minHeight: "100%",
                          maxHeight: "100%",
                        }}
                      />
                      <noscript>
                        <img
                          alt="Masud Pervez"
                          src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F23.5bbb3c7c.jpg&amp;w=96&amp;q=75"
                          decoding="async"
                          data-nimg="intrinsic"
                          style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            bottom: 0,
                            right: 0,
                            boxSizing: "border-box",
                            padding: 0,
                            border: "none",
                            margin: "auto",
                            display: "block",
                            width: 0,
                            height: 0,
                            minWidth: "100%",
                            maxWidth: "100%",
                            minHeight: "100%",
                            maxHeight: "100%",
                          }}
                          className="mantine-gnzaph mantine-Group-child rounded-full"
                          loading="lazy"
                        />
                      </noscript>
                    </span>
                    <div className="mantine-gnzaph mantine-Group-child space-y-1">
                      <div className="mantine-Text-root mantine-1jcp2pl">
                        Masud Pervez
                      </div>
                      <div className="flex space-x-0.5">
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth="0"
                          viewBox="0 0 1024 1024"
                          color="orange"
                          style={{ color: "orange" }}
                          height="14"
                          width="14"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z"></path>
                        </svg>
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth="0"
                          viewBox="0 0 1024 1024"
                          color="orange"
                          style={{ color: "orange" }}
                          height="14"
                          width="14"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z"></path>
                        </svg>
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth="0"
                          viewBox="0 0 1024 1024"
                          color="orange"
                          style={{ color: "orange" }}
                          height="14"
                          width="14"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z"></path>
                        </svg>
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth="0"
                          viewBox="0 0 1024 1024"
                          color="orange"
                          style={{ color: "orange" }}
                          height="14"
                          width="14"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="mantine-TypographyStylesProvider-root mantine-1ctjcu4">
                    <div className="mantine-1ob529b">
                      Quality not depends on Quantity! এর চাক্ষুষ প্রমাণ সুমিত
                      ভাইয়ের থিংক ইন এ রিডাক্স ওয়ে কোর্সটি। যদি আপনি কোর্সটিকে
                      এর মাত্র ১৯৯৯ টাকা ফি দিয়ে বিচার করেন তাহলে আপনি ষোল আনাই
                      ভুল। সুমিত ভাইয়ের শেখানোর পদ্ধতি নিয়ে নতুন করে কিছুই বলার
                      নেই। বিলাসী নারীদের কাছে অলংকার ( সোনা, হীরা ) যেমন প্রিয়
                      ঠিক তেমনই প্রকৃত লার্নারদের কাছে সুমিত ভাইয়ের টিউটোরিয়াল
                      তেমন প্রিয়। যদি স্পেশালভাবে কিছু বলার থাকে তাহলে আমি বলব
                      LWS এর চমৎকার সাপোর্টের কথা। এইটা আসলেই স্পেশাল ছিল ।
                      সুমিত ভাই ও বাকি এডমিন প্যানেল আমাদের সাথে এতটাই আন্তরিক ও
                      ইন্টার‍্যাক্টিভ ছিল যা আপনাকে আমি বলে বুঝাতে পারব না । আর
                      কিছু বলতে চাই না তবে LWS কে একটা ধন্যবাদের আনলিমিটেড
                      প্যাকেজ দিয়ে দিলাম।
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="mantine-Paper-root border-general border dark:bg-slate-800/[0.6] mantine-1jdao0l">
                  <div className="mantine-Group-root mantine-6y1794">
                    <span
                      style={{
                        boxSizing: "border-box",
                        display: "inline-block",
                        overflow: "hidden",
                        width: "initial",
                        height: "initial",
                        background: "none",
                        opacity: 1,
                        border: 0,
                        margin: 0,
                        padding: 0,
                        position: "relative",
                        maxWidth: "10%",
                      }}
                    >
                      <span
                        style={{
                          boxSizing: "border-box",
                          display: "block",
                          width: "initial",
                          height: "initial",
                          background: "none",
                          opacity: 1,
                          border: 0,
                          margin: 0,
                          padding: 0,
                          maxWidth: "100%",
                        }}
                      >
                        <img
                          style={{
                            display: "block",
                            maxWidth: "100%",
                            width: "initial",
                            height: "initial",
                            background: "none",
                            opacity: 1,
                            border: 0,
                            margin: 0,
                            padding: 0,
                          }}
                          alt=""
                          aria-hidden="true"
                          src={img1}
                        />
                      </span>
                      <img
                        alt="Masud Pervez"
                        src={`${Review1}?w=50&q=75`}
                        decoding="async"
                        data-nimg="intrinsic"
                        className="mantine-gnzaph mantine-Group-child rounded-full"
                        style={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          bottom: 0,
                          right: 0,
                          boxSizing: "border-box",
                          padding: 0,
                          border: "none",
                          margin: "auto",
                          display: "block",
                          width: 0,
                          height: 0,
                          minWidth: "100%",
                          maxWidth: "100%",
                          minHeight: "100%",
                          maxHeight: "100%",
                        }}
                      />
                      <noscript>
                        <img
                          alt="Masud Pervez"
                          src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F23.5bbb3c7c.jpg&amp;w=96&amp;q=75"
                          decoding="async"
                          data-nimg="intrinsic"
                          style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            bottom: 0,
                            right: 0,
                            boxSizing: "border-box",
                            padding: 0,
                            border: "none",
                            margin: "auto",
                            display: "block",
                            width: 0,
                            height: 0,
                            minWidth: "100%",
                            maxWidth: "100%",
                            minHeight: "100%",
                            maxHeight: "100%",
                          }}
                          className="mantine-gnzaph mantine-Group-child rounded-full"
                          loading="lazy"
                        />
                      </noscript>
                    </span>
                    <div className="mantine-gnzaph mantine-Group-child space-y-1">
                      <div className="mantine-Text-root mantine-1jcp2pl">
                        Masud Pervez
                      </div>
                      <div className="flex space-x-0.5">
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth="0"
                          viewBox="0 0 1024 1024"
                          color="orange"
                          style={{ color: "orange" }}
                          height="14"
                          width="14"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z"></path>
                        </svg>
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth="0"
                          viewBox="0 0 1024 1024"
                          color="orange"
                          style={{ color: "orange" }}
                          height="14"
                          width="14"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z"></path>
                        </svg>
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth="0"
                          viewBox="0 0 1024 1024"
                          color="orange"
                          style={{ color: "orange" }}
                          height="14"
                          width="14"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z"></path>
                        </svg>
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth="0"
                          viewBox="0 0 1024 1024"
                          color="orange"
                          style={{ color: "orange" }}
                          height="14"
                          width="14"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z"></path>
                        </svg>
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth="0"
                          viewBox="0 0 1024 1024"
                          color="orange"
                          style={{ color: "orange" }}
                          height="14"
                          width="14"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="mantine-TypographyStylesProvider-root mantine-1ctjcu4">
                    <div className="mantine-1ob529b">
                      খুব অল্প সময়ের মধ্যে রিডাক্সের সবকিছু শিক্ষতে পারছি এটাই
                      বড় পাওনা। এত সুন্দর ভাবে বুঝানোর জন্য ধন্যবাদ জানায় সুমিত
                      দাদাকে। আর এই কোর্স করে আমি আমার বাস্তব জীবনে অনেক উপকৃত
                      হয়েছি।
                    </div>
                  </div>
                </div>
                <div className="mantine-Paper-root border-general border dark:bg-slate-800/[0.6] mantine-1jdao0l">
                  <div className="mantine-Group-root mantine-6y1794">
                    <span
                      style={{
                        boxSizing: "border-box",
                        display: "inline-block",
                        overflow: "hidden",
                        width: "initial",
                        height: "initial",
                        background: "none",
                        opacity: 1,
                        border: 0,
                        margin: 0,
                        padding: 0,
                        position: "relative",
                        maxWidth: "10%",
                      }}
                    >
                      <span
                        style={{
                          boxSizing: "border-box",
                          display: "block",
                          width: "initial",
                          height: "initial",
                          background: "none",
                          opacity: 1,
                          border: 0,
                          margin: 0,
                          padding: 0,
                          maxWidth: "100%",
                        }}
                      >
                        <img
                          style={{
                            display: "block",
                            maxWidth: "100%",
                            width: "initial",
                            height: "initial",
                            background: "none",
                            opacity: 1,
                            border: 0,
                            margin: 0,
                            padding: 0,
                          }}
                          alt=""
                          aria-hidden="true"
                          src={img1}
                        />
                      </span>
                      <img
                        alt="Masud Pervez"
                        src={`${Instructor}?w=96&q=75`}
                        decoding="async"
                        data-nimg="intrinsic"
                        className="mantine-gnzaph mantine-Group-child rounded-full"
                        style={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          bottom: 0,
                          right: 0,
                          boxSizing: "border-box",
                          padding: 0,
                          border: "none",
                          margin: "auto",
                          display: "block",
                          width: 0,
                          height: 0,
                          minWidth: "100%",
                          maxWidth: "100%",
                          minHeight: "100%",
                          maxHeight: "100%",
                        }}
                      />
                      <noscript>
                        <img
                          alt="Masud Pervez"
                          src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F23.5bbb3c7c.jpg&amp;w=96&amp;q=75"
                          decoding="async"
                          data-nimg="intrinsic"
                          style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            bottom: 0,
                            right: 0,
                            boxSizing: "border-box",
                            padding: 0,
                            border: "none",
                            margin: "auto",
                            display: "block",
                            width: 0,
                            height: 0,
                            minWidth: "100%",
                            maxWidth: "100%",
                            minHeight: "100%",
                            maxHeight: "100%",
                          }}
                          className="mantine-gnzaph mantine-Group-child rounded-full"
                          loading="lazy"
                        />
                      </noscript>
                    </span>
                    <div className="mantine-gnzaph mantine-Group-child space-y-1">
                      <div className="mantine-Text-root mantine-1jcp2pl">
                        Masud Pervez
                      </div>
                      <div className="flex space-x-0.5">
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth="0"
                          viewBox="0 0 1024 1024"
                          color="orange"
                          style={{ color: "orange" }}
                          height="14"
                          width="14"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z"></path>
                        </svg>
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth="0"
                          viewBox="0 0 1024 1024"
                          color="orange"
                          style={{ color: "orange" }}
                          height="14"
                          width="14"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z"></path>
                        </svg>
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth="0"
                          viewBox="0 0 1024 1024"
                          color="orange"
                          style={{ color: "orange" }}
                          height="14"
                          width="14"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z"></path>
                        </svg>
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth="0"
                          viewBox="0 0 1024 1024"
                          color="orange"
                          style={{ color: "orange" }}
                          height="14"
                          width="14"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="mantine-TypographyStylesProvider-root mantine-1ctjcu4">
                    <div className="mantine-1ob529b">
                      খুব অল্প সময়ের মধ্যে রিডাক্সের সবকিছু শিক্ষতে পারছি এটাই
                      বড় পাওনা। এত সুন্দর ভাবে বুঝানোর জন্য ধন্যবাদ জানায় সুমিত
                      দাদাকে। আর এই কোর্স করে আমি আমার বাস্তব জীবনে অনেক উপকৃত
                      হয়েছি।
                    </div>
                  </div>
                </div>
                <div className="mantine-Paper-root border-general border dark:bg-slate-800/[0.6] mantine-1jdao0l">
                  <div className="mantine-Group-root mantine-6y1794">
                    <span
                      style={{
                        boxSizing: "border-box",
                        display: "inline-block",
                        overflow: "hidden",
                        width: "initial",
                        height: "initial",
                        background: "none",
                        opacity: 1,
                        border: 0,
                        margin: 0,
                        padding: 0,
                        position: "relative",
                        maxWidth: "10%",
                      }}
                    >
                      <span
                        style={{
                          boxSizing: "border-box",
                          display: "block",
                          width: "initial",
                          height: "initial",
                          background: "none",
                          opacity: 1,
                          border: 0,
                          margin: 0,
                          padding: 0,
                          maxWidth: "100%",
                        }}
                      >
                        <img
                          style={{
                            display: "block",
                            maxWidth: "100%",
                            width: "initial",
                            height: "initial",
                            background: "none",
                            opacity: 1,
                            border: 0,
                            margin: 0,
                            padding: 0,
                          }}
                          alt=""
                          aria-hidden="true"
                          src={img1}
                        />
                      </span>
                      <img
                        alt="Masud Pervez"
                        src={`${Instructor}?w=96&q=75`}
                        decoding="async"
                        data-nimg="intrinsic"
                        className="mantine-gnzaph mantine-Group-child rounded-full"
                        style={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          bottom: 0,
                          right: 0,
                          boxSizing: "border-box",
                          padding: 0,
                          border: "none",
                          margin: "auto",
                          display: "block",
                          width: 0,
                          height: 0,
                          minWidth: "100%",
                          maxWidth: "100%",
                          minHeight: "100%",
                          maxHeight: "100%",
                        }}
                      />
                      <noscript>
                        <img
                          alt="Masud Pervez"
                          src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F23.5bbb3c7c.jpg&amp;w=96&amp;q=75"
                          decoding="async"
                          data-nimg="intrinsic"
                          style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            bottom: 0,
                            right: 0,
                            boxSizing: "border-box",
                            padding: 0,
                            border: "none",
                            margin: "auto",
                            display: "block",
                            width: 0,
                            height: 0,
                            minWidth: "100%",
                            maxWidth: "100%",
                            minHeight: "100%",
                            maxHeight: "100%",
                          }}
                          className="mantine-gnzaph mantine-Group-child rounded-full"
                          loading="lazy"
                        />
                      </noscript>
                    </span>
                    <div className="mantine-gnzaph mantine-Group-child space-y-1">
                      <div className="mantine-Text-root mantine-1jcp2pl">
                        Masud Pervez
                      </div>
                      <div className="flex space-x-0.5">
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth="0"
                          viewBox="0 0 1024 1024"
                          color="orange"
                          style={{ color: "orange" }}
                          height="14"
                          width="14"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z"></path>
                        </svg>
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth="0"
                          viewBox="0 0 1024 1024"
                          color="orange"
                          style={{ color: "orange" }}
                          height="14"
                          width="14"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z"></path>
                        </svg>
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth="0"
                          viewBox="0 0 1024 1024"
                          color="orange"
                          style={{ color: "orange" }}
                          height="14"
                          width="14"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z"></path>
                        </svg>
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth="0"
                          viewBox="0 0 1024 1024"
                          color="orange"
                          style={{ color: "orange" }}
                          height="14"
                          width="14"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="mantine-TypographyStylesProvider-root mantine-1ctjcu4">
                    <div className="mantine-1ob529b">
                      কোর্সটি অসাধারণ। রিডাক্স এর প্রথম থেকে শুরু করে এডভান্স
                      পর্যন্ত যত টুকু দেখিয়েছেন স্যার, এত টুকু যদি লার্নাররা
                      ভালো করে কম্পলিট করে থাকেন, তাহলে রিডাক্স নিয়ে কাজ করতে
                      কোন প্রবলেম হবে না। আমার লার্নারদের প্রতি একটি সাজেশন
                      থাকবে। কোর্স এর ভিডিও প্রতিদিন দেখা শেষ করে প্র্যাকটিস
                      করবেন এবং যত টুকু স্যার প্রতিদিন শেখাবেন। সেই টপিক অনুযায়ী
                      রিডাক্স এর অফিশিয়াল ডকুমেন্টেশন পড়বেন। এবং সব শেষে একটি
                      কথাই বলবো কোর্স টি যারা ক্রয় করেন নি, তারা অবশ্যই কোর্স টি
                      ক্রয় করবেন। লার্নার দের প্রতি শুভ কামনা থাকলো।
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {!visible && (
              <div className="absolute inset-x-0 lg:inset-x-16 bottom-0 flex justify-center bg-gradient-to-t from-slate-900 pt-32 pb-8 dark:from-slate-900 false ">
                <button
                  className="mantine-Button-filled  dark:bg-secondary2 hover:bg-slate-700 dark:hover:bg-secondary1 text-white mantine-Button-root mantine-1ogymfb"
                  type="button"
                  onClick={handleReview}
                >
                  <div className="mantine-3xbgk5 mantine-Button-inner">
                    <span className="mantine-qo1k2 mantine-Button-label">
                      <div className="flex justify-between gap-2">
                        <span>আরো রিভিউ দেখুন</span>
                      </div>
                    </span>
                  </div>
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* FAQ */}
      {/* <section className="flex flex-col justify-center items-center gap-4">
        <span className="mt-5 mb-5 text-4xl font-bold text-white divide-y divide-cyan-100">
          FAQ
        </span>
        <div
          className="bg-coching-nav_color w-[100%] flex justify-between p-2 items-center rounded"
          onClick={handleFaq}
        >
          <h2>Something is problem in Video</h2>
          <span>
            {faqToast ? (
              <ChevronUpIcon className="h-[20px]" />
            ) : (
              <ChevronDownIcon className="h-[20px]" />
            )}
          </span>
        </div>
        <div
          className="bg-coching-nav_color w-[100%] flex justify-between p-2 items-center rounded"
          onClick={handleFaq}
        >
          <h2>Something is problem in Video</h2>
          <span>
            {faqToast ? (
              <ChevronUpIcon className="h-[20px]" />
            ) : (
              <ChevronDownIcon className="h-[20px]" />
            )}
          </span>
        </div>
        <div
          className="bg-coching-nav_color w-[100%] flex justify-between p-2 items-center rounded"
          onClick={handleFaq}
        >
          <h2>Something is problem in Video</h2>
          <span>
            {faqToast ? (
              <ChevronUpIcon className="h-[20px]" />
            ) : (
              <ChevronDownIcon className="h-[20px]" />
            )}
          </span>
        </div>
        <div
          className="bg-coching-nav_color w-[100%] flex justify-between p-2 items-center rounded"
          onClick={handleFaq}
        >
          <h2>Something is problem in Video</h2>
          <span>
            {faqToast ? (
              <ChevronUpIcon className="h-[20px]" />
            ) : (
              <ChevronDownIcon className="h-[20px]" />
            )}
          </span>
        </div>
        {faqToast && (
          <div className="absolute z-40 bg-coching-nav_color w-[80%] rounded">
            <div className="flex justify-between">
              <div className="flex flex-col">
                <h2 className="text-xl font-bold">
                  Something is problem in Video
                </h2>
                <p className="">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga
                  modi voluptates, sapiente dolore sit quasi veritatis dicta
                  minima corporis exercitationem!
                </p>
              </div>
              <span onClick={handleFaq}>
                <ChevronUpIcon className="h-[20px]" />
              </span>
            </div>
          </div>
        )}
      </section> */}
    </div>
  );
};

export default HomePage;
