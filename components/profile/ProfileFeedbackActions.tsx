"use client";

import dynamic from "next/dynamic";
import { Flag, Star } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

type FeedbackForm = "review" | "complaint";

const ProfileFeedbackForm = dynamic(() => import("./ProfileFeedbackForm"));

export default function ProfileFeedbackActions({
  craftsmanName,
}: {
  craftsmanName: string;
}) {
  const [activeForm, setActiveForm] = useState<FeedbackForm | null>(null);

  return (
    <>
      <div className="grid grid-cols-2 gap-2">
        <Button
          type="button"
          variant="outline"
          aria-haspopup="dialog"
          onClick={() => setActiveForm("review")}
          className="h-10 w-full gap-2 rounded-md border-foreground bg-transparent px-3 font-mono text-[10px] uppercase tracking-[0.16em] text-foreground hover:bg-foreground hover:text-background"
        >
          <Star size={13} />
          Review
        </Button>
        <Button
          type="button"
          variant="outline"
          aria-haspopup="dialog"
          onClick={() => setActiveForm("complaint")}
          className="h-10 w-full gap-2 rounded-md border-destructive bg-transparent px-3 font-mono text-[10px] uppercase tracking-[0.16em] text-destructive hover:bg-destructive hover:text-destructive-foreground"
        >
          <Flag size={13} />
          Complaint
        </Button>
      </div>

      {activeForm && (
        <ProfileFeedbackForm
          form={activeForm}
          craftsmanName={craftsmanName}
          onClose={() => setActiveForm(null)}
        />
      )}
    </>
  );
}
