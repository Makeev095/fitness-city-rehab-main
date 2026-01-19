import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

// Theme toggle is intentionally kept but no longer used in UI.
// The project uses a single theme (no light mode).
const STORAGE_KEY = "fitness-city-theme";

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Use a project-specific key to avoid inheriting stale values from templates/previous versions.
    const savedTheme = localStorage.getItem(STORAGE_KEY);
    localStorage.removeItem("theme");

    // Single theme: always treat as dark; keep old values harmlessly.
    void savedTheme;
    setIsDark(true);
  }, []);

  const toggleTheme = () => {
    // no-op in single-theme mode
    setIsDark(true);
    localStorage.setItem(STORAGE_KEY, "dark");
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      className="relative overflow-hidden"
      aria-label={isDark ? "Включить светлую тему" : "Включить тёмную тему"}
    >
      <Sun 
        className={`h-5 w-5 transition-all duration-300 ${
          isDark ? "rotate-90 scale-0" : "rotate-0 scale-100"
        }`} 
      />
      <Moon 
        className={`absolute h-5 w-5 transition-all duration-300 ${
          isDark ? "rotate-0 scale-100" : "-rotate-90 scale-0"
        }`} 
      />
    </Button>
  );
}
