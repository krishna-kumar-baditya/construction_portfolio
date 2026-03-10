"use client";

import React from "react";
import { motion } from "framer-motion";
import { Target, Users, History } from "lucide-react";

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
                            EVERGREEN MANAGEMENT
                            <br />
                            <span className="text-[#F2913F] ml-2">
                                CONSULTANTS LLP
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
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center text-justify">
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                            >
                                <p className="text-lg text-gray-600 leading-relaxed">
                                    Over three decades of industry experience,
                                    we have established ourselves as a leading
                                    iron and steel industry operations company
                                    in West Bengal and Jharkhand. We specialize
                                    in managing end-to-end manufacturing
                                    operations for ferro alloys and foundry
                                    units, ensuring efficiency, productivity,
                                    and quality control at every stage.
                                    Currently, we oversee operations for nine
                                    ferro alloys and foundry manufacturing units
                                    across Eastern India. Our organization
                                    manages a workforce of more than 4,500
                                    skilled, semi-skilled, and unskilled
                                    professionals, supporting large-scale
                                    industrial production. On a monthly basis,
                                    we process over 20,000 metric tonnes (MT) of
                                    ferro alloys and 3,500 MT of foundry-grade
                                    metal, maintaining high production standards
                                    and timely output for industrial clients.
                                    Our operational expertise, manpower
                                    strength, and structured management approach
                                    have made us a trusted industrial operations
                                    partner in the iron and steel sector.
                                </p>
                            </motion.div>
                            <div className="relative">
                                <div className="w-137.5 h-120.5 rounded-2xl overflow-hidden shadow-2xl">
                                    <img
                                        src="/companies/EMCL_PAGE.jpeg"
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
