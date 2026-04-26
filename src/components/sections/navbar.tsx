"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import Link from "next/link";

type DropdownItem = {
    label: string;
    href: string;
    logo?: string;
};

type NavLink = {
    label: string;
    href: string;
    dropdown?: DropdownItem[];
};

const NAV_LINKS: NavLink[] = [
    { label: "Home", href: "/" },
    {
        label: "About Us",
        href: "/about",
        dropdown: [
            { label: "Company History", href: "/about#history" },
            { label: "Mission & Vision", href: "/about#mission" },
            { label: "Leadership", href: "/about#leadership" },
        ],
    },
    {
        label: "Group Companies",
        href: "/companies",
        dropdown: [
            {
                label: "EVERGREEN CONSTRUCTION DURGAPUR PVT. LTD.",
                href: "/companies/ecpl",
                logo: "/logos/ecpl.jpg",
            },
            {
                label: "EVERGREEN MANAGEMENT CONSULTANTS LLP",
                href: "/companies/emcl",
                logo: "/logos/emcl.jpg",
            },
            {
                label: "Sunrise Movers & Logistics",
                href: "/companies/sunrise",
                logo: "/logos/sunrise.jpg",
            },
            {
                label: "V.R. Minerals",
                href: "/companies/vrm",
                logo: "/logos/V_R_MINERALS_LOGO.jpg",
            },
            {
                label: "Evergreen Minerals Pvt. ltd.",
                href: "/companies/minerals",
                logo: "/logos/Evergreen_minerals.jpg",
            },
            {
                label: "SSky High Pioneer Concrete LLP",
                href: "/companies/shc",
                logo: "/logos/sky_high.jpg",
            },
            {
                label: "JR AGRITECH",
                href: "/companies/jrag",
                logo: "/logos/JR_AGRITECH_LOGO.png",
            },
        ],
    },
    { label: "Projects", href: "/projects" },
    { label: "Contact", href: "/contact" },
];

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 200);
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
            <div className="mx-auto px-6 lg:px-16">
                <div className="flex justify-between items-center h-20">
                    {/* Logo */}
                    <div className="shrink-0">
                        <Link href="/" className="flex items-center gap-3">
                            <div className="flex flex-col">
                                <span
                                    className={`text-base md:text-lg lg:text-xl font-semibold tracking-tight ${
                                        isScrolled
                                            ? "text-gray-900"
                                            : "text-white"
                                    }`}
                                >
                                    Evergreen
                                </span>
                                <span className="text-[10px] md:text-xs font-bold uppercase text-[#F2913F]">
                                    Group Of Companies
                                </span>
                            </div>
                        </Link>
                    </div>

                    {/* Desktop */}
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
                                    className={`flex items-center gap-1.5 text-sm font-semibold ${
                                        isScrolled
                                            ? "text-gray-800"
                                            : "text-white"
                                    } hover:text-[#F2913F]`}
                                >
                                    {link.label}
                                    {link.dropdown && (
                                        <ChevronDown
                                            size={14}
                                            className={`transition-transform ${
                                                activeDropdown === link.label
                                                    ? "rotate-180"
                                                    : ""
                                            }`}
                                        />
                                    )}
                                </a>

                                {link.dropdown && (
                                    <div
                                        className={`absolute left-1/2 -translate-x-1/2 top-full pt-4 ${
                                            activeDropdown === link.label
                                                ? "opacity-100 visible"
                                                : "opacity-0 invisible"
                                        }`}
                                    >
                                        <div className="bg-white shadow-xl rounded-xl min-w-[320px] border py-2">
                                            {link.dropdown.map((subItem) => (
                                                <a
                                                    key={subItem.label}
                                                    href={subItem.href}
                                                    className="flex items-center gap-4 px-6 py-3 text-sm font-semibold text-gray-700 hover:text-[#F2913F] hover:bg-gray-50"
                                                >
                                                    {subItem.logo && (
                                                        <div className="w-16 h-10 bg-white rounded border flex items-center justify-center overflow-hidden">
                                                            <Image
                                                                src={
                                                                    subItem.logo
                                                                }
                                                                alt={
                                                                    subItem.label
                                                                }
                                                                width={80}
                                                                height={50}
                                                                className="object-contain"
                                                            />
                                                        </div>
                                                    )}
                                                    {subItem.label}
                                                </a>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Mobile Toggle */}
                    <div className="lg:hidden">
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className={`p-2 ${
                                isScrolled ? "text-black" : "text-white"
                            }`}
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

            {/* Mobile Menu */}
            <div
                className={`lg:hidden fixed inset-0 bg-white transition-all duration-500 ${
                    mobileMenuOpen
                        ? "translate-x-0 opacity-100"
                        : "translate-x-full opacity-0"
                }`}
            >
                <div className="flex flex-col h-full">
                    {/* Close Button */}
                    <div className="flex justify-end p-6 border-b">
                        <button onClick={() => setMobileMenuOpen(false)}>
                            <X size={28} />
                        </button>
                    </div>

                    {/* Menu Content */}
                    <div className="flex-1 overflow-y-auto px-6 py-8 space-y-8">
                        {NAV_LINKS.map((link) => (
                            <div
                                key={link.label}
                                className="space-y-3 border-b pb-6"
                            >
                                {/* Parent Link */}
                                {link.href ? (
                                    <a
                                        href={link.href}
                                        onClick={() => setMobileMenuOpen(false)}
                                        className="block text-2xl font-bold text-gray-900 uppercase"
                                    >
                                        {link.label}
                                    </a>
                                ) : (
                                    <div className="text-2xl font-bold text-gray-900 uppercase">
                                        {link.label}
                                    </div>
                                )}

                                {/* Always Visible Dropdown */}
                                {link.dropdown && (
                                    <div className="flex flex-col gap-3 bg-gray-50 py-4 rounded-xl">
                                        {link.dropdown.map((sub) => (
                                            <a
                                                key={sub.label}
                                                href={sub.href}
                                                onClick={() =>
                                                    setMobileMenuOpen(false)
                                                }
                                                className="flex items-center gap-4 px-4 py-2 text-sm uppercase font-semibold text-gray-700 hover:text-[#F2913F] transition-colors"
                                            >
                                                {sub.logo && (
                                                    <div className="w-12 h-8 bg-white rounded border flex items-center justify-center overflow-hidden">
                                                        <Image
                                                            src={sub.logo}
                                                            alt={sub.label}
                                                            width={60}
                                                            height={40}
                                                            className="object-center"
                                                        />
                                                    </div>
                                                )}
                                                <span className=" uppercase">

                                                {sub.label}
                                                </span>
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
