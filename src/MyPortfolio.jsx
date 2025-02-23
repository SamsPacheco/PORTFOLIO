
import React, { useEffect } from 'react'
import { About, ContactMe, Experience, Home, View01 } from './components'
import { Navbar } from './components/Navbar'


export const MyPortfolio = () => {


  return (
    <>
      <View01 />
      <header className='sticky top-0 my-nav'>
      <Navbar />
      </header>
      <main className='space-y-1 md:space-y-10'>
        <Home />
        <About/>
        <Experience />
        <ContactMe />
        <footer className='h-8 my-3'>
          <p className='text-white text-lg text-center font-light'>@2025 SAMUEL PACHECO</p>
        </footer>
      </main>
    </>
  )
}
