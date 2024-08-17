'use client'

import React from 'react'
import { Genre } from '@/models/Genre'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

type GenreCardProps = {
  genre: Genre
}

const GenreBadge: React.FC<GenreCardProps> = ({ genre }) => {
  const pathName = usePathname()
  return (
    <Link
      className={`shadow-md rounded-lg p-4 ${
        pathName === `/genres/${genre.id}`
          ? 'bg-sky-600 text-light-text'
          : 'bg-light-background text-light-text dark:bg-dark-background dark:text-dark-text'
      }`}
      href={`/genres/${genre.id}`}
    >
      <h2 className='text-lg font-semibold mt-2'>{genre.name}</h2>
    </Link>
  )
}

export default GenreBadge
