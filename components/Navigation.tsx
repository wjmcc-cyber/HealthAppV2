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
    <nav className="absolute bottom-0 w-full bg-[#111111]/90 backdrop-blur-md border-t border-white/5 z-50">
      <div className="flex justify-around items-center h-20 px-2 pb-4">
        {items.map((item) => {
          const isActive = pathname.startsWith(item.href);
          const Icon = item.icon;
          
          return (
            <Link
              key={item.name}
              href={item.href}
              className={`flex flex-col items-center justify-center w-full h-full space-y-1 ${
                isActive ? "text-primary" : "text-muted-foreground hover:text-white"
              } transition-colors duration-200 tap-highlight-transparent`}
            >
              <Icon 
                size={22} 
                className={isActive ? "drop-shadow-[0_0_8px_rgba(0,242,96,0.5)]" : ""} 
                strokeWidth={isActive ? 2.5 : 2}
              />
              <span className="text-[10px] font-medium tracking-wide">
                {item.name}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
