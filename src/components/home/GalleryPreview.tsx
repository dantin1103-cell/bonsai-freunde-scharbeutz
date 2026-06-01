"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { galleryItems } from "@/data/content";

export function GalleryPreview() {
  const items = galleryItems.slice(0, 6);

  return (
    <Section id="galerie">
      <AnimatedSection>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <SectionHeader
            eyebrow="Galerie"
            title="Bonsai in ihrer Schönheit"
            description="Aus unserer Community — Indoor, Outdoor, Anfänger und Ausstellungsbäume."
            className="mb-0"
          />
          <Button href="/galerie" variant="secondary" className="shrink-0">
            Zur Galerie
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </AnimatedSection>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {items.map((item, i) => (
          <AnimatedSection key={item.id} delay={i * 0.08}>
            <Link href="/galerie" className="group block">
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4 }}
                className={`relative overflow-hidden rounded-2xl aspect-square ${
                  i === 0 ? "md:col-span-2 md:row-span-2 md:aspect-auto md:min-h-[320px]" : ""
                }`}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes={i === 0 ? "50vw" : "25vw"}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest/80 via-forest/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400">
                  <p className="text-white font-serif text-lg">{item.title}</p>
                  <p className="text-white/70 text-sm">{item.category}</p>
                </div>
              </motion.div>
            </Link>
          </AnimatedSection>
        ))}
      </div>
    </Section>
  );
}
