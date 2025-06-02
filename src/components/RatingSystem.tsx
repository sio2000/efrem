import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star } from '@phosphor-icons/react';

interface RatingSystemProps {
  initialRating?: number;
  maxRating?: number;
  onRatingChange?: (rating: number) => void;
  size?: 'sm' | 'md' | 'lg';
  readOnly?: boolean;
  showLabel?: boolean;
}

const RatingSystem: React.FC<RatingSystemProps> = ({
  initialRating = 0,
  maxRating = 5,
  onRatingChange,
  size = 'md',
  readOnly = false,
  showLabel = true,
}) => {
  const [rating, setRating] = useState(initialRating);
  const [hoverRating, setHoverRating] = useState(0);

  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8',
  };

  const handleRatingChange = (newRating: number) => {
    if (readOnly) return;
    setRating(newRating);
    onRatingChange?.(newRating);
  };

  return (
    <div className="flex flex-col items-start gap-2">
      <div className="flex items-center gap-1">
        {[...Array(maxRating)].map((_, index) => {
          const ratingValue = index + 1;
          return (
            <motion.button
              key={index}
              whileHover={!readOnly ? { scale: 1.1 } : {}}
              whileTap={!readOnly ? { scale: 0.9 } : {}}
              onClick={() => handleRatingChange(ratingValue)}
              onMouseEnter={() => !readOnly && setHoverRating(ratingValue)}
              onMouseLeave={() => !readOnly && setHoverRating(0)}
              className={`${sizeClasses[size]} focus:outline-none`}
              disabled={readOnly}
            >
              <Star
                weight={ratingValue <= (hoverRating || rating) ? 'fill' : 'regular'}
                className={`${
                  ratingValue <= (hoverRating || rating)
                    ? 'text-yellow-500'
                    : 'text-gray-300'
                } transition-colors`}
              />
            </motion.button>
          );
        })}
      </div>
      {showLabel && (
        <span className="text-sm text-gray-600">
          {rating === 0
            ? 'No rating'
            : `${rating} ${rating === 1 ? 'star' : 'stars'}`}
        </span>
      )}
    </div>
  );
};

export default RatingSystem; 