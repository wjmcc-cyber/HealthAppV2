import {
  UserProfile,
  Workout,
  NutritionDay,
  ScanResult,
  PredictionState,
  RecoveryData,
  SuggestedMeal,
  GroceryItem,
  ProgressEntry,
  WeeklyPlan,
} from "@/types";

// ───────── User ─────────

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

// ───────── Workouts ─────────

export const MOCK_TODAY_WORKOUT: Workout = {
  id: "w-push-day-1",
  title: "Hypertrophy Push Day",
  day: "Monday",
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

export const MOCK_WEEKLY_PLAN: WeeklyPlan = {
  days: [
    { day: "Mon", workout: MOCK_TODAY_WORKOUT, isRestDay: false },
    {
      day: "Tue",
      workout: {
        id: "w-pull-1",
        title: "Pull Day",
        day: "Tuesday",
        durationMinutes: 60,
        exercises: [
          { id: "p-1", name: "Barbell Row", muscleGroup: "Back", sets: 4, reps: "6-8", restPeriod: "90s" },
          { id: "p-2", name: "Lat Pulldown", muscleGroup: "Back", sets: 3, reps: "10-12", restPeriod: "60s" },
          { id: "p-3", name: "Face Pulls", muscleGroup: "Rear Delts", sets: 3, reps: "15-20", restPeriod: "45s" },
          { id: "p-4", name: "Barbell Curl", muscleGroup: "Biceps", sets: 3, reps: "10-12", restPeriod: "60s" },
        ],
        isCompleted: false,
      },
      isRestDay: false,
    },
    { day: "Wed", workout: null, isRestDay: true },
    {
      day: "Thu",
      workout: {
        id: "w-legs-1",
        title: "Leg Day",
        day: "Thursday",
        durationMinutes: 70,
        exercises: [
          { id: "l-1", name: "Barbell Squat", muscleGroup: "Quads", sets: 4, reps: "6-8", restPeriod: "120s" },
          { id: "l-2", name: "Romanian Deadlift", muscleGroup: "Hamstrings", sets: 3, reps: "8-10", restPeriod: "90s" },
          { id: "l-3", name: "Leg Press", muscleGroup: "Quads", sets: 3, reps: "10-12", restPeriod: "60s" },
          { id: "l-4", name: "Standing Calf Raise", muscleGroup: "Calves", sets: 4, reps: "12-15", restPeriod: "45s" },
        ],
        isCompleted: false,
      },
      isRestDay: false,
    },
    {
      day: "Fri",
      workout: {
        id: "w-upper-1",
        title: "Upper Body",
        day: "Friday",
        durationMinutes: 55,
        exercises: [
          { id: "u-1", name: "Flat Bench Press", muscleGroup: "Chest", sets: 4, reps: "8-10", restPeriod: "90s" },
          { id: "u-2", name: "Weighted Pull-ups", muscleGroup: "Back", sets: 3, reps: "6-8", restPeriod: "90s" },
          { id: "u-3", name: "Lateral Raises", muscleGroup: "Shoulders", sets: 3, reps: "12-15", restPeriod: "45s" },
          { id: "u-4", name: "Cable Tricep Pushdown", muscleGroup: "Triceps", sets: 3, reps: "12-15", restPeriod: "45s" },
        ],
        isCompleted: false,
      },
      isRestDay: false,
    },
    { day: "Sat", workout: null, isRestDay: true },
    { day: "Sun", workout: null, isRestDay: true },
  ],
};

// ───────── Nutrition ─────────

export const MOCK_NUTRITION: NutritionDay = {
  date: new Date().toISOString(),
  target: { calories: 2500, protein: 180, carbs: 250, fat: 85 },
  consumed: { calories: 1850, protein: 145, carbs: 160, fat: 65 },
  meals: [
    {
      id: "m-1",
      type: "Breakfast",
      name: "Protein Oatmeal & Eggs",
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
    {
      id: "m-4",
      type: "Dinner",
      name: "Salmon with Sweet Potato",
      calories: 650,
      macros: { protein: 45, carbs: 55, fat: 22 },
    },
  ],
};

export const MOCK_SUGGESTED_MEALS: SuggestedMeal[] = [
  {
    id: "sm-1",
    name: "Grilled Chicken & Quinoa Bowl",
    calories: 520,
    protein: 42,
    prepTimeMinutes: 20,
    tags: ["High Protein", "Meal Prep"],
  },
  {
    id: "sm-2",
    name: "Turkey Meatball Zucchini Pasta",
    calories: 380,
    protein: 35,
    prepTimeMinutes: 25,
    tags: ["Low Carb", "Quick"],
  },
  {
    id: "sm-3",
    name: "Protein Acai Bowl",
    calories: 350,
    protein: 28,
    prepTimeMinutes: 5,
    tags: ["Breakfast", "Quick"],
  },
  {
    id: "sm-4",
    name: "Tuna Poke Bowl",
    calories: 480,
    protein: 38,
    prepTimeMinutes: 15,
    tags: ["Omega-3", "Fresh"],
  },
];

export const MOCK_GROCERY_LIST: GroceryItem[] = [
  { id: "g-1", name: "Chicken Breast", quantity: "1.5 kg", category: "Protein", checked: false },
  { id: "g-2", name: "Salmon Fillets", quantity: "4 pcs", category: "Protein", checked: false },
  { id: "g-3", name: "Greek Yogurt", quantity: "1 kg", category: "Dairy", checked: true },
  { id: "g-4", name: "Sweet Potatoes", quantity: "6 pcs", category: "Carbs", checked: false },
  { id: "g-5", name: "Quinoa", quantity: "500g", category: "Carbs", checked: true },
  { id: "g-6", name: "Broccoli", quantity: "2 heads", category: "Vegetables", checked: false },
  { id: "g-7", name: "Spinach", quantity: "200g", category: "Vegetables", checked: false },
  { id: "g-8", name: "Eggs (dozen)", quantity: "2 packs", category: "Protein", checked: true },
  { id: "g-9", name: "Oats", quantity: "1 kg", category: "Carbs", checked: true },
  { id: "g-10", name: "Mixed Berries", quantity: "500g", category: "Fruit", checked: false },
];

// ───────── Body Scan ─────────

export const MOCK_SCAN_RESULT: ScanResult = {
  id: "scan-1",
  date: new Date().toISOString(),
  bodyFatPercentage: 16.5,
  leanMassKg: 68.9,
  symmetryScore: 92,
  postureNotes:
    "Slight forward shoulder roll detected. Back tightness suggested.",
};

export const MOCK_SCAN_HISTORY: ScanResult[] = [
  {
    id: "scan-0",
    date: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString(),
    bodyFatPercentage: 18.2,
    leanMassKg: 67.1,
    symmetryScore: 89,
    postureNotes: "Forward head posture noted. Stretch recommendation provided.",
  },
  {
    id: "scan-1",
    date: new Date().toISOString(),
    bodyFatPercentage: 16.5,
    leanMassKg: 68.9,
    symmetryScore: 92,
    postureNotes: "Slight forward shoulder roll detected. Back tightness suggested.",
  },
];

// ───────── Predictions ─────────

export const MOCK_PREDICTION: PredictionState = {
  currentWeight: 82.5,
  currentBodyFat: 16.5,
  currentLeanMass: 68.9,
  predictedWeight3Mo: 81.0,
  predictedBodyFat3Mo: 14.5,
  predictedLeanMass3Mo: 69.3,
  predictedWeight6Mo: 79.5,
  predictedBodyFat6Mo: 12.0,
  predictedLeanMass6Mo: 69.9,
};

// ───────── Recovery ─────────

export const MOCK_RECOVERY: RecoveryData = {
  score: 84,
  hrv: 62,
  restingHeartRate: 54,
  sleepDurationHours: 7.5,
  steps: 8432,
  readinessNote:
    "Recovery is optimal. Great day to push intensity on compound lifts.",
};

// ───────── Progress ─────────

export const MOCK_PROGRESS_HISTORY: ProgressEntry[] = [
  { date: "2025-10-01", weight: 85.0, bodyFat: 19.0, leanMass: 68.9 },
  { date: "2025-11-01", weight: 84.2, bodyFat: 18.2, leanMass: 68.9 },
  { date: "2025-12-01", weight: 83.5, bodyFat: 17.5, leanMass: 68.9 },
  { date: "2026-01-01", weight: 83.1, bodyFat: 17.0, leanMass: 68.9 },
  { date: "2026-02-01", weight: 82.8, bodyFat: 16.8, leanMass: 68.9 },
  { date: "2026-03-01", weight: 82.5, bodyFat: 16.5, leanMass: 68.9 },
];

// ───────── Dashboard ─────────

export const MOCK_DASHBOARD_INSIGHT =
  "You've hit your protein target 6 days in a row. Your lean mass gain is currently trending 12% above projected baseline.";
