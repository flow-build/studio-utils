export interface ReviewCardProps {
  review_id: string | number;
  image?: string;
  nickname: string;
  date: string;
  title: string;
  review: string;
  grade: number;
  media?: {
    media_type: string;
    url: string;
    alt: string;
    description?: string;
  }[];
  recentlyAdded?: boolean;
}
