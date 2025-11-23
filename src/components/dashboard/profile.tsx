import { useState } from "react";
import { ArrowLeft, Camera } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function ProfileSettings() {
    const [formData, setFormData] = useState({
        displayName: "",
        bio: "",
        twitter: "",
        instagram: "",
        tiktok: "",
        youtube: "",
    });

    const [profileImage, setProfileImage] = useState<string | null>(null);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setProfileImage(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = () => {
        console.log("Profile updated:", formData);
        // Add your API call here
    };

    return (
        <div className="min-h-screen bg-gray-50 p-8">
            <div className="max-w-3xl mx-auto">
                {/* Header */}
                <div className="mb-8">
                    <button className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6 transition-colors">
                        <ArrowLeft className="w-5 h-5" />
                        <span>Back to Campaigns</span>
                    </button>

                    <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                        <h1 className="text-3xl font-bold text-gray-900 mb-2">
                            Profile Settings
                        </h1>
                        <p className="text-gray-600">
                            Manage your creator profile and submit campaign
                            deliverables
                        </p>

                        {/* Tabs */}
                        <Tabs defaultValue="profile" className="mt-6">
                            <TabsList className="bg-transparent border-b border-gray-200 w-full justify-start rounded-none p-0 h-auto">
                                <TabsTrigger
                                    value="profile"
                                    className="rounded-none border-b-2 border-transparent data-[state=active]:border-red-600 data-[state=active]:bg-transparent data-[state=active]:text-red-600 px-6 py-3"
                                >
                                    Profile Settings
                                </TabsTrigger>
                                <TabsTrigger
                                    value="deliverables"
                                    className="rounded-none border-b-2 border-transparent data-[state=active]:border-red-600 data-[state=active]:bg-transparent data-[state=active]:text-red-600 px-6 py-3"
                                >
                                    Submit Deliverables
                                </TabsTrigger>
                            </TabsList>

                            <TabsContent value="profile" className="mt-8">
                                <div className="space-y-6">
                                    {/* Creator Profile Section */}
                                    <div>
                                        <h2 className="text-xl font-bold text-gray-900 mb-4">
                                            Creator Profile
                                        </h2>
                                        <p className="text-gray-600 mb-6">
                                            Set up your profile and connect your
                                            social media accounts
                                        </p>

                                        {/* Profile Picture */}
                                        <div className="mb-6">
                                            <label className="block text-sm font-medium text-gray-900 mb-2">
                                                Profile Picture
                                            </label>
                                            <div className="flex items-center gap-4">
                                                <div className="relative">
                                                    <div className="w-20 h-20 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
                                                        {profileImage ? (
                                                            <img
                                                                src={
                                                                    profileImage
                                                                }
                                                                alt="Profile"
                                                                className="w-full h-full object-cover"
                                                            />
                                                        ) : (
                                                            <Camera className="w-8 h-8 text-gray-400" />
                                                        )}
                                                    </div>
                                                    <input
                                                        type="file"
                                                        accept="image/*"
                                                        onChange={
                                                            handleImageChange
                                                        }
                                                        className="hidden"
                                                        id="profile-upload"
                                                    />
                                                </div>
                                                <label
                                                    htmlFor="profile-upload"
                                                    className="text-sm text-blue-600 hover:text-blue-700 cursor-pointer"
                                                >
                                                    @username or Skype Name
                                                </label>
                                            </div>
                                        </div>

                                        {/* Display Name */}
                                        <div className="mb-6">
                                            <label
                                                htmlFor="displayName"
                                                className="block text-sm font-medium text-gray-900 mb-2"
                                            >
                                                Display Name
                                            </label>
                                            <Input
                                                id="displayName"
                                                name="displayName"
                                                type="text"
                                                placeholder="Your name"
                                                value={formData.displayName}
                                                onChange={handleChange}
                                                className="w-full"
                                            />
                                        </div>

                                        {/* Bio */}
                                        <div className="mb-6">
                                            <label
                                                htmlFor="bio"
                                                className="block text-sm font-medium text-gray-900 mb-2"
                                            >
                                                Bio
                                            </label>
                                            <textarea
                                                id="bio"
                                                name="bio"
                                                placeholder="Tell us about yourself"
                                                value={formData.bio}
                                                onChange={handleChange}
                                                rows={3}
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent resize-none"
                                            />
                                        </div>

                                        {/* Social Media Links */}
                                        <div className="space-y-4">
                                            <h3 className="text-sm font-medium text-gray-900">
                                                Social Media Links
                                            </h3>

                                            {/* X/Twitter */}
                                            <div>
                                                <label
                                                    htmlFor="twitter"
                                                    className="block text-sm font-medium text-gray-700 mb-2"
                                                >
                                                    X
                                                </label>
                                                <Input
                                                    id="twitter"
                                                    name="twitter"
                                                    type="url"
                                                    placeholder="www.x.com/f"
                                                    value={formData.twitter}
                                                    onChange={handleChange}
                                                    className="w-full"
                                                />
                                            </div>

                                            {/* Instagram */}
                                            <div>
                                                <label
                                                    htmlFor="instagram"
                                                    className="block text-sm font-medium text-gray-700 mb-2"
                                                >
                                                    Instagram
                                                </label>
                                                <Input
                                                    id="instagram"
                                                    name="instagram"
                                                    type="url"
                                                    placeholder="www.instagram.com/f"
                                                    value={formData.instagram}
                                                    onChange={handleChange}
                                                    className="w-full"
                                                />
                                            </div>

                                            {/* TikTok */}
                                            <div>
                                                <label
                                                    htmlFor="tiktok"
                                                    className="block text-sm font-medium text-gray-700 mb-2"
                                                >
                                                    TikTok
                                                </label>
                                                <Input
                                                    id="tiktok"
                                                    name="tiktok"
                                                    type="url"
                                                    placeholder="www.tiktok.com/f"
                                                    value={formData.tiktok}
                                                    onChange={handleChange}
                                                    className="w-full"
                                                />
                                            </div>

                                            {/* YouTube */}
                                            <div>
                                                <label
                                                    htmlFor="youtube"
                                                    className="block text-sm font-medium text-gray-700 mb-2"
                                                >
                                                    YouTube
                                                </label>
                                                <Input
                                                    id="youtube"
                                                    name="youtube"
                                                    type="url"
                                                    placeholder="www.youtube.com/@username"
                                                    value={formData.youtube}
                                                    onChange={handleChange}
                                                    className="w-full"
                                                />
                                            </div>
                                        </div>

                                        {/* Save Button */}
                                        <Button
                                            onClick={handleSubmit}
                                            className="w-full bg-red-600 hover:bg-red-700 text-white py-3 mt-6"
                                        >
                                            Save Profile
                                        </Button>
                                    </div>
                                </div>
                            </TabsContent>

                            <TabsContent value="deliverables" className="mt-8">
                                <div className="text-center py-12">
                                    <p className="text-gray-500">
                                        Submit Deliverables content goes here
                                    </p>
                                </div>
                            </TabsContent>
                        </Tabs>
                    </div>
                </div>
            </div>
        </div>
    );
}
