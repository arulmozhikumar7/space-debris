import React from "react";
import Subscribe from "../components/Subscribe";
import Navbar from "./components/Navbar";
import Footer from "../components/Footer";
function Contact() {
  return (
    <div className="font-space h-screen bg-black">
      <Navbar />
      <br />
      <div className="fixed top-[10%] w-full">
        <Subscribe />
      </div>
      <div className="fixed bottom-0 w-full">
        <Footer />
      </div>
    </div>
  );
}

export default Contact;
