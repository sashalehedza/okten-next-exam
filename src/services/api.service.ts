import { GenreList } from '@/models/Genre'
import { ListResponse, Movie } from '@/models/Movie'

export const getMoviesData = async (
  page: number,
  genreId?: number
): Promise<ListResponse<Movie>> => {
  const response = await fetch(
    `https://api.themoviedb.org/3/discover/movie?page=${page}`,
    {
      headers: {
        Authorization: `Bearer ${process.env.TMDB_API_KEY}`,
      },
      next: { revalidate: 3600 },
    }
  )

  if (!response.ok) {
    throw new Error('Failed to fetch movies')
  }

  const data = await response.json()
  return data
}

export const getMoviesDataByGenre = async (
  id: number,
  page: number
): Promise<ListResponse<Movie>> => {
  const response = await fetch(
    `https://api.themoviedb.org/3/discover/movie?with_genres=${id}&page=${page}`,
    {
      headers: {
        Authorization: `Bearer ${process.env.TMDB_API_KEY}`,
      },
      next: { revalidate: 3600 },
    }
  )

  if (!response.ok) {
    throw new Error('Failed to fetch movies')
  }

  const data = await response.json()
  return data
}

export const getMoviesDataByName = async (
  query: string,
  page: number
): Promise<ListResponse<Movie>> => {
  const apiCall = query
    ? `https://api.themoviedb.org/3/search/movie?query=${query}&page=${page}`
    : `https://api.themoviedb.org/3/discover/movie?page=${page}`

  const response = await fetch(apiCall, {
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

export const getMovieDetail = async (id: string): Promise<Movie> => {
  const response = await fetch(`https://api.themoviedb.org/3/movie/${id}`, {
    headers: {
      Authorization: `Bearer ${process.env.TMDB_API_KEY}`,
    },
    next: { revalidate: 3600 },
  })

  if (!response.ok) {
    throw new Error('Failed to fetch movie details')
  }

  const data = await response.json()
  return data
}

export const getGenresData = async (): Promise<GenreList> => {
  const response = await fetch(
    `https://api.themoviedb.org/3/genre/movie/list`,
    {
      headers: {
        Authorization: `Bearer ${process.env.TMDB_API_KEY}`,
      },
      next: { revalidate: 3600 },
    }
  )

  if (!response.ok) {
    throw new Error('Failed to fetch genres')
  }

  const data = await response.json()
  return data
}
