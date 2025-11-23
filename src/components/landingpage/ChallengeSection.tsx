import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import engagement from "@/assets/landingpage/engagements.png";
import Technical from "@/assets/landingpage/technical_barriers.png";
import userexp from "@/assets/landingpage/User Exp.png";
import soln from "@/assets/landingpage/solution.png";

const ChallengeSection = () => {
    const challenges = [
        {
            icon: Technical,
            title: "Technical Barriers",
            description:
                "Web3 marketing is often too technical, expensive, and disconnected from real audiences who consume hours of content daily.",
            color: "text-red-500",
        },
        {
            icon: engagement,
            title: "Low Engagement",
            description:
                "Over 4.8 billion social media users consume 2+ hours of content daily, yet less than 5% actively use Web3 tools or own crypto.",
            color: "text-blue-500",
        },
        {
            icon: userexp,
            title: "Poor User Experience",
            description:
                "Most Web3 products are confusing, requiring users to understand complex tools and terms before doing even simple tasks.",
            color: "text-orange-500",
        },
        {
            icon: soln,
            title: "Our Solution",
            description:
                "We bring Web3 to the streets through viral giveaway content, connecting projects with creators who make crypto relatable, entertaining, and rewarding.",
            color: "text-green-500",
        },
    ];

    return (
        <section className="bg-linear-to-b from-white to-gray-50 py-20">
            <p className="mb-2 text-sm text-center font-semibold uppercase tracking-wide text-[#FF0000]">
                THE CHALLENGE
            </p>
            <div className="mx-auto max-w-[1400px] gap-4 justify-between md:flex md:items-center px-4 sm:px-6 lg:px-36">
                <div className="mb-12 md:mb-0 md:text-left border text-center">
                    <h2 className="mb-4 text-4xl  text-[#FF0000] w-md md:text-6xl font-extrabold">
                        The Web3 Adoption Gap
                    </h2>
                    <p className="mx-auto  text-lg text-gray-600  max-w-lg">
                        Despite massive social media engagement and a vast user
                        base, less than 5% of the world has embraced Web3
                        technology. Why? We're fixing this by making blockchain
                        feel as easy as using the internet.
                    </p>
                </div>

                <div className="grid gap-2 md:grid-cols-2">
                    {challenges.map((challenge, index) => (
                        <Card
                            key={index}
                            className=" flex flex-col  rounded-xs border border-[#5A5F594D] hover:shadow-xl"
                        >
                            <CardHeader className="p-2  pb-0">
                                <img
                                    src={challenge.icon}
                                    className="w-8 h-8"
                                    alt="challenge icon"
                                />
                                <CardTitle className="text-xl ">
                                    <p className="text-lg">{challenge.title}</p>
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="p-2 pt-0">
                                <div>
                                    <p className="text-xs  text-gray-600 ">
                                        {challenge.description}
                                    </p>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ChallengeSection;
