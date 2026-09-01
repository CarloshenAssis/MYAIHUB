import { Star } from "lucide-react";

import { cn } from "@/lib/utils";

export function RatingStars({
  rating,
  className,
}: {
  rating: number;
  className?: string;
}) {
  if (rating <= 0) {
    return <span className={cn("text-xs text-muted-foreground", className)}>Sem avaliação</span>;
  }

  return (
    <div className={cn("flex items-center gap-0.5", className)} aria-label={`${rating} de 5 estrelas`}>
      {Array.from({ length: 5 }).map((_, index) => (
        <Star
          key={index}
          className={cn(
            "size-3.5",
            index < rating ? "fill-warning text-warning" : "fill-transparent text-muted-foreground/40",
          )}
        />
      ))}
    </div>
  );
}
