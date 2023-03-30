import React from 'react'
import ratingStarFull from '../assets/images/full_star.png'
import ratingStarEmpty from '../assets/images/empty_star.png'

function RatingStars({ rating }) {
  const stars = [1, 2, 3, 4, 5]

  return (
    <div className="Rating">
      {stars.map((star) =>
        rating >= star ? (
          <img key={star.toString()} src={ratingStarFull} alt="étoile rouge" />
        ) : (
          <img key={star.toString()} src={ratingStarEmpty} alt="étoile grise" />
        )
      )}
    </div>
  )
}

export default RatingStars
