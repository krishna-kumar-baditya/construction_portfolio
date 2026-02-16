"use client";

import React from "react";
import { motion } from "framer-motion";
import EquipmentTable from "@/components/infrastructure/EquipmentTable";

export default function InfrastructurePage() {
    return (
        <div className="flex flex-col min-h-screen">
            <main className="flex-grow ">
                {/* Hero Section */}
                <section className="relative py-38 bg-black overflow-hidden">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-5xl md:text-7xl font-black text-white mb-6"
                        >
                            INFRA{" "}
                            <span className="text-[#F2913F]">STRUCTURE</span>
                        </motion.h1>
                        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                            Engineering Infrastructure That Drives Sustainable
                            Growth.{" "}
                        </p>
                    </div>
                    <div className="absolute top-0 right-0 w-1/2 h-full opacity-20 pointer-events-none">
                        <div className="w-full h-full bg-gradient-to-l from-[#F2913F] to-transparent" />
                    </div>
                </section>

                <section>
                    <EquipmentTable />
                </section>
            </main>
        </div>
    );
}
