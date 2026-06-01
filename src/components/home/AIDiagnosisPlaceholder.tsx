"use client";

import { Bot } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

export function AIDiagnosisPlaceholder() {
  return (
    <AnimatedSection>
      <div className="rounded-2xl border border-dashed border-forest/30 bg-forest/5 p-6 md:p-8 flex flex-col md:flex-row md:items-center gap-6">
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-forest/10 text-forest">
          <Bot className="h-7 w-7" />
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <h3 className="font-serif text-xl">KI-Bonsai-Beratung</h3>
            <Badge variant="forest">Demnächst</Badge>
          </div>
          <p className="text-sm text-muted leading-relaxed">
            Laden Sie ein Foto Ihres Baums hoch — unsere geplante KI-Unterstützung
            gibt erste Hinweise zu Pflege, Schädlingen und Formschnitt. Kein Ersatz
            für erfahrene Mitglieder, sondern ein zusätzlicher Impuls.
          </p>
        </div>
        <Button variant="outline" disabled className="shrink-0 opacity-60">
          Bald verfügbar
        </Button>
      </div>
    </AnimatedSection>
  );
}
