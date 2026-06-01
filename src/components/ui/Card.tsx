import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className, hover = true }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-border bg-surface-elevated p-6 shadow-sm",
        hover &&
          "transition-all duration-300 hover:shadow-lg hover:shadow-forest/5 hover:-translate-y-0.5 hover:border-forest/20",
        className
      )}
    >
      {children}
    </div>
  );
}
