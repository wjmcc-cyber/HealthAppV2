import { cn } from "@/lib/utils";

interface ProgressRingProps {
  progress: number; // 0 to 100
  size?: number;
  strokeWidth?: number;
  colorClass?: string;
  emptyColorClass?: string;
  children?: React.ReactNode;
  className?: string;
}

export default function ProgressRing({
  progress,
  size = 120,
  strokeWidth = 12,
  colorClass = "text-primary",
  emptyColorClass = "text-muted-foreground/20",
  children,
  className,
}: ProgressRingProps) {
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const safeProgress = Math.min(Math.max(progress, 0), 100);
  const offset = circumference - (safeProgress / 100) * circumference;

  return (
    <div className={cn("relative flex items-center justify-center", className)} style={{ width: size, height: size }}>
      <svg width={size} height={size} className="transform -rotate-90">
        {/* Background Ring */}
        <circle
          className={emptyColorClass}
          stroke="currentColor"
          fill="transparent"
          strokeWidth={strokeWidth}
          r={radius}
          cx={size / 2}
          cy={size / 2}
        />
        {/* Progress Ring */}
        <circle
          className={cn("transition-all duration-1000 ease-out", colorClass)}
          stroke="currentColor"
          fill="transparent"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          r={radius}
          cx={size / 2}
          cy={size / 2}
          style={{
            filter: "drop-shadow(0px 0px 4px currentColor)",
          }}
        />
      </svg>
      {/* Center Content */}
      <div className="absolute flex flex-col items-center justify-center text-center">
        {children}
      </div>
    </div>
  );
}
