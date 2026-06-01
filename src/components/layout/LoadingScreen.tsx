"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export function LoadingScreen() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1600);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background"
          role="status"
          aria-label="Seite wird geladen"
        >
          <motion.svg
            viewBox="0 0 48 48"
            className="h-16 w-16 text-forest"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <motion.path
              d="M24 42V28M24 28C24 28 18 22 14 18C10 14 8 8 12 6C16 4 20 10 24 16C28 10 32 4 36 6C40 8 38 14 34 18C30 22 24 28 24 28Z"
              stroke="currentColor"
              strokeWidth="1.5"
              fill="currentColor"
              fillOpacity="0.2"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
            />
          </motion.svg>
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-6 font-serif text-xl text-foreground"
          >
            Bonsai Freunde Scharbeutz
          </motion.p>
          <motion.div
            className="mt-4 h-0.5 w-24 overflow-hidden rounded-full bg-border"
          >
            <motion.div
              className="h-full bg-forest"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.4, ease: "easeInOut" }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
