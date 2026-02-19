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
                            <span className="text-[#F2913F] ml-2">AGRITECH</span>
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
                                <div className="flex items-center gap-4 mb-6 text-[#F2913F]">
                                    <History size={32} />
                                    <h2 className="text-2xl font-bold uppercase tracking-widest">
                                        Our History
                                    </h2>
                                </div>
                                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                                    Our facility is spread across 4 acres,
                                    having a cold storage shed area of 75000
                                    sqft in Aligarh, Uttar Pradesh. It provides
                                    cost-effective butter storage facilities
                                    under -20 ºC of more than 6500 MT for major
                                    clients like Mother Dairy and Bhole Baba
                                    Dairy. We are in the process of setting up a
                                    pea processing plant in the same unit and
                                    further plan to set up a paneer processing
                                    unit in future.{" "}
                                </p>
                            </motion.div>
                            <div className="relative">
                                <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl">
                                    <img
                                        src="https://images.unsplash.com/photo-1694521787162-5373b598945c?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
