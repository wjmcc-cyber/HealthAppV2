import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  action?: React.ReactNode;
  className?: string;
}

export default function SectionHeader({ title, subtitle, action, className }: SectionHeaderProps) {
  return (
    <div className={cn("flex flex-row items-center justify-between mb-4", className)}>
      <div>
        <h2 className="text-lg font-bold text-foreground tracking-tight">{title}</h2>
        {subtitle && <p className="text-sm text-muted-foreground">{subtitle}</p>}
      </div>
      {action && <div>{action}</div>}
    </div>
  );
}
