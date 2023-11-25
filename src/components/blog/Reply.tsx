import React from "react";
import Button from "../Button";

const Reply = () => {
  return (
    <div className="flex flex-col items-center w-full mb-20">
      <div className="flex flex-col  w-fit">
        <h4 className="text-[#020202] font-normal text-[30px]">
          {" "}
          Post a Reply
        </h4>
        <textarea
          className="bg-[#F5F5F5] min-h-[200px] min-w-[1000px] my-6 p-4"
          placeholder="Comments "
        />
        <div className="flex justify-end">
          <Button
            styles="bg-primary text-white rounded-full px-8"
            text="POST COMMENTS"
          />
        </div>
      </div>
    </div>
  );
};

export default Reply;
