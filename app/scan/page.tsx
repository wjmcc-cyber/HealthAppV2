"use client";

import { useState } from "react";
import SectionHeader from "@/components/ui/SectionHeader";
import ScanStepCard from "@/components/ui/ScanStepCard";
import AppButton from "@/components/ui/AppButton";
import { MOCK_SCAN_RESULT, MOCK_SCAN_HISTORY } from "@/data/mockData";
import {
  FocusIcon,
  InfoIcon,
  ShieldCheckIcon,
  RotateCcwIcon,
  UploadIcon,
  ClockIcon,
} from "lucide-react";

type ScanState = "IDLE" | "CAPTURING" | "ANALYZING" | "RESULTS";

export default function ScanPage() {
  const [scanState, setScanState] = useState<ScanState>("IDLE");
  const [activeStep, setActiveStep] = useState<number>(0);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);

  const steps = [
    { id: 0, title: "Front Pose", desc: "Stand straight facing the camera" },
    { id: 1, title: "Side Pose", desc: "Turn 90 degrees to your right" },
    { id: 2, title: "Back Pose", desc: "Turn facing away from camera" },
  ];

  const handleStartCapture = (stepId: number) => {
    setActiveStep(stepId);
    setScanState("CAPTURING");

    setTimeout(() => {
      setCompletedSteps((prev) => [...prev, stepId]);

      if (stepId === 2) {
        setScanState("ANALYZING");
        setTimeout(() => setScanState("RESULTS"), 2500);
      } else {
        setScanState("IDLE");
        setActiveStep(stepId + 1);
      }
    }, 1500);
  };

  const resetScan = () => {
    setScanState("IDLE");
    setActiveStep(0);
    setCompletedSteps([]);
  };

  return (
    <div className="flex flex-col min-h-full px-4 pt-6 pb-6">
      <SectionHeader
        title="Body Scan"
        subtitle="AI-powered physique analysis"
        action={
          completedSteps.length > 0 ? (
            <button
              onClick={resetScan}
              className="p-2 text-muted-foreground hover:text-foreground tap-highlight-transparent"
            >
              <RotateCcwIcon size={20} />
            </button>
          ) : undefined
        }
      />

      {scanState === "RESULTS" && (
        <div className="animate-in fade-in zoom-in-95 duration-500 flex flex-col gap-6">
          <div className="bg-primary/10 border border-primary/20 rounded-3xl p-6 text-center">
            <ShieldCheckIcon size={40} className="text-primary mx-auto mb-3" />
            <h2 className="text-2xl font-bold text-foreground mb-2">
              Analysis Complete
            </h2>
            <p className="text-sm text-primary font-medium">
              {new Date(MOCK_SCAN_RESULT.date).toLocaleDateString()}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-card border border-border rounded-2xl p-5 text-center">
              <h3 className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-2">
                Body Fat
              </h3>
              <p className="text-3xl font-extrabold text-foreground">
                {MOCK_SCAN_RESULT.bodyFatPercentage}
                <span className="text-lg text-muted-foreground">%</span>
              </p>
            </div>
            <div className="bg-card border border-border rounded-2xl p-5 text-center">
              <h3 className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-2">
                Lean Mass
              </h3>
              <p className="text-3xl font-extrabold text-foreground">
                {MOCK_SCAN_RESULT.leanMassKg}
                <span className="text-lg text-muted-foreground">kg</span>
              </p>
            </div>
            <div className="bg-card border border-border rounded-2xl p-5 text-center col-span-2">
              <h3 className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-2">
                Symmetry Score
              </h3>
              <p className="text-3xl font-extrabold text-foreground">
                {MOCK_SCAN_RESULT.symmetryScore}
                <span className="text-lg text-muted-foreground">/100</span>
              </p>
            </div>
          </div>

          <div className="bg-secondary/30 rounded-2xl p-4 border border-border flex gap-3">
            <InfoIcon className="text-accent shrink-0 mt-0.5" size={20} />
            <p className="text-sm text-foreground/90 leading-relaxed">
              <span className="font-semibold block mb-1">Posture Notes:</span>
              {MOCK_SCAN_RESULT.postureNotes}
            </p>
          </div>

          {/* Scan History */}
          {MOCK_SCAN_HISTORY.length > 1 && (
            <div>
              <div className="flex items-center gap-2 mb-3">
                <ClockIcon size={14} className="text-muted-foreground" />
                <h3 className="text-sm font-bold text-foreground">Scan History</h3>
              </div>
              <div className="flex gap-3 overflow-x-auto pb-2">
                {MOCK_SCAN_HISTORY.map((scan) => (
                  <div
                    key={scan.id}
                    className="shrink-0 bg-card/50 border border-border rounded-2xl p-3 min-w-[140px]"
                  >
                    <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-wider mb-2">
                      {new Date(scan.date).toLocaleDateString("en", {
                        month: "short",
                        day: "numeric",
                      })}
                    </p>
                    <p className="text-sm font-bold text-foreground">
                      {scan.bodyFatPercentage}% BF
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {scan.leanMassKg}kg lean
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          <AppButton href="/dashboard" fullWidth className="mt-2">
            Back to Dashboard
          </AppButton>
        </div>
      )}

      {scanState === "ANALYZING" && (
        <div className="flex-1 flex flex-col items-center justify-center text-center animate-in fade-in duration-500">
          <div className="w-24 h-24 border-4 border-secondary border-t-primary rounded-full animate-spin mb-6" />
          <h2 className="text-2xl font-bold text-foreground mb-2">
            Analyzing Physique...
          </h2>
          <p className="text-muted-foreground">
            Calculating body fat, lean mass, and skeletal symmetry.
          </p>
        </div>
      )}

      {scanState === "CAPTURING" && (
        <div className="flex-1 flex flex-col animate-in fade-in duration-300">
          <div className="flex-1 bg-secondary/20 rounded-3xl border border-border relative overflow-hidden flex items-center justify-center">
            {/* Fake camera UI */}
            <div className="absolute inset-4 border-2 border-primary/40 rounded-2xl flex items-center justify-center">
              <FocusIcon size={64} className="text-primary/40 animate-pulse" />
            </div>
            <p className="absolute bottom-6 font-bold text-foreground bg-black/50 px-4 py-2 rounded-full backdrop-blur-md">
              Hold still...
            </p>
          </div>
        </div>
      )}

      {scanState === "IDLE" && (
        <div className="flex flex-col gap-4 animate-in fade-in duration-300 mt-2">
          {steps.map((step) => (
            <ScanStepCard
              key={step.id}
              title={step.title}
              description={step.desc}
              isActive={activeStep === step.id}
              isCompleted={completedSteps.includes(step.id)}
              onStart={() => handleStartCapture(step.id)}
            />
          ))}

          {/* Upload Option */}
          <button className="mt-2 bg-card/30 border border-border rounded-2xl p-4 flex items-center justify-center gap-3 tap-highlight-transparent hover:bg-card/50 transition-colors">
            <UploadIcon size={18} className="text-muted-foreground" />
            <span className="text-sm font-semibold text-muted-foreground">
              Or upload from gallery
            </span>
          </button>

          <div className="mt-4 p-4 bg-accent/10 border border-accent/20 rounded-2xl text-accent-foreground/70 text-sm text-center font-medium">
            For best results, wear tight-fitting clothing and ensure good
            lighting.
          </div>
        </div>
      )}
    </div>
  );
}
