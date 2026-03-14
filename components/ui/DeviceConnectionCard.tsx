import { cn } from "@/lib/utils";
import AppButton from "./AppButton";

interface DeviceConnectionCardProps {
  name: string;
  icon: React.ElementType;
  description: string;
  isConnected: boolean;
  onConnect?: () => void;
  className?: string;
}

export default function DeviceConnectionCard({
  name,
  icon: Icon,
  description,
  isConnected,
  onConnect,
  className,
}: DeviceConnectionCardProps) {
  return (
    <div className={cn("flex flex-row items-center justify-between p-4 rounded-2xl bg-card border border-border", className)}>
      <div className="flex items-center gap-4">
        <div className={cn(
          "w-12 h-12 rounded-xl flex items-center justify-center text-foreground",
          isConnected ? "bg-primary/20 text-primary" : "bg-card border border-border"
        )}>
          <Icon size={24} />
        </div>
        <div>
          <h3 className="font-bold text-foreground text-base">{name}</h3>
          <p className="text-xs text-muted-foreground max-w-[160px] truncate">{description}</p>
        </div>
      </div>
      <AppButton
        variant={isConnected ? "outline" : "secondary"}
        size="sm"
        onClick={onConnect}
        className={isConnected ? "border-primary/50 text-primary" : ""}
      >
        {isConnected ? "Connected" : "Connect"}
      </AppButton>
    </div>
  );
}
