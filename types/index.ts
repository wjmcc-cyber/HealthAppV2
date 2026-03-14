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

export interface OnboardingData {
  goal: Goal;
  age: number;
  heightCm: number;
  weightKg: number;
  experienceLevel: ExperienceLevel;
  equipmentAccess: EquipmentAccess;
  trainingDaysPerWeek: number;
  minutesPerWorkout: number;
  injuries: string[];
  dietaryPreferences: string[];
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
  day: string;
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

export interface SuggestedMeal {
  id: string;
  name: string;
  calories: number;
  protein: number;
  prepTimeMinutes: number;
  tags: string[];
}

export interface GroceryItem {
  id: string;
  name: string;
  quantity: string;
  category: string;
  checked: boolean;
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
  currentLeanMass: number;
  predictedWeight3Mo: number;
  predictedBodyFat3Mo: number;
  predictedLeanMass3Mo: number;
  predictedWeight6Mo: number;
  predictedBodyFat6Mo: number;
  predictedLeanMass6Mo: number;
}

export interface RecoveryData {
  score: number;
  hrv: number;
  restingHeartRate: number;
  sleepDurationHours: number;
  steps: number;
  readinessNote: string;
}

export interface ProgressEntry {
  date: string;
  weight: number;
  bodyFat: number;
  leanMass: number;
}

export interface WeeklyPlan {
  days: {
    day: string;
    workout: Workout | null;
    isRestDay: boolean;
  }[];
}
