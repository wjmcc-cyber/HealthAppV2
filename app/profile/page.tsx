"use client";

import SectionHeader from "@/components/ui/SectionHeader";
import AppButton from "@/components/ui/AppButton";
import { MOCK_USER } from "@/data/mockData";
import { 
  UserIcon, 
  SettingsIcon, 
  BellIcon, 
  ShieldIcon, 
  LogOutIcon, 
  CreditCardIcon, 
  DumbbellIcon,
  ChevronRightIcon,
  MoonIcon,
  SunIcon
} from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useUnits } from "@/lib/units";
import { useTheme } from "@/lib/theme";
import { useRouter } from "next/navigation";

export default function ProfilePage() {
  const { system, setSystem, formatWeight, formatHeight } = useUnits();
  const { theme, setTheme } = useTheme();
  const router = useRouter();

  const menuGroups = [
    {
      title: "Account",
      items: [
        { icon: UserIcon, label: "Personal Information", href: "/profile/edit" },
        { icon: DumbbellIcon, label: "Fitness Goals & Plan", href: "/profile/goals" },
        { icon: CreditCardIcon, label: "Subscription", href: "/profile/subscription" },
      ]
    },
    {
      title: "App Settings",
      items: [
        { icon: BellIcon, label: "Notifications", href: "/profile/notifications" },
        { icon: SettingsIcon, label: "Units & Preferences", href: "/profile/settings" },
        { icon: ShieldIcon, label: "Privacy & Data", href: "/profile/privacy" },
      ]
    }
  ];

  const { value: weight, unit: weightUnit } = formatWeight(82.5);
  const { value: height, unit: heightUnit } = formatHeight(180);
  const { value: targetWeight } = formatWeight(78);

  const handleSignOut = () => {
    router.push("/");
  };

  return (
    <div className="flex flex-col min-h-screen px-4 pt-6 pb-24 theme-transition">
      <SectionHeader title="Profile" />

      {/* Dribbble Style Header Card */}
      <div className="bg-primary border-none rounded-[2rem] p-6 mb-8 relative overflow-hidden shadow-[0_10px_40px_rgba(56,242,205,0.2)]">
        {/* Glow Effects */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/20 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-black/20 rounded-full blur-2xl -ml-10 -mb-10 pointer-events-none" />
        
        <div className="relative z-10 flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-black flex items-center justify-center overflow-hidden border-2 border-black/10">
              <span className="text-2xl font-display font-bold text-white">{MOCK_USER.name[0]}</span>
            </div>
            <div>
              <h2 className="text-2xl font-display uppercase font-bold text-black tracking-tight leading-none">{MOCK_USER.name}</h2>
              <p className="text-xs font-bold text-black/60 uppercase tracking-widest mt-1">{MOCK_USER.goal} • {MOCK_USER.experienceLevel}</p>
            </div>
          </div>
          <Link href="/profile/settings" className="bg-black/10 p-2 rounded-full cursor-pointer tap-highlight-transparent hover:bg-black/20 transition">
            <SettingsIcon size={20} className="text-black" />
          </Link>
        </div>

        {/* Units / Stats Row */}
        <div className="relative z-10 grid grid-cols-3 gap-3">
          <div className="bg-white rounded-2xl p-4 flex flex-col items-center justify-center shadow-md">
             <span className="text-[10px] font-bold text-black/50 uppercase tracking-wider mb-1">Height</span>
             <span className="text-2xl font-display font-bold text-black flex items-baseline gap-1">
               {height} <span className="text-[10px] font-sans text-black/50">{heightUnit}</span>
             </span>
          </div>
          <div className="bg-white rounded-2xl p-4 flex flex-col items-center justify-center shadow-md">
             <span className="text-[10px] font-bold text-black/50 uppercase tracking-wider mb-1">Weight</span>
             <span className="text-2xl font-display font-bold text-black flex items-baseline gap-1">
               {weight} <span className="text-[10px] font-sans text-black/50">{weightUnit}</span>
             </span>
          </div>
          <div className="bg-white rounded-2xl p-4 flex flex-col items-center justify-center shadow-md">
             <span className="text-[10px] font-bold text-black/50 uppercase tracking-wider mb-1">Target</span>
             <span className="text-2xl font-display font-bold text-black flex items-baseline gap-1">
               {targetWeight} <span className="text-[10px] font-sans text-black/50">{weightUnit}</span>
             </span>
          </div>
        </div>
      </div>

      {/* Global Toggles Grid */}
      <div className="grid grid-cols-2 gap-4 mb-8">
        {/* Units Toggle */}
        <div className="bg-secondary p-1 flex rounded-full border border-border">
          <button 
            onClick={() => setSystem("metric")}
            className={cn(
              "flex-1 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider transition-all tap-highlight-transparent",
              system === "metric" ? "bg-card text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"
            )}
          >
            Metric
          </button>
          <button 
            onClick={() => setSystem("imperial")}
            className={cn(
              "flex-1 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider transition-all tap-highlight-transparent",
              system === "imperial" ? "bg-card text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"
            )}
          >
            Imperial
          </button>
        </div>

        {/* Theme Toggle */}
        <div className="bg-secondary p-1 flex rounded-full border border-border">
          <button 
            onClick={() => setTheme("light")}
            className={cn(
              "flex-1 py-1.5 rounded-full flex justify-center items-center transition-all tap-highlight-transparent",
              theme === "light" ? "bg-card text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"
            )}
            title="Light Mode"
          >
            <SunIcon size={14} />
          </button>
          <button 
            onClick={() => setTheme("dark")}
            className={cn(
              "flex-1 py-1.5 rounded-full flex justify-center items-center transition-all tap-highlight-transparent",
              theme === "dark" ? "bg-card text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"
            )}
            title="Dark Mode"
          >
            <MoonIcon size={14} />
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-8">
        {menuGroups.map((group, gIdx) => (
          <div key={gIdx} className="flex flex-col gap-2">
            <h4 className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider ml-2">{group.title}</h4>
            <div className="bg-card border border-border rounded-2xl overflow-hidden flex flex-col">
              {group.items.map((item, iIdx) => {
                const Icon = item.icon;
                const isLast = iIdx === group.items.length - 1;
                
                return (
                  <Link 
                    href={item.href}
                    key={iIdx} 
                    className={cn(
                      "flex items-center justify-between p-4 tap-highlight-transparent hover:bg-secondary/50 transition-colors",
                      !isLast && "border-b border-border"
                    )}
                  >
                    <div className="flex items-center gap-4">
                      <div className="text-muted-foreground">
                        <Icon size={20} />
                      </div>
                      <span className="text-sm font-semibold text-foreground">{item.label}</span>
                    </div>
                    <ChevronRightIcon size={18} className="text-muted-foreground/50" />
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 w-full">
        <AppButton variant="danger" fullWidth onClick={handleSignOut}>
           <LogOutIcon size={18} className="mr-2" /> Sign Out
        </AppButton>
        <p className="text-center text-[10px] text-muted-foreground mt-4 font-medium uppercase tracking-widest">
           PhysiqueAI v1.0.0
        </p>
      </div>
    </div>
  );
}
