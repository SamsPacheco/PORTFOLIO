import React from 'react'

export const ContactMe = () => {
  return (
    <main className='space-y-4'>

      <div className='mx-auto my-4'>
        <h1 className='text-3xl md:text-[42px] font-bold bg-gradient-to-r from-[#ff00cc] via-[#ac84ee] to-[#333399] bg-clip-text text-transparent bg-[length:200%_200%] text-center'>
          Contact Me
        </h1>
        <p className='text-[#e1cef7] text-center py-1 text-lg md:text-[20px]'>Do you have any questions? Send me a message and I'll get back to you soon</p>
      </div>

      <section className='grid grid-cols-1 gap-6 md:[grid-template-columns:repeat(auto-fit,minmax(300px,1fr))] mt-12'>

        <article className='h-[315px]  text-[#c4ccd8] bg-[#1d3250] rounded-xl flex justify-center items-center'>
          <div className=' text-center px-3'>
            <h3 className='text-3xl font-semibold my-4 flex gap-3 justify-center items-center'>Find Me <i className="uil uil-corner-right-down text-xl"></i></h3>
            <p className='text-lg md:text-[20px] my-2'><i class="uil uil-envelope"></i> Mail: samuelpacheco234@gmail.com</p>
            <p className='text-lg md:text-[20px]'><i class="uil uil-phone-volume"></i> Tel: +503 74787618</p>
          </div>
        </article>

        <article className='h-max rounded-xl'>
          <form action="" className='flex flex-col gap-[10px] w-full text-amber-50'>
            <div className=' flex gap-[10px] w-full'>

              <input className='w-[50%] h-[55px] bg-transparent border border-[#AAA] p-[15px] outline-0 rounded-[5px]' type="text" placeholder='Name' />
              <input className='w-[50%] h-[55px] bg-transparent border border-[#AAA] p-[15px] outline-0 rounded-[5px]' type="text" placeholder='Email' />

            </div>
            <div className=''>
              <textarea className='w-full border border-[#AAA] py-[15px] px-[20px] h-[250px] resize-none rounded-[8px] outline-0' placeholder='Message'></textarea>
            </div>
            <div className='flex justify-center lg:justify-end'>
              <button className='bg-[#1D3250] w-[65%] lg:w-[20%] py-3 font-semibold flex justify-center items-center gap-2 rounded-md cursor-pointer'>Send <i class="uil uil-message"></i></button>
            </div>
          </form>
        </article>
      </section>


    </main>
  )
}
