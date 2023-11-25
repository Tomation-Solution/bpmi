import { links } from "@/constants";
import React from "react";

const Links = () => {
  return (
    <div
      className="flex flex-wrap
    "
    >
      {links.map((link) => (
        <li
          key={link.id}
          className={`font-play w-fit  cursor-pointer font-bold text-[17px] p-2 hover:text-dim text-link border-darkGray whitespace-nowrap 
border-b-2
                `}
        >
          <a
            href={`${link.id}`}
            className={
              link.title === "Sign in"
                ? "pl-6 border-l-[3px]  border-primary"
                : ""
            }
          >
            {link.title}
          </a>
        </li>
      ))}
    </div>
  );
};

export default Links;
