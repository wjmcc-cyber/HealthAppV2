"use client";

import { useState } from "react";
import SectionHeader from "@/components/ui/SectionHeader";
import AppButton from "@/components/ui/AppButton";
import { MOCK_PREDICTION } from "@/data/mockData";
import { SparklesIcon, CalendarClockIcon, InfoIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export default function PredictionPage() {
  const [adherence, setAdherence] = useState(85);

  // Calculate adjusted predictions based on adherence
  const factor = adherence / 100;
  
  // Base changes
  const baseWeightChange3M = Math.abs(MOCK_PREDICTION.predictedWeight3Mo - MOCK_PREDICTION.currentWeight);
  const baseBfChange3M = Math.abs(MOCK_PREDICTION.predictedBodyFat3Mo - MOCK_PREDICTION.currentBodyFat);
  
  // Real changes based on slider
  const adjWeight3M = MOCK_PREDICTION.currentWeight - (baseWeightChange3M * factor);
  const adjBf3M = MOCK_PREDICTION.currentBodyFat - (baseBfChange3M * factor);
  
  const baseWeightChange6M = Math.abs(MOCK_PREDICTION.predictedWeight6Mo - MOCK_PREDICTION.currentWeight);
  const baseBfChange6M = Math.abs(MOCK_PREDICTION.predictedBodyFat6Mo - MOCK_PREDICTION.currentBodyFat);
  
  const adjWeight6M = MOCK_PREDICTION.currentWeight - (baseWeightChange6M * factor);
  const adjBf6M = MOCK_PREDICTION.currentBodyFat - (baseBfChange6M * factor);

  return (
    <div className="flex flex-col min-h-screen px-4 pt-6 pb-24 relative overflow-hidden">
      {/* Intense Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[200%] h-[400px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-black/0 to-transparent pointer-events-none" />

      <SectionHeader title="AI Physique Prediction" className="relative z-10" />

      <div className="bg-primary/10 border border-primary/20 rounded-3xl p-5 mb-8 relative z-10 text-center">
        <SparklesIcon size={24} className="text-primary mx-auto mb-2" />
        <p className="text-sm text-white/90 font-medium">
          Based on your scan trajectory and genetics, here is your estimated potential.
        </p>
      </div>

      {/* Adherence Slider */}
      <div className="bg-card border border-border rounded-3xl p-5 mb-8 relative z-10">
        <div className="flex justify-between items-end mb-4">
          <div>
            <h3 className="text-sm font-bold text-white tracking-wide">Plan Adherence</h3>
            <p className="text-xs text-muted-foreground mt-0.5">Simulate different effort levels</p>
          </div>
          <span className="text-xl font-extrabold text-primary">{adherence}%</span>
        </div>
        
        <input 
          type="range" 
          min="50" 
          max="100" 
          value={adherence}
          onChange={(e) => setAdherence(parseInt(e.target.value))}
          className="w-full accent-primary h-2 bg-secondary rounded-full appearance-none outline-none"
        />
        <div className="flex justify-between text-[10px] font-bold text-muted-foreground mt-2 uppercase tracking-wider">
          <span>50%</span>
          <span>100%</span>
        </div>
      </div>

      {/* Timeline Predictions */}
      <div className="flex flex-col gap-4 relative z-10 tracking-tight">
        
        {/* Current State */}
        <div className="flex gap-4 items-center">
           <div className="w-16 flex flex-col items-center">
              <span className="text-xs font-bold text-muted-foreground uppercase">Now</span>
              <div className="w-0.5 h-16 bg-border mt-2" />
           </div>
           <div className="flex-1 bg-secondary/30 rounded-2xl p-4 border border-white/5">
              <div className="flex justify-between">
                <div>
                  <span className="text-[10px] font-bold text-muted-foreground uppercase opacity-80">Weight</span>
                  <p className="text-lg font-bold text-white">{MOCK_PREDICTION.currentWeight}kg</p>
                </div>
                <div className="text-right">
                  <span className="text-[10px] font-bold text-muted-foreground uppercase opacity-80">Body Fat</span>
                  <p className="text-lg font-bold text-white">{MOCK_PREDICTION.currentBodyFat}%</p>
                </div>
              </div>
           </div>
        </div>

        {/* 3 Months */}
        <div className="flex gap-4 items-center">
           <div className="w-16 flex flex-col items-center">
              <span className="text-xs font-bold text-primary uppercase">3 Mo</span>
              <div className="w-0.5 h-16 bg-gradient-to-b from-primary/50 to-border mt-2" />
           </div>
           <div className="flex-1 bg-primary/5 rounded-2xl p-4 border border-primary/20 shadow-[0_0_15px_rgba(0,242,96,0.05)]">
              <div className="flex justify-between">
                <div>
                  <span className="text-[10px] font-bold text-primary uppercase opacity-80">Weight</span>
                  <p className="text-lg font-bold text-white">{adjWeight3M.toFixed(1)}kg</p>
                </div>
                <div className="text-right">
                  <span className="text-[10px] font-bold text-primary uppercase opacity-80">Body Fat</span>
                  <p className="text-lg font-bold text-white">{adjBf3M.toFixed(1)}%</p>
                </div>
              </div>
           </div>
        </div>

        {/* 6 Months */}
        <div className="flex gap-4 items-center">
           <div className="w-16 flex flex-col items-center">
              <span className="text-xs font-bold text-accent uppercase">6 Mo</span>
              <div className="w-2 h-2 rounded-full bg-accent mt-2 shadow-[0_0_10px_rgba(37,99,235,0.8)]" />
           </div>
           <div className="flex-1 bg-accent/5 rounded-2xl p-4 border border-accent/20 shadow-[0_0_15px_rgba(37,99,235,0.05)]">
              <div className="flex justify-between">
                <div>
                  <span className="text-[10px] font-bold text-accent uppercase opacity-80">Weight</span>
                  <p className="text-lg font-bold text-white">{adjWeight6M.toFixed(1)}kg</p>
                </div>
                <div className="text-right">
                  <span className="text-[10px] font-bold text-accent uppercase opacity-80">Body Fat</span>
                  <p className="text-lg font-bold text-white">{adjBf6M.toFixed(1)}%</p>
                </div>
              </div>
           </div>
        </div>

      </div>

      <div className="mt-8 relative z-10 flex items-start gap-3 bg-secondary/20 p-4 rounded-xl text-xs text-muted-foreground">
        <InfoIcon size={16} className="shrink-0 mt-0.5" />
        <p>
          These are estimates generated by AI models simulating hypertrophy and fat loss models. Actual results depend on genetics, accurate logging, and diet consistency.
        </p>
      </div>

    </div>
  );
}
