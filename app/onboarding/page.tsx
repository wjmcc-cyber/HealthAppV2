"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import AppButton from "@/components/ui/AppButton";
import SectionHeader from "@/components/ui/SectionHeader";
import { ChevronLeftIcon, CheckIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { useUnits } from "@/lib/units";
import {
  GOALS,
  EXPERIENCE_LEVELS,
  EQUIPMENT_OPTIONS,
  TRAINING_DAYS_OPTIONS,
  WORKOUT_DURATION_OPTIONS,
  INJURY_OPTIONS,
  DIETARY_PREFERENCES,
} from "@/constants";

const STEPS = [
  "Goal",
  "Basics",
  "Experience",
  "Equipment",
  "Schedule",
  "Duration",
  "Injuries",
  "Diet",
  "Summary",
];

export default function OnboardingPage() {
  const router = useRouter();
  const { system, setSystem } = useUnits();
  const [currentStep, setCurrentStep] = useState(0);

  // Onboarding state
  const [goal, setGoal] = useState<string>("Lose fat");
  const [age, setAge] = useState<string>("");
  const [height, setHeight] = useState<string>("");
  const [weight, setWeight] = useState<string>("");
  const [experience, setExperience] = useState<string>("Intermediate");
  const [equipment, setEquipment] = useState<string>("Full gym");
  const [trainingDays, setTrainingDays] = useState<number>(4);
  const [workoutDuration, setWorkoutDuration] = useState<number>(60);
  const [injuries, setInjuries] = useState<string[]>(["None"]);
  const [dietaryPrefs, setDietaryPrefs] = useState<string[]>(["No restrictions"]);

  const progress = ((currentStep + 1) / STEPS.length) * 100;

  const nextStep = () => {
    if (currentStep < STEPS.length - 1) {
      setCurrentStep((s) => s + 1);
    } else {
      router.push("/dashboard");
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep((s) => s - 1);
    } else {
      router.push("/");
    }
  };

  const toggleInjury = (item: string) => {
    if (item === "None") {
      setInjuries(["None"]);
    } else {
      setInjuries((prev) => {
        const filtered = prev.filter((i) => i !== "None");
        return filtered.includes(item)
          ? filtered.filter((i) => i !== item)
          : [...filtered, item];
      });
    }
  };

  const toggleDiet = (item: string) => {
    if (item === "No restrictions") {
      setDietaryPrefs(["No restrictions"]);
    } else {
      setDietaryPrefs((prev) => {
        const filtered = prev.filter((i) => i !== "No restrictions");
        return filtered.includes(item)
          ? filtered.filter((i) => i !== item)
          : [...filtered, item];
      });
    }
  };

  return (
    <div className="flex flex-col min-h-full px-4 pt-6 pb-6 relative z-10 bg-black">
      {/* Top Navigation & Progress */}
      <div className="flex items-center gap-4 mb-8">
        <button
          onClick={prevStep}
          className="p-2 -ml-2 text-white/70 hover:text-white tap-highlight-transparent"
        >
          <ChevronLeftIcon size={24} />
        </button>
        <div className="flex-1 h-2 bg-secondary rounded-full overflow-hidden">
          <div
            className="h-full bg-primary transition-all duration-500 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
        <span className="text-sm font-semibold text-white/50">
          {currentStep + 1}/{STEPS.length}
        </span>
      </div>

      {/* Dynamic Content */}
      <div className="flex-1 flex flex-col">
        {/* Step 0: Goal */}
        {currentStep === 0 && (
          <div className="animate-in fade-in slide-in-from-right-4 duration-500">
            <SectionHeader
              title="What's your primary goal?"
              subtitle="PhysiqueAI uses this to personalize your plan."
            />
            <div className="flex flex-col gap-3 mt-6">
              {GOALS.map((g) => (
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

        {/* Step 1: Basics */}
        {currentStep === 1 && (
          <div className="animate-in fade-in slide-in-from-right-4 duration-500">
            <SectionHeader
              title="Let's get the basics"
              subtitle="Used to calculate your initial metabolic baseline."
            />

            <div className="flex bg-secondary/50 p-1 rounded-full mb-6 mt-4 w-fit border border-white/5">
              <button
                onClick={() => setSystem("metric")}
                className={cn(
                  "px-4 py-1.5 rounded-full text-xs font-bold transition-all tap-highlight-transparent",
                  system === "metric"
                    ? "bg-white text-black shadow-sm"
                    : "text-muted-foreground hover:text-white"
                )}
              >
                Metric
              </button>
              <button
                onClick={() => setSystem("imperial")}
                className={cn(
                  "px-4 py-1.5 rounded-full text-xs font-bold transition-all tap-highlight-transparent",
                  system === "imperial"
                    ? "bg-white text-black shadow-sm"
                    : "text-muted-foreground hover:text-white"
                )}
              >
                Imperial
              </button>
            </div>

            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider ml-1">
                  Age
                </label>
                <input
                  type="number"
                  placeholder="28"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  className="bg-card border border-border rounded-2xl p-4 text-white font-display text-2xl focus:border-primary focus:outline-none transition-colors"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider ml-1">
                    Height ({system === "metric" ? "cm" : "in"})
                  </label>
                  <input
                    type="number"
                    placeholder={system === "metric" ? "180" : "71"}
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                    className="bg-card border border-border rounded-2xl p-4 text-white font-display text-2xl focus:border-primary focus:outline-none transition-colors"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider ml-1">
                    Weight ({system === "metric" ? "kg" : "lbs"})
                  </label>
                  <input
                    type="number"
                    placeholder={system === "metric" ? "82.5" : "182"}
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    className="bg-card border border-border rounded-2xl p-4 text-white font-display text-2xl focus:border-primary focus:outline-none transition-colors"
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Step 2: Experience */}
        {currentStep === 2 && (
          <div className="animate-in fade-in slide-in-from-right-4 duration-500">
            <SectionHeader
              title="Experience Level"
              subtitle="To ensure safe and effective exercise selection."
            />
            <div className="flex flex-col gap-3 mt-6">
              {EXPERIENCE_LEVELS.map((lvl) => (
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

        {/* Step 3: Equipment */}
        {currentStep === 3 && (
          <div className="animate-in fade-in slide-in-from-right-4 duration-500">
            <SectionHeader
              title="Equipment Access"
              subtitle="What do you have available for your workouts?"
            />
            <div className="flex flex-col gap-3 mt-6">
              {EQUIPMENT_OPTIONS.map((eq) => (
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

        {/* Step 4: Training Days */}
        {currentStep === 4 && (
          <div className="animate-in fade-in slide-in-from-right-4 duration-500">
            <SectionHeader
              title="Weekly Training Days"
              subtitle="How many days per week can you train?"
            />
            <div className="flex flex-col items-center mt-8">
              <div className="text-7xl font-display font-extrabold text-primary mb-6 tracking-tighter drop-shadow-[0_0_20px_rgba(56,242,205,0.4)]">
                {trainingDays}
              </div>
              <p className="text-sm text-muted-foreground mb-8 font-semibold uppercase tracking-wider">
                days per week
              </p>
              <div className="flex gap-3 w-full justify-center">
                {TRAINING_DAYS_OPTIONS.map((d) => (
                  <button
                    key={d}
                    onClick={() => setTrainingDays(d)}
                    className={cn(
                      "w-16 h-16 rounded-2xl font-display text-2xl font-bold transition-all duration-200 tap-highlight-transparent border-2",
                      trainingDays === d
                        ? "bg-primary text-black border-primary shadow-[0_0_15px_rgba(56,242,205,0.4)]"
                        : "bg-card border-border text-muted-foreground hover:text-white hover:border-white/30"
                    )}
                  >
                    {d}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Step 5: Workout Duration */}
        {currentStep === 5 && (
          <div className="animate-in fade-in slide-in-from-right-4 duration-500">
            <SectionHeader
              title="Time Per Workout"
              subtitle="We'll optimize your plan for the time you have."
            />
            <div className="flex flex-col items-center mt-8">
              <div className="text-7xl font-display font-extrabold text-white mb-2 tracking-tighter">
                {workoutDuration}
              </div>
              <p className="text-sm text-muted-foreground mb-8 font-semibold uppercase tracking-wider">
                minutes
              </p>
              <div className="flex flex-wrap gap-3 w-full justify-center">
                {WORKOUT_DURATION_OPTIONS.map((d) => (
                  <button
                    key={d}
                    onClick={() => setWorkoutDuration(d)}
                    className={cn(
                      "px-5 py-3 rounded-2xl font-bold transition-all duration-200 tap-highlight-transparent border-2 text-sm",
                      workoutDuration === d
                        ? "bg-primary text-black border-primary shadow-[0_0_15px_rgba(56,242,205,0.4)]"
                        : "bg-card border-border text-muted-foreground hover:text-white hover:border-white/30"
                    )}
                  >
                    {d} min
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Step 6: Injuries */}
        {currentStep === 6 && (
          <div className="animate-in fade-in slide-in-from-right-4 duration-500">
            <SectionHeader
              title="Injuries or Limitations"
              subtitle="Select all that apply. We'll keep your plan safe."
            />
            <div className="flex flex-wrap gap-3 mt-6">
              {INJURY_OPTIONS.map((item) => (
                <button
                  key={item}
                  onClick={() => toggleInjury(item)}
                  className={cn(
                    "px-4 py-3 rounded-2xl border-2 transition-all duration-200 tap-highlight-transparent font-semibold text-sm flex items-center gap-2",
                    injuries.includes(item)
                      ? "border-primary bg-primary/10 text-white"
                      : "border-border bg-card text-muted-foreground"
                  )}
                >
                  {injuries.includes(item) && (
                    <CheckIcon size={14} className="text-primary" />
                  )}
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 7: Dietary Preferences */}
        {currentStep === 7 && (
          <div className="animate-in fade-in slide-in-from-right-4 duration-500">
            <SectionHeader
              title="Dietary Preferences"
              subtitle="We'll tailor nutrition recommendations to your lifestyle."
            />
            <div className="flex flex-wrap gap-3 mt-6">
              {DIETARY_PREFERENCES.map((item) => (
                <button
                  key={item}
                  onClick={() => toggleDiet(item)}
                  className={cn(
                    "px-4 py-3 rounded-2xl border-2 transition-all duration-200 tap-highlight-transparent font-semibold text-sm flex items-center gap-2",
                    dietaryPrefs.includes(item)
                      ? "border-primary bg-primary/10 text-white"
                      : "border-border bg-card text-muted-foreground"
                  )}
                >
                  {dietaryPrefs.includes(item) && (
                    <CheckIcon size={14} className="text-primary" />
                  )}
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 8: Summary */}
        {currentStep === 8 && (
          <div className="animate-in fade-in slide-in-from-right-4 duration-500 flex flex-col gap-6">
            <div className="flex flex-col items-center text-center pt-4">
              <div className="w-24 h-24 rounded-full bg-primary/20 flex items-center justify-center mb-6">
                <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center shadow-[0_0_30px_rgba(56,242,205,0.6)] animate-pulse">
                  <span className="text-black font-extrabold text-2xl">AI</span>
                </div>
              </div>
              <h2 className="text-2xl font-bold text-white mb-2">
                Your Plan is Ready
              </h2>
              <p className="text-muted-foreground max-w-xs leading-relaxed text-sm">
                We&apos;ve built a personalized 12-week blueprint based on your
                profile.
              </p>
            </div>

            {/* Summary Cards */}
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-card/50 border border-border rounded-2xl p-4">
                <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider block mb-1">
                  Goal
                </span>
                <p className="text-sm font-bold text-white">{goal}</p>
              </div>
              <div className="bg-card/50 border border-border rounded-2xl p-4">
                <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider block mb-1">
                  Experience
                </span>
                <p className="text-sm font-bold text-white">{experience}</p>
              </div>
              <div className="bg-card/50 border border-border rounded-2xl p-4">
                <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider block mb-1">
                  Equipment
                </span>
                <p className="text-sm font-bold text-white">{equipment}</p>
              </div>
              <div className="bg-card/50 border border-border rounded-2xl p-4">
                <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider block mb-1">
                  Schedule
                </span>
                <p className="text-sm font-bold text-white">
                  {trainingDays}x / {workoutDuration}min
                </p>
              </div>
              <div className="bg-card/50 border border-border rounded-2xl p-4">
                <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider block mb-1">
                  Injuries
                </span>
                <p className="text-sm font-bold text-white">
                  {injuries.join(", ")}
                </p>
              </div>
              <div className="bg-card/50 border border-border rounded-2xl p-4">
                <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider block mb-1">
                  Diet
                </span>
                <p className="text-sm font-bold text-white">
                  {dietaryPrefs.join(", ")}
                </p>
              </div>
            </div>
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
