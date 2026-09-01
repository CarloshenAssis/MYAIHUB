import Link from "next/link";
import { Boxes, Heart, Shapes, Sparkles } from "lucide-react";

import { PageHeader } from "@/components/layout/page-header";
import { StatCard } from "@/components/dashboard/stat-card";
import { ItemGrid } from "@/components/items/item-grid";
import { CategoryCard } from "@/components/categories/category-card";
import { Button } from "@/components/ui/button";
import { categories, favoriteItems, items, recentItems } from "@/lib/mock-data";

export default function DashboardPage() {
  const approvedCount = items.filter((item) => item.status === "Approved").length;

  return (
    <div className="flex flex-col gap-10">
      <PageHeader
        title="Dashboard"
        description="Visão geral do que você descobriu, testou e aprovou."
      />

      <section className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        <StatCard label="Total de itens" value={items.length} icon={Boxes} />
        <StatCard label="Favoritos" value={favoriteItems.length} icon={Heart} accent="primary" />
        <StatCard label="Aprovados" value={approvedCount} icon={Sparkles} accent="success" />
        <StatCard label="Categorias" value={categories.length} icon={Shapes} accent="warning" />
      </section>

      <section className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold tracking-tight text-foreground">
            Itens recentes
          </h2>
          <Button variant="ghost" size="sm" asChild>
            <Link href="/items">Ver todos</Link>
          </Button>
        </div>
        <ItemGrid items={recentItems.slice(0, 3)} />
      </section>

      <section className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold tracking-tight text-foreground">Favoritos</h2>
          <Button variant="ghost" size="sm" asChild>
            <Link href="/favorites">Ver todos</Link>
          </Button>
        </div>
        <ItemGrid
          items={favoriteItems.slice(0, 3)}
          emptyTitle="Nenhum favorito ainda"
          emptyDescription="Marque os itens que você mais usa para encontrá-los rapidamente aqui."
        />
      </section>

      <section className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold tracking-tight text-foreground">Categorias</h2>
          <Button variant="ghost" size="sm" asChild>
            <Link href="/categories">Ver todas</Link>
          </Button>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {categories.slice(0, 4).map((category) => (
            <CategoryCard key={category.slug} category={category} />
          ))}
        </div>
      </section>
    </div>
  );
}
