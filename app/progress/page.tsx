"use client";

import { useState } from "react";
import SectionHeader from "@/components/ui/SectionHeader";
import StatCard from "@/components/ui/StatCard";
import AppButton from "@/components/ui/AppButton";
import { TrendingUpIcon, TargetIcon, DumbbellIcon, FlameIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export default function ProgressPage() {
  const [timeframe, setTimeframe] = useState<"1M" | "3M" | "6M" | "1Y">("3M");

  // Mock chart data (height percentages)
  const chartData = [40, 52, 45, 60, 58, 70, 68, 85, 80, 95];

  return (
    <div className="flex flex-col min-h-full px-4 pt-6 pb-6">
      <SectionHeader title="Your Progress" />

      {/* Timeframe Selector */}
      <div className="flex gap-2 p-1 bg-secondary/50 rounded-xl mb-6 border border-white/5 w-fit mx-auto">
        {["1M", "3M", "6M", "1Y"].map(tf => (
          <button
            key={tf}
            onClick={() => setTimeframe(tf as any)}
            className={cn(
              "px-4 py-1.5 rounded-lg text-xs font-bold transition-all tap-highlight-transparent",
              timeframe === tf ? "bg-card text-white shadow-sm" : "text-muted-foreground hover:text-white"
            )}
          >
            {tf}
          </button>
        ))}
      </div>

      {/* Main Chart Placeholder */}
      <div className="bg-card border border-border rounded-3xl p-5 mb-6 flex flex-col">
        <div className="flex justify-between items-center mb-6">
          <div>
            <span className="text-xs font-bold text-muted-foreground uppercase tracking-widest block mb-1">Weight Trend</span>
            <span className="text-2xl font-extrabold text-white">82.5 <span className="text-sm font-semibold text-muted-foreground">kg</span></span>
          </div>
          <div className="bg-primary/20 text-primary px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
             <TrendingUpIcon size={14} className="transform rotate-180" /> 2.1kg
          </div>
        </div>

        {/* Fake Bar Chart */}
        <div className="h-32 flex items-end justify-between gap-2 mt-auto">
          {chartData.map((val, idx) => (
            <div key={idx} className="w-full bg-secondary rounded-t-sm relative group overflow-hidden" style={{ height: `${val}%` }}>
               <div className="absolute inset-x-0 bottom-0 bg-primary w-full origin-bottom transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300" style={{ height: '100%' }} />
            </div>
          ))}
        </div>
        <div className="flex justify-between text-[10px] text-muted-foreground font-semibold mt-3 uppercase tracking-wider">
           <span>Nov</span>
           <span>Dec</span>
           <span>Jan</span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-6">
         <StatCard 
           title="Strength Score" 
           value="1,450" 
           icon={DumbbellIcon} 
           trend={{ isPositive: true, value: 12 }} 
         />
         <StatCard 
           title="Body Fat" 
           value="16.5%" 
           icon={TargetIcon} 
           trend={{ isPositive: false, value: 1.2 }} 
           valueClassName="text-accent"
         />
         <StatCard 
           title="Consistency" 
           value="88%" 
           icon={TrendingUpIcon} 
           trend={{ isPositive: true, value: 4 }} 
         />
         <StatCard 
           title="Avg Cals" 
           value="2,410" 
           icon={FlameIcon} 
         />
      </div>

      {/* Transformation Timeline */}
      <div className="bg-card border border-border rounded-3xl p-5 relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl -mr-10 -mt-10" />
        <h3 className="text-lg font-bold text-white mb-2 relative z-10">Physique Evolution</h3>
        <p className="text-sm text-muted-foreground mb-4 relative z-10">See your visual progress grouped by body scans.</p>
        <AppButton variant="secondary" fullWidth className="relative z-10 border border-white/5">
           View Gallery
        </AppButton>
      </div>
    </div>
  );
}
