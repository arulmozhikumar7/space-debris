import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <header className="bg-transparent body-font flex justify-center items-center font-space text-sm fixed top-0 w-full z-10">
        <div className="flex-col justify-center items-center p-1">
          <a className="flex order-first title-font font-medium items-center lg:items-center lg:justify-center mb-4 md:mb-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="ml-3 text-xl text-white">SPACE DEBRIS</span>
          </a>
          <nav className="flex p-2 flex-row items-center text-base md:ml-auto text-white">
            <Link href={"/"} className="mr-8 text-amber-400 ">
              HOME
            </Link>
            <Link href={"/About"} className="mr-8 ">
              ABOUT
            </Link>
            <Link href={"/Blogs"} className="mr-8 ">
              BLOGS
            </Link>
            <Link href={"/Contact-us"} className="mr-8">
              CONTACT US
            </Link>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navbar;
