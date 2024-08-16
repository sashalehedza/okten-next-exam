import React from 'react'
import Image from 'next/image'
import { Movie } from '@/models/Movie'

type MovieCardProps = {
  movie: Movie
}

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  return (
    <div className='bg-white shadow-md rounded-lg p-4'>
      <Image
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        className='rounded-md'
        width={500}
        height={500}
        priority
      />
      <h2 className='text-lg font-semibold mt-2'>{movie.title}</h2>
      <p className='text-sm text-gray-500'>{movie.release_date}</p>
      <p className='mt-2 text-gray-700'>{movie.overview}</p>
    </div>
  )
}

export default MovieCard
