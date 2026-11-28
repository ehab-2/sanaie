import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  BadgeCheck,
  MapPin,
  MessageCircle,
  Star,
} from "lucide-react";
import type { Craftsman } from "@/types/craftsman";
import { reviews as allReviews } from "@/data/reviews";
import ProfileFeedbackActions from "./ProfileFeedbackActions";
import CraftsmanReviews from "./CraftsmanReviews";


export default function CraftsmanProfileContent({
  craftsman,
}: {
  craftsman: Craftsman;
}) {
  const workImages = craftsman.selectedWork ?? [];
  const reviews = allReviews.filter(
    (review) => review.craftsmanId === craftsman.id,
  );
  const averageRating =
    reviews.reduce((total, review) => total + review.rating, 0) /
    (reviews.length || 1);

  return (
    <main className="mx-auto w-full max-w-360 flex-1 px-5 py-8 md:px-10 md:py-12">
      <Link
        href="/craftspeople"
        className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeft size={14} />
        All craftspeople
      </Link>

      <div className="mt-6 grid overflow-hidden rounded-md border border-border bg-card lg:grid-cols-[0.85fr_1.15fr]">
        <section className="border-b border-border p-6 sm:p-8 lg:border-r lg:border-b-0">
          <div className="flex h-14 w-14 items-center justify-center bg-foreground font-mono text-sm uppercase tracking-[0.14em] text-background">
            {craftsman.initials}
          </div>

          <h1 className="mt-6 flex items-center gap-2 font-heading text-2xl font-medium tracking-tight">
            {craftsman.name}
            <BadgeCheck size={17} className="text-primary" aria-label="Verified" />
          </h1>
          <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
            {craftsman.tradeLabel}
          </p>

          <dl className="mt-8 divide-y divide-border border-y border-border">
            <div className="flex items-center justify-between gap-4 py-4">
              <dt className="mono-label">Based in</dt>
              <dd className="text-right text-sm">{craftsman.governorate}</dd>
            </div>
            <div className="flex items-center justify-between gap-4 py-4">
              <dt className="mono-label">Experience</dt>
              <dd className="text-right text-sm">{craftsman.experience} years</dd>
            </div>
            <div className="flex items-center justify-between gap-4 py-4">
              <dt className="mono-label">Rating</dt>
              <dd className="inline-flex items-center gap-1.5 text-sm">
                {reviews.length > 0 ? (
                  <>
                    <Star
                      size={14}
                      className="text-primary"
                      fill="currentColor"
                    />
                    {averageRating.toFixed(1)}
                    <span className="text-muted-foreground">
                      ({reviews.length})
                    </span>
                  </>
                ) : (
                  <span className="text-muted-foreground">No reviews yet</span>
                )}
              </dd>
            </div>
          </dl>

          <div className="mt-7 grid gap-3">
            <a
              href={`https://wa.me/${craftsman.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-primary px-5 font-mono text-[10px] uppercase tracking-[0.16em] text-primary-foreground transition-colors hover:bg-foreground hover:text-background"
            >
              <MessageCircle size={15} />
              Message on WhatsApp
            </a>
            <ProfileFeedbackActions craftsmanName={craftsman.name} />
          </div>
        </section>

        <section className="p-6 sm:p-8">
          <h2 className="mono-label">About</h2>
          <p className="mt-4 text-[15px] leading-relaxed text-foreground/90">
            {craftsman.about}
          </p>

          <div className="mt-8 border-t border-border pt-6">
            <div className="flex items-center justify-between gap-4">
              <h2 className="mono-label">Selected work</h2>
              <span className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.12em] text-muted-foreground">
                <MapPin size={12} />
                {craftsman.governorate}
              </span>
            </div>

            {workImages.length > 0 ? (
              <>
                <div className="mt-4 grid grid-cols-2 gap-2">
                  {workImages.slice(0, 4).map((src, index) => (
                    <Link
                      key={`${src}-${index}`}
                      href={`/craftspeople/craftsman/${craftsman.id}/work`}
                      aria-label={`View all work by ${craftsman.name}`}
                      className="group relative aspect-4/3 overflow-hidden rounded-sm bg-background"
                    >
                      <Image
                        src={src}
                        alt={`${craftsman.tradeLabel} work sample ${index + 1}`}
                        fill
                        sizes="(max-width: 640px) 45vw, (max-width: 1024px) 35vw, 25vw"
                        loading={index === 3 ? "eager" : "lazy"}
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </Link>
                  ))}
                </div>
                <Link
                  href={`/craftspeople/craftsman/${craftsman.id}/work`}
                  className="mt-4 inline-flex h-11 w-full items-center justify-center rounded-md border border-border font-mono text-[10px] uppercase tracking-[0.16em] transition-colors hover:bg-foreground hover:text-background"
                >
                  View all work
                </Link>
              </>
            ) : (
              <p className="mt-4 rounded-md border border-dashed border-border px-4 py-8 text-center text-sm text-muted-foreground">
                No work has been added yet.
              </p>
            )}
          </div>

          <CraftsmanReviews reviews={reviews} />
        </section>
      </div>
    </main>
  );
}
