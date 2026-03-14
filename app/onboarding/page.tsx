"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import AppButton from "@/components/ui/AppButton";
import SectionHeader from "@/components/ui/SectionHeader";
import { ChevronLeftIcon } from "lucide-react";
import { cn } from "@/lib/utils";

const STEPS = ["Goal", "Basics", "Experience", "Equipment", "Preview"];

export default function OnboardingPage() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(0);

  // States for onboarding tracking
  const [goal, setGoal] = useState<string>("Lose fat");
  const [experience, setExperience] = useState<string>("Intermediate");
  const [equipment, setEquipment] = useState<string>("Full gym");

  const progress = ((currentStep + 1) / STEPS.length) * 100;

  const nextStep = () => {
    if (currentStep < STEPS.length - 1) {
      setCurrentStep(s => s + 1);
    } else {
      router.push("/dashboard");
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(s => s - 1);
    } else {
      router.push("/");
    }
  };

  return (
    <div className="flex flex-col min-h-full px-4 pt-6 pb-6 relative z-10 bg-black">
      {/* Top Navigation & Progress */}
      <div className="flex items-center gap-4 mb-8">
        <button onClick={prevStep} className="p-2 -ml-2 text-white/70 hover:text-white tap-highlight-transparent">
          <ChevronLeftIcon size={24} />
        </button>
        <div className="flex-1 h-2 bg-secondary rounded-full overflow-hidden">
          <div 
            className="h-full bg-primary transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
        <span className="text-sm font-semibold text-white/50">{currentStep + 1}/{STEPS.length}</span>
      </div>

      {/* Dynamic Content */}
      <div className="flex-1 flex flex-col">
        {currentStep === 0 && (
          <div className="animate-in fade-in slide-in-from-right-4 duration-500">
            <SectionHeader title="What's your primary goal?" subtitle="PhysiqueAI uses this to personalize your plan." />
            <div className="flex flex-col gap-3 mt-6">
              {["Lose fat", "Build muscle", "Recomp", "Athletic performance"].map((g) => (
                <button
                  key={g}
                  onClick={() => setGoal(g)}
                  className={cn(
                    "p-5 rounded-2xl border-2 text-left transition-all duration-200 tap-highlight-transparent font-semibold",
                    goal === g 
                      ? "border-primary bg-primary/10 text-white" 
                      : "border-border bg-card text-muted-foreground"
                  )}
                >
                  {g}
                </button>
              ))}
            </div>
          </div>
        )}

        {currentStep === 1 && (
          <div className="animate-in fade-in slide-in-from-right-4 duration-500">
            <SectionHeader title="Let's get the basics" subtitle="Used to calculate your initial metabolic baseline." />
            <div className="flex flex-col gap-6 mt-6">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Age</label>
                <input type="number" placeholder="28" className="bg-card border border-border rounded-xl p-4 text-white font-semibold text-lg focus:border-primary focus:outline-none transition-colors" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Height (cm)</label>
                  <input type="number" placeholder="180" className="bg-card border border-border rounded-xl p-4 text-white font-semibold text-lg focus:border-primary focus:outline-none transition-colors" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Weight (kg)</label>
                  <input type="number" placeholder="82.5" className="bg-card border border-border rounded-xl p-4 text-white font-semibold text-lg focus:border-primary focus:outline-none transition-colors" />
                </div>
              </div>
            </div>
          </div>
        )}

        {currentStep === 2 && (
          <div className="animate-in fade-in slide-in-from-right-4 duration-500">
            <SectionHeader title="Experience Level" subtitle="To ensure safe and effective exercise selection." />
            <div className="flex flex-col gap-3 mt-6">
              {["Beginner", "Intermediate", "Advanced"].map((lvl) => (
                <button
                  key={lvl}
                  onClick={() => setExperience(lvl)}
                  className={cn(
                    "p-5 rounded-2xl border-2 text-left transition-all duration-200 tap-highlight-transparent font-semibold",
                    experience === lvl 
                      ? "border-primary bg-primary/10 text-white" 
                      : "border-border bg-card text-muted-foreground"
                  )}
                >
                  {lvl}
                </button>
              ))}
            </div>
          </div>
        )}

        {currentStep === 3 && (
          <div className="animate-in fade-in slide-in-from-right-4 duration-500">
            <SectionHeader title="Equipment Access" subtitle="What do you have available for your workouts?" />
            <div className="flex flex-col gap-3 mt-6">
              {["Full gym", "Dumbbells only", "Home bodyweight"].map((eq) => (
                <button
                  key={eq}
                  onClick={() => setEquipment(eq)}
                  className={cn(
                    "p-5 rounded-2xl border-2 text-left transition-all duration-200 tap-highlight-transparent font-semibold",
                    equipment === eq 
                      ? "border-primary bg-primary/10 text-white" 
                      : "border-border bg-card text-muted-foreground"
                  )}
                >
                  {eq}
                </button>
              ))}
            </div>
          </div>
        )}

        {currentStep === 4 && (
          <div className="animate-in fade-in slide-in-from-right-4 duration-500 flex flex-col items-center justify-center pt-8">
            <div className="w-24 h-24 rounded-full bg-primary/20 flex items-center justify-center mb-6">
              <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center shadow-[0_0_30px_rgba(0,242,96,0.6)] animate-pulse">
                <span className="text-black font-extrabold text-2xl">AI</span>
              </div>
            </div>
            <h2 className="text-2xl font-bold text-white mb-2 text-center">Plan Ready</h2>
            <p className="text-center text-muted-foreground max-w-xs leading-relaxed">
              We've processed your profile and customized a 12-week blueprint to hit your goal of <span className="text-primary font-semibold">{goal.toLowerCase()}</span>.
            </p>
          </div>
        )}
      </div>

      <div className="mt-8">
        <AppButton fullWidth size="lg" onClick={nextStep}>
          {currentStep === STEPS.length - 1 ? "Generate My Plan" : "Continue"}
        </AppButton>
      </div>
    </div>
  );
}
