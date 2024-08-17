'use client'

import { setTheme } from '@/app/store/slices/themeSlice'
import { useAppDispatch, useAppSelector } from '@/app/store/store'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FC } from 'react'
import { FaSun, FaMoon } from 'react-icons/fa'

const Header: FC = () => {
  const pathName = usePathname()
  const { theme } = useAppSelector((state) => state.theme)
  const dispatch = useAppDispatch()

  const toggleTheme = () => {
    dispatch(setTheme(theme === 'light' ? 'dark' : 'light'))
  }

  return (
    <header className='p-4 bg-light-background text-light-text dark:bg-dark-background dark:text-dark-text'>
      <nav className='flex justify-between items-center container mx-auto'>
        <div className='text-lg font-bold flex-grow'>
          <Link
            href='/'
            className={`mr-4 ${
              pathName === '/'
                ? 'text-light-primary dark:text-dark-primary'
                : ''
            }`}
          >
            Home
          </Link>
          <Link
            href='/movies'
            className={`mr-4 ${
              pathName === '/movies'
                ? 'text-light-primary dark:text-dark-primary'
                : ''
            }`}
          >
            Movies
          </Link>
          <Link
            href='/genres'
            className={`mr-4 ${
              pathName === '/genres'
                ? 'text-light-primary dark:text-dark-primary'
                : ''
            }`}
          >
            Genres
          </Link>
          <Link
            href='/search'
            className={`mr-4 ${
              pathName === '/search'
                ? 'text-light-primary dark:text-dark-primary'
                : ''
            }`}
          >
            Search
          </Link>
        </div>
        <button onClick={toggleTheme} className='text-2xl'>
          {theme === 'light' ? <FaMoon /> : <FaSun />}
        </button>
      </nav>
    </header>
  )
}

export default Header
