import type { Metadata } from "next";
import Image from "next/image";
import { Calendar, MapPin, Users } from "lucide-react";
import { PageHero } from "@/components/shared/PageHero";
import { Section, SectionHeader } from "@/components/ui/Section";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { upcomingEvents, siteConfig } from "@/data/content";
import { images } from "@/data/images";

export const metadata: Metadata = {
  title: "Events",
  description: `Workshops und Treffen von ${siteConfig.name} in Scharbeutz und Umgebung.`,
};

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("de-DE", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function EventsPage() {
  return (
    <>
      <PageHero
        eyebrow="Termine"
        title="Workshops & Treffen"
        description="Gemeinsam lernen, Bäume zeigen und die Saison am lebenden Material erleben."
        image={images.events.workshopGenerated}
      />

      <Section>
        <AnimatedSection>
          <SectionHeader
            eyebrow="Kalender"
            title="Kommende Veranstaltungen"
            description='Anmeldung per E-Mail oder im Forum unter „Workshops & Treffen". Plätze sind begrenzt.'
          />
        </AnimatedSection>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            {upcomingEvents.map((event, i) => (
              <AnimatedSection key={event.id} delay={i * 0.1}>
                <Card className="p-0 overflow-hidden">
                  <div className="grid md:grid-cols-5">
                    <div className="relative md:col-span-2 aspect-[16/10] md:aspect-auto md:min-h-[200px]">
                      <Image
                        src={event.image}
                        alt={event.title}
                        fill
                        className="object-cover"
                        sizes="40vw"
                      />
                    </div>
                    <div className="md:col-span-3 p-6 md:p-8">
                      <div className="flex flex-wrap gap-2 mb-3">
                        {event.spotsLeft <= 5 && (
                          <Badge variant="forest">Nur noch {event.spotsLeft} Plätze</Badge>
                        )}
                      </div>
                      <h3 className="font-serif text-2xl mb-3">{event.title}</h3>
                      <ul className="space-y-2 text-sm text-muted mb-4">
                        <li className="flex items-center gap-2">
                          <Calendar className="h-4 w-4 text-forest" />
                          {formatDate(event.date)} · {event.time}
                        </li>
                        <li className="flex items-center gap-2">
                          <MapPin className="h-4 w-4 text-forest" />
                          {event.location}
                        </li>
                        <li className="flex items-center gap-2">
                          <Users className="h-4 w-4 text-forest" />
                          {event.spotsLeft} von {event.spots} Plätzen frei
                        </li>
                      </ul>
                      <p className="text-muted text-sm leading-relaxed mb-6">
                        {event.description}
                      </p>
                      <Button variant="primary" size="sm">
                        Jetzt anmelden
                      </Button>
                    </div>
                  </div>
                </Card>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={0.2}>
            <Card className="sticky top-28">
              <h3 className="font-serif text-xl mb-4">Monatsübersicht</h3>
              <div className="space-y-3">
                {upcomingEvents.map((e) => (
                  <div
                    key={e.id}
                    className="flex gap-3 items-start border-b border-border pb-3 last:border-0"
                  >
                    <div className="text-center shrink-0 w-12 rounded-lg bg-forest/10 py-2">
                      <span className="block text-lg font-serif text-forest leading-none">
                        {new Date(e.date).getDate()}
                      </span>
                      <span className="text-[10px] uppercase text-muted">
                        {new Date(e.date).toLocaleDateString("de-DE", {
                          month: "short",
                        })}
                      </span>
                    </div>
                    <p className="text-sm font-medium leading-snug pt-1">
                      {e.title}
                    </p>
                  </div>
                ))}
              </div>
            </Card>
          </AnimatedSection>
        </div>
      </Section>
    </>
  );
}
