"use client";

import { Moon, Sun } from "@/components/icons";

/**
 * Theme toggle.
 *
 * Which icon shows is decided in CSS (`dark:` variants) instead of React
 * state, so the button is already correct on first paint — the inline theme
 * script in layout.js sets the class before hydration, and there is no
 * server/client mismatch to warn about.
 */
export default function ThemeToggle() {
  function toggleTheme() {
    const root = document.documentElement;
    const next = root.classList.contains("dark") ? "light" : "dark";
    root.classList.toggle("dark", next === "dark");
    try {
      localStorage.setItem("theme", next);
    } catch (error) {
      /* Storage unavailable: the choice simply will not persist. */
    }
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      title="Toggle light and dark theme"
      aria-label="Toggle light and dark theme"
      className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-line text-muted transition-colors duration-200 hover:border-line-strong hover:text-accent"
    >
      <Sun size={17} className="hidden dark:block" />
      <Moon size={17} className="block dark:hidden" />
    </button>
  );
}
