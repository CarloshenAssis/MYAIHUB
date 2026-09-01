import { ItemCard } from "@/components/items/item-card";
import { EmptyState } from "@/components/ui/empty-state";
import type { Item } from "@/lib/types";

export function ItemGrid({
  items,
  emptyTitle = "Nenhum item encontrado",
  emptyDescription = "Ajuste os filtros ou registre uma nova descoberta.",
}: {
  items: Item[];
  emptyTitle?: string;
  emptyDescription?: string;
}) {
  if (items.length === 0) {
    return <EmptyState title={emptyTitle} description={emptyDescription} />;
  }

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
      {items.map((item) => (
        <ItemCard key={item.id} item={item} />
      ))}
    </div>
  );
}
