import { Movie } from '@/models/Movie'
import Image from 'next/image'
import React, { FC } from 'react'

type IProps = {
  src: string
  alt: string
}

const PosterPreview: FC<IProps> = ({ src, alt }) => {
  return (
    <div>
      <Image
        src={`https://image.tmdb.org/t/p/w500${src}`}
        alt={alt}
        className='rounded-md'
        width={200}
        height={200}
      />
    </div>
  )
}

export default PosterPreview
