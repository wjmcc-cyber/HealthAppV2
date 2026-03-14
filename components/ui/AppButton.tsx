import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils"; // Will need to create this simple utility

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "danger";
  size?: "sm" | "md" | "lg" | "icon";
  href?: string;
  fullWidth?: boolean;
  isLoading?: boolean;
};

export default function AppButton({
  children,
  className,
  variant = "primary",
  size = "md",
  href,
  fullWidth = false,
  isLoading = false,
  disabled,
  ...props
}: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center font-semibold rounded-2xl transition-all duration-200 active:scale-[0.98] tap-highlight-transparent disabled:opacity-50 disabled:pointer-events-none";
  
  const variants = {
    primary: "bg-primary text-primary-foreground hover:brightness-110 shadow-[0_0_15px_rgba(0,242,96,0.3)]",
    secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
    outline: "border-2 border-primary/50 text-primary hover:bg-primary/10",
    ghost: "text-muted-foreground hover:text-white hover:bg-white/5",
    danger: "bg-red-500/10 text-red-500 border border-red-500/20 hover:bg-red-500/20",
  };

  const sizes = {
    sm: "text-xs px-4 py-2 h-9",
    md: "text-sm px-6 py-3 h-12",
    lg: "text-base px-8 py-4 h-14",
    icon: "w-12 h-12 p-0",
  };

  const classes = cn(
    baseStyles,
    variants[variant],
    sizes[size],
    fullWidth ? "w-full" : "",
    className
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button 
      className={classes} 
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? (
        <span className="w-5 h-5 border-2 border-b-transparent rounded-full animate-spin border-current" />
      ) : (
        children
      )}
    </button>
  );
}
