"use client";

import Navbar from "@/components/sections/navbar";
import HeroSection from "@/components/sections/hero";
import CompanyIntro from "@/components/sections/company-intro";
import ServicesSnapshot from "@/components/sections/services-snapshot";
import ProjectsSlider from "@/components/sections/projects-slider";
import NationwidePresence from "@/components/sections/nationwide-presence";
import { Footer } from "@/components/sections/footer";
import FloatingQuoteButton from "@/components/ui/floating-quote-button";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <CompanyIntro />
        <ServicesSnapshot />
        <ProjectsSlider />
        <NationwidePresence />
      </main>
      <Footer />
      <FloatingQuoteButton />
    </div>
  );
}
