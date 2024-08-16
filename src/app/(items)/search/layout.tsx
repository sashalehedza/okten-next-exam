import SearchBar from '@/components/SearchBar'
import React from 'react'

type Props = { children: React.ReactNode }
const SearchLayout = ({ children }: Props) => {
  return (
    <div className={'w-full mx-auto content-center flex flex-col items-center'}>
      <h1 className={'text-6xl text-sky-600'}>Search Movies</h1>
      <div className={'flex justify-center m-8'}>
        <SearchBar />
      </div>
      <main>{children}</main>
    </div>
  )
}

export default SearchLayout
