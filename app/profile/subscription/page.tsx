import SectionHeader from "@/components/ui/SectionHeader";
import { ChevronLeftIcon, CreditCardIcon } from "lucide-react";
import Link from "next/link";
import EmptyState from "@/components/ui/EmptyState";

export default function SubscriptionPage() {
  return (
    <div className="flex flex-col min-h-screen px-4 pt-6 pb-24">
      <div className="flex items-center gap-2 mb-6 text-muted-foreground hover:text-foreground transition-colors tap-highlight-transparent">
        <Link href="/profile" className="flex items-center gap-1 tap-highlight-transparent">
          <ChevronLeftIcon size={20} />
          <span className="text-sm font-semibold">Back</span>
        </Link>
      </div>

      <SectionHeader title="Subscription" />

      <div className="mt-4">
        <EmptyState 
          icon={CreditCardIcon} 
          title="PhysiqueAI PRO (Mock)" 
          description="You are currently on the free beta tier. Premium subscription options will be available upon full launch." 
        />
      </div>
    </div>
  );
}
