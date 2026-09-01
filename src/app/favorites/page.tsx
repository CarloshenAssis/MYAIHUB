import type { Metadata } from "next";

import { PageHeader } from "@/components/layout/page-header";
import { ItemGrid } from "@/components/items/item-grid";
import { favoriteItems } from "@/lib/mock-data";

export const metadata: Metadata = {
  title: "Favoritos · Personal AI Hub",
};

export default function FavoritesPage() {
  return (
    <div className="flex flex-col gap-6">
      <PageHeader
        title="Favoritos"
        description="Acesso rápido às ferramentas que você mais utiliza."
      />
      <ItemGrid
        items={favoriteItems}
        emptyTitle="Nenhum favorito ainda"
        emptyDescription="Marque um item como favorito para vê-lo aqui."
      />
    </div>
  );
}
