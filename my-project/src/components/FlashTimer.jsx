import React from "react";
import redbox from "../assets/flashTimer/redbox.png";
import { useSelector } from "react-redux";

function FlashTimer() {
    const darkMode = useSelector((state) => state.darkMode.darkMode);

  return (
    <>
      <div className=" 2xl:block xl:block lg:block md:flex md:justify-center sm:flex sm:justify-center mobile:flex mobile:justify-center">
        <div className="flex flex-col  2xl:ml-[60px] xl:ml-[60px] lg:m-0 items-start 2xl:w-[600px] xl:w-[600px] 2xl:h-[103px] xl:h-[103px] lg:w-[100%] md:w-auto sm:w-auto mobile:w-auto  gap-3 ">
          <div className="flex font-semibold gap-2 items-center text-base text-myTheme">
            <img className="w-[25px] h-[35px]" src={redbox} alt="redbox" />{" "}
            Todays
          </div>
          <div className="flex gap-6">
            <div className={` ${darkMode?"text-white":""}  font-semibold  2xl:text-3xl xl:text-3xl lg:text-3xl md:text-3xl sm:text-xl mobile:text-xl leading-[48px]`}>
              {" "}
              Flash Sales
            </div>
            <div className="flex flex-col ">
              <div className={`${darkMode?"text-white":""}  flex gap-7 font-medium text-xs`}>
                <span>Days</span>
                <span>Hours</span>
                <span>Mintus</span>
                <span>Secand</span>
              </div>
              <div className="flex gap-7 font-bold text-2xl ">
                <span className={`${darkMode?"text-white":""} `}>
                  03 <span className="text-myTheme font-medium">:</span>{" "}
                </span>
                <span  className={`${darkMode?"text-white":""} `}>
                  23 <span className="text-myTheme font-medium">:</span>{" "}
                </span>
                <span  className={`${darkMode?"text-white":""} `}>
                  10 <span className="text-myTheme font-medium">:</span>{" "}
                </span>
                <span  className={`${darkMode?"text-white":""} `}>56</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FlashTimer;
