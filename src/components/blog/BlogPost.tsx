import Image from "next/image";
import React from "react";

const BlogPost = () => {
  return (
    <div className="bg-[#C2C3DB] md:mb-10 mb-4 md:p-4 p-6 rounded-xl md:max-w-[360px] max-w-[300px]">
      <Image src="/conferencemeeting.jpg" alt="" width={300} height={200} />
      <h4 className="text-primary font-bold text-[25px] leading-7 mt-3">
        Lorem ipsum dolor sit amet
      </h4>
      <p className="text-[14px] font-play">
        consectetur adipiscing elit. Facilisis turpis vel nulla tempor sit
        libero. Aliquet sed amet, quis a nibh auctor.
      </p>
      <p className="text-[12px] font-play font-bold mt-3">
        Marketing/15 Mins Read
      </p>
    </div>
  );
};

export default BlogPost;
