import { getMoviesData } from '@/services/api.service'
import MovieCard from '../../../components/MovieCard'

const UsersPage = async () => {
  const { results } = await getMoviesData()

  return (
    <div className='container mx-auto p-4'>
      <h1 className='text-2xl font-bold mb-6'>Popular Movies</h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
        {results.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  )
}

export default UsersPage
