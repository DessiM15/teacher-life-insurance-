import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      {/* pt-20 spacer for content sections below the hero to clear the fixed navbar */}
      <div className="pt-20" id="coverage" />
    </>
  );
}
