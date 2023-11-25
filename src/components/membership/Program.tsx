import { devProgrammes } from "@/constants/membership";
import React from "react";

const Program = () => {
  return (
    <div>
      {devProgrammes.map((p, idx) => (
        <div key={idx} className="flex w-full   text-start mt-4">
          <div className=" h-[100px] w-[1px] bg-gray mr-3" />

          <div className="ml-3 ">
            <h4 className="text-[#00ABE6] font-bold text-[21px] mb-3">
              {p.title}
            </h4>
            <p className="font-normal text-[21px] text-black mb-3">
              {p.content}
            </p>
            {p.topic && (
              <p className="font-semibold text-[21px] text-black mb-4">
                {p.topic}
              </p>
            )}
            {p.list && (
              <ul>
                {p.list.map((item, idx) => (
                  <li
                    key={idx}
                    className={`font-normal text-[21px] text-black ${
                      idx < p.list.length - 1 && "mb-4"
                    }`}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Program;
