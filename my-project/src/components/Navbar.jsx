import logo from "../assets/logo/logo.svg";
import logomd from "../assets/logo/logomd.svg";
import { MdOutlineMenu } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { MdOutlineShoppingCart } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { useState } from "react";
import { FaLeaf, FaUserCircle } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import mypic from "/src/assets/profilepic/myphoto.jpg";
import { Link } from "react-router-dom";

// ../assets/logo/'
let Mylink = [
  { name: "Home", path: "/" },
  { name: "Contact", path: "/Contact" },
  { name: "About", path: "/About" },
  // { name: "Login" },
];
let logSing = false;
export default function MyNavbar() {
  const [menu, setMenu] = useState(false);
  return (
    <>
      <nav className=" flex   items-center  justify-evenly p-6  border-b-2 border-gray-100 relative bg-white">
        {/* logo */}
        <div className="imglogo center ">
        <Link to={'/'}>  <img
            className="w-32 xl:flex 2xl:flex lg:flex md:hidden sm:hidden mobile:hidden"
            src={logo}
            alt="logo"
          /></Link>
        <Link to={'/'}>  <img
            className="w-10 xl:hidden 2xl:hidden lg:hidden md:flex sm:flex mobile:flex"
            src={logomd}
            alt="logo"
          /></Link>
        </div>
        {/* searchbar */}
        <div className="  mobile:w-[200px] md:w-[250px] center lg:w-[250px]  h-[38px] gap-6">
          <div className="  sm:w-[400px]  w-[243px] h-[38px] flex gap-2 center bg-[#F5F5F5]">
            <div className="search   h-6 flex justify-center ">
              <input
                className="outline-none  w-[100%] bg-[#F5F5F5] placeholder:font-normal md:text-base text-xs text-gray-300"
                placeholder="What are looking for"
                type="search"
                name=""
                id=" searchinp"
              />
              <div>
                <button
                  onClick={(event) => {
                    console.log(document.getElementsByClassName("search"));
                  }}
                >
                  <CiSearch className="text-2xl cursor-pointer font-semibold" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* links */}
        <div className="link sm:hidden md:hidden mobile:hidden lg:flex xl:flex 2xl:flex ">
          <ul className="flex  gap-5">
            {Mylink.map((value, index) => {
              return (
                <li
                  className="  hover:cursor-pointer"
                  key={index}
                >
                  <Link className="link-underline link-underline-black link-underline:hover" to={value.path}> {value.name}</Link>
                </li>
              );
            })}

            {logSing ? null : (
              <>
                <li className=" hover:cursor-pointer">
                  <Link className="link-underline link-underline-black link-underline:hover" to={"/SiginUp"}>SignUp</Link>
                </li>
                <li className=" hover:cursor-pointer ">
                  <Link className="link-underline link-underline-black link-underline:hover" to={"/Login"}>Login</Link>
                </li>
              </>
            )}
          </ul>
        </div>
        <div className="flex justify-center items-center list-none gap-1 mobile:text-xs sm:text-xs">
          {" "}
          {logSing === true ? (
            <>
              <li className="hover:text-myTheme 2xl:text-2xl xl:text-2xl lg:text-2xl md:text-xl sm:text-sm mobile:text-smhover:cursor-pointer">
                <CiHeart />
              </li>
              <li className="hover:text-myTheme 2xl:text-2xl xl:text-2xl lg:text-2xl md:text-xl sm:text-sm mobile:text-sm hover:cursor-pointer">
                <MdOutlineShoppingCart />
              </li>

              <li className="w-[30px] h-[30px] rounded-full overflow-hidden">
                <Link to="/profile">
                  <img src={mypic} alt="" />
                </Link>
              </li>
            </>
          ) : (
            <>
              <li className="text-myTheme text-2xl hover:cursor-pointer">
                <Link to={"/profile"}>
                  <FaUserCircle />
                </Link>
              </li>
            </>
          )}
        </div>

        {/* sm screen */}

        {menu ? (
          <div className="link top-[70px] bg-white w-[100%] z-10   lg:hidden xl:hidden 2xl:hidden absolute">
            <ul className="flex pl-8 flex-col gap-5">
              {Mylink.map((value, index) => {
                return (
                  <li
                    className=" hover:cursor-pointer"
                    key={index}
                  >
                    <Link className="link-underline link-underline-black link-underline:hover"
                      onClick={() => {
                        setMenu(false);
                      }}
                      to={value.path}
                    >
                      {" "}
                      {value.name}
                    </Link>
                  </li>
                );
              })}

              {logSing === true ? (
                <>
                  <li className=" hover:cursor-pointer">
                    <Link className="link-underline link-underline-black link-underline:hover" to={"/SiginUp"}>SignUp</Link>
                  </li>
                  {/* <li className="hover:text-myTheme text-2xl hover:cursor-pointer">
                  <CiHeart />
                </li>
                <li className="hover:text-myTheme text-2xl hover:cursor-pointer">
                  <MdOutlineShoppingCart />
                </li> */}

                  {/* <li className="w-[30px] h-[35px] rounded-full overflow-hidden">
                  <img src={mypic} alt="" />
                </li> */}
                </>
              ) : (
                <>
                  <li className=" hover:cursor-pointer">
                    <Link className="link-underline link-underline-black link-underline:hover" to={"/Login"}>Login</Link>
                  </li>
                  {/* <li className="hover:text-myTheme text-2xl hover:cursor-pointer">
                  <FaUserCircle />
                </li> */}
                </>
              )}
            </ul>
          </div>
        ) : null}

        <div className="menu center sm:flex md:flex mobile:flex lg:hidden xl:hidden 2xl:hidden">
          <button
            onClick={() => {
              setMenu(!menu);
            }}
          >
            {menu ? <IoMdClose /> : <MdOutlineMenu />}
          </button>
        </div>
      </nav>
    </>
  );
}
