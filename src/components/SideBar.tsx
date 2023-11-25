import Link from "next/link";
import React from "react";
import { FaTrash } from "react-icons/fa";
import { MdPostAdd } from "react-icons/md";
import { BsFilePost } from "react-icons/bs";

const SideBar = () => {
  return (
    <div className="bg-primary h-full flex p-10 text-white">
      <div className="flex flex-col text-center items-center p-8 font-poppins">
        <Link
          href="/admin/dashboard/add-post"
          className="my-10 flex flex-col items-center "
        >
          <MdPostAdd className="mb-2 text-3xl" />
          Add Post
        </Link>
        <Link
          href="/admin/dashboard"
          className="mb-10 flex flex-col items-center"
        >
          <BsFilePost className="mb-2 text-2xl" />
          All Post
        </Link>
        <Link
          href="/admin/dashboard/bin"
          className="mb-10 flex flex-col items-center"
        >
          <FaTrash className="mb-2 text-2xl" />
          Bin
        </Link>
      </div>
    </div>
  );
};

export default SideBar;
