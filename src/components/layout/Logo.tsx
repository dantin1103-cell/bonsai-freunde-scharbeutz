"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  showText?: boolean;
}

export function Logo({ className, showText = true }: LogoProps) {
  return (
    <Link
      href="/"
      className={cn("group flex items-center gap-3", className)}
      aria-label="Bonsai Freunde Scharbeutz – Startseite"
    >
      <motion.div
        className="relative h-10 w-10"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 400, damping: 20 }}
      >
        <svg
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-full w-full"
          aria-hidden
        >
          <motion.path
            d="M24 42V28"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            className="text-wood"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.2, delay: 0.2 }}
          />
          <motion.path
            d="M24 28C24 28 18 22 14 18C10 14 8 8 12 6C16 4 20 10 24 16C28 10 32 4 36 6C40 8 38 14 34 18C30 22 24 28 24 28Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
            fill="currentColor"
            fillOpacity="0.15"
            className="text-forest group-hover:text-forest-light transition-colors"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />
          <motion.circle
            cx="24"
            cy="8"
            r="2"
            className="fill-moss"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
          />
        </svg>
      </motion.div>
      {showText && (
        <div className="hidden sm:block">
          <span className="font-serif text-lg font-medium leading-tight text-foreground">
            Bonsai Freunde
          </span>
          <span className="block text-xs tracking-wider text-muted uppercase">
            Scharbeutz
          </span>
        </div>
      )}
    </Link>
  );
}
