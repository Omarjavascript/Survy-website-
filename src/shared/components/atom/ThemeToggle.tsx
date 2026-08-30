"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react"; // يمكنك استبدالها بأيقوناتك الخاصة

interface ThemeToggle {
  className?: string;
}

export default function ThemeToggle({ className = "" }: ThemeToggle) {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div
        className={`w-16 h-8 rounded-full bg-slate-800 opacity-50 ${className}`}
      />
    );
  }

  const isDark = resolvedTheme === "dark";

  const toggleTheme = () => {
    setTheme(isDark ? "light" : "dark");
  };

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isDark}
      onClick={toggleTheme}
      className={`relative inline-flex h-8 w-16 items-center rounded-full p-1 transition-colors duration-300 focus:outline-none bg-[#1e2330] hover:bg-[#252b3b] ${className}`}
    >
      {/* الدائرة البيضاء المتحركة مع الأيقونة */}
      <span
        className={`flex h-6 w-6 items-center justify-center rounded-full bg-[#f1f5f9] shadow-md transform transition-transform duration-300 ease-in-out ${
          isDark ? "translate-x-8" : "translate-x-0"
        }`}
      >
        {isDark ? (
          <Moon className="h-3.5 w-3.5 text-black stroke-[2.2]" />
        ) : (
          <Sun className="h-3.5 w-3.5 text-amber-500 stroke-[2.2]" />
        )}
      </span>
    </button>
  );
}
