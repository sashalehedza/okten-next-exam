import SearchBar from '@/components/SearchBar'
import React from 'react'

type Props = { children: React.ReactNode }
const SearchLayout = ({ children }: Props) => {
  return (
    <div className={'w-full mx-auto content-center flex flex-col items-center'}>
      <div className={'flex justify-center m-8'}>
        <SearchBar />
      </div>
      <main>{children}</main>
    </div>
  )
}

export default SearchLayout
