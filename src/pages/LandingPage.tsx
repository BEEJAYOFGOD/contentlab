import Navbar from "@/components/Navbar";
import HeroSection from "@/components/landingpage/HeroSection";
import ChallengeSection from "@/components/landingpage/ChallengeSection";
import HowItWorksSection from "@/components/landingpage/HowItWorksSection";
import RewardsSection from "@/components/landingpage/RewardsSection";
import TargetUsersSection from "@/components/landingpage/TargetUsersSection";
import ProjectsSection from "@/components/landingpage/ProjectsSection";
import ScalabilitySection from "@/components/landingpage/ScalabilitySection";
import Footer from "@/components/landingpage/Footer";
import dec_img2 from "@/assets/landingpage/dec_img_2.png";

const LandingPage = () => {
    return (
        <div className="min-h-screen relative">
            <Navbar />
            <HeroSection />
            <ChallengeSection />
            <HowItWorksSection />
            <RewardsSection />
            <TargetUsersSection />
            <ProjectsSection />
            <ScalabilitySection />
            <Footer />

            <div className="absolute  md:top-[150px] top-[350px] left-0 md:h-50 md:w-50  w-25 h-25">
                <img
                    src={dec_img2}
                    alt="Landiva  Weber on Pexels"
                    // className="h-full w-full object-cover"
                />
            </div>
        </div>
    );
};

export default LandingPage;
