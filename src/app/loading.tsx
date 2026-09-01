import { LoadingGrid, LoadingStatRow } from "@/components/ui/loading-state";

export default function DashboardLoading() {
  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-2">
        <div className="h-7 w-40 animate-pulse rounded-md bg-muted" />
        <div className="h-4 w-72 animate-pulse rounded-md bg-muted" />
      </div>
      <LoadingStatRow />
      <LoadingGrid count={3} />
    </div>
  );
}
