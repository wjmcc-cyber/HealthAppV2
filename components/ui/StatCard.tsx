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
  className?: string;
  valueClassName?: string;
}

export default function StatCard({
  title,
  value,
  subtitle,
  icon: Icon,
  trend,
  className,
  valueClassName,
}: StatCardProps) {
  return (
    <div className={cn("bg-card border border-border rounded-2xl p-4 flex flex-col justify-between shadow-lg", className)}>
      <div className="flex flex-row items-center justify-between mb-2">
        <h3 className="text-sm font-medium text-muted-foreground">{title}</h3>
        {Icon && <Icon size={16} className="text-muted-foreground opacity-50" />}
      </div>
      <div className="flex flex-col gap-1 mt-1">
        <div className="flex items-baseline gap-2">
          <span className={cn("text-2xl font-bold text-white tracking-tight", valueClassName)}>
            {value}
          </span>
          {trend && (
            <span className={cn("text-xs font-semibold", trend.isPositive ? "text-primary" : "text-red-500")}>
              {trend.isPositive ? "+" : "-"}{Math.abs(trend.value)}%
            </span>
          )}
        </div>
        {subtitle && <p className="text-xs text-muted-foreground">{subtitle}</p>}
      </div>
    </div>
  );
}
