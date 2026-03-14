import { UserProfile, Workout, NutritionDay, ScanResult, PredictionState, RecoveryData } from "@/types";

export const MOCK_USER: UserProfile = {
  id: "user-1",
  name: "Alex Mercer",
  age: 28,
  heightCm: 180,
  weightKg: 82.5,
  goal: "Recomp",
  experienceLevel: "Intermediate",
  equipmentAccess: "Full gym",
  isPremium: true,
};

export const MOCK_TODAY_WORKOUT: Workout = {
  id: "w-push-day-1",
  title: "Hypertrophy Push Day",
  durationMinutes: 65,
  isCompleted: false,
  exercises: [
    {
      id: "ex-1",
      name: "Incline Dumbbell Press",
      muscleGroup: "Chest",
      sets: 4,
      reps: "8-10",
      restPeriod: "90s",
    },
    {
      id: "ex-2",
      name: "Seated Machine Shoulder Press",
      muscleGroup: "Shoulders",
      sets: 3,
      reps: "10-12",
      restPeriod: "60s",
    },
    {
      id: "ex-3",
      name: "Pec Deck Flyes",
      muscleGroup: "Chest",
      sets: 3,
      reps: "12-15",
      restPeriod: "60s",
    },
    {
      id: "ex-4",
      name: "Overhead Triceps Extension",
      muscleGroup: "Triceps",
      sets: 3,
      reps: "10-12",
      restPeriod: "60s",
    },
  ],
};

export const MOCK_NUTRITION: NutritionDay = {
  date: new Date().toISOString(),
  target: { calories: 2500, protein: 180, carbs: 250, fat: 85 },
  consumed: { calories: 1850, protein: 145, carbs: 160, fat: 65 },
  meals: [
    {
      id: "m-1",
      type: "Breakfast",
      name: "Protien Oatmeal & Eggs",
      calories: 550,
      macros: { protein: 40, carbs: 60, fat: 15 },
    },
    {
      id: "m-2",
      type: "Lunch",
      name: "Chicken Teriyaki Bowl",
      calories: 800,
      macros: { protein: 55, carbs: 90, fat: 20 },
    },
    {
      id: "m-3",
      type: "Snack",
      name: "Greek Yogurt & Berries",
      calories: 250,
      macros: { protein: 25, carbs: 25, fat: 5 },
    },
  ],
};

export const MOCK_SCAN_RESULT: ScanResult = {
  id: "scan-1",
  date: new Date().toISOString(),
  bodyFatPercentage: 16.5,
  leanMassKg: 68.9,
  symmetryScore: 92,
  postureNotes: "Slight forward shoulder roll detected. Back tightness suggested.",
};

export const MOCK_PREDICTION: PredictionState = {
  currentWeight: 82.5,
  currentBodyFat: 16.5,
  predictedWeight3Mo: 81.0,
  predictedBodyFat3Mo: 14.5,
  predictedWeight6Mo: 79.5,
  predictedBodyFat6Mo: 12.0,
};

export const MOCK_RECOVERY: RecoveryData = {
  score: 84,
  hrv: 62,
  restingHeartRate: 54,
  sleepDurationHours: 7.5,
  steps: 8432,
  readinessNote: "Recovery is optimal. Great day to push intensity on compound lifts.",
};

export const MOCK_DASHBOARD_INSIGHT = "You've hit your protein target 6 days in a row. Your lean mass gain is currently trending 12% above projected baseline.";
