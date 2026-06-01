"use client";

import { Users, Calendar, MessageCircle, TreePine } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { communityHighlights } from "@/data/content";

const icons = {
  users: Users,
  calendar: Calendar,
  message: MessageCircle,
  tree: TreePine,
};

export function CommunityHighlights() {
  return (
    <Section variant="dark" id="community">
      <AnimatedSection>
        <SectionHeader
          eyebrow="Community"
          title="Mehr als ein Verein"
          description="Ein lebendiger Austausch — online im Forum, offline an der Ostsee."
          align="center"
          light
        />
      </AnimatedSection>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {communityHighlights.map((item, i) => {
          const Icon = icons[item.icon as keyof typeof icons];
          return (
            <AnimatedSection key={item.title} delay={i * 0.1}>
              <Card
                hover
                className="bg-white/5 border-white/10 text-white backdrop-blur-sm h-full"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-moss/20 text-moss">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="font-serif text-xl mb-2">{item.title}</h3>
                <p className="text-white/65 text-sm leading-relaxed">
                  {item.description}
                </p>
              </Card>
            </AnimatedSection>
          );
        })}
      </div>
    </Section>
  );
}
