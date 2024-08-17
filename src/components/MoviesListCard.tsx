import React, { FC } from 'react'
import Image from 'next/image'
import { Movie } from '@/models/Movie'
import StarRating from './StarRating'
import GenreBadge from './GenreBadge'

type IProps = {
  movie: Movie
}

const MoviesListCard: FC<IProps> = ({ movie }) => {
  return (
    <div className='rounded-lg shadow-lg'>
      <div className='flex justify-center'>
        <Image
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          className='rounded-md'
          width={200}
          height={200}
        />
      </div>

      <div className='p-4 space-y-4'>
        <h2 className='text-xl font-semibold mb-2'>{movie.title}</h2>
        <div className='flex items-center space-x-2'>
          <p className='text-sm'>{movie.release_date}</p>
        </div>
        <StarRating rating={movie.vote_average} />
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
