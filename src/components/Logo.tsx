"use client";

import { cn } from "@/lib/utils";

interface LogoProps {
  scrolled?: boolean;
  className?: string;
  forceWhite?: boolean;
}

export default function Logo({ scrolled = false, className, forceWhite = false }: LogoProps) {
  return (
    <div className={cn("flex items-center select-none", className)}>
      <img
        src="/images/Travique-Logo.png"
        alt="Travique Logo"
        className={cn(
          "h-10 w-auto object-contain transition-all duration-300",
          forceWhite && "brightness-0 invert"
        )}
      />
    </div>
  );
}
