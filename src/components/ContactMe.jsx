import React from 'react'

export const ContactMe = () => {
  return (
    <main className='h-max pb-10 w-[80%] mx-auto'>
        <h1 className='text-3xl font-bold bg-gradient-to-r from-[#ff00cc] via-[#ac84ee] to-[#333399] bg-clip-text text-transparent bg-[length:200%_200%] text-center'>
            Contact Me
        </h1>
        <p className='text-[#e1cef7] text-center py-1'>Do you have any questions? Send me a message and I'll get back to you soon</p>

        <section className='max-w-[900px] h-max py-5 rounded-md mx-auto bg'>

            <form className='px-10 bg-transparent space-y-3'>

              <div className='flex justify-center items-center border border-[#acacac] py-1 rounded-md gap-1 px-1'>
                <img src="public/user.png" alt="user-icon" className='w-[30px] h-[30px] p-[6px]' />
                <input type="text" placeholder='Your Name' className='w-full text-white placeholder:px-2 focus:outline-none' />
              </div>
                
              <div className='flex justify-center items-center border border-[#acacac] py-1 rounded-md gap-1 px-1'>
                <img src="public/envelope.png" alt="user-icon" className='w-[30px] h-[30px] p-[6px]' />
                <input type="text" placeholder='Your Email' className='w-full text-white placeholder:px-2 focus:outline-none' />
              </div>

              <div className='flex justify-center border border-[#acacac] py-1 rounded-md gap-1 px-1'>
                <img src="public/messag.png" alt="user-icon" className='w-[30px] h-[30px] p-[6px]' />
                <textarea type="text" rows={5} placeholder='Your Message' className='w-full text-white placeholder:px-2 focus:outline-none' />
              </div>
                
            </form>

        </section>
    </main>
  )
}
