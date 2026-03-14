import { cn } from "@/lib/utils";
import { CameraIcon, CheckIcon } from "lucide-react";
import AppButton from "./AppButton";

interface ScanStepCardProps {
  title: string;
  description: string;
  isCompleted: boolean;
  isActive: boolean;
  onStart: () => void;
  className?: string;
}

export default function ScanStepCard({
  title,
  description,
  isCompleted,
  isActive,
  onStart,
  className,
}: ScanStepCardProps) {
  return (
    <div 
      className={cn(
        "flex flex-col gap-4 p-5 rounded-2xl border transition-all duration-300",
        isActive ? "border-primary shadow-[0_0_15px_rgba(0,242,96,0.15)] bg-primary/5" : "border-border bg-card",
        isCompleted && !isActive ? "opacity-60" : "",
        className
      )}
    >
      <div className="flex items-start justify-between">
        <div className="flex flex-col gap-1">
          <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
            {title}
            {isCompleted && <CheckIcon size={16} className="text-primary" />}
          </h3>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
        <div className={cn(
          "w-10 h-10 rounded-full flex items-center justify-center shrink-0",
          isActive ? "bg-primary text-primary-foreground" : "bg-secondary text-muted-foreground",
          isCompleted ? "bg-primary/20 text-primary" : ""
        )}>
          <CameraIcon size={20} />
        </div>
      </div>

      {(isActive || !isCompleted) && (
        <div className="relative mt-2 w-full">
          {/* Hidden native file input to trigger camera on mobile */}
          <input 
            type="file" 
            accept="image/*" 
            capture="environment" 
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
            onChange={(e) => {
              // If a file is selected (user took a photo), trigger the step
              if (e.target.files && e.target.files.length > 0) {
                onStart();
              }
            }}
          />
          <AppButton 
            variant={isActive ? "primary" : "secondary"} 
            fullWidth 
            className="pointer-events-none"
          >
            {isCompleted ? "Recapture" : "Start Capture"}
          </AppButton>
        </div>
      )}
    </div>
  );
}
