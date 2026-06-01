"use client";

import { Quote } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { testimonials } from "@/data/content";

export function Testimonials() {
  return (
    <Section>
      <AnimatedSection>
        <SectionHeader
          eyebrow="Stimmen"
          title="Was Mitglieder sagen"
          align="center"
        />
      </AnimatedSection>

      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <AnimatedSection key={t.author} delay={i * 0.12}>
            <Card className="h-full relative">
              <Quote className="h-8 w-8 text-forest/20 mb-4" aria-hidden />
              <blockquote className="text-foreground leading-relaxed mb-6">
                „{t.quote}"
              </blockquote>
              <footer>
                <p className="font-medium text-foreground">{t.author}</p>
                <p className="text-sm text-muted">{t.role}</p>
              </footer>
            </Card>
          </AnimatedSection>
        ))}
      </div>
    </Section>
  );
}
