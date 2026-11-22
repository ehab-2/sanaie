export type Craftsman = {
  id: string;
  name: string;
  initials: string;
  avatarUrl?: string;
  trade: string; 
  tradeLabel: string; 
  governorate: string; 
  experience: number;
  rating: number;
  reviewsCount: number;
  about: string;
  selectedWork?: string[];
  whatsapp: string;
  phone: string;
}