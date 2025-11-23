import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Gift, TrendingUp, DollarSign, Award } from "lucide-react";

const RewardsSection = () => {
    const rewards = [
        {
            icon: Gift,
            title: "Creator's Giveaways",
            description:
                "Exclusive access to exclusive creator-led giveaways and contests designed to reward your most engaged followers.",
            color: "bg-yellow-100 text-yellow-600",
        },
        {
            icon: TrendingUp,
            title: "Content Engagement",
            description:
                "Participate in community-led content initiatives and earn rewards based on engagement metrics and quality contributions.",
            color: "bg-green-100 text-green-600",
        },
        {
            icon: DollarSign,
            title: "Investment Value",
            description:
                "Gain early access to blockchain investment opportunities and earn rewards through our partnership network.",
            color: "bg-blue-100 text-blue-600",
        },
        {
            icon: Award,
            title: "Exclusive Perks",
            description:
                "Unlock special perks and VIP access to blockchain events, exclusive NFT drops, and premium content.",
            color: "bg-purple-100 text-purple-600",
        },
    ];

    return (
        <section className="bg-white py-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mb-16 text-center">
                    <h2 className="mb-4 text-4xl font-bold text-transparent bg-clip-text bg-linear-to-br from-[#001230] from-0% via-[#003896] via-70% to-[#003896] to-100% md:text-5xl md:w-3xl mx-auto">
                        What Are the Various Rewards Offered in the Giveaway
                        Campaign?
                    </h2>
                    <p className="mx-auto max-w-3xl text-lg text-gray-600">
                        Proven strategies and formats that generate maximum
                        engagement, drive conversions, and onboard users with
                        crypto-powered rewards.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
                    {rewards.map((reward, index) => (
                        <Card key={index} className="border-none shadow-lg">
                            <CardHeader>
                                <div
                                    className={`mb-4 inline-flex rounded-lg p-3 ${reward.color}`}
                                >
                                    <reward.icon className="h-8 w-8" />
                                </div>
                                <CardTitle className="text-xl">
                                    {reward.title}
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm text-gray-600">
                                    {reward.description}
                                </p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default RewardsSection;
