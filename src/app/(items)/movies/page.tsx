'use server'
import React from 'react'

import MovieCard from '@/components/MovieCard'
import { getMoviesData } from '@/services/api.service'

type PropsParamsType = {
  searchParams?: { page?: string }
}

const MoviesPage = async ({ searchParams }: PropsParamsType) => {
  const page = Number(searchParams?.page) || 1
  let { results } = await getMoviesData(page || 1)

  return (
    <div className={'flex flex-col justify-items-center'}>
      <div
        className={
          'w-full grid  justify-center lg:grid-cols-5 lg:justify-around wrap gap-6 md:justify-around md:m-0 lg:w-full md:grid-cols-2 pt-4 pb-4'
        }
      >
        {results.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  )
}

export default MoviesPage
