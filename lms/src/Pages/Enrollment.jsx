/* eslint-disable react/no-unescaped-entities */
import img1 from "../assets/download.svg";
import img2 from "../assets/peep1.svg";
import img3 from "../assets/peep4.d500693a.svg";
import img4 from "../assets/peep1.f4841716.svg";
import img5 from "../assets/faq.8116aa7d.svg";
import Instructor from "../assets/Ibrahim.jpg";
import Review1 from "../assets/23.jpeg";
import Merinasoft from "../assets/merinasoft.png";
import { MdOutlineWatchLater } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import content from "../assets/content.svg";
import { useState, useEffect } from "react";
import { MdOutlineOndemandVideo } from "react-icons/md";
import { Modal } from "antd";
import { CgLock } from "react-icons/cg";
import '@dotlottie/player-component';

import { useNavigate } from "react-router-dom";
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
function Enrollment() {
  const [visible, setVisible] = useState(false);
  const [Openvisible, setOpenVisible] = useState(false);
  const navigate = useNavigate();
  const [videoData, setVideoData] = useState([
    {
      id: 1,
      title:
        "Day 1 - Beginner - Working with Variables in Python to Manage Data",
      src: ["https://media.w3.org/2010/05/sintel/trailer_hd.mp4"],
      payment: true,
    },
    {
      id: 2,
      title:
        "Day 2 - Beginner - Understanding Data Types and How to Manipulate Strings",
      src: ["https://www.youtube.com/watch?v=g94mFXMp1gU"],
      payment: false,
    },
    {
      id: 3,
      title: "Day 3 - Beginner - Control Flow and Logical Operators",
      src: ["https://www.youtube.com/watch?v=AnotherVideoURL2"],
      payment: false,
    },
    {
      id: 4,
      title: "Day 4 - Beginner - Randomisation and Python Lists",
      src: ["https://www.youtube.com/watch?v=AnotherVideoURL2"],
      payment: false,
    },
    {
      id: 5,
      title: "Day 5 - Beginner - Python Loops",
      src: ["https://www.youtube.com/watch?v=AnotherVideoURL2"],
      payment: false,
    },
    {
      id: 6,
      title: "Day 6 - Beginner - Python Functions & Karel",
      src: ["https://www.youtube.com/watch?v=AnotherVideoURL2"],
      payment: false,
    },
    {
      id: 7,
      title: "Day 8 - Beginner - Function Parameters & Caesar Cipher",
      src: ["https://www.youtube.com/watch?v=AnotherVideoURL2"],
      payment: false,
    },
    // Add more video data as needed
  ]);

  const [Previewid, setPreviewId] = useState(null);
  const [id, setId] = useState(null);

  const handleReview = () => {
    setVisible(true);
  };

  const handlePreviewReply = (item) => {
    if (Previewid === item) {
      setPreviewId(null);
      setOpenVisible(false);
    } else {
      setPreviewId(item);
      setOpenVisible(true);
    }
  };

  const handleviewReply = (item) => {
    if (id === item) {
      setId(null);
      setOpenVisible(false);
    } else {
      setId(item);
      setOpenVisible(true);
    }
  };
  const [modal1Open, setModal1Open] = useState(false);
  const [source, setSource] = useState("");
  const [videoId, setVideoId] = useState("");
  const [otp, setOtp] = useState("");
  const [playbackInfo, setPlaybackInfo] = useState("");
  const handleOpen = (item, payment) => {
    if (payment) {
      setModal1Open(true);
      setSource(item);

      fetchVideoData(item);
    }
  };
  // const drmConfig = {
  //   servers: {
  //     "com.widevine.alpha": "https://your-drm-license-server-url",
  //   },
  //   advanced: {
  //     "com.widevine.alpha": {
  //       videoRobustness: "SW_SECURE_DECODE",
  //       audioRobustness: "SW_SECURE_DECODE",
  //     },
  //   },
  // };
  const handlecancel = () => {
    setModal1Open(false);
  };

  const fetchVideoData = async () => {
    try {
      const response = await fetch("http://localhost:8080/api/vdocipher/otp", {
        method: "POST",
        body: { videoId },
      });
      setOtp(response.data.otp);
      setPlaybackInfo(response.data.playbackInfo);
    } catch (error) {
      console.error("Error fetching video data", error);
    }
  };

  fetchVideoData();

  useEffect(() => {
    if (!modal1Open) {
      // Pause the video when the modal is closed
      const videoElement = document.getElementById("shaka-video");
      if (videoElement) {
        videoElement.pause();
      }
    }
  }, [modal1Open]);

  const calculateIndividualDuration = (source) => {
    return new Promise((resolve) => {
      // Assuming each source is a video URL
      const video = document.createElement("video");
      video.src = source;
      video.addEventListener("loadedmetadata", () => {
        resolve(video.duration);
      });
    });
  };
  const handleNavigate = () => {
    navigate("/enroll");
  };
  return (
    <>
      <div className="w-full bg-pattern md:h-full py-10 dark:bg-dpattern lg:flex lg:h-full lg:items-center lg:justify-center lg:py-0">
        <div className="container container_div opacity-100">
          <div className="mt-16  flex flex-col gap-10 lg:mt-0   lg:flex-row lg:gap-28">
            <div className="flex flex-col space-y-4 text-center lg:text-left">
              <h2 className="md:text-normal text-xs font-semibold text-[#FFC700]">
                Bangla React-Next JS Course
              </h2>
              <h1 className="hero-title">
                <span className="text-[#07A8ED]">Reactive </span> Accelerator
              </h1>
              <p className="text-1 text-medium mt-8 text-center lg:text-left">
                We believe that this course's project-based learning approach
                will help you become a proficient React front-end developer,
                along with understanding the fundamentals and essentials of
                React and NextJS from the documentation.
              </p>
              <div className="mx-auto mt-10 flex gap-4 lg:mx-0">
                <div className="flex flex-col space-y-3">
                  <button
                    onClick={handleNavigate}
                    className="mantine-Button-filled mt-4   hover:bg-secondary1 text-white mantine-Button-root mantine-1ogymfb"
                  >
                    <div className="mantine-3xbgk5 mantine-Button-inner">
                      <span className="mantine-qo1k2 mantine-Button-label">
                        <div className="flex justify-between items-center gap-2">
                          <span>
                            <MdOutlineWatchLater size={20} />
                          </span>
                          <span>11,100</span>
                          <span className="flex items-center text-secondary1 text-secondary1">
                            |
                          </span>
                          <span className="flex items-center">Enroll</span>
                        </div>
                      </span>
                    </div>
                  </button>
                </div>
              </div>
            </div>
            <div className="relative flex-1 items-center justify-center">
              <div className="aspect-video scale-100 overflow-hidden rounded-md ring-2 ring-[#61D0D7] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(97,208,215,.5)] lg:!h-[350px] lg:!w-[600px]">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/vzdvB3vHE3c?si=jsvkB1y0nL-JIsEN"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen=""
                  data-gtm-yt-inspected-5="true"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="wrapper scroll-mt-16 bg-left bg-no-repeat dark:bg-none bg-slate-900 lg:bg-shape2_filpped">
        <div className="container relative space-y-14">
          <div className="w-full text-center">
            <div className="flex h-full w-full items-center justify-center">
              <div className="opacity: 1; transform: none;"></div>
              <span className="style_haeding">
                <span className="style_2">
                  <img
                    src={img1}
                    style={{
                      display: "block",
                      maxWidth: "100%",
                      width: "initial",
                      height: "initial",
                      background: "none",
                      opacity: "1",
                      border: "0px",
                      margin: "0px",
                      padding: "0px",
                    }}
                    alt=""
                  />
                </span>
                <img
                  src={content}
                  alt=""
                  style={{
                    position: "absolute",
                    inset: "0px",
                    boxSizing: "border-box",
                    padding: "0px",
                    border: "none",
                    margin: "auto",
                    display: "block",
                    width: "0px",
                    height: "0px",
                    minWidth: "100%",
                    maxWidth: "100%",
                    minHeight: "100%",
                    maxHeight: "100%",
                  }}
                />
              </span>
            </div>
            <h1 className="section-title">
              <span className="text-[#07A8ED]">Course</span> content
            </h1>
            <p className="subtitle">
              101 sections • 636 lectures • 58h 19m total length
            </p>
          </div>
          <div className="shadow-1 border-general relative mx-auto  divide-y border  lg:p-8 dark:bg-slate-500/[0.6] xl:max-w-4xl">
            <div className="relative flex h-full w-full items-center justify-center">
              <div
                className="mantine-ScrollArea-root w-full mantine-jghxib"
                style={{
                  position: "relative",
                  "--radix-scroll-area-corner-width": "10px",
                  "--radix-scroll-area-corner-height": "10px",
                  height: "400px",
                }}
              >
                {videoData.map((data) => (
                  <div
                    key={data.id}
                    className="lg:w-full border-b border-neutral-700"
                  >
                    <div
                      className="flex transition pt-3  duration-300 ease-in-out  lg:pt-4 lg:pl-2 pr-3 pb-4 justify-between cursor-pointer gap-5 lg:items-center"
                      onClick={() => handlePreviewReply(data.id)}
                      style={{
                        backgroundColor:
                          Openvisible && Previewid === data.id
                            ? " rgb(2 132 199)"
                            : "",
                      }}
                    >
                      <div className=" lg:ml-0 ml-2  text-white">
                        {Openvisible && Previewid === data.id ? (
                          <IoIosArrowUp size={20} />
                        ) : (
                          <IoIosArrowDown size={20} />
                        )}
                      </div>
                      <h3 className="text-slate-300 mantine-hgwlez text-xs lg:text-sm">
                        {data.title}
                      </h3>
                      <div className=" lg:flex lg:gap-3 text-slate-300 hidden  ">
                        <div>{data.src.length} lectures</div>

                        <div>.1hr 7min</div>
                      </div>
                    </div>
                    {Openvisible && Previewid === data.id && (
                      <div
                        className=" text-slate-400"
                        style={{
                          opacity: 1,
                          transition: "opacity 500ms ease 0s",
                        }}
                      >
                        <ul className="p-1">
                          {data.src.map((item, index) => (
                            <li
                              key={index}
                              className="flex items-center gap-2 lg:gap-4 p-2"
                            >
                              <div>
                                {data.payment ? (
                                  <MdOutlineOndemandVideo className="lg:text-base" />
                                ) : (
                                  <CgLock className="lg:text-sm" />
                                )}
                              </div>
                              <div className="lg:w-10/12 w-full">
                                <button
                                  className="text-violet-400 underline text-sm lg:text-sm"
                                  onClick={() => handleOpen(item, data.payment)}
                                >
                                  What you're going to get from this course
                                </button>
                              </div>
                              {data.payment && (
                                <>
                                  <button
                                    onClick={() =>
                                      handleOpen(
                                        "79a95c9b99554af0a7d7162162be5ef8",
                                        data.payment
                                      )
                                    }
                                    className="mr-10  text-violet-400 underline hidden lg:block"
                                  >
                                    Preview
                                  </button>
                                  <div className="hidden lg:block">3.30</div>
                                </>
                              )}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="wrapper  border-t border-gray-700 scroll-mt-16 bg-left bg-no-repeat dark:bg-none bg-slate-900 lg:bg-shape2_filpped">
        <div className="container relative space-y-14">
          <div className="w-full text-center">
            <div className="flex h-full w-full items-center justify-center">
              <div className="opacity: 1; transform: none;"></div>
              <span className="style_haeding">
                <span className="style_2">
                  <img
                    src={img1}
                    style={{
                      display: "block",
                      maxWidth: "100%",
                      width: "initial",
                      height: "initial",
                      background: "none",
                      opacity: "1",
                      border: "0px",
                      margin: "0px",
                      padding: "0px",
                    }}
                    alt=""
                  />
                </span>
                <img
                  src={img2}
                  alt=""
                  style={{
                    position: "absolute",
                    inset: "0px",
                    boxSizing: "border-box",
                    padding: "0px",
                    border: "none",
                    margin: "auto",
                    display: "block",
                    width: "0px",
                    height: "0px",
                    minWidth: "100%",
                    maxWidth: "100%",
                    minHeight: "100%",
                    maxHeight: "100%",
                  }}
                />
              </span>
            </div>
            <h1 className="section-title">
              Our Reactive
              <span className="text-[#07A8ED]"> Accelerator </span> course at a
              glance
            </h1>
            <p className="subtitle">Everything in this course</p>
          </div>
          <div className="rounded-1 shadow-1 border-general relative mx-auto  divide-y border  p-8 dark:bg-slate-500/[0.6] xl:max-w-4xl">
            <div className="maentin-Grid-root mantine-nsdj ">
              <div className=" border-general border-b border-r-0 md:border-r mantine-1wnnyej">
                <div className="scale-general flex w-full flex-col items-center justify-center p-8">
                  <div className="icon">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 16 16"
                      className="text-[#07A8ED]"
                      height="48"
                      width="48"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M14.25 4.74L11 6.62V4.5l-.5-.5h-9l-.5.5v7l.5.5h9l.5-.5v-2l3.25 1.87.75-.47V5.18l-.75-.44zM10 11H2V5h8v6zm4-1l-3-1.7v-.52L14 6v4z"></path>
                    </svg>
                  </div>
                  <div className="text-0 mt-1 text-center font-medium">
                    15 টি মডিউলে 150+ ভিডিও
                  </div>
                  <div className="text-1 mt-2 text-center">
                    ধাপে ধাপে শেখার জন্য কোর্সটি 15টি মডিউলে ও 150+ ভিডিওতে ভাগ
                    করে সাজানো হয়েছে এবং ডকুমেন্টেশন ধরে ধরে শিখানো হয়েছে।
                  </div>
                </div>
              </div>
              <div className="mantine-Col-root border-general border-b border-r-0 lg:border-1 mantine-1wnnyej">
                <div className="scale-general flex w-full flex-col items-center justify-center p-8">
                  <div className="icon">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 16 16"
                      className="text-[#07A8ED]"
                      height="48"
                      width="48"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M14.25 4.74L11 6.62V4.5l-.5-.5h-9l-.5.5v7l.5.5h9l.5-.5v-2l3.25 1.87.75-.47V5.18l-.75-.44zM10 11H2V5h8v6zm4-1l-3-1.7v-.52L14 6v4z"></path>
                    </svg>
                  </div>
                  <div className="text-0 mt-1 text-center font-medium">
                    15 টি মডিউলে 150+ ভিডিও
                  </div>
                  <div className="text-1 mt-2 text-center">
                    ধাপে ধাপে শেখার জন্য কোর্সটি 15টি মডিউলে ও 150+ ভিডিওতে ভাগ
                    করে সাজানো হয়েছে এবং ডকুমেন্টেশন ধরে ধরে শিখানো হয়েছে।
                  </div>
                </div>
              </div>
              <div className="mantine-Col-root border-general border-b-0 border-r-0  md:border-r mantine-1wnnyej">
                <div className="scale-general flex w-full flex-col items-center justify-center p-8">
                  <div className="icon">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 16 16"
                      className="text-[#07A8ED]"
                      height="48"
                      width="48"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M14.25 4.74L11 6.62V4.5l-.5-.5h-9l-.5.5v7l.5.5h9l.5-.5v-2l3.25 1.87.75-.47V5.18l-.75-.44zM10 11H2V5h8v6zm4-1l-3-1.7v-.52L14 6v4z"></path>
                    </svg>
                  </div>
                  <div className="text-0 mt-1 text-center font-medium">
                    15 টি মডিউলে 150+ ভিডিও
                  </div>
                  <div className="text-1 mt-2 text-center">
                    ধাপে ধাপে শেখার জন্য কোর্সটি 15টি মডিউলে ও 150+ ভিডিওতে ভাগ
                    করে সাজানো হয়েছে এবং ডকুমেন্টেশন ধরে ধরে শিখানো হয়েছে।
                  </div>
                </div>
              </div>
              <div className="mantine-Col-root border-general border-b-0 lg:border-r-0 md:border-r mantine-1wnnyej">
                <div className="scale-general flex w-full flex-col items-center justify-center p-8">
                  <div className="icon">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 16 16"
                      className="text-[#07A8ED]"
                      height="48"
                      width="48"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M14.25 4.74L11 6.62V4.5l-.5-.5h-9l-.5.5v7l.5.5h9l.5-.5v-2l3.25 1.87.75-.47V5.18l-.75-.44zM10 11H2V5h8v6zm4-1l-3-1.7v-.52L14 6v4z"></path>
                    </svg>
                  </div>
                  <div className="text-0 mt-1 text-center font-medium">
                    15 টি মডিউলে 150+ ভিডিও
                  </div>
                  <div className="text-1 mt-2 text-center">
                    ধাপে ধাপে শেখার জন্য কোর্সটি 15টি মডিউলে ও 150+ ভিডিওতে ভাগ
                    করে সাজানো হয়েছে এবং ডকুমেন্টেশন ধরে ধরে শিখানো হয়েছে।
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="wrapper   bg-1 bg-slate-900 gradient-primary border-general scroll-mt-16 border-t dark:bg-none">
        <div className="container space-y-5">
          <div className="w-full text-center">
            <div className="flex h-full w-full items-center justify-center">
              <div className="opacity: 1; transform: none;">

              <span className="style_haeding">
                <span className="style_2">
                  <img
                    src={img1}
                    style={{
                      display: "block",
                      maxWidth: "100%",
                      width: "initial",
                      height: "initial",
                      background: "none",
                      opacity: "1",
                      border: "0px",
                      margin: "0px",
                      padding: "0px",
                    }}
                    alt=""
                  />
                </span>
                <img
                  src={img3}
                  alt=""
                  style={{
                    position: "absolute",
                    inset: "0px",
                    boxSizing: "border-box",
                    padding: "0px",
                    border: "none",
                    margin: "auto",
                    display: "block",
                    width: "0px",
                    height: "0px",
                    minWidth: "100%",
                    maxWidth: "100%",
                    minHeight: "100%",
                    maxHeight: "100%",
                  }}
                />
              </span>
              </div>
            </div>
            <h1 className="section-title">
              <span className="text-[#07A8ED]">How will</span> the course work?
            </h1>
            <p className="subtitle">
              How we can help you become a skilled in this subject
            </p>
          </div>
          <div className="relative mx-auto max-w-7xl space-y-1 lg:px-20">
            <div className="flex-col-reverse lg:flex-row-reverse relative flex flex-col-reverse lg:flex-row lg:items-center lg:gap-12">
              <div className="grid w-full place-items-center lg:min-h-[536px]">
                <div className="w-full">
                  <div
                    className="w-full"
                    style={{ opacity: "1", transform: "none" }}
                  >
                    

                    <dotlottie-player
                      autoplay="true"
                      loop
                      src="https://lottie.host/62d97240-a368-4af5-93bb-1f2b599b80a1/EPpq393L3T.lottie"
                      background="transparent"
                      style={{ width: "100%", height: "100" }}
                    >
                      <div className="main">
                        <div
                          className="animation"
                          style={{ background: "transparent" }}
                        ></div>
                      </div>
                    </dotlottie-player>
                  </div>
                </div>
              </div>
              <div className="h-full w-full space-y-6">
                <div
                  className="relative z-10 mx-auto grid w-24 place-items-center py-10 lg:mx-px "
                  style={{ transform: "none" }}
                >
                  <h1 className="section-title  relative z-10 text-3xl !text-white drop-shadow-[3px_3px_0px_#1e293b]">
                    1
                  </h1>
                  <svg
                    className="absolute top-0 z-0 opacity-50 dark:opacity-100"
                    width="100%"
                    height="100%"
                    viewBox="0 0 602 473"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M290.806 463.188C374.905 469.353 468.778 492.629 529.757 434.517C597.098 370.239 616.804 266.193 591.202 177.098C566.996 92.3192 491.898 30.0454 407.023 5.07419C335.338 -15.8893 270.48 32.9741 202.363 62.8779C128.971 95.248 31.0635 104.651 6.54775 180.797C-18.899 259.873 34.0116 342.956 93.1287 401.839C144.488 453.014 218.345 457.793 290.806 463.188Z"
                      fill="#FF8731"
                    ></path>
                  </svg>
                </div>
                <h1 className="title text-center lg:text-left">
                  Step by step project based teaching method
                </h1>
                <svg
                  className="absolute left-[20%] top-[85%] hidden lg:block"
                  width="432"
                  height="125"
                  fill="none"
                  data-reveal="in-fade"
                >
                  <path
                    d="M1.633 1.29c.308 12.988-3.497 38 10.01 54.328 14.885 19.842 32.162 24.39 52.725 28.521 36.088 7.25 72.202 8.779 109.27 1.774 11.033-2.085 21.968-8.278 32.723-12.617 11.066-4.465 22.127-8.914 33.321-12.404 23.822-7.426 47.443-7.882 71.079-5.229 20.514 2.303 41.669 2.608 61.157 11.122 30.981 6.832 49.838 47.155 58.34 57.199"
                    stroke="#F0B9DD"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeDasharray="4 8 4 8"
                  ></path>
                </svg>
                <p className="text-1 text-medium text-center lg:!text-left ">
                  One to two modules will be released every week and each module
                  will have 10-12 pre-recorded videos so that you can learn one
                  topic at a time step by step. The videos are based on React
                  and NextJS documentation. Also, each module has a project
                  tutorial to follow the project based learning process. You
                  will have a whole week to watch the weekly videos. A live
                  session will be held on one day of the week to take your
                  questions. If you can watch the videos in a short time, you
                  will have more time during the week for assignments.
                </p>
              </div>
            </div>
            <div className=" relative flex flex-col-reverse lg:flex-row lg:items-center lg:gap-12">
              <div className="grid w-full place-items-center lg:min-h-[536px]">
              <div
                    className="w-full"
                    style={{ opacity: "1", transform: "none" }}
                  >
                    <dotlottie-player
                      autoplay="true"
                      loop
                      src="https://lottie.host/44ae28c3-920a-4787-b211-c5ac28bd0136/AGJgnExlx4.lottie"
                      background="transparent"
                      style={{ width: "100%", height: "100" }}
                    >
                      <div className="main">
                        <div
                          className="animation"
                          style={{ background: "transparent" }}
                        ></div>
                      </div>
                    </dotlottie-player>
                  </div>
              </div>
              <div className="h-full w-full space-y-6">
                <div
                  className="relative z-10 mx-auto grid w-24 place-items-center py-10 lg:mx-px"
                  style={{ transform: "none" }}
                >
                  <h1 className="section-title relative z-10 text-3xl !text-white drop-shadow-[3px_3px_0px_#1e293b]">
                    2
                  </h1>
                  <svg
                    className="absolute top-0 z-0 opacity-50 dark:opacity-100"
                    width="100%"
                    height="100%"
                    viewBox="0 0 602 473"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M290.806 463.188C374.905 469.353 468.778 492.629 529.757 434.517C597.098 370.239 616.804 266.193 591.202 177.098C566.996 92.3192 491.898 30.0454 407.023 5.07419C335.338 -15.8893 270.48 32.9741 202.363 62.8779C128.971 95.248 31.0635 104.651 6.54775 180.797C-18.899 259.873 34.0116 342.956 93.1287 401.839C144.488 453.014 218.345 457.793 290.806 463.188Z"
                      fill="#3FB8A9"
                    ></path>
                  </svg>
                </div>
                <h1 className="title text-center lg:text-left">
                  A chance to test yourself through exams
                </h1>
                <svg
                  className="absolute left-[10%] top-[79%] z-0 hidden h-[268.09px] w-full -rotate-6 transform lg:block"
                  width="100%"
                  height="268.09px"
                  fill="none"
                  data-reveal="in-fade"
                >
                  <path
                    d="M595 1c-5.312 32.44-14.005 32.911-28.493 54.17-14.488 22.676-40.566 37.32-86.927 53.383-16.359 9.183-58.29 17.919-77.329 20.941-27.961 4.438-57.257 4.44-85.565 4.82-22.571.303-45.071.327-67.53-2.002-48.556-5.035-97.306-19.13-146.184-19.13-21.265 0-43.185 6.042-63.875 10.529C21.527 127.522 16.22 128.888 1 138"
                    stroke="#B5CAF9"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeDasharray="4 8 4 8"
                  ></path>
                </svg>
                <p className="text-1 text-medium text-center lg:!text-left ">
                There are quizzes with each video and assignments at the end of each module to test what you have learned by watching the videos. You can answer the quizzes instantly and you will have 48-72 hours to complete each assignment. We have to submit the github link of the source code and the live link of the project by assignment. Scores for each quiz and assignment will be tallied and final results will be given at the end of the course. However, the quiz marks will be added to the leaderboard but will not be added to the final result.


                </p>
              </div>
            </div>
            <div className="flex-col-reverse lg:flex-row-reverse relative flex flex-col-reverse lg:flex-row lg:items-center lg:gap-12">
              <div className="grid w-full place-items-center lg:min-h-[536px]">
                <div className="w-full">
                  <div
                    className="w-full"
                    style={{ opacity: "1", transform: "none" }}
                  >
                    <dotlottie-player
                      autoplay="true"
                      loop
                      src="https://lottie.host/39045941-4c89-47ae-89e4-9c42267bf009/7d3aCvz8LI.lottie"
                      background="transparent"
                      style={{ width: "100%", height: "100" }}
                    >
                      <div className="main">
                        <div
                          className="animation"
                          style={{ background: "transparent" }}
                        ></div>
                      </div>
                    </dotlottie-player>
                  </div>
                </div>
              </div>
              <div className="h-full w-full space-y-6">
                <div
                  className="relative z-10 mx-auto grid w-24 place-items-center py-10 lg:mx-px "
                  style={{ transform: "none" }}
                >
                  <h1 className="section-title relative z-10 text-3xl !text-white drop-shadow-[3px_3px_0px_#1e293b]">
                    3
                  </h1>
                  <svg
                    className="absolute top-0 z-0 opacity-50 dark:opacity-100"
                    width="100%"
                    height="100%"
                    viewBox="0 0 602 473"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M290.806 463.188C374.905 469.353 468.778 492.629 529.757 434.517C597.098 370.239 616.804 266.193 591.202 177.098C566.996 92.3192 491.898 30.0454 407.023 5.07419C335.338 -15.8893 270.48 32.9741 202.363 62.8779C128.971 95.248 31.0635 104.651 6.54775 180.797C-18.899 259.873 34.0116 342.956 93.1287 401.839C144.488 453.014 218.345 457.793 290.806 463.188Z"
                      fill="#0168FB"
                    ></path>
                  </svg>
                </div>
                <h1 className="title text-center lg:text-left">
                After the exam there is the correct solution of the question
                </h1>
                <svg
                  className="absolute left-[55%] -bottom-[20%] hidden h-[150px] w-[580px] -translate-x-1/2 -translate-y-1/2 transform lg:block"
                  fill="none"
                  data-reveal="in-fade"
                >
                  <path
                    d="M1 1c7.255 23.316 12.132 49.428 31.848 67.45 11.32 10.349 16.684 18.72 32.52 24.395 13.96 5.003 51.325 18.606 66.469 5.364 7.463-6.526 16.624-20.318 3.781-26.82-6.446-3.262-17.016-2.214-24.201-1.616-5.314.443-6.954 5.964-8.739 9.258-5.374 9.922-2.814 24.311 4.874 32.256 17.363 17.942 41.593 32.2 69.242 35.71 22.248 2.823 45.197 1.977 67.561 4.041 34.213 3.157 70.887 7.217 104.031 15.577 18.72 4.721 37.381 9.547 56.133 14.18 10.798 2.669 27.801 6.337 37.726 11.137C463.073 201.574 473.557 214.827 479 218"
                    stroke="#AAD1B6"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeDasharray="4 8 4 8"
                  ></path>
                </svg>
                <p className="text-1 text-medium text-center lg:!text-left ">
                At the end of each quiz you can see the correct answer with explanation. All assignment solutions will be shared on GitHub at the end of the course so that you can check the best practices and methods better. We will manually code review your submitted assignments and mark them. Once the marksheet is generated, you can check it from the personal dashboard on the website.


                </p>
              </div>
            </div>
            <div className=" relative flex flex-col-reverse lg:flex-row lg:items-center lg:gap-12">
              <div className="grid w-full place-items-center lg:min-h-[536px]">
                <div className="w-full">
                  <div
                    className="w-full"
                    style={{ opacity: "1", transform: "none" }}
                  >
                    <dotlottie-player
                      autoplay="true"
                      loop=""
                      src="https://lottie.host/fe5dd5e4-b323-4a30-b553-fa127c7a7e5f/ciF9UEoast.lottie"
                      background="transparent"
                      style={{ width: "100%", height: "100%" }}
                    ></dotlottie-player>
                  </div>
                </div>
              </div>
              <div className="h-full w-full space-y-6">
                <div
                  className="relative z-10 mx-auto grid w-24 place-items-center py-10 lg:mx-px "
                  style={{ transform: "none" }}
                >
                  <h1 className="section-title relative z-10 text-3xl !text-white drop-shadow-[3px_3px_0px_#1e293b]">
                    4
                  </h1>
                  <svg
                    className="absolute top-0 z-0 opacity-50 dark:opacity-100"
                    width="100%"
                    height="100%"
                    viewBox="0 0 602 473"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M290.806 463.188C374.905 469.353 468.778 492.629 529.757 434.517C597.098 370.239 616.804 266.193 591.202 177.098C566.996 92.3192 491.898 30.0454 407.023 5.07419C335.338 -15.8893 270.48 32.9741 202.363 62.8779C128.971 95.248 31.0635 104.651 6.54775 180.797C-18.899 259.873 34.0116 342.956 93.1287 401.839C144.488 453.014 218.345 457.793 290.806 463.188Z"
                      fill="#309ee8"
                    ></path>
                  </svg>
                </div>
                <h1 className="title text-center lg:text-left">
                There is a Discord support group for help if you get stuck

                </h1>
                <svg
                  className="absolute -bottom-[35%] right-[40%] hidden h-[135px] w-[550px] -rotate-6 lg:block"
                  fill="none"
                  data-reveal="in-fade"
                >
                  <path
                    d="M595 1c-5.312 32.44-14.005 32.911-28.493 54.17-14.488 22.676-40.566 37.32-86.927 53.383-16.359 9.183-58.29 17.919-77.329 20.941-27.961 4.438-57.257 4.44-85.565 4.82-22.571.303-45.071.327-67.53-2.002-48.556-5.035-97.306-19.13-146.184-19.13-21.265 0-43.185 6.042-63.875 10.529C21.527 127.522 16.22 128.888 1 138"
                    stroke="#B5CAF9"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeDasharray="4 8 4 8"
                  ></path>
                </svg>
                <p className="text-1 text-medium text-center lg:!text-left ">
                If you face any problem during the course, get stuck or don't understand, you can post your question in our Discord support channel. If a critical issue cannot be resolved through the Discord Support Channel, a call to the Discord Voice Channel / Google Meet will also be attempted. We will be with you throughout the course and will try our best to cooperate. However, no device related issues will be resolved


                </p>
              </div>
            </div>
            <div className="flex-col-reverse lg:flex-row-reverse relative flex flex-col-reverse lg:flex-row lg:items-center lg:gap-12">
              <div className="grid w-full place-items-center lg:min-h-[536px]">
                <div className="w-full">
                  <div
                    className="w-full"
                    style={{ opacity: "1", transform: "none" }}
                  >
                    <dotlottie-player
                      autoplay="true"
                      loop=""
                      src="https://lottie.host/7a1a7db2-0437-4dd7-95f0-d0ab76848cde/FWXzFbPSNr.lottie"
                      background="transparent"
                      style={{ width: "100%", height: "100%" }}
                    ></dotlottie-player>
                  </div>
                </div>
              </div>
              <div className="h-full w-full space-y-6">
                <div
                  className="relative animate-[wiggle_1s_ease-in-out_infinite]  z-10 mx-auto grid w-24 place-items-center py-10 lg:mx-px "
                  style={{ transform: "none" }}
                >
                  <h1 className="section-title relative z-10 text-3xl !text-white drop-shadow-[3px_3px_0px_#1e293b]">
                    5
                  </h1>
                  <svg
                    className="absolute top-0 z-0 opacity-50 dark:opacity-100"
                    width="100%"
                    height="100%"
                    viewBox="0 0 602 473"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M290.806 463.188C374.905 469.353 468.778 492.629 529.757 434.517C597.098 370.239 616.804 266.193 591.202 177.098C566.996 92.3192 491.898 30.0454 407.023 5.07419C335.338 -15.8893 270.48 32.9741 202.363 62.8779C128.971 95.248 31.0635 104.651 6.54775 180.797C-18.899 259.873 34.0116 342.956 93.1287 401.839C144.488 453.014 218.345 457.793 290.806 463.188Z"
                      fill="#F8BD48"
                    ></path>
                  </svg>
                </div>
                <h1 className="title text-center lg:text-left">
                There are also weekly live discussions

                </h1>{" "}
                <p className="text-1 text-medium text-center lg:!text-left ">
                Every week we will organize at least one live session where we will discuss what has been taught throughout the week, explain assignment solutions and answer your questions directly. We will be notified in advance on the Discord support channel during the live session.


                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="wrapper border-t border-b border-gray-700	  bg-slate-900 !bg-primary1 dark:!bg-slate-800 dark:bg-none">
        <div className="container space-y-14">
          <h1 className="section-title text-center text-4xl !text-slate-100">
            Course Instructor
          </h1>
          <div className="flex flex-col gap-y-10 lg:flex-row">
            <div className="relative w-full text-center">
              <div className="nextjs-image rounded-1 !shadow-1 relative z-10 mx-auto h-[300px] w-[200px] origin-bottom-right -rotate-6 transform !border-4 lg:h-[360px] lg:w-[280px]">
                <span className="style_course_instructor">
                  <span className="style_course_first_span">
                    <img src={img1} alt="" className="img_instructor" />
                  </span>

                  <img
                    alt="Sumit Saha - Instructor"
                    src={`${Instructor}?w=828&q=75`} // Remove the "&amp;" and replace it with "&"
                    decoding="async"
                    data-nimg="intrinsic"
                    className="instructor_second"
                  />
                  <noscript>
                    <img
                      alt="Sumit Saha - Instructor"
                      srcSet={`${Merinasoft}&w=640&q=75 1x, ${Merinasoft}&w=828&q=75 2x`}
                      src={`${Merinasoft}?w=828&q=75`}
                      decoding="async"
                      data-nimg="intrinsic"
                      style={imageStyle}
                      loading="lazy"
                    />
                  </noscript>
                </span>
              </div>
              <div className="rounded-1 absolute right-[25%] md:-bottom-[-50px] -bottom-3 z-0 mx-auto h-[300px] w-[200px] border-4 border-white !bg-[#8E6AC8] lg:h-[350px] lg:w-[280px]"></div>
            </div>
            <div
              className="w-full self-center p-6 lg:border-l-2 lg:border-yellow-400
            "
            >
              <p className="text-normal font-medium text-gray-500	 dark:text-slate-400">
                Md. Mahfuzur Rahman is a technology entrepreneur. In 2008, he
                founded Merinasoft, the Software Company in Bangladesh, while
                studying computer science and engineering at BUET. His passion
                for programming and interest in teaching people led him to
                establish the Trace Academi platform in 2020, where there are
                over 350 programming-related video tutorials. Trace Academi's
                YouTube channel and public Facebook group have attracted more
                than a million people who are learning programming for free.
              </p>
              <p className="text-normal font-medium mt-2 text-gray-500	 dark:text-slate-400">
                He is also a full-stack web developer and software architect
                with over 14 years of experience in web development and software
                professions.
              </p>
              <h1 className="text-small mt-8 font-bold  text-slate-50">
                Mahfuzur Rahman Tusar
              </h1>
              <p className="text-small text-white">Founder - Trace Academy</p>
              <p className="text-small text-white">CEO - Merinasoft</p>
              <div className="nextjs-image mt-4 pb-3 h-15 w-[60px]">
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
                    maxWidth: "100%",
                  }}
                >
                  <span className="style_course_first_span">
                    <img src={img1} alt="" className="img_instructor " />
                  </span>

                  <img src={Merinasoft} alt="" />
                </span>
              </div>
              <div className="text-small text-gray-500 text-2 mt-2">
                ট্রেড লাইসেন্স - TRAD/DNCC/009595/2022
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="wrapper bg-1 gradient-primary border-general bg-slate-900 scroll-mt-16 border-t dark:bg-none">
        <div className="container space-y-14">
          <div className="w-full text-center">
            <div className="flex h-full w-full items-center justify-center">
              <div style={{ opacity: "1", transform: " none" }}>
                <span className="style_haeding">
                  <span className="style_2">
                    <img
                      src={img1}
                      style={{
                        display: "block",
                        maxWidth: "100%",
                        width: "initial",
                        height: "initial",
                        background: "none",
                        opacity: "1",
                        border: "0px",
                        margin: "0px",
                        padding: "0px",
                      }}
                      alt=""
                    />
                  </span>
                  <img
                    src={img4}
                    alt=""
                    style={{
                      position: "absolute",
                      inset: "0px",
                      boxSizing: "border-box",
                      padding: "0px",
                      border: "none",
                      margin: "auto",
                      display: "block",
                      width: "0px",
                      height: "0px",
                      minWidth: "100%",
                      maxWidth: "100%",
                      minHeight: "100%",
                      maxHeight: "100%",
                    }}
                  />
                </span>
              </div>
            </div>
            <h1 className="section-title">
              কোর্স সম্পর্কে{" "}
              <span className="primary-highlighter">লার্নারদের</span> অভিমত
            </h1>
            <p className="subtitle">
              লার্নাররা সর্বদাই লার্ন উইথ সুমিত এর প্রতি তাদের ভালবাসা প্রকাশ
              করেছেন
            </p>
          </div>
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
      <section className="wrapper gradient-primary border-general scroll-mt-24 border-t bg-slate-900 dark:bg-slate-900 dark:bg-none">
        <div className="container lg:p-7">
          <div className="flex h-full flex-col gap-10 lg:flex-row lg:gap-28">
            <div className="flex h-full w-full flex-col justify-center">
              <div className="next-image">
                <span className="style_haeding">
                  <span className="style_2 w-100">
                    <img
                      src={img1}
                      style={{
                        display: "block",
                        maxWidth: "100%",
                        width: "initial",
                        height: "initial",
                        background: "none",
                        opacity: "1",
                        border: "0px",
                        margin: "0px",
                        padding: "0px",
                      }}
                      alt=""
                    />
                  </span>
                  <img
                    src={img5}
                    alt=""
                    style={{
                      position: "absolute",
                      inset: "0px",
                      boxSizing: "border-box",
                      padding: "0px",
                      border: "none",
                      margin: "auto",
                      display: "block",
                      width: "0px",
                      height: "0px",
                      minWidth: "100%",
                      maxWidth: "100%",
                      minHeight: "100%",
                      maxHeight: "100%",
                    }}
                  />
                </span>
              </div>
              <h1 className="section-title lgw-2/3">
                সচরাচর জানতে চাওয়া
                <br />
                <span className="primary-highlighter">প্রশ্নের উত্তর</span>
              </h1>
              <p className="text-medium text-1 mt-8">
                আপনাদের কমন কিছু প্রশ্নের উত্তর আমরা এখানে লিস্ট করে দিয়েছি।
                আমাদের কে প্রশ্ন করার পূর্বে এই লিস্টটি একবার পড়ে নেয়ার অনুরোধ
                থাকলো। তাহলে আমাদের উত্তরের জন্য আপনাকে অপেক্ষা করতে হবেনা এবং
                আপনার মূল্যবান সময় বেঁচে যাবে।
              </p>
            </div>
            <div className="relative flex h-full w-full items-center justify-center">
              <div
                className="mantine-ScrollArea-root w-full mantine-jghxib"
                style={{
                  position: "relative",
                  "--radix-scroll-area-corner-width": "10px",
                  "--radix-scroll-area-corner-height": "10px",
                  height: "400px",
                }}
              >
                <div className="lg:w-11/12 border-b border-neutral-700">
                  <div
                    className="flex transition duration-300 ease-in-out hover:bg-cyan-600 lg:pt-4 lg:pl-2 pr-3 pb-4 justify-between cursor-pointer gap-14 items-center"
                    onClick={() => handleviewReply(1)}
                    style={{
                      backgroundColor:
                        Openvisible && id === 1 ? " rgb(2 132 199)" : "",
                    }}
                  >
                    <h3 className="text-slate-300 mantine-hgwlez ">
                      কোর্সটি করার জন্য আগে থেকে কি কি জানতে হবে?
                    </h3>
                    <div className="lg:ml-28  text-white">
                      {Openvisible && id === 1 ? (
                        <IoIosArrowUp size={20} />
                      ) : (
                        <IoIosArrowDown size={20} />
                      )}
                    </div>
                  </div>
                  {Openvisible && id === 1 && (
                    <div
                      className=" mt-4 pb-3 text-slate-400"
                      style={{
                        opacity: 1,
                        transition: "opacity 500ms ease 0s",
                      }}
                    >
                      কোর্সটি করার জন্য বেসিক এইচ.টি.এম.এল, সি.এস.এস, বেসিক
                      জাভাস্ক্রিপ্ট, মডার্ন (ES6) জাভাস্ক্রিপ্ট, DOM, রিয়্যাক্ট
                      জেএস, npm, Git/GitHub সম্পর্কে ধারণা এবং VSCode এডিটরে কাজ
                      করার অভিজ্ঞতা থাকতে হবে। বিস্তারিত এখান থেকে জানুন।
                    </div>
                  )}
                </div>
                <div className="lg:w-11/12 border-b border-neutral-700">
                  <div
                    className="flex transition duration-300 ease-in-out hover:bg-cyan-600 lg:pt-4 lg:pl-2 pr-3 pb-4 justify-between cursor-pointer gap-14 items-center"
                    onClick={(event) => {
                      handleviewReply(2);
                      event.preventDefault();
                      window.getSelection().removeAllRanges(); // Deselect text
                    }}
                    style={{
                      backgroundColor:
                        Openvisible && id === 2 ? " rgb(2 132 199)" : "",
                    }}
                  >
                    <h3 className="text-slate-300 mantine-hgwlez ">
                      কোর্সটি করার জন্য আগে থেকে কি কি জানতে হবে?
                    </h3>
                    <div className="lg:ml-24   text-white">
                      {Openvisible && id === 2 ? (
                        <IoIosArrowUp size={20} />
                      ) : (
                        <IoIosArrowDown size={20} />
                      )}
                    </div>
                  </div>
                  {Openvisible && id === 2 && (
                    <div
                      className=" mt-4 pb-3 text-slate-400"
                      style={{
                        opacity: 1,
                        transition: "opacity 500ms ease 0s",
                      }}
                    >
                      কোর্সটি অন-ডিমান্ড ভিডিও অনলি কোর্স হিসেবে থাকবে এবং আপনি
                      যেকোন সময় কিনে সাথে সাথেই ভিডিও গুলো এক্সেস করতে পারবেন।
                      এটি কোন ব্যাচ সিস্টেম কোর্স নয়।
                    </div>
                  )}
                </div>
                <div className="lg:w-11/12 border-b border-neutral-700">
                  <div
                    className="flex transition duration-300 ease-in-out hover:bg-cyan-600 lg:pt-4 lg:pl-2 pr-3 pb-4 justify-between cursor-pointer gap-14 items-center"
                    onClick={() => handleviewReply(3)}
                    style={{
                      backgroundColor:
                        Openvisible && id === 3 ? " rgb(2 132 199)" : "",
                    }}
                  >
                    <h3 className="text-slate-300 mantine-hgwlez ">
                      কোর্সটি করার জন্য আগে থেকে কি কি জানতে হবে?
                    </h3>
                    <div className="lg:ml-28  text-white">
                      {Openvisible && id === 3 ? (
                        <IoIosArrowUp size={20} />
                      ) : (
                        <IoIosArrowDown size={20} />
                      )}
                    </div>
                  </div>
                  {Openvisible && id === 3 && (
                    <div
                      className=" mt-4 pb-3 text-slate-400"
                      style={{
                        opacity: 1,
                        transition: "opacity 500ms ease 0s",
                      }}
                    >
                      কোর্সটি করার জন্য বেসিক এইচ.টি.এম.এল, সি.এস.এস, বেসিক
                      জাভাস্ক্রিপ্ট, মডার্ন (ES6) জাভাস্ক্রিপ্ট, DOM, রিয়্যাক্ট
                      জেএস, npm, Git/GitHub সম্পর্কে ধারণা এবং VSCode এডিটরে কাজ
                      করার অভিজ্ঞতা থাকতে হবে। বিস্তারিত এখান থেকে জানুন।
                    </div>
                  )}
                </div>
                <div className="lg:w-11/12 border-b border-neutral-700">
                  <div
                    className="flex transition duration-300 ease-in-out hover:bg-cyan-600 lg:pt-4 lg:pl-2 pr-3 pb-4 justify-between cursor-pointer gap-14 items-center"
                    onClick={() => handleviewReply(4)}
                    style={{
                      backgroundColor:
                        Openvisible && id === 4 ? " rgb(2 132 199)" : "",
                    }}
                  >
                    <h3 className="text-slate-300 mantine-hgwlez ">
                      কোর্সটি করার জন্য আগে থেকে কি কি জানতে হবে?
                    </h3>
                    <div className="lg:ml-28  text-white">
                      {Openvisible && id === 4 ? (
                        <IoIosArrowUp size={20} />
                      ) : (
                        <IoIosArrowDown size={20} />
                      )}
                    </div>
                  </div>
                  {Openvisible && id === 4 && (
                    <div
                      className=" mt-4 pb-3 text-slate-400"
                      style={{
                        opacity: 1,
                        transition: "opacity 500ms ease 0s",
                      }}
                    >
                      কোর্সটি করার জন্য বেসিক এইচ.টি.এম.এল, সি.এস.এস, বেসিক
                      জাভাস্ক্রিপ্ট, মডার্ন (ES6) জাভাস্ক্রিপ্ট, DOM, রিয়্যাক্ট
                      জেএস, npm, Git/GitHub সম্পর্কে ধারণা এবং VSCode এডিটরে কাজ
                      করার অভিজ্ঞতা থাকতে হবে। বিস্তারিত এখান থেকে জানুন।
                    </div>
                  )}
                </div>
                <div className="lg:w-11/12 border-b border-neutral-700">
                  <div
                    className="flex transition duration-300 ease-in-out hover:bg-cyan-600 lg:pt-4 lg:pl-2 pr-3 pb-4 justify-between cursor-pointer gap-14 items-center"
                    onClick={() => handleviewReply(5)}
                    style={{
                      backgroundColor:
                        Openvisible && id === 5 ? " rgb(2 132 199)" : "",
                    }}
                  >
                    <div className="text-slate-300 mantine-hgwlez mantine-Accordion-label">
                      কোর্স ফি কি কোর্সের আগে একবারে পুরোটা পরিশোধ করতে হবে?
                    </div>
                    <div className="lg:ml-28  text-white">
                      {Openvisible && id === 5 ? (
                        <IoIosArrowUp size={20} />
                      ) : (
                        <IoIosArrowDown size={20} />
                      )}
                    </div>
                  </div>
                  {Openvisible && id === 5 && (
                    <div
                      style={{
                        opacity: 1,
                        transition: "opacity 500ms ease 0s",
                      }}
                      className="mt-4 pb-3 transform translate-y-4 lg:translate-y-0 text-slate-400"
                    >
                      কোর্সটি করার জন্য বেসিক এইচ.টি.এম.এল, সি.এস.এস, বেসিক
                      জাভাস্ক্রিপ্ট, মডার্ন (ES6) জাভাস্ক্রিপ্ট, DOM, রিয়্যাক্ট
                      জেএস, npm, Git/GitHub সম্পর্কে ধারণা এবং VSCode এডিটরে কাজ
                      করার অভিজ্ঞতা থাকতে হবে। বিস্তারিত এখান থেকে জানুন।
                    </div>
                  )}
                </div>
                <div className="lg:w-11/12 border-b border-neutral-700">
                  <div
                    className="flex transition duration-300 ease-in-out hover:bg-cyan-600 lg:pt-4 lg:pl-2 pr-3 pb-4 justify-between cursor-pointer gap-14 items-center"
                    onClick={() => handleviewReply(6)}
                    style={{
                      backgroundColor:
                        Openvisible && id === 6 ? " rgb(2 132 199)" : "",
                    }}
                  >
                    <div className="text-slate-300 mantine-hgwlez mantine-Accordion-label">
                      কোর্স ফি কি কোর্সের আগে একবারে পুরোটা পরিশোধ করতে হবে?
                    </div>
                    <div className="lg:ml-28  text-white">
                      {Openvisible && id === 6 ? (
                        <IoIosArrowUp size={20} />
                      ) : (
                        <IoIosArrowDown size={20} />
                      )}
                    </div>
                  </div>
                  {Openvisible && id === 6 && (
                    <div
                      style={{
                        opacity: 1,
                        transition: "opacity 500ms ease 0s",
                      }}
                      className="mt-4 pb-3 transform translate-y-4 lg:translate-y-0 text-slate-400"
                    >
                      কোর্সটি করার জন্য বেসিক এইচ.টি.এম.এল, সি.এস.এস, বেসিক
                      জাভাস্ক্রিপ্ট, মডার্ন (ES6) জাভাস্ক্রিপ্ট, DOM, রিয়্যাক্ট
                      জেএস, npm, Git/GitHub সম্পর্কে ধারণা এবং VSCode এডিটরে কাজ
                      করার অভিজ্ঞতা থাকতে হবে। বিস্তারিত এখান থেকে জানুন।
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Modal
        title="Course Preview"
        centered
        open={modal1Open}
        onOk={() => setModal1Open(false)}
        onCancel={handlecancel}
        closable
        width={600}
        footer={false}
      >
        <div className="mb-5 lg:text-xl">
          100 Days of Code: The Complete Python Pro Bootcamp
        </div>
        <div style={{ paddingTop: "41%", position: "relative" }}>
          <iframe
            src="https://player.vdocipher.com/v2/?otp=20160313versASE3232H0rjryXaOcYbwCbKWDrz25pCtKkiuuxBauyjMhwZVqBok&playbackInfo=eyJ2aWRlb0lkIjoiMTYxYzllZTE4NjY3OGIxNGNlY2FkNGQ4MjU2YTJmMTUifQ=="
            style={{
              border: "0",
              maxWidth: "100%",
              position: "absolute",
              top: "0",
              left: "0",
              height: "100%",
              width: "100%",
            }}
            allowFullScreen="true"
            allow="encrypted-media"
          ></iframe>
        </div>
      </Modal>
    </>
  );
}

export default Enrollment;
