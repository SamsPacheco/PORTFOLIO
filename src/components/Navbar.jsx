import React from 'react'

export const Navbar = () => {
  return (
    <nav className='h-max flex justify-between items-center w-[85%] mx-auto py-1'>
      {/* queda pendiente el buscar como retornar a secciones especificas con el navbar */}
        <div className='w-1/3 max-w-[105px]'>
            <img src="/logo.svg" alt="" />
        </div>

        {/* btn en movil */}
        <input type="checkbox" id='menu' className='peer hidden'/>
        <label htmlFor="menu" className='z-50 bg-[url(/menu-burger.png)] peer-checked:bg-[url(/cross-small.png)] peer-checked:w-9 transition-all w-7 h-7 bg-no-repeat bg-center bg-cover cursor-pointer md:hidden'></label>

        <div className='text-white fixed inset-0 bg-gradient-to-b from-[#04152D] to-[#092f63] translate-x-full peer-checked:translate-x-0 transition-transform md:static md:translate-x-0 md:bg-none peer-checked:h-screen'>
          <ul className='absolute inset-x-0 top-24 p-12 bg-[#0b274d] w-[85%] mx-auto rounded-md text-center grid gap-5 font-bold shadow-2xl md:flex-1 md:bg-transparent md:grid-flow-col md:static md:p-1'>
            <li>Home</li>
            <li>About</li>
            <li>Projects</li>
            <li>Contact</li>
          </ul>
        </div>

    </nav>
  )
}
