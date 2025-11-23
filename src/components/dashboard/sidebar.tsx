import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar";
import Logo from "../ui/Logo";
import {
    Bell,
    LayoutDashboard,
    LogOut,
    Megaphone,
    Settings,
    User,
    Wallet,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const SidebarComponent = () => {
    const navigate = useNavigate();

    const menuItems = [
        { id: "dashboard", icon: LayoutDashboard, label: "Dashboard" },
        { id: "dashboard/campaign", icon: Megaphone, label: "Campaign" },
        { id: "dashboard/profile", icon: User, label: "Profile" },
        { id: "dashboard/wallet", icon: Wallet, label: "Wallet" },
        { id: "dashboard/notifications", icon: Bell, label: "Notifications" },
        { id: "dashboard/settings", icon: Settings, label: "Settings" },
    ];

    const [activeTab, setActiveTab] = useState("dashboard");
    return (
        <Sidebar className="border-r bg-black text-white">
            <SidebarHeader className="p-6 bg-black">
                <div className="flex items-center gap-2">
                    <Logo className="w-8 h-8" onClick={() => navigate("/")} />
                </div>
            </SidebarHeader>

            <SidebarContent className="bg-black">
                <SidebarGroup>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {menuItems.map((item) => (
                                <SidebarMenuItem key={item.id}>
                                    <SidebarMenuButton
                                        onClick={() => {
                                            setActiveTab(item.id);
                                            navigate(`/${item.id}`);
                                        }}
                                        isActive={activeTab === item.id}
                                        className={`w-full ${
                                            activeTab === item.id
                                                ? "bg-gray-800 text-white hover:bg-gray-800"
                                                : "text-gray-400 hover:bg-gray-800 hover:text-white"
                                        }`}
                                    >
                                        <item.icon className="w-5 h-5" />
                                        <span>{item.label}</span>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>

            <SidebarFooter className="p-4 bg-black">
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton className="text-red-500 hover:bg-gray-800 hover:text-red-400">
                            <LogOut className="w-5 h-5" />
                            <span>Log out</span>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarFooter>
        </Sidebar>
    );
};

export default SidebarComponent;
