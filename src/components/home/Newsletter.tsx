"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <Section id="newsletter">
      <AnimatedSection>
        <div className="relative overflow-hidden rounded-3xl border border-border bg-surface-elevated px-6 py-12 md:px-16 md:py-16 text-center">
          <div className="absolute top-0 right-0 w-64 h-64 bg-forest/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <h2 className="font-serif text-3xl md:text-4xl font-light mb-3 relative">
            Newsletter
          </h2>
          <p className="text-muted max-w-lg mx-auto mb-8 relative">
            Termine, Workshop-Ankündigungen und „Baum des Monats“ — etwa einmal
            im Monat, ohne Werbung.
          </p>

          {submitted ? (
            <p className="text-forest font-medium relative" role="status">
              Vielen Dank! Wir melden uns bei Ihnen.
            </p>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto relative"
            >
              <label htmlFor="newsletter-email" className="sr-only">
                E-Mail-Adresse
              </label>
              <input
                id="newsletter-email"
                type="email"
                required
                placeholder="ihre@email.de"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 rounded-full border border-border bg-background px-5 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent"
              />
              <Button type="submit" variant="primary">
                <Send className="h-4 w-4" />
                Anmelden
              </Button>
            </form>
          )}
        </div>
      </AnimatedSection>
    </Section>
  );
}
