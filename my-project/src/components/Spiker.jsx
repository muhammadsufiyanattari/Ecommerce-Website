import React from "react";
import frameSpiker from "../assets/images/frameSpiker.png";

function Spiker() {
  return (
    <>
      <div className="center  ">
        <div className="2xl:w-[1170px] 2xl:h-[500px] xl:w-[1170px] xl:h-[500px] lg:w-[1170px] lg:h-[500px]  md:w-auto md:h-auto   sm:w-auto sm:h-auto mobile:w-auto mobile:h-auto bg-black center rounded my-12 gap-7">
          <div className="w-[50%] ">
            <div className="flex flex-col justify-center w-[100%] ml-14 2xl:gap-14 xl:gap-14 lg:gap-14 md:gap-10 md:py-4 sm:gap-4 sm:py-4 mobile:py-4 mobile:gap-2">
              <div className="font-semibold 2xl:text-base xl:text-base lg:text-base md:text-sm sm:text-xs mobile:text-[6px] ">
                <h3 className="text-[#00FF66]">Categories</h3>
              </div>
              <div className="font-semibold 2xl:text-5xl xl:text-5xl lg:text-5xl md:text-4xl sm:text-xl mobile:text-[8px]">
                <h1 className="text-white">Enhance Your Music Experience</h1>
              </div>
              <div className="flex 2xl:gap-6 xl:gap-6 lg:gap-6 md:gap-4 sm:gap-4 mobile:gap-1">
                <div className="bg-slate-100 rounded-full text-center 2xl:w-[62px] xl:w-[62px] lg:w-[62px] md:w-[52px] sm:w-[48px] mobile:w-[18px] 2xl:h-[62px] xl:h-[62px] lg:h-[62px] md:h-[52px] sm:h-[48px] mobile:h-[20px] 2xl:font-normal xl:font-normal lg:font-normal 2xl:text-sm xl:text-sm lg:text-sm md:font-light sm:font-extralight sm:text-xs mobile:text-[3px] 2xl:p-2 xl:p-2 lg:p1-2 md:p-1  sm:p-[2x] mobile:p-1">
                  <span className=" "> 23 Hours</span>
                </div>
                <div className="bg-slate-100 rounded-full text-center 2xl:w-[62px] xl:w-[62px] lg:w-[62px] md:w-[52px] sm:w-[48px] mobile:w-[18px] 2xl:h-[62px] xl:h-[62px] lg:h-[62px] md:h-[52px] sm:h-[48px] mobile:h-[20px] 2xl:font-normal xl:font-normal lg:font-normal 2xl:text-sm xl:text-sm lg:text-sm md:font-light sm:font-extralight sm:text-xs mobile:text-[3px] 2xl:p-2 xl:p-2 lg:p1-2 md:p-1  sm:p-[2x] mobile:p-1">
                  <span className=" "> 05 Days</span>
                </div>
                <div className="bg-slate-100 rounded-full text-center 2xl:w-[62px] xl:w-[62px] lg:w-[62px] md:w-[52px] sm:w-[48px] mobile:w-[18px] 2xl:h-[62px] xl:h-[62px] lg:h-[62px] md:h-[52px] sm:h-[48px] mobile:h-[20px] 2xl:font-normal xl:font-normal lg:font-normal 2xl:text-sm xl:text-sm lg:text-sm md:font-light sm:font-extralight sm:text-xs mobile:text-[3px] 2xl:p-2 xl:p-2 lg:p1-2 md:p-1  sm:p-[2x] mobile:p-1">
                  <span className=" "> 59 Mintus</span>
                </div>
                <div className="bg-slate-100 rounded-full text-center 2xl:w-[62px] xl:w-[62px] lg:w-[62px] md:w-[52px] sm:w-[48px] mobile:w-[18px] 2xl:h-[62px] xl:h-[62px] lg:h-[62px] md:h-[52px] sm:h-[48px] mobile:h-[20px] 2xl:font-normal xl:font-normal lg:font-normal 2xl:text-sm xl:text-sm lg:text-sm md:font-light sm:font-extralight sm:text-xs mobile:text-[3px] 2xl:p-2 xl:p-2 lg:p1-2 md:p-1  sm:p-[2x] mobile:p-1">
                  <span className=" "> 35 Secand</span>
                </div>
              </div>
              <div>
                {" "}
                <button className="bg-[#00FF66] active:bg-[#34ba69] text-white 2xl:w-[171px] 2xl:h-14  xl:w-[171px] xl:h-14  lg:w-[171px] lg:h-14  md:w-[160px]  md:h-14 sm:text-sm sm:w-auto sm:h-auto sm:p-2 mobile:w-auto mobile:p-2 mobile:h-auto mobile:text-[6px] rounded">
                  Buy Now!
                </button>
              </div>
            </div>
          </div>
          <div className="w-[50%] ">
            <div className=" center">
              <img
                className=" 2xl:w-[568px] xl:w-[568px] lg:w-[468px] md:w-[368px] 2xl:h-[330px] xl:h-[330px] lg:h-[280px] md:h-[230px] sm:w-[280px] sm:h-[180px] mobile:w-auto mobile:h-auto"
                src={frameSpiker}
                alt="Frame Spiker"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Spiker;
