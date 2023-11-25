import { programs } from "@/constants/membership";
import Image from "next/image";
import React from "react";
import { PLink, Links } from "..";
import styles from "../style";
import Program from "./Program";

const DevAndPrograms = () => {
  return (
    <section className="">
      <div className="flex justify-center items-center mb-4 md:mb-12">
        <PLink
          styles="text-gray mr-3 text-[17px] cursor-pointer"
          href="/"
          text="Home"
        />
        /<h5 className="text-paleBlue ml-3 text-[17px] border-b">Membership</h5>
      </div>
      <div className="flex flex-col lg:flex-row sm:px-10 px-4  sm:pb-20 pb-4">
        <div className="flex flex-col justify-between">
          <ul className="list-none flex flex-col   ">
            <Links />
          </ul>
          <Image
            src={"/ladywithpc.jpg"}
            alt=""
            width={240}
            height={667}
            className="top-3 right-3 relative hidden lg:block"
          />
        </div>
        <div className={`${styles.paddingX}`}>
          <div className={`my-3 md:my-10 flex flex-col xl:flex-row `}>
            <div className="">
              <h3 className={`  text-primary ${styles.heading3} mb-5`}>
                MEMBERSHIP BENEFITS
              </h3>
              <p className={`font-normal  text-black ${styles.paragraph} `}>
                As a member of the Business Process Management Institute, you
                are positioned to develop and improve on your business process
                management knowledge, skills, and network by joining the
                Business Process Management Institute. As a member of the BPM
                Institute you will have access to our research-based industry
                and practice-oriented content. You shall be a part of the
                growing network of business process management experts, and you
                will be able to attend our various business process management
                practice transformation events to continuously improve on your
                skills at discounted rates. As a member of BPMI you will gain
                recognition as a current and actively engaged Business Process
                Management Expert.
              </p>
            </div>
            <div className="relative flex mt-20 xl:mt-0  xl:min-w-[400px]">
              <Image
                src={"/union.jpg"}
                alt=""
                width={250}
                height={370}
                className="bottom-3 left-3 relative z-10 rounded-xl"
              />
              <Image
                src={"/penDown.jpg"}
                alt=""
                width={250}
                height={370}
                className="top-3 right-3 relative rounded-xl hidden sm:block"
              />
            </div>
          </div>
          <div className="text-center mt-20 max-w-6xl">
            <h3 className={`  text-primary ${styles.heading3} mb-5`}>
              PROPOSED MEMBERSHIP DEVELOPMENT <br /> PROGRAMMES RESOURCE
              COLLATERAL
            </h3>
            <div className="flex w-full mb-3 md:mb-6">
              <p className={`font-normal  text-black ${styles.paragraph}`}>
                The BPMI resource collateral is a knowledge base containing
                insightful write ups, articles, insights and research materials
                in the field of business process management for the use of the
                members. This shall be available for the use of all financial
                members of the institute.
              </p>
            </div>
            <Program />
          </div>
        </div>
      </div>
      <div
        className={`flex flex-col md:flex-row ${styles.paddingX} ${styles.paddingY}`}
      >
        <div className=" md:pr-12">
          <Image
            src={"/star.jpg"}
            alt=""
            height={120}
            width={120}
            className="mb-6"
          />
          <h4 className={"text-primary font-bold text-[21px] my-5"}>
            {programs[0].title}
          </h4>
          <p className="text-gray text-[21px]  mb-6">{programs[0].content}</p>
          <PLink
            styles="text-primary text-[21px] border"
            href="membership/categories"
            text="Continue"
          />
        </div>

        <div className="mt-12 md:mt-0">
          <Image
            src={"/people.jpg"}
            alt=""
            height={120}
            width={120}
            className="mb-6"
          />
          <h4 className={"text-primary font-bold text-[21px] my-5"}>
            {programs[1].title}
          </h4>
          <p className="text-gray text-[21px]  mb-6">{programs[1].content}</p>
          <PLink
            styles="text-primary text-[21px] mt-4 border"
            href="membership/criteria"
            text="Continue"
          />
        </div>
      </div>
    </section>
  );
};

export default DevAndPrograms;
