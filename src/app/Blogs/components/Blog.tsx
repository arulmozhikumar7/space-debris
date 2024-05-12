import React from "react";
import Image from "next/image";
function Blogs() {
  return (
    <>
      <section className="text-white bg-black body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="w-full flex justify-center items-center mb-16 font-space text-2xl">
            <h1>EXPLORE OUR BLOGS</h1>
          </div>
          <div className="flex flex-wrap -m-4">
            <div className="p-4 md:w-1/3">
              <div className="h-[90%] border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <Image
                  className="lg:h-48 md:h-36 w-full object-cover object-center"
                  src="/assets/images/backgrounds/blog-1.jpg"
                  alt="blog"
                  width={100}
                  height={100}
                />
                <div className="p-6 bg-white text-black w-full">
                  <h1 className="tracking-widest text-sm title-font font-medium  mb-1">
                    Unveiling Celestial Secrets: The Mission of Debris Collector
                  </h1>
                  <h2 className="title-font text-sm font-medium text-gray-400 mb-3">
                    Kiran Agarwal
                  </h2>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3">
              <div className="h-[90%] border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <Image
                  className="lg:h-48 md:h-36 w-full object-cover object-center"
                  src="/assets/images/backgrounds/blog-1.jpg"
                  alt="blog"
                  width={100}
                  height={100}
                />
                <div className="p-6 bg-white text-black w-full">
                  <h1 className="tracking-widest text-sm title-font font-medium  mb-1">
                    Unveiling Celestial Secrets: The Mission of Debris Collector
                  </h1>
                  <h2 className="title-font text-sm font-medium text-gray-400 mb-3">
                    Kiran Agarwal
                  </h2>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3">
              <div className="h-[90%] border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <Image
                  className="lg:h-48 md:h-36 w-full object-cover object-center"
                  src="/assets/images/backgrounds/blog-1.jpg"
                  alt="blog"
                  width={100}
                  height={100}
                />
                <div className="p-6 bg-white text-black w-full">
                  <h1 className="tracking-widest text-sm title-font font-medium  mb-1">
                    Unveiling Celestial Secrets: The Mission of Debris Collector
                  </h1>
                  <h2 className="title-font text-sm font-medium text-gray-400 mb-3">
                    Kiran Agarwal
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Blogs;
