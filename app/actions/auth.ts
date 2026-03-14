"use server";

import { redirect } from "next/navigation";

// Mock auth actions for UI demo mode
// Replace these with real Supabase/NextAuth calls when connecting a backend

export async function login(_state: any, formData: FormData) {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  // Simulate validation
  if (!email || !password) {
    return { error: "Please fill in all fields." };
  }

  // Mock: always succeed
  redirect("/dashboard");
}

export async function signup(_state: any, formData: FormData) {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  if (!email || !password) {
    return { error: "Please fill in all fields." };
  }

  if (password.length < 6) {
    return { error: "Password must be at least 6 characters." };
  }

  // Mock: always succeed → onboarding
  redirect("/onboarding");
}

export async function signOut() {
  redirect("/");
}
