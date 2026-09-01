"use client";

import { useMemo, useState } from "react";

import { ItemGrid } from "@/components/items/item-grid";
import { categories, items as allItems } from "@/lib/mock-data";
import type { Item, ItemStatus, ItemType } from "@/lib/types";
import { cn } from "@/lib/utils";

const statuses: ItemStatus[] = ["Discovered", "Testing", "Approved", "Archived"];
const types: ItemType[] = ["Tool", "Skill", "Agent", "Workflow", "Resource"];

type Filters = {
  category: string;
  type: string;
  status: string;
  favoriteOnly: boolean;
};

function FilterChip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "shrink-0 rounded-full border px-3 py-1.5 text-xs font-medium transition-colors",
        active
          ? "border-primary/50 bg-primary/15 text-accent-foreground"
          : "border-border text-muted-foreground hover:border-primary/30 hover:text-foreground",
      )}
    >
      {children}
    </button>
  );
}

export function ItemsBrowser({ initialItems = allItems }: { initialItems?: Item[] }) {
  const [filters, setFilters] = useState<Filters>({
    category: "all",
    type: "all",
    status: "all",
    favoriteOnly: false,
  });

  const filtered = useMemo(() => {
    return initialItems.filter((item) => {
      if (filters.category !== "all" && item.category !== filters.category) return false;
      if (filters.type !== "all" && item.type !== filters.type) return false;
      if (filters.status !== "all" && item.status !== filters.status) return false;
      if (filters.favoriteOnly && !item.favorite) return false;
      return true;
    });
  }, [filters, initialItems]);

  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-3">
        <div className="flex gap-2 overflow-x-auto pb-1">
          <FilterChip
            active={filters.category === "all"}
            onClick={() => setFilters((prev) => ({ ...prev, category: "all" }))}
          >
            Todas categorias
          </FilterChip>
          {categories.map((category) => (
            <FilterChip
              key={category.slug}
              active={filters.category === category.slug}
              onClick={() =>
                setFilters((prev) => ({
                  ...prev,
                  category: prev.category === category.slug ? "all" : category.slug,
                }))
              }
            >
              {category.name}
            </FilterChip>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <div className="flex gap-2 overflow-x-auto">
            <FilterChip
              active={filters.type === "all"}
              onClick={() => setFilters((prev) => ({ ...prev, type: "all" }))}
            >
              Todos os tipos
            </FilterChip>
            {types.map((type) => (
              <FilterChip
                key={type}
                active={filters.type === type}
                onClick={() =>
                  setFilters((prev) => ({ ...prev, type: prev.type === type ? "all" : type }))
                }
              >
                {type}
              </FilterChip>
            ))}
          </div>

          <span className="mx-1 hidden h-4 w-px bg-border sm:block" />

          <div className="flex gap-2 overflow-x-auto">
            <FilterChip
              active={filters.status === "all"}
              onClick={() => setFilters((prev) => ({ ...prev, status: "all" }))}
            >
              Todos os status
            </FilterChip>
            {statuses.map((status) => (
              <FilterChip
                key={status}
                active={filters.status === status}
                onClick={() =>
                  setFilters((prev) => ({
                    ...prev,
                    status: prev.status === status ? "all" : status,
                  }))
                }
              >
                {status}
              </FilterChip>
            ))}
          </div>

          <span className="mx-1 hidden h-4 w-px bg-border sm:block" />

          <FilterChip
            active={filters.favoriteOnly}
            onClick={() => setFilters((prev) => ({ ...prev, favoriteOnly: !prev.favoriteOnly }))}
          >
            ★ Favoritos
          </FilterChip>
        </div>
      </div>

      <p className="text-xs text-muted-foreground">
        {filtered.length} {filtered.length === 1 ? "item encontrado" : "itens encontrados"}
      </p>

      <ItemGrid
        items={filtered}
        emptyTitle="Nenhum item com esses filtros"
        emptyDescription="Tente remover algum filtro para ver mais resultados."
      />
    </div>
  );
}
