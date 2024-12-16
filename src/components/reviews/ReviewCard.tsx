import React, { useState } from 'react';
import { format } from 'date-fns';
import { ThumbsUp, Flag, Star, Check } from 'lucide-react';
import type { Review } from '../../types/reviews';
import { cn } from '../../utils/cn';

interface ReviewCardProps {
  review: Review;
  onVoteHelpful: (reviewId: string) => Promise<void>;
  onReport: (reviewId: string) => Promise<void>;
}

export const ReviewCard: React.FC<ReviewCardProps> = ({
  review,
  onVoteHelpful,
  onReport,
}) => {
  const [isVoting, setIsVoting] = useState(false);
  const [isReporting, setIsReporting] = useState(false);

  const handleVoteHelpful = async () => {
    try {
      setIsVoting(true);
      await onVoteHelpful(review.id);
    } finally {
      setIsVoting(false);
    }
  };

  const handleReport = async () => {
    try {
      setIsReporting(true);
      await onReport(review.id);
    } finally {
      setIsReporting(false);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
      <div className="flex items-start justify-between">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <div className="w-10 h-10 rounded-full bg-[#722F37] flex items-center justify-center">
              <span className="text-white font-medium">
                {review.user.username.charAt(0).toUpperCase()}
              </span>
            </div>
          </div>
          <div className="ml-3">
            <p className="text-sm font-medium text-gray-900">{review.user.username}</p>
            <div className="flex items-center">
              <div className="flex items-center">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className={cn(
                      'h-4 w-4',
                      star <= review.rating
                        ? 'text-yellow-400 fill-current'
                        : 'text-gray-300'
                    )}
                  />
                ))}
              </div>
              <span className="ml-2 text-sm text-gray-500">
                {format(new Date(review.createdAt), 'MMM d, yyyy')}
              </span>
            </div>
          </div>
        </div>
        {review.isVerified && (
          <div className="flex items-center text-green-600">
            <Check className="h-4 w-4 mr-1" />
            <span className="text-xs">Verified Visit</span>
          </div>
        )}
      </div>

      <div className="mt-4">
        <p className="text-gray-700">{review.content}</p>
      </div>

      {review.photos.length > 0 && (
        <div className="mt-4 grid grid-cols-4 gap-2">
          {review.photos.map((photo, index) => (
            <img
              key={index}
              src={photo}
              alt={`Review photo ${index + 1}`}
              className="rounded-lg object-cover w-full h-24"
            />
          ))}
        </div>
      )}

      {review.ownerResponse && (
        <div className="mt-4 bg-gray-50 rounded-lg p-4">
          <p className="text-sm font-medium text-gray-900">Owner Response</p>
          <p className="mt-1 text-sm text-gray-700">{review.ownerResponse.content}</p>
          <p className="mt-1 text-xs text-gray-500">
            {format(new Date(review.ownerResponse.createdAt), 'MMM d, yyyy')}
          </p>
        </div>
      )}

      <div className="mt-4 flex items-center justify-between">
        <button
          onClick={handleVoteHelpful}
          disabled={isVoting}
          className="flex items-center text-sm text-gray-500 hover:text-[#722F37]"
        >
          <ThumbsUp className="h-4 w-4 mr-1" />
          <span>Helpful ({review.helpfulVotes})</span>
        </button>
        <button
          onClick={handleReport}
          disabled={isReporting}
          className="flex items-center text-sm text-gray-500 hover:text-red-600"
        >
          <Flag className="h-4 w-4 mr-1" />
          <span>Report</span>
        </button>
      </div>
    </div>
  );
};