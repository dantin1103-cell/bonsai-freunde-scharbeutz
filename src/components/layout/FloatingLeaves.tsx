"use client";

import { motion } from "framer-motion";

const leaves = Array.from({ length: 8 }, (_, i) => ({
  id: i,
  left: `${10 + i * 11}%`,
  delay: i * 0.8,
  duration: 12 + i * 2,
  size: 8 + (i % 3) * 4,
  rotate: -30 + i * 15,
}));

export function FloatingLeaves() {
  return (
    <div
      className="pointer-events-none fixed inset-0 overflow-hidden z-0"
      aria-hidden
    >
      {leaves.map((leaf) => (
        <motion.div
          key={leaf.id}
          className="absolute text-forest/10 dark:text-moss/15"
          style={{ left: leaf.left, top: "-5%" }}
          animate={{
            y: ["0vh", "110vh"],
            x: [0, 30, -20, 10, 0],
            rotate: [leaf.rotate, leaf.rotate + 180],
            opacity: [0, 0.6, 0.4, 0],
          }}
          transition={{
            duration: leaf.duration,
            delay: leaf.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <svg
            width={leaf.size}
            height={leaf.size}
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 2C8 8 4 12 4 18c0 2 2 4 4 4 2-4 4-8 8-12 2-4 4-6 4-8z" />
          </svg>
        </motion.div>
      ))}
    </div>
  );
}
