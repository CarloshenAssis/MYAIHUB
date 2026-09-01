import { LoadingGrid } from "@/components/ui/loading-state";

export default function ItemsLoading() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <div className="h-7 w-48 animate-pulse rounded-md bg-muted" />
        <div className="h-4 w-80 animate-pulse rounded-md bg-muted" />
      </div>
      <LoadingGrid count={6} />
    </div>
  );
}
