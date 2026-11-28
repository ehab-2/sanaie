export type ReviewRating = 1 | 2 | 3 | 4 | 5;

export type Review = {
  id: string;
  craftsmanId: string;
  reviewerName: string;
  rating: ReviewRating;
  comment: string;
  createdAt: string;
};
