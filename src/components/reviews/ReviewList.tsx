import React, { useState } from 'react';
import { Filter } from 'lucide-react';
import { ReviewCard } from './ReviewCard';
import type { Review, ReviewFilters } from '../../types/reviews';

interface ReviewListProps {
  reviews: Review[];
  onVoteHelpful: (reviewId: string) => Promise<void>;
  onReport: (reviewId: string) => Promise<void>;
}

export const ReviewList: React.FC<ReviewListProps> = ({
  reviews,
  onVoteHelpful,
  onReport,
}) => {
  const [filters, setFilters] = useState<ReviewFilters>({
    sortBy: 'newest',
    verifiedOnly: false,
  });

  const filteredReviews = reviews
    .filter((review) => !filters.verifiedOnly || review.isVerified)
    .filter((review) => !filters.rating || review.rating === filters.rating)
    .sort((a, b) => {
      switch (filters.sortBy) {
        case 'highest':
          return b.rating - a.rating;
        case 'lowest':
          return a.rating - b.rating;
        case 'helpful':
          return b.helpfulVotes - a.helpfulVotes;
        default:
          return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
      }
    });

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-medium text-gray-900">
          Reviews ({reviews.length})
        </h3>
        <div className="flex items-center space-x-4">
          <select
            value={filters.sortBy}
            onChange={(e) =>
              setFilters({ ...filters, sortBy: e.target.value as ReviewFilters['sortBy'] })
            }
            className="rounded-md border-gray-300 text-sm focus:border-[#722F37] focus:ring-[#722F37]"
          >
            <option value="newest">Newest First</option>
            <option value="highest">Highest Rated</option>
            <option value="lowest">Lowest Rated</option>
            <option value="helpful">Most Helpful</option>
          </select>
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={filters.verifiedOnly}
              onChange={(e) =>
                setFilters({ ...filters, verifiedOnly: e.target.checked })
              }
              className="rounded border-gray-300 text-[#722F37] focus:ring-[#722F37]"
            />
            <span className="ml-2 text-sm text-gray-600">Verified Only</span>
          </label>
        </div>
      </div>

      {filteredReviews.length > 0 ? (
        <div className="space-y-4">
          {filteredReviews.map((review) => (
            <ReviewCard
              key={review.id}
              review={review}
              onVoteHelpful={onVoteHelpful}
              onReport={onReport}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-gray-500">No reviews found matching your criteria.</p>
        </div>
      )}
    </div>
  );
};