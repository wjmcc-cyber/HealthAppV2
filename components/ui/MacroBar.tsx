import { cn } from "@/lib/utils";

interface MacroBarProps {
  label: string;
  current: number;
  total: number;
  colorClass?: string;
  unit?: string;
  className?: string;
}

export default function MacroBar({
  label,
  current,
  total,
  colorClass = "bg-primary",
  unit = "g",
  className,
}: MacroBarProps) {
  const percentage = Math.min(Math.max((current / total) * 100, 0), 100);

  return (
    <div className={cn("flex flex-col gap-1.5", className)}>
      <div className="flex flex-row justify-between items-end text-xs">
        <span className="font-semibold text-foreground tracking-wide">{label}</span>
        <span className="text-muted-foreground">
          <span className="text-foreground font-medium">{Math.round(current)}</span> / {Math.round(total)}{unit}
        </span>
      </div>
      <div className="h-2.5 w-full bg-secondary rounded-full overflow-hidden">
        <div
          className={cn("h-full rounded-full transition-all duration-500 ease-out", colorClass)}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}
