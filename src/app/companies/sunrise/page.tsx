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
                            className="text-5xl md:text-7xl font-black text-white mb-6"
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
                                    Our logistics division handles approximately
                                    2 lacs MT of bulk raw materials every month,
                                    such as iron ore, manganese ore, and coal
                                    for all the major factories in the Durgapur
                                    belt. Our proven track record has made us a
                                    trusted partner in the industry serving them
                                    from various railway sidings and ports
                                    through our inhouse fleet of all necessary
                                    machinery, equipments and tippers. We have a
                                    BPCL petrol pump and are authorized dealers
                                    of BPCL MAK Lubricants and BKT, Appolo & JK
                                    Tyres.{" "}
                                </p>
                                <a
                                    href="https://sunrisemovers.in/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="
                                      relative inline-flex items-center justify-center
                                      px-8 py-3
                                      text-sm font-semibold tracking-wide
                                      border-2 border-[#F2913F]
                                      text-[#F2913F]
                                      rounded-full
                                      overflow-hidden
                                      transition-all duration-300 ease-in-out
                                      hover:text-white
                                      group
                                    "
                                >
                                    <span className="relative z-10 mr-2">
                                        Visit Our Website
                                    </span>
                                        <ExternalLink/>

                                    {/* Sliding Background */}
                                    <span
                                        className="
                                          absolute inset-0
                                          bg-[#F2913F]
                                          translate-y-full
                                          group-hover:translate-y-0
                                          transition-transform duration-300 ease-in-out
                                        "
                                    />
                                </a>
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
