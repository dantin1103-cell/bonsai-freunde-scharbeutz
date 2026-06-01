"use client";

import { useState } from "react";
import { Search, Plus, MessageSquare } from "lucide-react";
import { PageHero } from "@/components/shared/PageHero";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { ThreadCard } from "@/components/forum/ThreadCard";
import { ForumSidebar } from "@/components/forum/ForumSidebar";
import { forumCategories, forumThreads } from "@/data/content";
import { images } from "@/data/images";

export function ForumPageContent() {
  const [search, setSearch] = useState("");

  const filteredThreads = forumThreads.filter(
    (t) =>
      t.title.toLowerCase().includes(search.toLowerCase()) ||
      t.excerpt.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <PageHero
        eyebrow="Community"
        title="Forum"
        description="Fragen stellen, Erfahrungen teilen, voneinander lernen — respektvoll und auf Augenhöhe."
        image={images.about.workshop}
      />

      <Section className="pt-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex-1 min-w-0">
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted" />
                <input
                  type="search"
                  placeholder="Themen durchsuchen…"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full rounded-full border border-border bg-surface-elevated pl-11 pr-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent"
                  aria-label="Forum durchsuchen"
                />
              </div>
              <Button variant="primary" className="shrink-0">
                <Plus className="h-4 w-4" />
                Neuer Beitrag
              </Button>
            </div>

            <div className="mb-10">
              <h2 className="font-serif text-2xl mb-4 flex items-center gap-2">
                <MessageSquare className="h-6 w-6 text-forest" />
                Kategorien
              </h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {forumCategories.map((cat) => (
                  <Card
                    key={cat.slug}
                    className="cursor-pointer hover:border-forest/30"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <h3 className="font-medium">{cat.name}</h3>
                        <p className="text-xs text-muted mt-1 line-clamp-2">
                          {cat.description}
                        </p>
                      </div>
                      <span className="text-xs text-muted shrink-0">
                        {cat.threads}
                      </span>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            <h2 className="font-serif text-2xl mb-4">Aktuelle Diskussionen</h2>
            <div className="space-y-4">
              {filteredThreads.length === 0 ? (
                <p className="text-muted text-center py-8">
                  Keine Treffer für „{search}".
                </p>
              ) : (
                filteredThreads.map((thread) => (
                  <ThreadCard key={thread.id} thread={thread} />
                ))
              )}
            </div>

            <div className="mt-8 rounded-2xl border border-dashed border-border p-6 text-center text-sm text-muted">
              <p>
                <strong className="text-foreground">Anmeldung:</strong>{" "}
                Authentifizierung über Supabase — Platzhalter bis zur
                Backend-Anbindung.
              </p>
            </div>
          </div>

          <div className="lg:w-80 shrink-0">
            <div className="lg:sticky lg:top-28">
              <ForumSidebar />
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
