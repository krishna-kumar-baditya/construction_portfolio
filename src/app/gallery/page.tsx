"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

type Category = "projects" | "equipments";

const galleryData: Record<Category, { id: number; src: string }[]> = {
    projects: [
        { id: 1, src: "/gallery/p1.png" },
        { id: 2, src: "/gallery/p2.png" },
        { id: 3, src: "/gallery/p3.jpeg" },
        { id: 4, src: "/gallery/p4.png" },
        { id: 10, src: "/gallery/p5.jpeg" },
        { id: 18, src: "/gallery/p18.jpeg" },
        { id: 16, src: "/gallery/p16.jpeg" },
        { id: 15, src: "/gallery/p15.jpeg" },
        { id: 23, src: "/gallery/p23.jpeg" },
        { id: 14, src: "/gallery/p14.jpeg" },
        { id: 26, src: "/gallery/p26.jpeg" },
        { id: 17, src: "/gallery/p17.jpeg" },
        { id: 24, src: "/gallery/p24.jpeg" },
        { id: 25, src: "/gallery/p25.jpeg" },
        { id: 27, src: "/gallery/p27.jpeg" },
        { id: 19, src: "/gallery/p19.jpeg" },
        { id: 28, src: "/gallery/p28.jpeg" },
    ],
    equipments: [
        { id: 1, src: "/gallery/e1.jpeg" },
        { id: 2, src: "/gallery/e2.jpeg" },
        { id: 3, src: "/gallery/e3.jpeg" },
        { id: 4, src: "/gallery/e4.jpeg" },
        { id: 6, src: "/gallery/e6.jpeg" },
        { id: 7, src: "/gallery/e7.jpeg" },
        { id: 8, src: "/gallery/e8.jpeg" },
        { id: 9, src: "/gallery/e9.jpeg" },
        { id: 10, src: "/gallery/e10.jpeg" },
    ],
};

export default function Gallery() {
    const [activeTab, setActiveTab] = useState<Category>("projects");

    return (
        <div className="flex flex-col min-h-screen">
            <main className="grow">
                {/* Hero */}
                <section className="bg-black py-38 text-center">
                    <div className="max-w-7xl mx-auto px-4">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-5xl md:text-7xl font-black text-white mb-6"
                        >
                            Gall<span className="text-[#F2913F]">ery</span>
                        </motion.h1>

                        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                            Our Work Speaks Through Every Structure.
                        </p>
                    </div>
                </section>

                {/* Tabs */}
                <section className="bg-gray-50 py-12 px-6">
                    <div className="max-w-7xl mx-auto">
                        {/* Tab Buttons */}
                        <div className="flex justify-center gap-6 mb-10">
                            {(["projects", "equipments"] as Category[]).map(
                                (tab) => (
                                    <button
                                        key={tab}
                                        onClick={() => setActiveTab(tab)}
                                        className={`px-6 py-2 rounded-full font-semibold capitalize transition-all duration-300
                      ${
                          activeTab === tab
                              ? "bg-[#F2913F] text-white"
                              : "bg-white text-gray-600 hover:bg-gray-200"
                      }`}
                                    >
                                        {tab}
                                    </button>
                                ),
                            )}
                        </div>

                        {/* Grid */}
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeTab}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.4 }}
                                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
                            >
                                {galleryData[activeTab].map((image) => (
                                    <div
                                        key={image.id}
                                        className="relative w-full h-72 rounded-xl overflow-hidden group"
                                    >
                                        <Image
                                            src={image.src}
                                            alt={ "Project Image"}
                                            fill
                                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                                        />

                                       
                                    </div>
                                ))}
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </section>
            </main>
        </div>
    );
}
