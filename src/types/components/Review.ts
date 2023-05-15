import { EmitEventFunction, TEventName } from '../events';
import { ReviewCardProps } from './ReviewCard';

export interface ReviewsProps {
  reviews?: RatingsAndCommentsProps;
  eventNameWriteReview: TEventName;
  eventWriteReviewPayload: Record<string, unknown>;
  eventEmit: EmitEventFunction;
}

export interface RatingAndComponentsProps {
  reviews: RatingsAndCommentsProps;
  eventNameWriteReview: TEventName;
  eventWriteReviewPayload: Record<string, unknown>;
  eventEmit: EmitEventFunction;
}

export interface RatingOption {
  label: string;
  value: string | number;
}
export interface ProgressBar {
  label: string;
}
export interface ButtonUsefulUselessProps {
  disabledButton?: boolean;
  textUseful?: string;
  useful?: number;
  unuseful?: number;
}

export interface ReviewsCard extends ReviewCardProps {
  feedbacks?: ButtonUsefulUselessProps;
}

export type RatingsAndCommentsProps = {
  progressBar: {
    title: string;
    grades: { grade: string; qty: number }[];
  };
  overallSatisfaction: {
    title: string;
    grade_avarage: string;
  };
  ratingComponent: {
    numbers: {
      numberPresented: number;
      totalNumber: number;
    };
    ratingOptions: RatingOption[];
    starClassifications: number[];
  };
  selectedStars: number[];
  reviewsCard: {
    nextToken: string | null;
    items: ReviewsCard[];
  };
};
