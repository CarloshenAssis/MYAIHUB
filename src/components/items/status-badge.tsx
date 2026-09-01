import { Badge } from "@/components/ui/badge";
import type { ItemStatus } from "@/lib/types";

const statusConfig: Record<ItemStatus, { label: string; variant: "success" | "warning" | "outline" | "secondary" }> = {
  Discovered: { label: "Descoberto", variant: "outline" },
  Testing: { label: "Testando", variant: "warning" },
  Approved: { label: "Aprovado", variant: "success" },
  Archived: { label: "Arquivado", variant: "secondary" },
};

export function StatusBadge({ status }: { status: ItemStatus }) {
  const config = statusConfig[status];
  return <Badge variant={config.variant}>{config.label}</Badge>;
}
