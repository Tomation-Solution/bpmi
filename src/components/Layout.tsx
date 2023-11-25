import Image from "next/image";
import React from "react";
import { Footer, Navbar } from "./";
import { Footerfn } from "./Footer";
import SideBar from "./SideBar";

interface LayoutProp {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProp) => {
  return (
    <div className="bg-[#FFF]">
      <Navbar />
      <div className="sm:pt-26 pt-24 bg-[#FFF]">{children}</div>
      {/* <div className="sm:pt-26 pt-24 bg-[#F5F5F5]">{children}</div> */}
      <Footerfn />
    </div>
  );
};

export const LayoutFn = ({ children }: LayoutProp) => {
  return (
    <div className="bg-[#FFF]">
      <Navbar />
      <div className="sm:pt-26 pt-24 bg-[#FFF]">{children}</div>
      <Footer />
    </div>
  );
};

export const DashboardLayout = ({ children }: LayoutProp) => {
  return (
    <div className="flex h-screen bg-[#fff] ">
      <SideBar />
      <div className="sm:pt-6 pt-12 sm:px-6 px-2 w-full bg-[#FFF]">
        <Image
          src={"/logo2.jpg"}
          alt="logo"
          width={100}
          height={100}
          className="bg-contain md:mb-8 md-4"
        />
        {children}
      </div>
    </div>
  );
};

export default Layout;
