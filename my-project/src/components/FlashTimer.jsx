import React from "react";
import redbox from "../assets/flashTimer/redbox.png";
import { useSelector } from "react-redux";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init({disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
  

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 400, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
});

function FlashTimer() {
    const darkMode = useSelector((state) => state.darkMode.darkMode);

  return (
    <>
      <div  className=" 2xl:block xl:block lg:block md:flex md:justify-center sm:flex sm:justify-center mobile:flex mobile:justify-center">
        <div className="flex flex-col  2xl:ml-[60px] xl:ml-[60px] lg:m-0 items-start 2xl:w-[600px] xl:w-[600px] 2xl:h-[103px] xl:h-[103px] lg:w-[100%] md:w-auto sm:w-auto mobile:w-auto  gap-3 ">
          <div data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom" className="flex font-semibold gap-2 items-center text-base text-myTheme">
            <img className="w-[25px] h-[35px]" src={redbox} alt="redbox" />{" "}
            Todays
          </div>
          <div className="flex gap-6">
            <div data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom" className={` ${darkMode?"text-white":""}  font-semibold  2xl:text-3xl xl:text-3xl lg:text-3xl md:text-3xl sm:text-xl mobile:text-xl leading-[48px]`}>
              {" "}
              Flash Sales
            </div>
            <div className="flex flex-col ">
              <div data-aos="fade-left" className={`${darkMode?"text-white":""}  flex gap-7 font-medium text-xs`}>
                <span>Days</span>
                <span>Hours</span>
                <span>Mintus</span>
                <span>Secand</span>
              </div>
              <div className="flex gap-7 font-bold text-2xl ">
                <span data-aos="fade-right" className={`${darkMode?"text-white":""} `}>
                  03 <span className="text-myTheme font-medium">:</span>{" "}
                </span>
                <span data-aos="fade-right" className={`${darkMode?"text-white":""} `}>
                  23 <span className="text-myTheme font-medium">:</span>{" "}
                </span>
                <span data-aos="fade-right" className={`${darkMode?"text-white":""} `}>
                  10 <span className="text-myTheme font-medium">:</span>{" "}
                </span>
                <span data-aos="fade-right" className={`${darkMode?"text-white":""} `}>56</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FlashTimer;
