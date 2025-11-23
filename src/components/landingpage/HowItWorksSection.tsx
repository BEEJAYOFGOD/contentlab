import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import bg from "@/assets/landingpage/background gradient.png";
import patnership from "@/assets/landingpage/partnership.png";
import content from "@/assets/landingpage/content.png";
import campaign from "@/assets/landingpage/campaign.png";
import engage from "@/assets/landingpage/engagements1.png";

const HowItWorksSection = () => {
    const steps = [
        {
            icon: patnership,
            title: "Partnership",
            description:
                "We partner with blockchain projects to understand their goals, target audience, and unique value propositions. Together, we develop a content strategy that aligns with their vision and resonates with the right creators.",
        },
        {
            icon: content,
            title: "Content Creation",
            description:
                "Our network of talented creators produces high-quality, culturally relevant content—videos, articles, social posts, and more—that educates, entertains, and drives engagement across platforms.",
        },
        {
            icon: campaign,
            title: "Campaign Funding",
            description:
                "Blockchain projects fund campaigns through our platform. We handle distribution, ensuring creators are fairly compensated and campaigns reach the right audiences at scale.",
        },
        {
            icon: engage,
            title: "Engagement & Rewards",
            description:
                "We track performance and reward both creators and their audiences with crypto-based incentives. This creates a feedback loop that encourages ongoing participation and deeper Web3 adoption.",
        },
    ];

    return (
        <section
            style={{ backgroundImage: `url(${bg})` }}
            // className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 py-20"
            className="py-20 bg-cover bg-center"
        >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mb-8 text-center">
                    <h2 className="mb-4 text-4xl font-bold text-white md:text-5xl">
                        How ContentLab Works
                    </h2>
                    <p className="mb-2 text-xl text-white/90">
                        Behind the Scenes
                    </p>
                    <p className="mx-auto max-w-3xl text-white/80">
                        A simple yet powerful four-step process that drives real
                        Web3 adoption by removing complexity and guiding users
                        seamlessly from onboarding to engagement.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 px-24">
                    {steps.map((step, index) => (
                        <Card
                            key={index}
                            className="border-none bg-transparent backdrop-blur-sm transition-all hover:bg-white/15"
                        >
                            <CardHeader className="p-2 pb-0">
                                <div className="mb-4 flex items-center gap-4">
                                    <img
                                        src={step.icon}
                                        className="h-6 w-6 text-white"
                                    />

                                    <CardTitle className="text-lg text-white">
                                        {step.title}
                                    </CardTitle>
                                </div>
                            </CardHeader>
                            <CardContent className="p-2 pt-0">
                                <p className="text-white/80 text-sm ">
                                    {step.description}
                                </p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowItWorksSection;
