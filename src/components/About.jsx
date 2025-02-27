import { motion, useInView } from "framer-motion"
import React, { useRef } from 'react'

export const About = () => {
    const ref = useRef();
    const isInView = useInView( ref, { once: false, amount: 0.1 });
  return (
    <main className='w-[85%] mx-auto flex flex-col justify-center'>

        <motion.h1 className='text-3xl font-bold bg-gradient-to-r from-[#ff00cc] via-[#ac84ee] to-[#333399] bg-clip-text text-transparent bg-[length:200%_200%] text-center '
        ref={ref}
        initial={{ opacity: 0, y: 100 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        >About
        </motion.h1>

        <motion.p className='text-[#e1cef7] py-1 flex gap-3 items-center justify-center text-balance text-center'
        ref={ref}
        initial={{ opacity: 0, y: 100 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}> 
            <img src="public/sparkles-pink.png" alt="" className='w-4 h-4'/>
            Transforming ideas into digital experiences
            <img src="public/sparkles-pink.png" alt="" className='w-4 h-4'/>    
        </motion.p>


        {/* description */}
        <section className='flex items-center justify-between'>

            <div className='flex-1 space-y-5 mt-4'>
                <motion.h1 className='text-5xl font-bold bg-gradient-to-r from-[#ff00cc] via-[#ac84ee] to-[#333399] bg-clip-text text-transparent text-center lg:text-start'
                ref={ref}
                initial={{ opacity: 0, x: -100 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6 }}>Hello, I'm
                    <span className='block text-white text-[38px] py-2 lg:py-0 md:text-[44px] '>Sam Pacheco</span>
                </motion.h1>
                <motion.p className='text-white text-lg max-w-[625px] text-balance text-center lg:text-start'
                ref={ref}
                initial={{ opacity: 0, x: -100 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 }}>I am a Front End developer excited to apply my knowledge in the real world. I am looking for an opportunity where I can grow professionally, learn from experienced developers and contribute to meaningful projects.</motion.p>
                
                {/* btns  */}
                <div className='text-white font-semibold md:flex gap-5 mt-4 space-y-2 md:space-y-0 justify-center lg:justify-start'>
                    <motion.button className='w-full md:w-[200px] bg-linear-to-bl from-violet-500 to-fuchsia-500 py-2 rounded-[5px] md:rounded-md flex items-center justify-center gap-3 cursor-pointer'
                    ref={ref}
                    initial={{ opacity: 0, y: 100 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {} }
                    transition={{ duration: 0.6 }}
                    > <img src="public/cv.png" alt="" className='w-5'/>Download CV</motion.button>
                    <motion.button className='w-full md:w-[200px] py-2 rounded-[5px] md:rounded-md border border-violet-500 text-violet-300 flex items-center justify-center gap-3 cursor-pointer'
                    ref={ref}
                    initial={{ opacity: 0, y: 100 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {} }
                    transition={{ duration: 0.6, delay: 0.4 }}
                    ><img src="public/code-simple.png" alt="code-simple" className='w-5'/>View Projects</motion.button>
                </div>
            </div>

            {/* photo */}
            <motion.div className='hidden lg:block max-w-[430px] flex-1 bg-[url(public/magicpattern-blob-1739553109424.svg)] bg-cover bg-center'
            ref={ref}
            initial={{ opacity: 0, x: 100 }}
            animate={isInView ? { opacity: 1, x: 0 } : {} }
            transition={{ duration: 0.6 }}
            >
                <img src="public/Me.svg" alt="photo-me"/>
            </motion.div>
        
        </section>

        {/* projects / certifications / experiences */}
        <section className='md:flex gap-5 my-8 space-y-3'>
            <motion.article className='flex-1 h-max py-5 bg-[#1e324e] rounded-lg space-y-4'
            ref={ref}
            initial={{ opacity: 0, x:-100, y: 100 }}
            animate={isInView ? { opacity: 1, x: 0, y: 0 } : {} }
            transition={{ duration: 0.6 }}
            >
                <div className='flex justify-between px-5'>
                    <motion.div className='w-10 h-10 rounded-full bg-[#5674a0]'
                    ref={ref}
                    initial={{ opacity: 0, x: -100 }}
                    animate={isInView ? { opacity: [0, 0.4, 0.8, 1], x: 0 } : {} }
                    transition={{ duration: 0.6, delay: 0.3 }}>
                        <img src="public/tag.png" alt="" className='p-2' />
                    </motion.div>
                    <motion.h3 className='text-white text-4xl font-bold'
                    ref={ref}
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {} }
                    transition={{ duration: 0.6, delay: 0.3 }}>3</motion.h3>
                </div>
                <div className='px-5 flex items-end'>
                    <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {} }
                    transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        <h3 className='text-xl text-white font-semibold pb-1'> Total Projects </h3>
                        <p className='text-white tracking-tight'>Always learning and creating. I transform ideas into functional digital experiences.</p>
                    </motion.div>

                </div>
            </motion.article>

            {/* <article className='flex-1 h-[180px] py-5 bg-[#1e324e] rounded-lg space-y-4'>
                <div className='flex justify-between px-5'>
                    <div className='w-10 h-10 rounded-full bg-[#5674a0]'>
                        <img src="public/diploma.png" alt="" className='p-2' />
                    </div>
                    <h3 className='text-white text-4xl font-bold'>4</h3>
                </div>
                <div className='px-5 flex items-end'>
                    <div>
                        <h3 className='text-xl text-white font-semibold pb-1'> Certifications </h3>
                        <p className='text-white tracking-tight'>Innovation and constant growth to develop impactful and scalable web solutions.</p>
                    </div>
                </div>
            </article> */}

            {/* <article className='flex-1 h-max py-5 bg-[#1e324e] rounded-lg space-y-4'>
                <div className='flex justify-between px-5'>
                    <div className='w-10 h-10 rounded-full bg-[#5674a0]'>
                        <img src="public/globe.png" alt="" className='p-2' />
                    </div>
                    <h3 className='text-white text-4xl font-bold'>1</h3>
                </div>
                <div className='px-5 flex items-end'>
                    <div>
                        <h3 className='text-xl text-white font-semibold pb-1'> Experience </h3>
                        <p className='text-white tracking-tight'>I continue to explore and hone my ability to create impactful digital experiences.</p>
                    </div>
                </div>
            </article> */}
            <motion.article className='flex-1 h-max py-5 bg-[#1e324e] rounded-lg space-y-4'
            ref={ref}
            initial={{ opacity: 0, x:-100, y: 100 }}
            animate={isInView ? { opacity: 1, x: 0, y: 0 } : {} }
            transition={{ duration: 0.6 }}
            >
                <div className='flex justify-between px-5'>
                    <motion.div className='w-10 h-10 rounded-full bg-[#5674a0]'
                    ref={ref}
                    initial={{ opacity: 0, x: -100 }}
                    animate={isInView ? { opacity: [0, 0.4, 0.8, 1], x: 0 } : {} }
                    transition={{ duration: 0.6, delay: 0.3 }}>
                        <img src="public/globe.png" alt="" className='p-2' />
                    </motion.div>
                    <motion.h3 className='text-white text-4xl font-bold'
                    ref={ref}
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {} }
                    transition={{ duration: 0.6, delay: 0.3 }}>1</motion.h3>
                </div>
                <div className='px-5 flex items-end'>
                    <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {} }
                    transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        <h3 className='text-xl text-white font-semibold pb-1'> Experience </h3>
                        <p className='text-white tracking-tight'>I continue to explore and hone my ability to create impactful digital experiences.</p>
                    </motion.div>

                </div>
            </motion.article>
            
        </section>

    </main>
  )
}

