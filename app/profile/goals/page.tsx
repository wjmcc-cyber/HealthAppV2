"use client";

import SectionHeader from "@/components/ui/SectionHeader";
import { ChevronLeftIcon } from "lucide-react";
import Link from "next/link";
import EmptyState from "@/components/ui/EmptyState";
import { DumbbellIcon } from "lucide-react";

export default function GoalsPage() {
  return (
    <div className="flex flex-col min-h-screen px-4 pt-6 pb-24">
      <div className="flex items-center gap-2 mb-6 text-muted-foreground hover:text-foreground transition-colors tap-highlight-transparent">
        <Link href="/profile" className="flex items-center gap-1 tap-highlight-transparent">
          <ChevronLeftIcon size={20} />
          <span className="text-sm font-semibold">Back</span>
        </Link>
      </div>

      <SectionHeader title="Fitness Goals & Plan" />

      <div className="mt-4">
        <EmptyState 
          icon={DumbbellIcon} 
          title="Current Plan Active" 
          description="You are currently on the 'Body Recomposition' plan. To change your plan, you will need to restart the onboarding process." 
          actionLabel="Restart Onboarding"
          actionHref="/onboarding"
        />
      </div>
    </div>
  );
}
