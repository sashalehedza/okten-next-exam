import React, { Suspense } from 'react'
import SearchBar from '@/components/SearchBar'

type Props = { children: React.ReactNode }
const SearchLayout = ({ children }: Props) => {
  return (
    <div className={'w-full mx-auto content-center flex flex-col items-center'}>
      <div className={'flex justify-center m-8'}>
        <Suspense fallback={<div>Loading...</div>}>
          <SearchBar />
        </Suspense>
      </div>
      <main>{children}</main>
    </div>
  )
}

export default SearchLayout
