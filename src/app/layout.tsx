import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import { AppProviders } from "@/components/providers/AppProviders";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingLeaves } from "@/components/layout/FloatingLeaves";
import { LoadingScreen } from "@/components/layout/LoadingScreen";
import { AmbientSoundToggle } from "@/components/layout/AmbientSoundToggle";
import { siteConfig } from "@/data/content";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "Bonsai",
    "Scharbeutz",
    "Verein",
    "Ostsee",
    "Workshop",
    "Community",
    "Forum",
  ],
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    locale: "de_DE",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" suppressHydrationWarning>
      <body
        className={`${cormorant.variable} ${dmSans.variable} font-sans grain min-h-screen antialiased`}
      >
        <AppProviders>
          <LoadingScreen />
          <FloatingLeaves />
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <AmbientSoundToggle />
        </AppProviders>
      </body>
    </html>
  );
}
