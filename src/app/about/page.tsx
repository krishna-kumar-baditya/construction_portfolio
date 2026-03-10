"use client";

import React from "react";
import { motion } from "framer-motion";

export default function AboutPage() {
    return (
        <div className="flex flex-col bg-[#F3F4F6]">
            <main className="grow">
                {/* Hero Section */}
                <section className="relative py-38 bg-black overflow-hidden">
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
                        <div className="w-full h-full bg-linear-to-l from-[#F2913F] to-transparent" />
                    </div>
                </section>
                {/* ================= ABOUT SECTION ================= */}
                <section id="history" className="py-16">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6">
                        {/* Content Grid */}
                        <div className="grid md:grid-cols-3 justify-center items-center gap-10 mt-10">
                            <div className="md:col-span-2">
                                <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0B1B3A] mb-6">
                                    Our History
                                </h1>

                                <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                                    The Evergreen Group began its journey in
                                    1960 in Durgapur. Founded by
                                    <strong className=" mx-2">
                                        Shri H.D. Bhattad & Shri G.D. Bhattad
                                    </strong>
                                    , the group started its operations under the
                                    name Evergreen Timber Traders, manufacturing
                                    & supplying wooden frames & accessories to
                                    the then upcoming Durgapur Steel Plant.
                                    Later, we ventured into civil construction
                                    services and also set up our brick kiln
                                    under the brand Evergreen Bricks. Over the
                                    decades, the company has evolved into a
                                    leading industrial service provider in the
                                    Asansol–Durgapur industrial belt, becoming a
                                    trusted partner for a wide range of diverse
                                    industrial requirements. Today, Evergreen
                                    Group operates across multiple core sectors
                                    including civil construction, production
                                    contracts, industrial logistics, and supply
                                    of minerals and Ready Mix Concrete (RMC),
                                    delivering integrated solutions to
                                    manufacturing, steel, and infrastructure
                                    industries across Eastern India.
                                    Headquartered in Durgapur, the main
                                    locations of operation of these activities
                                    are in Bengal (Durgapur, Kolkata, Asansol,
                                    Kharagpur, Bankura, Purulia and Panagarh)
                                    and Jharkhand (Hazaribagh, Bokaro & Dhanbad)
                                    and Uttar Pradesh (Aligarh).
                                </p>
                            </div>

                            {/* <div className="relative top-0 right-0">
                                <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl">
                                    <img
                                        src="/backgrounds/ABOUT_US_MAIN_PAGE.png"
                                        alt="Engineering Legacy"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div> */}
                        </div>
                    </div>
                </section>
                {/* ================= WHY CHOOSE US ================= */}
                <section className="py-16">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0B1B3A] mb-6">
                            Why Choose Us
                        </h1>

                        <p className="text-gray-700 text-base sm:text-lg max-w-3xl leading-relaxed mb-12">
                            From planning to execution, Evergreen focuses on
                            long-term relationships through quality delivery and
                            operational excellence.
                        </p>

                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16">
                            {[
                                "Over 50 years of industry experience",
                                "Trusted partner to government & private sectors",
                                "Comprehensive infrastructure solutions",
                                "Proven on-time project delivery",
                                "Transparent business practices",
                                "Dedicated client support",
                            ].map((item) => (
                                <div
                                    key={item}
                                    className="
                group
                bg-white
                border border-gray-200
                rounded-xl
                p-6 sm:p-8
                shadow-sm
                hover:shadow-xl
                hover:-translate-y-1
                transition-all duration-300
                relative
                overflow-hidden
            "
                                >
                                    {/* Left Accent Line */}
                                    <div className="absolute left-0 top-0 h-full w-1 bg-[#0B1B3A] group-hover:bg-[#F2913F] transition-colors duration-300" />

                                    <div className="flex items-start gap-4">
                                        {/* Bullet Icon */}
                                        <div className="flex-shrink-0 mt-1">
                                            <div className="w-6 h-6 rounded-full bg-[#0B1B3A] group-hover:bg-[#F2913F] transition-colors duration-300 flex items-center justify-center">
                                                <span className="text-white text-xs font-bold">
                                                    ✓
                                                </span>
                                            </div>
                                        </div>

                                        {/* Text */}
                                        <h3 className="text-gray-800 text-sm sm:text-base font-semibold leading-relaxed">
                                            {item}
                                        </h3>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="text-center max-w-4xl mx-auto text-gray-800 text-base sm:text-lg leading-relaxed">
                            <p className="font-semibold text-[#0B1B3A] mb-4">
                                At Evergreen Group of Companies,
                            </p>
                            <p>
                                We don’t just execute projects — we deliver
                                reliability and long-term partnerships.
                            </p>
                        </div>
                    </div>
                </section>
                {/* ================= MISSION & VISION ================= */}
                <section id="mission" className="py-20 bg-[#F8FAFC] text-white">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6">
                        {/* Cards Grid */}
                        <div className="grid md:grid-cols-2 gap-10">
                            {/* Mission Card */}
                            <div
                                className="
                                    group
                                    bg-white text-[#0B1B3A]
                                    rounded-2xl
                                    p-8 sm:p-10
                                    shadow-lg
                                    hover:shadow-2xl
                                    hover:-translate-y-2
                                    transition-all duration-300
                                    relative overflow-hidden
                                "
                            >
                                {/* Top Accent */}
                                <div className="absolute top-0 left-0 w-full h-2 bg-[#F2913F]" />

                                <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0B1B3A] mb-6">
                                    {" "}
                                    Our Mission
                                </h2>

                                <p className="text-gray-600 max-w-3xl mx-auto text-base sm:text-lg leading-relaxed">
                                    {" "}
                                    Our mission is to deliver superior quality
                                    workmanship and exceptional customer service
                                    while upholding the highest standards of
                                    professionalism, integrity, and
                                    transparency. We are committed to building
                                    long-term relationships based on honesty and
                                    fairness with our clients, employees, and
                                    business partners, ensuring trust,
                                    reliability, and sustainable growth in every
                                    project we undertake.
                                </p>
                            </div>

                            {/* Vision Card */}
                            <div
                                className="
                                    group
                                    bg-[#F2913F]
                                    text-black
                                    rounded-2xl
                                    p-8 sm:p-10
                                    shadow-lg
                                    hover:shadow-2xl
                                    hover:-translate-y-2
                                    transition-all duration-300
                                    relative overflow-hidden
                                "
                            >
                                {/* Top Accent */}
                                <div className="absolute top-0 left-0 w-full h-2 bg-[#0B1B3A]" />

                                <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0B1B3A] mb-6">
                                    {" "}
                                    Our Vision
                                </h2>

                                <p className="leading-relaxed text-base sm:text-lg font-medium">
                                    Our vision is to become the leading
                                    industrial and commercial construction
                                    company in the region, recognized for
                                    excellence in quality, reliability, and
                                    customer satisfaction. We strive for
                                    continuous growth by delivering value-driven
                                    solutions to existing markets while
                                    strategically expanding into new sectors
                                    that align with our core strengths,
                                    technical expertise, and evolving client
                                    requirements.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                {/* ✅ Founders Section (Left Content – Right Image) */}
                <section id="leadership" className="py-20 bg-gray-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-3xl text-center sm:text-4xl font-bold text-[#0B1B3A] mb-12">
                            From The Founders Desk
                        </h2>

                        <div className="flex flex-col gap-12">
                            {/* Image */}
                            <div className="flex">
                                <div className=" w-full">
                                    <img
                                        src="/founders/founders.jpeg"
                                        alt="Director"
                                        className="w-full rounded-xl shadow-lg transition-all duration-300 group-hover:shadow-2xl"
                                    />
                                </div>
                            </div>

                            {/* Founder Message */}
                            <div className="text-gray-700 space-y-4 text-justify leading-relaxed">
                                <p>
                                    At <strong>EVERGREEN</strong>, our journey
                                    began with a simple yet powerful belief
                                    that excellence is not an act, but a habit.
                                    From our humble beginnings to becoming a
                                    trusted partner across multiple industries,
                                    our mission has always been clear: to
                                    deliver reliable, innovative, and
                                    sustainable solutions that empower our
                                    clients to succeed.
                                    In today’s fast-changing industrial
                                    landscape, versatility is not just an
                                    advantage it’s a necessity. That’s why we
                                    have built a diverse portfolio of services,
                                    spanning project management, civil and
                                    mechanical engineering, industrial
                                    production contracts, logistics and
                                    transportation; enabling us to meet complex
                                    challenges with agility and precision.
                                    Our strength lies in our people a team of
                                    skilled professionals who share a passion
                                    for quality, safety, and continuous
                                    improvement. We believe in forging long-term
                                    relationships based on trust, transparency,
                                    and mutual growth. Every project we
                                    undertake is a commitment to deliver not
                                    just on expectations, but beyond them.
                                    As we look to the future, we remain
                                    dedicated to embracing new technologies,
                                    sustainable practices, and best standards
                                    ensuring that we continue to be a partner of
                                    choice for the industries in our region.
                                    Thank you for being part of our journey.
                                    Together, we will build a future defined by
                                    innovation, resilience, and shared success.
                                </p>


                                <div className="pt-4 font-semibold text-[#0B1B3A]">
                                    <p>H.D. Bhattad & G.D. Bhattad</p>
                                    <p className="text-sm font-medium text-gray-600">
                                        Founder & Chairperson
                                        <br />                                        
                                        Evergreen Group
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}
