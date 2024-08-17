export type ListResponse<T> = {
  page: number
  results: T[]
  total_pages: number
  total_results: number
}

export type Movie = {
  id: number
  poster_path: string
  adult: boolean
  overview: string
  release_date: string
  genres: { id: number; name: string }[]
  original_title: string
  original_language: string
  title: string
  backdrop_path?: string
  popularity: number
  vote_count: number
  video: boolean
  vote_average: number
}
