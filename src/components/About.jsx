import React, { useRef } from 'react'


export const About = () => {

    return (
        <main className='flex flex-col justify-center '>

            <h1 className='text-3xl md:text-[42px] font-bold bg-gradient-to-r from-[#ff00cc] via-[#ac84ee] to-[#333399] bg-clip-text text-transparent bg-[length:200%_200%] text-center '
            >About
            </h1>

            <p className='text-[#e1cef7] py-1 flex items-start justify-center text-center text-lg md:text-[20px] md:gap-3'>
                <i className="uil uil-lightbulb-alt text-xl ml-3"></i>
                Transforming ideas into digital experiences
                <i className="uil uil-lightbulb-alt text-xl mr-3"></i>
            </p>


            {/* description */}
            <section className='flex items-center lg:justify-between md:mt-3'>

                <div className='space-y-5 mt-4  lg:w-[50%] '>
                    <h1 className='text-5xl md:text-7xl font-bold bg-gradient-to-r from-[#ff00cc] via-[#ac84ee] to-[#333399] bg-clip-text text-transparent text-center lg:text-start'
                    >Hello, I'm
                        <span className='block text-white text-[50px] py-2 lg:py-0 md:text-[75px] '>Sam Pacheco.</span>
                    </h1>
                    <p className='text-white text-lg md:text-[20px] text-balance md:text-wrap text-center lg:text-start mx-auto lg:mx-0 '
                    >I am a Front End developer excited to apply my knowledge in the real world. I am looking for an opportunity where I can grow professionally, learn from experienced developers and contribute to meaningful projects.</p>

                    {/* btns  */}
                    <div className='text-white font-semibold md:flex gap-5 mt-4 space-y-4 md:space-y-0 justify-center lg:justify-start'>

                        <button className='w-[85%] mx-auto md:mx-0 md:w-[220px] md:py-3 bg-linear-to-bl from-violet-500 to-fuchsia-500 py-2 rounded-[5px] md:rounded-md flex items-center justify-center gap-3 cursor-pointer'
                        >
                            <i className="uil uil-comment-alt-check text-2xl"></i> Contact Me
                        </button>

                        <button className='w-[85%] mx-auto md:mx-0 md:w-[220px] py-2 md:py-3 rounded-[5px] md:rounded-md border border-violet-500 text-violet-300 flex items-center justify-center gap-3 cursor-pointer'
                        >
                            <img src="/code-simple.png" alt="code-simple" className='w-5' />View Projects
                        </button>
                    </div>
                </div>

                {/* photo */}
                <div className='hidden w-[370px] md:w-[500px] md:h-[500px] lg:block egg-effect md:mr-[20px] '
                >
                    <img src="/Me.svg" alt="photo-me"/>
                </div>

            </section>

            {/* projects / certifications / experiences */}
            <section className='md:flex gap-5 mt-8 space-y-5 '>
                <article className='flex-1 h-max py-5 bg-[#1e324e] rounded-lg space-y-4'
                >
                    <div className='flex justify-between px-5'>
                        <div className='w-10 h-10 rounded-full bg-[#5674a0]'>
                            <img src="/tag.png" alt="" className='p-2' />
                        </div>
                        <h3 className='text-white text-4xl md:text-[42px] font-bold'
                        >
                            ...
                        </h3>
                    </div>
                    <div className='px-5 flex items-end'>
                        <div>
                            <h3 className='text-xl text-white font-semibold pb-1 md:text-2xl'> Total Projects </h3>
                            <p className='text-white tracking-tight text-lg md:text-[20px]'>Always learning and creating. I transform ideas into functional digital experiences.</p>
                        </div>

                    </div>
                </article>

                <article className='flex-1 h-max py-5 bg-[#1e324e] rounded-lg space-y-4'
                >
                    <div className='flex justify-between px-5'>
                        <div className='w-10 h-10 rounded-full bg-[#5674a0]'>
                            <img src="/globe.png" alt="" className='p-2' />
                        </div>
                        <h3 className='text-white text-4xl font-bold md:text-[42px]'
                        >
                            1
                        </h3>
                    </div>
                    <div className='px-5 flex items-end'>
                        <div
                        >
                            <h3 className='text-xl text-white font-semibold pb-1 md:text-2xl'> Experience </h3>
                            <p className='text-white tracking-tight text-lg md:text-[20px]'>I continue to explore and hone my ability to create impactful digital experiences.</p>
                        </div>

                    </div>
                </article>

            </section>

        </main>
    )
}

