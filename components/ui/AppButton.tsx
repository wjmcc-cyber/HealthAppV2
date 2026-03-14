import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "danger" | "white";
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
  const baseStyles = "inline-flex items-center justify-center font-bold tracking-wide rounded-full transition-all duration-200 active:scale-[0.98] tap-highlight-transparent disabled:opacity-50 disabled:pointer-events-none uppercase font-sans";
  
  const variants = {
    primary: "bg-primary text-primary-foreground hover:brightness-110 shadow-[0_0_20px_rgba(56,242,205,0.4)]",
    secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
    white: "bg-card text-card-foreground hover:bg-secondary",
    outline: "border-2 border-primary/50 text-primary hover:bg-primary/10",
    ghost: "text-muted-foreground hover:text-foreground hover:bg-secondary/50",
    danger: "bg-destructive/10 text-destructive border border-destructive/20 hover:bg-destructive/20",
  };

  const sizes = {
    sm: "text-xs px-5 py-2.5 h-10",
    md: "text-sm px-6 py-3.5 h-12",
    lg: "text-base px-8 py-4 h-14",
    icon: "w-14 h-14 p-0", // slightly larger icons for the Dribbble feel
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
