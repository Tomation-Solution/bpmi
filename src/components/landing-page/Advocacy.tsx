import Image from "next/image";
import React from "react";
import PLink from "../PLink";
import styles from "../style";
import { motion } from "framer-motion";

const Advocate = () => {
  return (
    <div className="flex flex-col sm:flex-row items-center mb-8">
      <Image
        src={"/groupMeeting.jpg"}
        alt=""
        width={300}
        height={300}
        className="object-cover mr-3 mb-4"
      />
      <div className=" flex flex-col justify-between h-full">
        <h4 className="text-[#00305E]  xl:max-w-xs leading-7 text-[25px] md:text-[30px] font-semibold  font-play mb-3 ">
          Borem ipsum dolor sit amet, consectetur adipiscing elit.
        </h4>
        <h5 className="text-primary text-[16px] md:text-[21px] font-normal  font-play mb-3 ">
          January 2, 2023
        </h5>
        <p className="text-darkText leading-none text-[18px] md:text-[25px] font-normal  font-play mb-3 ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </p>
        <h5 className="text-darkText text-[16px] md:text-[21px] font-normal  font-play mb-3 ">
          Date: 22 Jan 2022
        </h5>
      </div>
    </div>
  );
};

const Advocacy = () => {
  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 1.5, type: "spring" }}
      className="flex flex-col justify-center  w-full"
    >
      <h3 className={` text-center text-primary ${styles.heading3} mb-10`}>
        ADVOCACY
      </h3>
      <div className="flex flex-col xl:flex-row justify-between md:justify-around ">
        <Advocate />
        <Advocate />
      </div>
      <div className="flex justify-center">
        <PLink
          text="Learn More"
          href="advocacy"
          styles="bg-primary text-white mt-8 p-4 "
        />
      </div>
    </motion.div>
  );
};

export default Advocacy;
