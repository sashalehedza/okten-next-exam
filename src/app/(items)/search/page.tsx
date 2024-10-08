import React, { Suspense } from 'react'
import dynamic from 'next/dynamic'
import MoviesList from '@/components/MoviesList'
import { getMoviesDataByName } from '@/services/api.service'

const Pagination = dynamic(() => import('@/components/Pagination'), {
  ssr: false,
})

type PropsParamsType = {
  searchParams?: { page?: string; query?: string }
}

const MoviesPage = async ({ searchParams }: PropsParamsType) => {
  const page = Number(searchParams?.page) || 1
  const query = searchParams?.query || ''
  const { results: movies, total_pages: totalPages } =
    await getMoviesDataByName(query, page)

  return (
    <div className='flex flex-col justify-items-center'>
      <Suspense key={query + page}>
        <MoviesList movies={movies} />
      </Suspense>

      <Pagination currentPage={page} totalPages={totalPages} />
    </div>
  )
}

export default MoviesPage
