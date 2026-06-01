import type { Metadata } from "next";
import Image from "next/image";
import {
  User,
  TreePine,
  TrendingUp,
  Heart,
  Award,
  Lock,
} from "lucide-react";
import { PageHero } from "@/components/shared/PageHero";
import { Section, SectionHeader } from "@/components/ui/Section";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/data/content";
import { images } from "@/data/images";

export const metadata: Metadata = {
  title: "Mitgliederbereich",
  description: `Profil, Bäume und Fortschritt für Mitglieder von ${siteConfig.name}.`,
};

const memberTrees = [
  {
    name: "Ficus retusa",
    stage: "In Entwicklung",
    since: "2023",
    image: images.members.ficus,
  },
  {
    name: "Pinus mugo",
    stage: "Überwinterung",
    since: "2021",
    image: images.members.pine,
  },
];

const badges = [
  { name: "Erster Workshop", icon: Award },
  { name: "Forum-Hilfe", icon: Heart },
  { name: "Baum des Monats", icon: TreePine },
];

export default function MembersPage() {
  return (
    <>
      <PageHero
        eyebrow="Mitglieder"
        title="Ihr Bereich"
        description="Profil, eigene Bäume, Fortschritt und Lieblingsbeiträge — nach Anmeldung freigeschaltet."
        image={images.members.ficus}
      />

      <Section>
        <div className="grid lg:grid-cols-3 gap-8">
          <AnimatedSection className="lg:col-span-1">
            <Card className="text-center">
              <div className="mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-forest/10 text-forest">
                <User className="h-12 w-12" />
              </div>
              <h2 className="font-serif text-2xl">Gast</h2>
              <p className="text-sm text-muted mt-1">Noch nicht angemeldet</p>
              <div className="mt-6 flex flex-wrap justify-center gap-2">
                {badges.map((b) => (
                  <Badge key={b.name} variant="outline" className="opacity-50">
                    <b.icon className="h-3 w-3 mr-1" />
                    {b.name}
                  </Badge>
                ))}
              </div>
              <Button href="/forum" variant="primary" className="mt-6 w-full">
                <Lock className="h-4 w-4" />
                Anmelden
              </Button>
            </Card>
          </AnimatedSection>

          <div className="lg:col-span-2 space-y-8">
            <AnimatedSection delay={0.1}>
              <SectionHeader
                eyebrow="Meine Bäume"
                title="Hochgeladene Bonsai"
                className="mb-6"
              />
              <div className="grid sm:grid-cols-2 gap-4">
                {memberTrees.map((tree) => (
                  <Card key={tree.name} className="p-0 overflow-hidden flex">
                    <div className="relative w-28 shrink-0">
                      <Image
                        src={tree.image}
                        alt={tree.name}
                        fill
                        className="object-cover"
                        sizes="120px"
                      />
                    </div>
                    <div className="p-4 flex flex-col justify-center">
                      <h3 className="font-medium">{tree.name}</h3>
                      <p className="text-xs text-moss">{tree.stage}</p>
                      <p className="text-xs text-muted mt-1">seit {tree.since}</p>
                    </div>
                  </Card>
                ))}
                <Card className="flex items-center justify-center border-dashed min-h-[120px] text-muted text-sm">
                  + Baum hinzufügen (nach Login)
                </Card>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.15}>
              <SectionHeader
                eyebrow="Fortschritt"
                title="Entwicklung dokumentieren"
                className="mb-6"
              />
              <Card>
                <div className="flex items-center gap-4 mb-4">
                  <TrendingUp className="h-8 w-8 text-forest" />
                  <div>
                    <p className="font-medium">12 Pflege-Einträge</p>
                    <p className="text-sm text-muted">Letzter Eintrag: vor 3 Tagen</p>
                  </div>
                </div>
                <div className="h-2 rounded-full bg-beige overflow-hidden">
                  <div
                    className="h-full bg-forest rounded-full"
                    style={{ width: "68%" }}
                  />
                </div>
                <p className="text-xs text-muted mt-2">
                  Profil zu 68 % vervollständigt
                </p>
              </Card>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <SectionHeader
                eyebrow="Gespeichert"
                title="Lieblingsbeiträge"
                className="mb-6"
              />
              <Card className="text-sm text-muted">
                <p>
                  Noch keine Favoriten — durchstöbern Sie das{" "}
                  <a href="/forum" className="text-forest hover:underline">
                    Forum
                  </a>{" "}
                  und markieren Sie hilfreiche Threads.
                </p>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </Section>
    </>
  );
}
