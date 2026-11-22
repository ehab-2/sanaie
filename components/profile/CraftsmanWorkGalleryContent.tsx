import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import type { Craftsman } from "@/types/craftsman";
import WorkImageGrid from "./WorkImageGrid";

export default function CraftsmanWorkGalleryContent({
  craftsman,
}: {
  craftsman: Craftsman;
}) {
  const workImages = craftsman.selectedWork ?? [];

  return (
    <main className="mx-auto w-full max-w-360 flex-1 px-5 py-8 md:px-10 md:py-12">
      <Link
        href={`/craftsmen/${craftsman.id}`}
        className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeft size={14} />
        Back to profile
      </Link>

      <div className="mt-8 flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="mono-label">{craftsman.tradeLabel}</p>
          <h1 className="mt-2 font-heading text-3xl font-medium tracking-tight">
            {craftsman.name}&apos;s work
          </h1>
        </div>
        <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
          {workImages.length} {workImages.length === 1 ? "project" : "projects"}
        </p>
      </div>

      {workImages.length > 0 ? (
        <WorkImageGrid images={workImages} tradeLabel={craftsman.tradeLabel} />
      ) : (
        <p className="mt-8 rounded-md border border-dashed border-border px-4 py-12 text-center text-sm text-muted-foreground">
          No work have been added yet.
        </p>
      )}
    </main>
  );
}
