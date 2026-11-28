import { Craftsman } from "@/types/craftsman";
import { CraftsmanCard } from "./CraftsmanCard";
import { CraftsmenGridSkeleton } from "./CraftsmenGridSkeleton";

interface CraftsmenGridProps {
  craftsmen: Craftsman[];
  limit?: number;
  isLoading?: boolean;
}

export function CraftsmenGrid({
  craftsmen,
  limit,
  isLoading = false,
}: CraftsmenGridProps) {
  if (isLoading) {
    return <CraftsmenGridSkeleton count={limit ?? 6} />;
  }

  if (!craftsmen || craftsmen.length === 0) {
    return (
      <div className="rounded-md border border-dashed border-border bg-card/60 px-6 py-14 text-center">
        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
          NO CRAFTSMEN FOUND
        </p>
        <p className="mt-2 text-sm text-muted-foreground">
          No craftsmen match the current selection yet. Try another trade or
          governorate.
        </p>
      </div>
    );
  }

  const visibleCraftsmen =
    limit !== undefined ? craftsmen.slice(0, limit) : craftsmen;

  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
      {visibleCraftsmen.map((craftsman) => (
        <CraftsmanCard key={craftsman.id} craftsman={craftsman} />
      ))}
    </div>
  );
}
