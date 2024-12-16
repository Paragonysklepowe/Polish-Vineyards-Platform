import React from 'react';
import { Star } from 'lucide-react';
import type { ReviewStats } from '../../types/reviews';
import { cn } from '../../utils/cn';

interface ReviewStatsProps {
  stats: ReviewStats;
}

export const ReviewStats: React.FC<ReviewStatsProps> = ({ stats }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-2xl font-bold text-gray-900">
            {stats.averageRating.toFixed(1)}
          </h3>
          <div className="flex items-center mt-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                className={cn(
                  'h-5 w-5',
                  star <= stats.averageRating
                    ? 'text-yellow-400 fill-current'
                    : 'text-gray-300'
                )}
              />
            ))}
          </div>
          <p className="text-sm text-gray-500 mt-1">
            Based on {stats.totalReviews} reviews
          </p>
        </div>
        <div className="text-right">
          <p className="text-sm text-gray-600">
            {stats.verifiedReviews} verified reviews
          </p>
        </div>
      </div>

      <div className="space-y-2">
        {[5, 4, 3, 2, 1].map((rating) => {
          const count = stats.ratingDistribution[rating] || 0;
          const percentage = (count / stats.totalReviews) * 100 || 0;
          
          return (
            <div key={rating} className="flex items-center">
              <span className="text-sm text-gray-600 w-8">{rating}</span>
              <Star className="h-4 w-4 text-yellow-400 fill-current mr-2" />
              <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-yellow-400 rounded-full"
                  style={{ width: `${percentage}%` }}
                />
              </div>
              <span className="text-sm text-gray-600 ml-2 w-12">
                {count}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};