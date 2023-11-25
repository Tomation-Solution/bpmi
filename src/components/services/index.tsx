import React from "react";
import { Button, Links, PLink, styles } from "..";
import Image from "next/image";
import { trainingDatacourses } from "@/constants/courses-data";

const Events = () => {
  return (
    <section className="">
      <div className="flex justify-center items-center mb-4 md:mb-12">
        <PLink
          styles="text-gray mr-3 text-[17px] cursor-pointer"
          href="/"
          text="Home"
        />
        /<h5 className="text-paleBlue ml-3 text-[17px] border-b">Service</h5>
      </div>
      <div className="flex flex-col lg:flex-row sm:px-10 px-4  sm:pb-20 pb-4">
        <div className="flex flex-col justify-between my-6 md:my-20">
          <ul className="list-none flex flex-col   ">
            <Links />
          </ul>
        </div>
        <div className={`${styles.paddingX} w-full`}>
          <div className="my-3 md:my-10 flex">
            <div className="max-w-[900px]">
              <Image
                src={"/star.jpg"}
                alt=""
                height={120}
                width={120}
                className="mb-6"
              />

              <h3 className={`  text-primary ${styles.heading3} mb-5`}>
                E-LEARNING PROGRAMMES
              </h3>
              <p className={`font-normal  text-black ${styles.paragraph}`}>
                We shall be offering all our training programmes via the
                e-learning platform for intending members that might not be able
                to make it to any of the designated learning centres nation-
                wide. In the same vein, we shall be having virtual chapter, and
                group meetings for the same categories of members. This is aside
                the online webinar aimed at the continuous business process
                management training and capacity building programmes. Foundation
                Certificate in Business Process Management.
              </p>
            </div>
          </div>
          <div className="">
            <div className="flex flex-col md:flex-row justify-between mt-10">
              <h4 className="font-normal text-[25px] md:text-[34px] text-[#4A4A4A] mb-6">
                Upcoming Events & Trainings
              </h4>
              <Button
                styles="text-[#1D71B8] border-[#1D71B8] border h-fit px-10 xl:px-16"
                text="View all"
              />
            </div>

            <div className="xl:grid-cols-4 md:grid-cols-2 grid gap-4 my-8">
              {trainingDatacourses.map((t,index) => (
                <div
                  key={index}
                  className="w-full pl-1  bg-gradient-to-b from-[#95C11F] to-[#88CDD3] mb-6"
                >
                  <div className="w-full bg-white">
                    <h4 className="text-[#16A2B7] font-bold text-[16px] mb-6">
                    {t.title}
                    </h4>
                    <p className="text-[#4A4A4A] font-bold text-[16px]">
                  {t.otherInfo}
                    </p>
                    {/* <p className="text-[#4A4A4A] font-bold text-[16px] mb-10">
                      Members NGN20,000 + VAT
                    </p> */}
                    <PLink
                      href={`services/${index}`}
                      styles="bg-[#717861] border border-[#88CDD3] text-white mb-3"
                      text="Read more"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;
