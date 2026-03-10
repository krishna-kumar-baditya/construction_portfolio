"use client";

import React from "react";
import { motion } from "framer-motion";
import { Target, Users, Leaf, History } from "lucide-react";

export default function AboutPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <main className="grow">
                {/* Hero Section */}
                <section className="relative py-38 bg-black overflow-hidden">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-5xl md:text-7xl font-black text-white mb-6"
                        >
                            JR{" "}
                            <span className="text-[#F2913F] ml-2">
                                AGRITECH
                            </span>
                        </motion.h1>
                    </div>
                    <div className="absolute top-0 right-0 w-1/2 h-full opacity-20 pointer-events-none">
                        <div className="w-full h-full bg-linear-to-l from-[#F2913F] to-transparent" />
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
                                <p className="text-lg text-gray-600 mb-6 text-justify leading-relaxed">
                                    Our state-of-the-art cold storage facility
                                    in Aligarh, Uttar Pradesh, is spread across
                                    4 acres, featuring 75,000 sq. ft.
                                    temperature-controlled storage shed.
                                    Designed for efficiency and reliability, the
                                    facility provides cost-effective butter
                                    storage solutions at -20°C, with a total
                                    storage capacity exceeding 6,500 metric
                                    tonnes (MT). We proudly serve leading dairy
                                    brands such as Mother Dairy and Bhole Baba
                                    Dairy, ensuring strict temperature control,
                                    quality preservation, and dependable
                                    logistics support. As part of our expansion
                                    strategy, we are currently in the process of
                                    establishing a modern pea processing plant
                                    within the same premises. Furthermore, we
                                    have future plans to set up a paneer
                                    processing unit, strengthening our footprint
                                    in the food processing and cold chain
                                    industry. With advanced infrastructure and
                                    scalable capacity, we are positioned as a
                                    reliable cold storage and food processing
                                    partner in Uttar Pradesh.
                                </p>
                            </motion.div>
                            <div className="relative">
                                <div className="aspect-videow-137.5 h-112.5 rounded-2xl overflow-hidden shadow-2xl">
                                    <img
                                        src="/companies/J_R_Agritech.jpeg"
                                        alt="Engineering Legacy"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Mission & Vision */}
            </main>
        </div>
    );
}
