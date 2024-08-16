import React, { FC } from 'react'
import Image from 'next/image'
import { Movie } from '@/models/Movie'
import StarRating from './StarRating'
import Link from 'next/link'

type IProps = {
  movie: Movie
}

const MoviesListCard: FC<IProps> = ({ movie }) => {
  // Map genre IDs to genre names

  return (
    <div className='bg-white rounded-lg shadow-lg'>
      <Image
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        className='rounded-md'
        width={200}
        height={500}
        priority
      />

      <div className='p-4 space-y-4'>
        <h2 className='text-xl font-semibold mb-2'>{movie.title}</h2>
        <div className='flex items-center space-x-2 text-gray-500'>
          <p className='text-sm text-gray-500'>{movie.release_date}</p>
        </div>
        <StarRating rating={movie.vote_average} />
        <p className='text-gray-700 mt-2'>{movie.overview}</p>
        <div className='flex items-center justify-between text-gray-600 mt-4'>
          <span className='text-sm'>
            Popularity: {movie.popularity.toFixed(1)}
          </span>
          <span className='text-sm'>Votes: {movie.vote_count}</span>
        </div>
      </div>
    </div>
  )
}

export default MoviesListCard
