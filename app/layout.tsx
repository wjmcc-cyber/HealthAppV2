import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google"; // Adding Oswald based on Dribbble shot aesthetic
import "./globals.css";
import Navigation from "@/components/Navigation";
import { UnitsProvider } from "@/lib/units";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PhysiqueAI - Your AI Body Coach",
  description: "AI fitness app for body composition, workouts, and nutrition.",
  viewport: "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0", // Prevents zooming on mobile
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${oswald.variable} font-sans antialiased bg-black text-foreground`}>
        <UnitsProvider>
          {/* Mobile Wrapper for Desktop Viewing */}
          <div className="mx-auto flex flex-col min-h-screen max-w-md bg-background shadow-2xl relative overflow-hidden">
            <main className="flex-1 overflow-y-auto pb-24 touch-pan-y scroll-smooth">
              {children}
            </main>
            {/* Global Bottom Navigation Component */}
            <Navigation />
          </div>
        </UnitsProvider>
      </body>
    </html>
  );
}
