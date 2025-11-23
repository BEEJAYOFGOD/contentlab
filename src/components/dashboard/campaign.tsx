import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function CampaignsDashboard() {
    // const [selectedFilter, setSelectedFilter] = useState("All campaigns");
    const [searchQuery, setSearchQuery] = useState("");

    const campaigns = [
        {
            id: 1,
            title: "Web3 Gaming Platform Launch",
            description:
                "Launching an educational platform to build an innovative Web3 Gaming ecosystem for our global community.",
            status: "Active",
            creator: "oxyfas.blake @",
            sui: "5 SUI",
            progress: 65,
            days: "ended 7 days",
            budget: "+ $5200",
        },
        {
            id: 2,
            title: "DeFi Protocol Marketing Campaign",
            description:
                "Launching protocol across social media and crypto communities.",
            status: "Active",
            creator: "ox487m_ub42 @",
            sui: "3 SUI",
            progress: 45,
            days: "ends in 14 hours",
            budget: "+ $3200",
        },
        {
            id: 3,
            title: "DAO Governance Development",
            description:
                "Building a decentralized autonomous organization and developer experience lab for core initiative.",
            status: "Active",
            creator: "oxffm.0000 @",
            sui: "6 SUI",
            progress: 30,
            days: "ended 14 days",
            budget: "+ $5200",
        },
        {
            id: 4,
            title: "DAO Governance Development",
            description:
                "Building a decentralized autonomous organization and developer experience lab for core initiative.",
            status: "Active",
            creator: "oxffm.0000 @",
            sui: "6 SUI",
            progress: 50,
            days: "ended 14 days",
            budget: "+ $5200",
        },
        {
            id: 5,
            title: "NFT Marketplace UI/UX Design",
            description:
                "Needed sustainable design works to craft a modern, user-friendly interfaces for our NFT marketplace.",
            status: "Active",
            creator: "Dravkosh @",
            sui: "2.5 SUI",
            progress: 75,
            days: "ended about 1 month",
            budget: "+ $3200",
        },
        {
            id: 6,
            title: "Metaverse Content Creation",
            description:
                "Looking for 3D artists and animators to create immersive content for our metaverse platform built on blockinc.",
            status: "Active",
            creator: "0xax000_0000 @",
            sui: "4.5 SUI",
            progress: 20,
            days: "ended about 0 months",
            budget: "+ $3200",
        },
        {
            id: 7,
            title: "Smart Contract Audit Service",
            description:
                "Looking for professional security audit firm to review our smart contracts and provide audit reports.",
            status: "Active",
            creator: "0xai405_444 @",
            sui: "8 SUI",
            progress: 55,
            days: "ended 7 days",
            budget: "+ $3200",
        },
        {
            id: 8,
            title: "Web3 Gaming Platform Launch",
            description:
                "Launching an educational platform to build an innovative Web3 Gaming ecosystem for our global community.",
            status: "Active",
            creator: "oxyfas.blake @",
            sui: "5 SUI",
            progress: 65,
            days: "ended 7 days",
            budget: "+ $5200",
        },
    ];

    return (
        <div className="w-full bg-white p-8 min-h-screen">
            {/* Header */}
            <div className="mb-8">
                <h1 className="text-4xl font-bold mb-2">Campaigns</h1>
                <p className="text-gray-600 text-sm">
                    Manage your Web3 campaigns and escrow payments
                </p>
            </div>

            {/* Controls */}
            <div className="flex gap-4 mb-8">
                <div className="flex-1">
                    <input
                        type="text"
                        placeholder="Search campaign"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
                    />
                </div>
                <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg font-medium flex items-center gap-2">
                    Create Campaign
                    <ChevronDown size={20} />
                </button>
            </div>

            {/* Campaign Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {campaigns.map((campaign) => (
                    <div
                        key={campaign.id}
                        className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
                    >
                        {/* Card Header */}
                        <div className="bg-gradient-to-r from-gray-50 to-gray-100 px-6 py-4 flex items-center justify-between">
                            <h3 className="font-semibold text-gray-800 text-sm">
                                {campaign.title}
                            </h3>
                            <span className="bg-green-500 text-white text-xs px-3 py-1 rounded-full font-medium">
                                {campaign.status}
                            </span>
                        </div>

                        {/* Card Body */}
                        <div className="px-6 py-4 space-y-4">
                            <p className="text-gray-600 text-sm leading-relaxed">
                                {campaign.description}
                            </p>

                            {/* Creator Info */}
                            <div className="flex items-center gap-2 text-sm">
                                <div className="w-5 h-5 bg-gray-300 rounded-full"></div>
                                <span className="text-gray-700">
                                    {campaign.creator}
                                </span>
                            </div>

                            {/* SUI Amount */}
                            <div className="text-lg font-bold text-gray-900">
                                {campaign.sui}
                                <span className="text-gray-400 text-sm ml-2">
                                    {campaign.budget}
                                </span>
                            </div>

                            {/* Progress Bar */}
                            <div className="space-y-2">
                                <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                                    <div
                                        className="bg-red-500 h-full rounded-full"
                                        style={{
                                            width: `${campaign.progress}%`,
                                        }}
                                    ></div>
                                </div>
                                <p className="text-xs text-gray-500">
                                    {campaign.days}
                                </p>
                            </div>

                            {/* View Details Button */}
                            <button className="w-full py-2 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-sm font-medium">
                                View details
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
