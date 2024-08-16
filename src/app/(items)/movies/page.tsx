import { fetchMovies } from '@/services/api.service'
import MovieCard from '../../../components/MovieCard'

const UsersPage = async () => {
  const movies = await fetchMovies()

  return (
    <div className='container mx-auto p-4'>
      <h1 className='text-2xl font-bold mb-6'>Popular Movies</h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            title={movie.title}
            overview={movie.overview}
            posterPath={movie.poster_path}
            releaseDate={movie.release_date}
          />
        ))}
      </div>
    </div>
  )
}

export default UsersPage
