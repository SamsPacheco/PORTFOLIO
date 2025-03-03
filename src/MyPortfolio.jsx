
import React, { useEffect, useState } from 'react'
import { AnimatePresence, motion } from "framer-motion"
import { About, ContactMe, Experience, Home, View01 } from './components'
import { Navbar } from './components/Navbar'


export const MyPortfolio = () => {

  const [showView01, setShowView01] = useState(true);

  useEffect(() => {
    setTimeout(() => setShowView01(false), 2500); // Desaparece después de 2s
  }, []);

  return (
    <>
      
      <AnimatePresence>
          {showView01 && <View01/>}
      </AnimatePresence> 
      
      {
        !showView01 && (
          <AnimatePresence>
            <motion.div initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}>
              <header className='sticky top-0 my-nav'> <Navbar /> </header>

              <main className='space-y-3'>

                <section>
                  <Home />  
                </section>

                <motion.section
                //  initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                //  transition={{ duration: 0.5 }}
                viewport={{ once: true, amount: .2, rootMain: "50px 0px" }}
                className='py-5'
                >
                  <About />
                </motion.section>

                <motion.section
                // initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1}}
                // transition={{ duration: 0.8 }}
                viewport={{ once: true, amount: 0.2, rootMain: "-150px 0px" }}>
                  <Experience />
                </motion.section>

                <motion.section
                // initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1}}
                // transition={{ duration: 0.8 }}
                viewport={{ once: true, amount: 0.2, rootMain: "-150px 0px" }}>
                  <ContactMe />
                </motion.section>
                <footer className='h-8 mt-3 bg-[#114da168]'>
                  <p className='text-white text-lg text-center font-light'>@2025 SAMUEL PACHECO</p>
                </footer>
              </main>
            </motion.div>
          </AnimatePresence>
          
        )
      } 
      
    </>
      
  )
}
