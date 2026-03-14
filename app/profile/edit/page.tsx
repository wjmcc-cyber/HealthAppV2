"use client";

import { useState } from "react";
import SectionHeader from "@/components/ui/SectionHeader";
import AppButton from "@/components/ui/AppButton";
import { ChevronLeftIcon } from "lucide-react";
import Link from "next/link";
import { MOCK_USER } from "@/data/mockData";

export default function EditProfilePage() {
  const [formData, setFormData] = useState({
    name: MOCK_USER.name,
    email: "alex@example.com",
    dob: "1994-05-12",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="flex flex-col min-h-screen px-4 pt-6 pb-24">
      <div className="flex items-center gap-2 mb-6 text-muted-foreground hover:text-foreground transition-colors tap-highlight-transparent">
        <Link href="/profile" className="flex items-center gap-1 tap-highlight-transparent">
          <ChevronLeftIcon size={20} />
          <span className="text-sm font-semibold">Back</span>
        </Link>
      </div>

      <SectionHeader title="Personal Information" />

      <div className="flex flex-col gap-5 mt-4">
        <div className="bg-card border border-border rounded-2xl p-5 flex flex-col gap-4">
          
          <div className="flex flex-col gap-2">
            <label className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Full Name</label>
            <input 
              type="text" 
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="bg-secondary text-foreground text-base rounded-xl p-3 outline-none focus:ring-2 focus:ring-primary/50 transition-all border border-border"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Email Address</label>
            <input 
              type="email" 
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="bg-secondary text-foreground text-base rounded-xl p-3 outline-none focus:ring-2 focus:ring-primary/50 transition-all border border-border"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Date of Birth</label>
            <input 
              type="date" 
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              className="bg-secondary text-foreground text-base rounded-xl p-3 outline-none focus:ring-2 focus:ring-primary/50 transition-all border border-border"
            />
          </div>

        </div>

        <AppButton fullWidth>Save Changes</AppButton>
      </div>
    </div>
  );
}
