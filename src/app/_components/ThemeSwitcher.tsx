"use client";

import { useTheme } from "next-themes";
import { useCallback } from "react";

export default function ThemeSwitcher() {
  const { setTheme, theme } = useTheme();

  const handleThemeChange = useCallback((): void => {
    setTheme(theme === "light" ? "dark" : "light");
  }, [theme, setTheme]);

  return (
    <button
      onClick={handleThemeChange}
      className="bg-button-primary rounded-2xl px-6 py-4 text-white"
      type="button"
    >
      Switch theme
    </button>
  );
}
