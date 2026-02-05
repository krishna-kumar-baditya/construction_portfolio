"use client";

import React from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import FloatingQuoteButton from "@/components/ui/floating-quote-button";
import { HardHat, Settings, Building2, Truck, Cog, Zap } from "lucide-react";

const serviceDetails = [
  {
    title: "Civil Engineering",
    id: "civil",
    icon: Building2,
    description: "Our civil engineering division specializes in large-scale infrastructure projects, providing robust solutions that stand the test of time.",
    features: [
      "Structural Design & Analysis",
      "Urban Infrastructure Planning",
      "Bridge & Highway Construction",
      "Water Resource Management",
      "Geotechnical Engineering"
    ],
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&q=80&w=1000"
  },
  {
    title: "Mechanical Engineering",
    id: "mechanical",
    icon: Cog,
    description: "We deliver advanced mechanical systems and industrial automation solutions designed for peak efficiency and sustainability.",
    features: [
      "Industrial Plant Design",
      "HVAC & Plumbing Systems",
      "Automation & Robotics",
      "Renewable Energy Systems",
      "Process Optimization"
    ],
    image: "https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?auto=format&fit=crop&q=80&w=1000"
  },
  {
    title: "Project Management",
    id: "management",
    icon: HardHat,
    description: "Comprehensive management services that ensure your project is completed on time, within budget, and to the highest quality standards.",
    features: [
      "Strategic Planning",
      "Budgeting & Cost Control",
      "Quality Assurance",
      "Risk Management",
      "Stakeholder Coordination"
    ],
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=1000"
  }
];

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-[103px]">
        {/* Hero */}
          <section className="bg-black py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-5xl md:text-7xl font-black text-white mb-6"
              >
                OUR <span className="text-[#F2913F]">SERVICES</span>
              </motion.h1>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Delivering precision-engineered solutions across multiple disciplines.
              </p>
            </div>
          </section>
  
          {/* Details */}
          <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-32">
              {serviceDetails.map((service, index) => (
                <div
                  key={service.id}
                  id={service.id}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${
                    index % 2 !== 0 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  <motion.div
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className={index % 2 !== 0 ? "lg:order-2" : ""}
                  >
                    <service.icon className="text-[#F2913F] w-16 h-16 mb-8" />
                    <h2 className="text-4xl font-extrabold text-gray-900 mb-6">{service.title}</h2>
                    <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                      {service.description}
                    </p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-3 text-gray-800 font-bold">
                          <Zap className="text-[#F2913F] w-5 h-5" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <a
                      href="/contact"
                      className="inline-block bg-black text-white px-8 py-4 rounded-full font-bold hover:bg-[#F2913F] hover:text-white transition-all duration-300"
                    >
                      Request Consultation
                    </a>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className={`relative aspect-video rounded-3xl overflow-hidden shadow-2xl ${
                      index % 2 !== 0 ? "lg:order-1" : ""
                    }`}
                  >
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                </div>
              ))}
            </div>
          </section>
  
          {/* CTA */}
          <section className="py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <div className="bg-[#F2913F] p-12 md:p-20 rounded-[40px] shadow-2xl">
                <h2 className="text-4xl md:text-5xl font-black text-white mb-8">
                  Ready to Start Your Project?
                </h2>
                <p className="text-xl text-white/80 font-medium mb-12 max-w-2xl mx-auto">
                  Consult with our experts today and see how EVERGREEN can bring your vision to life with technical excellence.
                </p>
                <a
                  href="/contact"
                  className="bg-black text-white px-12 py-5 rounded-full font-black text-lg hover:bg-gray-900 transition-all duration-300"
                >
                  Get a Quote Now
                </a>
              </div>
            </div>
          </section>
      </main>
      <Footer />
      <FloatingQuoteButton />
    </div>
  );
}
