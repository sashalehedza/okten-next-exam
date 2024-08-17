import React from 'react'
import { getGenresData } from '@/services/api.service'
import GenreBadge from '@/components/GenreBadge'

export default async function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  const { genres } = await getGenresData()
  return (
    <div className='flex flex-col'>
      <div>
        <div className='w-full px-4'>
          <div className='flex max-w-full overflow-x-auto space-x-4 rounded-lg p-4 scrollbar-thin scrollbar-thumb-gray-400 px-4'>
            {genres.map((genre) => (
              <GenreBadge key={genre.id} genre={genre} />
            ))}
          </div>
        </div>
      </div>
      <main>{children}</main>
    </div>
  )
}
