import React from 'react'
import { About, Experience, Home, View01 } from './components'
import { Navbar } from './components/Navbar'


export const MyPortfolio = () => {
  return (
    <>
        <View01/>
        <header className=''>
        <Navbar />
        </header>
        <Home/>
        <About />
        <Experience />
    </>
  )
}
