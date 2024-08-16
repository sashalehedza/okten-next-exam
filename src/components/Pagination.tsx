'use client'
import React from 'react'
import { useRouter } from 'next/navigation'

type PaginationProps = {
  currentPage: number
  totalPages: number
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages }) => {
  const router = useRouter()

  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages) return
    const params = new URLSearchParams(window.location.search)
    params.set('page', page.toString())
    router.push(`?${params.toString()}`)
  }

  return (
    <div className='flex justify-center mt-4'>
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className='px-4 py-2 bg-gray-200 text-gray-800 rounded-md disabled:opacity-50'
      >
        Prev
      </button>
      <span className='mx-4'>{currentPage}</span>
      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className='px-4 py-2 bg-gray-200 text-gray-800 rounded-md disabled:opacity-50'
      >
        Next
      </button>
    </div>
  )
}

export default Pagination
