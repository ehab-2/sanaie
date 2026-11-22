import Link from "next/link";
import { MapPin, MessageCircle, Star } from "lucide-react";
import { Craftsman } from "@/types/craftsman";

type Props = {
  craftsman: Craftsman;
  index?: number;
}

export function CraftsmanCard({ craftsman, index }: Props) {
  return (
    <article className="group flex h-full flex-col rounded-md border border-border bg-card p-5 shadow-sm transition-shadow hover:shadow-md">
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-3.5">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-sm bg-foreground font-mono text-xs font-medium uppercase tracking-[0.14em] text-background">
            <Link
              href={`/craftsmen/${craftsman.id}`}
              className="transition-colors group-hover:text-primary"
            >
              {craftsman.initials}
            </Link>
          </div>

          <div>
            <h3 className="text-[17px] font-medium leading-tight tracking-[-0.015em] text-foreground">
              <Link
                href={`/craftsmen/${craftsman.id}`}
                className="transition-colors group-hover:text-primary"
              >
                {craftsman.name}
              </Link>
            </h3>
            <p className="mt-1.5 font-medium text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
              {craftsman.tradeLabel}
            </p>
          </div>
        </div>

        {typeof index === "number" && (
          <span className="font-mono text-[10px] tabular-nums text-muted-foreground/70">
            {String(index + 1).padStart(2, "0")}
          </span>
        )}
      </div>

      <p className="mt-4  text-[14px] leading-relaxed text-muted-foreground">
        {craftsman.about}
      </p>

      <div className="mt-4 mb-2 flex flex-wrap items-center justify-between gap-x-3 gap-y-1.5 font-mono text-[10px] uppercase tracking-[0.1em] text-foreground/70">
        <span className="inline-flex items-center gap-1.5">
          <MapPin size={12} className="text-muted-foreground" />
          {craftsman.governorate}
        </span>

        <span className="inline-flex items-center gap-1.5 text-[11px] font-medium">
          <Star size={12} className="text-primary" fill="currentColor" />
          {craftsman.rating.toFixed(1)}
          <span className="text-muted-foreground">
            ({craftsman.reviewsCount} reviews)
          </span>
        </span>
      </div>

      <div className="mt-auto flex items-center justify-between gap-3 border-t border-border/70 pt-3">
        <span className="font-semibold text-[11px] uppercase tracking-widest text-emerald-600">
          {craftsman.experience} yrs experience
        </span>

        <a
          href={`https://wa.me/${craftsman.whatsapp}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-10 w-35 rounded-sm items-center justify-center gap-1.5 bg-primary font-mono text-[11px] uppercase tracking-[0.16em] text-primary-foreground transition-colors hover:bg-foreground hover:text-background"
        >
          <MessageCircle size={13} />
          WhatsApp
        </a>
      </div>
    </article>
  );
}
