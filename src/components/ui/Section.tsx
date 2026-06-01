import { cn } from "@/lib/utils";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  variant?: "default" | "muted" | "dark";
}

const variants = {
  default: "bg-background",
  muted: "bg-beige/50 dark:bg-surface",
  dark: "bg-forest text-white dark:bg-[#0a1410]",
};

export function Section({
  children,
  className,
  id,
  variant = "default",
}: SectionProps) {
  return (
    <section id={id} className={cn("py-20 md:py-28", variants[variant], className)}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  );
}

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
  className?: string;
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  light = false,
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "mb-12 md:mb-16 max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && (
        <p
          className={cn(
            "mb-3 text-sm font-medium tracking-widest uppercase",
            light ? "text-moss/90" : "text-moss"
          )}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={cn(
          "font-serif text-3xl md:text-4xl lg:text-5xl font-light tracking-tight",
          light ? "text-white" : "text-foreground"
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-4 text-lg leading-relaxed",
            light ? "text-white/75" : "text-muted"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
