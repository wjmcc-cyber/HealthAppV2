import AppButton from "@/components/ui/AppButton";
import {
  SparklesIcon,
  ScanFaceIcon,
  ActivityIcon,
  BrainCircuitIcon,
  UtensilsCrossedIcon,
  TrendingUpIcon,
} from "lucide-react";

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-[calc(100vh-6rem)] relative">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[200%] h-[500px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/15 via-black/0 to-transparent pointer-events-none" />

      <div className="flex-1 flex flex-col justify-center items-center px-6 pt-12 text-center z-10">
        <div className="inline-flex items-center justify-center p-3 bg-secondary/80 backdrop-blur-md rounded-2xl mb-8 border border-white/5 shadow-2xl">
          <BrainCircuitIcon size={32} className="text-primary" />
        </div>

        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
          Physique<span className="text-primary">AI</span>
        </h1>
        <p className="text-lg text-muted-foreground font-medium mb-4 max-w-xs mx-auto">
          Your personal AI body coach. Scan, track, and predict your ultimate
          physique.
        </p>
        <p className="text-sm text-white/40 mb-12 max-w-xs">
          AI-powered body scanning, personalized workouts, macro tracking, and
          physique prediction — all in one app.
        </p>

        {/* Features Grid */}
        <div className="grid grid-cols-2 gap-3 w-full mb-12">
          <div className="bg-card/50 backdrop-blur-md border border-border rounded-2xl p-4 flex flex-col items-center gap-2 relative overflow-hidden group">
            <ScanFaceIcon className="text-primary mb-1 transform group-hover:scale-110 transition-transform" />
            <span className="text-[10px] font-bold text-white uppercase tracking-widest text-center">
              Body Scan
            </span>
            <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
          <div className="bg-card/50 backdrop-blur-md border border-border rounded-2xl p-4 flex flex-col items-center gap-2 relative overflow-hidden group">
            <ActivityIcon className="text-accent-foreground mb-1 transform group-hover:scale-110 transition-transform" />
            <span className="text-[10px] font-bold text-white uppercase tracking-widest text-center">
              Workouts
            </span>
            <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
          <div className="bg-card/50 backdrop-blur-md border border-border rounded-2xl p-4 flex flex-col items-center gap-2 relative overflow-hidden group">
            <UtensilsCrossedIcon className="text-yellow-400 mb-1 transform group-hover:scale-110 transition-transform" />
            <span className="text-[10px] font-bold text-white uppercase tracking-widest text-center">
              Nutrition
            </span>
            <div className="absolute inset-0 bg-yellow-400/5 opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
          <div className="bg-card/50 backdrop-blur-md border border-border rounded-2xl p-4 flex flex-col items-center gap-2 relative overflow-hidden group">
            <TrendingUpIcon className="text-blue-400 mb-1 transform group-hover:scale-110 transition-transform" />
            <span className="text-[10px] font-bold text-white uppercase tracking-widest text-center">
              Prediction
            </span>
            <div className="absolute inset-0 bg-blue-400/5 opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
        </div>

        <div className="w-full flex flex-col gap-4 mt-auto">
          <AppButton
            href="/signup"
            size="lg"
            fullWidth
            className="text-lg shadow-[0_0_30px_rgba(56,242,205,0.3)]"
          >
            Get Started
            <SparklesIcon size={18} className="ml-2" />
          </AppButton>
          <AppButton href="/login" variant="ghost" fullWidth>
            I already have an account
          </AppButton>
        </div>
      </div>
    </div>
  );
}
