import React from 'react'

export const ContactMe = () => {
  return (
    <main className='w-[85%] h-[80dvh] py-1  mx-auto flex flex-col justify-center'>

        <div className='mx-auto my-4'>
          <h1 className='text-3xl font-bold bg-gradient-to-r from-[#ff00cc] via-[#ac84ee] to-[#333399] bg-clip-text text-transparent bg-[length:200%_200%] text-center'>
              Contact Me
          </h1>
          <p className='text-[#e1cef7] text-center py-1'>Do you have any questions? Send me a message and I'll get back to you soon</p>
        </div>

        <section className='h-max rounded-md mx-auto bg space-y-5 w-full px-5'>

            <form className='bg-transparent space-y-3 mx-auto lg:px-20'>

              <div className='flex justify-center items-center border border-[#acacac] py-1 rounded-md gap-1 px-1'>
                <img src="/user.png" alt="user-icon" className='w-[30px] h-[30px] p-[6px]' />
                <input type="text" placeholder='Your Name' className='w-full text-white placeholder:px-2 focus:outline-none not-placeholder-shown:bg-transparent group-[input:-webkit-autofill]:bg-transparent' />
              </div>
                
              <div className='flex justify-center items-center border border-[#acacac] py-1 rounded-md gap-1 px-1'>
                <img src="/envelope.png" alt="user-icon" className='w-[30px] h-[30px] p-[6px]' />
                <input type="text" placeholder='Your Email' className='w-full text-white placeholder:px-2 focus:outline-none not-placeholder-shown:bg-transparent group-[input:-webkit-autofill]:bg-transparent' />
              </div>

              <div className='flex justify-center border border-[#acacac] py-1 rounded-md gap-1 px-1'>
                <img src="/messag.png" alt="user-icon" className='w-[30px] h-[30px] p-[6px]' />
                <textarea type="text" rows={5} placeholder='Type your Message' className='w-full text-white placeholder:px-2 focus:outline-none not-placeholder-shown:bg-transparent group-[input:-webkit-autofill]:bg-transparent' />
              </div>

                
                <button className='md:py-3 w-full mx-auto md:w-[200px] bg-linear-to-bl from-violet-500 to-fuchsia-500 py-2 rounded-md flex items-center justify-center gap-3 cursor-pointer text-white font-semibold my-5'>
                  <img src="/paper-plane.png" alt="paper-plane-icon" className='w-5' />
                  Send Message
                </button>



            </form>

        </section>
    </main>
  )
}
