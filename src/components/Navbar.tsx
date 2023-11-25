import { useRouter } from "next/router";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import React, { useState } from "react";
import { navLinks } from "@/constants";
import PLink from "./PLink";
import styles from "./style";
// import LogoIcon from "./Logo";
import Link from "next/link";
import { Menu } from "@headlessui/react";
import Image from "next/image";
import ExpandedIcon from "./ExpandedIcon";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [isExpanded, toggleExpanded] = React.useState(false);

  const onClick = () => {
    toggleExpanded((prev) => !prev);
  };

  const router = useRouter();

  const route = router.asPath.replace("/", "");

  return (
    <div
      className={`min-h-fit flex z-30 fixed flex-col  w-full bg-white shadow-lg sm:py-6 py-3  ${styles.paddingX} top-0`}
    >
      <nav className="w-full flex  z-40 top-0 left-0  py-2 justify-between items-center navbar">
        <Link href={"/"} className="grow mr-4">
          {/* <LogoIcon /> */}
          <Image src={"/logo.jpg"} alt="" height={60} width={60} />
        </Link>
        <ul className="list-none xl:flex hidden  items-center flex-1">
          {navLinks.map((nav, index) => {
            if (!nav.list) {
              return (
                <li
                  key={nav.id}
                  className={`font-poppins font-normal cursor-pointer text-[16px] p-2 rounded-md text-link whitespace-nowrap ${
                    route === nav.id
                      ? "underline-offset-8 underline "
                      : "text-link"
                  }  
          ${index === navLinks.length - 1 ? "mr-0" : "mr-2 lg:mr-5"}
          `}
                >
                  <Link
                    href={nav.title === "Sign in"?nav.id:`/${nav.id}`}
                    className={
                      nav.title === "Sign in"
                        ? "pl-6 border-l-[3px] border-primary"
                        : ""
                    }
                    target={nav.title === "Sign in"?'_blank':''}
                  >
                    {nav.title}
                  </Link>
                </li>
              );
            }
            if (nav.list) {
              return (
                <Menu as="div" className="relative inline-block" key={nav.id}>
                  <Menu.Button
                    className={
                      "text-primary whitespace-nowrap mr-6 outline-none flex items-center gap-3"
                    }
                  >
                    {nav.title}
                    <ExpandedIcon
                      isExpanded={isExpanded}
                      handleClick={onClick}
                    />
                  </Menu.Button>

                  <Menu.Items
                    className={
                      "absolute right-0 w-fit origin-top-right  bg-white border border-darkGray rounded-lg py-2  outline-none shadow-inner"
                    }
                  >
                    {nav.list.map((item) => (
                      <Menu.Item key={item.id}>
                        <Link
                          className="dropdown-link text-primary block  whitespace-nowrap "
                          href={`/${item.id}`}
                        >
                          {item.title}
                        </Link>
                      </Menu.Item>
                    ))}
                  </Menu.Items>
                </Menu>
              );
            }
          })}
        </ul>
        <PLink
          href="become-a-member"
          text="Become A Member"
          styles="border border-secondary text-secondary xl:flex hidden  ml-20 "
        />
        <div className="xl:hidden flex flex-1 justify-end items-center">
          {toggle ? (
            <AiOutlineClose
              className="mx-2 text-primary block text:3xl cursor-pointer"
              onClick={() => setToggle(!toggle)}
            />
          ) : (
            <AiOutlineMenu
              className="mx-2 text-primary block text:3xl cursor-pointer"
              onClick={() => setToggle(!toggle)}
            />
          )}

          <div
            className={`${!toggle ? "hidden" : ""}
          p-6 bg-[#eeeaea] shadow-lg absolute top-20 right-0 mx-4 my-2 min-w-[140px]  rounded-xl sidebar
          `}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col">
              {navLinks.map((nav, index) => (
                <li
                  key={nav.id}
                  className={`
              font-poppins font-medium cursor-pointer text-[16px] 
              p-2 rounded-md 
              ${
                route === nav.id
                  ? "underline-offset-8 underline text-link"
                  : "text-link"
              }  
              mb-4`}
                >
                  <a href={`/${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
            <div className="flex lg:hidden">
              <PLink
          href="become-a-member"

                text="Become A Member"
                styles="border border-secondary  text-secondary flex lg:hidden"
              />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
