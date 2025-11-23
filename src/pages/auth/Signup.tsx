import { useState } from "react";
import logo from "@/assets/landingpage/logo.png";
import hero_bg from "@/assets/landingpage/hero_bg.png";
import { Link, useNavigate } from "react-router-dom";
import auth_dec_1 from "@/assets/auth/signup1_decor.png";
import auth_dec_2 from "@/assets/auth/signup_decor.svg";
import Gradienttext from "@/components/ui/GradientText";

interface FormErrors {
    name?: string;
    bio?: string;
    twitterUrl?: string;
    tiktokUrl?: string;
    email?: string;
    password?: string;
    confirmPassword?: string;
}

export default function SignUpPage() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: "",
        bio: "",
        twitterUrl: "",
        tiktokUrl: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const [errors, setErrors] = useState<FormErrors>({});
    const [touched, setTouched] = useState<Record<string, boolean>>({});

    const validateField = (name: string, value: string): string => {
        switch (name) {
            case "name":
                if (!value.trim()) return "Name is required";
                if (value.length < 2)
                    return "Name must be at least 2 characters";
                return "";

            case "bio":
                if (!value.trim()) return "Bio is required";
                if (value.length < 10)
                    return "Bio must be at least 10 characters";
                return "";

            case "twitterUrl":
                if (
                    value &&
                    !value.match(
                        /^https?:\/\/(www\.)?(twitter\.com|x\.com)\/.+/
                    )
                ) {
                    return "Please enter a valid Twitter/X URL";
                }
                return "";

            case "tiktokUrl":
                if (
                    value &&
                    !value.match(/^https?:\/\/(www\.)?tiktok\.com\/.+/)
                ) {
                    return "Please enter a valid TikTok URL";
                }
                return "";

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

            case "confirmPassword":
                if (!value) return "Please confirm your password";
                if (value !== formData.password)
                    return "Passwords do not match";
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
        <div className="relative min-h-screen overflow-hidden ">
            <div className="grid relative grid-cols-1 lg:grid-cols-2 gap-0">
                {/* Left side - Branding */}
                <div
                    className="hidden lg:flex rounded-0 h-screen flex-col border-none items-center justify-center p-12   relative overflow-hidden bg-cover"
                    style={{ backgroundImage: `url(${hero_bg})` }}
                >
                    <img
                        src={auth_dec_1}
                        alt="auth decorative image"
                        className="absolute left-0 bottom-0 w-[600px]"
                    />

                    <img
                        src={auth_dec_2}
                        alt="auth decorative image"
                        className="fixed top-0  left-[23%] w-[600px]"
                    />
                    {/* Logo */}
                    <div>
                        <img src={logo} className="animate-spin" />
                    </div>
                </div>

                {/* Right side - Sign up form */}
                <div className="p-8 lg:p-12 flex flex-col z-9  justify-center">
                    <Gradienttext
                        content="Get Started"
                        prop={"!font-extrabold !text-5xl"}
                    />
                    <p className="text-gray-600 mb-8">
                        Welcome to ContentLab. Setup Your Profile.
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <input
                                type="text"
                                name="name"
                                placeholder="Name"
                                value={formData.name}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className={getInputClassName("name")}
                            />
                            {touched.name && errors.name && (
                                <p className="text-red-500 text-sm mt-1">
                                    {errors.name}
                                </p>
                            )}
                        </div>

                        {/* <div>
                            <input
                                type="url"
                                name="twitterUrl"
                                placeholder="Twitter URL (optional)"
                                value={formData.twitterUrl}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className={getInputClassName("twitterUrl")}
                            />
                            {touched.twitterUrl && errors.twitterUrl && (
                                <p className="text-red-500 text-sm mt-1">
                                    {errors.twitterUrl}
                                </p>
                            )}
                        </div> */}
                        {/*
                        <div>
                            <input
                                type="url"
                                name="tiktokUrl"
                                placeholder="TikTok URL (optional)"
                                value={formData.tiktokUrl}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className={getInputClassName("tiktokUrl")}
                            />
                            {touched.tiktokUrl && errors.tiktokUrl && (
                                <p className="text-red-500 text-sm mt-1">
                                    {errors.tiktokUrl}
                                </p>
                            )}
                        </div> */}

                        <div>
                            <input
                                type="email"
                                name="email"
                                placeholder="Your Email"
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

                        <div>
                            <input
                                type="password"
                                name="confirmPassword"
                                placeholder="Confirm Password"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className={getInputClassName("confirmPassword")}
                            />
                            {touched.confirmPassword &&
                                errors.confirmPassword && (
                                    <p className="text-red-500 text-sm mt-1">
                                        {errors.confirmPassword}
                                    </p>
                                )}
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-4 rounded-lg transition duration-200 transform hover:scale-105 mt-6"
                        >
                            Setup profile
                        </button>
                    </form>

                    <p className="text-center text-gray-600 text-sm mt-6">
                        Already have an account?{" "}
                        <Link
                            to={"/signin"}
                            className="text-pink-600 cursor-pointer hover:underline"
                        >
                            Sign in
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}
