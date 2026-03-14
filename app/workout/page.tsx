"use client";

import { useState } from "react";
import SectionHeader from "@/components/ui/SectionHeader";
import WorkoutExerciseCard from "@/components/ui/WorkoutExerciseCard";
import AppButton from "@/components/ui/AppButton";
import { MOCK_TODAY_WORKOUT } from "@/data/mockData";
import { PlayIcon, CheckCircleIcon, CalendarIcon, DumbbellIcon } from "lucide-react";

export default function WorkoutPage() {
  const [completedExercises, setCompletedExercises] = useState<string[]>([]);
  const [workoutStarted, setWorkoutStarted] = useState(false);

  const toggleExercise = (id: string) => {
    setCompletedExercises(prev => 
      prev.includes(id) ? prev.filter(e => e !== id) : [...prev, id]
    );
  };

  const isFullyCompleted = completedExercises.length === MOCK_TODAY_WORKOUT.exercises.length;

  return (
    <div className="flex flex-col min-h-full px-4 pt-6 pb-6 relative">
      {/* Background flair */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />

      <SectionHeader 
        title="Workout" 
        action={
          <button className="flex items-center gap-1.5 text-xs font-bold text-muted-foreground uppercase tracking-wider bg-secondary/50 px-3 py-1.5 rounded-full tap-highlight-transparent">
             <CalendarIcon size={14} /> Plan
          </button>
        }
      />

      <div className="mb-6 mt-2 relative z-10">
        <h1 className="text-5xl font-display uppercase font-extrabold text-white tracking-tight leading-none mb-2 drop-shadow-md">
          {MOCK_TODAY_WORKOUT.title}
        </h1>
        <p className="text-primary font-bold flex items-center gap-2 uppercase tracking-wide text-xs">
          <span>{MOCK_TODAY_WORKOUT.durationMinutes} mins</span>
          <span className="w-1 h-1 rounded-full bg-primary/50" />
          <span>{MOCK_TODAY_WORKOUT.exercises.length} exercises</span>
        </p>
      </div>

      {!workoutStarted ? (
        <div className="flex-1 flex flex-col justify-center gap-6 animate-in fade-in duration-500 relative z-10">
          <div className="bg-white border-none rounded-[2rem] p-6 text-center shadow-xl relative overflow-hidden">
             {/* Glow Accent inside card */}
             <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-primary/20 rounded-full blur-2xl pointer-events-none" />
             
             <h3 className="text-2xl font-display uppercase font-bold text-black mb-2">Ready to crush it?</h3>
             <p className="text-sm text-black/60 font-semibold mb-6">Make sure to warm up your rotator cuffs before starting heavy presses.</p>
             <AppButton size="lg" fullWidth onClick={() => setWorkoutStarted(true)} className="shadow-[0_0_15px_rgba(56,242,205,0.4)]">
               <PlayIcon size={20} className="mr-2" /> Start Workout
             </AppButton>
          </div>
          
          <div>
            <h4 className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-3 px-1 text-white">Exercise Preview</h4>
            <div className="flex gap-3 overflow-x-auto pb-4 snap-x hide-scrollbar">
              {MOCK_TODAY_WORKOUT.exercises.map(ex => (
                <div key={ex.id} className="snap-start shrink-0 w-36 bg-white border border-white rounded-[1.5rem] p-3 flex flex-col gap-2 shadow-lg relative overflow-hidden">
                   <div className="absolute -top-4 -right-4 w-12 h-12 bg-primary/10 rounded-full blur-xl pointer-events-none" />
                   <div className="w-full aspect-video bg-black/5 rounded-xl mb-1 flex items-center justify-center relative">
                     {/* Image Placeholder with subtle icon */}
                      <DumbbellIcon size={24} className="text-black/10" />
                   </div>
                   <p className="text-sm font-bold text-black line-clamp-2 leading-tight uppercase font-display">{ex.name}</p>
                   <p className="text-[10px] text-black/50 font-bold uppercase tracking-wider">{ex.sets} set × {ex.reps}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col gap-4 animate-in slide-in-from-bottom-4 duration-500 pb-20">
          <div className="flex items-center justify-between mb-2">
            <h4 className="text-sm font-bold text-white">Current Circuit</h4>
            <span className="text-xs font-bold text-primary">{Math.round((completedExercises.length / MOCK_TODAY_WORKOUT.exercises.length) * 100)}% Done</span>
          </div>

          <div className="flex flex-col gap-3">
            {MOCK_TODAY_WORKOUT.exercises.map((ex) => (
              <WorkoutExerciseCard
                key={ex.id}
                name={ex.name}
                muscle={ex.muscleGroup}
                sets={ex.sets}
                reps={ex.reps}
                rest={ex.restPeriod}
                isCompleted={completedExercises.includes(ex.id)}
                onToggle={() => toggleExercise(ex.id)}
              />
            ))}
          </div>

          <div className="fixed bottom-24 left-4 right-4 z-20">
            <AppButton 
              fullWidth 
              size="lg" 
              variant={isFullyCompleted ? "primary" : "secondary"}
              className="shadow-2xl"
            >
              {isFullyCompleted ? (
                <>
                   <CheckCircleIcon size={20} className="mr-2" /> Finish Workout
                </>
              ) : (
                "End Early"
              )}
            </AppButton>
          </div>
        </div>
      )}
    </div>
  );
}
