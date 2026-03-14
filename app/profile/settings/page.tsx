"use client";

import { useState } from "react";
import SectionHeader from "@/components/ui/SectionHeader";
import AppButton from "@/components/ui/AppButton";
import { ChevronLeftIcon } from "lucide-react";
import Link from "next/link";
import { useUnits } from "@/lib/units";
import { useTheme } from "@/lib/theme";

export default function SettingsPage() {
  const { system, setSystem } = useUnits();
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex flex-col min-h-screen px-4 pt-6 pb-24">
      <div className="flex items-center gap-2 mb-6 text-muted-foreground hover:text-foreground transition-colors tap-highlight-transparent">
        <Link href="/profile" className="flex items-center gap-1 tap-highlight-transparent">
          <ChevronLeftIcon size={20} />
          <span className="text-sm font-semibold">Back to Profile</span>
        </Link>
      </div>

      <SectionHeader title="Units & Preferences" />

      <div className="flex flex-col gap-6 mt-4">
        {/* Unit System */}
        <div className="bg-card border border-border rounded-2xl p-5">
          <h3 className="text-sm font-bold text-foreground mb-4">Measurement System</h3>
          <div className="flex bg-secondary p-1 rounded-full border border-border">
            <button 
              onClick={() => setSystem("metric")}
              className={`flex-1 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all tap-highlight-transparent ${
                system === "metric" ? "bg-card text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Metric (kg, cm)
            </button>
            <button 
              onClick={() => setSystem("imperial")}
              className={`flex-1 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all tap-highlight-transparent ${
                system === "imperial" ? "bg-card text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Imperial (lbs, in)
            </button>
          </div>
          <p className="text-xs text-muted-foreground mt-3 leading-relaxed">
            This affects how your weight, height, and body measurements are displayed throughout the app.
          </p>
        </div>

        {/* Theme Settings */}
        <div className="bg-card border border-border rounded-2xl p-5">
          <h3 className="text-sm font-bold text-foreground mb-4">Appearance</h3>
          <div className="flex flex-col gap-2">
            {(["dark", "light", "system"] as const).map((t) => (
              <label key={t} className="flex items-center justify-between p-3 rounded-xl border border-border tap-highlight-transparent cursor-pointer hover:bg-secondary/50 transition-colors">
                <span className="text-sm font-semibold text-foreground capitalize">{t}</span>
                <input 
                  type="radio" 
                  name="theme" 
                  value={t} 
                  checked={theme === t}
                  onChange={() => setTheme(t)}
                  className="w-5 h-5 accent-primary"
                />
              </label>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
