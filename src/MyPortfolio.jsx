
import React, { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion, useInView } from "framer-motion"
import { About, ContactMe, Experience, Home, View01 } from './components'
import { Navbar } from './components/Navbar'


export const MyPortfolio = () => {

  // creamos referencias para cada seccion 
  const homeRef = useRef(null);
  const aboutRef = useRef(false);
  const experienceRef = useRef(null);
  const contactRef = useRef(null);

  // utilizamos useInView para detectar la visibilidad 
  const isHomeVisible = useInView(homeRef, {once:true});
  const isAboutVisible = useInView(aboutRef, {once:false});
  const isExperienceVisible = useInView(experienceRef, {once:false});
  const isContactVisible = useInView(contactRef, {once:true});


  const [showView01, setShowView01] = useState(true);
 

  useEffect(() => {

    setTimeout(() => {
      setShowView01(false);
    }, 2500); // Desaparece después de 2s
    //return () => clearTimeout(timer);

  }, []);



  return (
    <>

    

      <AnimatePresence>
        { showView01 && <View01/>}
      </AnimatePresence>
      {

          <AnimatePresence>
            <div>
              <header className='sticky top-0 my-nav'> <Navbar /> </header>

              <main className='space-y-3'>

                <motion.section
                  ref={homeRef}
                  initial={{ opacity: 0, y: 50 }}
                  animate={isHomeVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                  transition={{ duration:.5 }}>
                  <Home />  
                </motion.section>

                <motion.section
                  ref={aboutRef}
                  initial={{ opacity: 0, y: 50 }}
                  animate={isAboutVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                  transition={{ duration: 0.5 }}
                >
                  <About isVisible={isAboutVisible} />
                </motion.section>

                <motion.section
                  ref={experienceRef}
                  initial={{ opacity: 0, y: 50 }}
                  animate={isExperienceVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                  transition={{ duration:.5 }}
                >
                  <Experience isVisible={isExperienceVisible}/>
                </motion.section>

                <motion.section
                  ref={contactRef}
                  initial={{ opacity: 0, y: 50 }}
                  animate={isContactVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                  transition={{ duration:.5 }}
                >
                  <ContactMe />
                </motion.section>

                <footer className='h-8 mt-3 bg-[#114da168]'>
                  <p className='text-white text-lg text-center font-light'>@2025 SAMUEL PACHECO</p>
                </footer> 

              </main>
            </div>
            </AnimatePresence>
          
      } 
      
    </>
      
  )
}
