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
    return (
        <section className="relative py-16 px-4 sm:px-6">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage:
                        "url('/backgrounds/infra_background.jpeg')",
                }}
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/50" />

            {/* Content */}
            <div className="relative z-10 max-w-6xl mx-auto bg-white rounded-xl shadow-xl overflow-hidden">

                {/* Header */}
                <div className="p-6 border-b text-center">
                    <h2 className="text-2xl sm:text-3xl font-bold text-[#0B1B3A]">
                        Construction Equipment Details
                    </h2>
                </div>

                {/* ========================= */}
                {/* MOBILE VIEW (Cards) */}
                {/* ========================= */}
                <div className="block md:hidden divide-y">
                    {equipmentList.map((item) => (
                        <div key={item.id} className="p-5 space-y-3">
                            <div className="flex justify-between text-sm text-gray-500">
                                <span>Sl. No.</span>
                                <span className="font-semibold text-gray-800">
                                    {item.id}
                                </span>
                            </div>

                            <div>
                                <p className="text-sm text-gray-500">
                                    Equipment
                                </p>
                                <p className="font-semibold text-gray-800">
                                    {item.description}
                                </p>
                            </div>

                            <div className="flex justify-between">
                                <div>
                                    <p className="text-sm text-gray-500">
                                        Quantity
                                    </p>
                                    <p className="font-semibold text-gray-800">
                                        {item.quantity}
                                    </p>
                                </div>

                                <div className="text-right">
                                    <p className="text-sm text-gray-500">
                                        Unit
                                    </p>
                                    <p className="font-semibold text-gray-800">
                                        {item.unit}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* ========================= */}
                {/* TABLE VIEW (Tablet & Desktop) */}
                {/* ========================= */}
                <div className="hidden md:block overflow-x-auto">
                    <table className="min-w-full border-collapse">
                        <thead className="bg-[#0B1B3A] text-white">
                            <tr>
                                <th className="px-6 py-4 text-left text-sm font-semibold">
                                    Sl. No.
                                </th>
                                <th className="px-6 py-4 text-left text-sm font-semibold">
                                    Equipment Description
                                </th>
                                <th className="px-6 py-4 text-center text-sm font-semibold">
                                    Quantity
                                </th>
                                <th className="px-6 py-4 text-center text-sm font-semibold">
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
                                    <td className="px-6 py-4 font-medium">
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
        </section>
    );
}

