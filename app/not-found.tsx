import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, WrenchOff } from "lucide-react";

export const metadata: Metadata = {
  title: "Page Not Found | Sanaie",
  description: "The page you are looking for could not be found.",
};

export default function NotFound() {
  return (
    <main className="relative flex flex-1 items-center overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(var(--muted))_0%,transparent_68%)]"
      />

      <div className="relative mx-auto w-full max-w-360 px-5 py-16 md:px-10 md:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <div className="flex items-center justify-center gap-4">
            <span className="h-px flex-1 bg-border" aria-hidden="true" />
            <span className="mono-label whitespace-nowrap">Error 404</span>
            <span className="h-px flex-1 bg-border" aria-hidden="true" />
          </div>

          <div className="relative mx-auto mt-9 w-fit">
            <span
              aria-hidden="true"
              className="absolute inset-0 rotate-6 rounded-md border border-primary/40"
            />
            <div className="relative flex h-20 w-20 items-center justify-center rounded-md border border-border bg-card shadow-sm">
              <WrenchOff size={30} strokeWidth={1.6} className="text-primary" />
            </div>
          </div>

          <h1 className="mt-8 font-heading text-[clamp(2.5rem,7vw,5rem)] font-bold leading-[1.02] tracking-[-0.04em] text-foreground">
            Page Not Found
            <span className="text-primary">.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-lg text-[15px] leading-relaxed text-muted-foreground md:text-base">
            The link may be incorrect or the page may have moved. Return home
            and find the right craftsman for the job.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/"
              className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-md bg-foreground px-6 font-mono text-[10px] uppercase tracking-[0.16em] text-background shadow-sm transition-colors hover:bg-primary sm:w-auto"
            >
              <ArrowLeft size={15} />
              Back to home
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
