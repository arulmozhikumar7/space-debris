import React from "react";
import Navbar from "./components/Navbar";
import Blog from "./components/Blog";
import Subscribe from "../components/Subscribe";
import Footer from "../components/Footer";
function Blogs() {
  return (
    <div className="bg-black">
      <Navbar />
      <Blog />
      <Subscribe />
      <Footer />
    </div>
  );
}

export default Blogs;
