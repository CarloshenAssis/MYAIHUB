import type { Metadata } from "next";

import { PageHeader } from "@/components/layout/page-header";
import { ItemGrid } from "@/components/items/item-grid";
import { recentItems } from "@/lib/mock-data";

export const metadata: Metadata = {
  title: "Recentes · Personal AI Hub",
};

export default function RecentPage() {
  return (
    <div className="flex flex-col gap-6">
      <PageHeader
        title="Recentes"
        description="Itens adicionados ou atualizados mais recentemente."
      />
      <ItemGrid items={recentItems} />
    </div>
  );
}
