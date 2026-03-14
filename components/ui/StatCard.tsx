import { cn } from "@/lib/utils";
import React from "react";

interface StatCardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  icon?: React.ElementType;
  trend?: {
    value: number;
    isPositive: boolean;
  };
  variant?: "dark" | "white";
  className?: string;
  valueClassName?: string;
}

export default function StatCard({
  title,
  value,
  subtitle,
  icon: Icon,
  trend,
  variant = "dark",
  className,
  valueClassName,
}: StatCardProps) {
  const isWhite = variant === "white";
  
  return (
    <div className={cn(
      "border rounded-3xl p-5 flex flex-col justify-between shadow-lg transition-colors",
      isWhite ? "bg-white border-white text-black" : "bg-accent border-border text-white",
      className
    )}>
      <div className="flex flex-row items-center justify-between mb-3">
        <h3 className={cn("text-xs font-bold uppercase tracking-wider", isWhite ? "text-black/60" : "text-muted-foreground")}>
          {title}
        </h3>
        {Icon && <Icon size={16} className={isWhite ? "text-black/40" : "text-muted-foreground opacity-50"} />}
      </div>
      <div className="flex flex-col gap-1 mt-auto pt-2">
        <div className="flex items-baseline gap-2">
          <span className={cn("text-4xl font-display uppercase leading-none tracking-tight", isWhite ? "text-black" : "text-white", valueClassName)}>
            {value}
          </span>
          {trend && (
            <span className={cn("text-xs font-bold", trend.isPositive ? (isWhite ? "text-emerald-500" : "text-primary") : "text-red-500")}>
              {trend.isPositive ? "+" : "-"}{Math.abs(trend.value)}%
            </span>
          )}
        </div>
        {subtitle && <p className={cn("text-[10px] font-semibold uppercase tracking-wider mt-1", isWhite ? "text-black/50" : "text-muted-foreground")}>{subtitle}</p>}
      </div>
    </div>
  );
}
