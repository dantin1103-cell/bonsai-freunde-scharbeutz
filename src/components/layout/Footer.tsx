import Link from "next/link";
import { Mail, MapPin, Share2 } from "lucide-react";
import { Logo } from "./Logo";
import { navLinks, siteConfig } from "@/data/content";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-surface dark:bg-[#0a1410]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Logo />
            <p className="mt-4 text-sm text-muted leading-relaxed max-w-xs">
              {siteConfig.description}
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted hover:border-forest hover:text-forest transition-colors"
                aria-label="Social Media"
              >
                <Share2 className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-serif text-lg mb-4">Navigation</h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted hover:text-forest transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-lg mb-4">Community</h3>
            <ul className="space-y-2 text-sm text-muted">
              <li>
                <Link href="/forum" className="hover:text-forest transition-colors">
                  Forum & Diskussionen
                </Link>
              </li>
              <li>
                <Link href="/events" className="hover:text-forest transition-colors">
                  Workshops & Treffen
                </Link>
              </li>
              <li>
                <Link href="/mitglieder" className="hover:text-forest transition-colors">
                  Mitgliederbereich
                </Link>
              </li>
              <li>
                <Link href="/galerie" className="hover:text-forest transition-colors">
                  Bonsai-Galerie
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-lg mb-4">Kontakt</h3>
            <ul className="space-y-3 text-sm text-muted">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-forest" />
                {siteConfig.location}
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0 text-forest" />
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="hover:text-forest transition-colors"
                >
                  {siteConfig.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row justify-between gap-4 text-xs text-muted">
          <p>© {year} {siteConfig.name}. Alle Rechte vorbehalten.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-forest transition-colors">
              Impressum
            </Link>
            <Link href="#" className="hover:text-forest transition-colors">
              Datenschutz
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
