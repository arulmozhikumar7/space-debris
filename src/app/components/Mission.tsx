import React from "react";

function Mission() {
  return (
    <>
      <section
        className="text-white body-font bg-black"
        style={{
          backgroundImage: "url('/assets/images/backgrounds/Mission.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-full lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white font-space w-full">
              STEP INTO THE COSMOS WITH DEBRIS COLLECTOR
            </h1>
            <p className="my-8 leading-relaxed">
              Copper mug try-hard pitchfork pour-over freegan heirloom neutra
              air plant cold-pressed tacos poke beard tote bag. Heirloom echo
              park mlkshk tote bag selvage hot chicken authentic tumeric
              truffaut hexagon try-hard chambray.
            </p>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6"></div>
        </div>
      </section>
    </>
  );
}

export default Mission;
