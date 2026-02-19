import { useState } from "react";
import Image from "next/image";

const infrastructureImages = [
    "/infrastructure/infra1.jpeg",
    "/infrastructure/infra2.jpeg",
    "/infrastructure/infra3.jpeg",
    "/infrastructure/infra4.jpeg",
    "/infrastructure/infra5.jpeg",
    "/infrastructure/infra6.jpeg",
];

const equipmentList = [
    { id: 1, description: "Excavator 300", quantity: 2, unit: "Nos." },
    { id: 2, description: "Excavator 200", quantity: 8, unit: "Nos." },
    { id: 3, description: "Payloader", quantity: 10, unit: "Nos." },
    {
        id: 4,
        description: "Dumper - HYWA (10 wheelers)",
        quantity: 50,
        unit: "Nos.",
    },
    {
        id: 5,
        description: "Dumper - HYWA (12 wheelers)",
        quantity: 34,
        unit: "Nos.",
    },
    {
        id: 6,
        description: "Dumper - HYWA (16 wheelers)",
        quantity: 21,
        unit: "Nos.",
    },
    {
        id: 7,
        description: "RMC Batching Plant - 30 Cum/Hr.",
        quantity: 1,
        unit: "Nos.",
    },
    {
        id: 8,
        description: "RMC Batching Plant - 18 Cum/Hr.",
        quantity: 1,
        unit: "Nos.",
    },
    { id: 9, description: "Concrete Pump", quantity: 2, unit: "Nos." },
    { id: 10, description: "Transit Mixer", quantity: 15, unit: "Nos." },
    { id: 11, description: "Hydra", quantity: 6, unit: "Nos." },
    { id: 12, description: "Farana Crane", quantity: 1, unit: "Nos." },
    { id: 13, description: "Road Roller", quantity: 1, unit: "Nos." },
    { id: 14, description: "Water Tanker", quantity: 1, unit: "Nos." },
    { id: 15, description: "Mixer Machine", quantity: 4, unit: "Nos." },
    { id: 16, description: "Vibrator Machine", quantity: 5, unit: "Nos." },
    {
        id: 17,
        description: "Steel Plates & Scaffolding",
        quantity: 2000,
        unit: "Sq.Mtrs.",
    },
    { id: 18, description: "Theodolite", quantity: 2, unit: "Nos." },
    { id: 19, description: "Levelling Instrument", quantity: 3, unit: "Nos." },
    { id: 20, description: "Water Pump", quantity: 5, unit: "Nos." },
    {
        id: 21,
        description: "Diesel Welding Generator",
        quantity: 2,
        unit: "Nos.",
    },
    {
        id: 22,
        description: "Welding Machine (Electrical)",
        quantity: 7,
        unit: "Nos.",
    },
    { id: 23, description: "Cutting Torch Set", quantity: 5, unit: "Nos." },
];

export default function EquipmentTable() {
    const [activeSection, setActiveSection] = useState("table");
    // "table" | "image" | null

    const toggleSection = (section: any) => {
        setActiveSection((prev) => (prev === section ? null : section));
    };

    return (
        <section className="py-16 px-4 sm:px-6 bg-gray-50">
            <div className="max-w-4xl mx-auto space-y-6">
                {/* ================= TABLE TOGGLE ================= */}
                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                    <button
                        onClick={() => toggleSection("table")}
                        className="w-full text-left px-6 py-4 bg-[#0B1B3A] text-white font-semibold text-2xl flex justify-between items-center cursor-pointer"
                    >
                        Construction Equipment List
                        <span>{activeSection === "table" ? "−" : "+"}</span>
                    </button>

                    <div
                        className={`transition-all duration-500 overflow-hidden ${
                            activeSection === "table"
                                ? "max-h-[2000px] opacity-100"
                                : "max-h-0 opacity-0"
                        }`}
                    >
                        <div className="overflow-x-auto">
                            <table className="min-w-full border-collapse">
                                <thead className="bg-gray-100 text-gray-800">
                                    <tr>
                                        <th className="px-4 py-3 text-left text-sm font-semibold">
                                            Sl. No.
                                        </th>
                                        <th className="px-4 py-3 text-left text-sm font-semibold">
                                            Equipment Description
                                        </th>
                                        <th className="px-4 py-3 text-center text-sm font-semibold">
                                            Quantity
                                        </th>
                                        <th className="px-4 py-3 text-center text-sm font-semibold">
                                            Unit
                                        </th>
                                    </tr>
                                </thead>

                                <tbody className="divide-y text-sm bg-white">
                                    {equipmentList.map((item) => (
                                        <tr
                                            key={item.id}
                                            className="hover:bg-gray-50 transition"
                                        >
                                            <td className="px-6 py-4">
                                                {item.id}
                                            </td>
                                            <td className="px-6 py-4">
                                                {item.description}
                                            </td>
                                            <td className="px-6 py-4 text-center font-semibold">
                                                {item.quantity}
                                            </td>
                                            <td className="px-6 py-4 text-center">
                                                {item.unit}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                {/* ================= IMAGE TOGGLE ================= */}
                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                    <button
                        onClick={() => toggleSection("image")}
                        className="w-full text-left px-6 py-4 bg-[#F2913F] text-white font-semibold text-2xl flex justify-between items-center cursor-pointer"
                    >
                        Equipment Gallery
                        <span>{activeSection === "image" ? "−" : "+"}</span>
                    </button>

                    <div
                        className={`transition-all duration-500 overflow-hidden ${
                            activeSection === "image"
                                ? "max-h-[1200px] opacity-100"
                                : "max-h-0 opacity-0"
                        }`}
                    >
                        <div className="p-6">
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                                {infrastructureImages.map((src, index) => (
                                    <div
                                        key={index}
                                        className="relative w-full h-56 rounded-xl overflow-hidden shadow-md group"
                                    >
                                        <Image
                                            src={src}
                                            alt={`Infrastructure ${index + 1}`}
                                            fill
                                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
