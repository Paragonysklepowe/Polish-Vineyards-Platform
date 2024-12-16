import { User } from './auth';
import { Vineyard } from './index';

export interface Review {
  id: string;
  vineyardId: string;
  userId: string;
  rating: number;
  content: string;
  visitDate: string;
  isVerified: boolean;
  photos: string[];
  helpfulVotes: number;
  createdAt: string;
  updatedAt: string;
  status: 'pending' | 'approved' | 'rejected';
  ownerResponse?: {
    content: string;
    createdAt: string;
  };
  user: Pick<User, 'id' | 'username'>;
}

export interface ReviewStats {
  averageRating: number;
  totalReviews: number;
  ratingDistribution: {
    [key: number]: number;
  };
  verifiedReviews: number;
}

export interface CreateReviewDto {
  vineyardId: string;
  rating: number;
  content: string;
  visitDate: string;
  isVerified: boolean;
  photos: string[];
}

export interface ReviewFilters {
  rating?: number;
  verifiedOnly?: boolean;
  sortBy: 'newest' | 'highest' | 'lowest' | 'helpful';
}