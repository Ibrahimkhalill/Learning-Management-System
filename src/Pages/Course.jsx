import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from "react-router-dom";
import { IoSearchOutline } from "react-icons/io5";
import { useEffect, useState } from "react";
import axiosInstance from "../components/axiosInstance";
import { useTheme } from "../components/ThemeContext";

const Course = () => {
  const navigate = useNavigate();
  const [Subject, setSubject] = useState([]);
  const [course, setCourse] = useState([]);
  const { theme } = useTheme();
  useEffect(() => {
    document.title = "Course";
  }, []);

  const settings = {
    
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 5,
    slidesToScroll: 5,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          
          
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const handlenextPage = (id) => {
    navigate(`/course-details/${id}`);
  };

  useEffect(() => {
    const fetchSubject = async () => {
      try {
        const response = await axiosInstance.get("/subjects/getAll");
        setSubject(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    const fetchCourse = async () => {
      try {
        const response = await axiosInstance.get("/courses/getAll");
        setCourse(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchSubject();
    fetchCourse();
  }, []);

  return (
    <div className="container px-5 md:px-0 m-auto pb-4">
      <div className="flex items-center mt-3 justify-center border-b border-gray-500">
        <div className="bg-coching-text_color md:w-[40vw] w-[100%] mb-4 px-2 flex h-10 p-1 items-center rounded">
          <input
            type="text"
            placeholder="Search Course..."
            className="flex grow bg-coching-nav_color items-center p-2 h-[100%] outline-none text-white"
          />
          <button className="w-[45px]">
            <IoSearchOutline
              size={25}
              className="h-[27px] m-auto stroke-slate-900"
            />
          </button>
        </div>
      </div>
      {Subject &&
        Subject.map((data, index) => (
          <div key={index} className="mt-2">
            <h4 className={`${theme==="light" ? "text-black ": "text-white "} font-semibold text-center text-xl`}>
              {data?.name}
            </h4>
            <Slider {...settings}>
              {course
                .filter((d) => d.Subject?.name === data?.name) // Filter courses by subject
                .map((d) => (
                  <div
                    key={d.id} // Ensure unique key
                    className="bg-white cursor-pointer h-[250px] shadow-xl m-2 text-black rounded-[.9rem]  transition-shadow duration-300" // Add hover shadow class
                    onClick={() => handlenextPage(d.idCourses)}
                  >
                    <div className="h-40  flex justify-center items-center  rounded-t-xl">
                      <img
                        src={d.Image?.image_url}
                        alt={d.course_name}
                        className="h-40  rounded-t-xl"
                        onMouseEnter={(e) =>
                          (e.currentTarget.style.boxShadow =
                            "0 8px 16px rgba(0,0,0,0.3)")
                        }
                        onMouseLeave={(e) =>
                          (e.currentTarget.style.boxShadow =
                            "0 4px 8px rgba(0,0,0,0.2)")
                        }
                      />
                    </div>

                    <div className="flex flex-col items-start justify-center gap-1 p-4">
                      <p className="truncate font-semibold w-[200px]">
                        {d.course_name}
                      </p>
                      <p className="text-left">{d.price} BDT</p>
                    </div>
                  </div>
                ))}
            </Slider>
          </div>
        ))}
    </div>
  );
};

export default Course;
