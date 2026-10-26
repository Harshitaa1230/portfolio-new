"use client";

import { useEffect } from "react";
import { setTheme, syncThemeWithSystem, useTheme } from "@/lib/theme";

const buttonClass =
  "font-mono font-semibold uppercase tracking-[0.02em] text-[15px] leading-[1.2] transition-opacity duration-200 hover:opacity-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-foreground";

export default function ThemeToggle({ className = "" }: { className?: string }) {
  const theme = useTheme();
  const isDark = theme === "dark";

  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = () => syncThemeWithSystem();

    media.addEventListener("change", handleChange);
    return () => media.removeEventListener("change", handleChange);
  }, []);

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      aria-pressed={isDark}
      className={`${buttonClass} ${className}`}
    >
      [ {isDark ? "LIGHT" : "DARK"} ]
    </button>
  );
}
