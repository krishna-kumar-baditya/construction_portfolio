import { useState } from "react";
export const worksData = [
  { slNo: 1, description: "Operation & Maintenance of batching plant for RMC production (6x660 MW Sasan UMPP, MP)", orderValue: 349852000, client: "RELIANCE INFRA" },
  { slNo: 2, description: "Operation & Maintenance of batching plant for 2x600 MW DVC Raghunathpur project, West Bengal", orderValue: 349582900, client: "RELIANCE INFRA" },
  { slNo: 3, description: "Production & supply of concrete for Unit-I to VI (6x300 MW), Sasan UMPP, Madhya Pradesh", orderValue: 153269000, client: "RELIANCE INFRA" },
  { slNo: 4, description: "Construction of Sub-Structure and Superstructure for proposed Commercial & Recreational Hub at Durgapur (WB)", orderValue: 124000000, client: "BSHDL" },
  { slNo: 5, description: "Site enabling work for 6x300 MW Thermal Power Project, Chitrangi, MP", orderValue: 105425331, client: "RELIANCE INFRA" },
  { slNo: 6, description: "Earthwork in formation by filling/cutting earth and ancillary work for new B.G. line between Baidyanathdham to Dumka (Ch. 06.00 KM to 33.00 KM)", orderValue: 91289370, client: "NPCC Ltd" },
  { slNo: 7, description: "Construction of Border Fencing and Road along Indo-Bangladesh Border (IBB) in Mizoram State (Package-VI)", orderValue: 83310896, client: "NBCC Ltd" },
  { slNo: 8, description: "Construction of Border Fencing and Road along Indo-Bangladesh Border (IBB) in Mizoram State (Package-III)", orderValue: 81293344, client: "NBCC Ltd" },
  { slNo: 9, description: "Construction of fencing along Indo-Bangladesh Border at Tripura – WS (Package-I)", orderValue: 78718580, client: "NBCC Ltd." },
  { slNo: 10, description: "Construction of fencing along Indo-Bangladesh Border at Tripura – WS (A), Putia to Ashabari", orderValue: 78718580, client: "NBCC Ltd." },
  { slNo: 11, description: "Rehabilitation & upgrading of Jamtara–Dumka section of Gobindpur–Sahebganj road project (Jharkhand)", orderValue: 70565000, client: "RAMKY INFRASTRUCTURE" },
  { slNo: 12, description: "Earthwork for railway formation, bridges, flooring & linking at Asansol Division (Barachak)", orderValue: 64534119, client: "EASTERN RLY" },
  { slNo: 13, description: "Execution of balance civil work for workshop sheds, godowns etc. at CLW/Chittaranjan", orderValue: 60000000, client: "H.S.C.LTD." },
  { slNo: 14, description: "Rehabilitation and upgrading of KM 104.00 to KM 170.00 of NH-25 to 4-Lane configuration in Uttar Pradesh – Package EW-H (UP-4)", orderValue: 59584000, client: "SUNWAY" },
  { slNo: 15, description: "Mining and Carting Works for Jaipur – Kishangarh Road Project at Jaipur", orderValue: 58257500, client: "L&T LTD." },
  { slNo: 16, description: "Construction of heavy duty pathway and flooring between Direct Delivery Line No. 2 & 4 at Asansol Goods Shed", orderValue: 56009089, client: "EASTERN RLY" },
  { slNo: 17, description: "Construction of heavy duty pathway and flooring between Direct Delivery Line No. 2 & 4 at Asansol Goods Shed", orderValue: 56009089, client: "EASTERN RLY" },
  { slNo: 18, description: "Land development, structural & machinery foundation, VDF & tremix flooring (20000 sqm), paver road development", orderValue: 50000000, client: "OM BESCO RAIL PRODUCTS LTD." },
  { slNo: 19, description: "Open excavation and RCC boxing for drivage of pair of inclin shafts at Kondkel, Milupara Coal Project of Monnet Ispat Limited at Raigarh", orderValue: 45000000, client: "MIL" },
  { slNo: 20, description: "Construction of Factory Building, Store Building, Office Building, Labour Quarter, Boundary Wall at Raigarh (CG)", orderValue: 37500000, client: "TBAPL" },
  { slNo: 21, description: "Civil Construction of Durgapur Jute Mill at Mangalpur Industrial Estate", orderValue: 27605000, client: "H.M.P. LTD." },
  { slNo: 22, description: "Civil job in Damaghoria Railway siding using WMM plant (Maithon Power Limited)", orderValue: 27461000, client: "MAITHONPOWER LTD." },
  { slNo: 23, description: "Civil and Structural works for Corporate Ispat Alloys Ltd. at Durgapur", orderValue: 27500000, client: "C.I.A LTD." },
  { slNo: 24, description: "Earth Work – Four lining and strengthening of two lane sections between Km 140 to Km 180 on NH2 in Bihar", orderValue: 26000000, client: "O.S.E. LTD." },
  { slNo: 25, description: "Civil & Structural work for Ferro Alloys Plant at Chousal, Bankura (2 units of 9 MVA capacity)", orderValue: 25000000, client: "GPT CASTING LTD" },
  { slNo: 26, description: "Civil & Steel Structural Works for Ferro Alloys Plant of Tirumala Balaji Alloys Pvt. Ltd. at Raigarh", orderValue: 25000000, client: "TBAPL" },
  { slNo: 27, description: "Civil and Structural works for Expansion of Banking facilities at Graphite India Ltd, Durgapur", orderValue: 25000000, client: "G.I.L" },
  { slNo: 28, description: "Civil (including DMC piling) & Structural work for Bhaskar Sharachi Alloys Ltd. (2nd furnace)", orderValue: 24000000, client: "B.S.A LTD." },
  { slNo: 29, description: "Construction of 100 beds Hospital for E.S.I.C. including internal water supply and sanitary works", orderValue: 23474983, client: "NBCC LTD." },
  { slNo: 30, description: "Construction of 2 overhead reservoirs at Durgapur Municipal Corporation under 14 MGD water scheme", orderValue: 22626994, client: "DURGAPUR MUNICIPAL CORPORATION" },
  { slNo: 31, description: "Civil and Structural works for Unit-ii of Srinivasa Ferro Alloys Ltd. at Durgapur", orderValue: 22000000, client: "S.F.A.L" },
  { slNo: 32, description: "Residual earthwork and ancillary work for B.G. line between Baidyanathdham to Dumka (Ch. 62.50 KM to 62.90 KM)", orderValue: 21640848, client: "EASTERN RLY" },
  { slNo: 33, description: "Civil works for area development of open storage yard, temporary roads & drains for 2x600 MW DVC Raghunathpur Thermal Power Project, Purulia, West Bengal", orderValue: 20850367, client: "RELIANCE INFRA" },
  { slNo: 34, description: "Boundary wall work (2.25 m height)", orderValue: 20692870, client: "ORISSA STEEL & POWER LTD" },
  { slNo: 35, description: "Construction of flooring of wharf-1 and rail guard for railway siding", orderValue: 20509750, client: "SUPER SMELTERS LTD." },
  { slNo: 36, description: "Construction of Staff Quarters for E.S.I.C. at Durgapur including internal water supply and sanitary works", orderValue: 20300000, client: "NBCC LTD." },
  { slNo: 37, description: "Civil and Structural works for Monnet Ferro Alloys Ltd. at Durgapur", orderValue: 19000000, client: "M.F.A.L" },
  { slNo: 38, description: "Land development, compound wall & workshop construction at Asansol (S.T Associates)", orderValue: 17500000, client: "S.T ASSOCIATES" },
  { slNo: 39, description: "Construction of 20 Nos. Two Storied Building (Type-D) at Bakreshwar Thermal Power Project Township", orderValue: 17293259, client: "WBPDCL" },
  { slNo: 40, description: "Earthwork including RCC culverts, slabs, retaining walls, drains for B.G. line between Baidyanathdham to Dumka (Ch. 38.00 KM to 44.00 KM)", orderValue: 17185476, client: "EASTERN RLY" },
  { slNo: 41, description: "Construction of Office Building, Staff Quarters & Boundary Wall for EPFO at Durgapur (3 LOIs)", orderValue: 16832605, client: "NBCC Ltd." },
  { slNo: 42, description: "Civil and steel structural work in the MOD-II Phase of PCBL, Durgapur (Under Various packages)", orderValue: 15000000, client: "P.C.B.L" },
  { slNo: 43, description: "Mining & Crushing of Stone Ballast at Paharpur, Purulia under Eastern Railway", orderValue: 15000000, client: "WBMTDC" },
  { slNo: 44, description: "Road Work – Jaipur – Kishangarh Expressway Project at Jaipur", orderValue: 15000000, client: "L&T LTD." },
  { slNo: 45, description: "Paver block laying with development (12000 sq. mtr.)", orderValue: 9420000, client: "SHARP FERRO ALLOYS LTD." },
  { slNo: 46, description: "Civil & Development work of Vinayak Steels Ltd. at Durgapur", orderValue: 8000000, client: "V.S. LTD." },
  { slNo: 47, description: "Fabrication & Erection Work", orderValue: 7500000, client: "SHYAM FERRO ALLOYS LTD." },
  { slNo: 48, description: "Excavation & Transportation of Earth/Moorum of Raniganj – Barakar Road (NH2)", orderValue: 7500000, client: "L&T" },
  { slNo: 49, description: "Construction of new 100 bed hostel buildings, engineering drawing hall & laboratory block at NPTI Durgapur", orderValue: 7354354, client: "NBCC LTD." },
  { slNo: 50, description: "Civil & Structural work for Purvanchal Sponge Iron Ltd. at Mahukunda", orderValue: 6500000, client: "P.S.I LTD." },
  { slNo: 51, description: "Earthwork at ROB-II of Raniganj – Barakar Road (NH2)", orderValue: 6000000, client: "L&T" },
  { slNo: 52, description: "Fabrication & Erection Work", orderValue: 5500000, client: "SURYA ALLOY INDUSTRIES LTD." },
  { slNo: 53, description: "Construction of RCC elevated reservoir at Jodupur (Sherpur, Zone-XV), Malda (Phase-II)", orderValue: 5190056, client: "MWSC" },
  { slNo: 54, description: "Civil and Structural works for Expansion of P.I shed", orderValue: 4000000, client: "G.I.L" },
  { slNo: 55, description: "Interior Decoration Work for Computer Building", orderValue: 3223000, client: "D.S.P" },
  { slNo: 56, description: "Construction of RCC overhead reservoir of 5 Lakhs litres capacity (INTZE type) at BKTPP Township, Bakreshwar", orderValue: 2790936, client: "WBPDCL" },
  { slNo: 57, description: "Earthwork in cutting in high land within Sub-Station area including compaction at Durgapur 400/200 KV Sub-Stn", orderValue: 1738816, client: "WBSEB" },
  { slNo: 58, description: "Providing Wardrobe and Pelmet at IOC Durgapur, Housing Complex", orderValue: 998000, client: "I.O.C" },
  { slNo: 59, description: "Design & Constn. of a R.C.C Overhead Tank of 1 Lakh Litre capacity with 20 mtr. Staging complete", orderValue: 660000, client: "N.B.C.C" }
];
const ROWS_PER_PAGE = 10;

export default function ConstructionProjectsTable() {
    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = Math.ceil(worksData.length / ROWS_PER_PAGE);
    const startIndex = (currentPage - 1) * ROWS_PER_PAGE;
    const currentRows = worksData.slice(startIndex, startIndex + ROWS_PER_PAGE);

    const formatCurrency = (value: number) => {
        if (!value) return "—";
        return `${value.toLocaleString("en-IN")}`;
    };

    return (
        <div className="px-4 sm:px-6 lg:px-8 py-6">
            <div className="max-w-7xl mx-auto bg-white rounded-xl shadow-md">
                {/* Header */}
                <div className="p-5 border-b">
                    <h2 className="text-xl md:text-2xl font-semibold text-gray-800 text-center">
                        Major Construction Projects
                    </h2>
                </div>

                {/* ========================= */}
                {/* MOBILE CARD VIEW */}
                {/* ========================= */}
                <div className="block md:hidden divide-y">
                    {currentRows.map((row) => (
                        <div key={row.slNo} className="p-4 space-y-2">
                            <div className="flex justify-between text-sm text-gray-500">
                                <span>Sl. No.</span>
                                <span className="font-medium text-gray-800">
                                    {row.slNo}
                                </span>
                            </div>

                            <div>
                                <p className="text-sm text-gray-500">
                                    Description
                                </p>
                                <p className="text-gray-800 font-medium">
                                    {row.description}
                                </p>
                            </div>

                            <div className="flex justify-between">
                                <div>
                                    <p className="text-sm text-gray-500">
                                        Order Value ₹
                                    </p>
                                    <p className="font-semibold text-gray-800">
                                        {formatCurrency(row.orderValue)}
                                    </p>
                                </div>

                                <div className="text-right">
                                    <p className="text-sm text-gray-500">
                                        Client
                                    </p>
                                    <p className="font-medium text-gray-800">
                                        {row.client || "—"}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* ========================= */}
                {/* TABLE VIEW (Tablet & Up) */}
                {/* ========================= */}
                <div className="hidden md:block overflow-x-auto">
                    <table className="min-w-full border-collapse">
                        <thead className="bg-gray-800 text-white">
                            <tr>
                                <th className="px-4 py-3 text-left text-sm font-medium">
                                    Sl. No.
                                </th>
                                <th className="px-4 py-3 text-left text-sm font-medium">
                                    Description of Works
                                </th>
                                <th className="px-2 py-3 text-right text-sm font-medium">
                                    Order Value ₹
                                </th>
                                <th className="px-4 py-3 text-left text-sm font-medium">
                                    Client
                                </th>
                            </tr>
                        </thead>

                        <tbody className="divide-y text-sm">
                            {currentRows.map((row) => (
                                <tr
                                    key={row.slNo}
                                    className="hover:bg-gray-50 transition"
                                >
                                    <td className="px-4 py-3 whitespace-nowrap">
                                        {row.slNo}
                                    </td>

                                    <td className="px-4 py-3">
                                        {row.description}
                                    </td>

                                    <td className="px-4 py-3 text-right font-medium">
                                        {formatCurrency(row.orderValue)}
                                    </td>

                                    <td className="px-4 py-3 whitespace-nowrap">
                                        {row.client || "—"}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Pagination */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-5 border-t">
                    <span className="text-sm text-gray-600">
                        Page {currentPage} of {totalPages}
                    </span>

                    <div className="flex gap-2">
                        <button
                            onClick={() =>
                                setCurrentPage((p) => Math.max(p - 1, 1))
                            }
                            disabled={currentPage === 1}
                            className="px-4 py-2 text-sm rounded-md bg-gray-200 hover:bg-gray-300 disabled:opacity-50"
                        >
                            Previous
                        </button>

                        <button
                            onClick={() =>
                                setCurrentPage((p) =>
                                    Math.min(p + 1, totalPages),
                                )
                            }
                            disabled={currentPage === totalPages}
                            className="px-4 py-2 text-sm rounded-md bg-gray-800 text-white hover:bg-gray-900 disabled:opacity-50"
                        >
                            Next
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
