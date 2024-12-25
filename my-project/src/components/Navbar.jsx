import logo from "../assets/logo/logo.svg";
import logomd from "../assets/logo/logomd.svg";
import mdDarkLogo from "../assets/logo/mdDarkLogo.svg";
import { FaBookReader } from "react-icons/fa";

import logoDark from "../assets/logo/logoDrak.svg";
import { MdOutlineMenu } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { MdOutlineShoppingCart } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { useState } from "react";
import { FaLeaf, FaUserCircle } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import mypic from "/src/assets/profilepic/myphoto.jpg";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleDarkMode } from "../store/darkModeSlice";
import { IoSunny } from "react-icons/io5";
import { IoMoon } from "react-icons/io5";
import { RiContactsFill } from "react-icons/ri";
import { FaHome } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import { useNavigate } from "react-router";
AOS.init({


  duration: 1000, // values from 0 to 3000, with step 50ms

});

// ../assets/logo/'
let Mylink = [
  { name: "Home", path: "/" },
  { name: "Contact", path: "/Contact" },
  { name: "About", path: "/About" },
  // { name: "Login" },
];
let MylinkSm = [
  { name: "Home", path: "/", icon: <FaHome /> },
  { name: "Contact", path: "/Contact", icon: <RiContactsFill /> },
  { name: "About", path: "/About", icon: <FaBookReader /> },
  // { name: "Login" },
];
let logSing = false;

export default function MyNavbar() {
  const [menu, setMenu] = useState(false);
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.darkMode.darkMode);
  const navigate = useNavigate();

  let submitHandler = (e) => {
    e.preventDefault();
    let searchTerm = e.target.children[0].value;
    // console.log(e.target.children[0].value);
    if (!searchTerm) return;
    navigate(`/search?qurey=${searchTerm}`);
    searchTerm = e.target.children[0].value = "";
  };

  return (
    <>
      <nav
        className={` flex   items-center  justify-evenly p-6  border-b-2 border-gray-100  transition-colors duration-500 relative ${
          darkMode ? "bg-neutral-900" : ""
        } bg- `}
      >
        {/* logo */}
        <div className="imglogo center ">
          <Link to={"/"}>
            {" "}
            <img
              className="w-32 xl:flex 2xl:flex lg:flex md:hidden sm:hidden mobile:hidden"
              src={darkMode ? logoDark : logo}
              alt="logo"
            />
          </Link>
          <Link to={"/"}>
            {" "}
            <img
              className="w-10 xl:hidden 2xl:hidden lg:hidden md:flex sm:flex mobile:flex"
              src={darkMode ? mdDarkLogo : logomd}
              alt="logo"
            />
          </Link>
        </div>
        {/* searchbar */}
        <div className="  mobile:w-[200px]  md:w-[250px] center lg:w-[250px]  h-[38px] gap-6">
          <div
            className={`  sm:w-[400px]   w-[150px] h-[38px] flex gap-2 center   rounded bg-[#F5F5F5] ${
              darkMode ? "bg-black" : ""
            }`}
          >
            <form
              onSubmit={submitHandler}
              className="search   h-6  w-[150px]  flex justify-center  "
            >
              <input
                className={`outline-none   w-[120px]  bg-[#F5F5F5] placeholder:font-normal sm:text-sm  sm:w-[175px] text-[10px] text-gray-300 ${
                  darkMode ? "bg-black" : ""
                } ${darkMode ? "placeholder:text-white" : ""}  ${
                  darkMode ? "text-white" : ""
                }`}
                placeholder="What are looking for"
                type="search"
                name="search"
                id=" searchinp"
              />
              <div>
                <button  type="submit">
                  <CiSearch
                    className={`${
                      darkMode ? "text-white" : ""
                    } sm:text-2xl text-xl  cursor-pointer  font-semibold`}
                  />
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* links */}
        <div className="link sm:hidden md:hidden mobile:hidden lg:flex xl:flex 2xl:flex ">
          <ul className="flex  gap-5">
            {Mylink.map((value, index) => {
              return (
                <li
                  className={` ${
                    darkMode
                      ? "text-white link-dark-underline link-dark-underline-black"
                      : ""
                  }  hover:cursor-pointer`}
                  key={index}
                >
                  <Link
                    className="link-underline link-underline-black link-underline:hover"
                    to={value.path}
                  >
                    {" "}
                    {value.name}
                  </Link>
                </li>
              );
            })}

            {logSing ? null : (
              <>
                <li className=" hover:cursor-pointer">
                  <Link
                    className={`link-underline link-underline-black link-underline:hover ${
                      darkMode
                        ? "text-white link-dark-underline link-dark-underline-black"
                        : ""
                    } `}
                    to={"/SiginUp"}
                  >
                    SignUp
                  </Link>
                </li>
                <li className=" hover:cursor-pointer ">
                  <Link
                    className={`link-underline link-underline-black link-underline:hover ${
                      darkMode
                        ? "text-white link-dark-underline link-dark-underline-black"
                        : ""
                    } `}
                    to={"/Login"}
                  >
                    Login
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
        <div className="flex justify-center items-center list-none gap-2 mobile:text-xs sm:text-xs">
          {" "}
          <li className="text-center  flex">
            <button onClick={() => dispatch(toggleDarkMode())}>
              {darkMode ? (
                <IoSunny className=" sm:text-lg text-xs text-white " />
              ) : (
                <IoMoon className="sm:text-lg text-xs text-black " />
              )}
            </button>
          </li>
          {logSing === true ? (
            <>
              <li className="hover:text-myTheme  hidden sm:flex  2xl:text-2xl xl:text-2xl lg:text-2xl md:text-xl sm:text-sm mobile:text-sm hover:cursor-pointer">
                <CiHeart
                  className={`${
                    darkMode
                      ? "bg-black text-white rounded-full font-extrabold text-2xl p-1"
                      : "text-black bg-transparent "
                  } `}
                />
              </li>
              <li className="hover:text-myTheme hidden  sm:flex 2xl:text-2xl xl:text-2xl lg:text-2xl md:text-xl sm:text-sm mobile:text-sm hover:cursor-pointer">
                <Link to={"/addCard"}>
                  {" "}
                  <MdOutlineShoppingCart
                    className={`${
                      darkMode
                        ? "bg-black text-white text-2xl rounded-full font-bold p-1"
                        : "text-black bg-transparent "
                    } `}
                  />
                </Link>
              </li>

              <li className="  overflow-hidden sm:flex hidden">
                <Link to="/profile">
                  <img className="sm:w-[30px] sm:h-[30px] w-5 h-5  rounded-full" src={mypic} alt="" />
                </Link>
              </li>
            </>
          ) : (
            <>
              <li className="text-myTheme sm:text-2xl text-xl hover:cursor-pointer">
                <Link to={"/profile"}>
                  <FaUserCircle />
                </Link>
              </li>
            </>
          )}
        </div>

        {/* sm screen */}

        {menu ? (
          <div
            data-aos="fade-right"
            className={`${
              darkMode ? "bg-transparent backdrop-blur-md text-white" : " bg-white  text-black"
            } link top-[70px]  w-[100%] z-10    lg:hidden xl:hidden 2xl:hidden absolute`}
          >
            <ul className="flex pl-8 flex-col gap-5">
              {MylinkSm.map((value, index) => {
                return (
                  <li className=" hover:cursor-pointer" key={index}>
                    <Link
                      className="link-underline link-underline-black link-underline:hover"
                      onClick={() => {
                        setMenu(false);
                      }}
                      to={value.path}
                    >
                      {" "}
                      <div className="flex gap-2 justify-start hover:text-myTheme items-center">
                        <div>{value.icon}</div>
                        <div>{value.name}</div>
                      </div>{" "}
                       
                    </Link>
                  </li>
                );
              })}

              {logSing === true ? (
                <>
                  {/* <li className=" hover:cursor-pointer">
                    <Link
                      className="link-underline link-underline-black link-underline:hover"
                      to={"/SiginUp"}
                    >
                      SignUp
                    </Link>
                  </li> */}
                  <div className="flex gap-4 flex-col">
                    <li className="hover:text-myTheme  flex items-center gap-2 sm:hidden    hover:cursor-pointer">
                      <CiHeart
                        className={`${
                          darkMode
                            ? " text-white rounded-full font-bold text-xl "
                            : "text-black bg-transparent "
                        } `}
                      />
                      Like
                    </li>
                    <li className="hover:text-myTheme flex items-center gap-2  sm:hidden   hover:cursor-pointer">
                      <Link to={"/addCard"}>
                        {" "}
                        <div className="flex gap-2">
                        <div>
                        <MdOutlineShoppingCart
                          className={`${
                            darkMode
                              ? " text-white text-xl rounded-full font-bold "
                              : "text-black bg-transparent "
                          } `}
                        />
                        </div>
                        <div> Add Cart</div>
                        </div>
                      </Link>
                     
                    </li>
                  

                  {/* <li className="hover:text-myTheme text-2xl hover:cursor-pointer">
                  <CiHeart />
                </li>
                <li className="hover:text-myTheme text-2xl hover:cursor-pointer">
                  <MdOutlineShoppingCart />
                </li> */}

                  <li className=" overflow-hidden flex gap-2 justify-start">
                  <img className="w-[30px] h-[30px] rounded-full  flex justify-center items-center " src={mypic} alt="" />
                  <div>Sufiyan</div>
                </li>
                </div>
                </>
              ) : (
                <>
                  <li className=" hover:cursor-pointer">
                    <Link
                      className="link-underline link-underline-black link-underline:hover"
                      to={"/SiginUp"}
                    >
                      SignUp
                    </Link>
                  </li>
                  <li className=" hover:cursor-pointer">
                    <Link
                      className="link-underline link-underline-black link-underline:hover"
                      to={"/Login"}
                    >
                      Login
                    </Link>
                  </li>
                  {/* <li className="hover:text-myTheme text-2xl hover:cursor-pointer">
                  <FaUserCircle />
                </li> */}
                </>
              )}
            </ul>
          </div>
        ) : null}

        <div className="menu center  sm:flex md:flex mobile:flex lg:hidden xl:hidden 2xl:hidden">
          <button
            onClick={() => {
              setMenu(!menu);
            }}
          >
            {menu ? (
              <IoMdClose
                className={`${darkMode ? " text-white" : "text-black"}`}
              />
            ) : (
              <MdOutlineMenu
                className={`${darkMode ? " text-white" : "text-black"}`}
              />
            )}
          </button>
        </div>
      </nav>
    </>
  );
}
