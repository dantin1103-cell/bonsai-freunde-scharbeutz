import { Hero } from "@/components/home/Hero";
import { AboutClub } from "@/components/home/AboutClub";
import { EventsPreview } from "@/components/home/EventsPreview";
import { GalleryPreview } from "@/components/home/GalleryPreview";
import { CommunityHighlights } from "@/components/home/CommunityHighlights";
import { TreeOfMonth } from "@/components/home/TreeOfMonth";
import { Testimonials } from "@/components/home/Testimonials";
import { CareTips } from "@/components/home/CareTips";
import { AIDiagnosisPlaceholder } from "@/components/home/AIDiagnosisPlaceholder";
import { Newsletter } from "@/components/home/Newsletter";
import { Section } from "@/components/ui/Section";

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutClub />
      <EventsPreview />
      <GalleryPreview />
      <CommunityHighlights />
      <TreeOfMonth />
      <Section>
        <AIDiagnosisPlaceholder />
      </Section>
      <Testimonials />
      <CareTips />
      <Newsletter />
    </>
  );
}
