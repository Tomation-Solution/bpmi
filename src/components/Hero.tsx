import Image from "next/image";
import React from "react";
import PLink from "./PLink";
import { AnimatedText } from "./AnimatedText";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

interface HeroProp {
  img?: string;
  title: string;
}

const Hero = ({ img, title }: HeroProp) => {
  const route = useRouter()
  return (
    <div className="relative flex  items-center justify-center min-h-[400px] md:min-h-[500px] mb-10">
      <Image
        src={`/${img}.jpg`}
        className="w-[100%]  
     h-[100%] 
      absolute
      object-cover
      "
        alt=""
        height={500}
        width={1000}
      />
      <div className="bg-black absolute w-full h-full z-10 opacity-[0.6]" />

      <div
        className="
        pt-20
      min-h-[490px] lg:h-[520px]
      text-white  flex flex-col items-center justify-center  z-20 px-4"
      >
        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.5, type: "spring" }}
          className="lg:text-5xl text-3xl mb-4 md:mb-8 leading-[40px] sm:leading-[60px] text-center sm:text-start"
        >
          {title}
        </motion.h1>
        <PLink
          styles="bg-white text-primary rounded-lg px-5 mt-8"
          href="become-a-member"
          text="Become A Member"
        />
      </div>
      {/* <Image
        src={`/herobtm.jpg`}
        className="w-[100%]  
     h-[100%] 

      "
        alt=""
        height={500}
        width={1000}
      /> */}
    </div>
  );
};

export const Herofn = ({ img, title }: HeroProp) => {
  return (
    <div className="relative flex  items-center justify-center min-h-[400px] md:min-h-[500px] mb-10">
      <Image
        src={`/${img}.jpg`}
        className="w-[100%]  
     h-[100%] 
      absolute
      object-cover
      "
        alt=""
        height={500}
        width={1000}
      />
      <div className="bg-black absolute w-full h-full z-10 opacity-[0.6]" />
      <div
        className="
        pt-20
      min-h-[490px] lg:h-[520px]
      text-white  flex  items-center  justify-end  z-20 px-4 "
      >
        {/* <h1 className="lg:text-5xl text-3xl mb-2 leading-[40px] sm:leading-[60px] text-center sm:text-start ">
          Promoting the practice of Business <br /> Process Management in
          Nigeria
        </h1> */}
        <AnimatedText
          className="lg:text-5xl text-3xl mb-2 leading-[40px] sm:leading-[60px] text-center sm:text-start max-w-3xl "
          text={title}
        />
      </div>
    </div>
  );
};

export default Hero;
