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
                            className="text-5xl md:text-7xl font-black text-white mb-6 uppercase"
                        >
                            SSky High{" "}
                            <span className="text-[#F2913F] ml-2">
                                Pioneer Concrete LLP
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
                                    Ready Mix Concrete (RMC) Manufacturer in
                                    Kolkata Our Ready Mix Concrete (RMC)
                                    division in Kolkata specializes in
                                    delivering high-quality concrete solutions
                                    for residential, commercial, and industrial
                                    construction projects. With a production
                                    capacity of approximately 3,500 cubic meters
                                    per month, we ensure timely supply and
                                    consistent quality for diverse construction
                                    requirements.
                                </p>
                                <p className="text-lg text-gray-600 mb-4 font-semibold">
                                    We manufacture a wide range of concrete
                                    products, including:
                                </p>
                                <ul className="list-disc pl-6 text-lg text-gray-600 space-y-2 mb-6">
                                    <li>Standard Grade RMC (M20 to M40)</li>
                                    <li>
                                        High Strength Concrete (M45 and above)
                                    </li>
                                    <li>Self-Compacting Concrete (SCC)</li>
                                    <li>Fibre Reinforced Concrete (FRC)</li>
                                </ul>
                                <p className="text-lg text-gray-600 leading-relaxed">
                                    Our advanced infrastructure includes a
                                    Schwing Stetter batching plant and concrete
                                    pumps, modern transit mixers, high-capacity
                                    cement silos, a state-of-the-art quality
                                    control laboratory, and an Essae weighbridge
                                    for precise material measurement. With
                                    modern equipment, strict quality testing,
                                    and efficient logistics, we are recognized
                                    as a reliable RMC supplier in Kolkata,
                                    delivering durable and high-performance
                                    concrete solutions.
                                </p>{" "}
                            </motion.div>
                            <div className="relative">
                                <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl">
                                    <img
                                        src="/companies/ssky_high.jpeg"
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
