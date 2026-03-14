import { cn } from "@/lib/utils";
import { SparklesIcon } from "lucide-react";

interface InsightCardProps {
  title?: string;
  insight: string;
  className?: string;
}

export default function InsightCard({
  title = "AI Insight",
  insight,
  className,
}: InsightCardProps) {
  return (
    <div className={cn("relative overflow-hidden rounded-2xl p-4 border border-primary/20 bg-primary/5", className)}>
      {/* Background glowing effect */}
      <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/10 rounded-full blur-2xl pointer-events-none" />
      
      <div className="relative z-10 flex flex-col gap-2">
        <div className="flex items-center gap-2 text-primary">
          <SparklesIcon size={16} className="animate-pulse" />
          <h3 className="text-sm font-semibold tracking-wide uppercase">{title}</h3>
        </div>
        <p className="text-sm text-white/90 leading-relaxed font-medium">
          {insight}
        </p>
      </div>
    </div>
  );
}
