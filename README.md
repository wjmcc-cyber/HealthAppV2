# PhysiqueAI - MVP Base UI

PhysiqueAI is a premium, mobile-first AI fitness app built with Next.js, React, Tailwind CSS, and TypeScript. This repository contains the foundational UI, component architecture, and mock data flows required to demonstrate the app's core value proposition (Body Scanning, Nutrition Tracking, AI Physics Prediction, and Wearables Integration).

## 🚀 Built With
- **Framework:** [Next.js](https://nextjs.org/) (App Router, v15+)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Language:** TypeScript
- **Icons:** [Lucide React](https://lucide.dev/)
- **UI Architecture:** Clean, reusable component architecture inspired by premium startup products.

## 📦 Getting Started Locally

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Run the Development Server**
   ```bash
   npm run dev
   ```

3. **Open the App**
   Navigate to [http://localhost:3000](http://localhost:3000) in your browser.
   *Note: For the best experience, open DevTools and view the app in responsive/mobile mode, as the UI is optimized for mobile wrappers.*

## 📁 Architecture Overview

- `/app`: Next.js App Router providing all the physical pages (`/dashboard`, `/scan`, `/workout`, etc.)
- `/components/ui`: Isolated, reusable UI components (e.g., `AppButton`, `StatCard`, `ProgressRing`).
- `/data/mockData.ts`: Centralized mock data payload acting as a temporary "backend" for the UI.
- `/types/index.ts`: Strongly typed data models representing Users, Workouts, Scans, etc.
- `/lib/utils.ts`: Small utility functions (like `cn` for conditional Tailwind classes).

## ☁️ Deploying to Vercel

This repository is pre-configured and optimized to run seamlessly on Vercel.

1. Create an account on [Vercel](https://vercel.com/).
2. Click **Add New... > Project**.
3. Import your GitHub repository (`wjmcc-cyber/HealthAppV2`).
4. Ensure the Framework Preset is set to **Next.js**.
5. Click **Deploy**. Vercel will automatically build and distribute the app globally.

## 🔗 Next Steps & Backend Integration

To transition this MVP base UI into a real application:
1. Replace `data/mockData.ts` with real API calls inside server components or using SWR/React Query.
2. Hook up an authentication provider (e.g., NextAuth, Clerk, or Supabase).
3. Connect the scanning UI (`app/scan/page.tsx`) to actual 3D rendering and computer vision tracking APIs.
4. Setup a Postgres database (e.g., Prisma + Supabase) utilizing the models outlined in `types/index.ts`.
