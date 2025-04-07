import React from 'react'
import { motion } from "framer-motion"


export const Home = () => {

  return (
    <main className='w-[80%] mx-auto flex flex-col justify-center h-[90dvh]'>

        <section className='flex justify-between items-center '>

            {/* text */}
            <div className='flex-1 space-y-3 md:space-y-5'>

                <div>
                    <motion.p className='text-transparent bg-gradient-to-r from-purple-300 via-pink-500 to-blue-500 bg-clip-text text-center lg:text-start flex items-center justify-center py-2 lg:justify-start' 
                    initial={{ opacity: [0, 0.4, 0.6, 1], y: 150 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    transition={{
                        duration: 0.9,
                        ease: "easeOut",
                        delay: 1 * 0.8,
                    }}
                    > <img src="/sparkles.png" alt="" className='w-[25px] inline-block px-1' />Ready to innovate
                    </motion.p>
                    
                    <motion.h2 className='text-5xl md:text-8xl font-bold text-white text-center lg:text-start'
                    initial={{ opacity: [0, 0.4, 0.6, 1], y: 150 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    transition={{
                        duration: 0.9,
                        ease: "easeOut",
                        delay: 1 * 0.8,
                    }}
                    >FrontEnd <motion.span className='block text-transparent bg-gradient-to-r from-purple-300 via-pink-500 to-blue-500 bg-clip-text'
                    initial={{ opacity: [0, 0.4, 0.6, 1], y: 150 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    transition={{
                        duration: 0.9,
                        ease: "easeOut",
                        delay: 1 * 0.8,
                    }}
                    >Developer</motion.span>
                    </motion.h2>
                </div>

                <motion.p className='text-white md:text text-center lg:text-start text-balance text-xl'
                initial={{ opacity: [0, 0.4, 0.6, 1], y: 150 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{
                    duration: 0.9,
                    ease: "easeOut",
                    delay: 1 * 0.8,
                }}
                >Creating innovative websites with elegant desing, optimized code and a focus on user experience for quality digital products.</motion.p>
               {/* skills */}
                <div className='flex flex-wrap justify-center lg:justify-start gap-3 mt-4'>

                    <motion.div className='p-2 flex justify-center items-center md:rounded-lg border border-gray-300 text-white/80 rounded-[5px] bg-gray-300/30'
                    initial={{ opacity: [0, 0.4, 0.6, 1], y: 150 }} // Empieza abajo y oculto
                    animate={{ opacity: 1, y: 0 }} // Se posiciona en su lugar
                    transition={{
                        duration: 0.9,
                        ease: "easeOut",
                        delay: 1 * 0.9,
                    }}
                    >React</motion.div>

                    <motion.div className='p-2 flex justify-center items-center md:rounded-lg border border-gray-300 text-white/80 rounded-[5px] bg-gray-300/30'
                    initial={{ opacity: [0, 0.4, 0.6, 1], y: 150 }} // Empieza abajo y oculto
                    animate={{ opacity: 1, y: 0 }} // Se posiciona en su lugar
                    transition={{
                        duration: 0.9,
                        ease: "easeOut",
                        delay: 1 * 1,
                    }}
                    >JavaScript</motion.div>

                    <motion.div className='p-2 flex justify-center items-center md:rounded-lg border border-gray-300 text-white/80 rounded-[5px] bg-gray-300/30'
                    initial={{ opacity: [0, 0.4, 0.6, 1], y: 150 }} // Empieza abajo y oculto
                    animate={{ opacity: 1, y: 0 }} // Se posiciona en su lugar
                    transition={{
                        duration: 0.9,
                        ease: "easeOut",
                        delay: 1 * 1.1,
                    }}
                    >Node Js</motion.div>

                    <motion.div className='p-2 flex justify-center items-center md:rounded-lg border border-gray-300 text-white/80 rounded-[5px] bg-gray-300/30'
                    initial={{ opacity: [0, 0.4, 0.6, 1], y: 150 }} // Empieza abajo y oculto
                    animate={{ opacity: 1, y: 0 }} // Se posiciona en su lugar
                    transition={{
                        duration: 0.9,
                        ease: "easeOut",
                        delay: 1 * 1.2,
                    }}
                    >TailwindCss</motion.div>

                </div>

                {/* buttons */}

                <div className='text-white font-medium text-lg flex flex-col items-center space-y-2 md:gap-3 md:space-y-0 md:flex-row md:justify-center lg:justify-start md:items-center py-2'>
                    <button className='bg-black h-13 w-[275px] border border-white rounded-[8px] flex justify-center gap-5 items-center shadow-btns'>
                        projects
                        <img src="/arrow-up-right-from-square.png" alt="" className='w-[17px] inline-block' />
                    </button>

                    <button className='bg-black h-13 w-[275px] border border-white flex justify-center gap-5 items-center rounded-[8px] shadow-btns'>
                        Contact
                        <img src="/envelope.png" alt="" className='w-[17px] inline-block'/>
                    </button>
                </div>

                {/* networks */}
                <div className='flex gap-4 justify-center lg:justify-start'>
                    <motion.a className='w-9 h-9 md:w-12 md:h-12 bg-purple-500/20 rounded-xl flex justify-center items-center shadow-btns'
                    initial={{ opacity: [0, 0.4, 0.6, 1], y: 150 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    transition={{
                        duration: 0.9,
                        ease: "easeOut",
                        delay: 1 * 0.8,
                    }}
                    href='https://github.com/SamsPacheco'
                    >
                        <img src="/Github_dark.svg" alt="" className='w-8 p-[5px] md:p-[2px]'/>
                    </motion.a>

                    <motion.div className='w-9 h-9 md:w-12 md:h-12 bg-purple-500/20 rounded-xl flex justify-center items-center shadow-btns'
                    initial={{ opacity: [0, 0.4, 0.6, 1], y: 150 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    transition={{
                        duration: 0.9,
                        ease: "easeOut",
                        delay: 1 * 0.8,
                    }}
                    >
                        <img src="/linkedin.png" alt="" className='w-8 p-[6px] md:p-[4px]'/>
                    </motion.div>

                    <motion.div className='w-9 h-9 md:w-12 md:h-12 bg-purple-500/20 rounded-xl flex justify-center items-center shadow-btns'
                    initial={{ opacity: [0, 0.4, 0.6, 1], y: 150 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    transition={{
                        duration: 0.9,
                        ease: "easeOut",
                        delay: 1 * 0.8,
                    }}
                    >
                        <img src="/envelope.png" alt="" className='w-8 p-[5px] md:p-[3px]'/>
                    </motion.div>
                </div>

            </div>

            {/* video */}
            <motion.div className='max-w-[750px] scale-125 hidden lg:block mb-20 '
            initial={{ opacity: [0, 0.4, 0.6, 1], y: -150 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{
                duration: 0.9,
                ease: "easeOut",
                delay: 1 * 0.8,
            }}>
                <video src="/Portfolio_Animation.webm" autoPlay muted loop disablePictureInPicture ></video>
            </motion.div>

        </section>
    </main>
  )
}
