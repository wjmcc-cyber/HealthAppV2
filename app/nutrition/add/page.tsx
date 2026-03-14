"use client";

import { useState } from "react";
import SectionHeader from "@/components/ui/SectionHeader";
import AppButton from "@/components/ui/AppButton";
import { ChevronLeftIcon, ActivityIcon, PlusIcon } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

export default function NutritionAddPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    type: "Snack",
    calories: "",
    protein: "",
    carbs: "",
    fat: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    if (!formData.name || !formData.calories) return;

    const newMeal = {
      id: `custom_${Date.now()}`,
      name: formData.name,
      type: formData.type as any,
      calories: parseInt(formData.calories) || 0,
      macros: {
        protein: parseInt(formData.protein) || 0,
        carbs: parseInt(formData.carbs) || 0,
        fat: parseInt(formData.fat) || 0,
      }
    };

    // Save to local storage custom meals list
    const existingStr = localStorage.getItem("physiqueai-custom-meals");
    const existing = existingStr ? JSON.parse(existingStr) : [];
    localStorage.setItem("physiqueai-custom-meals", JSON.stringify([...existing, newMeal]));

    router.push("/nutrition");
  };

  const inputClass = "bg-secondary text-foreground text-sm font-bold rounded-xl p-3.5 outline-none focus:ring-2 focus:ring-primary/50 transition-all border border-border w-full placeholder:text-muted-foreground placeholder:font-medium";

  return (
    <div className="flex flex-col min-h-screen px-4 pt-6 pb-24">
      <div className="flex items-center gap-2 mb-6 text-muted-foreground hover:text-foreground transition-colors tap-highlight-transparent">
        <Link href="/nutrition" className="flex items-center gap-1 tap-highlight-transparent">
          <ChevronLeftIcon size={20} />
          <span className="text-sm font-semibold">Back to Nutrition</span>
        </Link>
      </div>

      <SectionHeader title="Log Food" />

      <div className="flex flex-col gap-6 mt-4">
        {/* Basic Details */}
        <div className="bg-card border border-border rounded-3xl p-5 flex flex-col gap-4 shadow-sm">
          <div className="flex flex-col gap-1.5">
            <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">Food Name or Description</label>
            <input 
              type="text" 
              name="name"
              placeholder="e.g. Grilled Chicken Salad"
              value={formData.name}
              onChange={handleChange}
              className={inputClass}
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">Meal Type</label>
            <select 
              name="type" 
              value={formData.type}
              onChange={handleChange}
              className={inputClass}
            >
              <option value="Breakfast">Breakfast</option>
              <option value="Lunch">Lunch</option>
              <option value="Dinner">Dinner</option>
              <option value="Snack">Snack</option>
            </select>
          </div>
        </div>

        {/* Macros Area */}
        <div className="bg-card border border-border rounded-3xl p-5 shadow-sm">
          <h3 className="text-sm font-bold text-foreground mb-4 flex items-center gap-2">
            <ActivityIcon size={16} className="text-primary" />
            Nutritional Info
          </h3>

          <div className="grid grid-cols-2 gap-4 mb-4">
             <div className="flex flex-col gap-1.5 col-span-2 border border-primary/20 bg-primary/5 p-4 rounded-xl">
              <label className="text-[10px] font-bold text-primary uppercase tracking-wider">Total Calories (kcal)</label>
              <input 
                type="number" 
                name="calories"
                placeholder="0"
                value={formData.calories}
                onChange={handleChange}
                className={cn(inputClass, "text-2xl font-display !bg-transparent border-none px-0 !py-1 focus:ring-0")}
              />
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3">
            <div className="flex flex-col gap-1.5 bg-secondary/30 p-3 rounded-xl border border-border text-center relative overflow-hidden group focus-within:border-primary/50 transition-colors">
              <div className="absolute top-0 left-0 w-full h-1 bg-primary" />
              <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider mt-1">Protein (g)</label>
              <input 
                type="number" 
                name="protein"
                placeholder="0"
                value={formData.protein}
                onChange={handleChange}
                className="bg-transparent text-foreground text-center text-xl font-display font-bold w-full outline-none"
              />
            </div>

            <div className="flex flex-col gap-1.5 bg-secondary/30 p-3 rounded-xl border border-border text-center relative overflow-hidden group focus-within:border-accent/50 transition-colors">
              <div className="absolute top-0 left-0 w-full h-1 bg-accent" />
              <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider mt-1">Carbs (g)</label>
              <input 
                type="number" 
                name="carbs"
                placeholder="0"
                value={formData.carbs}
                onChange={handleChange}
                className="bg-transparent text-foreground text-center text-xl font-display font-bold w-full outline-none"
              />
            </div>

            <div className="flex flex-col gap-1.5 bg-secondary/30 p-3 rounded-xl border border-border text-center relative overflow-hidden group focus-within:border-yellow-500/50 transition-colors">
              <div className="absolute top-0 left-0 w-full h-1 bg-yellow-500" />
              <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider mt-1">Fat (g)</label>
              <input 
                type="number" 
                name="fat"
                placeholder="0"
                value={formData.fat}
                onChange={handleChange}
                className="bg-transparent text-foreground text-center text-xl font-display font-bold w-full outline-none"
              />
            </div>
          </div>
        </div>

        <AppButton 
          fullWidth 
          onClick={handleSave} 
          disabled={!formData.name || !formData.calories}
          className="mt-4"
        >
          <PlusIcon size={18} className="mr-2" /> Log Food
        </AppButton>
      </div>
    </div>
  );
}
