import React from 'react'

interface MovieProps {
  title: string
  overview: string
  posterPath: string
  releaseDate: string
}

const MovieCard: React.FC<MovieProps> = ({
  title,
  overview,
  posterPath,
  releaseDate,
}) => {
  return (
    <div className='bg-white shadow-md rounded-lg p-4'>
      <img
        src={`https://image.tmdb.org/t/p/w500${posterPath}`}
        alt={title}
        className='rounded-md'
      />
      <h2 className='text-lg font-semibold mt-2'>{title}</h2>
      <p className='text-sm text-gray-500'>{releaseDate}</p>
      <p className='mt-2 text-gray-700'>{overview}</p>
    </div>
  )
}

export default MovieCard
