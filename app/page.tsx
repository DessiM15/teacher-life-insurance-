import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import RealityBar from "@/components/sections/RealityBar";
import WhyTeachers from "@/components/sections/WhyTeachers";
import WhoIsItFor from "@/components/sections/WhoIsItFor";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <RealityBar />
      <WhyTeachers />
      <WhoIsItFor />
      <div id="coverage" />
    </>
  );
}
