"use client";

import SectionHeader from "@/components/ui/SectionHeader";
import MacroBar from "@/components/ui/MacroBar";
import ProgressRing from "@/components/ui/ProgressRing";
import { MOCK_NUTRITION } from "@/data/mockData";
import { PlusIcon, CameraIcon, BarcodeIcon, SearchIcon } from "lucide-react";

export default function NutritionPage() {
  const { target, consumed, meals } = MOCK_NUTRITION;

  return (
    <div className="flex flex-col min-h-full px-4 pt-6 pb-6 relative">
      <SectionHeader title="Nutrition" />

      {/* Hero Visual: Calorie Ring */}
      <div className="bg-card border border-border rounded-3xl p-6 mb-6 flex items-center justify-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent pointer-events-none" />
        
        <ProgressRing 
          progress={(consumed.calories / target.calories) * 100} 
          size={180} 
          strokeWidth={16}
          colorClass="text-white"
        >
          <div className="flex flex-col items-center">
             <span className="text-4xl font-extrabold text-white tracking-tighter">
               {target.calories - consumed.calories}
             </span>
             <span className="text-xs font-bold text-muted-foreground uppercase tracking-widest mt-1">Left</span>
          </div>
        </ProgressRing>
      </div>

      {/* Macro Breakdown */}
      <div className="bg-secondary/30 border border-white/5 rounded-3xl p-5 mb-6">
        <h3 className="text-sm font-bold text-white mb-4">Macro Targets</h3>
        <div className="flex flex-col gap-4">
          <MacroBar label="Protein" current={consumed.protein} total={target.protein} colorClass="bg-primary" />
          <MacroBar label="Carbs" current={consumed.carbs} total={target.carbs} colorClass="bg-accent" />
          <MacroBar label="Fat" current={consumed.fat} total={target.fat} colorClass="bg-yellow-500" />
        </div>
      </div>

      {/* Logging Actions */}
      <div className="grid grid-cols-3 gap-3 mb-8">
        <button className="bg-card border border-border rounded-2xl p-3 flex flex-col items-center gap-2 tap-highlight-transparent hover:bg-white/5 transition-colors">
          <SearchIcon size={20} className="text-muted-foreground" />
          <span className="text-[10px] font-bold text-white uppercase tracking-wider">Search</span>
        </button>
        <button className="bg-card border border-border rounded-2xl p-3 flex flex-col items-center gap-2 tap-highlight-transparent hover:bg-white/5 transition-colors">
          <BarcodeIcon size={20} className="text-muted-foreground" />
          <span className="text-[10px] font-bold text-white uppercase tracking-wider">Scan</span>
        </button>
        <button className="bg-card border border-border rounded-2xl p-3 flex flex-col items-center gap-2 tap-highlight-transparent hover:bg-white/5 transition-colors">
          <CameraIcon size={20} className="text-muted-foreground" />
          <span className="text-[10px] font-bold text-white uppercase tracking-wider">Photo</span>
        </button>
      </div>

      {/* Meals Log */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-bold text-white">Today's Log</h3>
          <button className="text-primary p-1">
             <PlusIcon size={24} />
          </button>
        </div>

        <div className="flex flex-col gap-3">
          {meals.map(meal => (
            <div key={meal.id} className="bg-card/50 border border-border rounded-2xl p-4 flex justify-between items-center group cursor-pointer hover:bg-card transition-colors">
               <div className="flex flex-col gap-1">
                 <span className="text-xs font-bold text-primary uppercase tracking-wider">{meal.type}</span>
                 <p className="font-bold text-white text-sm">{meal.name}</p>
                 <p className="text-[10px] text-muted-foreground font-medium flex gap-2">
                   <span>{meal.macros.protein}g P</span>
                   <span>{meal.macros.carbs}g C</span>
                   <span>{meal.macros.fat}g F</span>
                 </p>
               </div>
               <div className="text-right">
                 <span className="text-lg font-extrabold text-white">{meal.calories}</span>
                 <span className="text-xs text-muted-foreground block -mt-1 font-semibold">kcal</span>
               </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
