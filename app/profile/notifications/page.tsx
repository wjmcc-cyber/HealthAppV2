import SectionHeader from "@/components/ui/SectionHeader";
import { ChevronLeftIcon, BellIcon } from "lucide-react";
import Link from "next/link";
import EmptyState from "@/components/ui/EmptyState";

export default function NotificationsPage() {
  return (
    <div className="flex flex-col min-h-screen px-4 pt-6 pb-24">
      <div className="flex items-center gap-2 mb-6 text-muted-foreground hover:text-foreground transition-colors tap-highlight-transparent">
        <Link href="/profile" className="flex items-center gap-1 tap-highlight-transparent">
          <ChevronLeftIcon size={20} />
          <span className="text-sm font-semibold">Back</span>
        </Link>
      </div>

      <SectionHeader title="Notifications" />

      <div className="mt-4">
        <EmptyState 
          icon={BellIcon} 
          title="You're all set up" 
          description="Push notifications will alert you for scheduled workouts, fasting windows, and scan reminders." 
        />
      </div>
    </div>
  );
}
