import Link from "next/link";
import { Heart } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { RatingStars } from "@/components/items/rating-stars";
import { StatusBadge } from "@/components/items/status-badge";
import { getCategory } from "@/lib/mock-data";
import type { Item } from "@/lib/types";
import { cn } from "@/lib/utils";

export function ItemCard({ item }: { item: Item }) {
  const category = getCategory(item.category);

  return (
    <Link href={`/items/${item.slug}`} className="group block h-full">
      <Card className="flex h-full flex-col gap-3 p-5 transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5">
        <div className="flex items-start justify-between gap-3">
          <div className="flex min-w-0 flex-col gap-1">
            <h3 className="truncate font-medium text-foreground group-hover:text-primary">
              {item.name}
            </h3>
            <span className="text-xs text-muted-foreground">
              {item.type} · {category?.name}
            </span>
          </div>
          <Heart
            className={cn(
              "size-4 shrink-0",
              item.favorite ? "fill-primary text-primary" : "text-muted-foreground/40",
            )}
          />
        </div>

        <p className="line-clamp-2 text-sm text-muted-foreground">{item.description}</p>

        <div className="mt-auto flex flex-wrap items-center gap-1.5 pt-1">
          {item.tags.slice(0, 3).map((tag) => (
            <Badge key={tag} variant="outline">
              {tag}
            </Badge>
          ))}
        </div>

        <div className="flex items-center justify-between border-t border-border pt-3">
          <StatusBadge status={item.status} />
          <RatingStars rating={item.rating} />
        </div>
      </Card>
    </Link>
  );
}
