"use client";

import { TrendingUp, Hash } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { popularTopics } from "@/data/content";

export function ForumSidebar() {
  return (
    <aside className="space-y-6">
      <Card>
        <h3 className="font-serif text-lg mb-4 flex items-center gap-2">
          <TrendingUp className="h-5 w-5 text-forest" />
          Beliebte Themen
        </h3>
        <ul className="space-y-2">
          {popularTopics.map((topic) => (
            <li key={topic.tag}>
              <button
                type="button"
                className="flex w-full items-center justify-between rounded-lg px-3 py-2 text-sm text-muted hover:bg-beige/50 dark:hover:bg-surface transition-colors text-left"
              >
                <span className="flex items-center gap-2">
                  <Hash className="h-3 w-3 text-moss" />
                  {topic.tag}
                </span>
                <span className="text-xs text-muted">{topic.count}</span>
              </button>
            </li>
          ))}
        </ul>
      </Card>

      <Card className="bg-forest/5 border-forest/20">
        <h3 className="font-serif text-lg mb-2 text-forest">Mitglied werden</h3>
        <p className="text-sm text-muted mb-4">
          Voller Zugriff auf alle Kategorien, Badges und den Mitgliederbereich.
        </p>
        <p className="text-xs text-muted">
          Anmeldung über Supabase — demnächst aktiv.
        </p>
      </Card>
    </aside>
  );
}
