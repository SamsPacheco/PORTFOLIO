
export const View01 = () => {
  return (
    <>
        <main className="w-full h-screen bg-[#04152D] flex justify-center items-center">
            <section className="max-w-[80%] h-[200px] flex flex-col justify-center items-center space-y-[15px]">
                {/* icons */}
                <div className=" flex gap-5">

                    <div className="md:w-11 md:h-11 w-6 h-6 rounded-full bg-[#21395c] md:p-[10px] p-1 shadow-btns">
                        <img src="public/code-window.png" alt=""/>
                    </div>

                    <div className="md:w-11 md:h-11 w-6 h-6 rounded-full bg-[#21395c] md:p-[10px] p-1 shadow-btns">
                        <img src="public/user.png" alt="" className="w-full h-full"/>
                    </div>

                    <div className="md:w-11 md:h-11 w-6 h-6 rounded-full bg-[#21395c] md:p-[10px] p-1 shadow-btns">
                        <img src="public/Github_dark.svg" alt=""/>
                    </div>
                    
                </div>

                {/* Welcome To My / Portfolio Website */}
                <div>
                    <h1 className="text-white text-2xl md:text-5xl font-semibold text-center">
                        Welcome To My 
                        <sapn className="block text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 bg-clip-text font-bold ">Portfolio Website</sapn>
                    </h1>
                </div>

            </section>
        </main>
    </>
  )
}
