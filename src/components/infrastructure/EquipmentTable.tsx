const equipmentData = [
  { slNo: 1, description: "Excavator (L & T) Komatsu PC-300-6", quantity: "1 No." },
  { slNo: 2, description: "Excavator (L & T) Komatsu PC-200-6", quantity: "5 Nos." },
  { slNo: 3, description: "Excavator (L & T) CK-72", quantity: "1 No." },
  { slNo: 4, description: "Excavator (L & T) PC-71", quantity: "2 Nos." },
  { slNo: 5, description: "RMC Batching plant - 30 Cum/Hr.", quantity: "1 No." },
  { slNo: 6, description: "RMC Batching plant - 18 Cum/Hr.", quantity: "1 No." },
  { slNo: 7, description: "Concrete Pump", quantity: "2 Nos." },
  { slNo: 8, description: "Transit Mixer", quantity: "26 Nos." },
  { slNo: 9, description: "Bulker (Cement / Fly Ash)", quantity: "2 Nos." },
  { slNo: 10, description: "Dozer (D 80 -2 Nos. & D40-1 No.)", quantity: "3 Nos." },
  { slNo: 11, description: "Motor grader (BEML)", quantity: "2 Nos." },
  { slNo: 12, description: "Crawler Drill (I/R)", quantity: "2 Nos." },
  { slNo: 13, description: "Payloader (HM-2021)", quantity: "6 Nos." },
  { slNo: 14, description: "Backhoe Loader", quantity: "6 Nos." },
  { slNo: 15, description: "Vibratory Roller (Compactor)", quantity: "4 Nos." },
  { slNo: 16, description: "Road Roller (8-10 M/T. JESSOP)", quantity: "1 No." },
  { slNo: 17, description: "Dumper - HYWA (10 wheelers)", quantity: "24 Nos." },
  { slNo: 18, description: "Dumper (6 wheelers)", quantity: "24 Nos." },
  { slNo: 19, description: "Truck", quantity: "4 Nos." },
  { slNo: 20, description: "Water Tanker", quantity: "2 Nos." },
  { slNo: 21, description: "Mixer Machine", quantity: "9 Nos." },
  { slNo: 22, description: "Vibrator Machine", quantity: "8 Nos." },
  { slNo: 23, description: "Steel Plates & Scaffolding", quantity: "2000 Sq.Mtrs." },
  { slNo: 24, description: "Winch (Electric)", quantity: "1 No." },
  { slNo: 25, description: "Theodolite", quantity: "2 Nos." },
  { slNo: 26, description: "Levelling Instrument", quantity: "4 Nos." },
  { slNo: 27, description: "Water Pump (3 Diesel & 2 Elect)", quantity: "5 Nos." },
  { slNo: 28, description: "Diesel Welding Generator", quantity: "3 Nos." },
  { slNo: 29, description: "Welding Machine (Electrical)", quantity: "7 Nos." },
  { slNo: 30, description: "Compressor", quantity: "2 Nos." },
  { slNo: 31, description: "Pneumatic Holiman Jack Hammers", quantity: "4 Nos." },
  { slNo: 33, description: "Crusher Machine", quantity: "1 No." }
];

export default function EquipmentTable() {
  return (
    <div className="bg-gray-100 p-4 sm:p-6">
      <div
        className="
          max-w-6xl mx-auto bg-white rounded-lg
          shadow-sm hover:shadow-xl
          transition-all duration-300 ease-in-out
          hover:-translate-y-1
        "
        style={{
          fontFamily: '"Roboto", sans-serif',
          fontWeight: "500",
        }}
      >
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
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-200 text-sm">
              {equipmentData.map((item) => (
                <tr
                  key={item.slNo}
                  className="
                    hover:bg-gray-50
                    transition-all duration-200
                    hover:shadow-sm
                    cursor-default
                  "
                >
                  <td className="px-4 py-3 whitespace-nowrap text-center font-semibold">
                    {item.slNo}
                  </td>

                  <td className="px-4 py-3 min-w-[300px] font-semibold">
                    {item.description}
                  </td>

                  <td className="px-4 py-3 whitespace-nowrap text-center font-semibold">
                    {item.quantity}
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

