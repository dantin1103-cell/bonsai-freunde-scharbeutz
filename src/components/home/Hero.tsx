"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Users } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/data/content";
import { images } from "@/data/images";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-background">
      {/* Ruhiger Kopfbereich – kein Foto hinter Navigation/Text */}
      <div className="absolute inset-0 bg-gradient-to-br from-beige/70 via-background to-background dark:from-surface dark:via-background dark:to-background" />
      <div
        className="absolute top-0 right-0 w-[min(55vw,520px)] h-[min(55vw,520px)] rounded-full bg-forest/[0.04] blur-3xl -translate-y-1/4 translate-x-1/4 pointer-events-none"
        aria-hidden
      />
      <div
        className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-moss/[0.06] blur-3xl translate-y-1/3 -translate-x-1/4 pointer-events-none"
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 pb-16 md:pt-32 md:pb-24 lg:min-h-[calc(100vh-5rem)] lg:flex lg:items-center">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Text – immer dunkel/lesbar */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-center lg:text-left order-2 lg:order-1"
          >
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-surface-elevated px-4 py-1.5 text-sm text-muted shadow-sm">
              <Users className="h-4 w-4 text-forest" />
              {siteConfig.location} · Seit {siteConfig.founded}
            </p>

            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-[3.5rem] font-light text-foreground tracking-tight leading-[1.1]">
              {siteConfig.name}
            </h1>

            <p className="mx-auto lg:mx-0 mt-6 max-w-xl text-lg sm:text-xl text-muted leading-relaxed font-light">
              Eine Gemeinschaft für alle, die die stille Kunst des Bonsai lieben —
              Tradition, Handwerk und Austausch an der Ostsee.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4">
              <Button href="/ueber-uns" variant="primary" size="lg">
                Community entdecken
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button href="/forum" variant="secondary" size="lg">
                Zum Forum
              </Button>
            </div>
          </motion.div>

          {/* Bonsai-Bild separat, unterhalb der Nav-Zone */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="order-1 lg:order-2"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none aspect-[4/5] sm:aspect-[5/4] lg:aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl shadow-forest/15 ring-1 ring-border">
              <Image
                src={images.hero}
                alt="Bonsai-Baum in ruhiger, natürlicher Umgebung"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 90vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest/25 via-transparent to-transparent pointer-events-none" />
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="hidden lg:block absolute bottom-8 left-1/2 -translate-x-1/2"
          aria-hidden
        >
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-px h-10 bg-gradient-to-b from-border to-transparent"
          />
        </motion.div>
      </div>
    </section>
  );
}
