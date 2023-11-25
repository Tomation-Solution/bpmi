import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";

import React from "react";
import { styles } from "../";
import BlogPost from "./BlogPost";
import Image from "next/image";
import Reply from "./Reply";

const Events = () => {
  return (
    <section className="">
      <div className="flex flex-col md:flex-row sm:px-10 px-4  mt-4 md:mt-16 ">
        <div className={`${styles.paddingX} w-full`}>
          <div className="flex">
            <div className="max-w-[900px]  p-4">
              <Image
                src="/conferencemeeting.jpg"
                alt=""
                height={500}
                width={1000}
              />
              <h3 className="font-bold text-primary text-[25px] lg:text-[40px] mb-5">
                Korem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
              </h3>
              <p className={`${paragraph} mb-3 text-[15px] lg:text-[20px]`}>
                05/08/2022 {"  "} |{" "}
                <span className="text-primary">Emmanuel</span>
              </p>
              <p className={`${paragraph} mb-3 text-[15px] lg:text-[20px]`}>
                HR Management/10 Mins Read
              </p>
              <p className={`${paragraph} text-[20px] lg:text-[27px]`}>
                Torem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit interdum, ac aliquet odio mattis.
                Class aptent taciti sociosqu ad litora torquent per conubia
                nostra, per inceptos himenaeos. Curabitur tempus urna at turpis
                condimentum lobortis. Ut commodo efficitur neque. Ut diam quam,
                semper iaculis condimentum ac, vestibulum eu nisl
              </p>
              <p className={`${paragraph} text-[20px] lg:text-[27px]`}>
                Torem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit interdum, ac aliquet odio mattis.
                Class aptent taciti sociosqu ad litora torquent per conubia
                nostra, per inceptos himenaeos. Curabitur tempus urna at turpis
                condimentum lobortis. Ut commodo efficitur neque. Ut diam quam,
                semper iaculis condimentum ac, vestibulum eu nisl
              </p>
              <Image
                src="/conferenceroom.jpg"
                alt=""
                height={500}
                width={1000}
                className="my-4"
              />
              <p className={`${paragraph} text-[20px] lg:text-[27px]`}>
                Torem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit interdum, ac aliquet odio mattis.
                Class aptent taciti sociosqu ad litora torquent per conubia
                nostra, per inceptos himenaeos. Curabitur tempus urna at turpis
                condimentum lobortis. Ut commodo efficitur neque. Ut diam quam,
                semper iaculis condimentum ac, vestibulum eu nisl
              </p>
              <p className={`${paragraph} text-[20px] lg:text-[27px]`}>
                Torem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit interdum, ac aliquet odio mattis.
                Class aptent taciti sociosqu ad litora torquent per conubia
                nostra, per inceptos himenaeos. Curabitur tempus urna at turpis
                condimentum lobortis. Ut commodo efficitur neque. Ut diam quam,
                semper iaculis condimentum ac, vestibulum eu nisl
              </p>
              <p className={`${paragraph} text-[20px] lg:text-[27px]`}>
                Torem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit interdum, ac aliquet odio mattis.
                Class aptent taciti sociosqu ad litora torquent per conubia
                nostra, per inceptos himenaeos. Curabitur tempus urna at turpis
                condimentum lobortis. Ut commodo efficitur neque. Ut diam quam,
                semper iaculis condimentum ac, vestibulum eu nisl
              </p>
              <p className={`${paragraph} text-[20px] lg:text-[27px]`}>
                Torem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit interdum, ac aliquet odio mattis.
                Class aptent taciti sociosqu ad litora torquent per conubia
                nostra, per inceptos himenaeos. Curabitur tempus urna at turpis
                condimentum lobortis. Ut commodo efficitur neque. Ut diam quam,
                semper iaculis condimentum ac, vestibulum eu nisl
              </p>
              <div className="flex  py-16 w-full">
                <FaFacebookF className="mx-1 text-primary text-[27px]" />
                <FaLinkedinIn className="mx-1 text-primary text-[27px]" />
                <BsTwitter className="mx-1 text-primary text-[27px]" />
                <FaInstagram className="mx-1 text-primary text-[27px]" />
              </div>
            </div>
          </div>
        </div>
        <ul className="list-none flex flex-col  items-center ">
          <div className="whitespace-nowrap text-black font-semibold text-[40px] mb-8">
            Related Posts
          </div>
          {[1, 2, 3, 4, 5].map((idx) => (
            <div className="" key={idx}>
              <BlogPost />
            </div>
          ))}
        </ul>
      </div>
      <div className={`${styles.paddingX} w-full`}>
        <Reply />
      </div>
    </section>
  );
};

const paragraph = "font-normal text-[24px] leading-1 text-[#4a4a4a]";

export default Events;
