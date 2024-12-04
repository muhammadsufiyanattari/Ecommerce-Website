import React from "react";
import location from "../assets/profilepic/location.jpg";
import { Link } from "react-router-dom";

function Contact() {
  const dataInputs=(event)=>{
    event.preventDefault()
 const formData =   new FormData(event.target)
 const userName=formData.get('userName')
 const email=formData.get('email')
 const message=formData.get('message')
console.log("userName :",userName,"Email:",email,"message",message);

  }
  return (
    <section className="text-black body-font relative ">
      <div className="container px-5 py-24 mx-auto flex  sm:flex-nowrap flex-wrap">
        <div className="lg:w-2/3 md:w-1/2   overflow-hidden sm:mr-10 p-10 flex flex-col items-center justify-start relative">
        
          <img className="w-[100%] my-3" src={location} alt="" />
         
        </div>
        <form onSubmit={dataInputs} className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
          <h2 className="text-black  text-3xl mb-1 2xl:font-extrabold xl:font-extrabold lg:font-extrabold md:font-bold sm:font-bold mobile:font-bold title-font">
            Feedback
          </h2>
          <p className="leading-relaxed mb-5 text-black">
            We Need For Your Feedback
          </p>
          <div className="relative mb-4">
            <label htmlFor="name" className="leading-7 text-sm text-black">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="userName"
              className="w-full bg-white  border border-gray-300  focus:border-black text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-black">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-white  border border-gray-300 focus:border-black   text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="message" className="leading-7 text-sm text-black">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full bg-white  border border-gray-300   h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              defaultValue={""}
            />
          </div>
          <button className="text-white bg-black border-0 py-2 px-6 focus:outline-none active:bg-myTheme  text-lg">
            Button
          </button>
          <p className="text-xs text-black mt-3">The Knowldge is Light</p>
        </form>
      </div>
      <div className="flex justify-center items-start my-3">
        <Link
          className="bg-myTheme active:bg-red-700 py-3 px-8 rounded text-white"
          to={"/"}
        >
          Go To Home
        </Link>
      </div>
    </section>
  );
}

export default Contact;
