// "use client";

// import React from "react";
// import { motion } from "framer-motion";
// import { Target, Users, Leaf, History } from "lucide-react";
// import ConstructionProjectsTable from "@/components/about/ConstructionProjectsTable";

// export default function AboutPage() {
//     return (
//         <div className="flex flex-col min-h-screen">
//             <main className="grow">
//                 {/* Hero Section */}
//                 {/* <section className="relative py-38 bg-black overflow-hidden">
//                     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
//                         <motion.h1
//                             initial={{ opacity: 0, y: 20 }}
//                             animate={{ opacity: 1, y: 0 }}
//                             className="text-5xl md:text-7xl font-black text-white mb-6"
//                         >
//                             ABOUT <span className="text-[#F2913F]">US</span>
//                         </motion.h1>
//                         <p className="text-xl text-gray-400 max-w-3xl mx-auto">
//                             Leading the transition towards sustainable and
//                             innovative infrastructure management.
//                         </p>
//                     </div>
//                     <div className="absolute top-0 right-0 w-1/2 h-full opacity-20 pointer-events-none">
//                         <div className="w-full h-full bg-linear-to-l from-[#F2913F] to-transparent" />
//                     </div>
//                 </section> */}

//                 {/* History Section */}
//                 {/* <section id="history" className="py-24 bg-white">
//                     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//                         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
//                             <motion.div
//                                 initial={{ opacity: 0, x: -50 }}
//                                 whileInView={{ opacity: 1, x: 0 }}
//                                 viewport={{ once: true }}
//                             >
//                                 <div className="flex items-center gap-4 mb-6 text-[#F2913F]">
//                                     <History size={32} />
//                                     <h2 className="text-2xl font-bold uppercase tracking-widest">
//                                         Our History
//                                     </h2>
//                                 </div>
//                                 <h3 className="text-4xl font-extrabold text-gray-900 mb-6">
//                                     A Legacy of Engineering Excellence
//                                 </h3>
//                                 <p className="text-lg text-gray-600 mb-6 leading-relaxed">
//                                     Evergreen Group is one of the oldest and
//                                     leading business names in Asansol-Durgapur
//                                     industrial belt. Established in 1988, we
//                                     have over three decades of expertise in
//                                     civil, structural and production contracts.
//                                 </p>
//                                 <p className="text-lg text-gray-600 leading-relaxed">
//                                     We also undertake raw material
//                                     transportation & handling and have our own
//                                     complete machinery fleet ranging from Hydra,
//                                     Loaders, JCB, Poclain and Tippers. Over the
//                                     years, we have undertaken many challenging
//                                     projects across Eastern & Central India and
//                                     have accumulated skills, know-how the
//                                     experiences in building solutions, project
//                                     management services, building trades and
//                                     related engineering works.{" "}
//                                 </p>
//                             </motion.div>
//                             <div className="relative">
//                                 <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl">
//                                     <img
//                                         src="https://images.unsplash.com/photo-1694521787162-5373b598945c?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//                                         alt="Engineering Legacy"
//                                         className="w-full h-full object-cover"
//                                     />
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </section> */}

//                 {/* Mission & Vision */}
//                 {/* <section id="mission" className="py-24 bg-gray-900 text-white">
//                     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//                         <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
//                             <motion.div
//                                 initial={{ opacity: 0, y: 30 }}
//                                 whileInView={{ opacity: 1, y: 0 }}
//                                 viewport={{ once: true }}
//                                 className="bg-gray-800 p-12 rounded-3xl"
//                             >
//                                 <Target className="text-[#F2913F] w-16 h-16 mb-8" />
//                                 <h3 className="text-[#F2913F] text-3xl font-bold mb-6">
//                                     Our Mission
//                                 </h3>
//                                 <p className="text-xl text-gray-400 leading-relaxed">
//                                     To provide quality workmanship and customer
//                                     service and maintain the highest level of
//                                     professionalism, honesty and fairness in our
//                                     relationships with our customers, employees
//                                     and vendors.{" "}
//                                 </p>
//                             </motion.div>
//                             <motion.div
//                                 initial={{ opacity: 0, y: 30 }}
//                                 whileInView={{ opacity: 1, y: 0 }}
//                                 viewport={{ once: true }}
//                                 transition={{ delay: 0.2 }}
//                                 className="bg-[#F2913F] p-12 rounded-3xl text-black"
//                             >
//                                 <Users className="w-16 h-16 mb-8" />
//                                 <h3 className="text-3xl font-bold mb-6">
//                                     Our Vision
//                                 </h3>
//                                 <p className="text-xl font-medium leading-relaxed">
//                                     To be the leading provider of industrial and
//                                     commercial construction services in the
//                                     region, known for our commitment to quality
//                                     and customer satisfaction. To grow
//                                     continually by providing useful and
//                                     significant services and solutions to
//                                     markets we already serve and to expand into
//                                     new areas that build on our competencies and
//                                     customer interests.{" "}
//                                 </p>
//                             </motion.div>
//                         </div>
//                     </div>
//                 </section> */}

//                 {/* <section id="construction-projects-table">
//                     <ConstructionProjectsTable/>
//                 </section> */}

//                 {/* Sustainability */}
//                 {/* <section id="sustainability" className="py-24 bg-gray-50">
//                     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//                         <div className="bg-white rounded-[40px] shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-2">
//                             <div className="p-12 md:p-20">
//                                 <Leaf className="text-[#F2913F] w-16 h-16 mb-8" />
//                                 <h3 className="text-4xl font-extrabold text-gray-900 mb-6">
//                                     Commitment to Sustainability
//                                 </h3>
//                                 <p className="text-lg text-gray-600 mb-8 leading-relaxed">
//                                     At Evergreen, sustainability is not just a
//                                     buzzword; it's the core of our engineering
//                                     philosophy. We prioritize eco-friendly
//                                     materials, energy-efficient designs, and
//                                     construction practices that minimize
//                                     environmental impact.
//                                 </p>
//                                 <ul className="space-y-4">
//                                     {[
//                                         "Green Building Practices",
//                                         "Renewable Energy Integration",
//                                         "Waste Management Solutions",
//                                         "Eco-friendly Materials",
//                                     ].map((item) => (
//                                         <li
//                                             key={item}
//                                             className="flex items-center gap-3 text-gray-700 font-bold"
//                                         >
//                                             <div className="w-2 h-2 bg-[#F2913F] rounded-full" />
//                                             {item}
//                                         </li>
//                                     ))}
//                                 </ul>
//                             </div>

//                             <div className="relative h-64 lg:h-auto">
//                                 <img
//                                     src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=1000"
//                                     alt="Sustainability"
//                                     className="absolute inset-0 w-full h-full object-cover"
//                                 />
//                             </div>
//                         </div>
//                     </div>
//                 </section> */}

//                 <section className="bg-[#F3F4F6] min-h-screen py-16">
//                     {/* Container */}
//                     <div className="max-w-6xl mx-auto px-6">
//                         {/* Top Image */}
//                         <div className="w-full h-[400px] overflow-hidden">
//                             <img
//                                 src="https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1600&auto=format&fit=crop"
//                                 alt="Team Collaboration"
//                                 className="w-full h-full object-cover"
//                             />
//                         </div>

//                         {/* Navy Expertise Strip */}
//                         <div className="bg-[#0B1B3A] text-white inline-block px-6 py-3 mt-6">
//                             <p className="text-sm tracking-widest uppercase">
//                                 Five Decades of Expertise
//                             </p>
//                         </div>

//                         {/* Main Content Grid */}
//                         <div className="grid md:grid-cols-3 gap-10 mt-12 items-start">
//                             {/* Left Content */}
//                             <div className="md:col-span-2">
//                                 <h1 className="text-5xl font-extrabold text-[#0B1B3A] mb-6">
//                                     About Us
//                                 </h1>

//                                 <h3 className="text-xl font-semibold text-[#0B1B3A] mb-4">
//                                     Over 50 Years of Supplying Strength
//                                 </h3>

//                                 <p className="text-gray-700 leading-relaxed text-lg">
//                                     Since 1988, Evergreen Group of Companies has
//                                     been a trusted name in infrastructure and
//                                     industrial solutions. Based in Eastern
//                                     India, we are one of the region’s leading
//                                     suppliers and service providers across
//                                     construction, structural, and industrial
//                                     domains.
//                                 </p>

//                                 <p className="text-gray-700 leading-relaxed text-lg mt-4">
//                                     We serve infrastructure projects, government
//                                     bodies, MSMEs, and heavy industries with a
//                                     strong commitment to quality, integrity, and
//                                     timely delivery. Our technical expertise and
//                                     service-first approach have built
//                                     long-standing relationships across the
//                                     industrial landscape.
//                                 </p>
//                             </div>

//                             {/* Right Side Image */}
//                             <div className="w-full h-[250px] overflow-hidden">
//                                 <img
//                                     src="https://images.unsplash.com/photo-1492724441997-5dc865305da7?q=80&w=800&auto=format&fit=crop"
//                                     alt="Corporate Environment"
//                                     className="w-full h-full object-cover"
//                                 />
//                             </div>
//                         </div>
//                     </div>
//                 </section>
//                 <section className="bg-[#F3F4F6] min-h-screen flex flex-col">
//                     {/* Image Layout */}
//                     <div className="relative flex-1 mt-30">
//                         {/* Top Image */}
//                         <div className="w-full h-[650px] overflow-hidden">
//                             <img
//                                 src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1600&auto=format&fit=crop"
//                                 alt="Corporate Building"
//                                 className="w-full h-full object-cover"
//                             />
//                         </div>

//                         {/* Title Overlay Box */}
//                         <div className="absolute left-0 top-[45%] bg-[#0B1B3A] px-12 py-10 max-w-3xl">
//                             <h1 className="text-white text-5xl md:text-6xl font-extrabold leading-tight">
//                                 Evergreen
//                                 <br />
//                                 Group of Companies
//                             </h1>
//                         </div>

//                         {/* Bottom Image */}
//                         {/* <div className="w-full h-[300px] overflow-hidden mt-20">
//                             <img
//                                 src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1600&auto=format&fit=crop"
//                                 alt="Modern Architecture"
//                                 className="w-full h-full object-cover"
//                             />
//                         </div> */}
//                     </div>
//                 </section>
//                 <section className="bg-[#F3F4F6] min-h-screen py-16">
//                     <div className="max-w-6xl mx-auto px-6">
//                         {/* Heading */}
//                         <h1 className="text-5xl font-extrabold text-[#0B1B3A] mb-6">
//                             Why Choose Us
//                         </h1>

//                         {/* Subtext */}
//                         <p className="text-gray-700 text-lg max-w-3xl leading-relaxed mb-16">
//                             From initial planning to final execution, Evergreen
//                             Group of Companies focuses on building long-term
//                             relationships through quality delivery, operational
//                             excellence, and a commitment to integrity.
//                         </p>

//                         {/* Grid Cards */}
//                         <div className="grid md:grid-cols-3 gap-8 mb-20">
//                             {[
//                                 "Over 35 years of industry experience",
//                                 "Trusted partner to government & private sectors",
//                                 "Comprehensive portfolio of infrastructure solutions",
//                                 "Proven on-time project delivery",
//                                 "Transparent and ethical business practices",
//                                 "Dedicated client support & service excellence",
//                             ].map((item) => (
//                                 <div
//                                     key={item}
//                                     className="bg-[#0B1B3A] text-white p-10 flex items-center justify-center text-center h-[170px]"
//                                 >
//                                     <h3 className="text-lg text-white font-semibold leading-relaxed">
//                                         {item}
//                                     </h3>
//                                 </div>
//                             ))}
//                         </div>

//                         {/* Closing Statement */}
//                         <div className="text-center max-w-4xl mx-auto text-gray-800 leading-relaxed text-lg mb-16">
//                             <p className="font-semibold text-[#0B1B3A] mb-4">
//                                 At Evergreen Group of Companies,
//                             </p>
//                             <p>
//                                 We don’t just execute projects — we deliver
//                                 reliability, performance, and long-term
//                                 partnerships. With every assignment, we bring
//                                 decades of expertise, disciplined execution, and
//                                 a deep understanding of evolving infrastructure
//                                 and industrial needs.
//                             </p>
//                             <p className="mt-4">
//                                 Whether building the future or strengthening the
//                                 present, we are committed to supporting your
//                                 success — one project, one partnership at a
//                                 time.
//                             </p>
//                         </div>
//                     </div>
//                 </section>
//                 <section className="bg-[#F3F4F6] min-h-screen py-16">
//                     <div className="max-w-6xl mx-auto px-6 relative">

//                         {/* Main Image */}
//                         <div className="relative">
//                             <img
//                                 src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1600&auto=format&fit=crop"
//                                 alt="Corporate Building"
//                                 className="w-full h-[600px] object-cover"
//                             />

//                             {/* Thank You Light Blue Block */}
//                             <div className="absolute left-0 top-[250px] bg-[#BFD6EA] w-[60%] p-12">
//                                 <h1 className="text-5xl font-extrabold text-[#1D4ED8] mb-6">
//                                     Thank You
//                                 </h1>
//                                 <p className="text-gray-800 text-lg leading-relaxed">
//                                     We look forward to being a reliable partner
//                                     in your growth — delivering excellence,
//                                     integrity, and long-term value every step of
//                                     the way.
//                                 </p>
//                             </div>

//                             {/* Dark Contact Block */}
//                             <div className="absolute left-0 top-[506px] bg-[#0B1B3A] w-[50%] p-12 text-white">
//                                 <div className="space-y-10">
//                                     <div>
//                                         <h3 className="tracking-widest text-sm text-white  mb-3">
//                                             ADDRESS
//                                         </h3>
//                                         <p className="text-gray-300 leading-relaxed">
//                                             15, G.T. Road, Beside ICICI Bank
//                                             Ltd. <br />
//                                             Murgasol, Asansol – 713303, <br />
//                                             Paschim Bardhaman, West Bengal
//                                         </p>
//                                     </div>

//                                     <div className="border-t border-gray-600 pt-6">
//                                         <h3 className="tracking-widest text-white text-sm mb-3">
//                                             TELEPHONE
//                                         </h3>
//                                         <p className="text-gray-300 ">
//                                             +91 98000 19399 <br />
//                                             +91 94340 15833
//                                         </p>
//                                     </div>

//                                     <div className="border-t border-gray-600 pt-6">
//                                         <h3 className="tracking-widest text-white text-sm mb-3">
//                                             EMAIL
//                                         </h3>
//                                         <p className="text-gray-300 ">
//                                             info@evergreengroup.in
//                                         </p>
//                                     </div>

//                                     <div className="border-t border-gray-600 pt-6">
//                                         <h3 className="tracking-widest text-white text-sm mb-3">
//                                             GSTIN
//                                         </h3>
//                                         <p className="text-gray-300">
//                                             19XXXXXXXXXXXX
//                                         </p>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </section>
//             </main>
//         </div>
//     );
// }
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
                <section className="py-16">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6">
                        {/* Content Grid */}
                        <div className="grid md:grid-cols-3 justify-center items-center gap-10 mt-10">
                            <div className="md:col-span-2">
                                <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0B1B3A] mb-6">
                                    Our History
                                </h1>

                                <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                                    The Evergreen Group embarked upon its
                                    journey from Durgapur, 64 years ago and
                                    started the business with the name Evergreen
                                    Timber Traders. There are four verticals in
                                    our Group which is being headed by the
                                    founders
                                    <strong className="ml-2">
                                        Shri H. D. Bhattad & Shri G.D. Bhattad
                                    </strong>
                                    , both of whom are still active even as the
                                    third generation is now fully in business.
                                </p>

                                <p className="text-gray-700 leading-relaxed text-base sm:text-lg mt-4">
                                    Headquartered in Durgapur, the main
                                    locations of operation of these activities
                                    are in Bengal (Durgapur, Kolkata, Asansol,
                                    Kharagpur, Bankura, Purulia and Panagarh)
                                    and Jharkhand (Hazaribagh, Bokaro &amp;
                                    Dhanbad) and Uttar Pradesh (Aligarh).{" "}
                                </p>
                            </div>

                            <div className="relative top-0 right-0">
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

                {/* ================= HERO IMAGE SECTION ================= */}
                <section className="py-16">
                    <div className="relative">
                        <div className="w-full h-80 sm:h-[500px] md:h-[650px] overflow-hidden">
                            <img
                                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1600&auto=format&fit=crop"
                                alt="Corporate Building"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Overlay Title */}
                        <div className="absolute left-4 sm:left-10 md:left-20 top-1/2 -translate-y-1/2 bg-[#0B1B3A] px-6 sm:px-10 py-6 sm:py-10 max-w-xs sm:max-w-md md:max-w-2xl">
                            <h1 className="text-white text-2xl sm:text-4xl md:text-6xl font-extrabold leading-tight">
                                Evergreen <br /> Group of Companies
                            </h1>
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
                {/* ✅ Leadership Section (Left Content – Right Image) */}
                <section className="py-20 bg-gray-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-3xl text-center sm:text-4xl font-bold text-[#0B1B3A] mb-6">
                            From The Founders Desk
                        </h2>
                        {/* Director Section */}
                        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">

                            {/* RIGHT IMAGE */}
                            <div className="flex justify-center lg:justify-end">
                                <div className="relative group">
                                    <img
                                        src="/director.jpg" // replace with actual image path
                                        alt="Director"
                                        className="w-72 h-80 sm:w-80 sm:h-96 object-cover rounded-xl shadow-lg transition-all duration-300 group-hover:shadow-2xl"
                                    />
                                </div>
                            </div>
                            {/* RIGHT IMAGE */}
                            <div className="">
                                <div className="relative group">
                                    <img
                                        src="/chairman.jpg" // replace with actual image path
                                        alt="Chairman"
                                        className="w-72 h-80 sm:w-80 sm:h-96 object-cover rounded-xl shadow-lg transition-all duration-300 group-hover:shadow-2xl"
                                    />
                                </div>
                            </div>
                        </div>

                    </div>
                </section>

                {/* ================= THANK YOU SECTION ================= */}
            </main>
        </div>
    );
}
