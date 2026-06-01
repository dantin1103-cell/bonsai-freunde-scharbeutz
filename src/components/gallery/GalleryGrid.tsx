"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { galleryItems } from "@/data/content";
import { cn } from "@/lib/utils";

const categories = [
  "Alle",
  "Indoor Bonsai",
  "Outdoor Bonsai",
  "Beginner Trees",
  "Exhibition Trees",
];

export function GalleryGrid() {
  const [filter, setFilter] = useState("Alle");
  const [lightbox, setLightbox] = useState<(typeof galleryItems)[0] | null>(
    null
  );

  const filtered =
    filter === "Alle"
      ? galleryItems
      : galleryItems.filter((g) => g.category === filter);

  return (
    <>
      <div className="flex flex-wrap gap-2 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setFilter(cat)}
            className={cn(
              "rounded-full px-4 py-2 text-sm font-medium transition-all",
              filter === cat
                ? "bg-forest text-white"
                : "bg-beige/80 text-muted hover:text-foreground dark:bg-surface-elevated"
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
        {filtered.map((item, i) => (
          <motion.button
            key={item.id}
            type="button"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            onClick={() => setLightbox(item)}
            className="group relative w-full break-inside-avoid overflow-hidden rounded-2xl focus-visible:ring-2 focus-visible:ring-accent"
          >
            <div
              className={cn(
                "relative w-full",
                i % 3 === 0 ? "aspect-[3/4]" : i % 3 === 1 ? "aspect-square" : "aspect-[4/5]"
              )}
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 text-left translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all">
                <p className="text-white font-serif text-lg">{item.title}</p>
                <p className="text-white/70 text-sm">
                  {item.category} · {item.artist}
                </p>
              </div>
            </div>
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90 p-4"
            onClick={() => setLightbox(null)}
            role="dialog"
            aria-modal
            aria-label="Bildvorschau"
          >
            <button
              type="button"
              className="absolute top-4 right-4 text-white p-2 rounded-full hover:bg-white/10"
              onClick={() => setLightbox(null)}
              aria-label="Schließen"
            >
              <X className="h-6 w-6" />
            </button>
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative max-w-4xl w-full aspect-[4/3] rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={lightbox.image}
                alt={lightbox.title}
                fill
                className="object-contain"
                sizes="90vw"
              />
            </motion.div>
            <p className="absolute bottom-8 text-white text-center font-serif text-xl">
              {lightbox.title}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
