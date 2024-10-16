import React, { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";
import { useParams } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { HiOutlinePlay } from "react-icons/hi";
import { useTheme } from "../../components/ThemeContext";
import axiosInstance from "../../components/axiosInstance";
import { MdOutlineStarOutline, MdOutlineStarPurple500 } from "react-icons/md";
import Sidebar from "../../components/Sidebar";
import FaceDetection from "../../components/FaceDetaction";

const ContentView = () => {
  const [visible, setVisible] = useState(false);
  const [source, setSource] = useState("");
  const [Openvisible, setOpenVisible] = useState(false);
  const { theme } = useTheme();
  const [rating, setRating] = useState(0);
  const { name } = useParams();
  const [videoData, setVideoData] = useState([]);
  const [Course, setCourse] = useState(null);
  const [feedBackData, setFeedBack] = useState([]);
  const [loading, setLoading] = useState(false);
  const [review, setReview] = useState(false);

  useEffect(() => {
    const fetchCourse = async () => {
      setLoading(true);
      try {
        const response = await axiosInstance.get("/courses/getAll");
        const filter = response.data.find((data) => data.course_name === name);
        try {
          const response = await axiosInstance.post(
            "/chapters/getVideosByChapters",
            {
              idCourses: filter.idCourses,
            }
          );
          setVideoData(response.data);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
        setCourse(filter);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    const fetchReveiw = async () => {
      try {
        const response = await axiosInstance.get("/feedbacks/getAll");

        setFeedBack(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchCourse();
    fetchReveiw();
  }, []);

  useEffect(() => {
    if (Course && feedBackData.length > 0) {
      const filter = feedBackData.filter(
        (data) => data.idCourses === Course.idCourses
      );
      setFeedBack(filter);
      console.log(filter);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [Course]);
  const handleRating = (rate) => {
    setRating(rate);
  };

  const [Previewid, setPreviewId] = useState(null);

  const handlePreviewReply = (item) => {
    if (Previewid === item) {
      setPreviewId(null);
      setOpenVisible(false);
    } else {
      setPreviewId(item);
      setOpenVisible(true);
    }
  };
  const toggleModal = () => setVisible(!visible);

  const closeModal = () => setVisible(false);
  const [otp, setOtp] = useState("");
  const [playbackInfo, setPlaybackInfo] = useState("");
  const handleOpen = async (item) => {
    // setVideoId(item.video_url);

    try {
      const response = await axiosInstance.post(
        "/videos/getOtpFromVideoCipher",
        {
          videoId: item.video_url,
        }
      );
      setOtp(response.data.otp);
      setPlaybackInfo(response.data.playbackInfo);
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching video data", error);
    }
  };
  const [accessGranted, setAccessGranted] = useState(false);

  const handleAccessGranted = () => {
    setAccessGranted(true);
  };
  useEffect(() => {
    const intervalId = setInterval(() => {
      // Set accessGranted to false every 5 minutes (or 1 minute in this example)
      setAccessGranted(false);
      console.log("Access Granted set to false");
    }, 2 * 60 * 1000); // 1 minute interval for testing

    // Clean up the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    console.log("Access Granted state changed:", accessGranted);
  }, [accessGranted]); // This will log every time accessGranted changes
  const savedFace = localStorage.getItem("savedFace");
  return (
    <Sidebar>
      <div>
        <main className="lg:min-h-[calc(100vh_-_347px)] relative">
          <section className="bg-0">
            <div className=" px-10  py-6 ">
              <section className="grid grid-cols-3 gap-4 transition-all lg:gap-8">
                <div className="col-span-full w-full space-y-8 transition-all lg:col-span-2">
                  <div>
                    <div className="z-10 flex aspect-video w-full flex-col justify-center false">
                      <div className="relative mb-5 h-full">
                        <div className="flex h-full w-full items-center justify-center">
                          <div
                            className="aspect-video w-full"
                            style={{ width: "100%", height: "100%" }}
                          >
                            <div style={{ width: "100%", height: "100%" }}>
                              {source ? (
                                <iframe
                                  src={`https://player.vdocipher.com/v2/?otp=${otp}&playbackInfo=${playbackInfo}`}
                                  width="100%"
                                  height="360"
                                  allowFullScreen
                                ></iframe>
                              ) : (
                                <iframe
                                  width="100%"
                                  height="100%"
                                  src="https://www.youtube.com/embed/SqcY0GlETPk?si=9MxWQGiIcKA3LRlH"
                                  title="YouTube video player"
                                  frameBorder="0"
                                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                  referrerPolicy="strict-origin-when-cross-origin"
                                  allowfullscreen
                                ></iframe>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="mb-4">
                        <h1 className="text-xl font-bold tracking-tight ">
                          0.1 Reactive Accelerator - Course intro
                        </h1>
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <button className="bg-coching-button_color flex text-[12px] items-center justify-center gap-2 p-[10px] box-border  rounded-[32px] lg:text-sm">
                            <FaArrowLeft color="white" />
                            <span className=" text-white">Prev Lesson</span>
                          </button>
                        </div>
                        <div>
                          <button className="bg-coching-button_color text-[12px] flex items-center justify-center gap-2 p-[10px] box-border  rounded-[32px] lg:text-sm">
                            <span className=" text-white">Next Lesson</span>
                            <FaArrowRight color="white" />
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="border-general my-7 flex justify-between  border-b border-t py-2">
                      <div className="flex-none">
                        <div className="flex space-x-2">
                          <svg
                            stroke="currentColor"
                            fill="currentColor"
                            strokeWidth="0"
                            viewBox="0 0 24 24"
                            className="h-4 w-4 text-orange-600 dark:text-yellow-500"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M12 22c5.421 0 10-4.579 10-10S17.421 2 12 2 2 6.579 2 12s4.579 10 10 10zm0-18c4.337 0 8 3.663 8 8s-3.663 8-8 8-8-3.663-8-8 3.663-8 8-8z"></path>
                            <path d="M12 17c.901 0 2.581-.168 3.707-1.292l-1.414-1.416C13.85 14.735 12.992 15 12 15c-1.626 0-3-1.374-3-3s1.374-3 3-3c.993 0 1.851.265 2.293.707l1.414-1.414C14.582 7.168 12.901 7 12 7c-2.757 0-5 2.243-5 5s2.243 5 5 5z"></path>
                          </svg>
                          <span
                            className="cursor-pointer text-xs text-orange-600 dark:text-yellow-500"
                            onClick={toggleModal}
                          >
                            copyright
                          </span>
                        </div>
                      </div>
                      <div
                        className="hidden lg:block lg:flex-none"
                        onClick={() => setReview(!review)}
                      >
                        <div className="flex justify-center space-x-2">
                          <svg
                            stroke="currentColor"
                            fill="currentColor"
                            strokeWidth="0"
                            viewBox="0 0 24 24"
                            className="text-2 h-4 w-4"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path fill="none" d="M0 0h24v24H0z"></path>
                            <path d="M21 4H3c-1.1 0-2 .9-2 2v13c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 15H3V6h18v13zM9 8h2v2H9V8zM5 8h2v2H5V8zm3 8h8v1H8v-1zm5-8h2v2h-2V8zm-4 4h2v2H9v-2zm-4 0h2v2H5v-2zm8 0h2v2h-2v-2zm4-4h2v2h-2V8zm0 4h2v2h-2v-2z"></path>
                          </svg>
                          <span className="text-2 cursor-pointer text-xs">
                            Reviews
                          </span>
                        </div>
                      </div>
                      <div className="flex-none">
                        <div className="flex space-x-2">
                          <svg
                            stroke="currentColor"
                            fill="currentColor"
                            strokeWidth="0"
                            viewBox="0 0 24 24"
                            className="h-4 w-4 text-red-700 dark:text-rose-500"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill="none"
                              d="M0 0h24v24H0zm0 0h24v24H0z"
                            ></path>
                            <path d="M21 6.5l-4 4V7c0-.55-.45-1-1-1H9.82L21 17.18V6.5zM3.27 2L2 3.27 4.73 6H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.21 0 .39-.08.54-.18L19.73 21 21 19.73 3.27 2z"></path>
                          </svg>
                          <a
                            href="/supported-browsers"
                            target="_blank"
                            className="cursor-pointer text-xs text-red-700 dark:text-rose-500"
                          >
                            Video not playing?
                          </a>
                        </div>
                      </div>
                      <div className="flex-none justify-end">
                        <div className="flex space-x-2">
                          <svg
                            stroke="currentColor"
                            fill="currentColor"
                            strokeWidth="0"
                            viewBox="0 0 1024 1024"
                            className="h-4 w-4 text-red-600 dark:text-red-500"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372 0-89 31.3-170.8 83.5-234.8l523.3 523.3C682.8 852.7 601 884 512 884zm288.5-137.2L277.2 223.5C341.2 171.3 423 140 512 140c205.4 0 372 166.6 372 372 0 89-31.3 170.8-83.5 234.8z"></path>
                          </svg>
                          <span className="text-xs text-red-700 dark:text-rose-500">
                            No quiz
                          </span>
                        </div>
                      </div>
                    </div>
                    {review && (
                      <div className={` flex flex-col gap-4 `}>
                        <div className="flex items-start gap-2">
                          <div className="w-8 h-8">
                            <img
                              src="https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg"
                              className="w-[100%] h-full rounded-full"
                              alt=""
                            />
                          </div>
                          <div className="flex flex-col gap-1 w-full">
                            <div className="">Give a Rating</div>
                            <div className="flex items-center gap-1">
                              {[1, 2, 3, 4, 5].map((star) => (
                                <div
                                  key={star}
                                  onClick={() => handleRating(star)}
                                  className="cursor-pointer"
                                >
                                  {star <= rating ? (
                                    <MdOutlineStarPurple500
                                      color="#b4690e"
                                      size={20}
                                    />
                                  ) : (
                                    <MdOutlineStarOutline
                                      color="gray"
                                      size={20}
                                    />
                                  )}
                                </div>
                              ))}
                            </div>
                            <div className="mt-1 w-full h-20">
                              <textarea
                                placeholder="Write your experience"
                                className={`w-[100%] bg-slate-100 text-black border-gray-300 outline-none  border  pl-2 h-[90%] resize-none rounded-md`}
                              ></textarea>
                            </div>
                            <div className="flex items-end justify-end">
                              <button
                                className={`bg-[#31972a] px-4 py-2 rounded-md text-white`}
                              >
                                Submit
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className={` flex flex-col  `}>
                          {feedBackData.map((data, index) => (
                            <div
                              className={`flex items-start gap-2 border-t border-gray-300 py-4`}
                              key={index}
                            >
                              <div className="md:w-28 w-36 h-8 text-white flex items-center justify-center rounded-full border bg-emerald-800">
                                I
                              </div>
                              <div className="flex flex-col items-start justify-start gap-1">
                                <div className="">Ibrahim Khalil</div>
                                <div className="flex items-center gap-1">
                                  {[1, 2, 3, 4, 5].map((star) => (
                                    <div key={star} className="cursor-pointer">
                                      {star <= data.rating ? (
                                        <MdOutlineStarPurple500
                                          color="#b4690e"
                                          size={20}
                                        />
                                      ) : (
                                        <MdOutlineStarOutline
                                          color="gray"
                                          size={20}
                                        />
                                      )}
                                    </div>
                                  ))}
                                </div>
                                <div className="text-sm">{data.feedback}</div>
                                <div className="text-xs text-slate-400">
                                  1 day ago.
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                <div
                  className={`bg-[#F8FAFC] border-gray-50 border-light-1 shadow-1 col-span-full h-max rounded-md border pb-1   lg:col-span-1 lg:rounded-lg`}
                >
                  <div className=" rounded-t-md  p-3  dark:bg-slate-900 lg:rounded-t-lg">
                    <div className="flex flex-1 items-center justify-center">
                      <div className=" w-full">
                        <div
                          className={`bg-[#F8FAFC] border rounded-md p-1 text-black flex items-center pl-2 `}
                        >
                          <IoSearchOutline color="black" size={20} />
                          <input
                            type="text"
                            className={`bg-[#F8FAFC] text-black mantine-9sfq4p`}
                            placeholder="search content"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={`flow-root px-4 py-2 bg-white  border-t  `}>
                    <div className="mantine-ScrollArea-root h-max lg:h-[calc(100vh_-_250px)] mantine-jghxib content_container">
                      {videoData.map((data) => (
                        <div
                          key={data.idChapters}
                          className={`lg:w-full border-b `}
                        >
                          <div
                            className={`text-[#504f4f] flex transition pt-3 hover:bg-[#31972a] hover:text-white  duration-300 ease-in-out lg:pt-4 lg:pl-2 pr-3 pb-4 justify-start cursor-pointer gap-5 lg:items-start`}
                            onClick={() => handlePreviewReply(data.idChapters)}
                            style={{
                              backgroundColor:
                                Openvisible && Previewid === data.idChapters
                                  ? "#31972a"
                                  : "",
                            }}
                          >
                            <div
                              className="lg:ml-0 ml-2 text-[#94A3bb]"
                              style={{
                                color:
                                  Openvisible && Previewid === data.idChapters
                                    ? "white"
                                    : "",
                              }}
                            >
                              {Openvisible && Previewid === data.idChapters ? (
                                <IoIosArrowUp size={18} />
                              ) : (
                                <IoIosArrowDown size={18} />
                              )}
                            </div>
                            <div className="flex flex-col items-start">
                              <div>
                                <h3
                                  className={` mantine-hgwlez text-xs lg:text-sm `}
                                  style={{
                                    color:
                                      Openvisible &&
                                      Previewid === data.idChapters
                                        ? "white"
                                        : "",
                                  }}
                                >
                                  {data?.name}
                                </h3>
                              </div>
                              <div>
                                <div
                                  className={`lg:flex lg:gap-3 text-[12px]  hidden `}
                                  style={{
                                    color:
                                      Openvisible &&
                                      Previewid === data.idChapters
                                        ? "white"
                                        : "",
                                  }}
                                >
                                  <div>1hr 7min</div>
                                </div>
                              </div>
                            </div>
                          </div>
                          {Openvisible && Previewid === data.idChapters && (
                            <div
                              className="text-slate-400"
                              style={{
                                opacity: 1,
                                transition: "opacity 500ms ease 0s",
                              }}
                            >
                              <ul className="p-1">
                                {data?.Videos.map((item) => (
                                  <li
                                    key={item.idChapters}
                                    className={`text-[#504f4f] flex items-start gap-2 lg:gap-4 p-2 pl-7 cursor-pointer px-2 py-2  hover:bg-slate-100`}
                                  >
                                    <div>
                                      <HiOutlinePlay
                                        color="rgb(2 132 199)"
                                        size={27}
                                        className="lg:text-base  mt-1"
                                      />
                                    </div>
                                    <div className={` lg:w-10/12 w-full`}>
                                      <button
                                        className="  text-[14px] lg:text-[14px]"
                                        onClick={() =>
                                          handleOpen(item, data.payment)
                                        }
                                      >
                                        {item?.video_name}
                                      </button>
                                      <div className="hidden lg:block text-[12px] ">
                                        3.30 mintue
                                      </div>
                                    </div>
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
              </section>
            </div>
          </section>
          {visible && (
            <div
              id="default-modal"
              className="fixed  inset-0 z-50 flex items-center justify-center md:ml-28 w-full h-[calc(100%-1rem)] max-h-full overflow-y-auto overflow-x-hidden"
              aria-hidden="true"
            >
              <div className="relative  p-4 w-full max-w-7xl max-h-full">
                <div className="relative boxShaow2 p-3 bg-white rounded-lg  ">
                  <div className="flex items-center justify-between p-2   rounded-t ">
                    <h4 className="text-sm font-semibold text-cyan-400 ">
                      Copyright Warning
                    </h4>
                    <button
                      type="button"
                      className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center "
                      onClick={closeModal}
                    >
                      <svg
                        className="w-3 h-3"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 14"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                        />
                      </svg>
                      <span className="sr-only">Close modal</span>
                    </button>
                  </div>
                  {/* Modal body */}
                  <div className="p-4 md:p-2">
                    <p className="text-[14px] leading-relaxed text-gray-500 ">
                      Free or paid distribution of any course material (video,
                      audio, image or any document) without permission from
                      Trace Academy authorities is strictly prohibited and
                      punishable by law. If something like this is done and we
                      come to know about it, we reserve the right to take action
                      according to the laws of Bangladesh. We hope you will be
                      careful about this. Each paid video content on theTrace
                      Academy platform contains the Learn With Sumit registered
                      logo as a watermark. In addition, Learn with Sumit
                      reserves the right to dynamically display the user's email
                      ID in each video. The intellectual property right of the
                      said video belongs entirely to Learn with Sumit. Whoever
                      buys the course or video will only be allowed to watch the
                      video. But he will not have personal intellectual property
                      rights in any way. Therefore, the user will not have the
                      right to free or paid distribution of that content. If any
                      such thing is done,Trace Academy shall have the right to
                      take action against said user in accordance with the laws
                      of the People's Republic of Bangladesh. So, as a
                      responsible citizen, I urge you to be careful about this.
                      We never want a learner's career to suffer because of this
                      mistake. So we need your cooperation to protect the
                      environment of the community as a whole by thinking about
                      your career. It is a punishable offense to exchange or
                      share any video, text or content related to Trace Academy
                      - Courses with anyone for money or for free without
                      written permission fromTrace Academy authorities. Sharing
                      on Google Drive, Facebook, YouTube, or any pen drive, CD,
                      DVD or any other medium "Learn with Sumit" authority or
                      legal representative of the Government of the People's
                      Republic of Bangladesh Copyright Act, Copyright Act 2000,
                      Copyright Act 2005 Amendment: Section 84, Digital
                      Copyright Act, Digital Security Act, 2018, Digital
                      Security Act, 2018 (Section 19) and may take necessary
                      action under Cyber ​​Security or appropriate laws.
                    </p>
                  </div>
                  {/* Modal footer */}
                </div>
              </div>
            </div>
          )}
          <div
            className={`${
              savedFace ? "opacity-0" : "opacity-1"
            }  absolute top-10 left-[20%]`}
          >
            {!accessGranted && (
              <FaceDetection onAccessGranted={handleAccessGranted} />
            )}
          </div>
        </main>
      </div>
    </Sidebar>
  );
};

export default ContentView;
