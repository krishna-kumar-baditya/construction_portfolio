"use client";

import React from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import FloatingQuoteButton from "@/components/ui/floating-quote-button";
import { Target, Users, Leaf, History } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-[103px]">
        {/* Hero Section */}
        <section className="relative py-24 bg-black overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-5xl md:text-7xl font-black text-white mb-6"
              >
                ABOUT <span className="text-[#F2913F]">US</span>
              </motion.h1>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Leading the transition towards sustainable and innovative infrastructure management.
              </p>
            </div>
            <div className="absolute top-0 right-0 w-1/2 h-full opacity-20 pointer-events-none">
              <div className="w-full h-full bg-gradient-to-l from-[#F2913F] to-transparent" />
            </div>
          </section>
  
          {/* History Section */}
          <section id="history" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center gap-4 mb-6 text-[#F2913F]">
                    <History size={32} />
                    <h2 className="text-2xl font-bold uppercase tracking-widest">Our History</h2>
                  </div>
                  <h3 className="text-4xl font-extrabold text-gray-900 mb-6">
                    A Legacy of Engineering Excellence
                  </h3>
                    <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                      Founded in 1999, Evergreen Management Consultants LLP began with a vision to revolutionize the engineering landscape in India. What started as a small consulting firm has grown into a multi-disciplinary powerhouse, delivering major infrastructure projects across the globe.
                    </p>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Over the decades, we have evolved with the industry, embracing digital transformation and sustainable practices to ensure our solutions are not just effective today, but resilient for tomorrow.
                  </p>
                </motion.div>
                <div className="relative">
                  <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl">
                    <img
                      src="https://images.unsplash.com/photo-1503387762-592dea58ef23?auto=format&fit=crop&q=80&w=1000"
                      alt="Engineering Legacy"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
  
          {/* Mission & Vision */}
          <section id="mission" className="py-24 bg-gray-900 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-gray-800 p-12 rounded-3xl"
                >
                  <Target className="text-[#F2913F] w-16 h-16 mb-8" />
                  <h3 className="text-3xl font-bold mb-6">Our Mission</h3>
                  <p className="text-xl text-gray-400 leading-relaxed">
                    To provide innovative, sustainable, and cost-effective engineering solutions that empower communities and drive global progress through technical excellence.
                  </p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="bg-[#F2913F] p-12 rounded-3xl text-black"
                >
                  <Users className="w-16 h-16 mb-8" />
                  <h3 className="text-3xl font-bold mb-6">Our Vision</h3>
                  <p className="text-xl font-medium leading-relaxed">
                    To be the global leader in infrastructure management, recognized for our commitment to sustainability, innovation, and the highest standards of integrity.
                  </p>
                </motion.div>
              </div>
            </div>
          </section>
  
          
      </main>
      <Footer />
      <FloatingQuoteButton />
    </div>
  );
}
