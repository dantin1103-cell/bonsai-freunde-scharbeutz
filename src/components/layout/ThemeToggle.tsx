"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export function ThemeToggle({ className }: { className?: string }) {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <button
        className={cn(
          "h-10 w-10 rounded-full border border-border bg-surface",
          className
        )}
        aria-label="Designmodus wechseln"
      />
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={cn(
        "flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface text-foreground transition-all hover:border-forest hover:bg-beige/50 dark:hover:bg-surface-elevated",
        className
      )}
      aria-label={isDark ? "Hellmodus aktivieren" : "Dunkelmodus aktivieren"}
    >
      {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </button>
  );
}
