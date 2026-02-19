"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const companies = [
    {
        label: "EVERGREEN CONSTRUCTION DURGAPUR PVT. LTD.",
        href: "/companies/ecpl",
    },
    {
        label: "EVERGREEN MANAGEMENT CONSULTANTS LLP",
        href: "/companies/emcl",
    },
    {
        label: "EVERGREEN MOVERS PVT. LTD.",
        href: "/companies/empl",
    },
    {
        label: "EVERGREEN MINERALS PVT. LTD.",
        href: "/companies/minerals",
    },
    {
        label: "Sunrise Movers & Logistics",
        href: "/companies/sunrise",
    },
    {
        label: "V.R. Minerals",
        href: "/companies/vrm",
    },
    {
        label: "SSky High Pioneer Concrete LLP",
        href: "/companies/shc",
    },
    {
        label: "JR AGRITECH",
        href: "/companies/jrag",
    },
];

export default function ServicesPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <main className="grow">
                {/* Hero */}
                <section className="bg-black py-38">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-5xl md:text-7xl font-black text-white mb-6"
                        >
                            OUR GROUP
                            <span className="text-[#F2913F] ml-2">
                                OF COMPANIES
                            </span>
                        </motion.h1>
                    </div>
                </section>

                {/* Details */}
                <section className="py-24 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="max-w-4xl mx-auto">
                            <div className="divide-y divide-gray-200 border-t border-b border-gray-200">
                                {companies.map((company, index) => (
                                    <motion.div
                                        key={index}
                                        whileHover={{
                                            backgroundColor: "#fafafa",
                                        }}
                                        transition={{ duration: 0.25 }}
                                        className="group"
                                    >
                                        <Link
                                            href={company.href}
                                            className="flex items-center justify-between py-8 px-4 md:px-8 transition-all duration-300"
                                        >
                                            {/* Left Content */}
                                            <div>
                                                <h3 className="text-xl md:text-2xl font-semibold tracking-tight text-gray-900 group-hover:text-black transition-colors duration-300 uppercase">
                                                    {company.label}
                                                </h3>
                                            </div>

                                            {/* Arrow */}
                                            <div className="flex items-center gap-2 text-gray-400 group-hover:text-[#F2913F] transition-all duration-300">
                                                <span className="text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                    View
                                                </span>
                                                <span className="text-xl transform group-hover:translate-x-2 transition-transform duration-300">
                                                    →
                                                </span>
                                            </div>
                                        </Link>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-24 bg-gray-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <div className="bg-[#F2913F] p-12 md:p-20 rounded-[40px] shadow-2xl">
                            <h2 className="text-4xl md:text-5xl font-black text-white mb-8">
                                Ready to Start Your Project?
                            </h2>
                            <p className="text-xl text-white/80 font-medium mb-12 max-w-2xl mx-auto">
                                Consult with our experts today and see how
                                EVERGREEN can bring your vision to life with
                                technical excellence.
                            </p>
                            <a
                                href="/contact"
                                className="bg-black text-white px-12 py-5 rounded-full font-black text-lg hover:bg-gray-900 transition-all duration-300"
                            >
                                Get a Quote Now
                            </a>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}
