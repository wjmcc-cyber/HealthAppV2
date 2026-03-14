import SectionHeader from "@/components/ui/SectionHeader";
import { ChevronLeftIcon, ShieldIcon } from "lucide-react";
import Link from "next/link";
import EmptyState from "@/components/ui/EmptyState";

export default function PrivacyPage() {
  return (
    <div className="flex flex-col min-h-screen px-4 pt-6 pb-24">
      <div className="flex items-center gap-2 mb-6 text-muted-foreground hover:text-foreground transition-colors tap-highlight-transparent">
        <Link href="/profile" className="flex items-center gap-1 tap-highlight-transparent">
          <ChevronLeftIcon size={20} />
          <span className="text-sm font-semibold">Back</span>
        </Link>
      </div>

      <SectionHeader title="Privacy & Data" />

      <div className="mt-4">
        <EmptyState 
          icon={ShieldIcon} 
          title="Your data is secure" 
          description="All body scan data is processed locally on your device or encrypted on our servers. You have complete control over your information." 
          actionLabel="View Privacy Policy"
        />
      </div>
    </div>
  );
}
