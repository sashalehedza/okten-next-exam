interface Movie {
  id: number
  title: string
  overview: string
  poster_path: string
  release_date: string
}

export const fetchMovies = async (): Promise<Movie[]> => {
  const response = await fetch('https://api.themoviedb.org/3/discover/movie', {
    headers: {
      Authorization: `Bearer ${process.env.TMDB_API_KEY}`, // Use the TMDB API key from environment variables
    },
    next: { revalidate: 3600 }, // Revalidate the data every hour (optional)
  })

  if (!response.ok) {
    throw new Error('Failed to fetch movies')
  }

  const data = await response.json()
  return data.results
}
