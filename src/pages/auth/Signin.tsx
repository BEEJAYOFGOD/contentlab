import { useState } from "react";
import logo from "@/assets/landingpage/logo.png";
import hero_bg from "@/assets/landingpage/hero_bg.png";
import { Link } from "react-router-dom";
import Gradienttext from "@/components/ui/GradientText";
import auth_dec_1 from "@/assets/auth/signup1_decor.png";
import auth_dec_2 from "@/assets/auth/signup_decor.svg";
import { useNavigate } from "react-router-dom";

interface FormErrors {
    email?: string;
    password?: string;
}

export default function SignInPage() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const [errors, setErrors] = useState<FormErrors>({});
    const [touched, setTouched] = useState<Record<string, boolean>>({});

    const validateField = (name: string, value: string): string => {
        switch (name) {
            case "email":
                if (!value.trim()) return "Email is required";
                if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
                    return "Please enter a valid email";
                }
                return "";

            case "password":
                if (!value) return "Password is required";
                if (value.length < 8)
                    return "Password must be at least 8 characters";
                if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(value)) {
                    return "Password must contain uppercase, lowercase, and number";
                }
                return "";

            default:
                return "";
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));

        // Clear error when user starts typing
        if (touched[name]) {
            const error = validateField(name, value);
            setErrors((prev) => ({
                ...prev,
                [name]: error,
            }));
        }
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setTouched((prev) => ({ ...prev, [name]: true }));

        const error = validateField(name, value);
        setErrors((prev) => ({
            ...prev,
            [name]: error,
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Validate all fields
        const newErrors: FormErrors = {};
        Object.keys(formData).forEach((key) => {
            const error = validateField(
                key,
                formData[key as keyof typeof formData]
            );
            if (error) newErrors[key as keyof FormErrors] = error;
        });

        setErrors(newErrors);
        setTouched(
            Object.keys(formData).reduce(
                (acc, key) => ({ ...acc, [key]: true }),
                {}
            )
        );

        // If no errors, submit
        if (Object.keys(newErrors).length === 0) {
            console.log("Form submitted:", formData);
            // Add your API call here
            navigate("/dashboard");
        }
    };

    const getInputClassName = (fieldName: string) => {
        const baseClass =
            "w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-colors";
        const hasError =
            touched[fieldName] && errors[fieldName as keyof FormErrors];

        if (hasError) {
            return `${baseClass} border-red-500 focus:ring-red-500`;
        }
        return `${baseClass} border-gray-300 focus:ring-pink-500 focus:border-transparent`;
    };

    return (
        <div className="relative z-10 min-h-screen overflow-hidden ">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                {/* Left side - Branding */}
                <div
                    className="hidden lg:flex rounded-0 flex-col border-none items-center justify-center p-12 h-screen  relative overflow-hidden bg-cover"
                    style={{ backgroundImage: `url(${hero_bg})` }}
                >
                    <img
                        src={auth_dec_1}
                        alt="auth decorative image"
                        className="fixed left-0 bottom-0  w-[600px]"
                    />

                    <img
                        src={auth_dec_2}
                        alt="auth decorative image"
                        className="fixed top-0  left-100 w-[600px] z-10000"
                    />
                    {/* Logo */}
                    <div>
                        <img src={logo} className="animate-spin" />
                    </div>
                </div>

                {/* Right side - Sign up form */}
                <div className="p-8 lg:p-12 flex flex-col  justify-center">
                    <Gradienttext
                        content="ContentLab Creator"
                        prop={"!font-extrabold !text-4xl"}
                    />

                    <p className="text-gray-600 mb-8">
                        Welcome back to contentlab
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <input
                                type="email"
                                name="email"
                                placeholder="email"
                                value={formData.email}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className={getInputClassName("email")}
                            />
                            {touched.email && errors.email && (
                                <p className="text-red-500 text-sm mt-1">
                                    {errors.email}
                                </p>
                            )}
                        </div>

                        <div>
                            <input
                                type="password"
                                name="password"
                                placeholder="Password"
                                value={formData.password}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className={getInputClassName("password")}
                            />
                            {touched.password && errors.password && (
                                <p className="text-red-500 text-sm mt-1">
                                    {errors.password}
                                </p>
                            )}
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-[#FF0000] hover:bg-[#FF0000]/80 text-white font-bold py-3 px-4 rounded-lg transition duration-200 transform hover:scale-105 mt-6"
                        >
                            Setup profile
                        </button>
                    </form>

                    <p className="text-center text-gray-600 text-sm mt-6">
                        Already have an account?{" "}
                        <Link
                            to={"/signup"}
                            className="text-[#FF0000] cursor-pointer hover:underline"
                        >
                            Sign up
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}
