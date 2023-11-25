import React from "react";

const Topic = () => {
  return (
    <div className="mb-3">
      <h4 className="font-bold font-inter text-[14px] text-[#65656A]">Topic</h4>
      <div className="flex flex-wrap">
        {[1, 2, 3, 4, 5, 6].map((t) => (
          <div
            key={t}
            className="text-[16px] text-primary my-8 mr-8 border-b border-primary"
          >
            BPMI
          </div>
        ))}
      </div>
    </div>
  );
};

export default Topic;
