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

export default function ProfilePage() {
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

  return (
    <div className="flex flex-col min-h-screen px-4 pt-6 pb-24">
      <SectionHeader title="Profile" />

      <div className="flex flex-col items-center justify-center mt-4 mb-8">
        <div className="w-24 h-24 rounded-full bg-secondary flex items-center justify-center overflow-hidden border-2 border-primary mb-4 relative drop-shadow-[0_0_15px_rgba(0,242,96,0.3)]">
          <span className="text-3xl font-bold text-muted-foreground">{MOCK_USER.name[0]}</span>
        </div>
        <h2 className="text-2xl font-bold text-white tracking-tight">{MOCK_USER.name}</h2>
        <p className="text-sm text-muted-foreground mb-3">{MOCK_USER.goal} • {MOCK_USER.experienceLevel}</p>
        
        {MOCK_USER.isPremium && (
          <div className="bg-primary/20 text-primary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest border border-primary/30 flex items-center gap-1">
             PhysiqueAI Pro
          </div>
        )}
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
