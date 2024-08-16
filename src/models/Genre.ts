export type ListResponse<T> = {
  genres: T[]
}

export interface Genre {
  id: number
  name: string
}

export type GenreList = ListResponse<Genre>
