import type { Metadata } from "next";

import { PageHeader } from "@/components/layout/page-header";
import { ItemsBrowser } from "@/components/items/items-browser";

export const metadata: Metadata = {
  title: "Todos os itens · Personal AI Hub",
};

export default function ItemsPage() {
  return (
    <div className="flex flex-col gap-6">
      <PageHeader
        title="Todos os itens"
        description="Ferramentas, skills, agentes, workflows e recursos que você já registrou."
      />
      <ItemsBrowser />
    </div>
  );
}
