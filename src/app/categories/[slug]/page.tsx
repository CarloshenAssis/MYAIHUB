import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";

import { PageHeader } from "@/components/layout/page-header";
import { ItemGrid } from "@/components/items/item-grid";
import { categories, items } from "@/lib/mock-data";

export function generateStaticParams() {
  return categories.map((category) => ({ slug: category.slug }));
}

export default async function CategoryDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const category = categories.find((entry) => entry.slug === slug);

  if (!category) {
    notFound();
  }

  const categoryItems = items.filter((item) => item.category === category.slug);

  return (
    <div className="flex flex-col gap-6">
      <Link
        href="/categories"
        className="flex w-fit items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground"
      >
        <ArrowLeft className="size-4" />
        Categorias
      </Link>

      <PageHeader title={category.name} description={category.description} />

      <ItemGrid
        items={categoryItems}
        emptyTitle="Nenhum item nesta categoria"
        emptyDescription="Registre uma descoberta e associe a esta categoria."
      />
    </div>
  );
}
