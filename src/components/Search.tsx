import React from "react";
import Button from "./Button";

const Search = () => {
  return (
    <div className="mb-6">
      <h4 className="font-play text-[14px] text-[#65656A] mb-3 ">
        SEARCH FOR A RESOURCE
      </h4>
      <div className="flex flex-col sm:flex-row">
        <div className=" sm:w-[350px] border-b border-[#DBDBDB] bg-white  h-max p-2 mb-4 flex items-center mr-8">
          <input
            placeholder="Search"
            className="text-[20px] text-dim bg-white"
          />
        </div>
        <Button
          text="Submit"
          styles="text-white bg-primary rounded-lg sm:rounded-full px-4 border-[#6163A3]  h-fit w-fit border hover:border-[#6163A3] hover:border"
        />
      </div>
    </div>
  );
};

export default Search;
