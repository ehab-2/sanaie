function SkeletonBar({ className }: { className: string }) {
  return (
    <div
      className={`animate-pulse rounded bg-muted motion-reduce:animate-none ${className}`}
    />
  );
}

export function CraftsmenGridSkeleton({ count = 6 }: { count?: number }) {
  return (
    <div aria-busy="true">
      <span className="sr-only" role="status">
        Loading craftsmen...
      </span>
      <div
        aria-hidden="true"
        className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3"
      >
        {Array.from({ length: count }, (_, index) => (
          <article
            key={index}
            className="flex h-full flex-col rounded-md border border-border bg-card p-5 shadow-sm"
          >
            <div className="flex items-center gap-3.5">
              <SkeletonBar className="h-12 w-12 shrink-0 rounded-sm" />
              <div className="flex-1 space-y-2">
                <SkeletonBar className="h-5 w-3/4" />
                <SkeletonBar className="h-3 w-1/2" />
              </div>
            </div>
            <div className="mt-5 space-y-2">
              <SkeletonBar className="h-3 w-full" />
              <SkeletonBar className="h-3 w-full" />
              <SkeletonBar className="h-3 w-2/3" />
            </div>
            <div className="mt-5 flex items-center justify-between gap-3">
              <SkeletonBar className="h-3 w-1/3" />
              <SkeletonBar className="h-3 w-1/4" />
            </div>
            <div className="mt-auto flex items-center justify-between gap-3 border-t border-border/70 pt-3">
              <SkeletonBar className="h-3 w-1/3" />
              <SkeletonBar className="h-10 w-35 rounded-sm" />
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
