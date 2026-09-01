import Link from "next/link";
import { Compass } from "lucide-react";

import { EmptyState } from "@/components/ui/empty-state";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex flex-1 items-center justify-center py-16">
      <EmptyState
        icon={Compass}
        title="Página não encontrada"
        description="O item ou a página que você procura não existe ou foi removida."
        action={
          <Button asChild size="sm">
            <Link href="/">Voltar ao dashboard</Link>
          </Button>
        }
      />
    </div>
  );
}
