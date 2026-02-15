"use client";

import React from "react";
import { motion } from "framer-motion";
import { Target, Users, Leaf, History } from "lucide-react";

export default function AboutPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <main className="flex-grow pt-[103px]">
                {/* Hero Section */}
                <section className="relative py-24 bg-black overflow-hidden">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-5xl md:text-7xl font-black text-white mb-6"
                        >
                            Sky High{" "}
                            <span className="text-[#F2913F] ml-2">
                                Concrete
                            </span>
                        </motion.h1>
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
                                    <h2 className="text-2xl font-bold uppercase tracking-widest">
                                        Our History
                                    </h2>
                                </div>
                                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                                    Our Ready Mix Concrete division is based out
                                    of Kolkata and specializes in providing 3500
                                    m3/month ready-mix concrete solutions
                                    catering to various construction needs. We
                                    manufacture Standard RMC (M20-M40 grade),
                                    High Strength Concrete (M45 and above), Self
                                    Compacting Concrete (SCC), Fibre Reinforced
                                    Concrete etc. Our setup includes Schwing
                                    Stetter Batching plant and pumps, Transit
                                    mixers, cement silos, state of the art QC
                                    Lab, Essae Weigh Bridge etc.{" "}
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
