"use client";

import * as React from "react";

import { cn } from "@/lib/utils";
import { ScrollProgress } from "@/components/motion/parallax";

/**
 * Sticks the header to the top and condenses it once the page scrolls,
 * so the search bar stays reachable without eating the viewport.
 */
export function StickyHeaderShell({ children }: { children: React.ReactNode }) {
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 90);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      data-scrolled={scrolled}
      className={cn(
        "sticky top-0 z-50 transition-shadow duration-300",
        scrolled && "shadow-[0_10px_30px_-18px_rgba(0,0,0,0.8)]"
      )}
    >
      <ScrollProgress />
      <div
        className={cn(
          "transition-[max-height,opacity] duration-300",
          scrolled ? "max-h-0 overflow-hidden opacity-0" : "max-h-24 opacity-100"
        )}
      >
        {React.Children.toArray(children)[0]}
      </div>
      {React.Children.toArray(children).slice(1)}
    </header>
  );
}
