"use client";

import { Menu, Plus } from "lucide-react";

import { Button } from "@/components/ui/button";
import { SearchBar } from "@/components/search/search-bar";

export function Header({ onMenuClick }: { onMenuClick: () => void }) {
  return (
    <header className="sticky top-0 z-30 flex h-16 items-center gap-3 border-b border-border bg-background/85 px-4 backdrop-blur supports-backdrop-filter:bg-background/60 sm:px-6">
      <button
        type="button"
        onClick={onMenuClick}
        className="text-muted-foreground hover:text-foreground lg:hidden"
        aria-label="Abrir menu"
      >
        <Menu className="size-5" />
      </button>

      <div className="max-w-xl flex-1">
        <SearchBar />
      </div>

      <div className="ml-auto flex items-center gap-3">
        <Button size="sm" className="hidden sm:inline-flex">
          <Plus className="size-4" />
          Novo item
        </Button>
        <Button size="icon" className="sm:hidden" aria-label="Novo item">
          <Plus className="size-4" />
        </Button>

        <span className="flex size-9 items-center justify-center rounded-full bg-secondary text-sm font-medium text-secondary-foreground">
          C
        </span>
      </div>
    </header>
  );
}
