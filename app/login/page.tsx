"use client";

import { useActionState } from "react";
import { login } from "@/app/actions/auth";
import AppButton from "@/components/ui/AppButton";
import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";

export default function LoginPage() {
  const [state, action, isPending] = useActionState(login, undefined);

  return (
    <div className="flex flex-col min-h-screen px-6 pt-12 pb-6 justify-center bg-black">
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-[100px] pointer-events-none -mr-20 -mt-20" />
      
      <div className="relative z-10 w-full max-w-sm mx-auto">
        <div className="mb-10 text-center">
          <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center mx-auto mb-6 shadow-[0_0_30px_rgba(56,242,205,0.4)]">
            <span className="text-black font-display font-bold text-3xl">P</span>
          </div>
          <h1 className="text-4xl font-display uppercase font-bold text-white tracking-tight mb-2">Welcome Back</h1>
          <p className="text-sm text-white/50 font-semibold tracking-wide">Enter your details to sign in to PhysiqueAI.</p>
        </div>

        <form action={action} className="flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <label className="text-[10px] font-bold text-white/50 uppercase tracking-widest ml-1">Email</label>
            <input 
              name="email"
              type="email" 
              required
              placeholder="you@example.com" 
              className="bg-white/5 border border-white/10 rounded-2xl p-4 text-white font-semibold focus:border-primary focus:bg-white/10 focus:outline-none transition-all placeholder:text-white/20" 
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-[10px] font-bold text-white/50 uppercase tracking-widest ml-1">Password</label>
            <input 
              name="password"
              type="password" 
              required
              placeholder="••••••••" 
              className="bg-white/5 border border-white/10 rounded-2xl p-4 text-white font-semibold focus:border-primary focus:bg-white/10 focus:outline-none transition-all placeholder:text-white/20" 
            />
          </div>

          {state?.error && (
            <div className="bg-red-500/10 border border-red-500/20 text-red-400 p-3 rounded-xl text-xs font-bold text-center">
              {state.error}
            </div>
          )}

          <AppButton type="submit" variant="primary" size="lg" fullWidth className="mt-4 shadow-[0_0_20px_rgba(56,242,205,0.3)]" disabled={isPending}>
            {isPending ? "Signing in..." : "Sign In"}
            {!isPending && <ArrowRightIcon size={18} className="ml-2" />}
          </AppButton>
        </form>

        <div className="mt-8 text-center">
          <p className="text-xs font-semibold text-white/50 tracking-wide">
            Don&apos;t have an account? <Link href="/signup" className="text-primary hover:underline">Sign up</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
