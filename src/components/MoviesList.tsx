import React from 'react'
import MovieCard from '@/components/MovieCard'
import { Movie } from '@/models/Movie'

type MoviesListProps = {
  movies: Movie[]
}

const MoviesList: React.FC<MoviesListProps> = ({ movies }) => {
  return (
    <div className='w-full grid justify-center lg:grid-cols-5 lg:justify-around wrap gap-6 md:justify-around md:m-0 lg:w-full md:grid-cols-2 pt-4 pb-4'>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  )
}

export default MoviesList
