import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/shared/PageHero";
import { Section, SectionHeader } from "@/components/ui/Section";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Card } from "@/components/ui/Card";
import { teamMembers, timeline, siteConfig } from "@/data/content";
import { images } from "@/data/images";

export const metadata: Metadata = {
  title: "Über uns",
  description: `Geschichte, Philosophie und Team von ${siteConfig.name}.`,
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Über uns"
        title="Tradition trifft Gemeinschaft"
        description="Seit 2008 pflegen wir die Kunst des Bonsai an der Ostsee — mit Respekt, Geduld und offenen Türen."
        image={images.about.garden}
      />

      <Section>
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <AnimatedSection>
            <SectionHeader
              eyebrow="Philosophie"
              title="Der Baum lehrt uns Zeit"
              description="Bonsai ist keine Hast. Wir glauben an langfristige Entwicklung, ehrlichen Austausch und die Verantwortung für lebende Wesen."
            />
            <div className="space-y-4 text-muted leading-relaxed">
              <p>
                Unser Verein verbindet japanische Ästhetik mit der konkreten
                Erfahrung norddeutscher Jahreszeiten: Wind von der Ostsee,
                salzige Luft und kalte Winter prägen unsere Pflege-Entscheidungen.
              </p>
              <p>
                Anfänger sind willkommen wie erfahrene Sammler. Im Forum, bei
                Workshops und im Vereinsgarten teilen wir Wissen — ohne
                Wettbewerbsdruck, mit Freude am Handwerk.
              </p>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <div className="relative aspect-video rounded-3xl overflow-hidden">
              <Image
                src={images.about.workshop}
                alt="Bonsai-Pflege im Vereinsgarten"
                fill
                className="object-cover"
                sizes="50vw"
              />
            </div>
          </AnimatedSection>
        </div>
      </Section>

      <Section variant="muted">
        <AnimatedSection>
          <SectionHeader
            eyebrow="Geschichte"
            title="Unsere Zeitleiste"
            align="center"
          />
        </AnimatedSection>
        <div className="max-w-3xl mx-auto">
          {timeline.map((item, i) => (
            <AnimatedSection key={item.year} delay={i * 0.1}>
              <div className="relative flex gap-8 pb-12 last:pb-0">
                {i < timeline.length - 1 && (
                  <div className="absolute left-[27px] top-14 bottom-0 w-px bg-border" />
                )}
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-2 border-forest bg-surface font-serif text-lg text-forest">
                  {item.year.slice(2)}
                </div>
                <div className="pt-2">
                  <p className="text-sm text-moss font-medium">{item.year}</p>
                  <h3 className="font-serif text-xl mt-1 mb-2">{item.title}</h3>
                  <p className="text-muted text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </Section>

      <Section>
        <AnimatedSection>
          <SectionHeader
            eyebrow="Team"
            title="Vorstand & Ansprechpartner"
            align="center"
          />
        </AnimatedSection>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, i) => (
            <AnimatedSection key={member.name} delay={i * 0.08}>
              <Card className="text-center p-0 overflow-hidden">
                <div className="relative aspect-square">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                    sizes="250px"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-serif text-lg">{member.name}</h3>
                  <p className="text-sm text-moss mb-2">{member.role}</p>
                  <p className="text-xs text-muted leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </Section>

      <Section variant="muted">
        <AnimatedSection>
          <SectionHeader
            eyebrow="Tradition"
            title="Was ist Bonsai?"
            description="„Bon“ bedeutet Schale, „sai“ Pflanze — die Kunst, einen Baum in miniaturem Maßstab zu kultivieren, ohne ihn zu einem Topfpflanzen- cliché zu machen."
          />
          <div className="prose prose-neutral dark:prose-invert max-w-none text-muted">
            <p className="leading-relaxed">
              Ziel ist nicht nur kleine Bäume, sondern der Eindruck von Alter,
              Wind und Zeit. Formschnitt, Wurzelarbeit, Jin und Shari sind
              Werkzeuge einer Sprache — die wir gemeinsam lernen und verfeinern.
            </p>
          </div>
        </AnimatedSection>
      </Section>
    </>
  );
}
