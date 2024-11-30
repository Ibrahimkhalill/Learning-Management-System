// EnrollCourse.js
import React, { useEffect, useState } from "react";
import Sidebar from "../../components/Sidebar";
import axiosInstance from "../../components/axiosInstance";
import { useTheme } from "../../components/ThemeContext";
import { useNavigate } from "react-router-dom";
import HelpSection from "../../components/HelpSection";

const EnrollCourse = () => {
  const [Subject, setSubject] = useState([]);
  const [course, setCourse] = useState([]);
  const [feedback, setFeedBack] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const { theme } = useTheme();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Course";

    const fetchCourse = async () => {
      try {
        setLoading(true);
        const response = await axiosInstance.get("/courses/getAll");
        setCourse(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };

    const fetchReview = async () => {
      try {
        const response = await axiosInstance.get("/feedbacks/getAll");
        setFeedBack(response.data);
      } catch (error) {
        console.error("Error fetching feedback:", error);
      }
    };

    fetchCourse();
    fetchReview();
  }, []);

  const handlenextPage = (name) => {
    navigate(`/course-content/${name}`);
  };
  return (
    <Sidebar>
      <div className="w-full px-5 ">
        <div className="w-full flex p-4 md:!p-6 flex-col items-center gap-6 md:!gap-8 self-stretch rounded-lg md:!rounded-2xl border border-ostad-black-opac bg-white shadow-md">
          <img
            className="w-[104px] h-[104px]"
            src="https://cdn.ostad.app/public/upload/2023-05-27T08-52-03.886Z-Image.png"
            alt="Course Image"
          />
          <div className="flex flex-col gap-2 items-center">
            <p className="text-[20px] md:!text-[25px] font-bold leading-[130%] text-center ">
              You are not enrolled in any courses yet.
            </p>
            <p className="body-paragraph text-center ">
              Enroll in the following recommended live courses and workshops and
              get skilled.
            </p>
          </div>
        </div>
        <div>
          <div
            className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-3 my-5 "
          >
            {course.map((d) => {
              // const { average, count } = filter(d);
              return (
                <div
                  key={d.id}
                  className="relative px-2 py-2 flex w-full flex-col gap-0 rounded-lg items-start bg-trcae-color overflow-hidden h-[280px] border footer-border-color hover:border-ostad-black-40 hover:outline-1 hover:outline-ostad-black-40 hover:shadow"
                  onClick={() => handlenextPage(d.course_name)}
                >
                  <div className="h-40 w-full flex justify-center items-center rounded-t-xl  ">
                    <img
                      src={d.Image?.image_url}
                      alt={d.course_name}
                      className="h-40 rounded-md w-full"
                    />
                  </div>

                  <div className="flex flex-col items-start justify-center gap-1 mt-2">
                    <p className=" font-semibold ">{d.course_name}</p>
                    {/* {count > 0 && (
                              <div className="flex items-center gap-2">
                                <span className="font-semibold">{average}</span>
                                <span>
                                  <RatingStars rating={average} />
                                </span>
                                <span className="text-gray-600">({count})</span>
                              </div>
                            )} */}
                  </div>
                  <div className="flex items-center w-full absolute bottom-0 left-0 px-2 py-2">
                    <button className="uppercase font-semibold text-sm bg-gray-200 text-black w-full py-2 rounded-md">
                      View
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="px-8">
        <HelpSection />
      </div>
    </Sidebar>
  );
};

export default EnrollCourse;
