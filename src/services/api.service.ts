import { Genre } from '@/models/Genre'
import { ListResponse, Movie } from '@/models/Movie'

export const getMoviesData = async (): Promise<ListResponse<Movie>> => {
  const response = await fetch(`https://api.themoviedb.org/3/discover/movie`, {
    headers: {
      Authorization: `Bearer ${process.env.TMDB_API_KEY}`,
    },
    next: { revalidate: 3600 },
  })

  if (!response.ok) {
    throw new Error('Failed to fetch movies')
  }

  const data = await response.json()
  return data
}
