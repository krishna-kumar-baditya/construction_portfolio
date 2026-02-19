"use client";

import React from "react";
import { motion } from "framer-motion";

export default function PrivacyPolicyPage() {
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
                            PRIVACY <span className="text-[#F2913F]">POLICY</span>
                        </motion.h1>

                        <p className="text-gray-400 mt-6 max-w-3xl mx-auto text-lg">
                            Evergreen Group of Companies is committed to protecting
                            your privacy and ensuring the security of your personal information.
                        </p>
                    </div>

                    {/* Accent Gradient */}
                    <div className="absolute top-0 right-0 w-1/2 h-full opacity-20 pointer-events-none">
                        <div className="w-full h-full bg-gradient-to-l from-[#F2913F] to-transparent" />
                    </div>
                </section>

                {/* ================= POLICY CONTENT ================= */}
                <section className="py-20">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6">

                        <div className="space-y-12">

                            {/* Section Card */}
                            {[
                                {
                                    title: "Information We Collect",
                                    content: `We may collect personal details such as name, contact information, company details, resumes (for recruitment), and information submitted through inquiry or subcontractor forms. Basic technical data such as browser type, device information, and IP address may also be collected for website analytics and performance monitoring.`,
                                },
                                {
                                    title: "How We Use Information",
                                    content: `Your information is used solely to respond to inquiries, provide requested services, process recruitment and subcontractor applications, improve our website and operational processes, and comply with legal obligations. We do not sell or share personal data with third parties for marketing purposes.`,
                                },
                                {
                                    title: "Data Security",
                                    content: `We implement appropriate technical and organizational measures to safeguard your information. Access to sensitive data is restricted to authorized personnel only, and we maintain internal controls to prevent unauthorized disclosure or misuse.`,
                                },
                                {
                                    title: "Cookies",
                                    content: `Our website may use cookies to enhance user experience, analyze traffic, and monitor site performance. Users may disable cookies through their browser settings if preferred.`,
                                },
                                {
                                    title: "Your Rights",
                                    content: `You may request access to, correction of, or deletion of your personal information by contacting us through our official communication channels. We will respond to such requests in accordance with applicable laws.`,
                                },
                                {
                                    title: "Policy Updates",
                                    content: `This Privacy Policy may be updated periodically. Continued use of our website after any revisions constitutes acceptance of the updated policy.`,
                                },
                            ].map((section, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 relative overflow-hidden"
                                >
                                    {/* Accent Line */}
                                    <div className="absolute left-0 top-0 h-full w-1 bg-[#0B1B3A]" />

                                    <h2 className="text-2xl sm:text-3xl font-bold text-[#0B1B3A] mb-4">
                                        {section.title}
                                    </h2>

                                    <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                                        {section.content}
                                    </p>
                                </motion.div>
                            ))}
                        </div>


                    </div>
                </section>
            </main>
        </div>
    );
}
