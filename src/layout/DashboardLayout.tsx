import { Outlet } from "react-router-dom";
import { SidebarProvider } from "@/components/ui/sidebar";
import SidebarComponent from "@/components/dashboard/sidebar";
const DashboardLayout = () => {
    return (
        <SidebarProvider>
            <div className="flex h-screen w-full bg-gray-50">
                <SidebarComponent />
                <Outlet />
            </div>
        </SidebarProvider>
    );
};

export default DashboardLayout;
