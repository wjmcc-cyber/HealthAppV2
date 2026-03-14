export type Goal = "Lose fat" | "Build muscle" | "Recomp" | "Athletic performance";
export type ExperienceLevel = "Beginner" | "Intermediate" | "Advanced";
export type EquipmentAccess = "Full gym" | "Dumbbells only" | "Home bodyweight";

export interface UserProfile {
  id: string;
  name: string;
  avatarUrl?: string;
  age: number;
  heightCm: number;
  weightKg: number;
  goal: Goal;
  experienceLevel: ExperienceLevel;
  equipmentAccess: EquipmentAccess;
  isPremium: boolean;
}

export interface Exercise {
  id: string;
  name: string;
  muscleGroup: string;
  sets: number;
  reps: string;
  restPeriod: string;
  videoUrl?: string;
}

export interface Workout {
  id: string;
  title: string;
  durationMinutes: number;
  exercises: Exercise[];
  isCompleted?: boolean;
}

export interface MacroTarget {
  protein: number;
  carbs: number;
  fat: number;
  calories: number;
}

export interface Meal {
  id: string;
  type: "Breakfast" | "Lunch" | "Dinner" | "Snack";
  name: string;
  calories: number;
  macros: {
    protein: number;
    carbs: number;
    fat: number;
  };
}

export interface NutritionDay {
  date: string;
  target: MacroTarget;
  consumed: {
    protein: number;
    carbs: number;
    fat: number;
    calories: number;
  };
  meals: Meal[];
}

export interface ScanResult {
  id: string;
  date: string;
  bodyFatPercentage: number;
  leanMassKg: number;
  symmetryScore: number;
  postureNotes: string;
}

export interface PredictionState {
  currentWeight: number;
  currentBodyFat: number;
  predictedWeight3Mo: number;
  predictedBodyFat3Mo: number;
  predictedWeight6Mo: number;
  predictedBodyFat6Mo: number;
}

export interface RecoveryData {
  score: number;
  hrv: number;
  restingHeartRate: number;
  sleepDurationHours: number;
  steps: number;
  readinessNote: string;
}
