"use client";

import Image from "next/image";
import Link from "next/link";
import { Calendar, MapPin, ArrowRight } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { upcomingEvents } from "@/data/content";

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("de-DE", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export function EventsPreview() {
  const events = upcomingEvents.slice(0, 3);

  return (
    <Section variant="muted" id="events">
      <AnimatedSection>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <SectionHeader
            eyebrow="Termine"
            title="Workshops & Treffen"
            description="Lernen Sie in entspannter Atmosphäre — mitgebrachte Bäume, erfahrene Anleitung und Zeit für Gespräche."
            className="mb-0"
          />
          <Button href="/events" variant="outline" className="shrink-0 self-start md:self-auto">
            Alle Events
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </AnimatedSection>

      <div className="grid md:grid-cols-3 gap-6">
        {events.map((event, i) => (
          <AnimatedSection key={event.id} delay={i * 0.1}>
            <Card className="p-0 overflow-hidden h-full flex flex-col">
              <div className="relative aspect-[16/10]">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                {event.spotsLeft <= 5 && (
                  <Badge className="absolute top-4 right-4 bg-forest text-white">
                    Wenige Plätze
                  </Badge>
                )}
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="font-serif text-xl mb-3">{event.title}</h3>
                <div className="space-y-2 text-sm text-muted mb-4">
                  <p className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-forest shrink-0" />
                    {formatDate(event.date)} · {event.time}
                  </p>
                  <p className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-forest shrink-0" />
                    {event.location}
                  </p>
                </div>
                <p className="text-sm text-muted flex-1 mb-4">{event.description}</p>
                <Link
                  href="/events"
                  className="text-sm font-medium text-forest hover:text-forest-light transition-colors inline-flex items-center gap-1"
                >
                  Anmelden
                  <ArrowRight className="h-3 w-3" />
                </Link>
              </div>
            </Card>
          </AnimatedSection>
        ))}
      </div>
    </Section>
  );
}
