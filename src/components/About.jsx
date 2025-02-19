import React from 'react'

export const About = () => {
  return (
    <main className='w-[80%] mx-auto flex flex-col justify-center my-3'>

        <h1 className='text-3xl font-bold bg-gradient-to-r from-[#ff00cc] via-[#ac84ee] to-[#333399] bg-clip-text text-transparent bg-[length:200%_200%] text-center'>About
        </h1>

        <p className='text-[#e1cef7] py-1 flex gap-3 items-center justify-center'> 
            <img src="public/sparkles-pink.png" alt="" className='w-4 h-4'/>
            Transforming ideas into digital experiences
            <img src="public/sparkles-pink.png" alt="" className='w-4 h-4'/>    
        </p>

        {/* description */}
        <section className='flex items-center justify-between '>

            <div className='flex-1 space-y-5'>
                <h1 className='text-5xl font-bold bg-gradient-to-r from-[#ff00cc] via-[#ac84ee] to-[#333399] bg-clip-text text-transparent '>Hello, I'm
                    <h3 className='text-white text-[44px]'>Sam Pacheco</h3>
                </h1>
                <p className='text-white text-lg max-w-[625px]'>I am a Front End developer excited to apply my knowledge in the real world. I am looking for an opportunity where I can grow professionally, learn from experienced developers and contribute to meaningful projects.</p>
                
                {/* btns  */}
                <div className='text-white font-semibold flex gap-5 mt-4'>
                    <button className='w-[200px] bg-linear-to-bl from-violet-500 to-fuchsia-500 py-2 rounded-md flex items-center justify-center gap-3 cursor-pointer'> <img src="public/cv.png" alt="" className='w-5' />Download CV</button>
                    <button className='w-[200px] py-2 rounded-md border border-violet-500 text-violet-300 flex items-center justify-center gap-3 cursor-pointer'><img src="public/code-simple.png" alt="code-simple" className='w-5'/>View Projects</button>
                </div>
            </div>

            {/* photo */}
            <div className='xs:hidden lg:block max-w-[430px] flex-1 bg-[url(public/magicpattern-blob-1739553109424.svg)] bg-cover bg-center'>
                <img src="public/Me.svg" alt="photo-me"/>
            </div>
        
        </section>

        {/* projects / certifications / experiences */}
        <section className='flex gap-5'>
            <article className='flex-1 h-[180px] py-5 bg-[#1e324e] rounded-lg space-y-4'>
                <div className='flex justify-between px-5'>
                    <div className='w-10 h-10 rounded-full bg-[#5674a0]'>
                        <img src="public/tag.png" alt="" className='p-2' />
                    </div>
                    <h3 className='text-white text-4xl font-bold'>3</h3>
                </div>
                <div className='px-5 flex items-end'>
                    <div>
                        <h3 className='text-xl text-white font-semibold pb-1'> Total Projects </h3>
                        <p className='text-white tracking-tight'>Always learning and creating. I transform ideas into functional digital experiences.</p>
                    </div>

                </div>
            </article>

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

            <article className='flex-1 h-[180px] py-5 bg-[#1e324e] rounded-lg space-y-4 relative'>
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
            </article>
        </section>

    </main>
  )
}

