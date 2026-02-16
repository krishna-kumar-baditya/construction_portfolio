"use client";

import HeroSection from "@/components/sections/hero";
import CompanyIntro from "@/components/sections/company-intro";
import ServicesSnapshot from "@/components/sections/services-snapshot";
import NationwidePresence from "@/components/sections/nationwide-presence";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="grow">
        <HeroSection />
        <CompanyIntro />
        <ServicesSnapshot />
        <NationwidePresence />
      </main>
    </div>
  );
}
