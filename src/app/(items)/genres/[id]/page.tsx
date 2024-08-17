import React from 'react'
import dynamic from 'next/dynamic'
import MovieCard from '@/components/MovieCard'
import { getGenresData, getMoviesDataByGenre } from '@/services/api.service'
import MoviesList from '@/components/MoviesList'

const Pagination = dynamic(() => import('@/components/Pagination'), {
  ssr: false,
})

type PropsParamsType = {
  searchParams?: { page?: string }
  params: { id: string }
}

const MoviesPage = async ({ params, searchParams }: PropsParamsType) => {
  const page = Number(searchParams?.page) || 1
  let id = Number(params.id)
  const { results: movies, total_pages: totalPages } =
    await getMoviesDataByGenre(id, page)
  const { genres } = await getGenresData()

  return (
    <div className='flex flex-col justify-items-center'>
      <MoviesList movies={movies} />
      <Pagination currentPage={page} totalPages={totalPages} />
    </div>
  )
}

export default MoviesPage
