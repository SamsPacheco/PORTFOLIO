import React from 'react'
import { motion } from "motion/react"


export const Home = () => {
    return (
        <div className='flex flex-col justify-center h-[87dvh] md:h-[88dvh]' id='home'>

            <section className='flex justify-center items-center'>

                {/* text */}
                <motion.div className='flex-1 space-y-8 py-5 md:py-10'
                    initial={{y: -100, opacity: 0}}
                    animate= {{y: 0, opacity: 1}}
                    transition={{ duration: .8, ease: "easeInOut", delay: .8}} 
                >

                    <div>
                        <p className='text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 bg-clip-text text-center lg:text-start border text-lg'>
                            {/* <img src="/sparkles.png" alt="" className='w-[25px] inline-block px-1' /> */}
                            <i className="uil uil-rocket px-2"></i>
                            Ready to innovate
                        </p>
                        <h2 className='text-6xl md:text-[90px] font-bold text-white text-center lg:text-start'>
                            FrontEnd
                            <span className='block text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 bg-clip-text md:text-[100px]'>Developer.</span>
                        </h2>
                    </div>

                    <p className='text-white md:text-balance lg:text-wrap text-center lg:text-start text-lg md:text-[20px]'

                    >Creating innovative websites with elegant desing, optimized code and a focus on user experience for quality digital products.</p>
                    <div className='flex flex-wrap justify-center lg:justify-start gap-2 mt-4'>
                        <span className='px-3 md:p-2 md:rounded-lg border border-gray-400 text-white/60 rounded-[3px] bg-gray-400/30' initial={{ opacity: [0, 0.4, 0.6, 1], y: 150 }} // Empieza abajo y oculto
                        >React</span>

                        <span className='px-3 md:p-2 md:rounded-lg border border-gray-400 text-white/60 rounded-[3px] bg-gray-400/30'
                        >JavaScript</span>

                        <span className='px-3 md:p-2 md:rounded-lg border border-gray-400 text-white/60 rounded-[3px] bg-gray-400/30'
                        >Node Js</span>

                        <span className='px-3 md:p-2 md:rounded-lg border border-gray-400 text-white/60 rounded-[3px] bg-gray-400/30'

                        >TailwindCss</span>

                    </div>

                    {/* buttons */}
                    <div className='py-2 md:flex space-y-2 md:space-y-0 md:gap-4 md:justify-center lg:justify-start font-semibold'>
                        <button className='text-white w-[80%] mx-auto md:w-60 md:m-0 py-3 bg-black rounded-md flex justify-center items-center gap-3 shadow-btns cursor-pointer'
                        >
                            Hire Me
                        </button>

                        <a href="https://drive.google.com/file/d/1tUyY5TaDnqwZqN5gWxmWPEfSdq1DB0Pq/view?usp=sharing" target="_blank" rel="noopener noreferrer"  className='text-white w-[80%] mx-auto md:w-60  md:m-0 py-3 bg-black rounded-md flex justify-center items-center gap-3 shadow-btns cursor-pointer'
                        >
                            Download CV
                            <i className="uil uil-import"></i>
                        </a>
                    </div>

                    {/* networks */}
                    <div className='flex gap-4 justify-center lg:justify-start text-white'>
                        <a href='https://github.com/SamsPacheco' target='_blank' className='w-9 h-9 md:w-12 md:h-12 bg-purple-500/20 rounded-xl flex justify-center items-center shadow-btns'
                        >
                            <i className="uil uil-github text-[24px] md:text-3xll"></i>
                        </a>

                        <a href='https://www.linkedin.com/in/samuel-pacheco-858227246/' target='_blank' className='w-9 h-9 md:w-12 md:h-12 bg-purple-500/20 rounded-xl flex justify-center items-center shadow-btns'
                        >
                            <i className="uil uil-linkedin text-[22px] md:text-3xl"></i>
                        </a>

                        {/* <div className='w-9 h-9 md:w-12 md:h-12 bg-purple-500/20 rounded-xl flex justify-center items-center shadow-btns'
                        >
                            <i className="uil uil-envelope text-[24px] md:text-3xl"></i>
                        </div> */}
                    </div>

                </motion.div>

                {/* img */}
                <motion.div className='hidden lg:block mb-20 w-[1000px] '
                    initial={{y: -100, opacity: 0}}
                    animate= {{y: 0, opacity: 1}}
                    transition={{ duration: .8, ease: "easeInOut", delay: .8}} 
                >
                    <video src="/Portfolio_Animation.webm" autoPlay muted loop disablePictureInPicture className='w-full' ></video>
                </motion.div>

            </section>
        </div>
    )
}
