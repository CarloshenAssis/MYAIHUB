import type { Metadata } from "next";
import { Settings } from "lucide-react";

import { PageHeader } from "@/components/layout/page-header";
import { EmptyState } from "@/components/ui/empty-state";

export const metadata: Metadata = {
  title: "Configurações · Personal AI Hub",
};

export default function SettingsPage() {
  return (
    <div className="flex flex-col gap-6">
      <PageHeader
        title="Configurações"
        description="Preferências de conta e do sistema."
      />
      <EmptyState
        icon={Settings}
        title="Configurações chegam na Fase 3"
        description="Login, perfil e preferências de conta serão habilitados junto com Supabase Auth."
      />
    </div>
  );
}
