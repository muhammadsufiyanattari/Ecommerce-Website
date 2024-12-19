import React from "react";
import frameSpiker from "../assets/images/frameSpiker.png";
import { useSelector } from "react-redux";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init({
  duration: 1000,
});

function Spiker() {
  const darkMode = useSelector((state) => state.darkMode.darkMode);

  return (
    <>
      <div className="center my-6  ">
        {/* <div
          className={`${
            darkMode ? "darkTheme" : ""
          }  mx-[10px] 2xl:w-[1170px] 2xl:h-[500px] xl:w-[1170px] xl:h-[500px] lg:w-[1170px] lg:h-[500px]  md:w-auto md:h-auto   sm:w-[300px] sm:h-[auto] mobile:w-[300px] mobile:h-auto bg-black center rounded my-12 gap-7`}
        >
          <div data-aos="zoom-in-right" className="w-[50%]  ">
            <div className="flex flex-col justify-start w-[100%] ml-14 2xl:ml-14 xl:ml-14 lg:ml-14 md:ml-14 sm:ml-1 mobile:ml-1 2xl:gap-1 xl:gap-14 lg:gap-14 md:gap-10 md:py-4 sm:gap-2 sm:py-4 mobile:py-4 mobile:gap-1">
              <div className="font-semibold 2xl:text-base xl:text-base lg:text-base md:text-sm sm:text-[8px]  mobile:text-[6px] ">
                <h3
                  className={`${darkMode ? "text-black" : ""} text-[#00FF66]`}
                >
                  Categories
                </h3>
              </div>
              <div className="font-semibold 2xl:text-5xl xl:text-5xl lg:text-5xl md:text-4xl sm:text-[8px] sm:w-[px] mobile:text-[8px]">
                <h1 className={`${darkMode ? "text-black" : "text-white"} `}>
                  Enhance Your Music Experience
                </h1>
              </div>
              <div className="flex  items-center text-center 2xl:gap-6 xl:gap-6 lg:gap-6 md:gap-4 sm:gap-4 mobile:gap-1 ">
                <div
                  className={`${
                    darkMode
                      ? "bg-black text-white"
                      : " bg-slate-100 text-black"
                  }  rounded-full text-center 2xl:w-[62px] xl:w-[62px] lg:w-[62px] md:w-[52px] sm:w-[18px] mobile:w-[18px] 2xl:h-[62px] xl:h-[62px] lg:h-[62px] md:h-[52px] sm:h-[20px] mobile:h-[20px] 2xl:font-normal xl:font-normal lg:font-normal 2xl:text-xs  xl:text-xs lg:text-xs md:font-light sm:font-extralight sm:text-[3px] mobile:text-[3px] 2xl:p-2 xl:p-2 lg:p1-2 md:p-1  sm:p-1 mobile:p-1`}
                >
                  <span className=" "> 23 Hours</span>
                </div>
                <div
                  className={`${
                    darkMode
                      ? "bg-black text-white"
                      : " bg-slate-100 text-black"
                  } rounded-full text-center 2xl:w-[62px] xl:w-[62px] lg:w-[62px] md:w-[52px] sm:w-[18px] mobile:w-[18px] 2xl:h-[62px] xl:h-[62px] lg:h-[62px] md:h-[52px] sm:h-[20px] mobile:h-[20px] 2xl:font-normal xl:font-normal lg:font-normal 2xl:text-xs  xl:text-xs lg:text-xs md:font-light sm:font-extralight sm:text-[3px] mobile:text-[3px] 2xl:p-2 xl:p-2 lg:p1-2 md:p-1  sm:p-1 mobile:p-1`}
                >
                  <span className=" "> 05 Days</span>
                </div>
                <div
                  className={`${
                    darkMode
                      ? "bg-black text-white"
                      : " bg-slate-100 text-black"
                  }  rounded-full text-center 2xl:w-[62px] xl:w-[62px] lg:w-[62px] md:w-[52px] sm:w-[18px] mobile:w-[18px] 2xl:h-[62px] xl:h-[62px] lg:h-[62px] md:h-[52px] sm:h-[20px] mobile:h-[20px] 2xl:font-normal xl:font-normal lg:font-normal 2xl:text-xs  xl:text-xs lg:text-xs md:font-light sm:font-extralight sm:text-[3px] mobile:text-[3px] 2xl:p-2 xl:p-2 lg:p1-2 md:p-1  sm:p-1 mobile:p-1`}
                >
                  <span className=" "> 59 Mintus</span>
                </div>
                <div
                  className={`${
                    darkMode
                      ? "bg-black text-white "
                      : " bg-slate-100 text-black"
                  }  rounded-full  text-center 2xl:w-[62px] xl:w-[62px] lg:w-[62px] md:w-[52px] sm:w-[18px] mobile:w-[18px] 2xl:h-[62px] xl:h-[62px] lg:h-[62px] md:h-[52px] sm:h-[20px] mobile:h-[20px] 2xl:font-normal xl:font-normal lg:font-normal 2xl:text-xs  xl:text-xs lg:text-xs md:font-light sm:font-extralight sm:text-[3px] mobile:text-[3px] 2xl:p-2 xl:p-2 lg:p1-2 md:p-1  sm:p-1 mobile:p-1`}
                >
                  <span className=" "> 35 Secand</span>
                </div>
              </div>
              <div>
                {" "}
                <button
                  className={`${
                    darkMode ? "bg-black active:bg-slate-950" : ""
                  } bg-[#00FF66] active:bg-[#34ba69] text-white 2xl:w-[171px] 2xl:h-14  xl:w-[171px] xl:h-14  lg:w-[171px] lg:h-14  md:w-[160px]  md:h-14 sm:text-sm sm:w-[50px] sm:h-auto sm:p-1 mobile:w-auto mobile:p-2 mobile:h-auto 2xl:text-base xl:text-base lg:text-base md:text-sm sm:text-[5px]  mobile:text-[6px] rounded`}
                >
                  Buy Now!
                </button>
              </div>
            </div>
          </div>
          <div className="w-[50%] ">
            <div className=" center mr-3">
              <img
                data-aos="zoom-in-left"
                className=" 2xl:w-[568px] xl:w-[568px]  lg:w-[468px] md:w-[368px] 2xl:h-[330px] xl:h-[330px] lg:h-[280px] md:h-[230px] sm:w-auto sm:h-auto mobile:w-auto mobile:h-auto"
                src={frameSpiker}
                alt="Frame Spiker"
              />
            </div>
          </div>
        </div> */}
        <section className={`${ darkMode ? "darkTheme" : "darkTheme" }  text-gray-600   rounded-3xl  body-font flex justify-center items-center`}>
          <div className="container  mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
            <div data-aos="zoom-in-right" className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <div  className={`${darkMode ? "text-black" : ""} font-semibold m-2 text-[#00FF66]`}
            >Categories</div>
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-white">
                {/* Before they sold out */}
                Enhance Your 
                <br className="hidden lg:inline-block" />
                {/* readymade gluten */}
                Music Experience
              </h1>
             <div className="flex gap-4 ">
              <div className={`${ darkMode ? "bg-black text-white" : "bg-white text-black" } w-14 h-14  p-2  rounded-full`}>
                <div className="flex-col justify-center items-center text-[10px]  text-center">
                  23{" "}
                  <div>Hours</div>
                </div>
              </div>
              <div className={`${ darkMode ? "bg-black text-white" : "bg-white text-black" } w-14 h-14  p-2  rounded-full`}>
                <div className="flex-col justify-center items-center text-[10px]  text-center">
                  05{" "}
                  <div>Days</div>
                </div>
              </div>
              <div className={`${ darkMode ? "bg-black text-white" : "bg-white text-black" } w-14 h-14  p-2  rounded-full`}>
                <div className="flex-col justify-center items-center text-[10px]  text-center">
                  59{" "}
                  <div>Minutes</div>
                </div>
              </div>
              <div className={`${ darkMode ? "bg-black text-white" : "bg-white text-black" } w-14 h-14  p-2  rounded-full`}>
                <div className="flex-col justify-center items-center text-[10px] text-center">
                  35{" "}
                  <div>Secands</div>
                </div>
              </div>
              </div>
              
              <div className="flex justify-center my-5">
                <button className="inline-flex text-white bg-[#00FF66] border-0 py-4 px-10 focus:outline-none hover:bg-[#299253] active:bg-[#144a29] rounded text-sm">
                  Button
                </button>
                {/* <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
          Button
        </button> */}
              </div>
            </div>
            <div data-aos="zoom-in-left" className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
              <img
                className="object-cover object-center rounded animate-pulse"
                alt="hero"
                src={frameSpiker}
              />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Spiker;
