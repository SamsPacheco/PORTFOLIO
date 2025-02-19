import React from 'react'

export const Home = () => {
  return (
    <main className='w-[80%] mx-auto flex flex-col justify-center h-[85dvh]'>

        <section className='flex justify-between items-center py-10'>

            {/* text */}
            <div className='flex-1 space-y-5'>
                <span className='text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 bg-clip-text'> <img src="public/sparkles.png" alt="" className='w-[25px] inline-block px-1' />Ready to innovate</span>
                <h2 className='text-6xl font-bold text-white'>FrontEnd <span className='block text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 bg-clip-text'>Developer</span></h2>
                <p className='text-white'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam cupiditate id optio tenetur modi quae.</p>
                <div className='flex gap-3 mt-4'>
                    <span className='p-2 border border-gray-400 text-white/60 rounded-lg bg-gray-400/30'>React</span>
                    <span className='p-2 border border-gray-400 text-white/60 rounded-lg bg-gray-400/30'>JavaScript</span>
                    <span className='p-2 border border-gray-400 text-white/60 rounded-lg bg-gray-400/30'>Node Js</span>
                    <span className='p-2 border border-gray-400 text-white/60 rounded-lg bg-gray-400/30'>Tailwind</span>
                </div>

                {/* buttons */}
                <div className='py-2 flex gap-4'>
                    <button className='text-white w-40 py-2 bg-black rounded-md flex justify-center items-center gap-3'>
                        projects
                        <img src="public/arrow-up-right-from-square.png" alt="" className='w-[17px] inline-block' />
                    </button>

                    <button className='text-white w-40 py-2 bg-black rounded-md flex justify-center items-center gap-3'>
                        Contact
                        <img src="public/envelope.png" alt="" className='w-[17px] inline-block'/>
                    </button>
                </div>

                {/* networks */}
                <div className='flex gap-4'>
                    <div className='w-9 h-9 bg-purple-500/20 rounded-xl flex justify-center items-center shadow-btns'>
                        <img src="public/Github_dark.svg" alt="" className='w-5'/>
                    </div>

                    <div className='w-9 h-9 bg-purple-500/20 rounded-xl flex justify-center items-center shadow-btns'>
                        <img src="public/linkedin.png" alt="" className='w-5'/>
                    </div>
                </div>


            
            
            
            </div>

            {/* img */}
            <div className='max-w-[650px]'>
                <video src="public/Portfolio_Animation.webm" autoPlay muted loopc disablePictureInPicture ></video>
                {/* <video src="public/vecteezy_isometric-computer-technology-animation-desktop-computer_48039160.webm" autoPlay muted loopc className='w-[1100px]'></video> */}
            </div>

        </section>
    </main>
  )
}
