// App-wide constants for PhysiqueAI
// Centralized configuration for easy future modification

export const APP_NAME = "PhysiqueAI";
export const APP_VERSION = "1.0.0";

// Navigation items for the bottom nav bar
export const NAV_ITEMS = [
  { name: "Home", href: "/dashboard", icon: "HomeIcon" },
  { name: "Workout", href: "/workout", icon: "DumbbellIcon" },
  { name: "Nutrition", href: "/nutrition", icon: "AppleIcon" },
  { name: "Progress", href: "/progress", icon: "LineChartIcon" },
  { name: "Profile", href: "/profile", icon: "UserCircleIcon" },
] as const;

// Onboarding options
export const GOALS = ["Lose fat", "Build muscle", "Recomp", "Athletic performance"] as const;
export const EXPERIENCE_LEVELS = ["Beginner", "Intermediate", "Advanced"] as const;
export const EQUIPMENT_OPTIONS = ["Full gym", "Dumbbells only", "Home bodyweight"] as const;
export const TRAINING_DAYS_OPTIONS = [3, 4, 5, 6] as const;
export const WORKOUT_DURATION_OPTIONS = [30, 45, 60, 75, 90] as const;

export const INJURY_OPTIONS = [
  "None",
  "Lower back",
  "Shoulder",
  "Knee",
  "Wrist",
  "Neck",
  "Hip",
  "Ankle",
  "Elbow",
] as const;

export const DIETARY_PREFERENCES = [
  "No restrictions",
  "Vegetarian",
  "Vegan",
  "Keto",
  "Paleo",
  "Gluten-free",
  "Dairy-free",
  "Halal",
  "Kosher",
] as const;

// Feature flags for progressive feature rollout
export const FEATURES = {
  MOCK_MODE: true,
  WEARABLE_SYNC: false,
  AI_PREDICTIONS: false,
  REAL_CAMERA: false,
  SUBSCRIPTION_BILLING: false,
} as const;

// Color tokens extracted for programmatic use
export const COLORS = {
  primary: "#38f2cd",
  background: "#050505",
  card: "#ffffff",
  secondary: "#1a1a1c",
  accent: "#1e1e24",
  muted: "#8e8e93",
} as const;
