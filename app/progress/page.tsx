"use client";

import { useState } from "react";
import SectionHeader from "@/components/ui/SectionHeader";
import StatCard from "@/components/ui/StatCard";
import AppButton from "@/components/ui/AppButton";
import { MOCK_PROGRESS_HISTORY } from "@/data/mockData";
import { TrendingUpIcon, TargetIcon, DumbbellIcon, FlameIcon, CalendarCheckIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export default function ProgressPage() {
  const [timeframe, setTimeframe] = useState<"1M" | "3M" | "6M" | "1Y">("3M");

  // Build chart data from mock progress history
  const chartData = MOCK_PROGRESS_HISTORY.map((entry) => {
    const min = 78;
    const max = 86;
    return Math.round(((entry.weight - min) / (max - min)) * 100);
  });

  const latestEntry = MOCK_PROGRESS_HISTORY[MOCK_PROGRESS_HISTORY.length - 1];
  const firstEntry = MOCK_PROGRESS_HISTORY[0];
  const weightChange = (latestEntry.weight - firstEntry.weight).toFixed(1);

  return (
    <div className="flex flex-col min-h-full px-4 pt-6 pb-6">
      <SectionHeader title="Your Progress" />

      {/* Timeframe Selector */}
      <div className="flex gap-2 p-1 bg-secondary/50 rounded-xl mb-6 border border-white/5 w-fit mx-auto">
        {(["1M", "3M", "6M", "1Y"] as const).map((tf) => (
          <button
            key={tf}
            onClick={() => setTimeframe(tf)}
            className={cn(
              "px-4 py-1.5 rounded-lg text-xs font-bold transition-all tap-highlight-transparent",
              timeframe === tf
                ? "bg-card text-white shadow-sm"
                : "text-muted-foreground hover:text-white"
            )}
          >
            {tf}
          </button>
        ))}
      </div>

      {/* Main Chart */}
      <div className="bg-card border border-border rounded-3xl p-5 mb-6 flex flex-col">
        <div className="flex justify-between items-center mb-6">
          <div>
            <span className="text-xs font-bold text-muted-foreground uppercase tracking-widest block mb-1">
              Weight Trend
            </span>
            <span className="text-2xl font-extrabold text-white">
              {latestEntry.weight}{" "}
              <span className="text-sm font-semibold text-muted-foreground">
                kg
              </span>
            </span>
          </div>
          <div
            className={cn(
              "px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1",
              parseFloat(weightChange) <= 0
                ? "bg-primary/20 text-primary"
                : "bg-red-500/20 text-red-400"
            )}
          >
            <TrendingUpIcon
              size={14}
              className={parseFloat(weightChange) <= 0 ? "transform rotate-180" : ""}
            />
            {Math.abs(parseFloat(weightChange))}kg
          </div>
        </div>

        {/* Bar Chart */}
        <div className="h-32 flex items-end justify-between gap-2 mt-auto">
          {chartData.map((val, idx) => (
            <div
              key={idx}
              className="w-full bg-secondary rounded-t-sm relative group overflow-hidden"
              style={{ height: `${Math.max(val, 10)}%` }}
            >
              <div
                className="absolute inset-x-0 bottom-0 bg-primary w-full origin-bottom transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300"
                style={{ height: "100%" }}
              />
            </div>
          ))}
        </div>
        <div className="flex justify-between text-[10px] text-muted-foreground font-semibold mt-3 uppercase tracking-wider">
          {MOCK_PROGRESS_HISTORY.map((e, i) => (
            <span key={i}>
              {new Date(e.date).toLocaleString("en", { month: "short" })}
            </span>
          ))}
        </div>
      </div>

      {/* Stat Cards Grid */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <StatCard
          title="Strength Score"
          value="1,450"
          icon={DumbbellIcon}
          trend={{ isPositive: true, value: 12 }}
        />
        <StatCard
          title="Body Fat"
          value={`${latestEntry.bodyFat}%`}
          icon={TargetIcon}
          trend={{ isPositive: false, value: 1.2 }}
          valueClassName="text-accent"
        />
        <StatCard
          title="Consistency"
          value="88%"
          icon={CalendarCheckIcon}
          trend={{ isPositive: true, value: 4 }}
        />
        <StatCard
          title="Avg Cals"
          value="2,410"
          icon={FlameIcon}
        />
      </div>

      {/* Monthly Comparison */}
      <div className="bg-card border border-border rounded-3xl p-5 mb-6">
        <h3 className="text-sm font-bold text-white mb-4">Monthly Comparison</h3>
        <div className="grid grid-cols-3 gap-3 text-center">
          <div className="bg-secondary/30 rounded-2xl p-3">
            <span className="text-[10px] text-muted-foreground font-bold uppercase tracking-wider block mb-1">
              Last Month
            </span>
            <span className="text-lg font-extrabold text-white">83.1</span>
            <span className="text-xs text-muted-foreground block">kg</span>
          </div>
          <div className="bg-primary/10 rounded-2xl p-3 border border-primary/20">
            <span className="text-[10px] text-primary font-bold uppercase tracking-wider block mb-1">
              This Month
            </span>
            <span className="text-lg font-extrabold text-white">82.5</span>
            <span className="text-xs text-primary block">kg</span>
          </div>
          <div className="bg-secondary/30 rounded-2xl p-3">
            <span className="text-[10px] text-muted-foreground font-bold uppercase tracking-wider block mb-1">
              Change
            </span>
            <span className="text-lg font-extrabold text-primary">-0.6</span>
            <span className="text-xs text-muted-foreground block">kg</span>
          </div>
        </div>
      </div>

      {/* Transformation Timeline */}
      <div className="bg-card border border-border rounded-3xl p-5 relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl -mr-10 -mt-10" />
        <h3 className="text-lg font-bold text-white mb-2 relative z-10">
          Physique Evolution
        </h3>
        <p className="text-sm text-muted-foreground mb-4 relative z-10">
          See your visual progress grouped by body scans.
        </p>
        <AppButton
          variant="secondary"
          fullWidth
          className="relative z-10 border border-white/5"
          href="/scan"
        >
          View Gallery
        </AppButton>
      </div>
    </div>
  );
}
