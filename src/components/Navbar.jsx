import React from 'react'

export const Navbar = () => {
  return (
    <nav className='h-max py-2 flex justify-between items-center w-[80%] mx-auto'>
        <div className='w-[100px]'>
            <img src="public/logo.svg" alt="" />
        </div>
        <ul className='flex gap-5 px-10 text-white'>
            <li>Home</li>
            <li>About</li>
            <li>Projects</li>
            <li>Contact</li>
        </ul>
    </nav>
  )
}
