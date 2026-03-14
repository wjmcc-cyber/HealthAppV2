# PhysiqueAI — AI Fitness & Body Composition App

<p align="center">
  <strong>Your AI Body Coach</strong><br/>
  Body scanning • Personalized workouts • Macro tracking • Physique prediction
</p>

---

## 🚀 Tech Stack

| Layer | Technology |
|-------|-----------|
| **Framework** | [Next.js 16](https://nextjs.org/) (App Router) |
| **Language** | TypeScript |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) |
| **Icons** | [Lucide React](https://lucide.dev/) |
| **Deployment** | [Vercel](https://vercel.com/) |

## 📦 Getting Started

### Prerequisites

- **Node.js** 18+ and **npm** installed

### Install & Run

```bash
# Clone the repository
git clone https://github.com/wjmcc-cyber/HealthAppV2.git
cd HealthAppV2

# Install dependencies
npm install

# Start the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

> **Tip:** Open DevTools → toggle device toolbar (Ctrl+Shift+M) and select a mobile viewport for the best experience. The UI is designed as a mobile app in the browser.

## 📁 Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── page.tsx            # Landing / Welcome screen
│   ├── layout.tsx          # Root layout with nav wrapper
│   ├── onboarding/         # 9-step onboarding flow
│   ├── dashboard/          # Home dashboard (command center)
│   ├── workout/            # Workout screen with weekly plan
│   ├── nutrition/          # Nutrition + AI meal suggestions
│   ├── progress/           # Progress charts & stats
│   ├── scan/               # Body scan guided UI
│   ├── prediction/         # AI physique prediction
│   ├── recovery/           # Recovery & wearables
│   ├── profile/            # Profile & settings
│   ├── login/              # Login (mock)
│   ├── signup/             # Signup (mock)
│   └── actions/            # Server actions (mock auth)
├── components/
│   ├── Navigation.tsx      # Bottom tab navigation
│   └── ui/                 # Reusable UI components
│       ├── AppButton.tsx
│       ├── StatCard.tsx
│       ├── ProgressRing.tsx
│       ├── MacroBar.tsx
│       ├── WorkoutExerciseCard.tsx
│       ├── ScanStepCard.tsx
│       ├── InsightCard.tsx
│       ├── SectionHeader.tsx
│       ├── DeviceConnectionCard.tsx
│       └── EmptyState.tsx
├── constants/              # App-wide constants & config
├── data/                   # Mock data (local "backend")
├── hooks/                  # Custom React hooks
├── lib/                    # Utilities & helpers
├── types/                  # TypeScript type definitions
└── public/                 # Static assets
```

## 🖥️ Core Screens

| Screen | Route | Description |
|--------|-------|-------------|
| Landing | `/` | Welcome hero with feature cards and CTAs |
| Onboarding | `/onboarding` | 9-step guided setup flow |
| Dashboard | `/dashboard` | Today's workout, macros, recovery, shortcuts |
| Workout | `/workout` | Weekly plan tabs, exercise tracking, AI tips |
| Nutrition | `/nutrition` | Calorie ring, macros, meal log, AI suggestions, grocery list |
| Progress | `/progress` | Weight/body fat trends, strength stats, monthly comparison |
| Body Scan | `/scan` | 3-step guided scan with results & history |
| Prediction | `/prediction` | AI physique forecast with adherence slider |
| Recovery | `/recovery` | Readiness score, HRV, sleep, wearable connections |
| Profile | `/profile` | User profile, settings, unit toggle |

## ☁️ Deploy to Vercel

This repo is pre-configured for seamless Vercel deployment.

1. Sign up at [vercel.com](https://vercel.com/)
2. Click **Add New → Project**
3. Import `wjmcc-cyber/HealthAppV2` from GitHub
4. Framework preset: **Next.js** (auto-detected)
5. Click **Deploy**

No environment variables required for the UI demo — the app runs entirely on local mock data.

## 🔌 Extending to Production

This base UI is designed for easy backend integration:

### Replace Mock Data
All mock data lives in `data/mockData.ts`. Replace individual exports with API calls:

```ts
// Before (mock)
import { MOCK_TODAY_WORKOUT } from "@/data/mockData";

// After (real API)
const workout = await fetch("/api/workouts/today").then(r => r.json());
```

### Add Authentication
The auth actions in `app/actions/auth.ts` are mock redirects. Replace with:
- **Supabase Auth** — already structured for it
- **NextAuth.js** / **Clerk** — drop-in compatible

### Connect Database
TypeScript types in `types/index.ts` map 1:1 to database schemas. Recommended:
- **Supabase** (Postgres + Auth + Storage)
- **Prisma** ORM with any SQL database

### Wearable Integrations
The Recovery screen has UI slots for Apple Health, Google Fit, WHOOP, and Oura. Connect SDKs when ready.

## 📄 Environment Variables

Copy `.env.example` to `.env.local` for local development:

```bash
cp .env.example .env.local
```

Environment variables are **not required** for the UI demo. They become necessary when connecting a real backend.

## 📝 License

Private repository — all rights reserved.
