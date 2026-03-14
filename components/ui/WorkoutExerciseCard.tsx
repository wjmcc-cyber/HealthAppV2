import { cn } from "@/lib/utils";
import { PlayCircleIcon, CheckCircle2Icon } from "lucide-react";

interface WorkoutExerciseCardProps {
  name: string;
  muscle: string;
  sets: number;
  reps: string;
  rest: string;
  isCompleted?: boolean;
  onToggle?: () => void;
  className?: string;
}

export default function WorkoutExerciseCard({
  name,
  muscle,
  sets,
  reps,
  rest,
  isCompleted = false,
  onToggle,
  className,
}: WorkoutExerciseCardProps) {
  return (
    <div 
      className={cn(
        "flex flex-row items-center gap-4 p-4 rounded-2xl border transition-all duration-300",
        isCompleted 
          ? "bg-primary/5 border-primary/20 opacity-80" 
          : "bg-card border-border shadow-md",
        className
      )}
    >
      {/* Exercise Image Placeholder */}
      <div className="w-16 h-16 rounded-xl bg-secondary flex items-center justify-center shrink-0 overflow-hidden relative group cursor-pointer">
        <PlayCircleIcon className="text-white/50 group-hover:text-primary transition-colors z-10" />
        <div className="absolute inset-0 bg-gradient-to-tr from-black/40 to-transparent" />
      </div>

      <div className="flex-1 flex flex-col gap-1">
        <h3 className={cn("text-base font-bold", isCompleted ? "text-primary" : "text-white")}>
          {name}
        </h3>
        <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider">
          {muscle}
        </p>
        <div className="flex items-center gap-3 mt-1 text-xs text-white/70">
          <span className="font-semibold">{sets} sets</span>
          <span className="w-1 h-1 rounded-full bg-border" />
          <span className="font-semibold">{reps}</span>
          <span className="w-1 h-1 rounded-full bg-border" />
          <span>{rest} rest</span>
        </div>
      </div>

      <button 
        onClick={onToggle}
        className={cn(
          "w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors tap-highlight-transparent",
          isCompleted ? "text-primary" : "text-muted-foreground hover:bg-white/5 hover:text-white"
        )}
      >
        <CheckCircle2Icon size={24} />
      </button>
    </div>
  );
}
