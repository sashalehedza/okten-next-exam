import React from 'react'
import { Genre } from '@/models/Genre'
import Link from 'next/link'

type GenreCardProps = {
  genre: Genre
}

const GenreBadge: React.FC<GenreCardProps> = ({ genre }) => {
  return (
    <Link
      className='bg-white shadow-md rounded-lg p-4'
      href={`/genres/${genre.id}`}
    >
      <h2 className='text-lg font-semibold mt-2'>{genre.name}</h2>
    </Link>
  )
}

export default GenreBadge
