"use client";

import Image from "next/image";
import { Sparkles } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Section } from "@/components/ui/Section";
import { Badge } from "@/components/ui/Badge";
import { images } from "@/data/images";
import { Button } from "@/components/ui/Button";

export function TreeOfMonth() {
  return (
    <Section variant="muted">
      <AnimatedSection>
        <div className="relative overflow-hidden rounded-3xl bg-forest text-white">
          <div className="grid lg:grid-cols-2">
            <div className="relative aspect-[4/3] lg:aspect-auto lg:min-h-[400px]">
              <Image
                src={images.treeOfMonth}
                alt="Baum des Monats – Zelkova mit Herbstfärbung"
                fill
                className="object-cover"
                sizes="50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-forest/40 to-transparent lg:hidden" />
            </div>
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <Badge className="self-start mb-4 bg-white/15 text-white border-0">
                <Sparkles className="h-3 w-3 mr-1" />
                Mai 2026
              </Badge>
              <h2 className="font-serif text-3xl md:text-4xl font-light mb-4">
                Baum des Monats
              </h2>
              <p className="text-white/80 leading-relaxed mb-2 font-medium">
                Zelkova — „Herbst an der Ostsee“
              </p>
              <p className="text-white/70 text-sm leading-relaxed mb-6">
                Petra S. zeigt 15 Jahre Entwicklung aus Yamadori: von der Sammlung
                bis zur Ausstellungsreife. Im Forum diskutieren wir Nebari,
                Totholz und die letzte Feinarbeit vor der Show.
              </p>
              <Button
                href="/forum"
                variant="secondary"
                className="self-start bg-white/15 text-white hover:bg-white/25 border-0"
              >
                Diskussion im Forum
              </Button>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </Section>
  );
}
