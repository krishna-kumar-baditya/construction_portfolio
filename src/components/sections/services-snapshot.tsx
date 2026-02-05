"use client";

import React from "react";
import { motion } from "framer-motion";
import { HardHat, Settings, ShieldCheck, Zap } from "lucide-react";

const services = [
  {
    title: "Civil Engineering",
    description: "End-to-end infrastructure solutions, from structural design to large-scale construction management.",
    icon: HardHat,
    link: "/services/civil"
  },
  {
    title: "Mechanical Engineering",
    description: "Advanced mechanical systems, industrial automation, and sustainable energy solutions.",
    icon: Settings,
    link: "/services/mechanical"
  },
  {
    title: "Project Management",
    description: "Strategic planning and execution of complex engineering projects with a focus on efficiency.",
    icon: ShieldCheck,
    link: "/services"
  },
  {
    title: "Consulting",
    description: "Technical advisory and feasibility studies for global infrastructure developments.",
    icon: Zap,
    link: "/services"
  }
];

export default function ServicesSnapshot() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-sm font-bold text-[#F2913F] uppercase tracking-widest mb-4"
            >
              Our Expertise
            </motion.h2>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-4xl font-extrabold text-gray-900"
            >
              Comprehensive Engineering Solutions
            </motion.h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group"
              >
                <div className="w-14 h-14 bg-gray-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#F2913F] hover:text-white transition-colors duration-300">
                  <service.icon className="w-8 h-8 text-[#F2913F] group-hover:text-white transition-colors duration-300" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h4>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <a
                  href={service.link}
                  className="text-[#F2913F] font-bold inline-flex items-center gap-2 hover:gap-4 transition-all duration-300"
                >
                  Learn More <span>→</span>
                </a>
              </motion.div>
            ))}
          </div>
      </div>
    </section>
  );
}
