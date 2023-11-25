import React from "react";
import Button from "./Button";
import { BsUpload } from "react-icons/bs";

const PlacementForm = () => {
  return (
    <div className=" flex flex-col justify-center items-center py-20">
      <div className="flex flex-col justify-center items-center w-full max-w-3xl shadow-lg bg-white px-5 py-16">
        <h3 className="text-primary font-bold text-[35px] mb-10  ">
          Job Placement Form
        </h3>
        <form className="w-full">
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-primary  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-first-name"
                type="text"
                placeholder="First Name"
              />
              {/* <p className="text-red-500 text-xs italic">
                Please fill out this field.
              </p> */}
            </div>
            <div className="w-full md:w-1/2 px-3">
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-last-name"
                type="text"
                placeholder="Last Name"
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                // id="grid-first-name"
                type="text"
                placeholder="Email Address"
              />
              {/* <p className="text-red-500 text-xs italic">
                Please fill out this field.
              </p> */}
            </div>
            <div className="w-full md:w-1/2 px-3">
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                // id="grid-last-name"
                type="text"
                placeholder="Phone Number"
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                // id="grid-password"
                type="text"
                placeholder="Address"
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 
                mb-3
                leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-city"
                type="text"
                placeholder="City"
              />
            </div>
            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <div className="relative">
                <select
                  className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded  
                mb-3
                  
                  leading-tight focus:outline-none focus:bg-white focus:border-gray-500 text-gray"
                  id="grid-state"
                >
                  <option>Lagos</option>
                  <option>Missouri</option>
                  <option>Texas</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg
                    className="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 
                mb-3
                
                leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                // id="grid-zip"
                type="text"
                placeholder="Country"
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                // id="grid-first-name"
                type="text"
                placeholder="Job Position"
              />
              {/* <p className="text-red-500 text-xs italic">
                Please fill out this field.
              </p> */}
            </div>
            <div className="w-full md:w-1/2 px-3">
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-last-name"
                type="date"
                placeholder="Start Date"
              />
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="flex flex-col mb-10 border-dashed border border-primary w-fit md:p-10 p-6 items-center justify-center">
              <BsUpload className="md:text-[70px] text-[50px]  text-primary  mb-4" />
              <h3 className="text-primary font-bold text-[28px] md:text-[36px] font-play mb-3">
                Upload CV
              </h3>
              <p className="text-[16px] whitespace-nowrap md:text-[21px] font-normal mb-3  font-play">
                Drop CV here or select file
              </p>
              <Button
                styles="bg-primary text-[17px]  text-white px-4"
                text={"Select file"}
              />
              <input type="file" className="hidden" />
            </div>
          </div>
          <div className=" text-center">
            <Button
              styles="bg-primary  text-white px-16 py-3"
              text={"Apply for Job"}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default PlacementForm;
