"use client";

import React from "react";
import { motion } from "framer-motion";
import { Target, Users, Leaf, History } from "lucide-react";
import ConstructionProjectsTable from "@/components/about/ConstructionProjectsTable";

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
                            ABOUT <span className="text-[#F2913F]">US</span>
                        </motion.h1>
                        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                            Leading the transition towards sustainable and
                            innovative infrastructure management.
                        </p>
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
                                <h3 className="text-4xl font-extrabold text-gray-900 mb-6">
                                    A Legacy of Engineering Excellence
                                </h3>
                                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                                    Evergreen Group is one of the oldest and
                                    leading business names in Asansol-Durgapur
                                    industrial belt. Established in 1988, we
                                    have over three decades of expertise in
                                    civil, structural and production contracts.
                                </p>
                                <p className="text-lg text-gray-600 leading-relaxed">
                                    We also undertake raw material
                                    transportation & handling and have our own
                                    complete machinery fleet ranging from Hydra,
                                    Loaders, JCB, Poclain and Tippers. Over the
                                    years, we have undertaken many challenging
                                    projects across Eastern & Central India and
                                    have accumulated skills, know-how the
                                    experiences in building solutions, project
                                    management services, building trades and
                                    related engineering works.{" "}
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
                <section id="mission" className="py-24 bg-gray-900 text-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="bg-gray-800 p-12 rounded-3xl"
                            >
                                <Target className="text-[#F2913F] w-16 h-16 mb-8" />
                                <h3 className="text-[#F2913F] text-3xl font-bold mb-6">
                                    Our Mission
                                </h3>
                                <p className="text-xl text-gray-400 leading-relaxed">
                                    To provide quality workmanship and customer
                                    service and maintain the highest level of
                                    professionalism, honesty and fairness in our
                                    relationships with our customers, employees
                                    and vendors.{" "}
                                </p>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="bg-[#F2913F] p-12 rounded-3xl text-black"
                            >
                                <Users className="w-16 h-16 mb-8" />
                                <h3 className="text-3xl font-bold mb-6">
                                    Our Vision
                                </h3>
                                <p className="text-xl font-medium leading-relaxed">
                                    To be the leading provider of industrial and
                                    commercial construction services in the
                                    region, known for our commitment to quality
                                    and customer satisfaction. To grow
                                    continually by providing useful and
                                    significant services and solutions to
                                    markets we already serve and to expand into
                                    new areas that build on our competencies and
                                    customer interests.{" "}
                                </p>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* <section id="construction-projects-table">
                    <ConstructionProjectsTable/>
                </section> */}


                {/* Sustainability */}
                <section id="sustainability" className="py-24 bg-gray-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="bg-white rounded-[40px] shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-2">
                            <div className="p-12 md:p-20">
                                <Leaf className="text-[#F2913F] w-16 h-16 mb-8" />
                                <h3 className="text-4xl font-extrabold text-gray-900 mb-6">
                                    Commitment to Sustainability
                                </h3>
                                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                    At Evergreen, sustainability is not just a
                                    buzzword; it's the core of our engineering
                                    philosophy. We prioritize eco-friendly
                                    materials, energy-efficient designs, and
                                    construction practices that minimize
                                    environmental impact.
                                </p>
                                <ul className="space-y-4">
                                    {[
                                        "Green Building Practices",
                                        "Renewable Energy Integration",
                                        "Waste Management Solutions",
                                        "Eco-friendly Materials",
                                    ].map((item) => (
                                        <li
                                            key={item}
                                            className="flex items-center gap-3 text-gray-700 font-bold"
                                        >
                                            <div className="w-2 h-2 bg-[#F2913F] rounded-full" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="relative h-64 lg:h-auto">
                                <img
                                    src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=1000"
                                    alt="Sustainability"
                                    className="absolute inset-0 w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}
