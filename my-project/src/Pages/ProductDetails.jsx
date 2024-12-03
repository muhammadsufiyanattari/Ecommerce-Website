import axios from "axios";
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import ReactStars from "react-stars";
import useSWR from "swr";
import MyCountBox from "../components/MyCountBox";
import CardListSlider from "../components/Slider";
import { GoHeart } from "react-icons/go";
import { TbTruckDelivery } from "react-icons/tb";
import IconReturn from "../assets/details/Icon-return.png";
import { IoShieldCheckmark } from "react-icons/io5";
import { AddToCard } from "../components/AddToCard";
import { TbShieldX } from "react-icons/tb";
import Categary from "../components/Categary";

function ProductDetails() {
  const params = useParams();
  const { data, error, isLoading } = useSWR(
    `https://dummyjson.com/products/${params.id}`,
    axios
  );
  console.log("products data", data?.data);
  let product = data?.data;
  const [selectImg, setSelectImg] = useState(product?.image);
  let discountPrice = Math.ceil(
    product?.price - product?.discountPercentage * (product?.price / 100)
  ).toFixed(2);
  const [count, setCount] = useState(1);

  return (
    <>
      {isLoading ? (
        <div className="font-extrabold text-3xl h-[100vh] flex justify-center items-center cursor-none">
          Loading....
        </div>
      ) : null}
      {error ? (
        <div className="font-extrabold text-3xl h-[100vh] flex justify-center items-center cursor-none">
          Not Found Product Details
        </div>
      ) : (
        <div className="main  my-16 flex flex-col justify-center  ">
          <div className="flex justify-center my-5 items-start">
            <div className="w-full max-w-6xl  text-gray-400 text-sm mb-5">
              <Link to={"/"}>Home</Link> /{" "}
              <span className="text-gray-200 hover:text-gray-400">
                <Link to={"/AllProduct"}>Card</Link>{" "}
              </span>
              <span className="text-black cursor-none">
                {" "}
                <span className="text-gray-400 "> /</span> {product?.category}
              </span>
            </div>
          </div>

          <div className="w-[] gap-7  2xl:flex-row xl:flex-row lg:flex-row flex md:flex-col sm:flex-col mobile:flex-col  justify-center items-center 2xl:h-[600px] xl:h-[600px] lg:h-[600px] md:h-auto sm:h-auto mobile:h-auto  bg-fuchsia">
            {/* Product Images Start */}

            <div className="bg- flex  gap-6  md:w-[50%] h-auto">
              {product?.images.length === 1 ? null : (
                <div className="bg-red-  w-[170px] h-[600px] flex-col flex gap-3 justify-start items-center ">
                  {product?.images.map((image, i) => {
                    return (
                      <img
                        key={i}
                        className="w-[121px] h-[114px] shadow-2xl cursor-pointer bg-[#F5F5F5]"
                        src={image}
                        alt=""
                        onMouseOver={() => setSelectImg(image)}
                      />
                    );
                  })}
                </div>
              )}
              <div className="flex justify-center  shadow-2xl  items-center bg-[#F5F5F5] w-[500px] h-[600px]">
                {selectImg ? (
                  <img src={selectImg} alt="" />
                ) : (
                  <img
                    className="w-[px] h-[315px] "
                    src={product?.images[0]}
                    alt=""
                  />
                )}
              </div>
            </div>
            {/* Product Images End */}

            {/* COMPLETE DETAILS Start */}

            <div className=" flex flex-col  gap-6 pl-3 w-[500px]  h-[600px] ">
              <div>
                <h1 className="font-semibold text-2xl text-black ">
                  {product?.title}
                </h1>
              </div>
              <div className="star-img  h-[21px] flex items-center gap-3">
                <span>
                  {
                    <ReactStars
                      count={5}
                      value={product?.rating ? product.rating : 3}
                      // onChange={ratingChanged}
                      size={24}
                      edit={false}
                      color2={"#ffd700"}
                    />
                  }
                </span>
                <span className="font-normal text-sm text-gray-400">
                  {" "}
                  ({product?.reviews.length} {}Reviews)
                </span>
                <span className="text-gray-400">|</span>
                <span className=" font-normal text-sm text-[#00FF66]">
                  {" "}
                  Stock: {product?.stock}
                </span>
              </div>
              <div className="price font-normal text-2xl">
                ${discountPrice * count}
                {}
                {} PKR {Math.floor(discountPrice * count * 278.9)}{" "}
              </div>
              <div className="border-b-gray-400 border-b-2 pb-6">
                <p className=" font-normal text-sm text-black">
                  {product?.description}
                </p>
              </div>
              <div className="minus-plus-btn-buy-btn-heart    flex gap-5 items-center">
                <div className=" countbtn w-[159px]  flex  border-2 rounded">
                  <button
                    onClick={() => setCount(count < 2 ? 1 : count - 1)}
                    className="w-10 h-11 bg-white  active:bg-slate-200 rounded  text-2xl"
                  >
                    -
                  </button>
                  <div className="w-20 h-11  border-x-2 flex justify-center items-center ">
                    {" "}
                    {count}
                  </div>{" "}
                  <button
                    onClick={() =>
                      setCount(
                        count < product?.minimumOrderQuantity
                          ? count + 1
                          : product?.minimumOrderQuantity
                      )
                    }
                    className="w-10 h-11 bg-myTheme active:bg-red-800 text-white rounded  text-2xl"
                  >
                    +
                  </button>
                </div>
                <div>
                  <button className="w-[165px] h-11 bg-myTheme text-white rounded active:bg-red-800 ">
                    Buy Now
                  </button>
                </div>
                <button className="border-2 active:bg-myTheme active:text-white w-10 h-10 flex items-center justify-center rounded text-2xl">
                  <GoHeart className="" />
                </button>
              </div>
              <div className="delvery flex flex-col w-[399px] h-[180px]  justify-around  border-2 rounded">
                <div className="flex pl-3 gap-4 border-b-2 pb-4">
                  <div className="w-10 h-10">
                    <TbTruckDelivery className="text-5xl" />
                  </div>
                  <div className="">
                    <h1 className="font-medium text-base">
                      Shipping Information
                    </h1>
                    <p className="font-normal text-xs">
                      {product?.shippingInformation}
                    </p>
                  </div>
                </div>
                <div className="flex pl-3 gap-4">
                  <div>
                    <img className="w-10 h-10" src={IconReturn} alt="" />
                  </div>
                  <div>
                    <h1 className="font-medium text-base">Return Policy</h1>
                    <p className="font-normal text-xs">
                      {product?.returnPolicy}
                    </p>
                  </div>
                </div>
              </div>
              <div></div>
              <div className="flex justify-start items-center pl-3 gap-4 rounded border-2 w-[399px] h-[x] mb-2 p-1">
                <div className="w-10 h-10">
                  {product?.warrantyInformation == "No warranty" ? (
                    <TbShieldX className="text-3xl" />
                  ) : (
                    <IoShieldCheckmark className="text-3xl" />
                  )}
                </div>
                <div>
                  <p className="font-medium text-base">
                    {product?.warrantyInformation}
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* COMPLETE DETAILS End */}
          {/* <div className="flex justify-center items-start my-3">
          {" "}
          <Link
            className="bg-myTheme active:bg-red-700 py-3 px-8 rounded text-white"
            to={"/"}
          >
            Go To Home
          </Link>
        </div> */}

          <div className=" flex justify-start flex-col 2xl:ml-10 xl:ml-10 lg:ml-10 md:ml-0 sm:ml-0 mobile:ml-0 my-16  ">
            <MyCountBox name={""} days={"Related Item"} />
            <Categary category={product?.category} />
            <div className="flex">
              {/* <AddToCard
                    
                    id={product?.id}
                    className="bg-myTheme"
                    discount={`${Math.round(product?.discountPercentage)}%`}
                    productName={product?.title}
                    delPrice={`$${product?.price.toFixed(2)}`}
                    newPrice={`$${discountPrice}`}
                    image={product?.thumbnail}
                    rating={product?.rating}
                    
                    
                    /> */}
            </div>
          </div>
        </div>
      )}

      <div className="flex"></div>
    </>
  );
}

export default ProductDetails;
