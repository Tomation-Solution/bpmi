import React from "react";
import Button from "../Button";
import SlantArrow from "@/assets/SlantArrow";

const NewsList = () => {
  return (
    <li className="mb-3">
      <div className="border-b border-dim pb-3 w-fit">
        <Button
          styles="text-[#555D42] border-[#555D42] border-2  text-[10px] p-1 px-2 mb-2 rounded-full "
          text="Insight"
        />
        <div className="flex items-center ">
          <p className="whitespace-nowrap mr-12 font-bold text-[16px] text-[#2B3513]">
            Manufacturing Outlook Q4 2022
          </p>
          <SlantArrow />
        </div>
        <p className="font-bold text-[14px] text-[#4E5665]">
          December 30, 2022
        </p>
      </div>
    </li>
  );
};

export default NewsList;
