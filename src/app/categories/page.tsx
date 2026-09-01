import type { Metadata } from "next";

import { PageHeader } from "@/components/layout/page-header";
import { CategoryCard } from "@/components/categories/category-card";
import { categories } from "@/lib/mock-data";

export const metadata: Metadata = {
  title: "Categorias · Personal AI Hub",
};

export default function CategoriesPage() {
  return (
    <div className="flex flex-col gap-6">
      <PageHeader
        title="Categorias"
        description="Organize suas descobertas por área de aplicação."
      />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {categories.map((category) => (
          <CategoryCard key={category.slug} category={category} />
        ))}
      </div>
    </div>
  );
}
