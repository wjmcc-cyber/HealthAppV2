import React from "react";
import AppButton from "./AppButton";

interface EmptyStateProps {
  icon: React.ElementType;
  title: string;
  description: string;
  actionLabel?: string;
  onAction?: () => void;
  actionHref?: string;
}

export default function EmptyState({
  icon: Icon,
  title,
  description,
  actionLabel,
  onAction,
  actionHref,
}: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center py-12 px-4 text-center border-2 border-dashed border-border rounded-3xl bg-card/30">
      <div className="bg-secondary/50 p-4 rounded-full mb-4">
        <Icon size={32} className="text-muted-foreground" />
      </div>
      <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground max-w-[250px] mx-auto mb-6">
        {description}
      </p>
      {actionLabel && (
        <AppButton 
          variant="outline" 
          onClick={onAction} 
          href={actionHref}
        >
          {actionLabel}
        </AppButton>
      )}
    </div>
  );
}
