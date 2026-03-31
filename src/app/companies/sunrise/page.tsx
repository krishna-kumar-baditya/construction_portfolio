"use client";

import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, History } from "lucide-react";

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
                            className="text-5xl md:text-7xl font-black text-white mb-6 uppercase"
                        >
                            Sunrise Movers{" "}
                            <span className="text-[#F2913F] ml-2">
                                & Logistics
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
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 text-justify items-center">
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                            >
                                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                                    For over 20 years, we have been
                                    providing seamless end-to-end raw material
                                    logistics solutions of almost 2 lacs MT bulk
                                    raw materials every month that power
                                    industries and communities in the Durgapur
                                    industrial belt. From bulk rail consignments
                                    to last-mile delivery, our operations are
                                    designed to minimize transit time, reduce
                                    handling losses, and maintain product
                                    quality until it reaches its destination.
                                    Whether serving large-scale power plants or
                                    smaller industrial units, our mission is to
                                    keep the operations running smoothly by
                                    ensuring a steady and dependable bulk
                                    material movement by leveraging advanced
                                    scheduling systems, GPS-enabled tracking
                                    etc. Our proven track record has made us a
                                    trusted partner in the industry serving them
                                    from various railway sidings and ports
                                    through our inhouse fleet of all necessary
                                    equipment, heavy machinery and tippers. We
                                    also operate a BPCL petrol pump and are
                                    authorized dealers of BPCL MAK Lubricants
                                    and BKT, Apollo & JK Tyres.{" "}
                                </p>
                            </motion.div>
                            <div className="relative">
                                <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl">
                                    <img
                                        src="/companies/SUNRISE_MOVERS_PAGE.jpeg"
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
