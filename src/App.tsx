import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import SignUpPage from "./pages/auth/Signup";
import SignInPage from "./pages/auth/Signin";
import Dashboard from "./components/dashboard/dashboard";
import DashboardLayout from "./layout/DashboardLayout";
import CampaignsPage from "./components/dashboard/campaign";
import ProfileSettings from "./components/dashboard/profile";
// import CampaignPage from "./pages/CampaignPage"; // Add your other pages
// import ProfilePage from "./pages/ProfilePage";
// import WalletPage from "./pages/WalletPage";
// import NotificationsPage from "./pages/NotificationsPage";
// import SettingsPage from "./pages/SettingsPage";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/signup" element={<SignUpPage />} />
                <Route path="/signin" element={<SignInPage />} />

                {/* Dashboard Layout with nested routes */}
                <Route path="/dashboard" element={<DashboardLayout />}>
                    <Route index element={<Dashboard />} /> {/* /dashboard */}
                    <Route path="campaign" element={<CampaignsPage />} />
                    <Route path="profile" element={<ProfileSettings />} />
                    {/* /dashboard/campaign */}
                    {/* <Route path="profile" element={<ProfilePage />} /> {/* /dashboard/profile */}
                    {/* <Route path="wallet" element={<WalletPage />} />{" "} */}
                    {/* /dashboard/wallet */}
                    {/* <Route path="notifications" element={<NotificationsPage />} /> /dashboard/notifications */}
                    {/* <Route path="settings" element={<SettingsPage />} />  */}
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
