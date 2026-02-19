"use client";

import React from "react";
import { motion } from "framer-motion";

export default function CorporatePolicyPage() {
    return (
        <div className="flex flex-col bg-[#F3F4F6] min-h-screen">
            <main className="grow">

                {/* ================= HERO SECTION ================= */}
                <section className="relative py-28 bg-black overflow-hidden">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white"
                        >
                            CORPORATE <span className="text-[#F2913F]">POLICY</span>
                        </motion.h1>

                        <p className="text-gray-400 mt-6 max-w-3xl mx-auto text-lg">
                            Our commitment to quality, safety, sustainability, and ethical engineering excellence.
                        </p>
                    </div>

                    {/* Accent Gradient */}
                    <div className="absolute top-0 right-0 w-1/2 h-full opacity-20 pointer-events-none">
                        <div className="w-full h-full bg-gradient-to-l from-[#F2913F] to-transparent" />
                    </div>
                </section>

                {/* ================= INTRO SECTION ================= */}
                <section className="py-16">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-white p-10 rounded-2xl shadow-sm border border-gray-200"
                        >
                            <h2 className="text-3xl font-bold text-[#0B1B3A] mb-6">
                                Our Commitment
                            </h2>

                            <p className="text-gray-700 text-lg leading-relaxed">
                                At Evergreen Group of Companies, we are committed to delivering
                                reliable, sustainable, and high-quality civil and mechanical
                                engineering solutions. Our operations are guided by integrity,
                                safety, structured management systems, and continuous improvement.
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* ================= POLICY CARDS ================= */}
                <section className="pb-20">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6">
                        <div className="space-y-12">

                            {/* QUALITY POLICY */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="bg-white border border-gray-200 rounded-xl p-10 shadow-sm hover:shadow-lg transition-all duration-300 relative"
                            >
                                <div className="absolute left-0 top-0 h-full w-1 bg-[#0B1B3A]" />

                                <h3 className="text-2xl font-bold text-[#0B1B3A] mb-4">
                                    Quality Commitment (ISO 9001)
                                </h3>

                                <ul className="space-y-3 text-gray-700 text-lg leading-relaxed">
                                    <li>• Consistent delivery of high-quality engineering services</li>
                                    <li>• Client satisfaction through structured and measurable processes</li>
                                    <li>• Continuous improvement in operational performance and efficiency</li>
                                    <li>• Compliance with statutory and regulatory requirements</li>
                                </ul>

                                <p className="mt-6 text-gray-700">
                                    Quality is embedded at every stage of our projects — from planning to execution.
                                </p>
                            </motion.div>

                            {/* HSE POLICY */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                className="bg-white border border-gray-200 rounded-xl p-10 shadow-sm hover:shadow-lg transition-all duration-300 relative"
                            >
                                <div className="absolute left-0 top-0 h-full w-1 bg-[#F2913F]" />

                                <h3 className="text-2xl font-bold text-[#0B1B3A] mb-4">
                                    Health, Safety & Environmental Policy  
                                    <span className="text-sm block mt-1 text-gray-500">
                                        (ISO 45001 & ISO 14001)
                                    </span>
                                </h3>

                                <ul className="space-y-3 text-gray-700 text-lg leading-relaxed">
                                    <li>• Maintaining a safe and healthy work environment</li>
                                    <li>• Preventing workplace injuries and incidents</li>
                                    <li>• Minimizing environmental impact</li>
                                    <li>• Promoting sustainable engineering practices</li>
                                    <li>• Conducting regular risk assessments and safety training</li>
                                </ul>

                                <p className="mt-6 text-gray-700">
                                    Our objective is zero harm and responsible environmental stewardship.
                                </p>
                            </motion.div>

                            {/* ETHICS POLICY */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="bg-white border border-gray-200 rounded-xl p-10 shadow-sm hover:shadow-lg transition-all duration-300 relative"
                            >
                                <div className="absolute left-0 top-0 h-full w-1 bg-[#0B1B3A]" />

                                <h3 className="text-2xl font-bold text-[#0B1B3A] mb-4">
                                    Ethics & Compliance
                                </h3>

                                <ul className="space-y-3 text-gray-700 text-lg leading-relaxed">
                                    <li>• Upholding ethical standards in all dealings</li>
                                    <li>• Ensuring fair and transparent subcontractor partnerships</li>
                                    <li>• Protecting confidential information</li>
                                    <li>• Maintaining compliance with applicable laws and regulations</li>
                                </ul>

                                <p className="mt-6 text-gray-700">
                                    Trust, accountability, and integrity define our corporate culture.
                                </p>
                            </motion.div>

                            {/* WORKFORCE RESPONSIBILITY */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 }}
                                className="bg-white border border-gray-200 rounded-xl p-10 shadow-sm hover:shadow-lg transition-all duration-300 relative"
                            >
                                <div className="absolute left-0 top-0 h-full w-1 bg-[#F2913F]" />

                                <h3 className="text-2xl font-bold text-[#0B1B3A] mb-4">
                                    Workforce & Partner Responsibility
                                </h3>

                                <ul className="space-y-3 text-gray-700 text-lg leading-relaxed">
                                    <li>• Providing equal opportunity and professional development</li>
                                    <li>• Enforcing strict quality and safety standards</li>
                                    <li>• Building long-term, performance-based partnerships</li>
                                </ul>
                            </motion.div>

                        </div>
                    </div>
                </section>

                {/* ================= CLOSING SECTION ================= */}
                <section className="bg-[#0B1B3A] py-20">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center text-white">
                        <h2 className="text-3xl text-white sm:text-4xl font-extrabold mb-6">
                            Engineering Excellence Through Responsible Governance
                        </h2>

                        <p className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed">
                            Evergreen Group of Companies is dedicated to sustainable growth,
                            structured management systems, and delivering long-term value
                            to clients and communities — guided by internationally recognized
                            ISO management principles.
                        </p>
                    </div>
                </section>

            </main>
        </div>
    );
}
