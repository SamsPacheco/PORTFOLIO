import React from 'react'
import { motion } from "framer-motion"


export const Home = () => {
  return (
    <main className='w-[85%] mx-auto flex flex-col justify-center h-[88dvh]'>

        <section className='flex justify-between items-center'>

            {/* text */}
            <div className='flex-1 space-y-8 py-5'>

                <div>
                    <motion.p className='text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 bg-clip-text text-center lg:text-start' 
                    initial={{ opacity: [0, 0.4, 0.6, 1], y: 150 }} // Empieza abajo y oculto
                    animate={{ opacity: 1, y: 0 }} // Se posiciona en su lugar
                    transition={{
                        duration: 0.9,
                        ease: "easeOut",
                        delay: 1 * 0.8,
                    }}
                    > <img src="/sparkles.png" alt="" className='w-[25px] inline-block px-1' />Ready to innovate</motion.p>
                    
                    <motion.h2 className='text-5xl md:text-6xl font-bold text-white text-center lg:text-start'
                    initial={{ opacity: [0, 0.4, 0.6, 1], y: 150 }} // Empieza abajo y oculto
                    animate={{ opacity: 1, y: 0 }} // Se posiciona en su lugar
                    transition={{
                        duration: 0.9,
                        ease: "easeOut",
                        delay: 1 * 0.8,
                    }}
                    >FrontEnd <motion.span className='block text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 bg-clip-text'
                    initial={{ opacity: [0, 0.4, 0.6, 1], y: 150 }} // Empieza abajo y oculto
                    animate={{ opacity: 1, y: 0 }} // Se posiciona en su lugar
                    transition={{
                        duration: 0.9,
                        ease: "easeOut",
                        delay: 1 * 0.8,
                    }}
                    >Developer</motion.span>
                    </motion.h2>
                </div>

                <motion.p className='text-white text-pretty md:text text-center lg:text-start  text-xl'
                initial={{ opacity: [0, 0.4, 0.6, 1], y: 150 }} // Empieza abajo y oculto
                animate={{ opacity: 1, y: 0 }} // Se posiciona en su lugar
                transition={{
                    duration: 0.9,
                    ease: "easeOut",
                    delay: 1 * 0.8,
                }}
                >Creating innovative websites with elegant desing, optimized code and a focus on user experience for quality digital products.</motion.p>
                <div className='flex flex-wrap justify-center lg:justify-start gap-3 mt-4'>
                    <motion.span className='px-2 md:p-1 md:rounded-lg border border-gray-400 text-white/60 rounded-[3px] bg-gray-400/30'initial={{ opacity: [0, 0.4, 0.6, 1], y: 150 }} // Empieza abajo y oculto
                    animate={{ opacity: 1, y: 0 }} // Se posiciona en su lugar
                    transition={{
                        duration: 0.9,
                        ease: "easeOut",
                        delay: 1 * 0.8,
                    }}>React</motion.span>

                    <motion.span className='px-2 md:p-1 md:rounded-lg border border-gray-400 text-white/60 rounded-[3px] bg-gray-400/30'
                    initial={{ opacity: [0, 0.4, 0.6, 1], y: 150 }} // Empieza abajo y oculto
                    animate={{ opacity: 1, y: 0 }} // Se posiciona en su lugar
                    transition={{
                        duration: 0.9,
                        ease: "easeOut",
                        delay: 1 * 0.8,
                    }}>JavaScriptt</motion.span>

                    <motion.span className='px-2 md:p-1 md:rounded-lg border border-gray-400 text-white/60 rounded-[3px] bg-gray-400/30'
                    initial={{ opacity: [0, 0.4, 0.6, 1], y: 150 }} // Empieza abajo y oculto
                    animate={{ opacity: 1, y: 0 }} // Se posiciona en su lugar
                    transition={{
                        duration: 0.9,
                        ease: "easeOut",
                        delay: 1 * 0.8,
                    }}>Node Js</motion.span>

                    <motion.span className='px-2 md:p-1 md:rounded-lg border border-gray-400 text-white/60 rounded-[3px] bg-gray-400/30'
                    initial={{ opacity: [0, 0.4, 0.6, 1], y: 150 }} // Empieza abajo y oculto
                    animate={{ opacity: 1, y: 0 }} // Se posiciona en su lugar
                    transition={{
                        duration: 0.9,
                        ease: "easeOut",
                        delay: 1 * 0.8,
                    }}
                    >TailwindCss</motion.span>

                </div>

                {/* buttons */}
                <div className='py-2 md:flex space-y-2 md:space-y-0 md:gap-4 md:justify-center lg:justify-start'>
                    <motion.button className='text-white w-full md:w-40 py-3 bg-black rounded-md flex justify-center items-center gap-3 shadow-btns cursor-pointer'
                    initial={{ opacity: [0, 0.4, 0.6, 1], y: 150 }} // Empieza abajo y oculto
                    animate={{ opacity: 1, y: 0 }} // Se posiciona en su lugar
                    transition={{
                        duration: 0.9,
                        ease: "easeOut",
                        delay: 1 * 0.8,
                    }}>
                        projects
                        <img src="/arrow-up-right-from-square.png" alt="" className='w-[17px] inline-block' />
                    </motion.button>

                    <motion.button className='text-white w-full md:w-40 py-3 bg-black rounded-md flex justify-center items-center gap-3 shadow-btns cursor-pointer'
                    initial={{ opacity: [0, 0.4, 0.6, 1], y: 150 }} // Empieza abajo y oculto
                    animate={{ opacity: 1, y: 0 }} // Se posiciona en su lugar
                    transition={{
                        duration: 0.9,
                        ease: "easeOut",
                        delay: 1 * 0.8,
                    }}>
                        Contact
                        <img src="/envelope.png" alt="" className='w-[17px] inline-block'/>
                    </motion.button>
                </div>

                {/* networks */}
                <div className='flex gap-4 justify-center lg:justify-start'>
                    <motion.div className='w-9 h-9 bg-purple-500/20 rounded-xl flex justify-center items-center shadow-btns'
                    initial={{ opacity: [0, 0.4, 0.6, 1], y: 150 }} // Empieza abajo y oculto
                    animate={{ opacity: 1, y: 0 }} // Se posiciona en su lugar
                    transition={{
                        duration: 0.9,
                        ease: "easeOut",
                        delay: 1 * 0.8,
                    }}>
                        <img src="/Github_dark.svg" alt="" className='w-8 p-[5px]'/>
                    </motion.div>

                    <motion.div className='w-9 h-9 bg-purple-500/20 rounded-xl flex justify-center items-center shadow-btns'
                    initial={{ opacity: [0, 0.4, 0.6, 1], y: 150 }} // Empieza abajo y oculto
                    animate={{ opacity: 1, y: 0 }} // Se posiciona en su lugar
                    transition={{
                        duration: 0.9,
                        ease: "easeOut",
                        delay: 1 * 0.8,
                    }}>
                        <img src="/linkedin.png" alt="" className='w-8 p-[6px]'/>
                    </motion.div>

                    <motion.div className='w-9 h-9 bg-purple-500/20 rounded-xl flex justify-center items-center shadow-btns'
                    initial={{ opacity: [0, 0.4, 0.6, 1], y: 150 }} // Empieza abajo y oculto
                    animate={{ opacity: 1, y: 0 }} // Se posiciona en su lugar
                    transition={{
                        duration: 0.9,
                        ease: "easeOut",
                        delay: 1 * 0.8,
                    }}>
                        <img src="/envelope.png" alt="" className='w-8 p-[5px]'/>
                    </motion.div>
                </div>

            </div>

            {/* video */}
            <motion.div className='max-w-[750px] hidden lg:block mb-20'
            initial={{ opacity: [0, 0.4, 0.6, 1], y: -150 }} // Empieza abajo y oculto
            animate={{ opacity: 1, y: 0 }} // Se posiciona en su lugar
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
