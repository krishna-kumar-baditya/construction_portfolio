"use client";

import React from "react";
import { motion } from "framer-motion";

export default function CompanyIntro() {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-sm font-bold text-[#F2913F] uppercase tracking-widest mb-4">
                            Our Legacy
                        </h2>
                        <h3 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
                            Driving Infrastructure <br />
                            <span className="text-[#F2913F]">
                                Excellence Since 1996
                            </span>
                        </h3>
                        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                            Established in 1996, Evergreen Group is a leading
                            name in the Asansol–Durgapur industrial belt, with
                            over three decades of expertise in civil,
                            structural, and production contracts. Backed by a
                            comprehensive in-house machinery fleet, we deliver
                            integrated industrial solutions and execute complex
                            projects across Eastern and Central India with
                            efficiency and reliability.
                            <br />
                            <br />
                            <cite className="not-italic font-semibold text-gray-800 block">
                                Founded by H.D. Bhattad &amp; G.D. Bhattad.
                            </cite>
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <a
                                href="/about"
                                className="bg-black text-white px-8 py-4 rounded-full font-bold hover:bg-[#F2913F] hover:text-white transition-all duration-300"
                            >
                                Learn More About Us
                            </a>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                            <img
                                src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt="Infrastructure Project Team"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="absolute -bottom-10 -left-10 bg-[#F2913F] p-8 rounded-2xl shadow-xl hidden md:block">
                            <div className="text-4xl font-black text-white mb-2">
                                50+
                            </div>
                            <div className="text-white font-bold uppercase tracking-wider text-sm">
                                Years of <br /> Engineering Mastery
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
