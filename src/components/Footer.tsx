import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import Link from "next/link";
import React from "react";
import { footer } from "../constants";
import styles from "./style";

const Footer = () => {
  const { links, copyRight } = footer;
  return (
    <section
      className={`  flex flex-col sm:flex-row sm:justify-between sm:items-center  ${styles.padding}`}
    >
      <div className="flex text-primary mb-6">
        <Link href={""} className="pr-4">
          <FaFacebookF />
        </Link>
        <Link href={""} className="px-4">
          <FaLinkedinIn />
        </Link>
        <Link href={""} className="px-4">
          <FaTwitter />
        </Link>
      </div>
      <div className=" ">
        <div className="mb-4 sm:mb-0">
          <div className="  w-full   flex flex-wrap  ">
            {links.map((f, idx) => (
              <p
                key={idx}
                className={`${
                  idx > 0 ? "px-2 md:px-6" : "pr-2 md:pr-6"
                }   mb-6 text-base hover:text-gray text-primary`}
              >
                <a href={`${f.id}`}>{f.title}</a>
              </p>
            ))}
          </div>
        </div>
        <p className="text-sm whitespace-nowrap text-gray">{copyRight}</p>
      </div>
    </section>
  );
};

export const Footerfn = () => {
  const { linksfn, copyRight } = footer;
  return (
    <section
      className={`  flex flex-col sm:flex-row sm:justify-between sm:items-center  ${styles.padding}`}
    >
      <div className="flex text-primary mb-6">
        <Link href={""} className="pr-4">
          <FaFacebookF />
        </Link>
        <Link href={""} className="px-4">
          <FaLinkedinIn />
        </Link>
        <Link href={""} className="px-4">
          <FaTwitter />
        </Link>
      </div>
      <div>
        <div className="mb-4 sm:mb-0">
          <div className="  w-full   flex flex-wrap  ">
            {linksfn.map((f, idx) => (
              <p
                key={idx}
                className={`${
                  idx > 0 ? "pr-4 md:pr-12" : "pr-2 md:pr-6"
                }   mb-6 text-base hover:text-gray text-primary`}
              >
                <a href={`${f.id}`}>{f.title}</a>
              </p>
            ))}
          </div>
        </div>
        <p className="text-sm whitespace-nowrap text-gray">{copyRight}</p>
      </div>
    </section>
  );
};
export default Footer;
