// components/Header.tsx
'use client'

import { setTheme } from '@/app/store/slices/themeSlice'
import { useAppDispatch, useAppSelector } from '@/app/store/store'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FC } from 'react'

const Header: FC = () => {
  let pathName = usePathname()
  const { theme } = useAppSelector((state) => state.theme)
  const dispatch = useAppDispatch()

  const toggleTheme = () => {
    if (theme === 'light') {
      dispatch(setTheme('dark'))
    } else {
      dispatch(setTheme('light'))
    }
  }
  return (
    <header className='bg-gray-800 text-white p-4'>
      <nav className='flex justify-between items-center container mx-auto'>
        <div className='text-lg font-bold'>
          <Link
            href='/'
            className={`mr-4 ${pathName === '/' ? 'text-yellow-400' : ''}`}
          >
            Home
          </Link>
          <Link
            href='/movies'
            className={`mr-4 ${
              pathName === '/movies' ? 'text-yellow-400' : ''
            }`}
          >
            Movies
          </Link>
          <Link
            href='/genres'
            className={`mr-4 ${
              pathName === '/genres' ? 'text-yellow-400' : ''
            }`}
          >
            Genres
          </Link>
          <Link
            href='/search'
            className={`mr-4 ${
              pathName === '/search' ? 'text-yellow-400' : ''
            }`}
          >
            Search
          </Link>
        </div>
      </nav>
      <button onClick={toggleTheme}>Toggle Theme</button>
      {theme}
    </header>
  )
}

export default Header
