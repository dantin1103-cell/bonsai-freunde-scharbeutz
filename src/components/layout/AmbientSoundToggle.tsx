"use client";

import { useState } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Optional: Ambient-Hintergrundsound.
 * Audio-Datei unter /public/sounds/zen-garden.mp3 ablegen.
 */
export function AmbientSoundToggle() {
  const [enabled, setEnabled] = useState(false);

  const toggle = () => {
    setEnabled(!enabled);
    // Platzhalter — echte Audio-Integration bei Bedarf
  };

  return (
    <button
      type="button"
      onClick={toggle}
      className={cn(
        "fixed bottom-6 right-6 z-40 flex h-12 w-12 items-center justify-center rounded-full border border-border bg-surface/90 backdrop-blur shadow-lg transition-all hover:border-forest",
        enabled && "text-forest"
      )}
      aria-label={enabled ? "Ambient-Sound aus" : "Ambient-Sound an"}
      title="Zen-Garten-Ambiente (optional)"
    >
      {enabled ? (
        <Volume2 className="h-5 w-5" />
      ) : (
        <VolumeX className="h-5 w-5 text-muted" />
      )}
    </button>
  );
}
