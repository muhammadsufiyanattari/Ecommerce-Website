// function Arrivel() {
//   return (
//     <>
//       <div className="ml-5">
//         <MyCountBox name={"New Arrival"} days={"Featured"} />
//       </div>
//       <div className="flex justify-center items-center bg-orange-400 my-10 ">
//         <div className="w-[1170px] h-[600px] flex bg-slate-400 gap-[30px]">
//           <div
//             className=" flex items-end p-7   w-[50%] bg-black "
//             style={{
//               backgroundImage: `url(${ps5})`,
//               backgroundRepeat: "no-repeat",
//               backgroundPosition: "bottom",
//               backgroundAttachment: "inherit",
//             }}
//           >
//             <div className="  text-white flex flex-col gap-[16px] ">
//               <div>
//                 <h2 className="font-semibold text-2xl">PlayStation 5</h2>
//               </div>
//               <div>
//                 <p className="w-[242px] h-[42px]">
//                   Black and White version of the PS5 coming out on sale.
//                 </p>
//               </div>
//               <div>
//                 {" "}
//                 <span className=" font-medium text-sm hover:text-myTheme cursor-pointer hover:underline">
//                   Shop Now
//                 </span>
//               </div>
//             </div>
//           </div>
//           <div className="w-[50%] flex flex-col gap-8 ">
//             <div className="bg-[#0D0D0D] w-[570px] h-[600px] flex rounded ">
//               <div className="w-[70%] text-white flex justify-center items-end p-3">
//                 <div className="flex flex-col gap-[16px]">
//                   <div>
//                     <h2 className="font-semibold text-2xl">Women’s Collections</h2>
//                   </div>
//                   <div>
//                     <p className="font-normal text-sm">
//                       Featured woman collections that give you another vibe.
//                     </p>
//                   </div>
//                   <div>
//                 {" "}
//                 <span className=" font-medium  text-sm hover:text-myTheme cursor-pointer hover:underline">
//                   Shop Now
//                 </span>
//               </div>
//                 </div>
//               </div>
//               <div className="w-[70%]  flex items-end  ">
//                 <img className="w-[570px] h-[250px] " src={anti} alt="" />
//               </div>
//             </div>
//             <div className=" w-[570px] h-[600px]  flex gap-7">

// <div className="bg-black w-[270px] h-[284px] flex justify-end items-end p-4  rounded"  style={{
//               backgroundImage: `url(${amazone})`,
//               backgroundRepeat: "no-repeat",
//               backgroundPosition: "bottom",
//               backgroundAttachment: "inherit",
//             }}>
//                <div className="  text-white flex flex-col  ">
//               <div>
//                 <h2 className="font-semibold text-[20px] leading-6">Speakers</h2>
//               </div>
//               <div>
//                 <p className="w-[242px] h-[42px] font-normal text-xs">
//                 Amazon wireless speakers                </p>
//               </div>
//               <div>
//                 {" "}
//                 <span className=" font-medium text-sm hover:text-myTheme cursor-pointer hover:underline">
//                   Shop Now
//                 </span>
//               </div>
//             </div>
//                </div>
// <div className="bg-black w-[270px] h-[284px] flex justify-end items-end p-4 py-8 rounded"  style={{
//               backgroundImage: `url(${guchi})`,
//               backgroundRepeat: "no-repeat",
//               backgroundPosition: "center",
//               backgroundAttachment: "inherit",
//             }}>
//                <div className="  text-white flex flex-col   ">
//               <div>
//                 <h2 className="font-semibold text-[20px] leading-6">Perfume</h2>
//               </div>
//               <div>
//                 <p className="w-[242px] h-[42px] font-normal text-xs">
//                 GUCCI INTENSE OUD EDP                </p>
//               </div>
//               <div>
//                 {" "}
//                 <span className=" font-medium text-sm hover:text-myTheme cursor-pointer hover:underline">
//                   Shop Now
//                 </span>
//               </div>
//             </div>

//                </div>

//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Arrivel;

import React from "react";
import MyCountBox from "./MyCountBox";
import { useSelector } from "react-redux";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init({
  duration: 1000,
});

function Arrivel() {
  const darkMode = useSelector((state) => state.darkMode.darkMode);

  return (
    <>
      <div className="ml-5 my-8 container mx-auto">
        <MyCountBox name={"New Arrival Products"} days={"Featured"} />
      </div>
      <div className=" hidden justify-center lg:flex  items-center  my-10">
        <div className="w-full max-w-[1170px] h-auto lg:h-[600px] flex flex-col lg:flex-row  gap-4 lg:gap-[30px] p-4">
          <div
            className={`${
              darkMode ? "bg-neutral-900" : "bg-black"
            } flex items-end p-7 w-full lg:w-[50%]  `}
            style={{
              backgroundImage: `url(https://i.imghippo.com/files/kX5390WIc.png)`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "bottom",
              backgroundSize: "cover",
            }}
          >
            <div
              data-aos="fade-right"
              className="text-white flex flex-col 2xl:gap-[16px] xl:gap-[16px] lg:gap[16px] md:gap-3 sm:gap-1 mobile:gap-1 p-4"
            >
              <div>
                <h2 className="font-semibold 2xl:text-2xl xl:text-2xl lg:text-2xl md:text-xl sm:text-sm mobile:text-xs">
                  PlayStation 5
                </h2>
              </div>
              <div>
                <p className="w-[242px] h-[42px] 2xl:text-sm xl:text-sm lg:text-sm md:text-xs sm:text-xs mobile:text-[10px]">
                  Black and White version of the PS5 coming out on sale.
                </p>
              </div>
              <div>
                <span className="font-medium 2xl:text-sm xl:text-sm lg:text-sm md:text-xs sm:text-xs mobile:text-[10px] hover:text-myTheme cursor-pointer hover:underline">
                  Shop Now
                </span>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-[50%] flex flex-col gap-8">
            <div
              className={`${
                darkMode ? "bg-neutral-900" : "bg-[#0D0D0D]"
              }  w-full lg:w-[570px] h-auto lg:h-[600px] flex rounded`}
            >
              <div className="w-full lg:w-[70%] text-white flex justify-center items-end p-3">
                <div
                  data-aos="fade-left"
                  className="flex flex-col 2xl:gap-[16px] xl:gap-[16px] lg:gap[16px] md:gap-3 sm:gap-1 mobile:gap-1"
                >
                  <div>
                    <h2 className="font-semibold 2xl:text-2xl xl:text-2xl lg:text-2xl md:text-xl sm:text-sm mobile:text-xs ">
                      Women’s Collections
                    </h2>
                  </div>
                  <div>
                    <p className="font-normal 2xl:text-sm xl:text-sm lg:text-sm md:text-xs sm:text-xs mobile:text-[10px]">
                      Featured woman collections that give you another vibe.
                    </p>
                  </div>
                  <div>
                    <span className="font-medium 2xl:text-sm xl:text-sm lg:text-sm md:text-xs sm:text-xs mobile:text-[10px] hover:text-myTheme cursor-pointer hover:underline">
                      Shop Now
                    </span>
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-[70%] flex items-end">
                <img
                  data-aos="fade-right"
                  className="w-full lg:w-[570px] h-auto lg:h-[250px]"
                  src="https://i.imghippo.com/files/eGA9042HPk.png"
                  alt=""
                />
              </div>
            </div>
            <div className="w-full lg:w-[570px] h-auto lg:h-[600px] flex flex-col lg:flex-row gap-4 lg:gap-7">
              <div
                className={`${
                  darkMode ? "bg-neutral-900" : "bg-black"
                }  w-full lg:w-[270px] h-[284px] flex justify-center items-end p-4 rounded`}
                style={{
                  backgroundImage: `url(https://i.imghippo.com/files/RuU7989uM.png)`,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center bottom",
                  backgroundSize: "cover",
                }}
              >
                <div
                  data-aos="fade-left"
                  className="text-white flex flex-col  "
                >
                  <div>
                    <h2 className="font-semibold text-[20px] leading-6">
                      Speakers
                    </h2>
                  </div>
                  <div>
                    <p className="w-[242px] h-[42px] font-normal text-xs">
                      Amazon wireless speakers
                    </p>
                  </div>
                  <div>
                    <span className="font-medium text-sm hover:text-myTheme cursor-pointer hover:underline">
                      Shop Now
                    </span>
                  </div>
                </div>
              </div>
              <div
                className={`${
                  darkMode ? "bg-neutral-900" : "bg-black"
                }  w-full lg:w-[270px] h-[284px] flex justify-center items-end p-4 py-8 rounded`}
                style={{
                  backgroundImage: `url(https://i.imghippo.com/files/Jlrz2781XRA.png)`,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}
              >
                <div data-aos="fade-left" className="text-white flex flex-col ">
                  <div>
                    <h2 className="font-semibold text-[20px] leading-6">
                      Perfume
                    </h2>
                  </div>
                  <div>
                    <p className="w-[242px] h-[42px] font-normal text-xs">
                      GUCCI INTENSE OUD EDP
                    </p>
                  </div>
                  <div>
                    <span className="font-medium text-sm hover:text-myTheme cursor-pointer hover:underline">
                      Shop Now
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4 ">
        <div className="relative flex bg-black w-[500px]  justify-center lg:hidden container mx-auto">
          <div>
            <img
              data-aos="fade-left"
              src="https://i.imghippo.com/files/kX5390WIc.png"
              alt=""
            />
          </div>
          <div
            data-aos="fade-right"
            className="text-white absolute md:left-10 sm:left-11 left-5  top-48 sm:top-[350px] flex flex-col 2xl:gap-[16px] xl:gap-[16px] lg:gap[16px] md:gap-3 sm:gap-1 mobile:gap-1 p-4"
          >
            <div>
              <h2 className="font-semibold 2xl:text-2xl xl:text-2xl lg:text-2xl md:text-xl sm:text-sm mobile:text-xs">
                PlayStation 5
              </h2>
            </div>
            <div>
              <p className="w-[242px] h-[42px] 2xl:text-sm xl:text-sm lg:text-sm md:text-xs sm:text-xs mobile:text-[10px]">
                Black and White version of the PS5 coming out on sale.
              </p>
            </div>
            <div>
              <span className="font-medium 2xl:text-sm xl:text-sm lg:text-sm md:text-xs sm:text-xs mobile:text-[10px] hover:text-myTheme cursor-pointer hover:underline">
                Shop Now
              </span>
            </div>
          </div>
        </div>

        {/* unti */}
        <div
          className={`${
            darkMode ? "bg-neutral-900" : "bg-[#0D0D0D]"
          }  w-[500px]  h-auto  flex rounded container lg:hidden flex-grow mx-auto`}
        >
          <div className="w-full lg:w-[70%] text-white flex justify-center items-end p-3">
            <div
              data-aos="fade-left"
              className="flex flex-col 2xl:gap-[16px] xl:gap-[16px] lg:gap[16px] md:gap-3 sm:gap-1 mobile:gap-1"
            >
              <div>
                <h2 className="font-semibold sm:text-xl mobile:text-xs ">
                  Women’s Collections
                </h2>
              </div>
              <div>
                <p className="font-normal sm:text-sm mobile:text-[8px]">
                  Featured woman collections that give you another vibe.
                </p>
              </div>
              <div>
                <span className="font-medium 2xl:text-sm xl:text-sm lg:text-sm md:text-xs sm:text-xs mobile:text-[10px] hover:text-myTheme cursor-pointer hover:underline">
                  Shop Now
                </span>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-[70%] flex items-end">
            <img
              data-aos="fade-right"
              className="w-full lg:w-[570px] backdrop: h-auto lg:h-[250px]"
              src="https://i.imghippo.com/files/eGA9042HPk.png"
              alt=""
            />
          </div>
        </div>
        {/* spiker */}
        <div className="relative flex bg-black w-[500px]   justify-center lg:hidden container mx-auto">
          <div>
            <img
              data-aos="fade-left"
              className="w-[300px]"
              src="https://i.imghippo.com/files/RuU7989uM.png"
              alt=""
            />
          </div>
          <div
            data-aos="fade-right"
            className="text-white absolute md:left-12 md:top-40 sm:left-5 left-6  top-48 sm:top-36 flex flex-col 2xl:gap-[16px] xl:gap-[16px] lg:gap[16px] md:gap-3 sm:gap-1 mobile:gap-1 p-4"
          >
            <div>
              <h2 className="font-semibold  sm:text-2xl mobile:text-md">
                Speakers
              </h2>
            </div>
            <div>
              <p className="w-[242px] h-[42px]  sm:text-lg mobile:text-sm">
                Amazon wireless speakers
              </p>
            </div>
            <div>
              <span className="font-medium  sm:text-lg mobile:text-sm hover:text-myTheme cursor-pointer hover:underline">
                Shop Now
              </span>
            </div>
          </div>
        </div>

        {/* guhi */}
        <div className="relative flex bg-black w-[500px]   justify-center lg:hidden container mx-auto">
          <div>
            <img
              data-aos="fade-left"
              className="w-[300px]"
              src="https://i.imghippo.com/files/Jlrz2781XRA.png"
              alt=""
            />
          </div>
          <div
            data-aos="fade-right"
            className="text-white absolute md:left-12 md:top-40 sm:left-5 left-6  top-48 sm:top-36 flex flex-col 2xl:gap-[16px] xl:gap-[16px] lg:gap[16px] md:gap-3 sm:gap-1 mobile:gap-1 p-4"
          >
            <div>
              <h2 className="font-semibold  sm:text-2xl mobile:text-md">
                Perfume
              </h2>
            </div>
            <div>
              <p className="w-[242px] h-[42px]  sm:text-lg mobile:text-sm">
                GUCCI INTENSE OUD EDP
              </p>
            </div>
            <div>
              <span className="font-medium  sm:text-lg mobile:text-sm hover:text-myTheme cursor-pointer hover:underline">
                Shop Now
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Arrivel;
