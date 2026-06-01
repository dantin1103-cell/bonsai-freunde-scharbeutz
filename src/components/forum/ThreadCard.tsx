"use client";

import { MessageCircle, Heart, Pin } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/utils";

interface Thread {
  id: string;
  title: string;
  author: string;
  avatar: string;
  category: string;
  replies: number;
  likes: number;
  time: string;
  excerpt: string;
  pinned?: boolean;
  hot?: boolean;
}

export function ThreadCard({ thread }: { thread: Thread }) {
  return (
    <Card className="group cursor-pointer">
      <div className="flex gap-4">
        <div
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-forest/10 text-forest text-sm font-medium"
          aria-hidden
        >
          {thread.avatar}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-center gap-2 mb-1">
            {thread.pinned && (
              <Pin className="h-3.5 w-3.5 text-wood" aria-label="Angepinnt" />
            )}
            {thread.hot && <Badge variant="forest">Beliebt</Badge>}
            <Badge variant="outline">{thread.category}</Badge>
            <span className="text-xs text-muted ml-auto">{thread.time}</span>
          </div>
          <h3 className="font-medium text-foreground group-hover:text-forest transition-colors line-clamp-2">
            {thread.title}
          </h3>
          <p className="mt-1 text-sm text-muted line-clamp-2">{thread.excerpt}</p>
          <div className="mt-3 flex items-center gap-4 text-xs text-muted">
            <span>{thread.author}</span>
            <span className="flex items-center gap-1">
              <MessageCircle className="h-3.5 w-3.5" />
              {thread.replies}
            </span>
            <button
              type="button"
              className={cn(
                "flex items-center gap-1 hover:text-forest transition-colors"
              )}
              aria-label={`${thread.likes} Reaktionen`}
            >
              <Heart className="h-3.5 w-3.5" />
              {thread.likes}
            </button>
          </div>
        </div>
      </div>
    </Card>
  );
}
