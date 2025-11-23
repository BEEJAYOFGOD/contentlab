import { Button } from "@/components/ui/button";
import { NavLink } from "react-router-dom";

const DesktopNavbar = () => {
    const navLinks = [
        { label: "Sign up", href: "Signup" },
        { label: "How it Works", href: "#how-it-works" },
        { label: "For Creators", href: "#for-creators" },
        { label: "For Projects", href: "#for-projects" },
        { label: "About", href: "#about" },
    ];

    return (
        <div className="hidden items-center gap-8 md:flex ">
            <nav className="flex items-center gap-6">
                {navLinks.map((link) =>
                    link.href.includes("#") ? (
                        <a
                            key={link.label}
                            href={link.href}
                            className="text-sm font-medium text-white/90 transition-colors hover:text-white"
                        >
                            {link.label}
                        </a>
                    ) : (
                        <NavLink
                            key={link.label}
                            to={link.href}
                            className="text-sm font-medium text-white/90 transition-colors hover:text-white"
                        >
                            {link.label}
                        </NavLink>
                    )
                )}
            </nav>
            <Button
                variant="destructive"
                className="bg-black text-white hover:bg-black/70 hover:backdrop-blur-md duration-150 ease-in-out hover:ease-in"
            >
                Partner with us
            </Button>
        </div>
    );
};

export default DesktopNavbar;
