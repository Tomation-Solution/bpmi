import { criterias } from "@/constants/membership";
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
      <div className="flex flex-col md:flex-row sm:px-10 px-4  sm:pb-20 pb-4">
        <div className="flex flex-col justify-between my-6 md:my-20">
          <ul className="list-none flex flex-col">
            <Links />
          </ul>
        </div>
        <div className={`${styles.paddingX}`}>
          <div className={`my-3 md:my-10 flex flex-col xl:flex-row `}>
            <div className="max-w-[2500px] mb-3">
              <Image
                src={"/star.jpg"}
                alt=""
                height={120}
                width={120}
                className="mb-6"
              />

              <h3 className="font-bold text-primary text-[36px] mb-5">
                GRADED MEMBERSHIP PROGRAMME (EXECUTIVE FAST TRACK){" "}
              </h3>
              <p className="font-normal text-[20px] text-black">
                Experienced practitioners in the field of process management
                shall have to take the executive fast track route to becoming
                members of the institutes. The years of practice and educational
                qualifications from relevant fields of studies shall be
                considered and they shall be offered the membership grades
                equivalent to their placement.
              </p>
            </div>
            <div className="relative flex w-full">
              <Image
                src={"/woman.jpg"}
                alt=""
                width={460}
                height={330}
                className="xl:bottom-3 xl:left-3 relative z-10 rounded-xl"
              />
            </div>
          </div>
          <div className="overflow-x  md:min-w-[330px] w-[330px] sm:w-full md:px-6 overflow-x-scroll">
            <table
              className={`${styles.paddingY}  table-auto  border-separate  w-full my-4`}
            >
              <thead>
                <tr className={` text-paleBlue font-bold text-[30px]`}>
                  <th className={`${col}   justify-center text-center`}>
                    Level
                  </th>
                  <th className={`${col}   justify-center text-start`}>
                    Criteria
                  </th>
                  <th
                    className={`${col}   justify-center text-center whitespace-nowrap`}
                  >
                    Who is it For?
                  </th>
                </tr>
              </thead>
              <tbody>
                {criterias.map((q) => (
                  <tr key={q.id}>
                    <td className={`${col}  text-center `}>
                      <p className="text-[28px] text-black ">
                        {q.level[0]}
                        <br />
                        {q.level[1]}
                      </p>
                    </td>
                    <td className={`${col} `}>
                      <div className="">
                        <p className=" text-black font-normal text-[18px] mb-4">
                          {q.criteria}
                        </p>
                        <PLink
                          href={q.link}
                          styles="text-white text-[18px] mt-4 bg-primary rounded-none"
                          text="Apply"
                        />
                      </div>
                    </td>
                    <td className={`${col}  `}>
                      <p className=" text-black font-normal text-[18px]">
                        {q.description}
                      </p>
                    </td>
                  </tr>
                ))}
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
