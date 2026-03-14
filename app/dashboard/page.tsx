import {
  MOCK_USER,
  MOCK_NUTRITION,
  MOCK_DASHBOARD_INSIGHT,
  MOCK_RECOVERY,
} from "@/data/mockData";
import SectionHeader from "@/components/ui/SectionHeader";
import StatCard from "@/components/ui/StatCard";
import ProgressRing from "@/components/ui/ProgressRing";
import InsightCard from "@/components/ui/InsightCard";
import AppButton from "@/components/ui/AppButton";
import {
  FlameIcon,
  ScanLineIcon,
  ActivityIcon,
  MoonStarIcon,
  ChevronRightIcon,
  SparklesIcon,
  TrendingUpIcon,
} from "lucide-react";
import Link from "next/link";

export default function DashboardPage() {
  const proteinProgress =
    (MOCK_NUTRITION.consumed.protein / MOCK_NUTRITION.target.protein) * 100;

  return (
    <div className="flex flex-col px-4 pt-6 pb-6 gap-6">
      {/* Header Profile Section */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground tracking-tight">
            Hi, {MOCK_USER.name.split(" ")[0]}
          </h1>
          <p className="text-sm text-muted-foreground font-medium">
            Let&apos;s crush your {MOCK_USER.goal.toLowerCase()} goal.
          </p>
        </div>
        <Link
          href="/profile"
          className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center overflow-hidden border border-border tap-highlight-transparent"
        >
          <span className="text-lg font-bold text-muted-foreground">
            {MOCK_USER.name[0]}
          </span>
        </Link>
      </div>

      <InsightCard insight={MOCK_DASHBOARD_INSIGHT} title="Daily AI Coaching" />

      {/* Main Focus: Today's Workout */}
      <section>
        <SectionHeader title="Today's Training" />
        <div className="bg-card border border-white rounded-[2rem] p-6 relative overflow-hidden group shadow-2xl">
          <div className="absolute top-0 right-0 w-48 h-48 bg-primary/20 rounded-full blur-3xl -mr-16 -mt-16" />
          <div className="flex justify-between items-start mb-6 relative z-10">
            <div>
              <span className="text-[10px] font-bold text-card-foreground/50 uppercase tracking-widest mb-1 block">
                Scheduled
              </span>
              <h2 className="text-3xl font-display uppercase tracking-tight text-card-foreground leading-none">
                Hypertrophy
                <br />
                Push Day
              </h2>
              <p className="text-sm text-card-foreground/70 font-bold mt-2">
                65 mins • 4 exercises
              </p>
            </div>
          </div>
          <AppButton
            href="/workout"
            fullWidth
            variant="primary"
            className="relative z-10 shadow-[0_0_20px_rgba(56,242,205,0.4)]"
          >
            Start Workout
            <ChevronRightIcon size={18} className="ml-1" />
          </AppButton>
        </div>
      </section>

      {/* Daily Stats Grid */}
      <section>
        <SectionHeader
          title="Daily Overview"
          action={
            <Link
              href="/nutrition"
              className="text-[10px] font-bold text-primary tap-highlight-transparent uppercase tracking-wider bg-primary/10 px-3 py-1 rounded-full"
            >
              Details
            </Link>
          }
        />
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-card border border-white rounded-3xl p-5 flex flex-col items-center justify-center text-center shadow-lg">
            <ProgressRing progress={proteinProgress} size={100} className="mb-3">
              <span className="text-3xl font-display font-bold text-card-foreground tracking-tight leading-none">
                {Math.round(MOCK_NUTRITION.consumed.protein)}
              </span>
              <span className="text-[10px] text-card-foreground/50 uppercase tracking-widest font-bold">
                Protein
              </span>
            </ProgressRing>
            <p className="text-[10px] font-bold text-card-foreground/50 uppercase tracking-wider">
              <span className="text-emerald-500 font-bold">
                {Math.round(
                  MOCK_NUTRITION.target.protein - MOCK_NUTRITION.consumed.protein
                )}
                g
              </span>{" "}
              left
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <StatCard
              title="Calories Left"
              value={
                MOCK_NUTRITION.target.calories - MOCK_NUTRITION.consumed.calories
              }
              icon={FlameIcon}
              variant="white"
            />
            <StatCard
              title="Recovery"
              value={`${MOCK_RECOVERY.score}%`}
              icon={ActivityIcon}
              variant={MOCK_RECOVERY.score > 80 ? "dark" : "white"}
              valueClassName={
                MOCK_RECOVERY.score > 80
                  ? "text-primary text-4xl font-display"
                  : "text-card-foreground text-4xl font-display"
              }
            />
          </div>
        </div>
      </section>

      {/* Quick Actions / Shortcuts */}
      <section className="mb-6">
        <div className="grid grid-cols-3 gap-3">
          <Link
            href="/scan"
            className="bg-secondary/50 border border-white/5 rounded-2xl p-4 flex flex-col items-center gap-2 tap-highlight-transparent hover:bg-secondary transition-colors text-center"
          >
            <div className="w-10 h-10 rounded-full bg-card/5 flex items-center justify-center">
              <ScanLineIcon size={18} className="text-foreground" />
            </div>
            <div>
              <h3 className="text-xs font-bold text-foreground">Body Scan</h3>
              <p className="text-[9px] text-muted-foreground uppercase tracking-wider mt-0.5">
                Due in 2 days
              </p>
            </div>
          </Link>
          <Link
            href="/prediction"
            className="bg-secondary/50 border border-white/5 rounded-2xl p-4 flex flex-col items-center gap-2 tap-highlight-transparent hover:bg-secondary transition-colors text-center"
          >
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
              <SparklesIcon size={18} className="text-primary" />
            </div>
            <div>
              <h3 className="text-xs font-bold text-foreground">Prediction</h3>
              <p className="text-[9px] text-muted-foreground uppercase tracking-wider mt-0.5">
                AI Forecast
              </p>
            </div>
          </Link>
          <Link
            href="/recovery"
            className="bg-secondary/50 border border-white/5 rounded-2xl p-4 flex flex-col items-center gap-2 tap-highlight-transparent hover:bg-secondary transition-colors text-center"
          >
            <div className="w-10 h-10 rounded-full bg-card/5 flex items-center justify-center">
              <MoonStarIcon size={18} className="text-foreground" />
            </div>
            <div>
              <h3 className="text-xs font-bold text-foreground">Sleep</h3>
              <p className="text-[9px] text-muted-foreground uppercase tracking-wider mt-0.5">
                {MOCK_RECOVERY.sleepDurationHours}h logged
              </p>
            </div>
          </Link>
        </div>
      </section>

      {/* Goal Progress Mini */}
      <section>
        <Link
          href="/progress"
          className="bg-card/50 border border-border rounded-2xl p-5 flex items-center justify-between group tap-highlight-transparent hover:bg-card transition-colors"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
              <TrendingUpIcon size={20} className="text-primary" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-foreground">Goal Progress</h3>
              <p className="text-xs text-muted-foreground font-medium">
                Down 2.5kg this month • On track
              </p>
            </div>
          </div>
          <ChevronRightIcon
            size={18}
            className="text-muted-foreground group-hover:text-foreground transition-colors"
          />
        </Link>
      </section>
    </div>
  );
}
