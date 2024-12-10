import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import toast from 'react-hot-toast';
import { useSelector } from 'react-redux';
// const darkMode = useSelector((state) => state.darkMode.darkMode);

function AddNewCard() {
  const submitHandler= async(event)=>{
    try {
      event.preventDefault()
    const formValues={}
    const formdata=new FormData(event.target)
    for( const pairs of formdata.entries()){
      formValues[pairs[0]]=pairs[1];
    }
    console.log(formValues);
    const response= await axios.post('https://dummyjson.com/products/add')
    // price:"productname"
    {
      
      prductName:"productname"
    }
    console.log('response',response);
    toast.success("Your product add has been successful")
    
    } catch (error) {
      toast.error(error.message)

      console.log("error :",error.message||"Unknown Error");
      
    }
  }
  return (
    // <div>AddNewCard</div>
    <>
    
  {/* This form uses the fabform.io form backend service */}
  {/* <div className="my-6">
    <div className="grid sm:grid-cols-2 items-center gap-16 p-8 mx-auto max-w-4xl bg-white shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-md text-[#333] font-[sans-serif]">
      <div>
        <h1 className="text-3xl font-extrabold">Let's Talk</h1>
        <p className="text-sm text-gray-400 mt-3">
          Have some big idea or brand to develop and need help? Then reach out
          we'd love to hear about your project and provide help.
        </p>
        <div className="mt-12">
          <h2 className="text-lg font-extrabold">Email</h2>
          <ul className="mt-3">
            <li className="flex items-center"> */}
              {/* <div className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20px"
                  height="20px"
                  fill="#007bff"
                  viewBox="0 0 479.058 479.058"
                >
                  <path
                    d="M434.146 59.882H44.912C20.146 59.882 0 80.028 0 104.794v269.47c0 24.766 20.146 44.912 44.912 44.912h389.234c24.766 0 44.912-20.146 44.912-44.912v-269.47c0-24.766-20.146-44.912-44.912-44.912zm0 29.941c2.034 0 3.969.422 5.738 1.159L239.529 264.631 39.173 90.982a14.902 14.902 0 0 1 5.738-1.159zm0 299.411H44.912c-8.26 0-14.971-6.71-14.971-14.971V122.615l199.778 173.141c2.822 2.441 6.316 3.655 9.81 3.655s6.988-1.213 9.81-3.655l199.778-173.141v251.649c-.001 8.26-6.711 14.97-14.971 14.97z"
                    data-original="#000000"
                  />
                </svg>
              </div> */}
{/*               
            </li>
          </ul>
        </div>
        <div className="mt-12">
          <h2 className="text-lg font-extrabold">Socials</h2>
          <ul className="flex mt-3 space-x-4">
            <li className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
              <a href="javascript:void(0)">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20px"
                  height="20px"
                  fill="#007bff"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M6.812 13.937H9.33v9.312c0 .414.335.75.75.75l4.007.001a.75.75 0 0 0 .75-.75v-9.312h2.387a.75.75 0 0 0 .744-.657l.498-4a.75.75 0 0 0-.744-.843h-2.885c.113-2.471-.435-3.202 1.172-3.202 1.088-.13 2.804.421 2.804-.75V.909a.75.75 0 0 0-.648-.743A26.926 26.926 0 0 0 15.071 0c-7.01 0-5.567 7.772-5.74 8.437H6.812a.75.75 0 0 0-.75.75v4c0 .414.336.75.75.75zm.75-3.999h2.518a.75.75 0 0 0 .75-.75V6.037c0-2.883 1.545-4.536 4.24-4.536.878 0 1.686.043 2.242.087v2.149c-.402.205-3.976-.884-3.976 2.697v2.755c0 .414.336.75.75.75h2.786l-.312 2.5h-2.474a.75.75 0 0 0-.75.75V22.5h-2.505v-9.312a.75.75 0 0 0-.75-.75H7.562z"
                    data-original="#000000"
                  />
                </svg>
              </a>
            </li>
            <li className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
              <a href="javascript:void(0)">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20px"
                  height="20px"
                  fill="#007bff"
                  viewBox="0 0 511 512"
                >
                  <path
                    d="M111.898 160.664H15.5c-8.285 0-15 6.719-15 15V497c0 8.285 6.715 15 15 15h96.398c8.286 0 15-6.715 15-15V175.664c0-8.281-6.714-15-15-15zM96.898 482H30.5V190.664h66.398zM63.703 0C28.852 0 .5 28.352.5 63.195c0 34.852 28.352 63.2 63.203 63.2 34.848 0 63.195-28.352 63.195-63.2C126.898 28.352 98.551 0 63.703 0zm0 96.395c-18.308 0-33.203-14.891-33.203-33.2C30.5 44.891 45.395 30 63.703 30c18.305 0 33.195 14.89 33.195 33.195 0 18.309-14.89 33.2-33.195 33.2zm289.207 62.148c-22.8 0-45.273 5.496-65.398 15.777-.684-7.652-7.11-13.656-14.942-13.656h-96.406c-8.281 0-15 6.719-15 15V497c0 8.285 6.719 15 15 15h96.406c8.285 0 15-6.715 15-15V320.266c0-22.735 18.5-41.23 41.235-41.23 22.734 0 41.226 18.495 41.226 41.23V497c0 8.285 6.719 15 15 15h96.403c8.285 0 15-6.715 15-15V302.066c0-79.14-64.383-143.523-143.524-143.523zM466.434 482h-66.399V320.266c0-39.278-31.953-71.23-71.226-71.23-39.282 0-71.239 31.952-71.239 71.23V482h-66.402V190.664h66.402v11.082c0 5.77 3.309 11.027 8.512 13.524a15.01 15.01 0 0 0 15.875-1.82c20.313-16.294 44.852-24.907 70.953-24.907 62.598 0 113.524 50.926 113.524 113.523zm0 0"
                    data-original="#000000"
                  />
                </svg>
              </a>
            </li>
            <li className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
              <a href="javascript:void(0)">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20px"
                  height="20px"
                  fill="#007bff"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 9.3a2.7 2.7 0 1 0 0 5.4 2.7 2.7 0 0 0 0-5.4Zm0-1.8a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9Zm5.85-.225a1.125 1.125 0 1 1-2.25 0 1.125 1.125 0 0 1 2.25 0ZM12 4.8c-2.227 0-2.59.006-3.626.052-.706.034-1.18.128-1.618.299a2.59 2.59 0 0 0-.972.633 2.601 2.601 0 0 0-.634.972c-.17.44-.265.913-.298 1.618C4.805 9.367 4.8 9.714 4.8 12c0 2.227.006 2.59.052 3.626.034.705.128 1.18.298 1.617.153.392.333.674.632.972.303.303.585.484.972.633.445.172.918.267 1.62.3.993.047 1.34.052 3.626.052 2.227 0 2.59-.006 3.626-.052.704-.034 1.178-.128 1.617-.298.39-.152.674-.333.972-.632.304-.303.485-.585.634-.972.171-.444.266-.918.299-1.62.047-.993.052-1.34.052-3.626 0-2.227-.006-2.59-.052-3.626-.034-.704-.128-1.18-.299-1.618a2.619 2.619 0 0 0-.633-.972 2.595 2.595 0 0 0-.972-.634c-.44-.17-.914-.265-1.618-.298-.993-.047-1.34-.052-3.626-.052ZM12 3c2.445 0 2.75.009 3.71.054.958.045 1.61.195 2.185.419A4.388 4.388 0 0 1 19.49 4.51c.457.45.812.994 1.038 1.595.222.573.373 1.227.418 2.185.042.96.054 1.265.054 3.71 0 2.445-.009 2.75-.054 3.71-.045.958-.196 1.61-.419 2.185a4.395 4.395 0 0 1-1.037 1.595 4.44 4.44 0 0 1-1.595 1.038c-.573.222-1.227.373-2.185.418-.96.042-1.265.054-3.71.054-2.445 0-2.75-.009-3.71-.054-.958-.045-1.61-.196-2.185-.419A4.402 4.402 0 0 1 4.51 19.49a4.414 4.414 0 0 1-1.037-1.595c-.224-.573-.374-1.227-.419-2.185C3.012 14.75 3 14.445 3 12c0-2.445.009-2.75.054-3.71s.195-1.61.419-2.185A4.392 4.392 0 0 1 4.51 4.51c.45-.458.994-.812 1.595-1.037.574-.224 1.226-.374 2.185-.419C9.25 3.012 9.555 3 12 3Z"></path>
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <form className="ml-auo space-y-4">
        <input
          type="text"
          placeholder="Product Name"
          className="w-full rounded-md py-2.5 px-4 border text-sm outline-myTheme"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full rounded-md py-2.5 px-4 border text-sm outline-myTheme"
        />
        <input
          type="text"
          placeholder="Subject"
          className="w-full rounded-md py-2.5 px-4 border text-sm outline-myTheme"
        />
        <textarea
          placeholder="Message"
          rows={6}
          className="w-full rounded-md px-4 border text-sm pt-2.5 outline-myTheme"
          defaultValue={""}
        />
        <button
          type="button"
          className="text-black bg-black active:bg-myTheme font-semibold rounded-md text-sm px-4 py-2.5 w-full"
        >
          Send
        </button>
      </form>
    </div>
  </div> */}















<>
  <section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-2xl my-7 mt-20">
    <h1 className="text-xl font-bold text-black capitalize ">
      Add New Product
    </h1>
    <form onSubmit={submitHandler}>
      <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
        <div>
          <label className="text-black dark:text-gray-200" htmlFor="productname">
            Product Name
          </label>
          <input
            id="productname"
            name="productname"
            type="text"
            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-myTheme focus:border-myTheme  focus:outline-none focus:ring-myTheme"
          />
        </div>
        {/* <div>
          <label
            className="text-black dark:text-gray-200"
            htmlFor="productCategary"
          >
            Product Categary
          </label>
          <input
            id="productCategary"
            name="productCategary"
            type="productCategary"
            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-myTheme focus:border-myTheme  focus:outline-none focus:ring-myTheme"
          />
        </div> */}
        <div>
          <label className="text-black dark:text-gray-200" htmlFor="price">
            Price
          </label>
          <input
          name='price'
            id="price"
            type="number"
            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-myTheme focus:border-myTheme  focus:outline-none focus:ring-myTheme"
          />
        </div>
        <div>
          <label
            className="text-black dark:text-gray-200"
            htmlFor="stock"
          >
            Stock
          </label>
          <input
            id="stock"
            name='stock'
            type="number"
            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-myTheme focus:border-myTheme  focus:outline-none focus:ring-myTheme"
          />
        </div>
        <div>
          <label
            className="text-black dark:text-gray-200"
            htmlFor="passwordConfirmation"
          >
            Color
          </label>
          <input
            id="color"
            type="color"
            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-myTheme focus:border-myTheme  focus:outline-none focus:ring-myTheme"
          />
        </div>
        <div>
          <label
            className="text-black dark:text-gray-200"
            htmlFor="passwordConfirmation"
          >
            Product Categary
          </label>
          <select name='productCategary' className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800  focus:border-myTheme dark:focus:border-myTheme focus:outline-none focus:ring-myTheme">
            <option>Surabaya</option>
            <option>Jakarta</option>
            <option>Tangerang</option>
            <option>Bandung</option>
          </select>
        </div>
        <div>
          <label
            className="text-black dark:text-gray-200"
            htmlFor="passwordConfirmation"
          >
            Range
          </label>
          <input
            id="range"
            type="range"
            className="block w-full py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
          />
        </div>
        <div>
          <label
            className="text-black dark:text-gray-200"
            htmlFor="passwordConfirmation"
          >
            Date
          </label>
          <input
            id="date"
            type="date"
            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-myTheme focus:border-myTheme dark:focus:border-myTheme focus:outline-none focus:ring-myTheme"
          />
        </div>
        <div>
          <label
            className="text-black dark:text-gray-200"
            htmlFor="passwordConfirmation"
          >
             Discription
          </label>
          <textarea
            id="discription"
            type="textarea"
            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md    focus:border-myTheme dark:focus:border-myTheme focus:outline-none focus:ring-myTheme"
            defaultValue={""}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-black">Product Image</label>
          <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-black border-dashed  rounded-md">
            <div className="space-y-1 text-center">
              <svg
                className="mx-auto h-12 w-12 text-black"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 48 48"
                aria-hidden="true"
              >
                <path
                  d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <div className="flex text-sm text-gray-600">
                <label
                  htmlFor="file-upload"
                  className="relative cursor-pointer bg-white rounded-md font-medium text-myTheme  focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                >
                  <span className="">Upload a file</span>
                  <input
                    id="file-upload"
                    name="file-upload"
                    type="file"
                    className="sr-only"
                  />
                </label>
                <p className="pl-1 text-black">or drag and drop</p>
              </div>
              <p className="text-xs text-black">PNG, JPG, GIF up to 10MB</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-6 gap-2">
        <button className="px-12 py-3 w-auto leading-5 text-white transition-colors duration-200 transform bg-black rounded hover:bg-myTheme focus:outline-none ">
          Submit
        </button>
        <Link to={"/"} className="px-12 py-3 w-auto leading-5 text-white transition-colors duration-200 transform bg-black rounded hover:bg-myTheme focus:outline-none ">
          Cancel
        </Link>
      </div>
    </form>
  </section>
  {/* <section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800 mt-20">
    <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-black">
      Account settings
    </h2>
    <form>
      <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
        <div>
          <label
            className="text-gray-700 dark:text-gray-200"
            htmlFor="username"
          >
            Username
          </label>
          <input
            id="username"
            type="text"
            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
          />
        </div>
        <div>
          <label
            className="text-gray-700 dark:text-gray-200"
            htmlFor="emailAddress"
          >
            Email Address
          </label>
          <input
            id="emailAddress"
            type="email"
            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
          />
        </div>
        <div>
          <label
            className="text-gray-700 dark:text-gray-200"
            htmlFor="password"
          >
            Password
          </label>
          <input
            id="password"
            type="password"
            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
          />
        </div>
        <div>
          <label
            className="text-gray-700 dark:text-gray-200"
            htmlFor="passwordConfirmation"
          >
            Password Confirmation
          </label>
          <input
            id="passwordConfirmation"
            type="password"
            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
          />
        </div>
      </div>
      <div className="flex justify-center mt-6">
        <button className="px-6 py-2 leading-5 text-black transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
          Save
        </button>
      </div>
    </form>
  </section> */}
</>



    
    
    </>
  )
}

export default AddNewCard