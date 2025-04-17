import React, { useState } from 'react'

export const Navbar = () => {
  const [isOpen, setisOpen] = useState(false)

  console.log(isOpen)


  return (
    <nav className='text-white fixed flex justify-between items-center h-20 transition-[.3s] w-[90%] mx-auto z-10 '>

        <figure className='w-1/3 max-w-[105px] relative'>
          <img src="/logo.svg" alt="logo" className='w-full'/>
        </figure>

        <div id='navMenu' className={`fixed top-[80px] left-0 flex justify-center items-center w-full min-h-[450px] h-[90dvh] transition-all duration-300 ease-in-out md:translate-x-0 md:h-10 md:min-h-0 ${isOpen ? 'translate-x-0 flex~' : 'translate-x-[100%] hidden'} bg-[#04152d] md:flex md:bg-transparent md:top-5`}>
          <ul className=' flex flex-col md:flex-row relative gap-10 font-semibold'>
            <li>
              <a href="#home">Home</a>
              {/* circulo cuando se este en esa seccion */}
              <div></div>
            </li>
            <li>
              <a href="#about">About</a>
              {/* circulo cuando se este en esa seccion */}
              <div></div>
            </li>
            <li>
              <a href="#projects">Projects</a>
              {/* circulo cuando se este en esa seccion */}
              <div></div>
            </li>
            <li>
              <a href="#contact">Contact</a>
              {/* circulo cuando se este en esa seccion */}
              <div></div>
            </li>
          </ul>
        </div>

          <button className='hidden bg-amber-50 text-[#04152D] rounded-md w-[180px] h-10 md:flex justify-center items-center gap-2'>Download CV
            <i className="uil uil-file-alt text-lg"></i>
          </button>
          {/* <i class="uil uil-file-alt"></i> */}

        {/* menu de hamburgesa */}
        <div className='md:hidden'>
          <i className="uil uil-bars text-3xl cursor-pointer" onClick={() => setisOpen(prev => !prev) }></i>
        </div>

    </nav>
  )
}
