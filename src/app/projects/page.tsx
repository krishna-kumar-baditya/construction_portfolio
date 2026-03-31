"use client";

import { motion } from "framer-motion";
import ConstructionProjectsTable from "@/components/about/ConstructionProjectsTable";


export default function ProjectsPage() {
    

    return (
        <div className="flex flex-col min-h-screen">
            <main className="grow ">
                {/* Hero */}
                <section className="bg-black py-38">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-center items-center gap-8 ">
                        <div className="text-center ">
                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="text-5xl md:text-7xl font-black text-white mb-6"
                            >
                                OUR{" "}
                                <span className="text-[#F2913F]">PROJECTS</span>
                            </motion.h1>
                            <p className="text-xl text-gray-400 max-w-2xl">
                                A list of engineering excellence and
                                infrastructure management across the globe.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Projects Grid */}
                <section className="relative py-24 min-h-screen overflow-hidden ">
                    {/* Background Image */}
                    <div
                        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                        style={{
                            backgroundImage:
                                "url('/backgrounds/project_background.jpeg')",
                        }}
                    />

                    {/* Overlay for opacity control */}
                    <div className="absolute inset-0 bg-black/60" />

                    {/* Content Layer */}
                    <div className="relative z-10">
                        <ConstructionProjectsTable />
                    </div>
                </section>
            </main>
        </div>
    );
}
