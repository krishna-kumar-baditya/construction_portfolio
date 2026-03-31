"use client";

import React from "react";
import { motion } from "framer-motion";
import { Target, Users, History } from "lucide-react";

export default function AboutPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <main className="grow ">
                {/* Hero Section */}
                <section className="relative py-38 bg-black overflow-hidden">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-5xl md:text-7xl font-black text-white mb-6"
                        >
                            EVERGREEN CONSTRUCTION DURGAPUR
                            <br />
                            <span className="text-[#F2913F] ml-2">
                                PVT. LTD.
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
                                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                                    Established in the 1970s, we are a trusted
                                    industrial and commercial construction
                                    company in West Bengal, delivering
                                    comprehensive civil construction services
                                    across Eastern India. Our expertise includes
                                    land development and layout planning,
                                    structural designing, and complete civil
                                    construction solutions for factories,
                                    warehouses, processing plants, and
                                    commercial buildings. With a fully
                                    integrated in-house setup of advanced
                                    machinery, skilled manpower, and modern
                                    equipment, we ensure seamless project
                                    execution from concept to completion. We are
                                    committed to delivering high-quality
                                    construction projects within strict
                                    timelines, maintaining the highest standards
                                    of safety, durability, and engineering
                                    excellence. Over the decades, this
                                    dedication has positioned us as a preferred
                                    construction partner for leading industries
                                    in the region.
                                </p>
                            </motion.div>
                            {/* <div className="relative "> */}
                                <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                                    <img
                                        src="/companies/ECPL_PAGE.png"
                                        alt="Engineering Legacy"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            {/* </div> */}
                        </div>
                    </div>
                </section>

                {/* Mission & Vision */}
            </main>
        </div>
    );
}
