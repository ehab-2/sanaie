"use client";

import { Star, X } from "lucide-react";
import { type SubmitEvent, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Textarea } from "@/components/ui/textarea";
import type { ComplaintReason } from "@/types/complaint";
import type { ReviewRating } from "@/types/review";

type FeedbackFormType = "review" | "complaint";

const reviewRatings: ReviewRating[] = [1, 2, 3, 4, 5];
const complaintReasonOptions = [
  { value: "work-quality", label: "Work quality" },
  { value: "communication", label: "Communication" },
  { value: "professional-conduct", label: "Professional conduct" },
  { value: "safety", label: "Safety concern" },
  { value: "other", label: "Other" },
] satisfies { value: ComplaintReason; label: string }[];

function getComplaintReason(value: string | null): ComplaintReason | null {
  return (
    complaintReasonOptions.find((option) => option.value === value)?.value ??
    null
  );
}

export default function ProfileFeedbackForm({
  form,
  craftsmanName,
  onClose,
}: {
  form: FeedbackFormType;
  craftsmanName: string;
  onClose: () => void;
}) {
  const [selectedRating, setSelectedRating] = useState<ReviewRating | null>(
    null,
  );
  const [complaintReason, setComplaintReason] =
    useState<ComplaintReason | null>(null);

  function handleSubmit(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  return (
    <Sheet
      open
      onOpenChange={(open) => {
        if (!open) onClose();
      }}
    >
      <SheetContent
        side="center"
        showCloseButton={false}
        className="max-h-[calc(100dvh-2rem)] w-[calc(100%-2rem)] max-w-lg overflow-y-auto rounded-md border border-border bg-card p-6 text-foreground sm:p-8"
      >
        <div>
          <SheetHeader className="flex-row items-start justify-between gap-4 p-0">
            <div className="space-y-2">
              <p className="mono-label">
                {form === "review" ? "Share feedback" : "Report a concern"}
              </p>
              <SheetTitle className="font-heading text-xl font-medium">
                {form === "review"
                  ? `Review ${craftsmanName}`
                  : `Complaint about ${craftsmanName}`}
              </SheetTitle>
              <SheetDescription className="sr-only">
                Feedback preview form for {craftsmanName}.
              </SheetDescription>
            </div>
            <SheetClose
              render={
                <Button
                  type="button"
                  variant="ghost"
                  size="icon-sm"
                  aria-label="Close form"
                  className="shrink-0 border border-border text-muted-foreground hover:text-foreground"
                />
              }
            >
              <X size={16} />
            </SheetClose>
          </SheetHeader>

          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            {form === "review" ? (
              <>
                <fieldset className="space-y-2">
                  <legend className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
                    Rating
                  </legend>
                  <div className="flex items-center gap-2">
                    {reviewRatings.map((rating) => (
                      <label key={rating} className="cursor-pointer rounded-sm">
                        <input
                          type="radio"
                          name="rating"
                          value={rating}
                          required
                          checked={selectedRating === rating}
                          onChange={() => setSelectedRating(rating)}
                          className="peer sr-only"
                        />
                        <Star
                          size={24}
                          aria-hidden="true"
                          className={`peer-focus-visible:rounded-sm peer-focus-visible:outline peer-focus-visible:outline-ring ${
                            selectedRating !== null &&
                            rating <= selectedRating
                              ? "fill-primary text-primary"
                              : "text-muted-foreground"
                          }`}
                        />
                        <span className="sr-only">
                          {rating} {rating === 1 ? "star" : "stars"}
                        </span>
                      </label>
                    ))}
                  </div>
                </fieldset>
                <div className="space-y-2">
                  <label
                    htmlFor="review-comment"
                    className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground"
                  >
                    Your review
                  </label>
                  <Textarea
                    id="review-comment"
                    name="review"
                    required
                    maxLength={2000}
                    rows={4}
                    className="h-40 resize-none"
                  />
                </div>
              </>
            ) : (
              <>
                <div className="space-y-2">
                  <label
                    htmlFor="complaint-reason"
                    className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground"
                  >
                    Reason
                  </label>
                  <Select
                    name="reason"
                    required
                    value={complaintReason}
                    onValueChange={(value) =>
                      setComplaintReason(getComplaintReason(value))
                    }
                  >
                    <SelectTrigger
                      id="complaint-reason"
                      className="h-11! w-full rounded-md border-input bg-background px-4 py-3 text-sm focus-visible:border-primary focus-visible:ring-primary/50"
                    >
                      <SelectValue placeholder="Select a reason" />
                    </SelectTrigger>
                    <SelectContent>
                      {complaintReasonOptions.map(({ value, label }) => (
                        <SelectItem key={value} value={value}>
                          {label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="complaint-details"
                    className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground"
                  >
                    Details
                  </label>
                  <Textarea
                    id="complaint-details"
                    name="details"
                    required
                    maxLength={2000}
                    rows={4}
                    className="h-40 resize-none"
                  />
                </div>
              </>
            )}

            <p className="text-xs text-muted-foreground">
              Preview only. Responses are not sent or saved.
            </p>
            <Button
              type="submit"
              className="h-11 w-full rounded-md bg-foreground px-5 font-mono text-[10px] uppercase tracking-[0.16em] text-background hover:bg-primary"
            >
              Submit {form}
            </Button>
          </form>
        </div>
      </SheetContent>
    </Sheet>
  );
}
