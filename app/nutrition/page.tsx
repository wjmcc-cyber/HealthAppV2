"use client";

import { useState, useEffect } from "react";
import SectionHeader from "@/components/ui/SectionHeader";
import MacroBar from "@/components/ui/MacroBar";
import ProgressRing from "@/components/ui/ProgressRing";
import { MOCK_NUTRITION, MOCK_SUGGESTED_MEALS, MOCK_GROCERY_LIST } from "@/data/mockData";
import { Meal } from "@/types";
import {
  PlusIcon,
  CameraIcon,
  BarcodeIcon,
  SearchIcon,
  SparklesIcon,
  ClockIcon,
  ShoppingCartIcon,
  CheckIcon,
} from "lucide-react";
import Link from "next/link";

export default function NutritionPage() {
  const [customMeals, setCustomMeals] = useState<Meal[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem("physiqueai-custom-meals");
    if (saved) {
      setCustomMeals(JSON.parse(saved));
    }
  }, []);

  const { target, consumed: mockConsumed, meals: mockMeals } = MOCK_NUTRITION;

  const allMeals = [...mockMeals, ...customMeals];
  
  const consumed = {
    calories: mockConsumed.calories + customMeals.reduce((acc, current) => acc + current.calories, 0),
    protein: mockConsumed.protein + customMeals.reduce((acc, current) => acc + current.macros.protein, 0),
    carbs: mockConsumed.carbs + customMeals.reduce((acc, current) => acc + current.macros.carbs, 0),
    fat: mockConsumed.fat + customMeals.reduce((acc, current) => acc + current.macros.fat, 0),
  };

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
          colorClass="text-foreground"
        >
          <div className="flex flex-col items-center">
            <span className="text-4xl font-extrabold text-foreground tracking-tighter">
              {target.calories - consumed.calories}
            </span>
            <span className="text-xs font-bold text-muted-foreground uppercase tracking-widest mt-1">
              Left
            </span>
          </div>
        </ProgressRing>
      </div>

      {/* Macro Breakdown */}
      <div className="bg-secondary/30 border border-white/5 rounded-3xl p-5 mb-6">
        <h3 className="text-sm font-bold text-foreground mb-4">Macro Targets</h3>
        <div className="flex flex-col gap-4">
          <MacroBar
            label="Protein"
            current={consumed.protein}
            total={target.protein}
            colorClass="bg-primary"
          />
          <MacroBar
            label="Carbs"
            current={consumed.carbs}
            total={target.carbs}
            colorClass="bg-accent"
          />
          <MacroBar
            label="Fat"
            current={consumed.fat}
            total={target.fat}
            colorClass="bg-yellow-500"
          />
        </div>
      </div>

      {/* Logging Actions */}
      <div className="grid grid-cols-3 gap-3 mb-8">
        <Link href="/nutrition/add" className="bg-card border border-border rounded-2xl p-3 flex flex-col items-center gap-2 tap-highlight-transparent hover:bg-card/5 transition-colors text-center">
           <SearchIcon size={20} className="text-muted-foreground" />
          <span className="text-[10px] font-bold text-foreground uppercase tracking-wider">
            Search
          </span>
        </Link>
        <button className="bg-card border border-border rounded-2xl p-3 flex flex-col items-center gap-2 tap-highlight-transparent hover:bg-card/5 transition-colors">
          <BarcodeIcon size={20} className="text-muted-foreground" />
          <span className="text-[10px] font-bold text-foreground uppercase tracking-wider">
            Scan
          </span>
        </button>
        <button className="bg-card border border-border rounded-2xl p-3 flex flex-col items-center gap-2 tap-highlight-transparent hover:bg-card/5 transition-colors">
          <CameraIcon size={20} className="text-muted-foreground" />
          <span className="text-[10px] font-bold text-foreground uppercase tracking-wider">
            Photo
          </span>
        </button>
      </div>

      {/* Meals Log */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-bold text-foreground">Today&apos;s Log</h3>
          <Link href="/nutrition/add" className="text-primary p-1 transition-transform hover:scale-110">
            <PlusIcon size={24} />
          </Link>
        </div>

        <div className="flex flex-col gap-3">
          {allMeals.map((meal) => (
            <div
              key={meal.id}
              className="bg-card/50 border border-border rounded-2xl p-4 flex justify-between items-center group cursor-pointer hover:bg-card transition-colors"
            >
              <div className="flex flex-col gap-1">
                <span className="text-xs font-bold text-primary uppercase tracking-wider">
                  {meal.type}
                </span>
                <p className="font-bold text-foreground text-sm">{meal.name}</p>
                <p className="text-[10px] text-muted-foreground font-medium flex gap-2">
                  <span>{meal.macros.protein}g P</span>
                  <span>{meal.macros.carbs}g C</span>
                  <span>{meal.macros.fat}g F</span>
                </p>
              </div>
              <div className="text-right">
                <span className="text-lg font-extrabold text-foreground">
                  {meal.calories}
                </span>
                <span className="text-xs text-muted-foreground block -mt-1 font-semibold">
                  kcal
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* AI Suggested Meals */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <SparklesIcon size={16} className="text-primary" />
          <h3 className="text-lg font-bold text-foreground">AI Meal Suggestions</h3>
        </div>
        <div className="flex gap-3 overflow-x-auto pb-4 snap-x">
          {MOCK_SUGGESTED_MEALS.map((meal) => (
            <div
              key={meal.id}
              className="snap-start shrink-0 w-44 bg-card border border-border rounded-2xl p-4 flex flex-col gap-3 relative overflow-hidden group cursor-pointer hover:border-primary/30 transition-colors"
            >
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-primary/5 rounded-full blur-xl pointer-events-none group-hover:bg-primary/10 transition-colors" />
              <h4 className="text-sm font-bold text-foreground leading-tight line-clamp-2">
                {meal.name}
              </h4>
              <div className="flex items-center gap-2 text-[10px] text-muted-foreground font-bold uppercase tracking-wider">
                <span>{meal.calories} kcal</span>
                <span className="w-1 h-1 rounded-full bg-muted-foreground/50" />
                <span>{meal.protein}g P</span>
              </div>
              <div className="flex items-center gap-1 text-[10px] text-muted-foreground">
                <ClockIcon size={10} />
                <span>{meal.prepTimeMinutes} min</span>
              </div>
              <div className="flex flex-wrap gap-1 mt-auto">
                {meal.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[9px] font-bold bg-primary/10 text-primary px-2 py-0.5 rounded-full uppercase tracking-wider"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Grocery List Preview */}
      <div>
        <div className="flex items-center gap-2 mb-4">
          <ShoppingCartIcon size={16} className="text-foreground" />
          <h3 className="text-lg font-bold text-foreground">Weekly Grocery List</h3>
        </div>
        <div className="bg-card/50 border border-border rounded-2xl overflow-hidden">
          {MOCK_GROCERY_LIST.slice(0, 6).map((item, idx) => (
            <div
              key={item.id}
              className={`flex items-center justify-between p-3.5 ${
                idx < 5 ? "border-b border-white/5" : ""
              } hover:bg-card/5 transition-colors cursor-pointer tap-highlight-transparent`}
            >
              <div className="flex items-center gap-3">
                <div
                  className={`w-5 h-5 rounded-md border-2 flex items-center justify-center transition-colors ${
                    item.checked
                      ? "bg-primary border-primary"
                      : "border-white/20"
                  }`}
                >
                  {item.checked && (
                    <CheckIcon size={12} className="text-card-foreground" />
                  )}
                </div>
                <div>
                  <p
                    className={`text-sm font-semibold ${
                      item.checked
                        ? "text-muted-foreground line-through"
                        : "text-foreground"
                    }`}
                  >
                    {item.name}
                  </p>
                  <p className="text-[10px] text-muted-foreground font-medium">
                    {item.quantity}
                  </p>
                </div>
              </div>
              <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider bg-secondary/50 px-2 py-1 rounded-full">
                {item.category}
              </span>
            </div>
          ))}
          <div className="p-3 text-center">
            <button className="text-xs text-primary font-bold uppercase tracking-wider tap-highlight-transparent hover:underline">
              View Full List ({MOCK_GROCERY_LIST.length} items)
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
