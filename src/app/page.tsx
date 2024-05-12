import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Mission from "./components/Mission";
import Vision from "./components/Vision";
import Blog from "./components/Blog";
import Subscribe from "./components/Subscribe";
import Footer from "./components/Footer";
export default function Home() {
  return (
    <>
      <div
        style={{
          backgroundImage: "url('/assets/images/backgrounds/Hero.jpg')",
        }}
        className=" bg-cover  bg-center bg-no-repeat h-screen"
      >
        <Navbar />
        <Hero />
      </div>
      <Mission />
      <Vision />
      <Blog />
      <Subscribe />
      <Footer />
    </>
  );
}
