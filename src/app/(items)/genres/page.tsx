import React from 'react'
import dynamic from 'next/dynamic'
import MovieCard from '@/components/MovieCard'
import { getMoviesData } from '@/services/api.service'
import MoviesList from '@/components/MoviesList'

const Pagination = dynamic(() => import('@/components/Pagination'), {
  ssr: false,
})

type PropsParamsType = {
  searchParams?: { page?: string }
}

const MoviesPage = async ({ searchParams }: PropsParamsType) => {
  const page = Number(searchParams?.page) || 1
  const { results: movies, total_pages: totalPages } = await getMoviesData(page)

  return (
    <div className='flex flex-col justify-items-center'>
      <MoviesList movies={movies} />
      <Pagination currentPage={page} totalPages={totalPages} />
    </div>
  )
}

export default MoviesPage
