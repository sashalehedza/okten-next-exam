import React, { FC } from 'react'
import Image from 'next/image'
import { Movie } from '@/models/Movie'
import StarRating from './StarRating'
import GenreBadge from './GenreBadge'
import PosterPreview from './PosterPreview'

type IProps = {
  movie: Movie
}

const MoviesListCard: FC<IProps> = ({ movie }) => {
  return (
    <div>
      <div className='flex justify-center'>
        <PosterPreview src={movie.poster_path} alt={movie.title} />
      </div>

      <div className='p-4 space-y-4'>
        <h2 className='text-xl font-semibold mb-2'>{movie.title}</h2>
        <div className='flex items-center space-x-2'>
          <p className='text-sm'>{movie.release_date}</p>
        </div>
        <StarRating rating={movie.vote_average} />
        <p>Rating: {movie.vote_average}</p>
        <p className='mt-2'>{movie.overview}</p>

        <span className='text-sm'>
          Popularity: {movie.popularity.toFixed(1)}
        </span>
        <span className='text-sm'>Votes: {movie.vote_count}</span>
        <div className='flex items-center space-x-2'>
          {movie?.genres?.map((genre) => (
            <GenreBadge key={genre.id} genre={genre} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default MoviesListCard
