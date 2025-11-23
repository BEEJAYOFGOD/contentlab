interface LogoProps {
    alt?: string;
    className?: string;
    width?: number;
    height?: number;
    onClick?: () => void;
}
import logo from "@/assets/landingpage/logo.png";

const Logo = ({
    alt = "Logo",
    className = "",
    width,
    height,
    onClick,
}: LogoProps) => {
    return (
        <img
            src={logo}
            alt={alt}
            className={className}
            width={width}
            height={height}
            onClick={onClick}
            style={{
                cursor: onClick ? "pointer" : "default",
            }}
        />
    );
};

export default Logo;
