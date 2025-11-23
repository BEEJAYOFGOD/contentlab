import {
    Megaphone,
    TrendingUp,
    Users,
    MousePointer,
    Share2,
} from "lucide-react";

export default function Dashboard() {
    const campaigns = [
        {
            id: 1,
            name: "TechZone",
            amount: "$500",
            status: "active",
            progress: 75,
            tasks: [
                "Create 3 Instagram posts",
                "Write blog article about...",
                "Share on Twitter",
            ],
        },
        {
            id: 2,
            name: "FashionBrand",
            amount: "$750",
            status: "pending",
            progress: 40,
            tasks: [
                "Create TikTok video",
                "Instagram story series",
                "Product review post",
            ],
        },
        {
            id: 3,
            name: "FashionBrand",
            amount: "$750",
            status: "active",
            progress: 90,
            tasks: ["YouTube review video", "2 Instagram reels", "Blog post"],
        },
        {
            id: 4,
            name: "GamingStudio",
            amount: "$1,200",
            status: "pending",
            progress: 25,
            tasks: [
                "Twitch stream session",
                "3 Twitter threads",
                "Discord engagement",
            ],
        },
        {
            id: 5,
            name: "FashionBrand",
            amount: "$750",
            status: "active",
            progress: 60,
            tasks: [
                "Fashion haul video",
                "Styling tips post",
                "2 Instagram stories",
            ],
        },
        {
            id: 6,
            name: "FashionBrand",
            amount: "$750",
            status: "pending",
            progress: 15,
            tasks: ["Product unboxing", "Try-on video", "Share experience"],
        },
    ];

    const recentActivity = [
        {
            type: "Influencer",
            name: "John Doe",
            action: "Added Campaign",
            amount: "$500",
        },
        {
            type: "Ascarist (Google)",
            name: "John Doe",
            action: "Added Campaign",
            amount: "$500",
        },
        {
            type: "Ascarist (Google)",
            name: "John Doe",
            action: "Added Campaign",
            amount: "$500",
        },
        {
            type: "Influencer",
            name: "GinaLouiseRomeo",
            action: "Added Campaign",
            amount: "$500",
        },
    ];

    const stats = [
        {
            label: "Total Earning",
            value: "$1250",
            icon: TrendingUp,
            color: "text-red-500",
        },
        {
            label: "Active Campaigns",
            value: "12",
            icon: Megaphone,
            color: "text-blue-500",
        },
        {
            label: "Latest Subscribers",
            value: "8,432",
            icon: Users,
            color: "text-red-500",
        },
        {
            label: "Content Requests",
            value: "45",
            icon: Share2,
            color: "text-blue-500",
        },
    ];

    return (
        <main className="flex-1 overflow-auto">
            <div className="p-8">
                {/* Header */}
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">
                        Welcome back, Ayo! 👋
                    </h1>
                    <p className="text-gray-600">
                        Watch the board, Here is some overview your latest
                        activity
                    </p>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
                        >
                            <div className="flex items-center justify-between mb-4">
                                <span className="text-gray-600 text-sm">
                                    {stat.label}
                                </span>
                                <stat.icon
                                    className={`w-5 h-5 ${stat.color}`}
                                />
                            </div>
                            <div className="text-3xl font-bold text-gray-900">
                                {stat.value}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Campaigns Progress */}
                <div className="mb-8">
                    <h2 className="text-xl font-bold text-gray-900 mb-6">
                        Campaigns Progress
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {campaigns.map((campaign) => (
                            <div
                                key={campaign.id}
                                className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
                            >
                                <div className="flex items-center justify-between mb-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold">
                                            {campaign.name[0]}
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-gray-900">
                                                {campaign.name}
                                            </h3>
                                            <p className="text-2xl font-bold text-gray-900">
                                                {campaign.amount}
                                            </p>
                                        </div>
                                    </div>
                                    <span
                                        className={`px-3 py-1 rounded-full text-xs font-medium ${
                                            campaign.status === "active"
                                                ? "bg-orange-100 text-orange-600"
                                                : "bg-green-100 text-green-600"
                                        }`}
                                    >
                                        {campaign.status}
                                    </span>
                                </div>

                                <div className="space-y-2 mb-4">
                                    {campaign.tasks.map((task, idx) => (
                                        <div
                                            key={idx}
                                            className="flex items-start gap-2"
                                        >
                                            <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-1.5"></div>
                                            <p className="text-sm text-gray-600">
                                                {task}
                                            </p>
                                        </div>
                                    ))}
                                </div>

                                <div className="flex gap-2">
                                    <button className="flex-1 bg-green-500 hover:bg-green-600 text-white py-2 rounded-lg text-sm font-medium transition-colors">
                                        Accept
                                    </button>
                                    <button className="flex-1 bg-red-500 hover:bg-red-600 text-white py-2 rounded-lg text-sm font-medium transition-colors">
                                        Reject
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Recent Activity */}
                <div>
                    <h2 className="text-xl font-bold text-gray-900 mb-6">
                        Recent Activity
                    </h2>
                    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                        {recentActivity.map((activity, index) => (
                            <div
                                key={index}
                                className="flex items-center justify-between p-6 border-b border-gray-100 last:border-b-0 hover:bg-gray-50 transition-colors"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                                        <MousePointer className="w-5 h-5 text-red-500" />
                                    </div>
                                    <div>
                                        <p className="font-medium text-gray-900">
                                            {activity.type}
                                        </p>
                                        <p className="text-sm text-gray-600">
                                            {activity.name}
                                        </p>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <p className="text-sm text-gray-600 mb-1">
                                        Campaign
                                    </p>
                                    <p className="text-2xl font-bold text-orange-500">
                                        {activity.amount}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    );
}
