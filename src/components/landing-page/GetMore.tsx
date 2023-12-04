import { getMore } from "@/constants/landingPage";
import Image from "next/image";
import { CurvedBg } from "@/assets";
import React from "react";
import Button from "../Button";
import PLink from "../PLink";

const data = [
  {
    date_month:'Nov',
    date_day:'08',
    title:'BPM Within Public Sector Based Operations',
  },
  {
    date_month:'Sept',
    date_day:'13',
    title:'BPM &amp; Data Analytics',
  },
  {
    date_month:'Aug',
    date_day:'14',
    title:'Continuous Professional Development Training Programme',
  },
  {
    date_month:'July',
    date_day:'12',
    title:'Customer Experience Management',
  }
  ,
  {
    date_month:'June',
    date_day:'14',
    title:'Continuous Professional Development Training Programme',
  }
]
const GetMore = () => {
  return (
    <div className="flex mt-4 md:mt-24 items-center relative  flex-col xl:flex-row">
      <div className="w-full my-40 relative xl:left-[100px]">
        <h2 className="font-bold text-[30px] md:text-[41px] text-[#00305E]  text-center xl:text-left">
          Get more from The BPMI
        </h2>
        {getMore.map(({ title, text, pic, id }) => (
          <div className="flex flex-col   md:flex-row my-12" key={id}>
            <div className="mb-4">
              <h4 className="text-gray text-[14px] font-bold ">{title}</h4>
              <p className="text-[#6C8AC0] text-[22px] max-w-md mr-16 font-inter ">
                {text}
              </p>
            </div>
            <Image src={`/${pic}.jpg`} width={200} height={200} alt={title} />
          </div>
        ))}
      </div>
      <div className=" w-full xl:flex flex-col items-end hidden absolute z-10 top-[40px] ">
        <Image
          src={"/div.jpg"}
          alt=""
          width={200}
          height={200}
          className="mr-12 md:mr-24 mb-12"
        />
        <div className=" relative">
          <div className="mt-20   w-full flex items-center justify-center  absolute">
            <div className=" ml-20">
              <h2 className="text-primary font-bold text-[39px] font-inter ">
                Join Our Upcoming <br /> Eventss
              </h2>
              <div className="">
                {data.map((a,index) => (
                  <div
                    key={index}
                    className="flex max-w-[500px] border-b border-[#DBDBDB] py-2"
                  >
                    <div className="font-semibold text-[#00305E] text-[21px] font-inter mr-6">
                      <p className="text-[12px]  border-b-2 border-[#9ACA3C] pb-1 ">
                        {a.date_month}
                      </p>
                      {a.date_day}
                    </div>
                    <p className="font-inter font-normal text-[20px] text-gray ">
                      {a.title}
                    </p>
                  </div>
                ))}
              </div>
              <div className="flex w-full justify-center p-16">
                <PLink
                  href="services"
                  text="View All"
                  styles="bg-primary text-white rounded-full px-4"
                />
              </div>
            </div>
          </div>
          <CurvedBg className=" max-w-[700px]" />
        </div>
      </div>
      <div className=" w-full flex flex-col items-end xl:hidden   z-10 top-[40px] ">
        <Image
          src={"/div.jpg"}
          alt=""
          width={200}
          height={200}
          className="mr-12 md:mr-24 mb-12"
        />
        <div className=" relative w-full ">
          <div className="mt-20    flex items-center justify-center  ">
            <div className=" ">
              <h2 className="text-primary mb-3 text-center font-bold text-[25px] md:text-[39px] font-inter ">
                Join Our Upcoming Events
              </h2>
              <div className="">
                {[28, 22, 15, 5].map((a) => (
                  <div key={a} className="flex  border-b border-[#DBDBDB] py-2">
                    <div className="font-semibold text-[#00305E] text-[21px] font-inter mr-6">
                      <p className="text-[12px]  border-b-2 border-[#9ACA3C] pb-1 ">
                        Dec
                      </p>
                      {a}
                    </div>
                    <p className="font-inter font-normal text-[20px] text-gray ">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nunc vulputate libero et velit interdum, ac aliquet odio
                      mattis.
                    </p>
                  </div>
                ))}
              </div>
              <div className="flex w-full justify-center p-16">
                <PLink
                  href="services"
                  text="View All"
                  styles="bg-primary text-white rounded-full px-4"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetMore;
