import React from "react";

function Hero() {
  return (
    <>
      <section className="font-space body-font">
        <div className="container mx-auto flex px-5 py-36 items-center justify-center flex-col">
          <div className="text-center  w-full">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
              JOIN THE CELESTIAL REVOLUTION
              <br className="hidden lg:inline-block" />
              <span className="text-amber-500"> DEBRIS COLLECTOR&apos;S</span>
              STELLAR SQUAD
            </h1>
            <p className="mb-8 text-white leading-relaxed">
              JOIN US IN CRAFTING A CLEANER , SAFER UNIVERSE
            </p>
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-gray-300 bg-opacity-15  border-[1px] border-white py-2 px-10  rounded text-sm">
                DISCOVER MORE
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
