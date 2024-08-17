import React from 'react'
import MovieCard from '@/components/MovieCard'
import { Movie } from '@/models/Movie'

type MoviesListProps = {
  movies: Movie[]
}

const MoviesList: React.FC<MoviesListProps> = ({ movies }) => {
  return (
    <div className='w-full px-4 grid justify-center lg:grid-cols-5 lg:justify-around gap-6 md:grid-cols-2 pt-4 pb-4'>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  )
}

export default MoviesList
