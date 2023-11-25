import { FaFacebook } from "react-icons/fa";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiOutlineMail,
} from "react-icons/ai";

import React from "react";
import { styles } from "../";
import NewsList from "./NewsList";

const Events = () => {
  return (
    <section className="">
      <div className="flex flex-col md:flex-row sm:px-10 px-4  sm:pb-20 pb-4 mt-4 md:mt-16">
        <div className={`${styles.paddingX} w-full`}>
          <div className="my-3 md:my-10 flex">
            <div className="max-w-[900px] bg-white p-4">
              <h3 className="font-normal text-[#4A4A4a] text-[29px] mb-5">
                DISCLAIMER ON NME/mPAD
              </h3>
              <p className={paragraph}>
                The Manufacturers Association of Nigeria (MAN) wishes to inform
                the general public that it is no longer a partner in the
                organization of the Annual Nigeria Manufacturing
                Expo/Manufacturing Partnership for African Development
                (NME/mPAD) events organized by Clarion Events West Africa, a
                South African Company.
              </p>
              <p className={paragraph}>
                This decision is sequel to the closure of our partner’s (Clarion
                Events West Africa) business interest in Nigeria which led to
                laying off its staff operating in Lagos.
              </p>
              <p className={paragraph}>
                Consequently, MAN ceases to be part of any Expo being organized
                by Clarion Events West Africa, and as such the general public is
                hereby advised to be wary of any individual or group of persons
                parading themselves as organizers of Nigeria Manufacturing
                Equipment Expo in partnership with MAN. MAN members are
                particularly put on notice to be aware.
              </p>
              <p className={paragraph}>
                We wish to express our deep appreciation to the exhibitors (both
                Local and International), the general public and our media
                partners who have supported the Association in the organization
                of the previous four editions of NME/mPAD.
              </p>
              <p className={`${paragraph} mb-3`}>
                Please be informed that MAN is planning its sole International
                Equipment Manufacturing Expo and the details will be
                communicated in due course. <br /> Thank you.
              </p>
              <p className={`${paragraph} my-4`}>
                Segun Ajayi-Kadir
                <br />
                Director General
              </p>
              <p className={`${paragraph} mb-40`}>15th August 2019</p>

              <div className="flex border-t border-dim py-3 w-full">
                <FaFacebook className="mx-1 text-dim text-[32px]" />
                <AiFillLinkedin className="mx-1 text-dim text-[32px]" />
                <AiFillTwitterCircle className="mx-1 text-dim text-[32px]" />
                <AiOutlineMail className="mx-1 text-dim text-[32px]" />
              </div>
            </div>
          </div>
        </div>
        <ul className="list-none flex flex-col   ">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map((idx) => (
            <div className="" key={idx}>
              <NewsList />
            </div>
          ))}
        </ul>
      </div>
    </section>
  );
};

const paragraph = "font-normal text-[24px] leading-1 text-[#4a4a4a]";

export default Events;
