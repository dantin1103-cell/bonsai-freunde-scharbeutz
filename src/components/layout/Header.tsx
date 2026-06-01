"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, LogIn } from "lucide-react";
import { Logo } from "./Logo";
import { ThemeToggle } from "./ThemeToggle";
import { Button } from "@/components/ui/Button";
import { navLinks } from "@/data/content";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled || isHome
          ? "bg-surface/95 dark:bg-surface/98 backdrop-blur-xl border-b border-border shadow-sm py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Logo />

        <nav
          className="hidden lg:flex items-center gap-1"
          aria-label="Hauptnavigation"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "relative px-4 py-2 text-sm font-medium transition-colors rounded-full",
                pathname === link.href
                  ? "text-forest"
                  : "text-muted hover:text-foreground"
              )}
            >
              {link.label}
              {pathname === link.href && (
                <motion.span
                  layoutId="nav-pill"
                  className="absolute inset-0 rounded-full bg-forest/10 -z-10"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <ThemeToggle />
          <Button
            href="/forum"
            variant="primary"
            size="sm"
            className="hidden sm:inline-flex"
          >
            <LogIn className="h-4 w-4" />
            Anmelden
          </Button>
          <button
            className={cn(
              "lg:hidden flex h-10 w-10 items-center justify-center rounded-full border border-border",
              (scrolled || isHome) && "bg-surface-elevated"
            )}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-expanded={mobileOpen}
            aria-label="Menü öffnen"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t border-border bg-surface/98 backdrop-blur-xl overflow-hidden"
          >
            <nav className="flex flex-col p-4 gap-1" aria-label="Mobile Navigation">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "rounded-xl px-4 py-3 text-base font-medium",
                    pathname === link.href
                      ? "bg-forest/10 text-forest"
                      : "text-foreground hover:bg-beige/50"
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <Button href="/forum" variant="primary" className="mt-2 w-full">
                Community beitreten
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
