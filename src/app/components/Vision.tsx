import React from "react";

function Vision() {
  return (
    <>
      <section
        className="text-white bg-black body-font h-screen bg-contain bg-no-repeat"
        style={{
          backgroundImage: "url('/assets/images/backgrounds/vision.png')",
        }}
      >
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className=" h-full md:w-1/2 w-5/6 mb-10 md:mb-0"></div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 py-10 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium font-space">
              OUR VISION
            </h1>
            <p className="mb-8 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime ad
              dignissimos voluptatem odit dolore laudantium, voluptatum dolores
              in consectetur nulla nam magni reprehenderit odio, impedit
              placeat, neque iste. Maiores, enim.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Vision;
