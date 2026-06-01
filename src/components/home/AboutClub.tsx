"use client";

import Image from "next/image";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/data/content";
import { images } from "@/data/images";

export function AboutClub() {
  return (
    <Section id="ueber-uns">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <AnimatedSection>
          <SectionHeader
            eyebrow="Der Verein"
            title="Wo Bäume Geschichten erzählen"
            description={`Seit ${siteConfig.founded} verbinden wir Bonsai-Liebhaber aus Scharbeutz und der Region. Ob erster Ficus oder jahrzehntealter Yamadori — bei uns zählt Respekt vor dem Baum und voreinander.`}
          />
          <p className="text-muted leading-relaxed mb-6">
            In monatlichen Treffen, Workshops und unserem Forum teilen wir Wissen
            über Pflege, Gestaltung und die Philosophie des Bonsai. Die Ostsee
            prägt unseren Rhythmus: Wind, Licht und Jahreszeiten sind Teil jeder
            Entscheidung am lebenden Baum.
          </p>
          <Button href="/ueber-uns" variant="secondary">
            Mehr über uns
          </Button>
        </AnimatedSection>

        <AnimatedSection delay={0.15} className="relative">
          <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl shadow-forest/10">
            <Image
              src={images.about.garden}
              alt="Bonsai in japanischer Ästhetik"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 hidden md:block w-48 h-48 rounded-2xl overflow-hidden border-4 border-background shadow-xl">
            <Image
              src={images.about.detail}
              alt="Detail eines Bonsai-Asts"
              fill
              className="object-cover"
              sizes="200px"
            />
          </div>
        </AnimatedSection>
      </div>
    </Section>
  );
}
