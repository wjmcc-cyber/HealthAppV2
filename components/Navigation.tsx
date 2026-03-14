"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  HomeIcon, 
  DumbbellIcon, 
  AppleIcon, 
  LineChartIcon, 
  UserCircleIcon 
} from "lucide-react"; // Will need to install lucide-react

export default function Navigation() {
  const pathname = usePathname();

  // Don't show navigation on landing or onboarding screens
  if (pathname === "/" || pathname.startsWith("/onboarding")) {
    return null;
  }

  const items = [
    { name: "Home", href: "/dashboard", icon: HomeIcon },
    { name: "Workout", href: "/workout", icon: DumbbellIcon },
    { name: "Nutrition", href: "/nutrition", icon: AppleIcon },
    { name: "Progress", href: "/progress", icon: LineChartIcon },
    { name: "Profile", href: "/profile", icon: UserCircleIcon },
  ];

  return (
    <div className="fixed bottom-6 left-0 right-0 flex justify-center z-50 pointer-events-none px-4">
      <nav className="bg-[#121214]/95 backdrop-blur-xl border border-white/10 rounded-full px-6 py-4 shadow-2xl pointer-events-auto flex justify-between items-center w-full max-w-[360px]">
        {items.map((item) => {
          const isActive = pathname.startsWith(item.href);
          const Icon = item.icon;
          
          return (
            <Link
              key={item.name}
              href={item.href}
              className={`flex flex-col items-center justify-center space-y-1 relative tap-highlight-transparent ${
                isActive ? "text-primary" : "text-muted-foreground hover:text-white"
              } transition-colors duration-200`}
            >
              {isActive && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-8 h-8 bg-primary/20 rounded-full blur-md pointer-events-none" />
              )}
              <Icon 
                size={22} 
                className={isActive ? "drop-shadow-[0_0_8px_rgba(56,242,205,0.6)] relative z-10" : "relative z-10"} 
                strokeWidth={isActive ? 2.5 : 2}
              />
              {/* Optional: Remove text for a cleaner look or keep it very small */}
              {/* <span className="text-[9px] font-bold tracking-wider uppercase">
                {item.name}
              </span> */}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
