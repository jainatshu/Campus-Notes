import React from 'react'

function Logo({width = '50px'}) {
  return (
    <div className='flex gap-2 items-center justify-start p-3'>
        <img
        style={{ width }} 
        className='rounded-lg shadow-md hover:shadow-lg duration-200'
        src="src/Logo.webp" alt="" />
        <h1 className=' font-bold text-5xl text-amber-600'>Campus Notes</h1>
    </div>
  )
}

export default Logo;