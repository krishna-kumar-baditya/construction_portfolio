"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

type Category = "projects" | "team activities";

const galleryData: Record<
    Category,
    { id: number; src: string; name?: string }[]
> = {
    projects: [
        { id: 1, src: "/gallery/p1.jpeg", name: "Reinforcement work completed" },
        { id: 2, src: "/gallery/p2.jpeg", name: "Shuttering work" },
        { id: 3, src: "/gallery/p3.jpeg", name: "Slab Reinforcement and Shuttering work" },
        { id: 4, src: "/gallery/p4.jpeg", name: "Inspection Pit shuttering work" },
        { id: 5, src: "/gallery/p5.jpeg", name: "Inspection pit 1st lift wall shuttering work" },
        { id: 6, src: "/gallery/p6.jpeg", name: "Inspection Pit final lift Shuttering work" },
        { id: 7, src: "/gallery/p7.jpeg", name: "Hopper Pit" },
        { id: 8, src: "/gallery/p8.jpeg", name: "" },
        { id: 9, src: "/gallery/p9.jpeg", name: "" },
        { id: 10, src: "/gallery/p10.jpeg", name: "" },
        { id: 11, src: "/gallery/p11.jpeg", name: "" },
        { id: 12, src: "/gallery/p12.jpeg", name: "" },
        { id: 13, src: "/gallery/p13.jpeg", name: "" },
        { id: 14, src: "/gallery/p14.jpeg", name: "" },
        { id: 15, src: "/gallery/p15.jpeg", name: "" },
        { id: 16, src: "/gallery/p16.jpeg", name: "" },
        { id: 17, src: "/gallery/p17.jpeg", name: "" },
        { id: 18, src: "/gallery/p18.jpeg", name: "" },
        { id: 19, src: "/gallery/p19.jpeg", name: "" },
        { id: 20, src: "/gallery/p20.jpeg", name: "" },
        { id: 21, src: "/gallery/p21.jpeg", name: "" },
        { id: 22, src: "/gallery/p22.jpeg", name: "" },
        { id: 23, src: "/gallery/p23.jpeg", name: "" },
        { id: 24, src: "/gallery/p24.jpeg", name: "" },
        { id: 25, src: "/gallery/p25.jpeg", name: "" },
        { id: 26, src: "/gallery/p26.jpeg", name: "" },
        { id: 27, src: "/gallery/p27.jpeg", name: "Spring plant" },
        { id: 28, src: "/gallery/p28.jpeg", name: "" },
    ],
    "team activities": [
        { id: 5, src: "/gallery/1.jpeg" },
        { id: 6, src: "/gallery/2.jpeg" },
        { id: 7, src: "/gallery/3.jpeg" },
        { id: 8, src: "/gallery/4.jpeg" },
        { id: 9, src: "/gallery/5.jpeg" },
        { id: 10, src: "/gallery/9.jpeg" },
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
                            {(
                                ["projects", "team activities"] as Category[]
                            ).map((tab) => (
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
                            ))}
                        </div>

                        {/* Grid */}
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
                                            alt={image.name || "Gallery Image"}
                                            fill
                                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                                        />

                                        {/* Overlay */}
                                        {image.name &&
                                            image.name.trim() !== "" && (
                                                <div className="absolute inset-0 bg-black/50 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                                                    <p className="text-white text-sm md:text-base font-medium">
                                                        {image.name}
                                                    </p>
                                                </div>
                                            )}
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
