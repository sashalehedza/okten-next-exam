import React from 'react'
import Image from 'next/image'

const UserInfo = () => {
  return (
    <div className='flex items-center space-x-4 p-4'>
      <div className='flex-shrink-0'>
        <Image
          src='/sl.png'
          alt='User Avatar'
          width={40}
          height={40}
          className='w-10 h-10 rounded-full'
        />
      </div>

      <div className='flex-1'>
        <p className='text-lg font-semibold'>Sasha Lehedza</p>
      </div>
    </div>
  )
}

export default UserInfo
