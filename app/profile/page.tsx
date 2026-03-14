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
  ChevronRightIcon
} from "lucide-react";
import { cn } from "@/lib/utils";

import { useUnits } from "@/lib/units";

export default function ProfilePage() {
  const { system, setSystem, formatWeight, formatHeight } = useUnits();

  const menuGroups = [
    {
      title: "Account",
      items: [
        { icon: UserIcon, label: "Personal Information" },
        { icon: DumbbellIcon, label: "Fitness Goals & Plan" },
        { icon: CreditCardIcon, label: "Subscription" },
      ]
    },
    {
      title: "App Settings",
      items: [
        { icon: BellIcon, label: "Notifications" },
        { icon: SettingsIcon, label: "Units & Preferences" },
        { icon: ShieldIcon, label: "Privacy & Data" },
      ]
    }
  ];

  // Dynamic values using our simple mock data standard
  const { value: weight, unit: weightUnit } = formatWeight(82.5); // MOCK data
  const { value: height, unit: heightUnit } = formatHeight(180); // MOCK data
  const { value: targetWeight } = formatWeight(78); // MOCK data

  return (
    <div className="flex flex-col min-h-screen px-4 pt-6 pb-24">
      <SectionHeader title="Profile" />

      {/* Dribbble Style Header Card */}
      <div className="bg-primary border-none rounded-[2rem] p-6 mb-8 relative overflow-hidden shadow-[0_10px_40px_rgba(56,242,205,0.2)]">
        {/* Glow Effects */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/20 rounded-full blur-3xl -mr-20 -mt-20" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-black/20 rounded-full blur-2xl -ml-10 -mb-10" />
        
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
          <div className="bg-black/10 p-2 rounded-full cursor-pointer tap-highlight-transparent hover:bg-black/20 transition">
            <SettingsIcon size={20} className="text-black" />
          </div>
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

      {/* Global Units Toggle (Outside standard flow for visibility) */}
      <div className="bg-secondary p-1 flex rounded-full mb-8 max-w-[200px] mx-auto border border-white/10">
        <button 
          onClick={() => setSystem("metric")}
          className={cn(
            "flex-1 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider transition-all tap-highlight-transparent",
            system === "metric" ? "bg-white text-black shadow-sm" : "text-muted-foreground hover:text-white"
          )}
        >
          Metric
        </button>
        <button 
          onClick={() => setSystem("imperial")}
          className={cn(
            "flex-1 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider transition-all tap-highlight-transparent",
            system === "imperial" ? "bg-white text-black shadow-sm" : "text-muted-foreground hover:text-white"
          )}
        >
          Imperial
        </button>
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
                  <button 
                    key={iIdx} 
                    className={cn(
                      "flex items-center justify-between p-4 tap-highlight-transparent hover:bg-white/5 transition-colors",
                      !isLast && "border-b border-white/5"
                    )}
                  >
                    <div className="flex items-center gap-4">
                      <div className="text-muted-foreground">
                        <Icon size={20} />
                      </div>
                      <span className="text-sm font-semibold text-white">{item.label}</span>
                    </div>
                    <ChevronRightIcon size={18} className="text-muted-foreground/50" />
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 w-full">
        <AppButton variant="danger" fullWidth>
           <LogOutIcon size={18} className="mr-2" /> Sign Out
        </AppButton>
        <p className="text-center text-[10px] text-muted-foreground mt-4 font-medium uppercase tracking-widest">
           PhysiqueAI v1.0.0
        </p>
      </div>

    </div>
  );
}
