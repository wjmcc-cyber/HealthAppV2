"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export type UnitSystem = "metric" | "imperial";

// Helper functions for conversions
export const kgToLbs = (kg: number) => Math.round(kg * 2.20462 * 10) / 10;
export const lbsToKg = (lbs: number) => Math.round((lbs / 2.20462) * 10) / 10;
export const cmToInches = (cm: number) => Math.round(cm * 0.393701 * 10) / 10;
export const inchesToCm = (inches: number) => Math.round((inches / 0.393701) * 10) / 10;

interface UnitsContextType {
  system: UnitSystem;
  setSystem: (system: UnitSystem) => void;
  // Formatters that automatically use the right system
  formatWeight: (weightInKg: number) => { value: number; unit: string };
  formatHeight: (heightInCm: number) => { value: number; unit: string };
}

const UnitsContext = createContext<UnitsContextType | undefined>(undefined);

export function UnitsProvider({ children }: { children: React.ReactNode }) {
  const [system, setSystem] = useState<UnitSystem>("metric");

  // Load from local storage if available
  useEffect(() => {
    const saved = localStorage.getItem("physiqueai-units") as UnitSystem;
    if (saved && (saved === "metric" || saved === "imperial")) {
      setSystem(saved);
    }
  }, []);

  // Save to local storage when changed
  useEffect(() => {
    localStorage.setItem("physiqueai-units", system);
  }, [system]);

  const formatWeight = (weightInKg: number) => {
    if (system === "imperial") {
      return { value: kgToLbs(weightInKg), unit: "lbs" };
    }
    return { value: weightInKg, unit: "kg" };
  };

  const formatHeight = (heightInCm: number) => {
    if (system === "imperial") {
      return { value: cmToInches(heightInCm), unit: "in" };
    }
    return { value: heightInCm, unit: "cm" };
  };

  return (
    <UnitsContext.Provider value={{ system, setSystem, formatWeight, formatHeight }}>
      {children}
    </UnitsContext.Provider>
  );
}

export function useUnits() {
  const context = useContext(UnitsContext);
  if (context === undefined) {
    throw new Error("useUnits must be used within a UnitsProvider");
  }
  return context;
}
