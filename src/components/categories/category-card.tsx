import Link from "next/link";
import {
  Code2,
  Sparkles,
  Palette,
  Workflow,
  Database,
  Zap,
  Briefcase,
  Microscope,
  type LucideIcon,
} from "lucide-react";

import { Card } from "@/components/ui/card";
import { itemCountByCategory } from "@/lib/mock-data";
import type { Category } from "@/lib/types";

const categoryIcons: Record<Category["slug"], LucideIcon> = {
  coding: Code2,
  ai: Sparkles,
  design: Palette,
  automation: Workflow,
  data: Database,
  productivity: Zap,
  business: Briefcase,
  research: Microscope,
};

export function CategoryCard({ category }: { category: Category }) {
  const Icon = categoryIcons[category.slug];
  const count = itemCountByCategory(category.slug);

  return (
    <Link href={`/categories/${category.slug}`}>
      <Card className="flex h-full flex-col gap-3 p-5 transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5">
        <div className="flex items-center justify-between">
          <div className="flex size-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
            <Icon className="size-4.5" />
          </div>
          <span className="text-xs font-medium text-muted-foreground">
            {count} {count === 1 ? "item" : "itens"}
          </span>
        </div>
        <div>
          <h3 className="font-medium text-foreground">{category.name}</h3>
          <p className="text-sm text-muted-foreground">{category.description}</p>
        </div>
      </Card>
    </Link>
  );
}
