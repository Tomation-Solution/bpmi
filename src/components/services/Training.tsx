import React from "react";
import { Button, Links, PLink, styles } from "..";
import Image from "next/image";

const Events = () => {
  return (
    <section className="">
      <div className="flex justify-center items-center mb-4 md:mb-12">
        <PLink
          styles="text-gray mr-3 text-[17px] cursor-pointer"
          href="/"
          text="Home"
        />
        /
        <PLink
          styles="text-paleBlue mx-3 text-[17px] cursor-pointer"
          href="services"
          text="Service"
        />
        /<h5 className="text-paleBlue mx-3 text-[17px] border-b">Training</h5>
      </div>
      <div className="flex flex-col lg:flex-row sm:px-10 px-4  sm:pb-20 pb-4">
        <div className="flex flex-col justify-between my-6 md:my-20">
          <ul className="list-none flex flex-col   ">
            <Links />
          </ul>
        </div>
        <div className={`${styles.paddingX} w-full`}>
          <div className="w-fit  ">
            <div className="w-full pl-1  bg-gradient-to-b from-[#95C11F] to-[#88CDD3]">
              <div className="w-full bg-white mr-12">
                <h4 className="text-[#16A2B7] font-bold text-[16px] mb-6">
                  Pre-retirement training
                </h4>
                <p className="text-[#4A4A4A] font-bold text-[16px]">
                  Members NGN10,000 / Non
                </p>
                <p className="text-[#4A4A4A] font-bold text-[16px] mb-10">
                  Members NGN20,000 + VAT
                </p>
                <PLink
                  href="event"
                  styles="bg-[#717861] border border-[#88CDD3] text-white mb-3"
                  text="Register here"
                />
              </div>
            </div>
          </div>
          <div className="my-3 md:my-10 flex">
            <div className="max-w-[900px]">
              <p className="font-normal text-[20px] text-black mb-4 leading-8">
                The Manufacturers Association of Nigeria (MAN) wishes to inform
                the general public that it is no longer a partner in the
                organization of the Annual Nigeria Manufacturing
                Expo/Manufacturing Partnership for African Development
                (NME/mPAD) events organized by Clarion Events West Africa, a
                South African Company.
              </p>
              <p className="font-normal text-[20px] text-black mb-4 leading-8">
                This decision is sequel to the closure of our partner’s (Clarion
                Events West Africa) business interest in Nigeria which led to
                laying off its staff operating in Lagos. Consequently, MAN
                ceases to be part of any Expo being organized by Clarion Events
                West Africa, and as such the general public is hereby advised to
                be wary of any individual or group of persons parading
                themselves as organizers of Nigeria Manufacturing Equipment Expo
                in partnership with MAN. MAN members are particularly put on
                notice to be aware.
              </p>
              <p className="font-normal text-[20px] text-black mb-4 leading-8">
                We wish to express our deep appreciation to the exhibitors (both
                Local and International), the general public and our media
                partners who have supported the Association in the organization
                of the previous four editions of NME/mPAD. Please be informed
                that MAN is planning its sole International Equipment
                Manufacturing Expo and the details will be communicated in due
                course. Thank you.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const col = "  md:p-4 p-2  w-[300px] ";

export default Events;
