import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import StatsBar from "@/components/sections/StatsBar";
import WhyLifeInsurance from "@/components/sections/WhyLifeInsurance";
import CoverageOptions from "@/components/sections/CoverageOptions";
import WhoIsItFor from "@/components/sections/WhoIsItFor";
import HowItWorks from "@/components/sections/HowItWorks";
import Testimonials from "@/components/sections/Testimonials";
import LeadForm from "@/components/sections/LeadForm";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <StatsBar />
      <WhyLifeInsurance />
      <CoverageOptions />
      <WhoIsItFor />
      <HowItWorks />
      <Testimonials />
      <LeadForm />
      <Footer />
    </>
  );
}
