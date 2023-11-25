import { categories } from "@/constants/membership";
import Image from "next/image";
import React from "react";
import { PLink, Links } from "..";
import styles from "../style";

const Route = () => {
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
      <div className="flex flex-col xl:flex-row sm:px-10 px-4  sm:pb-20 pb-4">
        <div className="flex flex-col justify-between my-6 xl:my-20">
          <ul className="list-none flex flex-col   ">
            <Links />
          </ul>
        </div>
        <div className={`${styles.paddingX}`}>
          <div className="my-3 md:my-10 flex flex-col xl:flex-row">
            <div className="">
              <Image
                src={"/people.jpg"}
                alt=""
                height={120}
                width={120}
                className="mb-6"
              />

              <h3 className={`  text-primary ${styles.heading3} mb-5`}>
                GRADING EXAMINATION ROUTE ( Membership){" "}
              </h3>
              <p className={`font-normal  text-black ${styles.paragraph} `}>
                The Graded membership programme is designed for first degree
                graduates of relevant disciplines and existing practitioners in
                the field of business process management. The first degree
                holders shall commence their BPM professional career by taking
                the various examinations required of them to become members of
                the institute.The Graded membership programme is designed for
                first degree graduates of relevant disciplines and existing
                practitioners in the field of business process management. The
                first degree holders shall commence their BPM professional
                career by taking the various examinations required of them to
                become members of the institute.
              </p>
            </div>
            <div className="relative flex mt-20 xl:mt-0  xl:min-w-[400px]">
              <Image
                src={"/class.jpg"}
                alt=""
                width={250}
                height={370}
                className="bottom-3 left-3 relative z-10 rounded-xl"
              />
              <Image
                src={"/index.jpg"}
                alt=""
                width={250}
                height={370}
                className="top-3 right-3 relative rounded-xl hidden sm:block"
              />
            </div>
          </div>
          <div className="overflow-x  md:min-w-[330px] w-[330px] sm:w-full md:px-6 overflow-x-scroll">
            <table
              className={`${styles.paddingY} overflow-x-scroll  table-auto  border-separate  w-full my-4`}
            >
              <thead>
                <tr className={` text-paleBlue ${styles.heading3}`}>
                  <th className={`${col}   justify-center text-center`}>S/N</th>
                  <th className={`${col}   justify-center text-start`}>
                    CATEGORY
                  </th>
                  <th className={`${col}   justify-center text-center`}>
                    DESCRIPTION
                  </th>
                </tr>
              </thead>
              <tbody className="border-collapse border border-red-700">
                {categories.map((q) => {
                  return (
                    <tr key={q.id}>
                      <td
                        className={`border border-slate-300  ${col}  text-center `}
                      >
                        <p className="text-[28px] text-black ">{q.id}</p>
                      </td>
                      <td className={`border border-slate-300  ${col} `}>
                        <div className="">
                          <p className="max-w-[200px] text-black font-normal text-[18px] mb-4">
                            {q.category}
                          </p>
                          <PLink
                            href={q.link}
                            styles="text-white text-[18px] bg-primary rounded-none"
                            text="Apply"
                          />
                        </div>
                      </td>
                      <td className={`border border-slate-300  ${col}  `}>
                        {Array.isArray(q.description) ? (
                          <ul>
                            {q.description.map((item, index) => (
                              <li
                                key={index}
                                className="text-black font-normal text-[18px] mb-3 flex"
                              >
                                <span className="block mr-3">{index + 1}</span>{" "}
                                {item}
                              </li>
                            ))}
                          </ul>
                        ) : (
                          <p className="text-black font-normal text-[18px]">
                            {q.description}
                          </p>
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

const col = "  md:p-4 p-2  w-[300px] ";

export default Route;
