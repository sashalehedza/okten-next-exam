import React, { FC } from 'react'
import Image from 'next/image'
import { Movie } from '@/models/Movie'
import StarRating from './StarRating'

type IProps = {
  movie: Movie
}

const MoviesListCard: FC<IProps> = ({ movie }) => {
  return (
    <div>
      {movie.title}
      <StarRating rating={movie.vote_average} />
    </div>
  )
}

export default MoviesListCard
