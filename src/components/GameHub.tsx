import { useState } from "react";
import { Home, Wallet, Users, User } from "lucide-react";
import HomePage from "./HomePage";
import WalletPage from "./WalletPage";
import ReferPage from "./ReferPage";
import ProfilePage from "./ProfilePage";
import FloatingNotifications from "./FloatingNotifications";

export default function GameHub() {
  const [activeTab, setActiveTab] = useState("home");

  const navItems = [
    { id: "home", label: "Home", icon: Home, component: HomePage },
    { id: "wallet", label: "Wallet", icon: Wallet, component: WalletPage },
    { id: "refer", label: "Refer", icon: Users, component: ReferPage },
    { id: "profile", label: "Profile", icon: User, component: ProfilePage },
  ];

  const getCurrentComponent = () => {
    const activeItem = navItems.find(item => item.id === activeTab);
    const Component = activeItem?.component || HomePage;
    return <Component />;
  };

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5">
        <div className="absolute top-10 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute top-32 right-20 w-24 h-24 bg-neon-blue/10 rounded-full blur-2xl animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-neon-green/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      </div>

      {/* Floating Notifications */}
      <FloatingNotifications />

      {/* Main Content */}
      <main className="relative z-10 pb-20">
        {getCurrentComponent()}
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-card/95 backdrop-blur-sm border-t border-border z-20">
        <div className="grid grid-cols-4">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`flex flex-col items-center py-3 px-2 transition-all duration-300 ${
                  isActive
                    ? "text-primary bg-primary/10 transform scale-105"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                }`}
              >
                <Icon size={20} className={isActive ? "animate-glow" : ""} />
                <span className={`text-xs mt-1 ${isActive ? "font-semibold" : ""}`}>
                  {item.label}
                </span>
                {isActive && (
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-8 h-1 bg-primary rounded-t-full" />
                )}
              </button>
            );
          })}
        </div>
      </nav>
    </div>
  );
}