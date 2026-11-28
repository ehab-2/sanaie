import { Star } from "lucide-react";
import type { Review } from "@/types/review";

function EmptyReviews() {
  return (
    <div className="mt-4 rounded-md border border-dashed border-border px-4 py-8 text-center">
      <p className="text-sm text-muted-foreground">No reviews added yet.</p>
    </div>
  );
}

export default function CraftsmanReviews({reviews,}: {reviews: Review[];}) {
  return (
    <section className="mt-8 border-t border-border pt-6">
      <div className="flex items-center justify-between gap-4">
        <h2 className="mono-label">Reviews</h2>
        <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-muted-foreground">
          {reviews.length} {reviews.length === 1 ? "review" : "reviews"}
        </span>
      </div>

      {reviews.length === 0 ? (
        <EmptyReviews />
      ) : (
        <div className="mt-4 divide-y divide-border">
          {reviews.map((review) => (
            <article key={review.id} className="py-4 first:pt-0">
              <div className="flex items-center justify-between gap-4">
                <h3 className="text-sm font-medium">{review.reviewerName}</h3>
                <div
                  aria-label={`${review.rating} out of 5 stars`}
                  className="flex items-center gap-0.5"
                >
                  {Array.from({ length: 5 }, (_, index) => (
                    <Star
                      key={index}
                      size={12}
                      className={
                        index < review.rating
                          ? "text-primary"
                          : "text-muted-foreground"
                      }
                      fill={index < review.rating ? "currentColor" : "none"}
                      aria-hidden="true"
                    />
                  ))}
                </div>
              </div>
              <time
                dateTime={review.createdAt}
                className="mt-2 block font-mono text-[9px] uppercase tracking-[0.12em] text-muted-foreground"
              >
                {new Date(review.createdAt).toLocaleDateString("en-GB", {
                  day: "2-digit",
                  month: "short",
                  year: "numeric",
                })}
              </time>
              <p className="mt-3 text-sm leading-relaxed text-foreground/90">
                {review.comment}
              </p>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}
