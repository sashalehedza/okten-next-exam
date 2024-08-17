'use client'
import React from 'react'
import { FaSearch } from 'react-icons/fa'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'

const SearchBar = () => {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const { replace } = useRouter()

  const handleSearch = (word: string) => {
    const params = new URLSearchParams(searchParams)
    params.set('page', '1')
    if (word) {
      params.set('query', word)
    } else {
      params.delete('query')
      params.delete('page')
    }
    replace(`${pathname}?${params.toString()}`)
  }

  return (
    <div className='flex items-center border border-gray-300 rounded-full px-4 py-2 shadow-md'>
      <FaSearch className='text-gray-500 mr-3' />
      <input
        className='flex-grow outline-none text-gray-700'
        placeholder={'Search Movies ...'}
        type='text'
        onChange={(e) => handleSearch(e.target.value)}
        defaultValue={searchParams.get('query') ?? ''}
      />
    </div>
  )
}

export default SearchBar
