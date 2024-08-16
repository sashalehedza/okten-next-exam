import React from 'react'
import dynamic from 'next/dynamic'
import MovieCard from '@/components/MovieCard'
import { getGenresData, getMoviesDataByGenre } from '@/services/api.service'

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
  const { results, total_pages: totalPages } = await getMoviesDataByGenre(
    id,
    page
  )
  const { genres } = await getGenresData()
  console.log(genres)

  return (
    <div className='flex flex-col justify-items-center'>
      <div className='w-full grid justify-center lg:grid-cols-5 lg:justify-around wrap gap-6 md:justify-around md:m-0 lg:w-full md:grid-cols-2 pt-4 pb-4'>
        {results.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
      <Pagination currentPage={page} totalPages={totalPages} />
    </div>
  )
}

export default MoviesPage
