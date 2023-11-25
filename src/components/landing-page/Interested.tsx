import React from "react";
import PLink from "../PLink";

const Interested = () => {
  return (
    <div className="bg-[#6C8AC0] text-white max-w-[600px] w-fit p-8">
      <h2 className="font-bold text-[36px]">
        Interested in <br /> becoming a member?
      </h2>
      <p className="my-4 font-normal text-[17px]">
        As a member of the Business Process Management Institute, you are
        positioned to develop and improve on your business process management
        knowledge, skills, and network by joining the Business Process
        Management Institute.
      </p>
      <PLink
        text="BECOME A MEMBER"
        href="become-a-member"
        styles="bg-primary rounded-full p-4"
      />
    </div>
  );
};

export const Interestedfn = () => {
  return (
    <div
      className={`bg-[url(/plentysmile.jpg)] bg-no-repeat bg-cover flex justify-center items-center p-4 md:p-10`}
    >
      <div className="text-center text-white  w-fit ">
        <h2 className="font-bold text-[36px] mb-5 md:mb-12">
          Want to become a member via examination route?{" "}
        </h2>

        <PLink
          text="BECOME A MEMBER"
          href="become-a-member"
          styles="bg-primary rounded-full p-4"
        />
      </div>
    </div>
  );
};
export default Interested;
