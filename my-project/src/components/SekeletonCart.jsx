import { useSelector } from "react-redux";

export function SekeletonCart({
  discount,
  productName,
  delPrice,
  newPrice,
  starRank,
}) {
  const darkMode = useSelector((state) => state.darkMode.darkMode);

  return (
    //     <>

    //       <div className="main     w-[170px] h-[285px] m-8 ">
    //         <div className="img w-[170px] h-[150px] rounded-sm bg-slate-300 animate-pulse relative center ">
    //           <button
    //             className=" w-[35px] h-[16px] text-xs bg-slate-400  animate-pulse  rounded text-white absolute left-1 right-4 bottom-1 top-2 ;
    // "
    //           >
    //             {/* {discount} */}
    //           </button><div></div>
    //           {/* <img className=" w-[150px] h-[120px] m-10 hover:scale-125" src={game} alt="" /> */}
    //         </div>
    //         <div className="myp w-[170px] h-[120px]  gap-2 my-3">
    //           <h2 className="w-[201] h-6 text-base bg-slate-300 rounded-sm animate-pulse font-medium hover:text-myTheme">
    //             {/* {productName} */}
    //             </h2>
    //           <p className="flex gap-4 my-1 w-[100px] h-6 bg-slate-300 rounded-sm animate-pulse  text-base font-medium text-myTheme">
    //             {/* <ins className="no-underline"> {newPrice}</ins> {"  "} */}
    //             {/* <s className="text-slate-400 "> {delPrice}</s> */}
    //           </p>
    //           <div className="star-img flex gap-2 w-20 h-5 bg-slate-300 rounded-sm animate-pulse ">
    //             {/* <img src={star} alt="" /> */}
    //             {/* <span>{starRank}</span> */}
    //           </div>
    //         </div>
    //       </div>

    //     </>

    <>
      {/* <Link id={id} to={`/productDetail/${id}`}> */}
      <div
        className={`   main group bg-red- drop-shadow-lg shadow-black  w-[150px] h-[  sm:w-[270px] sm:h-[370px] my-4 rounded mobile:m-auto transition-all duration-300 flex flex-col gap-1 flex-wrap`}
      >
        <div
          className={` img sm:w-[270px]  sm:h-[250px]  w-[150px] h-[150px] rounded ${
            darkMode ? "bg-zinc-500" : "bg-slate-100"
          }  animate-pulse duration-75 flex flex-col relative center `}
        >
          <button
            className={` sm:w-[55px] sm:h-[26px] sm:text-base w-[35px] h-[16px]  ${
              darkMode ? "bg-zinc-500" : "bg-slate-100"
            } animate-pulse  text-xs  rounded text-white absolute  sm:left-3 sm:right-4 sm:bottom-1 sm:top-3 left-1 right-4 bottom-1 top-2 ;`}
          ></button>
          <div className="flex flex-col "></div>
          <div className=" sm:w-[172px] w-[120px] h-auto    sm:h-[155px] m-auto  "></div>
          {/* <div
        
          className={`  "2xl:bg-white xl:bg-white lg:bg-white md:bg-white group-hover:bg-black"
     rounded- bg-slate-400 animate-pulse           h-[40px] text-white text-xs sm:text-lg w-[100%] flex   items-end justify-center p-2 rounded-b`}
        >
         
        </div> */}
        </div>
        <div className={` myp  sm:w-auto sm:h-auto w-[150px]  h-auto  gap-0 `}>
          <h2
            className={`
  rounded ${darkMode ? "bg-zinc-500" : "bg-slate-300"} animate-pulse
           w-auto h-[30px] sm:text-sm font-medium transition-all duration-300   overflow-hidden text-[10px] bg-yellow   `}
          ></h2>
          <p
            className={`${
              darkMode ? "bg-zinc-500" : "bg-slate-300"
            } flex gap-4 my-2 rounded  animate-pulse w-[100px] h-6 sm:text-base text-[12px]  font-medium text-myTheme`}
          ></p>
          <div
            className={`${
              darkMode ? "bg-zinc-500" : "bg-slate-300"
            } star-img flex gap-2 w-20 h-5  rounded animate-pulse `}
          >
            {/* <img src={star} alt="" /> */}
            {/* <span>{starRank}</span> */}
          </div>
        </div>
      </div>
      {/* </Link> */}
    </>
  );
}
