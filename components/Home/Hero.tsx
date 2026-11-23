import { BadgeCheck, Wrench } from "lucide-react";

function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-80 bg-[radial-gradient(ellipse_at_top,hsl(var(--muted))_0%,transparent_72%)]"
      />

      <div className="relative mx-auto max-w-360 px-5 pb-12 pt-10 md:px-10 md:pb-14 md:pt-14">
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <div className="flex w-full items-center justify-center gap-4">
            <span className="h-px flex-1 bg-border" aria-hidden="true" />
            <span className="mono-label whitespace-nowrap">
              Independent crafts directory — Egypt
            </span>
            <span className="h-px flex-1 bg-border" aria-hidden="true" />
          </div>

          <div className="relative mt-9">
            <span
              aria-hidden="true"
              className="absolute inset-0 -rotate-6 rounded-md border border-primary/40"
            />
            <div className="relative flex h-20 w-20 items-center justify-center rounded-md border border-border bg-card shadow-sm">
              <Wrench size={30} strokeWidth={1.6} className="text-primary" />
            </div>
            <span className="absolute -end-2 -top-2 rounded-full bg-primary p-1 text-primary-foreground shadow-sm">
              <BadgeCheck size={13} />
            </span>
          </div>

          <h1 className="mt-8 font-heading text-[clamp(2.3rem,5.6vw,4.4rem)] font-bold leading-[1.04] tracking-[-0.03em] text-foreground">
            Find the best trusted craftspeople for your needs
            <span className="text-primary">.</span>
          </h1>

          <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-muted-foreground md:text-base">
            A vetted directory of plumbers, electricians, carpenters and
            technicians. Real portfolios, verified ratings and a direct line on
            WhatsApp.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
