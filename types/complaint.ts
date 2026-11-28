export type ComplaintReason =
  | "work-quality"
  | "communication"
  | "professional-conduct"
  | "safety"
  | "other";

export type Complaint = {
  id: string;
  craftsmanId: string;
  reason: ComplaintReason;
  details: string;
  createdAt: string;
};
