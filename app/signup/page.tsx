"use client";

import { useActionState } from "react";
import { signup } from "@/app/actions/auth";
import AppButton from "@/components/ui/AppButton";
import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";

export default function SignupPage() {
  const [state, action, isPending] = useActionState(signup, undefined);

  return (
    <div className="flex flex-col min-h-screen px-6 pt-12 pb-6 justify-center bg-black">
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-[100px] pointer-events-none -mr-20 -mt-20" />
      
      <div className="relative z-10 w-full max-w-sm mx-auto">
        <div className="mb-10 text-center">
          <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center mx-auto mb-6 shadow-[0_0_30px_rgba(255,255,255,0.2)]">
            <span className="text-black font-display font-bold text-3xl">P</span>
          </div>
          <h1 className="text-4xl font-display uppercase font-bold text-white tracking-tight mb-2">Create Account</h1>
          <p className="text-sm text-white/50 font-semibold tracking-wide">Join PhysiqueAI and transform your body.</p>
        </div>

        <form action={action} className="flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <label className="text-[10px] font-bold text-white/50 uppercase tracking-widest ml-1">Email</label>
            <input 
              name="email"
              type="email" 
              required
              placeholder="you@example.com" 
              className="bg-white/5 border border-white/10 rounded-2xl p-4 text-white font-semibold focus:border-white/50 focus:bg-white/10 focus:outline-none transition-all placeholder:text-white/20" 
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-[10px] font-bold text-white/50 uppercase tracking-widest ml-1">Password</label>
            <input 
              name="password"
              type="password" 
              required
              minLength={6}
              placeholder="••••••••" 
              className="bg-white/5 border border-white/10 rounded-2xl p-4 text-white font-semibold focus:border-white/50 focus:bg-white/10 focus:outline-none transition-all placeholder:text-white/20" 
            />
            <p className="text-[10px] text-white/30 ml-1 mt-1 font-semibold">Must be at least 6 characters.</p>
          </div>

          {state?.error && (
            <div className="bg-red-500/10 border border-red-500/20 text-red-400 p-3 rounded-xl text-xs font-bold text-center">
              {state.error}
            </div>
          )}

          <AppButton type="submit" variant="white" size="lg" fullWidth className="mt-4 shadow-[0_0_20px_rgba(255,255,255,0.2)]" disabled={isPending}>
            {isPending ? "Creating Account..." : "Create Account"}
            {!isPending && <ArrowRightIcon size={18} className="ml-2" />}
          </AppButton>
        </form>

        <div className="mt-8 text-center">
          <p className="text-xs font-semibold text-white/50 tracking-wide">
            Already have an account? <Link href="/login" className="text-white hover:underline transition-colors">Sign in</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
