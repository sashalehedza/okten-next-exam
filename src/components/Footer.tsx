import React from 'react'

const Footer = () => {
  return (
    <footer className='py-4 mt-2'>
      <div className='container mx-auto text-center'>
        <p>
          &copy; {new Date().getFullYear()} Sasha Lehedza. All rights reserved.
        </p>
        <p>
          <a href='/privacy-policy'>Privacy Policy</a>
          {' | '}
          <a href='/terms-of-service'>Terms of Service</a>
        </p>
      </div>
    </footer>
  )
}

export default Footer
