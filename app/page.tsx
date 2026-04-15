import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="pt-20">
        <Hero />
      </div>
      <div id="coverage" />
    </>
  );
}
