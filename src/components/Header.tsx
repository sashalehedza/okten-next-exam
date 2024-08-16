// components/Header.tsx
'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FC } from 'react'

const Header: FC = () => {
  let pathName = usePathname()
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
              pathName === '/movies' ? 'text-yellow-400' : ''
            }`}
          >
            Genres
          </Link>
        </div>
      </nav>
    </header>
  )
}

export default Header
