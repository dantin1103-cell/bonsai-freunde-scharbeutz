"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface PageHeroProps {
  title: string;
  description?: string;
  eyebrow?: string;
  image?: string;
}

export function PageHero({
  title,
  description,
  eyebrow,
  image,
}: PageHeroProps) {
  return (
    <section className="relative border-b border-border bg-gradient-to-b from-beige/60 to-background dark:from-surface dark:to-background overflow-hidden">
      <div className="absolute inset-0 opacity-[0.04] dark:opacity-[0.06] pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231a3c2e' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 pb-12 md:pt-32 md:pb-16">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center lg:text-left max-w-2xl mx-auto lg:mx-0"
          >
            {eyebrow && (
              <p className="mb-3 text-sm font-medium tracking-widest uppercase text-moss">
                {eyebrow}
              </p>
            )}
            <h1 className="font-serif text-4xl md:text-5xl font-light tracking-tight text-foreground">
              {title}
            </h1>
            {description && (
              <p className="mt-4 text-lg text-muted leading-relaxed">
                {description}
              </p>
            )}
          </motion.div>

          {image && (
            <motion.div
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="relative mx-auto lg:mx-0 w-full max-w-sm lg:max-w-xs aspect-[16/10] rounded-2xl overflow-hidden shadow-lg ring-1 ring-border shrink-0"
            >
              <Image
                src={image}
                alt=""
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 90vw, 320px"
              />
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
