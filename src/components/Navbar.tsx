import { useEffect, useState } from "react";
import DesktopNavbar from "./landingpage/DesktopNavbar";
import MobileNavbar from "./landingpage/MobileNavbar";
import logo from "@/assets/landingpage/logo.png";

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        // Cleanup
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`sticky top-0 border-b z-50 h-20 transition-all duration-300 ${
                isScrolled
                    ? "bg-transparent border-white/20 backdrop-blur-md shadow-lg"
                    : null
            }`}
        >
            <div className="mx-auto flex max-w-[1440px] h-full items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
                <div className="flex items-center gap-2">
                    <img src={logo} alt="" className="max-w-12 max-h-12" />
                </div>
                <DesktopNavbar />
                <MobileNavbar />
            </div>
        </nav>
    );
};

export default Navbar;
