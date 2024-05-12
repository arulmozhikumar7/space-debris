import React from "react";

function Subscribe() {
  return (
    <>
      <section className=" body-font bg-black font-space ">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
              SUBSCRIBE TO OUR{" "}
              <span className="text-amber-400">NEWSLETTER</span>
            </h1>
            <p className="w-[45%] mx-auto leading-relaxed text-base font-sans text-white">
              Be the first to know : Dive into Cosmic Updates and Offers!
              Subscribe Today.
            </p>
          </div>
          <div className="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-center justify-center">
            <div className="relative flex w-[80%]">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email addresss"
                className="w-full  bg-opacity-5 bg-gray-200  rounded-3xl border-[2px] border-red-600  text-base outline-none text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />{" "}
              <button className="text-white absolute right-0 bg-amber-400 border-0 py-2 px-8 focus:outline-none rounded-3xl text-lg ">
                SUBSCRIBE
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Subscribe;
