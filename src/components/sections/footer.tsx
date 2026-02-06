"use client";

import React from "react";
import { Linkedin, MapPin, ArrowUp } from "lucide-react";

export function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <footer className="bg-black text-white pt-[80px] pb-10 font-sans">
            <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-12 lg:gap-x-8">
                    {/* Logo and Address Section */}
                    <div className="lg:col-span-4">
                        <div className="flex items-center gap-3 mb-8">
                            {/* <img 
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/5f5702b0-00ea-450f-84bb-61992efa636a/emcl-1767453861486.png?width=8000&height=8000&resize=contain" 
                  alt="Evergreen Management Consultants LLP" 
                  className="h-10 w-auto object-contain brightness-0 invert"
                /> */}
                            <span
                                className="text-lg font-bold tracking-tight"
                                // style={{
                                //   fontFamily : "'Birthstone', cursive",
                                //     fontStyle: "italic",
                                // }}
                            >
                                <span className="text-green-500 pr-2"
                                // style={{
                                //   fontFamily : "'Birthstone', cursive"
                                // }}
                                >
                                    Evergreen
                                </span>
                                Group Of Companies
                            </span>
                        </div>
                        <address className="not-italic text-[16px] leading-[1.6] font-medium max-w-[300px] mb-8">
                            RADHA KRISHNA PALLY,
                            <br />
                            BENACHITY, DURGAPUR,
                            <br />
                            West Bengal, India — 713213
                        </address>

                        <div className="flex gap-4 mb-12">
                            <a
                                href="/contact"
                                className="bg-[#F2913F] text-white px-8 py-3 rounded-full font-bold text-[15px] hover:bg-[#d87d2f] transition-all duration-300"
                            >
                                Request a Quote
                            </a>
                            <a
                                href="https://maps.google.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-[#F2913F] text-white w-[44px] h-[44px] flex items-center justify-center rounded-full hover:bg-[#d87d2f] transition-all duration-300"
                                aria-label="View on Google Maps"
                            >
                                <MapPin size={20} fill="currentColor" />
                            </a>
                        </div>

                        <div className="space-y-4">
                            <a
                                href="mailto:evergreen_construction@rediffmail.com"
                                className="block text-[14px] text-gray-400 hover:text-[#F2913F] transition-colors"
                                style={{ fontSize: "14px" }}
                            >
                                evergreen_construction@rediffmail.com
                            </a>
                            <a
                                href="tel:+917001998007"
                                className="block text-[14px] text-gray-400 hover:text-[#F2913F] transition-colors"
                                style={{ fontSize: "14px" }}
                            >
                                +91 7001998007
                            </a>
                            {/* <div className="pt-2">
                                <a
                                    href="https://linkedin.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center w-[36px] h-[36px] rounded-full bg-[#1e2329] text-white hover:text-[#F2913F] transition-all duration-300"
                                    aria-label="LinkedIn Profile"
                                >
                                    <Linkedin size={18} />
                                </a>
                            </div> */}
                        </div>
                    </div>

                    {/* Quick Links Section */}
                    <div className="lg:col-span-3">
                        <h4 className="text-[16px] font-bold mb-6">
                            Quick Links
                        </h4>
                        <nav className="flex flex-col gap-4">
                            {[
                                { label: "About Us", href: "/about" },
                                { label: "Group Of Companies", href: "/companies" },
                                { label: "Projects", href: "/projects" },
                                { label: "Recruitment", href: "/recruitment" },
                                { label: "Contact", href: "/contact" },
                            ].map((link) => (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    className="text-[14px] text-gray-400 hover:text-[#F2913F] transition-colors w-fit"
                                >
                                    {link.label}
                                </a>
                            ))}
                        </nav>
                    </div>

                    {/* Policies and Scroll top Section */}
                    <div className="lg:col-span-5 flex flex-col items-start lg:items-end justify-between">
                        <div className="flex flex-wrap gap-4 pt-10 lg:pt-0">
                            <a
                                href="/corporate-policy"
                                className="bg-[#F2913F] text-white px-6 py-2.5 rounded-full font-bold text-[13px] uppercase tracking-wider hover:bg-[#d87d2f] transition-all duration-300"
                            >
                                Corporate Policy
                            </a>
                            <a
                                href="/privacy-policy"
                                className="bg-[#F2913F] text-white px-6 py-2.5 rounded-full font-bold text-[13px] uppercase tracking-wider hover:bg-[#d87d2f] transition-all duration-300"
                            >
                                Privacy Policy
                            </a>
                        </div>

                        <button
                            onClick={scrollToTop}
                            className="mt-12 lg:mt-0 bg-[#F2913F] text-white w-[44px] h-[44px] flex items-center justify-center rounded-full hover:bg-[#d87d2f] transition-all duration-300 group"
                            aria-label="Scroll to top"
                        >
                            <ArrowUp
                                size={24}
                                className="group-hover:-translate-y-1 transition-transform"
                            />
                        </button>
                    </div>
                </div>

                {/* Divider and Copyright */}
                <div className="mt-16 pt-8 border-t border-gray-800">
                    <div className="text-center text-[12px] md:text-[14px] text-gray-400 leading-relaxed font-normal">
                        <span>
                            © 2025 Evergreen Green Group Of Companies |{" "}
                        </span>
                        <span className="font-bold text-gray-300">
                            All rights reserved.
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
