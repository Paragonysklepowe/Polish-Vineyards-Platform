import React, { useState } from 'react';
import { Star, Upload, Loader2 } from 'lucide-react';
import { z } from 'zod';
import { toast } from 'react-hot-toast';
import { useAuthStore } from '../../store/authStore';
import { cn } from '../../utils/cn';

const reviewSchema = z.object({
  rating: z.number().min(1).max(5),
  content: z.string().min(50).max(1000),
  visitDate: z.string().nonempty(),
  isVerified: z.boolean(),
  photos: z.array(z.string()).max(5),
});

interface ReviewFormProps {
  vineyardId: string;
  onSubmit: (review: z.infer<typeof reviewSchema>) => Promise<void>;
}

export const ReviewForm: React.FC<ReviewFormProps> = ({ vineyardId, onSubmit }) => {
  const { user } = useAuthStore();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    rating: 0,
    content: '',
    visitDate: '',
    isVerified: false,
    photos: [] as string[],
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const validatedData = reviewSchema.parse(formData);
      setIsSubmitting(true);
      await onSubmit(validatedData);
      toast.success('Review submitted successfully!');
      setFormData({
        rating: 0,
        content: '',
        visitDate: '',
        isVerified: false,
        photos: [],
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast.error(error.errors[0].message);
      } else {
        toast.error('Failed to submit review');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!user) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-600">Please log in to write a review.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Rating
        </label>
        <div className="flex gap-1">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              type="button"
              onClick={() => setFormData({ ...formData, rating: star })}
              className={cn(
                'p-1 rounded-full hover:bg-gray-100 transition-colors',
                formData.rating >= star ? 'text-yellow-400' : 'text-gray-300'
              )}
            >
              <Star className="h-8 w-8 fill-current" />
            </button>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Your Review
        </label>
        <textarea
          value={formData.content}
          onChange={(e) => setFormData({ ...formData, content: e.target.value })}
          rows={4}
          className="w-full rounded-md border-gray-300 shadow-sm focus:border-[#722F37] focus:ring-[#722F37]"
          placeholder="Share your experience (50-1000 characters)"
        />
        <p className="mt-1 text-sm text-gray-500">
          {formData.content.length}/1000 characters
        </p>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Date of Visit
        </label>
        <input
          type="date"
          value={formData.visitDate}
          onChange={(e) => setFormData({ ...formData, visitDate: e.target.value })}
          className="w-full rounded-md border-gray-300 shadow-sm focus:border-[#722F37] focus:ring-[#722F37]"
        />
      </div>

      <div>
        <label className="flex items-center">
          <input
            type="checkbox"
            checked={formData.isVerified}
            onChange={(e) => setFormData({ ...formData, isVerified: e.target.checked })}
            className="rounded border-gray-300 text-[#722F37] focus:ring-[#722F37]"
          />
          <span className="ml-2 text-sm text-gray-600">
            I verify that I visited this vineyard
          </span>
        </label>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Photos (Optional)
        </label>
        <div className="flex items-center justify-center w-full">
          <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <Upload className="w-8 h-8 mb-2 text-gray-500" />
              <p className="text-sm text-gray-500">Click to upload photos</p>
              <p className="text-xs text-gray-500">(Max 5 photos)</p>
            </div>
            <input type="file" className="hidden" accept="image/*" multiple />
          </label>
        </div>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#722F37] hover:bg-[#8B4513] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#722F37] disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? (
          <Loader2 className="h-5 w-5 animate-spin" />
        ) : (
          'Submit Review'
        )}
      </button>
    </form>
  );
};