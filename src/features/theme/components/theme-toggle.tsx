"use client";

import { cn } from "@/shared/lib/utils";
import { Moon, Sun } from "lucide-react";
import { useCallback, useEffect, useState } from "react";

interface ThemeToggleProps {
  className?: string;
}

export function ThemeToggle({ className }: ThemeToggleProps) {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Initialize theme on mount
  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;
    const theme = savedTheme || (prefersDark ? "dark" : "light");
    setIsDark(theme === "dark");

    // Apply theme to body
    document.body.classList.remove("light", "dark");
    document.body.classList.add(theme);
  }, []);

  // Handle theme change
  const toggleTheme = useCallback(() => {
    const newTheme = isDark ? "light" : "dark";
    setIsDark(!isDark);

    // Update DOM
    document.body.classList.remove("light", "dark");
    document.body.classList.add(newTheme);

    // Save preference
    localStorage.setItem("theme", newTheme);
  }, [isDark]);

  // Don't render anything until mounted to prevent hydration mismatch
  if (!mounted) return null;

  return (
    <div
      className={cn(
        "flex h-8 w-16 cursor-pointer rounded-full p-1 transition-all duration-300",
        "border border-[var(--card-border-color)]",
        className,
      )}
      onClick={toggleTheme}
      role="button"
      tabIndex={0}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
    >
      <div className="flex w-full items-center justify-between">
        <div
          className={cn(
            "flex h-6 w-6 items-center justify-center rounded-full transition-transform duration-300",
            isDark
              ? "translate-x-0 transform bg-[var(--border)]"
              : "translate-x-8 transform bg-[var(--border)]",
          )}
        >
          {isDark ? (
            <Moon
              className="h-4 w-4 text-[var(--headline)]"
              strokeWidth={1.5}
            />
          ) : (
            <Sun
              className="h-4 w-4 text-[var(--paragraph)]"
              strokeWidth={1.5}
            />
          )}
        </div>
        <div
          className={cn(
            "flex h-6 w-6 items-center justify-center rounded-full transition-transform duration-300",
            isDark ? "bg-transparent" : "-translate-x-8 transform",
          )}
        >
          {isDark ? (
            <Sun
              className="h-4 w-4 text-[var(--paragraph)]"
              strokeWidth={1.5}
            />
          ) : (
            <Moon
              className="h-4 w-4 text-[var(--headline)]"
              strokeWidth={1.5}
            />
          )}
        </div>
      </div>
    </div>
  );
}
