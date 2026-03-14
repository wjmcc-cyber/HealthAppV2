"use client";

import SectionHeader from "@/components/ui/SectionHeader";
import StatCard from "@/components/ui/StatCard";
import DeviceConnectionCard from "@/components/ui/DeviceConnectionCard";
import { MOCK_RECOVERY } from "@/data/mockData";
import { ActivityIcon, HeartPulseIcon, MoonIcon, FootprintsIcon, ShieldCheckIcon } from "lucide-react";
import AppButton from "@/components/ui/AppButton";

export default function RecoveryPage() {
  return (
    <div className="flex flex-col min-h-screen px-4 pt-6 pb-24">
      <SectionHeader title="Recovery & Wearables" />

      {/* Main Recovery Score */}
      <div className="bg-card border border-border rounded-3xl p-6 mb-6 flex flex-col items-center justify-center relative overflow-hidden text-center mt-2 group">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent pointer-events-none opacity-50 group-hover:opacity-100 transition-opacity duration-1000" />
        
        <h3 className="text-sm font-bold text-muted-foreground uppercase tracking-wider mb-2 relative z-10">Readiness Score</h3>
        <p className="text-6xl font-extrabold text-white tracking-tighter relative z-10 drop-shadow-[0_0_15px_rgba(0,242,96,0.3)]">
          {MOCK_RECOVERY.score}
        </p>
        
        <div className="mt-6 flex flex-col gap-2 relative z-10">
          <div className="flex items-center justify-center gap-2 text-primary bg-primary/10 px-4 py-2 rounded-full mx-auto w-fit">
             <ShieldCheckIcon size={18} />
             <span className="text-xs font-bold uppercase tracking-wider">Optimal</span>
          </div>
          <p className="text-sm text-muted-foreground mt-2 max-w-[250px]">
             {MOCK_RECOVERY.readinessNote}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-8">
        <StatCard 
          title="HRV" 
          value={`${MOCK_RECOVERY.hrv} ms`} 
          icon={ActivityIcon} 
        />
        <StatCard 
          title="Resting HR" 
          value={`${MOCK_RECOVERY.restingHeartRate} bpm`} 
          icon={HeartPulseIcon} 
        />
        <StatCard 
          title="Sleep" 
          value={`${MOCK_RECOVERY.sleepDurationHours}h`} 
          icon={MoonIcon} 
        />
        <StatCard 
          title="Steps" 
          value={MOCK_RECOVERY.steps.toLocaleString()} 
          icon={FootprintsIcon} 
        />
      </div>

      <SectionHeader title="Connected Devices" subtitle="Sync data across your favorite trackers" />

      <div className="flex flex-col gap-3">
        {/* We use basic lucide icons to represent brands since lucide lacks specific brand logos often */}
        <DeviceConnectionCard 
          name="Apple Health" 
          description="Syncs workouts, steps, heart rate" 
          icon={ActivityIcon} 
          isConnected={true} 
        />
        <DeviceConnectionCard 
          name="Google Fit" 
          description="Syncs steps and body metrics" 
          icon={ActivityIcon} 
          isConnected={false} 
        />
        <DeviceConnectionCard 
          name="WHOOP" 
          description="Syncs advanced recovery and sleep" 
          icon={ShieldCheckIcon} 
          isConnected={false} 
        />
        <DeviceConnectionCard 
          name="Oura Ring" 
          description="Syncs sleep stages and readiness" 
          icon={MoonIcon} 
          isConnected={false} 
        />
      </div>
      
      <div className="mt-6">
        <AppButton variant="ghost" fullWidth>
           Refresh Data Sync
        </AppButton>
      </div>

    </div>
  );
}
