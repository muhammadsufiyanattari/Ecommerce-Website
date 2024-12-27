import game from "../assets/images/game.png";
import star from "../assets/images/Five star.png";
import { Link } from "react-router-dom";
import ReactStars from "react-stars";
import { useSelector } from "react-redux";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init({
  duration: 1000, // values from 0 to 3000, with step 50ms
});
export function AddToCard({
  discount,
  productName,
  delPrice,
  newPrice,
  starRank,
  image,
  id,
  className,
  deleticon,
  hearticon,
  eyeicon,
  rating,
}) {
  const darkMode = useSelector((state) => state.darkMode.darkMode);

  return (
    <>
      <Link id={id} to={`/productDetail/${id}`}>
        <div
          data-aos="flip-left"
          className={`${
            darkMode ? "bg-neutral-900" : ""
          } main group bg-red- drop-shadow-lg shadow-black  w-[150px] h-[  sm:w-[270px] sm:h-[370px] my-4 rounded mobile:m-auto transition-all duration-300 `}
        >
          <div
            className={`${
              darkMode ? "bg-neutral-900" : ""
            } img sm:w-[270px]  sm:h-[250px]  w-[150px] h-[150px] bg-[#F5F5F5] flex flex-col relative center `}
          >
            <button
              className={` sm:w-[55px] sm:h-[26px] sm:text-base w-[35px] h-[16px]  text-xs ${className} rounded text-white absolute  sm:left-3 sm:right-4 sm:bottom-1 sm:top-3 left-1 right-4 bottom-1 top-2 ;`}
            >
              {discount}
            </button>
            <div className="flex flex-col">
              {hearticon ? (
                <div className="absolute top-2 left-[240px] text-base bg-white p-1 rounded-full">
                  {" "}
                  {hearticon}
                </div>
              ) : null}
              {deleticon ? (
                <div className="absolute top-2 left-[240px] text-base bg-white p-1 rounded-full">
                  {deleticon}
                </div>
              ) : null}
              {eyeicon ? (
                <div className="absolute top-9 left-[240px] text-base bg-white p-1 rounded-full">
                  {" "}
                  {eyeicon}
                </div>
              ) : null}
            </div>
            {image ? (
              <img
                className=" sm:w-[172px] w-[120px] h-auto    sm:h-[155px] m-auto  sm:group-hover:scale-150 group-hover:scale-110 transition-all duration-500"
                src={image}
                alt=""
              />
            ) : (
              <div className=" w-[172px] h-[155px]"></div>
            )}
            <Link
              to={"/addCard"}
              className={`${
                darkMode
                  ? "active:bg-myTheme bg-black transition-all duration-300 text-white  "
                  : "2xl:bg-white xl:bg-white lg:bg-white md:bg-white group-hover:bg-black"
              } sm:bg-black mobile:bg-black   h text-white text-xs sm:text-lg w-[100%] flex transition-all duration-500  items-end justify-center p-2 rounded-b`}
            >
              Add To Card
            </Link>
          </div>
          <div
            className={`${
              darkMode ? "bg-transparent" : "bg-white"
            } myp  sm:w-auto sm:h-auto w-[150px]  h-auto pl-1 gap-0 `}
          >
            <h2 
            title={productName}
              className={`${
                darkMode
                  ? "text-white   "
                  : ""
              } w-auto h-[30px] sm:text-sm sm:py-1 py-1  group-hover:text-myTheme font-medium transition-all duration-300   overflow-hidden text-[10px] bg-yellow`}
            >
              {productName}
            </h2>
            <p className="flex gap-4 my-2 w-[100px] h sm:text-base text-[12px]  font-medium text-myTheme">
              <ins className="no-underline"> {newPrice}</ins> {"  "}
              <s className="text-slate-400 "> {delPrice}</s>
            </p>
            <div className="star-img sm:block  hidden  bg-amber- ">
              <span className="">
                {
                  <ReactStars
                    count={5}
                    value={rating ? rating : 3}
                    // onChange={ratingChanged}
                    size={24}
                    edit={false}
                    color2={"#ffd700"}
                    // className={`sm:${size="24px"} ${size="12px"}`}
                  />
                }
              </span>
              <span>{}</span>
            </div>
            <div className="star-img sm:hidden block    bg-amber- ">
              <span className="">
                {
                  <ReactStars
                    count={5}
                    value={rating ? rating : 3}
                    // onChange={ratingChanged}
                    // size={"12px"}
                    edit={false}
                    color2={"#ffd700"}
                    // className={`sm:${size="24px"} ${size="12px"}`}
                  />
                }
              </span>
              <span>{}</span>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}
