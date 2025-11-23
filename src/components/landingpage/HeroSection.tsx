import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight } from "lucide-react";
import hero_bg from "@/assets/landingpage/hero_bg.png";
import dec_img1 from "@/assets/landingpage/decorative_image.png";

const HeroSection = () => {
    return (
        <section
            style={{ backgroundImage: `url(${hero_bg})` }}
            className={`relative flex items-center bg-cover pt-24 -mt-20 pb-20 className="relative min-h-screen `}
        >
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 md:h-58 md:w-58 h-38 w-38">
                <img src={dec_img1} alt="Landiva  Weber on Pexels" />
            </div>

            <div className="relative z-10 mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-4xl text-center">
                    <h1 className="mb-6 text-3xl  font-bold leading-tight text-white md:text-6xl lg:text-5xl w-lg text-center  mx-auto">
                        Creating the Bridge Between Content, Culture, and Crypto
                    </h1>
                    <p className="mb-6 text-white/90 md:text-sm  text-xs md:w-lg mx-auto">
                        Turn everyday social media engagement into a gateway for
                        Web3 adoption. We connect blockchain projects with
                        content creators to produce work that resonates,
                        educates, and onboards new users into the internet.
                    </p>

                    <div className="mb-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
                        <Button
                            variant="outline"
                            className="border-white bg-transparent text-white hover:bg-white hover:text-blue-900"
                        >
                            Learn How It Works
                        </Button>
                        <Button className="bg-red-600 hover:bg-red-700">
                            Become a partner
                        </Button>
                    </div>

                    {/* Stats Section */}
                    <div className="mb-10 grid grid-cols-2 content-center gap-8 md:grid-cols-3">
                        <div className="text-center">
                            <div className="mb-2 text-5xl font-bold text-white">
                                141
                            </div>
                            <div className="text-sm text-white/80">
                                Minutes Daily on Social Media
                            </div>
                        </div>
                        <div className="text-center">
                            <div className="mb-2 text-5xl font-bold text-white">
                                4.8B
                            </div>
                            <div className="text-sm text-white/80">
                                Social Media Users Worldwide
                            </div>
                        </div>
                        <div className="text-center">
                            <div className="mb-2 text-5xl font-bold text-white">
                                &lt;5%
                            </div>
                            <div className="text-sm text-white/80">
                                Use Web3 Currently
                            </div>
                        </div>
                    </div>

                    {/* Email Subscription */}
                    <div className="mx-auto max-w-md">
                        <div className="flex gap-2">
                            <Input
                                type="email"
                                placeholder="Email"
                                className="bg-white/10 text-white placeholder:text-white/60 border-white/20"
                            />
                            <Button className="bg-red-600 hover:bg-red-700">
                                Subscribe{" "}
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
