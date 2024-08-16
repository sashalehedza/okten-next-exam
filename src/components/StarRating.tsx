import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa'
import React from 'react'

interface StarRatingProps {
  rating: number
  totalStars?: number
}

const StarRating: React.FC<StarRatingProps> = ({ rating, totalStars = 10 }) => {
  const filledStars = Math.floor(rating)
  const hasHalfStar = rating % 1 >= 0.5
  const emptyStars = totalStars - filledStars - (hasHalfStar ? 1 : 0)

  return (
    <div className='flex'>
      {Array(filledStars)
        .fill(0)
        .map((_, index) => (
          <FaStar key={index} className='text-yellow-500' />
        ))}
      {hasHalfStar && <FaStarHalfAlt className='text-yellow-500' />}
      {Array(emptyStars)
        .fill(0)
        .map((_, index) => (
          <FaRegStar key={index} className='text-gray-300' />
        ))}
    </div>
  )
}

export default StarRating
