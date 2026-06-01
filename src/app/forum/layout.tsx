import type { Metadata } from "next";
import { siteConfig } from "@/data/content";

export const metadata: Metadata = {
  title: "Forum",
  description: `Community-Forum von ${siteConfig.name} — Diskussionen zu Pflege, Werkzeugen und Treffen.`,
};

export default function ForumLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
