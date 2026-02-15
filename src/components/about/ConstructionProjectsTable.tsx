import { useState } from "react";

export const worksData = [
    {
        slNo: 1,
        description:
            "Operation & Maintenance of Batching Plant for 6 x 660 MW Sasan UMPP",
        orderValue: 349852000,
        client: "RELIANCE INFRA",
    },
    {
        slNo: 2,
        description:
            "Operation & Maintenance of Batching Plant for 2 x 600 MW DVC Raghunathpur Project",
        orderValue: 349582900,
        client: "RELIANCE INFRA",
    },
    {
        slNo: 3,
        description:
            "Production & Supply of Concrete for Sasan UMPP (6 x 300 MW), Madhya Pradesh",
        orderValue: 153269000,
        client: "RELIANCE INFRA",
    },
    {
        slNo: 4,
        description:
            "Construction of Sub-Structure and Superstructure for Commercial & Recreational Hub at Durgapur",
        orderValue: 124000000,
        client: "BSHDL",
    },
    {
        slNo: 5,
        description:
            "Site Enabling Work for 6 x 300 MW Thermal Power Project at Chitrangi, MP",
        orderValue: 105425331,
        client: "RELIANCE INFRA",
    },
    {
        slNo: 6,
        description:
            "Earthwork for proposed new BG Line between Baidyanathdham to Dumka (Eastern Railway)",
        orderValue: 91289370,
        client: "NPCC LTD.",
    },
    {
        slNo: 7,
        description:
            "Construction of Border Fencing and Road along Indo-Bangladesh Border in Mizoram (Package-VI)",
        orderValue: 83310896,
        client: "NBCC LTD.",
    },
    {
        slNo: 8,
        description:
            "Construction of Border Fencing and Road along Indo-Bangladesh Border in Mizoram (Package-III)",
        orderValue: 81293344,
        client: "NBCC LTD.",
    },
    {
        slNo: 9,
        description:
            "Construction of Border Fencing and Road along Indo-Bangladesh Border in Mizoram (Package-III)",
        orderValue: 81293344,
        client: "NBCC LTD.",
    },
    {
        slNo: 10,
        description:
            "Construction of fencing along Indo-Bangladesh Border at Tripura (Package-I)",
        orderValue: 78718580,
        client: "NBCC LTD.",
    },
    {
        slNo: 11,
        description:
            "Construction of fencing along Indo-Bangladesh Border at Tripura (WS-A, Part-I)",
        orderValue: 78718580,
        client: "NBCC LTD.",
    },
    {
        slNo: 12,
        description:
            "Rehabilitation & Upgrading of Jamtara–Dumka Section, Jharkhand State Road Project",
        orderValue: 70565000,
        client: "RAMKY INFRASTRUCTURE",
    },
    {
        slNo: 13,
        description:
            "Earthwork and railway formation for Direct Delivery Line & Goods Shed at Barachak",
        orderValue: 64534119,
        client: "EASTERN RLY",
    },
    {
        slNo: 14,
        description:
            "Execution of balance civil work for workshop sheds and godowns at CLW Chittaranjan",
        orderValue: 60000000,
        client: "H.S.C. LTD.",
    },
    {
        slNo: 15,
        description:
            "Rehabilitation and upgrading of NH-25 (Km 104 to Km 170) to 4-lane in Uttar Pradesh",
        orderValue: 59584000,
        client: "SUNWAY",
    },
    {
        slNo: 16,
        description:
            "Rehabilitation and upgrading of NH-25 (Km 104 to Km 170) to 4-lane in Uttar Pradesh",
        orderValue: 59584000,
        client: "SUNWAY",
    },
    {
        slNo: 17,
        description:
            "Mining and Carting Works for Jaipur–Kishangarh Road Project at Jaipur",
        orderValue: 58257500,
        client: "L&T LTD.",
    },
    {
        slNo: 18,
        description:
            "Construction of heavy-duty pathway and flooring at Asansol Goods Shed",
        orderValue: 56009089,
        client: "EASTERN RLY",
    },
    {
        slNo: 19,
        description:
            "Land development, foundations, VDF & Tremix flooring and road development",
        orderValue: 50000000,
        client: "OM BESCO RAIL PRODUCTS LTD.",
    },
    {
        slNo: 20,
        description:
            "Open excavation and RCC boxing for pair of incline shafts at Milupara Coal Project, Raigarh",
        orderValue: 45000000,
        client: "MIL",
    },
    {
        slNo: 21,
        description:
            "Construction of Factory, Store, Office Building, Labour Quarter & Boundary Wall at Raigarh (CG)",
        orderValue: 37500000,
        client: "TBAPL",
    },
    {
        slNo: 22,
        description:
            "Civil Construction of Durgapur Jute Mill at Mangalpur Industrial Estate",
        orderValue: 27605000,
        client: "H.M.P. LTD.",
    },
    {
        slNo: 23,
        description:
            "Civil and Structural works for Corporate Ispat Alloys Ltd. at Durgapur",
        orderValue: 27500000,
        client: "C.I.A LTD.",
    },
    {
        slNo: 24,
        description:
            "Civil job in existing Damaghoria Railway Siding using WMM Plant",
        orderValue: 27461000,
        client: "MAITHON POWER LTD.",
    },
    {
        slNo: 25,
        description:
            "Earth Work – Four-laning and strengthening between Km 140 to Km 180 on NH2 in Bihar",
        orderValue: 26000000,
        client: "O.S.E. LTD.",
    },
    {
        slNo: 26,
        description:
            "Civil & Steel Structural Works for Ferro Alloys Plant of Tirumala Balaji Alloys Pvt. Ltd. at Raigarh",
        orderValue: 25000000,
        client: "TBAPL",
    },
    {
        slNo: 27,
        description:
            "Civil and Structural works for Expansion of Banking facilities at Graphite India Ltd, Durgapur",
        orderValue: 25000000,
        client: "G.I.L",
    },
    {
        slNo: 28,
        description:
            "Civil & Structural work for Ferro Alloys Plant at Chousal (2 x 9 MVA)",
        orderValue: 25000000,
        client: "GPT CASTING LTD.",
    },
    {
        slNo: 29,
        description:
            "Civil (including DMC piling) & Structural work for Bhaskar Sharachi Alloys Ltd. (2nd Furnace)",
        orderValue: 24000000,
        client: "B.S.A LTD.",
    },
    {
        slNo: 30,
        description:
            "Construction of 100 beds Hospital for E.S.I.C. including internal water supply and sanitary works",
        orderValue: 23474983,
        client: "NBCC LTD.",
    },
    {
        slNo: 31,
        description:
            "Construction of 2 Overhead Reservoirs under 14 MGD Water Scheme, Durgapur",
        orderValue: 22626994,
        client: "DURGAPUR MUNICIPAL CORPORATION",
    },
    {
        slNo: 32,
        description:
            "Civil and Structural works for Unit-II of Srinivasa Ferro Alloys Ltd. at Durgapur",
        orderValue: 22000000,
        client: "S.F.A.L",
    },
    {
        slNo: 33,
        description:
            "Residual earthwork for BG Line between Baidyanathdham to Dumka",
        orderValue: 21640848,
        client: "EASTERN RLY",
    },
    {
        slNo: 34,
        description:
            "Civil works for area development at DVC Raghunathpur Thermal Power Project, Purulia",
        orderValue: 20850367,
        client: "RELIANCE INFRA",
    },
    {
        slNo: 35,
        description: "Boundary Wall work (2.25 mtr height)",
        orderValue: 20692870,
        client: "ORISSA STEEL & POWER LTD.",
    },
    {
        slNo: 36,
        description:
            "Construction of complete flooring and rail guard for railway siding",
        orderValue: 20509750,
        client: "SUPER SMELTERS LTD.",
    },
    {
        slNo: 37,
        description:
            "Construction of Staff Quarters for E.S.I.C. at Durgapur including internal water supply and sanitary works",
        orderValue: 20300000,
        client: "NBCC LTD.",
    },
    {
        slNo: 38,
        description:
            "Civil and Structural works for Monnet Ferro Alloys Ltd. at Durgapur",
        orderValue: 19000000,
        client: "M.F.A.L",
    },
    {
        slNo: 39,
        description:
            "Construction of 20 Nos. Two Storied Buildings (Type-D) at Bakreshwar Thermal Power Project Township",
        orderValue: 17293259,
        client: "WBPDCL",
    },
    {
        slNo: 40,
        description:
            "Earthwork, RCC culverts, retaining walls for BG Line between Baidyanathdham to Dumka",
        orderValue: 17185476,
        client: "EASTERN RLY",
    },
    {
        slNo: 41,
        description:
            "Construction of Office Building, Staff Quarters & Boundary Wall for EPFO at Durgapur",
        orderValue: 16832605,
        client: "NBCC LTD.",
    },
    {
        slNo: 42,
        description:
            "Civil and steel structural work in the MOD-II Phase of PCBL, Durgapur (Under Various packages)",
        orderValue: 15000000,
        client: "P.C.B.L",
    },
    {
        slNo: 43,
        description:
            "Road Work for Jaipur–Kishangarh Expressway Project at Jaipur",
        orderValue: 15000000,
        client: "L&T LTD.",
    },
    {
        slNo: 44,
        description:
            "Composite Job of Mining & Crushing of Stone Ballast at Paharpur, Purulia (Eastern Railway)",
        orderValue: 15000000,
        client: "WBMTDC",
    },
    {
        slNo: 45,
        description:
            "Civil work for construction of workshop shed and godowns at Chittaranjan Locomotive Works",
        orderValue: 12734379,
        client: "CLW",
    },
    {
        slNo: 46,
        description: "Paver block laying and development work (12000 sq.m)",
        orderValue: 9420000,
        client: "SHARP FERRO ALLOYS LTD.",
    },
    {
        slNo: 47,
        description:
            "Civil & Development work of Vinayak Steels Ltd. at Durgapur",
        orderValue: 8000000,
        client: "V.S. LTD.",
    },
    {
        slNo: 48,
        description:
            "Excavation & Transportation of Earth/Moorum of Raniganj–Barakar Road (NH2)",
        orderValue: 7500000,
        client: "L&T",
    },
    {
        slNo: 49,
        description: "Fabrication & Erection Work",
        orderValue: 7500000,
        client: "SHYAM FERRO ALLOYS LTD.",
    },
    {
        slNo: 50,
        description:
            "Construction of new 100-bed Hostel, Engineering Drawing Hall & Laboratory Block at NPTI, Durgapur",
        orderValue: 7354354,
        client: "NBCC LTD.",
    },
    {
        slNo: 51,
        description:
            "Civil & Structural work for Purvanchal Sponge Iron Ltd. at Mahukunda",
        orderValue: 6500000,
        client: "P.S.I LTD.",
    },
    {
        slNo: 52,
        description: "Earthwork at ROB-II of Raniganj–Barakar Road (NH2)",
        orderValue: 6000000,
        client: "L&T",
    },
    {
        slNo: 53,
        description: "Fabrication & Erection Work",
        orderValue: 5500000,
        client: "SURYA ALLOY INDUSTRIES LTD.",
    },
    {
        slNo: 54,
        description:
            "Construction of RCC Elevated Reservoir at Jodupur (Sherpur), Malda Arsenic Area W/S Scheme",
        orderValue: 5190056,
        client: "MWSC",
    },
    {
        slNo: 55,
        description: "Civil and Structural works for Expansion of P.I Shed",
        orderValue: 4000000,
        client: "G.I.L",
    },
    {
        slNo: 56,
        description: "Interior Decoration Work for Computer Building",
        orderValue: 3223000,
        client: "D.S.P",
    },
    {
        slNo: 57,
        description:
            "Construction of RCC Overhead Reservoir of 5 Lakhs litres capacity (INTZE type) at BKTPP Township, Bakreshwar",
        orderValue: 2790936,
        client: "WBPDCL",
    },
    {
        slNo: 58,
        description:
            "Earthwork in cutting and compaction within Durgapur 400/200 KV Sub-Station area",
        orderValue: 1738816,
        client: "WBSEB",
    },
    {
        slNo: 59,
        description:
            "Providing Wardrobe and Pelmet at IOC Durgapur, Housing Complex",
        orderValue: 998000,
        client: "I.O.C",
    },
    {
        slNo: 60,
        description:
            "Design & Construction of a R.C.C Overhead Tank of 1 Lakh Litre capacity with 20 mtr. Staging complete",
        orderValue: 660000,
        client: "N.B.C.C",
    },
    {
        slNo: 61,
        description:
            "Land Development, Construction of Compound Wall & Workshop at Asansol",
        orderValue: 17500000,
        client: "S.T ASSOCIATES",
    }
];

const ROWS_PER_PAGE = 10;

export default function ConstructionProjectsTable() {
    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = Math.ceil(worksData.length / ROWS_PER_PAGE);

    const startIndex = (currentPage - 1) * ROWS_PER_PAGE;
    const currentRows = worksData.slice(startIndex, startIndex + ROWS_PER_PAGE);

    const formatCurrency = (value:any) => {
        if (!value) return "—";
        return ` ${value.toLocaleString("en-IN")}`;
    };

    return (
        <div className=" p-4 sm:p-6">
            <div
                className="
                  max-w-2xl max-h-[600px] overflow-y-auto mx-auto bg-white rounded-lg
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
                        Construction Project Orders
                    </h2>
                </div>

                {/* Table */}
                <div className="overflow-x-auto">
                    <table className="min-w-full border-collapse">
                        <thead className="bg-gray-800 text-white">
                            <tr>
                                <th className="px-4 py-3 text-center text-sm font-medium">
                                    Sl. No.
                                </th>
                                <th className="px-4 py-3 text-center text-sm font-medium">
                                    Description of Works
                                </th>
                                <th className="px-4 py-3 text-center text-sm font-medium">
                                    Order Value ₹
                                </th>
                                <th className="px-4 py-3 text-center text-sm font-medium">
                                    Client
                                </th>
                            </tr>
                        </thead>

                        <tbody className="divide-y divide-gray-200 text-sm">
                            {currentRows.map((row) => (
                                <tr
                                    key={row.slNo}
                                    className="
                                      hover:bg-gray-50
                                      transition-all duration-200
                                      hover:shadow-sm
                                      cursor-default
                                    "
                                >
                                    <td className="px-4 py-3 whitespace-nowrap">
                                        {row.slNo}
                                    </td>

                                    <td className="px-4 py-3 min-w-[320px]">
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
                <div className="flex flex-col sm:flex-row items-center justify-between gap-3 p-4 border-t">
                    <span className="text-sm text-gray-600">
                        Page {currentPage} of {totalPages}
                    </span>

                    <div className="flex gap-2">
                        <button
                            onClick={() =>
                                setCurrentPage((p) => Math.max(p - 1, 1))
                            }
                            disabled={currentPage === 1}
                            className="px-4 py-2 text-sm rounded bg-gray-200 hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed"
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
                            className="px-4 py-2 text-sm rounded bg-gray-800 text-white hover:bg-gray-900 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            Next
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
