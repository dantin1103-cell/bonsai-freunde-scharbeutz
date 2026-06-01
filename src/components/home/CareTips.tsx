"use client";

import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Section, SectionHeader } from "@/components/ui/Section";
import { careTips } from "@/data/content";

export function CareTips() {
  return (
    <Section variant="muted" id="pflege">
      <AnimatedSection>
        <SectionHeader
          eyebrow="Pflege"
          title="Jahreszeiten-Rhythmus"
          description="Kurze Impulse für Ihre Bäume — detaillierte Beratung im Forum und bei Treffen."
          align="center"
        />
      </AnimatedSection>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
        {careTips.map((item, i) => (
          <AnimatedSection key={item.season} delay={i * 0.08}>
            <div className="rounded-2xl border border-border bg-surface-elevated p-6 text-center hover:border-forest/30 transition-colors">
              <p className="text-sm font-medium tracking-widest uppercase text-moss mb-2">
                {item.season}
              </p>
              <p className="text-sm text-muted leading-relaxed">{item.tip}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </Section>
  );
}
