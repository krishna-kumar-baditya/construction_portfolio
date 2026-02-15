"use client";

import React, { useState, useEffect } from "react";
import { ChevronDown, Menu, X } from "lucide-react";

const NAV_LINKS = [
    { label: "Home", href: "/" },
    {
        label: "About Us",
        href: "/about",
        dropdown: [
            { label: "Company History", href: "/about#history" },
            { label: "Mission & Vision", href: "/about#mission" },
            { label: "Leadership", href: "/about#leadership" },
            { label: "Sustainability", href: "/about#sustainability" },
        ],
    },
    {
        label: "Group Companies",
        href: "/companies",
        dropdown: [
            {
                label: "EVERGREEN MANAGEMENT CONSULTANTS LLP",
                href: "/companies/emcl",
            },
            {
                label: "EVERGREEN CONSTRUCTION DURGAPUR PVT. LTD.",
                href: "/companies/ecpl",
            },
            {
                label: "V.R Minerals",
                href: "/companies/vrm",
            },
            {
                label: "EVERGREEN MOVERS PVT. LTD.",
                href: "/companies/empl",
            },
            {
                label: "Sunrise Movers & Logistics",
                href: "/companies/sunrise",
            },
            {
                label: "Sky High Concrete",
                href: "/companies/shc",
            },
            {
                label: "JR AGNTECH",
                href: "/companies/jrag",
            }
        ],
    },
    { label: "Infrastructure", href: "/infrastructure" },

    { label: "Projects", href: "/projects" },
    { label: "Gallery", href: "/gallery" },
    { label: "Contact", href: "/contact" },
];

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-9999 transition-all duration-300 w-full ${
                isScrolled ? "bg-white shadow-sm" : "bg-transparent"
            }`}
        >
            <div className=" mx-auto  px-16">
                <div className="flex justify-between items-center h-20">
                    {/* Logo */}
                    <div className="`shrink-0`">
                        <a href="/" className="flex items-center gap-3">
                            <div className="flex flex-col">
                                <span
                                    className={`text-base md:text-lg lg:text-xl font-semibold tracking-tight leading-none transition-colors duration-300 text-green-500 pr-2 
                                      ${
                                          isScrolled
                                              ? "text-gray-900"
                                              : "text-white"
                                      }
                                    `}
                                    style={{
                                        fontFamily: "'Roboto', sans-serif",
                                        // fontStyle: "italic",
                                    }}
                                >
                                    Evergreen
                                </span>
                                <span
                                    className="text-[10px] md:text-xs font-bold tracking-wider uppercase mt-1 text-[#F2913F]"
                                    style={{
                                        fontFamily: "'Roboto', sans-serif",
                                        // fontStyle: "italic",
                                    }}
                                >
                                    Group Of Companies
                                </span>
                            </div>
                        </a>
                    </div>

                    {/* Desktop Navigation - Centered */}
                    <div className="hidden lg:flex items-center justify-center flex-1 gap-10 uppercase">
                        {NAV_LINKS.map((link) => (
                            <div
                                key={link.label}
                                className="relative group"
                                onMouseEnter={() =>
                                    link.dropdown &&
                                    setActiveDropdown(link.label)
                                }
                                onMouseLeave={() => setActiveDropdown(null)}
                            >
                                <a
                                    href={link.href}
                                    className={`flex items-center gap-1.5 text-sm font-semibold tracking-wide uppercase transition-all duration-300 ${
                                        isScrolled
                                            ? "text-gray-800"
                                            : "text-white"
                                    } hover:text-[#F2913F]`}
                                >
                                    {link.label}
                                    {link.dropdown && (
                                        <ChevronDown
                                            size={14}
                                            className={`transition-transform duration-300 uppercase ${
                                                activeDropdown === link.label
                                                    ? "rotate-180"
                                                    : ""
                                            }`}
                                        />
                                    )}
                                </a>

                                {/* Dropdown Menu */}
                                {link.dropdown && (
                                    <div
                                        className={`absolute left-1/2 -translate-x-1/2 top-full pt-4 transition-all duration-300 ${
                                            activeDropdown === link.label
                                                ? "opacity-100 visible translate-y-0"
                                                : "opacity-0 invisible -translate-y-2"
                                        }`}
                                    >
                                        <div className="bg-white shadow-xl rounded-md overflow-hidden min-w-[220px] border border-gray-100 py-2">
                                            {link.dropdown.map((subItem) => (
                                                <a
                                                    key={subItem.label}
                                                    href={subItem.href}
                                                    className="block px-6 py-2.5 text-sm font-medium text-gray-700 hover:text-[#F2913F] hover:bg-gray-50 transition-all duration-200 uppercase"
                                                >
                                                    {subItem.label}
                                                </a>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* CTA Button */}
                    <div className="hidden lg:block">
                        <a
                            href="/contact"
                            className="bg-[#F2913F] text-white px-6 py-2.5 rounded-full font-bold text-sm uppercase tracking-wider hover:bg-[#d87d2f] transition-all duration-300 shadow-md hover:shadow-lg"
                        >
                            Request a Quote
                        </a>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <div className="lg:hidden">
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            aria-label="Toggle mobile menu"
                            className={`p-2 transition-all duration-300 ${
                                isScrolled ? "text-black" : "text-white"
                            } hover:text-[#F2913F]`}
                        >
                            {mobileMenuOpen ? (
                                <X size={28} />
                            ) : (
                                <Menu size={28} />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <div
                className={`lg:hidden fixed inset-0 z-[10000] bg-white transition-all duration-500 ease-in-out ${
                    mobileMenuOpen
                        ? "translate-x-0 opacity-100"
                        : "translate-x-full opacity-0"
                }`}
            >
                <div className="flex flex-col h-full">
                    <div className="flex items-center justify-end px-6 py-6 border-b">
                        <button
                            onClick={() => setMobileMenuOpen(false)}
                            className="p-2 text-black hover:text-[#F2913F]"
                        >
                            <X size={28} />
                        </button>
                    </div>

                    <div className="flex-1 overflow-y-auto px-6 py-8 space-y-6 text-center">
                        {NAV_LINKS.map((link) => (
                            <div key={link.label} className="space-y-4">
                                <a
                                    href={link.href}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="block text-2xl font-bold text-gray-900 hover:text-[#F2913F] uppercase tracking-wider"
                                >
                                    {link.label}
                                </a>
                                {link.dropdown && (
                                    <div className="flex flex-col space-y-3 bg-gray-50 py-4 rounded-xl">
                                        {link.dropdown.map((sub) => (
                                            <a
                                                key={sub.label}
                                                href={sub.href}
                                                onClick={() =>
                                                    setMobileMenuOpen(false)
                                                }
                                                className="text-lg text-gray-600 hover:text-[#F2913F] uppercase"
                                            >
                                                {sub.label}
                                            </a>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    );
}
