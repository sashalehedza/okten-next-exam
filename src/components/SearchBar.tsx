'use client'
import React from 'react'
import { FaSearch } from 'react-icons/fa'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'

const SearchBar = ({ placeholder }: { placeholder: string }) => {
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
    }
    replace(`${pathname}?${params.toString()}`)
  }
  return (
    <form className={'w-[600px] relative'}>
      <label htmlFor='search' className={'sr-only'}>
        {' '}
        Search{' '}
      </label>
      <div className={'relative'}>
        <input
          className={
            'w-full text-lg p-4 rounded-full bg-slate-800 placeholder:italic placeholder:text-slate-400 block border border-slate-300  shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm'
          }
          placeholder={placeholder}
          type='text'
          name='search'
          onChange={(e) => {
            handleSearch(e.target.value)
          }}
          defaultValue={searchParams.get('query')?.toString()}
        />
        <button
          className={
            'invisible sm:visible  absolute right-1 top-1/2 -translate-y-1/2 p-4 rounded-full bg-slate-900'
          }
        >
          <FaSearch />
        </button>
      </div>
    </form>
  )
}

export default SearchBar
