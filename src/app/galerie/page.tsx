import type { Metadata } from "next";
import { PageHero } from "@/components/shared/PageHero";
import { Section } from "@/components/ui/Section";
import { GalleryGrid } from "@/components/gallery/GalleryGrid";
import { siteConfig } from "@/data/content";
import { images } from "@/data/images";

export const metadata: Metadata = {
  title: "Galerie",
  description: "Bonsai-Fotos aus unserer Community — Indoor, Outdoor, Anfänger und Ausstellung.",
};

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Galerie"
        title="Lebende Kunstwerke"
        description="Eine Auswahl aus unserer Community — jeder Baum erzählt eine Geschichte von Geduld und Handwerk."
        image={images.gallery.exhibition}
      />
      <Section>
        <GalleryGrid />
      </Section>
    </>
  );
}
