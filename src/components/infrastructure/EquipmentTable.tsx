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
        <div className="relative overflow-hidden p-4 sm:p-6">
            {/* Background Image Layer */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage:
                        "url('/backgrounds/infra_background.jpeg')",
                }}
            />

            {/* Dark Overlay (controls opacity properly) */}
            <div className="absolute inset-0 bg-black/40" />

            {/* Content Layer */}
            <div className="relative z-10 max-w-3xl opacity-85 overflow-y-auto mx-auto bg-white rounded-lg shadow-lg ">
                {/* Header */}
                <div className="p-4 border-b">
                    <h2 className="text-lg sm:text-xl font-semibold text-gray-800 text-center">
                        Construction Equipment Details
                    </h2>
                </div>

                {/* Table */}
                <div className="overflow-x-auto">
                    <table className="min-w-full border-collapse">
                        <thead className="bg-gray-800 text-white">
                            <tr>
                                <th className="px-4 py-3 text-center text-sm font-bold">
                                    Sl. No.
                                </th>
                                <th className="px-4 py-3 text-center text-sm font-bold">
                                    Equipment Description
                                </th>
                                <th className="px-4 py-3 text-center text-sm font-bold">
                                    Quantity
                                </th>
                                <th className="px-4 py-3 text-center text-sm font-bold">
                                    Unit
                                </th>
                            </tr>
                        </thead>

                        <tbody className="divide-y divide-gray-200 text-sm bg-white">
                            {equipmentList.map((item) => (
                                <tr
                                    key={item.id}
                                    className="hover:bg-gray-50 transition-all duration-200"
                                >
                                    <td className="px-4 py-3 text-center font-semibold">
                                        {item.id}
                                    </td>
                                    <td className="px-4 py-3 min-w-[300px] font-semibold">
                                        {item.description}
                                    </td>
                                    <td className="px-4 py-3 text-center font-semibold">
                                        {item.quantity}
                                    </td>
                                    <td className="px-4 py-3 text-center font-semibold">
                                        {item.unit}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
