import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import imgae1 from "../../public/Images/math.jpg";
import imgae2 from "../../public/Images/physic.jpg";
import imgae3 from "../../public/Images/chemistry.jpg";
import { useNavigate } from "react-router-dom";
import { IoSearchOutline } from "react-icons/io5";
import { useEffect } from "react";
const Course = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Course";
  }, []);
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 4,
    initialSlide: 0,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
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
  const handlenextPage = (index) => {
    navigate(`/course-details/${index}`);
  };
  return (
    <div className="container px-5  md:px-0 m-auto mb-4">
      <div className="flex items-center mt-3 justify-center border-b border-gray-500">
        <div className="bg-coching-text_color md:w-[40vw] w-[100%] mb-4 px-2  flex h-10 p-1 items-center rounded">
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
      <div className="mt-2">
        <h4 className="text-white font-semibold text-center text-xl">Physics</h4>
        <Slider {...settings}>
          {data.map((d, index) => (
            <div
              key={d.name}
              className="bg-white cursor-pointer h-[250px] m-2 text-black rounded-xl"
              onClick={() => handlenextPage(index)}
            >
              <div className="h-40 bg-indigo-500 flex justify-center items-center rounded-t-xl">
                <img src={imgae2} alt="" className="h-40 rounded-t-xl " />
              </div>

              <div className="flex flex-col items-start justify-center gap-1 p-4">
                <p className=" truncate font-semibold w-[200px]">{d.name}</p>
                <p className="text-left">30000</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <div className="mt-2">
        <h4 className="text-white font-semibold text-center text-xl">Chemistry</h4>
        <Slider {...settings}>
          {data.map((d) => (
            <div
              key={d.name}
              className="bg-white  h-[250px] m-2 text-black rounded-xl"
            >
              <div className="h-40 bg-indigo-500 flex justify-center items-center rounded-t-xl">
                <img src={imgae3} alt="" className="h-40 rounded-t-xl " />
              </div>

              <div className="flex flex-col items-start justify-center gap-4 p-4">
                <p className=" truncate font-semibold w-[200px] ">{d.name}</p>
                <p className="text-left">30000</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <div className="mt-2">
        <h4 className="text-white font-semibold text-center text-xl" >Math</h4>
        <Slider {...settings}>
          {data.map((d) => (
            <div
              key={d.name}
              className="bg-white  h-[250px] m-2 text-black rounded-xl"
            >
              <div className="h-40 bg-indigo-500 flex justify-center items-center rounded-t-xl">
                <img src={imgae1} alt="" className="h-40 rounded-t-xl " />
              </div>

              <div className="flex flex-col items-start justify-center gap-4 p-4">
                <p className=" truncate font-semibold w-[200px]">{d.name}</p>
                <p className="text-left">30000</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

const data = [
  {
    name: `he Ultimate MySQL Bootcamp: Go from SQL Beginner to Expert`,
    img: { imgae1 },
    review: `The Ultimate MySQL Bootcamp: Go from SQL Beginner to Expert
`,
  },
  {
    name: `Ellie Anderson`,
    img: { imgae2 },
    review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
  },
  {
    name: `Nia Adebayo`,
    img: { imgae3 },
    review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
  },
  {
    name: `Rigo Louie`,
    img: `/students/Rigo_Louie.jpg`,
    review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
  },
  {
    name: `Mia Williams`,
    img: `/students/Mia_Williams.jpg`,
    review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
  },
  {
    name: `The Complete Python Bootcamp From Zero to Hero in Python`,
    img: `/students/Mia_Williams.jpg`,
    review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
  },
];

export default Course;
